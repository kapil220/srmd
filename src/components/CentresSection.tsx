import Image from 'next/image';
import Link from 'next/link';

type Contact = {
  name: string;
  email: string;
  phone: string;
  timing: string;
  address: string;
};

const StatBox = ({ number, title }: { number: string; title: string }) => (
  <div className="text-center text-white">
    <div className="text-7xl font-bold mb-2">{number}</div>
    <div className="text-xl">{title}</div>
  </div>
);

const CentreCard = ({ title, contact }: { title: string; contact: Contact }) => (
  <div className="bg-[#82622c]/90 p-6 rounded-2xl text-white shadow-lg">
    <h3 className="text-2xl mb-4">{title}</h3>
    <div className="space-y-2">
      <p>👤 {contact.name}</p>
      <p>📧 {contact.email}</p>
      <p>📞 {contact.phone}</p>
      <p>⏰ {contact.timing}</p>
      <p>📍 {contact.address}</p>
    </div>
  </div>
);

const CentresSection = () => {
  const stats = [
    { number: "206", title: "Mission Centres" },
    { number: "96", title: "Youth Centres" },
    { number: "252", title: "Children Centres" },
    { number: "206", title: "Seva Centres" },
  ];

  const centres = [
    {
      title: "Ghatkopar",
      contact: {
        name: "Heena Shah",
        email: "ghatkopar@srmd.org",
        phone: "+91 98211 44215",
        timing: "12:00 noon to 1:00 pm",
        address: "Kishore Kunj, Ground Floor, Tilak Road, Ghatkopar West, Mumbai - 400 077"
      }
    },
    {
      title: "Ghatkopar - Youth",
      contact: {
        name: "Sankat Bhalghat",
        email: "ghatkopar.youth@srmd.org",
        phone: "+91 98697 83311",
        timing: "Full Day",
        address: "Kishore Kunj, Ground Floor, Tilak Road, Ghatkopar West, Mumbai - 400 077"
      }
    },
    {
      title: "Ghatkopar - Divinetouch",
      contact: {
        name: "Jyoti Doshi",
        email: "ghatkopar@divinetouch.srmd.org",
        phone: "+91 98201 81194",
        timing: "10:00 am to 11:00 am",
        address: "Kishore Kunj, Ground Floor, Tilak Road, Ghatkopar West, Mumbai - 400 077"
      }
    }
  ];

  return (
    <section className="min-h-screen bg-orange-50">
        <div className='pt-40'>
        <div className="relative bg-[#82622c] py-20">
        <Image
          src="/images/world-map.png"
          alt="World Map"
          width={500}
          height={300}
          className="absolute right-0 top-0 opacity-20"
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatBox key={stat.title} {...stat} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl text-[#2C5282]">Centres Near You</h2>
          <Link 
            href="/workouts" 
            className="bg-[#2C5282] text-white px-6 py-2 rounded-lg hover:bg-[#2C5282]/90 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {centres.map((centre) => (
            <CentreCard key={centre.title} {...centre} />
          ))}
        </div>
      </div>
        </div>
     
    </section>
  );
};

export default CentresSection; 