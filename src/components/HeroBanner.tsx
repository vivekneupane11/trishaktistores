export default function HeroBanner() {
    return (
      <div className="relative bg-black">
        <img
          className="object-cover w-full h-[90vh] bg-blend-darken"
          src="/assets/banner2.jpg"
          alt="Hero Banner"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0  left-12 flex flex-col justify-center items-center">
          <h1 className="w-full text-gray-400 text-7xl font-bold mb-6 text-left">Your One Stop Clothing Shop </h1>
          <h1 className="text-gray-100 w-full text-6xl font-bold">
          You’re Looking For ?
          </h1>
          <div className="flex justify-start items-start w-full mt-12">
      <button className="group px-12 py-4 rounded-md text-white font-semibold bg-transparent border-2 border-white hover:shadow-2xl hover:scale-x-110 transition-all duration-150 flex
       items-center space-x-2">
        <span className="uppercase ">Know More</span>
      </button>
      <button className="ml-6 group px-12 py-4 rounded-md text-white font-semibold bg-transparent border-2 border-white hover:shadow-2xl hover:scale-x-110 transition-all duration-150 flex items-center space-x-2">
        {/* <FiPlay /> */}
        <span className="uppercase ">
         Whatsapp </span>
      </button>
    </div>
          
        </div>
      </div>
    );
  }
  