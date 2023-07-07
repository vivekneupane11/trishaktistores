import { useEffect, useState } from "react";
const menuItems = [
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Our Clients",
    path: "/clients",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState("");
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`w-screen-full pt-3 z-50  px-8 flex justify-between items-center shadow-lg transition-width duration-500 ${isNavbarFixed ? 'fixed w-[90%] ml-[5%] rounded-xl mt-4 shadow-3xl pt-2 bg-white ':''}`}>
      <img src="./assets/logo.jpg" className="pb-4" height="50px" width={"70px"} alt="Logo" />
      <ul className="flex w-2/3  justify-evenly ">
        <li
          className={`flex flex-col justify-center items-center group font-semibold ${
            path === "/" ? "text-blue-900 " : "text-gray-800"
          } `}
        >
          <a href="/" className="group-hover:text-blue-900   ">
            
            Home
          </a>
          <div className=" w-0 ${ path === '/' ? 'w-2 ' : 'w-0'} h-1 mt-3  rounded-lg bg-red-600  transition-all  duration-300 group-hover:w-full"></div>
        </li>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={` group flex flex-col justify-center items-center font-semibold ${
              path.startsWith(item.path) && path !== "/"
                ? "text-blue-900 "
                : "text-gray-800"
            } `}
          >
            <a className="group-hover:text-blue-900   " href={item.path}>
              
              {item.name}
            </a>
            <span className=" w-0 ${path.startsWith(item.path) && path !== '/' ? 'w-2 ' : 'w-0'} h-1 mt-3  rounded-lg bg-red-600  transition-all  duration-300 group-hover:w-full"></span>
          </li>
        ))}
          <button className="ml-6 group px-8 mb-4  py-3 rounded-md text-white font-semibold bg-transparent border-2 border-red-900 hover:bg-red-900  transition-all duration-150 flex items-center space-x-2">
        {/* <FiPlay /> */}
        <span className="uppercase text-red-900 group-hover:text-white ">
         Whatsapp </span>
      </button>
      </ul>
    </nav>
  );
}
