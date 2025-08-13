import React from 'react';

const LogoStyles = () => {
  const logoStyles = [
    {
      name: "Modern Gradient",
      description: "Blue to emerald to purple - tech-forward and modern",
      logoClass: "logo-modern",
      iconClass: "logo-icon-modern",
      tagline: "Sikkim"
    },
    {
      name: "Tech-Focused",
      description: "Cyan to blue to indigo - perfect for AI technology",
      logoClass: "logo-tech",
      iconClass: "logo-icon-tech",
      tagline: "Sikkim"
    },
    {
      name: "Adventure-Focused",
      description: "Emerald to green to teal - nature and adventure",
      logoClass: "logo-adventure",
      iconClass: "logo-icon-adventure",
      tagline: "Sikkim"
    },
    {
      name: "Premium Luxury",
      description: "Amber to orange to red - luxury and premium feel",
      logoClass: "logo-premium",
      iconClass: "logo-icon-premium",
      tagline: "Sikkim"
    },
    {
      name: "Mountain/Nature",
      description: "Slate to blue to cyan - mountain and nature inspired",
      logoClass: "logo-nature",
      iconClass: "logo-icon-nature",
      tagline: "Sikkim"
    },
    {
      name: "Minimalist",
      description: "Simple black text - clean and professional",
      logoClass: "logo-minimal",
      iconClass: "logo-icon-minimal",
      tagline: "Sikkim"
    },
    {
      name: "Bold Impact",
      description: "Red to pink to purple - bold and attention-grabbing",
      logoClass: "logo-bold",
      iconClass: "logo-icon-bold",
      tagline: "Sikkim"
    },
    {
      name: "Corporate Professional",
      description: "Professional blue - business and corporate",
      logoClass: "logo-corporate",
      iconClass: "logo-icon-corporate",
      tagline: "Sikkim"
    }
  ];

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          AIventurer Logo Style Options
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logoStyles.map((style, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{style.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{style.description}</p>
              
              {/* Logo Display */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 ${style.iconClass} rounded-2xl flex items-center justify-center shadow-md`}>
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl font-black ${style.logoClass}`}>
                    AIventurer
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {style.tagline}
                  </span>
                </div>
              </div>
              
              {/* Usage Instructions */}
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-xs text-gray-700 font-mono">
                  Logo: <span className="text-blue-600">{style.logoClass}</span>
                </p>
                <p className="text-xs text-gray-700 font-mono">
                  Icon: <span className="text-blue-600">{style.iconClass}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">How to Use These Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-blue-700">In Your Navbar:</h3>
              <p className="text-sm text-blue-600">
                Replace the logo classes in your Navbar.jsx with your chosen style classes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-700">Example:</h3>
              <p className="text-sm text-blue-600 font-mono">
                className="{`logo-{your-style}`}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoStyles; 