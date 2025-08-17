export default function Slide12() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-7xl mx-auto space-y-6 px-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#8B4513]">
            Financial Risk Management
          </h2>
          <p className="text-lg sm:text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive risk mitigation across financial domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 auto-rows-fr px-4">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-2xl p-5 px-8 border border-red-200/50 shadow-lg flex flex-col min-h-[140px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-red-800">Operational Risks</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="text-red-700 font-medium text-sm">Risk:</div>
              <div className="text-red-600 text-sm">Material or production challenges              </div>
              <div className="text-red-700 font-medium text-sm">Mitigation:</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 text-sm">Stringent quality control protocols</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 text-sm">Smaller production runs for piloting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 text-sm">Multiple supplier relationships</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 text-sm">Regular manufacturing audits</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-5 px-8 border border-blue-200/50 shadow-lg flex flex-col min-h-[140px]">
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
              <h3 className="text-xl font-display font-bold text-blue-800">Economic & Financial</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="text-blue-700 font-medium text-sm">Risk:</div>
              <div className="text-blue-600 text-sm">Economic downturns affecting luxury spending</div>
              <div className="text-blue-700 font-medium text-sm">Mitigation:</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-600 text-sm">Target truly wealthy, insulated segments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-600 text-sm">Global market diversification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-600 text-sm">Healthy cash reserves</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-600 text-sm">Tiered model provides flexibility</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-2xl p-5 px-8 border border-rose-200/50 shadow-lg flex flex-col min-h-[140px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-rose-800">Market Acceptance</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="text-rose-700 font-medium text-sm">Risk:</div>
              <div className="text-rose-600 text-sm">Consumer skepticism of silicone luxury</div>
              <div className="text-rose-700 font-medium text-sm">Mitigation:</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span className="text-rose-600 text-sm">Heavy education and myth-busting marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span className="text-rose-600 text-sm">Hands-on experience opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span className="text-rose-600 text-sm">Early adopter and influencer validation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span className="text-rose-600 text-sm">Continuous market research and adaptation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-2xl p-5 px-8 border border-violet-200/50 shadow-lg flex flex-col min-h-[140px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-violet-800">Competitive & Reputational</h3>
            </div>
            <div className="space-y-3 flex-1 text-left">
              <div className="text-violet-700 font-medium text-sm">Risk:</div>
              <div className="text-violet-600 text-sm">Established luxury brands entering market</div>
              <div className="text-violet-700 font-medium text-sm">Mitigation:</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  <span className="text-violet-600 text-sm">First-mover advantage and IP protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  <span className="text-violet-600 text-sm">Rapid brand equity building</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  <span className="text-violet-600 text-sm">Continuous innovation pipeline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  <span className="text-violet-600 text-sm">Crisis PR and transparent communication plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
