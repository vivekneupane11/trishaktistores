import { useState } from "react";

const images = [
  "/assets/p.jpeg",
  "/assets/p1.jpeg",
  "/assets/p2.jpeg",
  "/assets/p3.jpeg",
  "/assets/p4.jpeg",
  "/assets/p5.jpeg",
  "/assets/p6.jpeg",
  "/assets/p7.jpeg",
  "/assets/p8.jpeg",
  "/assets/p10.jpeg",
];
export default function Swiper() {
  const [image, setImage] = useState("/assets/p.jpeg");
  return (
    <div className="grid gap-4 max-w-[100%] sm:max-w-[90%] my-12 mx-auto">
      <div>
        <img
          className="h-[500px] object-top object-cover w-[90%] shadow-xl max-w-[90%] sm:max-w-[80%] m-auto rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 max-w-[90%] sm:max-w-[80%] m-auto overflow-hidden">
        {images.map((img) => (
          <div key={img} onClick={() => setImage(img)}>
            <img
              className="cursor-pointer h-auto max-w-full rounded-lg hover:shadow-2xl hover:opacity-80 transition-all"
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
