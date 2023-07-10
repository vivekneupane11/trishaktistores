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

];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState("");
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false)
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
    <nav className={`w-screen-full pt-3 z-50  px-8 flex justify-between items-center shadow-lg transition-width duration-500 ${isNavbarFixed ? 'fixed top-1 w-[90%] ml-[5%] rounded-xl mt-4 shadow-3xl pt-2 bg-white ':''}`}>
<a href="/">
<img src="./assets/logo.jpg" className="pb-4" height="50px" width={"70px"} alt="Logo" />

</a>
      <ul className="md:flex w-2/3  justify-evenly hidden ">
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
          <a href="tel:+977-056596980" className="ml-6 group px-8 mb-4  py-3 rounded-md text-white font-semibold bg-transparent border-2 border-red-900 hover:bg-red-900  transition-all duration-150 flex items-center space-x-2">
        {/* <FiPlay /> */}
       
        <span className="uppercase text-center w-full text-red-900 group-hover:text-white ">
         Whatsapp </span>
      </a>
      </ul>

{
  menuOpen? <span onClick={()=>setMenuOpen(init=>!init)} className="flex cursor-pointer  md:hidden"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" className="pb-2" viewBox="0 0 30 30">
  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
</svg></span> : <span onClick={()=>setMenuOpen(init=>!init)} className="flex cursor-pointer  md:hidden"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="30" className="pb-2" viewBox="0 0 50 50">
  <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
  </svg></span>
}
      
      <ul className={`md:hidden  flex flex-col  justify-evenly fixed  bg-white  rounded-lg w-[95%]  left-[2.5%] top-[20%] z-00 ${menuOpen ? 'h-[70%]':'h-0'} ${menuOpen ? 'z-50':'hidden'} transition-all shadow-2xl `}>
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
          <a href="tel:+977-056596980" className=" group px-8 mb-4  py-3 rounded-md text-white font-semibold bg-transparent border-2 border-red-900 hover:bg-red-900  transition-all duration-150 flex items-center space-x-2 w-[80%] mx-auto">
        {/* <FiPlay /> */}
        <span className="uppercase text-center w-full  text-red-900 group-hover:text-white ">
         Whatsapp </span>
      </a>
      </ul>
    </nav>
  );
}
