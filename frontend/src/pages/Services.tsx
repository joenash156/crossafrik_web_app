import { useEffect } from "react";


const Services = () => {

  useEffect(() => {
    document.title = "CrossAfrik | Services";
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-center text-gray-600">Services page content will be added here.</p>
      </div>
    </div>
  )
}

export default Services
