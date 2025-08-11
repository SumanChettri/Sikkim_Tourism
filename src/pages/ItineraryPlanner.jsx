import { useState } from 'react'
import { FaCalendar, FaUsers, FaIndianRupeeSign, FaHeart, FaLocationDot, FaClock, FaStar } from 'react-icons/fa6'

const ItineraryPlanner = () => {
  const [formData, setFormData] = useState({
    destination: '',
    days: 3,
    budget: 'medium',
    interests: [],
    travelStyle: 'relaxed',
    startDate: ''
  })

  const [generatedItinerary, setGeneratedItinerary] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const interests = [
    'Adventure Sports', 'Culture & Heritage', 'Nature & Wildlife', 'Photography',
    'Food & Cuisine', 'Shopping', 'Spiritual & Religious', 'Trekking & Hiking'
  ]

  const travelStyles = [
    { value: 'relaxed', label: 'Relaxed & Comfortable' },
    { value: 'balanced', label: 'Balanced Mix' },
    { value: 'adventurous', label: 'Adventurous & Active' }
  ]

  const budgets = [
    { value: 'budget', label: 'Budget Friendly', icon: '💰' },
    { value: 'medium', label: 'Mid Range', icon: '💳' },
    { value: 'luxury', label: 'Luxury', icon: '✨' }
  ]

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const generateItinerary = async (e) => {
    e.preventDefault()
    setIsGenerating(true)
    
    // Simulate AI processing
    setTimeout(() => {
      const mockItinerary = {
        destination: formData.destination || 'Sikkim',
        days: formData.days,
        budget: formData.budget,
        travelStyle: formData.travelStyle,
        dailyPlans: Array.from({ length: formData.days }, (_, dayIndex) => ({
          day: dayIndex + 1,
          title: `Day ${dayIndex + 1}`,
          activities: [
            {
              time: '09:00 AM',
              activity: 'Breakfast at local restaurant',
              description: 'Start your day with traditional Sikkimese breakfast',
              location: 'Local Cafe',
              duration: '1 hour'
            },
            {
              time: '10:30 AM',
              activity: 'Visit local monastery',
              description: 'Explore the spiritual heritage of Sikkim',
              location: 'Ancient Monastery',
              duration: '2 hours'
            },
            {
              time: '01:00 PM',
              activity: 'Lunch with local cuisine',
              description: 'Taste authentic Sikkimese dishes',
              location: 'Traditional Restaurant',
              duration: '1.5 hours'
            },
            {
              time: '03:00 PM',
              activity: 'Nature walk and photography',
              description: 'Capture the beautiful landscapes and flora',
              location: 'Scenic Trail',
              duration: '2 hours'
            },
            {
              time: '06:00 PM',
              activity: 'Evening tea and relaxation',
              description: 'Unwind with local tea and mountain views',
              location: 'Tea Garden',
              duration: '1 hour'
            }
          ]
        })),
        recommendations: [
          'Book accommodations in advance during peak season',
          'Carry warm clothes as temperatures can drop significantly',
          'Respect local customs and dress modestly',
          'Try local delicacies like momos and thukpa',
          'Hire a local guide for better cultural insights'
        ],
        estimatedCost: {
          accommodation: formData.budget === 'budget' ? '₹2,000-3,000' : formData.budget === 'medium' ? '₹4,000-6,000' : '₹8,000-12,000',
          food: formData.budget === 'budget' ? '₹800-1,200' : formData.budget === 'medium' ? '₹1,500-2,500' : '₹3,000-5,000',
          activities: formData.budget === 'budget' ? '₹500-1,000' : formData.budget === 'medium' ? '₹1,500-3,000' : '₹4,000-8,000',
          transportation: formData.budget === 'budget' ? '₹1,000-1,500' : formData.budget === 'medium' ? '₹2,000-3,000' : '₹4,000-6,000'
        }
      }
      
      setGeneratedItinerary(mockItinerary)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI Itinerary Planner
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Let our AI create the perfect personalized itinerary for your Sikkim adventure
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Planning Form */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Trip</h2>
              
              <form onSubmit={generateItinerary} className="space-y-6">
                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where do you want to go?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Gangtok, Pelling, Lachung..."
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  />
                </div>

                {/* Number of Days */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How many days?
                  </label>
                  <select
                    value={formData.days}
                    onChange={(e) => setFormData({...formData, days: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 10, 14].map(days => (
                      <option key={days} value={days}>
                        {days} {days === 1 ? 'Day' : 'Days'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's your budget?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {budgets.map((budget) => (
                      <button
                        key={budget.value}
                        type="button"
                        onClick={() => setFormData({...formData, budget: budget.value})}
                        className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                          formData.budget === budget.value
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-2">{budget.icon}</div>
                        <div className="text-sm font-medium">{budget.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Travel Style */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's your travel style?
                  </label>
                  <div className="space-y-3">
                    {travelStyles.map((style) => (
                      <label key={style.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="travelStyle"
                          value={style.value}
                          checked={formData.travelStyle === style.value}
                          onChange={(e) => setFormData({...formData, travelStyle: e.target.value})}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-gray-700">{style.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What interests you? (Select multiple)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-primary focus:ring-primary rounded"
                        />
                        <span className="text-gray-700 text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When do you want to start?
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  />
                </div>

                {/* Generate Button */}
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Generating Your Itinerary...
                    </div>
                  ) : (
                    'Generate AI Itinerary'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Generated Itinerary */}
          <div className="space-y-8">
            {generatedItinerary ? (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Your Personalized Itinerary</h2>
                  <button className="btn-secondary">
                    <FaHeart className="w-5 h-5 mr-2" />
                    Save
                  </button>
                </div>

                {/* Itinerary Summary */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{generatedItinerary.days}</div>
                      <div className="text-sm text-gray-600">Days</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{generatedItinerary.budget}</div>
                      <div className="text-sm text-gray-600">Budget</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{generatedItinerary.travelStyle}</div>
                      <div className="text-sm text-gray-600">Style</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{generatedItinerary.interests.length}</div>
                      <div className="text-sm text-gray-600">Interests</div>
                    </div>
                  </div>
                </div>

                {/* Daily Plans */}
                <div className="space-y-6">
                  {generatedItinerary.dailyPlans.map((day) => (
                    <div key={day.day} className="border border-gray-200 rounded-lg p-4">
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

                {/* Recommendations */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Travel Tips</h3>
                  <ul className="space-y-2">
                    {generatedItinerary.recommendations.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <FaStar className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost Breakdown */}
                <div className="mt-6 bg-accent/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Estimated Costs</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accommodation:</span>
                      <span className="font-medium">{generatedItinerary.estimatedCost.accommodation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Food:</span>
                      <span className="font-medium">{generatedItinerary.estimatedCost.food}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Activities:</span>
                      <span className="font-medium">{generatedItinerary.estimatedCost.activities}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transportation:</span>
                      <span className="font-medium">{generatedItinerary.estimatedCost.transportation}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button className="btn-primary flex-1">
                    Book This Trip
                  </button>
                  <button className="btn-secondary flex-1">
                    Download PDF
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCalendar className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Plan Your Trip?
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form on the left and our AI will create a personalized itinerary just for you
                </p>
                <div className="text-sm text-gray-500">
                  <p>✓ Personalized recommendations</p>
                  <p>✓ Local insights and tips</p>
                  <p>✓ Budget-friendly options</p>
                  <p>✓ Instant generation</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItineraryPlanner 