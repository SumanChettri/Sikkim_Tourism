import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useRef, useState } from 'react';
import { FaHeart, FaLocationDot, FaClock, FaStar, FaArrowLeft, FaPrint, FaShareNodes } from 'react-icons/fa6';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FitBounds = ({ points }) => {
  const map = useMap();
  useMemo(() => {
    if (!points || points.length === 0) return;
    const latlngs = points.map((p) => ({ lat: p[0], lng: p[1] }));
    const bounds = latlngs.reduce(
      (acc, cur) => [
        [Math.min(acc[0][0], cur.lat), Math.min(acc[0][1], cur.lng)],
        [Math.max(acc[1][0], cur.lat), Math.max(acc[1][1], cur.lng)],
      ],
      [
        [latlngs[0].lat, latlngs[0].lng],
        [latlngs[0].lat, latlngs[0].lng],
      ]
    );
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [points, map]);
  return null;
};

const ItineraryResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const itinerary = location.state?.itinerary;
  const pdfRef = useRef(null);
  const [selectedDay, setSelectedDay] = useState(0); // 0 = All days

  if (!itinerary) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">No Itinerary Found</h2>
        <button className="btn-primary" onClick={() => navigate('/itinerary-planner')}>Back to Planner</button>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'My Sikkim Itinerary',
        text: 'Check out my personalized Sikkim itinerary!',
        url: window.location.href,
      });
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  const handleDownloadPdf = async () => {
    if (!pdfRef.current) return;
    const element = pdfRef.current;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const fileName = `itinerary_${itinerary.destination || 'sikkim'}.pdf`;
    pdf.save(fileName);
  };

  // Geo helpers
  const getCoords = (place) => {
    const key = (place || '').toLowerCase();
    const table = {
      gangtok: { lat: 27.3389, lng: 88.6065 },
      pelling: { lat: 27.3172, lng: 88.2396 },
      lachung: { lat: 27.6907, lng: 88.7416 },
      lachen: { lat: 27.7239, lng: 88.556 },
      ravangla: { lat: 27.309, lng: 88.3664 },
      namchi: { lat: 27.1565, lng: 88.363 },
      yuksom: { lat: 27.3753, lng: 88.2128 },
      tzomgo: { lat: 27.3743, lng: 88.7617 },
      bagdogra: { lat: 26.6812, lng: 88.3286 },
      siliguri: { lat: 26.7271, lng: 88.3953 },
      jalpaiguri: { lat: 26.5435, lng: 88.7196 },
      kolkata: { lat: 22.5726, lng: 88.3639 },
      darjeeling: { lat: 27.041, lng: 88.2663 },
    };
    for (const name of Object.keys(table)) {
      if (key.includes(name)) return table[name];
    }
    return { lat: 27.3389, lng: 88.6065 }; // default Gangtok
  };

  const dest = useMemo(() => getCoords(itinerary.destination), [itinerary.destination]);
  const source = useMemo(() => getCoords(itinerary.source), [itinerary.source]);

  // Haversine for rough distance
  const kmBetween = (a, b) => {
    const R = 6371;
    const dLat = ((b.lat - a.lat) * Math.PI) / 180;
    const dLng = ((b.lng - a.lng) * Math.PI) / 180;
    const lat1 = (a.lat * Math.PI) / 180;
    const lat2 = (b.lat * Math.PI) / 180;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
    return Math.round(R * c);
  };

  const approxKm = useMemo(() => kmBetween(source, dest), [source, dest]);
  const approxHrs = useMemo(() => Math.max(1, Math.round((approxKm / 35) * 10) / 10), [approxKm]);

  // Build route points per day around destination and overall with source
  const routePointsByDay = useMemo(() => {
    const byDay = [];
    let globalIdx = 0;
    for (const day of itinerary.dailyPlans) {
      const points = [];
      for (let i = 0; i < day.activities.length; i++) {
        const angle = ((globalIdx + i) * 45) % 360;
        const radiusKm = 0.8 + ((globalIdx + i) % 5) * 0.5; // 0.8 - 3 km
        const dLat = (radiusKm / 110.574) * Math.cos((angle * Math.PI) / 180);
        const dLng = (radiusKm / (111.32 * Math.cos((dest.lat * Math.PI) / 180))) * Math.sin((angle * Math.PI) / 180);
        points.push([dest.lat + dLat, dest.lng + dLng]);
      }
      byDay.push(points);
      globalIdx += day.activities.length;
    }
    return byDay;
  }, [itinerary.dailyPlans, dest.lat, dest.lng]);

  const allPoints = useMemo(() => [ [source.lat, source.lng], ...routePointsByDay.flat() ], [routePointsByDay, source.lat, source.lng]);

  const displayedPoints = useMemo(() => {
    if (selectedDay === 0) return allPoints;
    const idx = selectedDay - 1;
    const pts = routePointsByDay[idx] || [];
    return [ [dest.lat, dest.lng], ...pts ];
  }, [selectedDay, allPoints, routePointsByDay, dest.lat, dest.lng]);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="container-custom section-padding max-w-5xl mx-auto">
        <div className="flex items-center justify-between py-6">
          <button className="flex items-center gap-2 text-primary hover:underline" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
          </button>
          <div className="flex gap-3">
            <button className="btn-secondary flex items-center gap-2" onClick={handlePrint}>
              <FaPrint /> Print
            </button>
            <button className="btn-secondary flex items-center gap-2" onClick={handleShare}>
              <FaShareNodes /> Share
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8" ref={pdfRef}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Personalized Itinerary</h2>
            <button className="btn-secondary flex items-center">
              <FaHeart className="w-5 h-5 mr-2" /> Save
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xs uppercase text-gray-500">Source</div>
                <div className="mt-1 inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">{itinerary.source}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500">Destination</div>
                <div className="mt-1 inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium">{itinerary.destination}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500">Start Date</div>
                <div className="mt-1 inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">{itinerary.startDate}</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{itinerary.days}</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{itinerary.budget}</div>
                <div className="text-sm text-gray-600">Budget</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{itinerary.travelStyle}</div>
                <div className="text-sm text-gray-600">Style</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{itinerary.interests?.length || 0}</div>
                <div className="text-sm text-gray-600">Interests</div>
              </div>
            </div>

            <div className="mt-4 text-center text-gray-700">
              Approx distance <span className="font-semibold">{approxKm} km</span> • Est. road time <span className="font-semibold">~{approxHrs}h</span>
            </div>

            {itinerary.interests?.length > 0 && (
              <div className="mt-3 text-center text-xs text-primary">
                Interests: {itinerary.interests.join(', ')}
              </div>
            )}
          </div>

          {/* Map Controls */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <button onClick={() => setSelectedDay(0)} className={`px-3 py-1 rounded-full text-sm border ${selectedDay === 0 ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200'}`}>All Days</button>
            {itinerary.dailyPlans.map((d) => (
              <button key={d.day} onClick={() => setSelectedDay(d.day)} className={`px-3 py-1 rounded-full text-sm border ${selectedDay === d.day ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200'}`}>Day {d.day}</button>
            ))}
          </div>

          {/* Map Routes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Route Map</h3>
            <div className="h-96 rounded-lg overflow-hidden border border-gray-200" data-html2canvas-ignore="true">
              <MapContainer center={[dest.lat, dest.lng]} zoom={11} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FitBounds points={displayedPoints} />
                {displayedPoints.length > 1 && (
                  <Polyline positions={displayedPoints} color="#2563eb" weight={4} opacity={0.85} />
                )}
                {/* Source marker */}
                <CircleMarker center={[source.lat, source.lng]} radius={8} pathOptions={{ color: '#10b981', fillColor: '#10b981', fillOpacity: 0.95 }}>
                  <Popup>
                    <div className="text-sm">
                      <div className="font-semibold">Source</div>
                      <div>{itinerary.source}</div>
                    </div>
                  </Popup>
                </CircleMarker>
                {/* Destination marker */}
                <CircleMarker center={[dest.lat, dest.lng]} radius={8} pathOptions={{ color: '#3b82f6', fillColor: '#3b82f6', fillOpacity: 0.95 }}>
                  <Popup>
                    <div className="text-sm">
                      <div className="font-semibold">Destination</div>
                      <div>{itinerary.destination}</div>
                    </div>
                  </Popup>
                </CircleMarker>
                {/* Activity points */}
                {(selectedDay === 0 ? routePointsByDay.flat() : routePointsByDay[selectedDay - 1] || []).map((pos, i) => (
                  <CircleMarker key={i} center={pos} radius={6} pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.9 }}>
                    <Popup>
                      <div className="text-sm">
                        <div className="font-semibold">Stop {i + 1}{selectedDay === 0 ? '' : ` (Day ${selectedDay})`}</div>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </div>
          </div>

          <div className="space-y-6">
            {itinerary.dailyPlans.map((day) => (
              <div key={day.day} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{day.title}</h3>
                <div className="space-y-3">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-16 text-sm font-medium text-gray-500">{activity.time}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.activity}</h4>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                          <span className="flex items-center">
                            <FaLocationDot className="w-3 h-3 mr-1" />
                            {activity.location}
                          </span>
                          <span className="flex items-center">
                            <FaClock className="w-3 h-3 mr-1" />
                            {activity.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Travel Tips</h3>
            <ul className="space-y-2">
              {itinerary.recommendations.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <FaStar className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-accent/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Estimated Costs</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Accommodation:</span>
                <span className="font-medium">{itinerary.estimatedCost.accommodation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Food:</span>
                <span className="font-medium">{itinerary.estimatedCost.food}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Activities:</span>
                <span className="font-medium">{itinerary.estimatedCost.activities}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Transportation:</span>
                <span className="font-medium">{itinerary.estimatedCost.transportation}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 print:hidden">
          <button className="btn-primary flex-1" onClick={() => alert('Booking coming soon!')}>Book This Trip</button>
          <button className="btn-secondary flex-1" onClick={handleDownloadPdf}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryResult; 