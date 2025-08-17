export default function Slide13() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#8B4513]">
            Market Size & Revenue Opportunity
          </h2>
          <p className="text-lg sm:text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Capturing value in the expanding luxury-tech accessories market
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 auto-rows-min">
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-5 border border-amber-200/50 shadow-lg flex flex-col min-h-[120px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-amber-800">Market Opportunity</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="text-amber-700 font-medium">Luxury Tech Accessories:</div>
              <div className="text-amber-600 text-sm">
                Burgeoning segment with limited direct competition in ultra-premium category
              </div>
              <div className="text-amber-700 font-medium">First-Mover Advantage:</div>
              <div className="text-amber-600 text-sm">Pioneer new category of silicone-based luxury products</div>
              <div className="text-amber-700 font-medium">Market Position:</div>
              <div className="text-amber-600 text-sm">Fresh positioning with limited direct competition</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-5 border border-emerald-200/50 shadow-lg flex flex-col min-h-[120px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-emerald-800">Revenue Potential</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="text-emerald-700 font-medium">Conservative Projections:</div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-600 text-sm">Year 1 Target:</span>
                <span className="text-emerald-600 font-bold">$200K+ (Break-even)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-600 text-sm">18-Month Target:</span>
                <span className="text-emerald-600 font-bold">$1M Revenue</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-600 text-sm">Year 3-5 Potential:</span>
                <span className="text-emerald-600 font-bold">$10M+ Annual</span>
              </div>
              <div className="text-emerald-700 font-medium">Expansion Opportunities:</div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-600 text-sm">Product line diversification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-600 text-sm">Geographic market expansion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-5 border border-blue-200/50 shadow-lg flex flex-col min-h-[120px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-blue-800">Target Market Segments</h3>
            </div>
            <div className="space-y-2 flex-1 text-left">
              <div className="flex justify-between items-center">
                <span className="text-blue-700 text-sm">Ultra HNW (Tier 1)</span>
                <span className="text-blue-600 font-bold">$30M+ Net Worth</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700 text-sm">Aspirational (Tier 2)</span>
                <span className="text-blue-600 font-bold">$150K+ Income</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700 text-sm">Mass Luxury (Tier 3)</span>
                <span className="text-blue-600 font-bold">$85K+ Income</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 rounded-2xl p-5 border border-purple-200/50 shadow-lg flex flex-col min-h-[120px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-purple-800">Competitive Landscape Value</h3>
            </div>
            <div className="space-y-2 flex-1 text-left">
              <div className="text-purple-700 font-medium text-sm">Mass Market (CASETiFY): $40-$90 range</div>
              <div className="text-purple-700 font-medium text-sm">Premium (Golden Concept): $1K-$4K range</div>
              <div className="text-purple-700 font-medium text-sm">Ultra-Luxury (Caviar): $10K+ range</div>
              <div className="text-purple-700 font-medium text-sm">SILIC.ONE Differentiation:</div>
              <div className="text-purple-600 text-sm">
                Material innovation + heritage craftsmanship + tiered strategy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
