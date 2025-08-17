export default function Slide04() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-6 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#8B4513]">
            Tier 1: Legend Building
          </h2>
          <p className="text-base sm:text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            The pinnacle of luxury craftsmanship - Record Breaker
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-6 border border-purple-200/50 shadow-xl">
              <h3 className="text-xl font-display font-bold text-purple-800 mb-4">Product Details</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-purple-700 font-medium">Base Material:</span>
                  <span className="text-purple-600">Tungsten-infused silicone</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-700 font-medium">Gemstones:</span>
                  <span className="text-purple-600">Ethically sourced diamonds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-700 font-medium">Setting:</span>
                  <span className="text-purple-600">Hand-set platinum bezels</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-700 font-medium">Craftsmanship:</span>
                  <span className="text-purple-600">Jahan artisan mastery</span>
                </div>
                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-800">Price:</span>
                    <span className="text-3xl font-bold text-purple-600">$5,000,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-4 border border-amber-200/50 shadow-lg">
              <h4 className="text-base font-display font-bold text-amber-800 mb-2">Record Breaker</h4>
              <p className="text-amber-700 text-xs leading-relaxed">
                High-grade silicone enhanced with tungsten dust infusion for premium weight and hand feel. Features rare
                gemstones from Jahan arranged in sophisticated patterns, combining modern materials with timeless
                craftsmanship artistry.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O5r2SpxesVpV0Af4YJdQrGSkFks2VB.png"
                alt="Tier 1 Diamond Phone Case"
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
