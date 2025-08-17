export default function Slide08() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Brand Voice & Messaging</h2>
          <p className="text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Four strategic pillars that define our communication strategy
          </p>
        </div>

        {/* Four brand pillars in a single row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">Innovation Meets Heritage</h3>
            <p className="text-base text-emerald-700 leading-relaxed">
              Highlighting the core collaboration between Orion's modern technology and Jahan's centuries-old
              craftsmanship
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Performance & Craftsmanship</h3>
            <p className="text-base text-blue-700 leading-relaxed">
              Communicating both functional superiority and artisanal quality - best-in-class from inside out
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-2xl p-6 border border-rose-200/50 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-rose-800 mb-3">Sustainable Luxury</h3>
            <p className="text-base text-rose-700 leading-relaxed">
              Emphasizing forward-thinking, responsible luxury through vegan silicone leather without sacrificing
              prestige
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-6 border border-amber-200/50 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-amber-800 mb-3">Exclusivity & Experience</h3>
            <p className="text-base text-amber-700 leading-relaxed">
              Creating sense of rarity and VIP treatment - joining an exclusive experience, not just buying a product
            </p>
          </div>
        </div>

        {/* Voice transformation examples - two wider boxes */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 rounded-2xl p-6 border border-slate-200/50 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Voice Transformation Examples</h3>
            <div className="space-y-3">
              <div>
                <span className="text-base text-red-600 font-semibold">Instead of:</span>
                <span className="text-base text-slate-600 ml-2">"Made from premium materials"</span>
              </div>
              <div>
                <span className="text-base text-green-600 font-semibold">Say:</span>
                <span className="text-base text-slate-700 ml-2">"Laced with diamonds. Bound in precision."</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 rounded-2xl p-6 border border-slate-200/50 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Additional Examples</h3>
            <div className="space-y-3">
              <div>
                <span className="text-base text-red-600 font-semibold">Instead of:</span>
                <span className="text-base text-slate-600 ml-2">"Durable and long-lasting"</span>
              </div>
              <div>
                <span className="text-base text-green-600 font-semibold">Say:</span>
                <span className="text-base text-slate-700 ml-2">"Engineered for eternity. Crafted for legends."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
