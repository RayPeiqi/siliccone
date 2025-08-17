export default function Slide28() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Go-To-Market Strategy</h1>
          <p className="text-lg text-gray-600">Multi-phase rollout with selective virality</p>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src="/luxury-product-launch-timeline.png"
            alt="Go-to-market timeline"
            className="rounded-2xl shadow-lg object-cover h-44 w-[500px]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Phase 1: Ultra-Luxury</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-purple-700">
                <strong>Timeline:</strong> Month 1
              </p>
              <p className="text-base text-purple-700">
                <strong>Focus:</strong> $5M 1/1 case launch
              </p>
              <p className="text-base text-purple-700">
                <strong>Strategy:</strong> Private reveal events
              </p>
              <p className="text-base text-purple-700">
                <strong>Goal:</strong> Establish exclusivity
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Phase 2: Limited Series</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-blue-700">
                <strong>Timeline:</strong> Month 2-5
              </p>
              <p className="text-base text-blue-700">
                <strong>Focus:</strong> Zodiac & holiday collections
              </p>
              <p className="text-base text-blue-700">
                <strong>Strategy:</strong> Cultural momentum
              </p>
              <p className="text-base text-blue-700">
                <strong>Goal:</strong> Convert curiosity to traction
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800">Phase 3: Mass-Luxury</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-green-700">
                <strong>Timeline:</strong> Month 6+
              </p>
              <p className="text-base text-green-700">
                <strong>Focus:</strong> Accessible luxury line
              </p>
              <p className="text-base text-green-700">
                <strong>Strategy:</strong> E-commerce & pop-ups
              </p>
              <p className="text-base text-green-700">
                <strong>Goal:</strong> Monetize virality & scale
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
