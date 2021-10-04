import React from "react";
import Footer from "../Footer";
import HeaderBlack from "../Common/HeaderBlack";
import HeaderWhite from "../Common/HeaderWhite";

function Index(props) {
  const { children, location } = props;

  const Header = location.pathname === '/' || location.pathname === '/home' ?  <HeaderBlack {...props} /> : <HeaderWhite {...props} />
  return (
    <React.Fragment>
      {Header}
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Index;
