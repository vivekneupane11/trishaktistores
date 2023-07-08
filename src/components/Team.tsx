const team = [
  {
    name: "Bishnu Rijal",
    designation: "Founder",
    image: "/assets/bishnu.jpeg",
    fbLink: "https://www.facebook.com/bishnu677",
  },
  {
    name: "Santosh Rijal",
    designation: "CEO",
    image: "/assets/santosh.jpeg",
    fbLink: "https://www.facebook.com/drmcoder",
  },
  {
    name: "Parbati Rijal",
    designation: "Account Executive",
    image: "/assets/ita.jpeg",
    fbLink: "https://www.facebook.com/profile.php?id=100007489307103",
  },
  {
    name: "Saroj Rijal",
    designation: "Department Head",
    image: "/assets/saroj.jpeg",
    fbLink: "https://www.facebook.com/rijal44",
  },
];
export default function Team() {
  return (
    <section className="mt-12 py-12 bg-gradient-to-r from-red-600 to-red-900">
      <div className=" py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Dream Team</h1>
          <p className=" text-gray-400 pt-6 text-2xl w-[70%] text-center m-auto">
            Meet the dedicated and skilled individuals who make up our team,
            driving success and delivering exceptional results for our clients.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((e) => (
            <div
              key={e.name}
              className=" group cursor-pointer relative bg-transparent rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-[90%] m-auto  sm:w-[100%] 
              md:w-[100%] lg:w-[100%] xl:w-[100%]"
            >
              <img
                src={e.image}
                alt="Team Member"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl py-3 font-semibold text-white">
                  {e.name}
                </h3>
                <p className="text-gray-400 font-semibold">{e.designation}</p>
              </div>

              <div className="absolute w-0 h-0  transition-all  group-hover:w-full group-hover:h-full  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-500 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-70 rounded-md ">
                <div className="flex justify-center items-center w-full h-full opacity-100">
                  <a target="_blank" href={e.fbLink}>
                    <img
                      className="h-8 w-8 mr-3 hover:scale-125 transition-all"
                      src="/assets/facebook.png"
                      alt=""
                    />
                  </a>
                  <a target="_blank" href={e.fbLink}>
                    <img className="h-8 w-8 hover:scale-125" src="/assets/twitter.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
