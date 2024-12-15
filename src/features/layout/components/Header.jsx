// import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
// import useCookie from "react-use-cookie";

const Header = () => {
  //   const [user] = useCookie("user");

  return (
    <header className=" border-b-2 border-gray-200 sticky top-0 z-40">
      <Navbar />
    </header>
  );
};

export default Header;
