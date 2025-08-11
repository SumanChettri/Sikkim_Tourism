import { useState } from "react";

function RouteFinder() {
  const towns = [
    "Gangtok", "Namchi", "Pelling", "Ravangla", "Mangan",
    "Yuksom", "Singtam", "Geyzing", "Jorethang", "Rangpo"
  ];

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  const handleRoute = () => {
    if (!origin || !destination) {
      alert("Please select both origin and destination");
      return;
    }

    const url = `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=driving`;

    // ❗ Free version without API key:
    const freeEmbed = `https://www.google.com/maps?q=${encodeURIComponent(origin)}+to+${encodeURIComponent(destination)}&output=embed`;

    setMapUrl(freeEmbed);
  };

  return (
    <div style={{ padding: "10px", fontFamily: "sans-serif" }}>
      <h2>Sikkim Route Finder</h2>

      <label>Origin: </label>
      <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
        <option value="">Select Origin</option>
        {towns.map((town) => (
          <option key={town} value={town}>{town}</option>
        ))}
      </select>

      <br /><br />

      <label>Destination: </label>
      <select value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="">Select Destination</option>
        {towns.map((town) => (
          <option key={town} value={town}>{town}</option>
        ))}
      </select>

      <br /><br />

      <button
        onClick={handleRoute}
        style={{
          padding: "8px 15px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Show Route
      </button>

      {mapUrl && (
        <div style={{ marginTop: "20px" }}>
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Sikkim Route Map"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default RouteFinder;
