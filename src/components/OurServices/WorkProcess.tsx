import {
  Users,
  Building,
  Target,
  Heart,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
export default function WorkProcess() {
  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Analyze Site & Create Concept",
      description:
        "We thoroughly analyze your site and create innovative concepts tailored to your vision.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Coordinate with Client",
      description:
        "We work closely with clients to understand and fulfill their specific requirements.",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Site Execution",
      description:
        "We execute projects with precision, ensuring complete client satisfaction.",
    },
  ];
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Work Process
        </h2>
        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full text-white mb-6 mx-auto">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
