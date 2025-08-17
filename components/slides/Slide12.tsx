export default function Slide06() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#8B4513]">
            Tier 3: Volume & Presence
          </h2>
          <p className="text-base sm:text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Accessible luxury with premium quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-3xl p-6 border border-rose-200/50 shadow-xl">
              <h3 className="text-xl font-display font-bold text-rose-800 mb-4">Product Details</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-rose-700 font-medium">Base Material:</span>
                  <span className="text-rose-600">Silicone leather</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-rose-700 font-medium">Accents:</span>
                  <span className="text-rose-600">Precision metalwork</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-rose-700 font-medium">Design:</span>
                  <span className="text-rose-600">Minimalist luxury</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-rose-700 font-medium">Quality:</span>
                  <span className="text-rose-600">Swiss craftsmanship</span>
                </div>
                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-rose-800">Price:</span>
                    <span className="text-3xl font-bold text-rose-600">$500 - $2000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-2xl p-4 border border-violet-200/50 shadow-lg">
              <h4 className="text-base font-display font-bold text-violet-800 mb-2">Accessible Luxury</h4>
              <p className="text-violet-700 text-xs leading-relaxed">
                Clean, sophisticated design that maintains the SILIC.ONE quality standards while offering an entry point
                into the luxury ecosystem. Perfect for style-conscious consumers.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://i.imgur.com/glW078K.png"
                alt="Tier 3 Volume Phone Case"
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
