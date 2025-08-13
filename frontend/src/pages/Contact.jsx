export default function Contact() {
  const team = [
    {
      name: "Suman Tewari",
      role: "Full Stack Developer",
      email: "sumantewari758@gmail.com",
      image: "./suman.jpg",
      github: "https://github.com/SumanChettri"
    },
    {
      name: "Kishan Poudel",
      role: "Frontend Developer",
      email: "kishan.poudel@sikkim-explorer.test",
      image: "https://avatars.githubusercontent.com/u/87654321?v=4",
      github: "https://github.com/kishanpoudel"
    },
    {
      name: "Abishek",
      role: "AI Models & ML Engineer",
      email: "abishek@sikkim-explorer.test",
      image: "https://avatars.githubusercontent.com/u/11223344?v=4",
      github: "https://github.com/abishek"
    },
  ];

  return (
    <div className="section-padding container-custom">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Connect with our talented developers who are passionate about creating amazing experiences for Sikkim tourism.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 mb-4 shadow-md"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {member.name}
            </h2>
            <p className="text-sm text-blue-600 font-semibold mb-3">{member.role}</p>
            <div className="space-y-2">
              <a
                href={`mailto:${member.email}`}
                className="text-sm text-gray-600 hover:text-blue-500 block transition-colors"
              >
                📧 {member.email}
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-800 block transition-colors"
              >
                🔗 GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
