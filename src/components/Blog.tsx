
export default function Blog() {
  return (

    <div className="w-[90%] m-auto">
             <div className=" py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-900">Get Latest News</h1>
          <p className=" text-gray-400 pt-6 text-2xl w-[70%] text-center m-auto">
           Keep updated with Trishakti Stores
          </p>
        </div>
      </div>
  <div className="mt-12 flex justify-evenly ">

{/* Blog1 */}
  <div className="group cursor-pointer max-w-xl sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-xl shadow-xl ">
    <a href="#">
        <img className="rounded-t-lg w-full h-[280px]" src="/assets/trishakti.webp" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  group-hover:text-blue-800">How can i get fashionable clothing for my retail stores in reasonable price
</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">As a retailer, you want to offer your customers fashionable clothing that they love without breaking the bank. But where can you find fashionable clothing at a reasonable price? The answer is Trishakti Stores!</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  rounded-lg  focus:ring-4  focus:ring-red-300 ">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

{/* Blog 2  */}
<div className="group cursor-pointer max-w-xl sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-xl shadow-xl ">
    <a href="#">
        <img className="rounded-t-lg w-full" src="/assets/banner2.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  group-hover:text-blue-800">Are You Planning to Open a Retail Clothing Shop? Why Trishakti Stores Should Be Your Wholesale Partner.
</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">If you’re considering opening a retail clothing shop, there are many things to think about. From finding a location to hiring staff, launching a new retail business can be an exciting yet challenging task ...</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  rounded-lg  focus:ring-4  focus:ring-red-300 ">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


  </div>
    </div>

  )
}
