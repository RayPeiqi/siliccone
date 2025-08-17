export default function Slide24() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Marketing Mix: Pricing Strategy</h1>
          <p className="text-lg text-gray-600">Strategic pricing across three tiers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Tier 1 Pricing</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-purple-700">
                <strong>Price:</strong> $5 Million USD
              </p>
              <p className="text-base text-purple-700">
                <strong>Strategy:</strong> Benchmark luxury positioning
              </p>
              <p className="text-base text-purple-700">
                <strong>Value:</strong> Rare diamonds, bespoke design
              </p>
              <p className="text-base text-purple-700">
                <strong>Goal:</strong> Media coverage and prestige
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Tier 2 Pricing</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-blue-700">
                <strong>Range:</strong> $5,000 - $100,000
              </p>
              <p className="text-base text-blue-700">
                <strong>Strategy:</strong> Luxury collectibles
              </p>
              <p className="text-base text-blue-700">
                <strong>Value:</strong> Limited editions, precious metals
              </p>
              <p className="text-base text-blue-700">
                <strong>Goal:</strong> Collector engagement
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800">Tier 3 Pricing</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-green-700">
                <strong>Range:</strong> $500 - $2,000
              </p>
              <p className="text-base text-green-700">
                <strong>Strategy:</strong> Accessible luxury
              </p>
              <p className="text-base text-green-700">
                <strong>Value:</strong> Premium materials, subtle gems
              </p>
              <p className="text-base text-green-700">
                <strong>Goal:</strong> Volume and brand presence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
