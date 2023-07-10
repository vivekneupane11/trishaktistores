
export default function Banner({title}) {
  return (
    <div className="relative bg-black">
    <img
      className="object-cover w-full h-[40vh] bg-blend-darken"
      src="/assets/banner2.jpg"
      alt="Hero Banner"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0  left-12 flex flex-col justify-center items-center overflow-hidden">
      <h1 className="w-full text-white text-4xl sm:text-6xl font-bold mb-6 text-left ml-0 sm:ml-20">{title}</h1>
    
 
      
    </div>
  </div>  )
}
