export default function Slide19() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#8B4513]">
            Customer Personas & Targeting
          </h2>
          <p className="text-lg sm:text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Deep understanding of our luxury consumer segments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 rounded-3xl p-6 border border-purple-200/50 shadow-xl">
            <div className="flex justify-center mb-4">
              <img
                src="/middle-eastern-businessman-dubai.png"
                alt="Ultra High Net Worth Individual"
                className="w-20 h-20 rounded-full object-cover border-4 border-purple-200 shadow-lg"
              />
            </div>
            <h3 className="text-xl font-display font-bold text-purple-800 mb-3">The Ultra Collector</h3>
            <div className="space-y-3 text-left">
              <div>
                <span className="text-purple-700 font-semibold text-xs">Profile:</span>
                <p className="text-purple-600 text-xs">
                  Middle Eastern businessman, 45-65, $30M+ net worth, collector of rare luxury items
                </p>
              </div>
              <div>
                <span className="text-purple-700 font-semibold text-xs">Motivation:</span>
                <p className="text-purple-600 text-xs">
                  Exclusivity, investment potential, conversation starter, status symbol
                </p>
              </div>
              <div>
                <span className="text-purple-700 font-semibold text-xs">Channels:</span>
                <p className="text-purple-600 text-xs">
                  Private sales, luxury events, word-of-mouth, concierge services
                </p>
              </div>
              <div className="bg-purple-100 rounded-lg p-2">
                <span className="text-purple-800 font-bold text-xs">Target: Tier 1 ($5M)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-6 border border-emerald-200/50 shadow-xl">
            <div className="flex justify-center mb-4">
              <img
                src="/singaporean-fashion-director.png"
                alt="Luxury Fashion Professional"
                className="w-20 h-20 rounded-full object-cover border-4 border-emerald-200 shadow-lg"
              />
            </div>
            <h3 className="text-xl font-display font-bold text-emerald-800 mb-3">The Tastemaker</h3>
            <div className="space-y-3 text-left">
              <div>
                <span className="text-emerald-700 font-semibold text-xs">Profile:</span>
                <p className="text-emerald-600 text-xs">
                  Singaporean fashion director, 35-50, $150K+ income, luxury industry insider
                </p>
              </div>
              <div>
                <span className="text-emerald-700 font-semibold text-xs">Motivation:</span>
                <p className="text-emerald-600 text-xs">
                  Cutting-edge design, professional credibility, Instagram-worthy, early adoption
                </p>
              </div>
              <div>
                <span className="text-emerald-700 font-semibold text-xs">Channels:</span>
                <p className="text-emerald-600 text-xs">
                  Fashion weeks, luxury retail, social media, industry publications
                </p>
              </div>
              <div className="bg-emerald-100 rounded-lg p-2">
                <span className="text-emerald-800 font-bold text-xs">Target: Tier 2 ($50K)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 rounded-3xl p-6 border border-blue-200/50 shadow-xl">
            <div className="flex justify-center mb-4">
              <img
                src="/korean-american-architect.png"
                alt="Tech-Savvy Professional"
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-200 shadow-lg"
              />
            </div>
            <h3 className="text-xl font-display font-bold text-blue-800 mb-3">The Innovator</h3>
            <div className="space-y-3 text-left">
              <div>
                <span className="text-blue-700 font-semibold text-xs">Profile:</span>
                <p className="text-blue-600 text-xs">
                  Korean-American architect, 28-45, $85K+ income, tech enthusiast, design-conscious
                </p>
              </div>
              <div>
                <span className="text-blue-700 font-semibold text-xs">Motivation:</span>
                <p className="text-blue-600 text-xs">
                  Material innovation, sustainable luxury, unique design, quality craftsmanship
                </p>
              </div>
              <div>
                <span className="text-blue-700 font-semibold text-xs">Channels:</span>
                <p className="text-blue-600 text-xs">
                  Online platforms, design blogs, tech conferences, premium retail stores
                </p>
              </div>
              <div className="bg-blue-100 rounded-lg p-2">
                <span className="text-blue-800 font-bold text-xs">Target: Tier 3 ($5K)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 rounded-3xl p-6 border border-slate-200/50 shadow-xl">
          <h3 className="text-xl font-display font-bold text-slate-800 mb-4">Targeting Strategy</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="text-base font-semibold text-slate-700 mb-2">Geographic Focus</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Primary: NYC, LA, London, Dubai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Secondary: Paris, Tokyo, Singapore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Expansion: Hong Kong, Miami, Monaco</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-700 mb-2">Psychographics</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Values exclusivity and craftsmanship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Early adopters of luxury innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Sustainability-conscious consumers</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-700 mb-2">Behavioral Patterns</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Research extensively before purchase</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Share luxury experiences socially</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-600 text-xs">Value personalized service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
