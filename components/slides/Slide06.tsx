export default function Slide22() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Customer-Based Brand Equity</h1>
          <p className="text-lg text-gray-600">Building strong brand relationships through CBBE model</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 min-h-[160px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-800">Brand Salience</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-yellow-700">• High visibility at tech & fashion touchpoints</p>
              <p className="text-base text-yellow-700">• Leverage Jahan's existing prestige</p>
              <p className="text-base text-yellow-700">• "The luxury silicone tech accessories brand"</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 min-h-[160px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Brand Meaning</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-blue-700">• Performance: Superior quality & durability</p>
              <p className="text-base text-blue-700">• Imagery: High-end modern lifestyle</p>
              <p className="text-base text-blue-700">• Sustainable luxury positioning</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 min-h-[160px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800">Brand Responses</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-green-700">• Judgments: Innovative, reliable, prestigious</p>
              <p className="text-base text-green-700">• Feelings: Excitement, pride, exclusivity</p>
              <p className="text-base text-green-700">• Ethical comfort from sustainability</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 min-h-[160px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Brand Resonance</h3>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-base text-purple-700">• Behavioral loyalty: Repeat purchases</p>
              <p className="text-base text-purple-700">• Active engagement: Online community</p>
              <p className="text-base text-purple-700">• Brand advocacy: User-generated content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
