export default function Slide03() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513]">SWOT Analysis</h2>
          <p className="text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Strategic assessment of SILIC.ONE's market position
          </p>
        </div>

        {/* Strengths and Weaknesses */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-4 border border-emerald-200/50 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800">Strengths</h3>
            </div>
            <ul className="space-y-2 text-base text-emerald-700">
              <li>• Unique material innovation (silicone leather)</li>
              <li>• Seven generations of Swiss craftsmanship</li>
              <li>• First-mover advantage in luxury-tech accessories</li>
              <li>• Strong brand heritage and authenticity</li>
              <li>• Sustainable luxury positioning</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-4 border border-orange-200/50 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800">Weaknesses</h3>
            </div>
            <ul className="space-y-2 text-base text-orange-700">
              <li className="text-left">• High production costs initially</li>
              <li className="text-left">• Limited brand recognition in tech accessories</li>
              <li className="text-left">• Dependence on two key partnerships</li>
              <li className="text-left">• Complex supply chain coordination</li>
              <li className="text-left">• Premium pricing limits market size</li>
            </ul>
          </div>
        </div>

        {/* Opportunities and Threats */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 rounded-2xl p-4 border border-indigo-200/50 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-800">Opportunities</h3>
            </div>
            <ul className="space-y-2 text-base text-indigo-700">
              <li className="text-left">• Growing luxury tech accessories market</li>
              <li className="text-left">• Increasing demand for sustainable luxury</li>
              <li className="text-left">• Celebrity and influencer partnerships</li>
              <li className="text-left">• Global expansion potential</li>
              <li className="text-left">• Product line diversification</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-lavender-50 rounded-2xl p-4 border border-rose-200/50 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-800">Threats</h3>
            </div>
            <ul className="space-y-2 text-base text-rose-700">
              <li className="text-left">• Established luxury brands entering market</li>
              <li className="text-left">• Economic downturns affecting luxury spending</li>
              <li className="text-left">• Rapid technology changes</li>
              <li className="text-left">• Potential supply chain disruptions</li>
              <li className="text-left">• Counterfeit products and IP theft</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
