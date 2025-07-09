export default function Teams(){
    const teamMembers = [
    {
      name: "Mr. Nadeem Ahmad",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Er. Shahzad Ahmad",
      role: "Civil Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ar. Shuaib Ahmad",
      role: "Architect",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ar. Shahrukh",
      role: "Architect",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    }
  ];
    return(
        <>
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Meet the passionate professionals who bring your vision to life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium text-lg">
                  {member.role}
                </p>
                <div className="mt-4 w-16 h-1 bg-gray-400 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    )
}