export default function Slide05() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#8B4513]">
            Tier 2: Collector Engagement
          </h2>
          <p className="text-base sm:text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Premium luxury for discerning collectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-6 border border-emerald-200/50 shadow-xl">
              <h3 className="text-xl font-display font-bold text-emerald-800 mb-4">Product Details</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-medium">Base Material:</span>
                  <span className="text-emerald-600">Premium silicone leather</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-medium">Accents:</span>
                  <span className="text-emerald-600">Semi-precious stones</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-medium">Setting:</span>
                  <span className="text-emerald-600">Sterling silver bezels</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-medium">Finish:</span>
                  <span className="text-emerald-600">Hand-polished luxury</span>
                </div>
                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-800">Price:</span>
                    <span className="text-3xl font-bold text-emerald-600">$5000 - $100,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-4 border border-blue-200/50 shadow-lg">
              <h4 className="text-base font-display font-bold text-blue-800 mb-2">Collector's Choice</h4>
              <p className="text-blue-700 text-xs leading-relaxed">
                Sophisticated design featuring premium silicone leather with carefully selected semi-precious stone
                accents. Each piece showcases refined craftsmanship perfect for luxury collectors.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mXmjmvG4eBNph0ObAA63xu0mvjMb3l.png"
                alt="Tier 2 Collector Phone Case"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
