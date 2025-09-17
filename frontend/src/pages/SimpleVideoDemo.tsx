import { useState } from 'react'

export default function SimpleVideoDemo() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">AI Agent Demo</h2>
      
      {/* Simple Agent Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
            <span className="text-white text-2xl">🎯</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Audience Agent</h3>
            <p className="text-gray-600">AI-powered audience analysis and targeting</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Watch our demo to see how the Audience Agent intelligently analyzes and segments your target audience, 
          providing deep insights into customer behavior and engagement patterns.
        </p>
        
        <button 
          onClick={() => setShowVideo(true)}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          ▶ Watch Demo Video
        </button>
      </div>

      {/* Simple Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Demo Video</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-2xl font-bold text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
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
