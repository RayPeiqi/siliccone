export default function Slide11() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#8B4513]">
            Revenue Projections & Business Model
          </h2>
          <p className="text-lg sm:text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Conservative growth projections with multiple revenue streams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-5 border border-emerald-200/50 shadow-lg flex flex-col min-h-[140px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-emerald-800">Revenue Model by Tier</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="flex justify-between items-center">
                <span className="text-emerald-700 text-sm">Tier 1 (Legend Building)</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                  Break-even/PR
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-700 text-sm">Tier 2 (Collector Engagement)</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">High Margin</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-700 text-sm">Tier 3 (Volume & Presence)</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Healthy Markup</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-2xl p-5 border border-rose-200/50 shadow-lg flex flex-col min-h-[140px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-rose-800">Margin Management</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="text-rose-700 font-medium text-sm">High-Cost Structure:</div>
              <ul className="space-y-1 text-rose-600 text-sm">
                <li>• Precious materials and hand labor                  </li>
                <li>• Detailed costing for each design</li>
                <li>• Target gross margin percentages by tier</li>
              </ul>
              <div className="text-rose-700 font-medium text-sm">Sales Mix Monitoring:</div>
              <ul className="space-y-1 text-rose-600 text-sm">
                <li>• Tier 3 volume vs. production capacity</li>
                <li>• Balance cash flow with exclusivity</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-5 border border-blue-200/50 shadow-lg flex flex-col min-h-[140px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-blue-800">Cash Flow Projections</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="text-blue-700 font-medium text-sm">Year 1:</div>
              <div className="text-blue-600 text-sm">Tier 2 pieces + Tier 3 brand awareness            </div>
              <div className="text-blue-700 font-medium text-sm">Year 2-3:</div>
              <div className="text-blue-600 text-sm">Positive cash flow with regular launches</div>
              <div className="text-blue-700 font-medium text-sm">Seasonality:</div>
              <div className="text-blue-600 text-sm">Holiday spikes drive Tier 2</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-2xl p-5 border border-violet-200/50 shadow-lg flex flex-col min-h-[140px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-violet-800">Future Revenue Streams</h3>
            </div>
            <div className="space-y-2 flex-1 text-left">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <span className="text-violet-600 text-sm">Innovation licensing (Year 2+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <span className="text-violet-600 text-sm">Product line expansion</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <span className="text-violet-600 text-sm">Strategic partnerships</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <span className="text-violet-600 text-sm">Exclusive membership services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
