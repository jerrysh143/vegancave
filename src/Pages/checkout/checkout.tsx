import React, { useEffect, useState } from "react";
import {
  applyVoucher,
  createOrder,
  createTransaction,
} from "../../services/auth";
import useRazorpay from "react-razorpay";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Types/otherTypes";
import { Product } from "../../components/ProductsWrap/ProductsWrap";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAME } from "../typesRoute";
import { TOAST_TYPE, notify } from "../../utils/utils";
import { clearCart } from "../../redux/slices/cartSlice";

function CheckoutPage() {
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedVoucher, setAppliedVoucher] = useState("");

  const [Razorpay]: any = useRazorpay();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    const subtotal = cart.reduce(
      (total, item: { product: Product; quantity: number }) =>
        total + item.product.price * item.quantity,
      0
    );
    return subtotal - discount;
  };

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const razorpayHandler = async () => {
    const data = {
      products: cart,
      total_price: totalPrice,
      voucher: appliedVoucher,
    };
    const response = await createOrder(data);
    if (response.status) {
      const order_id = response.data.id;
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        name: "VeganCave",
        description: "Food",
        image: `${process.env.REACT_APP_API_URL}/media/default/logo_vegan_cave.png`,
        order_id: order_id,
        handler: async function (response: any) {
          // create transaction of order
          const data = {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };
          const api_response = await createTransaction(data);
          if (api_response.status) {
            notify(TOAST_TYPE.SUCCESS, "Order placed successfully");
          } else {
            notify(TOAST_TYPE.ERROR, "something went wrong");
          }
          navigate(ROUTE_NAME.HOME);
          dispatch(clearCart());
        },
        prefill: {
          name: "xyz",
          email: "xyz@mail.com",
          contact: "9898989898",
        },
        theme: {
          color: "#2BB672",
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response: any) {
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
        notify(TOAST_TYPE.ERROR, "Oops! something went wrong");
        navigate(ROUTE_NAME.HOME);
        dispatch(clearCart());
      });

      rzp1.open();
    }
  };

  const applyVoucherHandler = async () => {
    const data = { voucher: voucher, totalPrice: totalPrice };
    const response = await applyVoucher(data);
    if (response.status) {
      notify(TOAST_TYPE.SUCCESS, response.message);
      setAppliedVoucher(response.data);
      setDiscount(
        parseInt(((response.data.discount / 100) * totalPrice).toFixed(2))
      );
    } else {
      notify(TOAST_TYPE.ERROR, response.message);
      setVoucher("");
    }
  };

  useEffect(() => {
    if (totalQuantity == 0) {
      navigate(ROUTE_NAME.STORE);
    }
    if (!isLoggedIn) {
      navigate(ROUTE_NAME.LOGIN);
    }
  }, [totalQuantity]);

  const removeVoucher = () => {
    setVoucher("");
    setDiscount(0);
    setAppliedVoucher("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>

      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        {/* Product List */}
        {cart.map((item: { product: Product; quantity: number }) => (
          <div
            key={item.product.id}
            className="flex justify-between items-center mb-2"
          >
            <div>{item.product.title}</div>
            <div>
              ${item.product.price} x {item.quantity}
            </div>
          </div>
        ))}

        {/* Cart Summary */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
          <div>
            Subtotal: ${calculateTotalPrice()} ({cart.length} items)
          </div>
          <div>
            Voucher:
            {discount ? (
              <span>{voucher}</span>
            ) : (
              <input
                className="bg-green-200 p-2 m-2 border-collapse rounded-md"
                type="text"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
              />
            )}
            <button
              className="text-green-500 py-2 px-4 rounded-md hover:bg-green-400 hover:text-white"
              onClick={() => {
                {
                  if (voucher.length > 0) {
                    applyVoucherHandler();
                  }
                }
              }}
            >
              Apply
            </button>
            <button
              className="text-red-500 py-2 px-4 rounded-md"
              onClick={removeVoucher}
            >
              Clear
            </button>
          </div>
          <div>Discount: ${discount}</div>
          <div>Total: ${calculateTotalPrice()}</div>
        </div>

        {/* Payment Options */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Payment Options</h2>
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              onClick={razorpayHandler}
            >
              RazorPay
            </button>
            {/* Add more payment options */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
