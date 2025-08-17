export default function Slide10() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#8B4513]">
            Financial Philosophy & Milestones
          </h2>
          <p className="text-lg sm:text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Long-term value creation with strategic financial discipline
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-6 border border-amber-200/50 shadow-lg flex flex-col min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-amber-800">Financial Ethos</h3>
            </div>
            <div className="space-y-3 flex-1">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-amber-700 text-sm">Long-term value creation over short-term profit</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-amber-700 text-sm">Heavy reinvestment in R&D and brand equity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-amber-700 text-sm">No founder salaries in early phase</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-amber-700 text-sm">Designed as scalable vehicle for acquisition/IPO</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg flex flex-col min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-blue-800">Key Milestones</h3>
            </div>
            <div className="space-y-3 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-blue-700 font-medium">Break-even Timeline:</span>
                <span className="text-blue-600 font-bold">1-2 launches</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700 font-medium">18-Month Revenue:</span>
                <span className="text-blue-600 font-bold">$1M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700 font-medium">Net Profit Margin:</span>
                <span className="text-blue-600 font-bold">&gt;30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700 font-medium">Profit Reinvestment:</span>
                <span className="text-blue-600 font-bold">&gt;70%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50 shadow-lg flex flex-col min-h-[200px]">
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
              <h3 className="text-xl font-display font-bold text-emerald-800">Break-Even Strategy</h3>
            </div>
            <div className="space-y-3 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-emerald-700 font-medium">Break-even Target:</span>
                <span className="text-emerald-600 font-bold">$200K</span>
              </div>
              <div className="text-emerald-700 text-sm">
                Covers prototyping, materials, design, legal, and marketing costs
              </div>
              <div className="text-emerald-700 text-sm">Expected via Tier 1 viral potential + Tier 2 momentum</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 rounded-2xl p-6 border border-purple-200/50 shadow-lg flex flex-col min-h-[200px]">
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
              <h3 className="text-xl font-display font-bold text-purple-800">Transition Strategy</h3>
            </div>
            <div className="space-y-3 flex-1">
              <div className="text-purple-700 text-sm">
                Transition from ownership-based wealth creation to operational cash flow within first three years. Focus
                on recurring press exposure, influencer validation, and team expansion.
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-700 font-medium">Strategic Focus:</span>
                <span className="text-purple-600 font-bold">Brand Equity Building</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-700 font-medium">Timeline:</span>
                <span className="text-purple-600 font-bold">36 Months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
