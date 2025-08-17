export default function Slide23() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Parent Brand Influence</h1>
          <p className="text-lg text-gray-600">Leveraging Orion's innovation and Jahan's heritage</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Orion's Influence</h3>
            </div>
            <div className="space-y-3 text-left">
              <p className="text-base text-blue-700">
                <strong>Innovation Engine:</strong> Advanced silicone leather technology
              </p>
              <p className="text-base text-blue-700">
                <strong>Credibility:</strong> Medical & aerospace-grade materials
              </p>
              <p className="text-base text-blue-700">
                <strong>Sustainability:</strong> Eco-friendly, animal-free processes
              </p>
              <p className="text-base text-blue-700">
                <strong>Culture:</strong> Precision and scientific advancement
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800">Jahan's Influence</h3>
            </div>
            <div className="space-y-3 text-left">
              <p className="text-base text-amber-700">
                <strong>Heritage:</strong> Seven generations of Swiss craftsmanship
              </p>
              <p className="text-base text-amber-700">
                <strong>Luxury DNA:</strong> Timeless elegance and attention to detail
              </p>
              <p className="text-base text-amber-700">
                <strong>Network:</strong> Elite clientele and high-society connections
              </p>
              <p className="text-base text-amber-700">
                <strong>Authenticity:</strong> Genuine luxury from inception
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
