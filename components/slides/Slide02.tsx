export default function Slide02() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-8 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Brand Introduction</h2>
          <p className="text-lg text-[#2C2C2C]/70 max-w-4xl mx-auto leading-relaxed">
            Pioneering the fusion of advanced materials with timeless artistry
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50 shadow-lg max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Our Vision</h3>
          <p className="text-lg text-[#2C2C2C]/80 leading-relaxed max-w-4xl mx-auto">
            To revolutionize luxury accessories by seamlessly blending Orion's cutting-edge silicone leather technology
            with Jahan's seven generations of Swiss jewelry mastery, creating unprecedented products that redefine
            modern luxury. Our tagline <span className="font-semibold text-[#8B4513]">"Silicone meets Solitaire"</span>{" "}
            encapsulates this vision, targeting sophisticated, tech-savvy consumers who prioritize luxury,
            sustainability, and innovation.
          </p>
        </div>

        {/* Partnership Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B4513]">Orion Technologies</h3>
            </div>
            {/* Standardized text size */}
            <p className="text-base text-emerald-700 leading-relaxed">
              Revolutionary silicone leather innovation that delivers the luxury feel of traditional leather while being
              completely vegan, durable, and environmentally sustainable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-6 border border-amber-200/50 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B4513]">Jahan Artisans</h3>
            </div>
            {/* Standardized text size */}
            <p className="text-base text-amber-700 leading-relaxed">
              Seven generations of Swiss jewelry craftsmanship, specializing in precision gemstone setting and luxury
              metalwork that has adorned royalty and celebrities worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
