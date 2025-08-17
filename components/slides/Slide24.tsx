export default function Slide29() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Innovation Licensing</h1>
          <p className="text-lg text-gray-600">Expanding silicone leather technology beyond phone cases</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800">Licensing Opportunities</h3>
            </div>
            <div className="space-y-3 text-left">
              <p className="text-base text-emerald-700">
                <strong>Target Partners:</strong> Hermès, Louis Vuitton, Patek Philippe
              </p>
              <p className="text-base text-emerald-700">
                <strong>Applications:</strong> Car interiors, handbags, watch straps
              </p>
              <p className="text-base text-emerald-700">
                <strong>Timeline:</strong> 2 years post-launch
              </p>
              <p className="text-base text-emerald-700">
                <strong>Model:</strong> Exclusive limited-term licensing
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
                <strong>Benefits:</strong> Durability, sustainability, luxury feel
              </p>
              <p className="text-base text-blue-700">
                <strong>Customization:</strong> Brand-specific formulations
              </p>
              <p className="text-base text-blue-700">
                <strong>Revenue:</strong> High-margin, scalable stream
              </p>
              <p className="text-base text-blue-700">
                <strong>Position:</strong> Materials innovation platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
