import Link from "next/link";
import Image from "next/image";
import logo from "../../assests/logo.jpg";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-start bg-red-300 h-20">
        <div className="flex items-center justify-start ml-2 mt-1.5 w-1/6 text-white hover:text-sky-200">
          <Link href="/">
            <a>
              <Image
                src={logo}
                height={70}
                width={70}
                alt="logo"
                className="rounded-full"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-row justify-evenly w-4/6">
          <div className="flex items-center text-white hover:text-blue-600">
            <Link href="/products">
              <a>Products </a>
            </Link>
          </div>
          <div className="flex items-center text-white hover:text-blue-600">
            <Link href="/services">
              <a>Services </a>
            </Link>
          </div>
          <div className="flex items-center text-white hover:text-blue-600">
            <Link href="/FAQs">
              <a>FAQs </a>
            </Link>
          </div>
          <div className="flex items-center text-white hover:text-blue-600">
            <Link href="/Contact">
              <a>Contact Us </a>
            </Link>
          </div>
          <div className="flex items-center text-white hover:text-blue-600">
            <Link href="/About">
              <a>About Us </a>
            </Link>
          </div>
          <div className="flex items-center text-white hover:text-blue-600">
            <Link href="/UserList">
              <a>User List </a>
            </Link>
          </div>
        </div>

        <div className="flex gap-8 flex-row pl-10">
          <div className="flex items-center text-white hover:text-blue-600">
            <Link href="/UserData/ManageUser">
              <a>Sign Up </a>
            </Link>
          </div>
          <div className="flex items-center text-white hover:text-blue-600">
            <Link href="/UserData/ManageUser">
              <a>Log In </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
