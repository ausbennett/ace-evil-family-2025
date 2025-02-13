"use client"; // Ensure this is a Client Component

import { useState } from "react";

export default function VideoCard({ title, embedUrl, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-md bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden">
      {!isPlaying ? (
        <div className="relative cursor-pointer" onClick={() => setIsPlaying(true)}>
          <img
            src={thumbnail || "/placeholder.jpg"} // Show default image if no thumbnail
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition">
            <button className="bg-white text-black p-3 rounded-full">
              ▶️ Play
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-48">
          <iframe
            className="w-full h-full"
            src={`${embedUrl}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
