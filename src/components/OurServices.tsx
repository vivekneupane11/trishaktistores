
export default function OurServices() {
  const services = [
    {
      title: 'One Price for All',
      description: 'Our commitment to delivering fair and consistent pricing makes us a trusted choice for all, no matter who you are or Wherever you are from',
      image:'/assets/price.png'
    },
    {
      title: 'Hand Holding Support',
      description: 'Our team provides hands-on support, guiding you every step of the way for a seamless and stress-free experience.',
      image:'/assets/connect.png'
    },
    {
      title: 'All the Verities at one roof      ',
      description: 'At our company, we strive to provide a one-stop-shop experience for all your needs by offering a diverse range of products under one roof. This way, you can save time and effort in your purchasing journey, making it a convenient and efficient process.',
      image: '/assets/roof.png',
    },
    {
      title: 'Consultation      ',
      description: 'We offers consultation services for their clothing business. These services can include advice on product selection, and pricing strategies. The goal of their consultation service is to help our clients optimize their buying decisions and increase their profitability.',
      image: '/assets/consult.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" py-6">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold text-red-900">Our Services
</h1>
    <p className=" text-gray-600 pt-3 text-2xl">We focus on building relation than to bring sales

</p>
  </div>
</div>
      <div className="flex flex-wrap justify-center items-stretch mt-8 ">
        {services.map((service, index) => (
          <div
        
            key={index}
            className="bg-white rounded-lg w-full sm:w-[45%] p-6 flex  items-center text-center relative shadow-xl m-4 mt-28"
          >
          <img className="rounded-full absolute left-[50%] top-[-10%] translate-x-[-50%] translate-y-[-50%] shadow-xl" src={service.image} alt={service.title} height={"80px"} width={"80px"}/>
          <section>
       <section className="flex justify-center mt-4">
       <h1 className="text-4xl font-extrabold text-red-900 mr-1">{index+1}.</h1>
            <h3 className="text-3xl font-semibold mb-2 self-end ">{service.title}</h3>
       </section>
            <p className="text-gray-600 text-lg mt-4 py-2">{service.description}</p>
          </section>
          </div>
        ))}
      </div>
    </div>
  );
}

