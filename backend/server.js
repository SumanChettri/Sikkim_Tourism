// server.js (express backend)
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const places = [
  { id: "gangtok", name: "Gangtok", lat: 27.3389, lng: 88.6065, desc: "Capital city" },
  { id: "siliguri", name: "Siliguri", lat: 26.7166, lng: 88.4236, desc: "Gateway to Sikkim" },
  { id: "pelling", name: "Pelling", lat: 27.3123, lng: 88.2307, desc: "Views of Kanchenjunga" },
  { id: "lachung", name: "Lachung", lat: 27.6822, lng: 88.5338, desc: "Mountain village" },
  { id: "tarey_vhir", name: "Tarey Vhir", lat: 27.1, lng: 88.3, desc: "Hidden scenic area (example coords)" },
  // add more places & accurate coordinates as you verify them
];

app.get("/places", (req, res) => {
  res.json(places);
});

app.get("/route", (req, res) => {
  const { origin, destination } = req.query;
  if (!origin || !destination) return res.status(400).json({ error: "origin & destination required" });

  // origin/destination can be names or "lat,lng"
  const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
  res.json({ url });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
