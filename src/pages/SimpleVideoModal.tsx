import { useState } from 'react'

export default function SimpleVideoModal() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div>
      {/* Simple button to open video */}
      <button 
        onClick={() => setShowVideo(true)}
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
      >
        ▶ Play Video
      </button>

      {/* Simple shadow box modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Video Demo</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-2xl font-bold text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            {/* Simple video - no autoplay, no complexity */}
            <video 
              className="w-full h-auto"
              controls
              preload="metadata"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              <source src="/test-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <p className="mt-4 text-sm text-gray-600">
              Click the play button to start the video.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
