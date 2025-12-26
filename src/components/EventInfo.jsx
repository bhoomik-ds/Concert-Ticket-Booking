import React, { useState } from "react";
import { Star, Heart, Share2, Calendar, Clock, MapPin } from "lucide-react";

const EventInfo = () => {

  const eventData = {
  title: "Junagadh’s Grand Pawandeep Rajan Live Concert 2026",
  category: "Music Shows | English, Hindi",
  rating: 5,
  votes: "7.5k",
  interested: "10.3K",
  tags: ["Music", "Dance", "Party", "New Year"],
  about: "Get ready for an unforgettable night as Pawandeep Rajan, the soulful voice and winner of Indian Idol Season-12, takes the stage in Junagadh for his grand live concert. Known for his mesmerizing vocals and heartfelt performances, Pawandeep will bring a mix of Bollywood hits, folk melodies, and original compositions to life",
  highlights: [
    "Soul‑stirring live vocals",
    "Surprise duets and acts",
    "Immersive lights & sound",
    "Heartfelt  interactions",
    "Bollywood hits & soulful originals",
    "Electrifying full band fusion"
  ],
  date: "17th Jan 2026",
  time: "6:00 PM - 12:00 AM",
  duration: "6 hours",
  venue: "Dharmik Farm House, Bhavnath, Junagadh",
  venueAddress: "Taleti Rd, opp. Apna ghar, behind Gayatri Society, Mullawada, Junagadh, Gujarat 362001",
  price: "₹2,999",
  originalPrice: "₹3,999",
  images: [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800"
  ]
};

  const [liked, setLiked] = useState(false);

  if (!eventData) {
    return (
      <div className="text-center py-10 text-gray-500">
        No event data provided.
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Title + Actions */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {eventData.title}
              </h1>

              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="font-semibold">{eventData.rating}/5</span>
                  <span className="ml-1">({eventData.votes} Vote)</span>
                </div>
                <span>•</span>
                <span>{eventData.category}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {eventData.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition ${
                    liked
                      ? "bg-pink-50 border-pink-600 text-pink-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? "fill-pink-600" : ""}`} />
                  <span className="text-sm font-medium">
                    {liked ? "Liked" : "Interested"}
                  </span>
                </button>

                <button className="flex items-center space-x-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:border-gray-400 transition">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>

                <div className="hidden md:block text-sm text-gray-600">
                  {eventData.interested} Interested
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About the Event
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{eventData.about}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Highlights
              </h3>
              <ul className="space-y-2">
                {eventData.highlights?.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Date</div>
                  <div className="text-gray-600">{eventData.date}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Time</div>
                  <div className="text-gray-600">{eventData.time}</div>
                  <div className="text-sm text-gray-500">
                    Duration: {eventData.duration}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:col-span-2">
                <MapPin className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Venue</div>
                  <div className="text-gray-600">{eventData.venue}</div>
                  <div className="text-sm text-gray-500">{eventData.venueAddress}</div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Event Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {eventData.images?.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 line-through">
                    {eventData.originalPrice}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {eventData.price}
                  </div>
                  <div className="text-sm text-green-600 font-medium">onwards</div>
                </div>

                <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition mb-3">
                  Book Now
                </button>

                <div className="text-center text-xs text-gray-500">
                  Limited seats available
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-3">
                    Event Details
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language</span>
                      <span className="text-gray-900">English, Hindi</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age Limit</span>
                      <span className="text-gray-900">18+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="text-gray-900">Music Shows</span>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventInfo;
