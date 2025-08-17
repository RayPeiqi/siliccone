export default function Slide09() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8B4513] tracking-tight">PRODUCT LAUNCHES</h2>
          <p className="text-lg sm:text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto leading-relaxed">
            Three-tier strategy targeting different luxury market segments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Tier 1 - Most Expensive */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <img
                src="https://i.imgur.com/kNkFVJs.png"
                alt="Tier 1 Luxury Phone Case"
                className="w-48 h-72 object-contain rounded-2xl shadow-2xl bg-white"
              />
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-[#8B4513] border-b-2 border-[#8B4513] pb-2">1ST LAUNCH</h3>
              <p className="text-base text-[#2C2C2C] font-medium">World's Most Expensive Phone Case</p>
              <p className="text-3xl font-bold text-[#8B4513]">$5,000,000</p>
            </div>
          </div>

          {/* Tier 2 - Celebrity/High Net Worth */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <img
                src="/white-phone-case-blue-waves-crystals.png"
                alt="Tier 2 Celebrity Phone Case"
                className="w-48 h-72 object-contain rounded-2xl shadow-2xl bg-white"
              />
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-[#8B4513] border-b-2 border-[#8B4513] pb-2">2ND LAUNCH</h3>
              <p className="text-base text-[#2C2C2C] font-medium">Celebrity/High Net Worth</p>
              <p className="text-3xl font-bold text-[#8B4513]">$5000 - $100,000</p>
            </div>
          </div>

          {/* Tier 3 - Mass Market */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <img
                src="https://i.imgur.com/FcSHOmG.png"
                alt="Tier 3 Mass Market Phone Case"
                className="w-48 h-72 object-contain rounded-2xl shadow-2xl bg-white"
              />
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-[#8B4513] border-b-2 border-[#8B4513] pb-2">3RD LAUNCH</h3>
              <p className="text-base text-[#2C2C2C] font-medium">Mass Market Series</p>
              <p className="text-3xl font-bold text-[#8B4513]">$500 - $2000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
