export default function Slide23() {
  return (
    <div className="h-screen bg-[#fefbf3] flex flex-col justify-center items-center px-8 pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Founders' Strategic Roles</h1>
          <p className="text-lg text-gray-600">Complementary expertise driving brand vision</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bs8D0bXoqv7KVL2JWZBXmNtgehbpSV.png"
                alt="Hoda - Co-founder"
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-rose-200"
              />
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 min-h-[200px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <h3 className="text-xl font-semibold text-rose-800">Hoda's Domain</h3>
              </div>
              <div className="space-y-3 text-left">
                <p className="text-base text-rose-700">
                  <strong>Expertise:</strong> Luxury retail & high jewelry
                </p>
                <p className="text-base text-rose-700">
                  <strong>Responsibilities:</strong> Gemstone QC, UHNW clients
                </p>
                <p className="text-base text-rose-700">
                  <strong>Network:</strong> Elite clientele connections
                </p>
                <p className="text-base text-rose-700">
                  <strong>Focus:</strong> Event curation & luxury experiences
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X1F251JsCdRUhXrWnnjKpB2w2Vv1nM.png"
                alt="Daryl - Co-founder"
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-blue-200"
              />
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 min-h-[200px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Daryl's Domain</h3>
              </div>
              <div className="space-y-3 text-left">
                <p className="text-base text-blue-700">
                  <strong>Expertise:</strong> Technology & digital strategy
                </p>
                <p className="text-base text-blue-700">
                  <strong>Responsibilities:</strong> Operations, website, packaging
                </p>
                <p className="text-base text-blue-700">
                  <strong>Innovation:</strong> Material science bridge to Orion
                </p>
                <p className="text-base text-blue-700">
                  <strong>Focus:</strong> Digital scalability & brand aesthetics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
