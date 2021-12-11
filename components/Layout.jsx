import MenuNav from "./MenuNav";
import FooterCompleto from "./FooterCompleto";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <MenuNav />
      <div>{children}</div>
      <FooterCompleto />
    </>
  );
};

export default Layout;
