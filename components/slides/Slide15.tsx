export default function Slide17() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#8B4513]">
            Market Size & Revenue Opportunity
          </h2>
          <p className="text-base sm:text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Capturing value in the expanding luxury-tech accessories market
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-5 border border-amber-200/50 shadow-lg flex flex-col min-h-[160px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-display font-bold text-amber-800">Market Opportunity</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div>
                <div className="text-amber-700 font-semibold text-sm mb-1">Luxury Tech Accessories:</div>
                <div className="text-amber-600 text-sm">
                  Burgeoning segment with limited direct competition in ultra-premium category
                </div>
              </div>
              <div>
                <div className="text-amber-700 font-semibold text-sm mb-1">First-Mover Advantage:</div>
                <div className="text-amber-600 text-sm">Pioneer new category of silicone-based luxury products</div>
              </div>
              <div>
                <div className="text-amber-700 font-semibold text-sm mb-1">Market Position:</div>
                <div className="text-amber-600 text-sm">Fresh positioning with limited direct competition</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-5 border border-emerald-200/50 shadow-lg flex flex-col min-h-[160px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-display font-bold text-emerald-800">Revenue Potential</h3>
            </div>
            <div className="space-y-2 flex-1">
              <div>
                <div className="text-emerald-700 font-semibold text-sm mb-1">Conservative Projections:</div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 text-sm">Year 1 Target:</span>
                  <span className="text-emerald-600 font-bold text-xs">$200K+ (Break-even)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-emerald-600 text-xs">18-Month Target:</span>
                  <span className="text-emerald-600 font-bold text-xs">$1M Revenue</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-emerald-600 text-xs">Year 3-5 Potential:</span>
                  <span className="text-emerald-600 font-bold text-xs">$10M+ Annual</span>
                </div>
              </div>
              <div>
                <div className="text-emerald-700 font-semibold text-sm mb-1">Expansion Opportunities:</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-600 text-xs">Product line diversification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-600 text-xs">Geographic market expansion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-600 text-xs">Innovation licensing revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-5 border border-blue-200/50 shadow-lg flex flex-col min-h-[160px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-display font-bold text-blue-800">Target Market Segments</h3>
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-blue-700 text-sm">Ultra HNW (Tier 1)</span>
                <span className="text-blue-600 font-bold text-sm">$30M+ Net Worth</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700 text-sm">Aspirational (Tier 2)</span>
                <span className="text-blue-600 font-bold text-sm">$150K+ Income</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700 text-sm">Mass Luxury (Tier 3)</span>
                <span className="text-blue-600 font-bold text-sm">$85K+ Income</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-2xl p-5 border border-violet-200/50 shadow-lg flex flex-col min-h-[160px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-violet-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-display font-bold text-violet-800">Competitive Landscape Value</h3>
            </div>
            <div className="space-y-2 flex-1 text-left">
              <div className="text-left">
                <div className="text-violet-700 font-semibold text-sm mb-1 text-left">Mass Market (CASETIFY):</div>
                <div className="text-violet-600 text-xs">$40-$90 range - different customer segment entirely</div>
              </div>
              <div>
                <div className="text-violet-700 font-semibold text-sm mb-1">Premium (Golden Concept):</div>
                <div className="text-violet-600 text-xs">$1K-$4K range - modular design focus</div>
              </div>
              <div>
                <div className="text-violet-700 font-semibold text-sm mb-1">Ultra-Luxury (Caviar):</div>
                <div className="text-violet-600 text-xs">$1.2K-$80K+ range - traditional jewel encrustation</div>
              </div>
              <div className="bg-violet-100 rounded-lg p-2 mt-2">
                <div className="text-violet-700 font-semibold text-xs mb-1">SILIC.ONE Differentiation:</div>
                <div className="text-violet-600 text-xs">
                  Material innovation + heritage craftsmanship + tiered strategy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
