import React, { useEffect, useState } from "react";
import Button from "../../components/Buttons/buttonHome";
import BannerImage from "../../images/storeImageBanner.jpg";
import ProductsWrap, {
  Product,
} from "../../components/ProductsWrap/ProductsWrap";
import ButtonArrow from "../../components/Buttons/buttonArrow";
import { getProductCategories, getProducts } from "../../services/auth";
import { TOAST_TYPE, notify } from "../../utils/utils";
import PhoneIcon from "../../images/Icons/phone.svg"
import LocationIcon from "../../images/Icons/location.svg"
import EmailIcon from "../../images/Icons/email.svg"

interface Category {
  id: number;
  name: string;
}

const Store = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const filterProducts = (category: Category) => {
    if (category.name === "all") {
      setFilteredProducts(products);
      return;
    }
    const result = products.filter((product: Product) =>
      product.categories.includes(category.id)
    );
    setFilteredProducts(result);
  };

  const handleScroll = () => {
    const element = document.getElementById("menu_list");
    if (element) {
      var headerOffset = 50;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchProductAndCategories = async () => {
      // fetch categories
      const categoriesResponse = await getProductCategories();
      if (categoriesResponse.status) {
        setCategories(categoriesResponse.data);
      } else {
        notify(TOAST_TYPE.ERROR, categoriesResponse.message);
      }

      // fetch products
      const productResponse = await getProducts();
      if (productResponse.status) {
        setProducts(productResponse.data);
        setFilteredProducts(productResponse.data);
      } else {
        notify(TOAST_TYPE.ERROR, productResponse.message);
      }
    };

    fetchProductAndCategories();
  }, []);
  document.body.classList.toggle("storePage");
  return (
    <>
      <div className="py-30px md:py-70px">
        <div className="w-full max-w-full 1600:w-[1530px] mx-auto px-15px">
          <div className="flex flex-wrap flex-col-reverse md:flex-row items-center -mx-15px clear-both">
            <div className="w-full md:w-6/12 px-15px">
              <h1 className="text-[50px] leading-[50px] lg:text-[90px] lg:leading-[90px] xl:text-[120px] xl:leading-[140px] font-bold pb-20px">
                Want the best deals?
              </h1>
              <p className="text-20 md:text-26 pb-20px">
                Tavern is simply the better choice when it comes to freshly
                made, convenient and affordable food.
              </p>
              <div className="">
                <Button
                  onClick={() => handleScroll()}
                  Title="Scroll Down"
                  className="btn--border btn-read btn--animated w-[140px] sm:w-[200px] xl:w-[200px] h-[47px] sm:h-[66px] xl:h-[76px] text-16 md:text-20 lg:text-32 sm:text-18 xl:text-20 leading-normal font-bold rounded-15px"
                />
              </div>
            </div>
            <div className="w-full md:w-6/12 px-15px pb-30px md:pb-0">
              <img
                className="mx-auto w-full h-[300px] md:h-full object-cover rounded-none md:rounded-[24px] shadow-lg"
                src={BannerImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-70px" id="menu_list">
        <div className="w-full max-w-full 1600:w-[1530px] mx-auto px-15px">
          <div className="flex flex-wrap flex-col items-center -mx-15px clear-both pb-30px md:pb-50px lg:pb-100px">
            <div className="w-full px-15px text-center">
              <h2 className="text-26 leading-26 md:text-48 md:leading-48 font-bold pb-[56px]">
                Find the delicious foods for you
              </h2>
              <ul className="flex flex-nowrap pb-20px md:flex-wrap justify-start md:justify-center gap-10px lg:gap-x-25px md:gap-y-25px overflow-x-auto overflow-y-hidden">
                <li key={0}>
                  <div
                    className="cursor-pointer hover:text-white active:text-white hover:bg-primaryColor/70 active:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                    onClick={() => filterProducts({ id: 0, name: "all" })}
                  >
                    All
                  </div>
                </li>
                {categories.map((category: Category) => (
                  <li key={category.id}>
                    <div
                      className="cursor-pointer hover:text-white hover:bg-primaryColor/70 btn-animated hover:border-primaryColor text-14 leading-14 md:text-16 md:leading-16 lg:text-20 lg:leading-20 xl:text-24 xl:leading-24 w-auto md:w-[180px] xl:w-[217px] p-20px md:p-0 h-30px md:h-60px xl:h-70px flex justify-center items-center border-[1px] border-black rounded-[40px]"
                      onClick={() => filterProducts(category)}
                    >
                      {category.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center -mx-15px clear-both">
            <ProductsWrap products={filteredProducts} title="Product" />
            <div className="w-full flex justify-center pt-20px">
              <ButtonArrow className="text-center" Title="Load More" />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-40px">
        <div className="px-15px w-full max-w-full focus:outline-none 1600:w-[1530px] mx-auto">
          <div className="flex flex-wrap items-center bg-primaryColor bg-opacity-[0.08] rounded-20px py-[36px]">
            <div className="w-4/12 py-[36px] pl-60px border-primaryColor border-r-[1px]">
              <div className="flex items-center gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  <img src={PhoneIcon} alt="" />
                </div>
                <div>
                  <div className="text-32 leading-[120%] pb-10px">Phone</div>
                  <a className="text-[20px] leading-[28px]" href="#!">
                    +91-843-672-431
                  </a>
                </div>
              </div>
            </div>
            <div className="w-4/12 flex py-[36px] pl-60px border-primaryColor border-r-[1px]">
              <div className="flex items-center gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  <img src={LocationIcon} alt="" />
                </div>
                <div>
                  <div className="text-32 leading-[120%] pb-10px">Office</div>
                  <p className="text-[20px] leading-[28px] max-w-[213px]">
                    1686, Geraldine Lane, New York, NY 10013
                  </p>
                </div>
              </div>
            </div>
            <div className="w-4/12 py-[36px] pl-60px">
              <div className="flex items-center gap-20px">
                <div className="bg-primaryColor w-70px h-70px rounded-full flex items-center justify-center">
                  <img src={EmailIcon} alt="" />
                </div>
                <div>
                  <div className="text-32 leading-[120%]">Email</div>
                  <a className="text-[20px] leading-[28px]" href="#!">
                    contact@vegancave.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
