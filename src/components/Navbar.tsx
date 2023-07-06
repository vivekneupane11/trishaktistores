import { useState } from "react";
const menuItems = [
  {
    name: "Home",
    path: "/",
  },
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
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/",
  },
];
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-screen-full py-4 px-8">
      <img src="./assets/logo.jpg" height="60px" width={"60px"} alt="Logo" />
      <ul>
        {menuItems.map((item) => (
          <li>
            <a href={item.path}> {item.name} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
