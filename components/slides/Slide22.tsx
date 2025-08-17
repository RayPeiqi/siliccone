export default function Slide26() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Risk Management</h1>
          <p className="text-lg text-gray-600">Proactive risk mitigation across key domains</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 min-h-[160px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <h3 className="text-xl font-semibold text-red-800">Operational Risks</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-red-700">• Material quality control protocols             </p>
              <p className="text-base text-red-700">• Multiple supplier relationships</p>
              <p className="text-base text-red-700">• Phased production rollouts</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 min-h-[160px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800">Market Risks</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-orange-700">• Consumer education on silicone luxury</p>
              <p className="text-base text-orange-700">• Early adopter validation</p>
              <p className="text-base text-orange-700">• Continuous market research</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 min-h-[160px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-800">Financial Risks</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-yellow-700">• Economic downturn sensitivity</p>
              <p className="text-base text-yellow-700">• Material cost hedging strategies</p>
              <p className="text-base text-yellow-700">• Global market diversification</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 min-h-[160px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Reputational Risks</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-purple-700">• Crisis PR response plans</p>
              <p className="text-base text-purple-700">• Transparent communications</p>
              <p className="text-base text-purple-700">• Brand ambassador vetting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
