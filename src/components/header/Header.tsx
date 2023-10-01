import React, { useEffect, useState } from "react";
import Logo from "../../images/propads_logo.png";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../../Pages/typesRoute";

const Header = () => {
  // const [Menu, setMenu] = useState(false);
  // const [Search, setSearch] = useState(false);
  // const [cart, setCart] = useState(false);
  const handleClick = () => {
    // Add or remove a class to the body element
    document.body.classList.toggle("active");
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //  componentDidMount() {
  //   document.body.classList.add('active');
  // }

  // componentWillUnmount() {
  //   document.body.classList.remove('active');
  // }

  return (
    <header className="">
      <div className="">
        <div className="">
          <div className="">
            <Link to={ROUTE_NAME.HOME}>
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
