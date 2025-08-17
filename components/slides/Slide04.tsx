export default function Slide04() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Competitor Analysis</h1>
          <p className="text-lg text-gray-600">Positioning against key market players</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 min-h-[280px] shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hEQ1aLnYVrGe1j8uiGroi8LWQPZcVw.png"
                  alt="CASETiFY Logo"
                  className="h-10 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800">CASETiFY</h3>
              <span className="text-sm text-blue-600 font-medium">Mass-Market Leader</span>
            </div>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p className="text-sm text-blue-700">
                  <strong>Price:</strong> $40-$70 range
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p className="text-sm text-blue-700">
                  <strong>Strategy:</strong> Pop culture collaborations
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p className="text-sm text-blue-700">
                  <strong>Gap:</strong> Lacks luxury materials & exclusivity
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 min-h-[280px] shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OJ20AhtPWyp5IhMBdtb1mjpp5KIR8y.png"
                  alt="Caviar Logo"
                  className="h-10 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-purple-800">Caviar</h3>
              <span className="text-sm text-purple-600 font-medium">Ultra-Luxury Customization</span>
            </div>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <p className="text-sm text-purple-700">
                  <strong>Price:</strong> $1,200-$80,000+
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <p className="text-sm text-purple-700">
                  <strong>Strategy:</strong> Gold plating & jewel encrustation
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <p className="text-sm text-purple-700">
                  <strong>Gap:</strong> Lacks technical innovation & brand story
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 min-h-[280px] shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ODEYaixfyX7PNmg5bua4zlF4aLqnA2.png"
                  alt="GRAY Logo"
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-green-800">GRAY® & Others</h3>
              <span className="text-sm text-green-600 font-medium">Premium Craftsmanship</span>
            </div>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-sm text-green-700">
                  <strong>Price:</strong> $1,000+ titanium cases
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-sm text-green-700">
                  <strong>Strategy:</strong> Aerospace materials & limited editions
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-sm text-green-700">
                  <strong>Gap:</strong> Lacks heritage story & gemstone artistry
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
          <h3 className="text-xl font-bold text-[#8B4513] mb-2">SILIC.ONE Advantage</h3>
          <p className="text-gray-700">
            Unique positioning combining technical innovation, luxury heritage, and sustainable materials across three
            strategic tiers
          </p>
        </div>
      </div>
    </div>
  )
}
