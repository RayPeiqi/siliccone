export default function Slide14() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Distribution Strategy</h1>
          <p className="text-lg text-gray-600">Selective distribution aligned with luxury positioning</p>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src="/luxury-storefront.png"
            alt="Luxury retail storefront"
            className="rounded-2xl shadow-lg object-cover h-48 w-96"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 rounded-2xl p-6 border border-purple-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">👑</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Tier 1 Distribution</h3>
            </div>
            <div className="space-y-2 text-sm text-purple-700">
              <p>• Private appointments only</p>
              <p>• Jahan flagship ateliers</p>
              <p>• Elite concierge networks</p>
              <p>• White-glove delivery service</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🏪</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Tier 2 Distribution</h3>
            </div>
            <div className="space-y-2 text-sm text-blue-700">
              <p>• Flagship boutiques in luxury districts</p>
              <p>• Premium department stores</p>
              <p>• Invitation-only trunk shows</p>
              <p>• Limited online showroom</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-6 border border-green-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800">Tier 3 Distribution</h3>
            </div>
            <div className="space-y-2 text-sm text-green-700">
              <p>• Official website e-commerce</p>
              <p>• Upscale electronics retailers</p>
              <p>• Premium concept stores</p>
              <p>• Pop-up installations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
