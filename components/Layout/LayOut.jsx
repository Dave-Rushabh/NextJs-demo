import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const LayOut = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default LayOut;
