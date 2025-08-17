export default function Slide01() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-background via-card to-muted gradient-shift">
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with glow effects */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/30 to-secondary/20 rounded-full blur-xl float pulse-glow"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full blur-xl float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-secondary/25 to-primary/15 rounded-full blur-lg float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Sparkle effects */}
        <div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full sparkle"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-secondary rounded-full sparkle"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-primary rounded-full sparkle"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 space-y-8 md:space-y-12">
        <div className="space-y-6">
          <div className="relative">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight drop-shadow-lg shimmer">
              SILIC.ONE
            </h1>
            {/* Magical underline with animation */}
            <div className="flex justify-center items-center space-x-3 mt-4">
              <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full shimmer"></div>
              <div className="w-4 h-4 bg-gradient-to-br from-accent to-secondary rounded-full shadow-lg pulse-glow"></div>
              <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full shimmer"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-display font-semibold max-w-5xl mx-auto leading-relaxed">
            Where Innovation Meets Luxury
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Cutting-edge silicone leather technology meets seven generations of Swiss jewelry craftsmanship
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-16 text-lg sm:text-xl font-medium">
          <div className="group flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 pulse-glow">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-primary group-hover:text-accent transition-colors duration-300">Innovation</span>
          </div>

          <div className="group flex items-center space-x-3 cursor-pointer">
            <div
              className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 pulse-glow"
              style={{ animationDelay: "1s" }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-primary group-hover:text-accent transition-colors duration-300">Heritage</span>
          </div>

          <div className="group flex items-center space-x-3 cursor-pointer">
            <div
              className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 pulse-glow"
              style={{ animationDelay: "2s" }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-primary group-hover:text-accent transition-colors duration-300">Luxury</span>
          </div>
        </div>

        <div className="pt-8">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group pulse-glow">
            <span className="text-base font-semibold group-hover:scale-105 transition-transform duration-300">
              Brand Audit & Strategic Positioning
            </span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
