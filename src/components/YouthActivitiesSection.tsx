const YouthActivitiesSection = () => {
  const activities = [
    { title: 'Satsang', image: '/images/guru.webp', bgColor: 'bg-purple-800', height: 'h-[700px]' },
    { title: 'Sadhana', image: '/images/girl.jpg', bgColor: 'bg-blue-900', height: 'h-[550px]' },
    { title: 'Seva', image: '/images/seva.webp', bgColor: 'bg-yellow-500', height: 'h-[420px]' },
    { title: 'Sanskriti', image: '/images/sanskriti.jpg', bgColor: 'bg-orange-600', height: 'h-[550px]' },
    { title: 'Sports', image: '/images/sports.jpg', bgColor: 'bg-blue-700', height: 'h-[700px]' },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col pt-32 px-4 md:px-8 bg-[#F0EDE5]">
      {/* Top Content */}
      <div className="relative z-10 text-center p-4 md:p-10 mt-4">
        <h2 className="text-3xl font-bold text-[#9D5C0D]">
          Youth Activities
        </h2>
        <p className="mt-2 text-gray-800 max-w-xl mx-auto text-sm">
          Pujya Gurudevshri guides the younger generation towards a higher goal.
        </p>
        <button className="mt-4 bg-[#9D5C0D] text-white px-4 py-2 hover:rounded-lg hover:bg-black transition text-sm">
          Know More
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full grid grid-cols-2 gap-4 mt-6">
        {/* First card spanning 2 rows */}
        <div className={`${activities[0].bgColor} text-white h-[350px] rounded-3xl relative row-span-2`}>
          <img
            src={activities[0].image}
            alt={activities[0].title}
            className="absolute bottom-0 w-full h-[90%] object-cover opacity-60 rounded-3xl"
          />
          <div className="absolute inset-0 flex flex-col justify-top p-2">
            <h3 className="text-xl mx-auto font-semibold">{activities[0].title}</h3>
          </div>
        </div>

        {/* Right column cards */}
        <div className="grid grid-rows-2 gap-4">
          {activities.slice(1, 3).map((activity, index) => (
            <div
              key={index}
              className={`${activity.bgColor} text-white h-[160px] rounded-3xl relative`}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute bottom-0 w-full h-[90%] object-cover opacity-60 rounded-3xl"
              />
              <div className="absolute inset-0 flex flex-col justify-top p-2">
                <h3 className="text-lg mx-auto font-semibold">{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row with Sanskriti and Sports side by side */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {activities.slice(3, 5).map((activity, index) => (
            <div
              key={index}
              className={`${activity.bgColor} text-white h-[160px] rounded-3xl relative`}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute bottom-0 w-full h-[90%] object-cover opacity-60 rounded-3xl"
              />
              <div className="absolute inset-0 flex flex-col justify-top p-2">
                <h3 className="text-lg mx-auto font-semibold">{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex absolute bottom-0 left-0 w-full items-end gap-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`relative flex-grow ${activity.bgColor} text-white ${activity.height} self-end rounded-t-3xl`}
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="absolute bottom-0 w-full h-[90%] object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-top p-4">
              <h3 className="text-2xl mx-auto font-semibold">{activity.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouthActivitiesSection;
