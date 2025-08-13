export default function Contact() {
  const team = [
    {
      name: "Amit Sharma",
      role: "Frontend Developer",
      email: "amit@sikkim-explorer.test",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Verma",
      role: "Frontend Developer",
      email: "priya@sikkim-explorer.test",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Mehta",
      role: "Backend Developer",
      email: "rahul@sikkim-explorer.test",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Kiran Das",
      role: "Backend Developer",
      email: "kiran@sikkim-explorer.test",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Anjali Roy",
      role: "Full Stack Developer",
      email: "anjali@sikkim-explorer.test",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="section-padding container-custom">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-gray-600 mb-8">
        Have questions? Reach out to our team below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-gray-100 mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h2>
            <p className="text-sm text-blue-600 font-medium">{member.role}</p>
            <a
              href={`mailto:${member.email}`}
              className="text-sm text-gray-500 hover:text-blue-500 block mt-2"
            >
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
