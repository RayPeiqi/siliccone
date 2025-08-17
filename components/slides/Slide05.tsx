export default function Slide21() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Brand Positioning</h1>
          <p className="text-lg text-gray-600">Defining a new luxury-tech category</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800">Positioning Statement</h3>
            </div>
            <div className="space-y-3 text-left">
              <p className="text-base text-emerald-700">
                <strong>Category:</strong> Premier luxury-tech accessory brand
              </p>
              <p className="text-base text-emerald-700">
                <strong>Innovation:</strong> Cutting-edge silicone leather technology
              </p>
              <p className="text-base text-emerald-700">
                <strong>Heritage:</strong> Genuine luxury craftsmanship via Jahan
              </p>
              <p className="text-base text-emerald-700">
                <strong>Strategy:</strong> Tiered approach from $5M to accessible luxury
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Value Proposition</h3>
            </div>
            <div className="space-y-3 text-left">
              <p className="text-base text-blue-700">
                <strong>Dual Promise:</strong> Innovation + Heritage
              </p>
              <p className="text-base text-blue-700">
                <strong>Performance:</strong> Superior protection & durability
              </p>
              <p className="text-base text-blue-700">
                <strong>Exclusivity:</strong> Limited editions & bespoke options
              </p>
              <p className="text-base text-blue-700">
                <strong>Aspiration:</strong> Status symbol of innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
