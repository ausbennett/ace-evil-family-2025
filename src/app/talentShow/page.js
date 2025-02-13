
"use client"

import { useRouter } from "next/navigation"
import VideoCard from "../../components/VideoCard"

export default function TalentShow() {

  const router = useRouter();

  const videos = [
    {
      title: "Rendition of Cotton Eye Joe - Austin",
      embedUrl: "https://www.youtube.com/embed/_e-0jl0aI_s",
      thumbnail: "https://img.youtube.com/vi/_e-0jl0aI_s/sddefault.jpg"
    },
    {
      title: "Piano - Vivian",
      embedUrl: "https://youtube.com/embed/JXYLzKwYjvc",
      thumbnail: "https://img.youtube.com/vi/JXYLzKwYjvc/sddefault.jpg"
    },
  ]

  return (
    <div className="p-6">
      <button
        onClick={() => router.back()}
        style={{ marginTop: '20px', borderRadius: '0.25rem'}}
      >
        <span className="text-2xl mr-2">←</span> Back
      </button>
      <h1 className="text-3xl font-bold text-center text-white mb-4">🎭 Talent Show 🎭</h1>
      <p className="text-center mb-6" style={{ color: "var(--comment-color)" }}>Enjoy performances by our family members! </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
}
