export default function Loading() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">

      {/* ====================================================== */}
      {/* Animated Background */}
      {/* ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Large Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[150px]" />

        {/* Floating Orbs */}

        <div className="absolute left-[15%] top-[18%] h-4 w-4 animate-pulse rounded-full bg-cyan-400" />

        <div className="absolute left-[70%] top-[20%] h-3 w-3 animate-ping rounded-full bg-blue-400" />

        <div className="absolute left-[85%] top-[70%] h-2 w-2 animate-pulse rounded-full bg-indigo-400" />

        <div className="absolute left-[25%] bottom-[15%] h-3 w-3 animate-ping rounded-full bg-cyan-300" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ====================================================== */}
      {/* Main Content */}
      {/* ====================================================== */}

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6">

        {/* Small Badge */}

        <div className="mb-10 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-2 backdrop-blur-md">

          <span className="text-sm font-semibold tracking-[0.35em] uppercase text-cyan-300">
            NEXT GENERATION PLATFORM
          </span>

        </div>

        {/* Loader */}

        <div className="relative mb-12 h-40 w-40">

          {/* Ring */}

          <div className="absolute inset-0 animate-spin rounded-full border-[5px] border-cyan-500/20 border-t-cyan-400" />

          <div className="absolute inset-4 animate-[spin_2.5s_linear_reverse_infinite] rounded-full border-[5px] border-blue-500/20 border-t-blue-400" />

          <div className="absolute inset-8 animate-spin rounded-full border-[5px] border-indigo-500/20 border-t-indigo-300" />

          <div className="absolute inset-12 animate-[spin_5s_linear_infinite] rounded-full border border-cyan-300/40" />

          {/* Logo */}

          <div className="absolute inset-[52px] flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_60px_rgba(34,211,238,.8)]">

            <span className="text-3xl font-black text-white">
              N
            </span>

          </div>

        </div>

        {/* Brand */}

        <h1 className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-center text-6xl font-black tracking-wide text-transparent lg:text-7xl">
          NextGrid Nexus
        </h1>

        {/* Tagline */}

        <p className="mt-6 max-w-4xl text-center text-xl font-light text-slate-300 lg:text-2xl">
          Fashion • Technology • Innovation • Design
        </p>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-center leading-8 text-slate-400">
          Building the future of intelligent fashion through advanced
          technology, premium design systems, digital experiences,
          sustainable innovation, AI-powered creativity, and modern luxury.
          Please wait while we prepare your personalized experience.
        </p>

        {/* Progress */}

        <div className="mt-16 w-full max-w-xl">

          <div className="mb-4 flex items-center justify-between">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Initializing Platform
            </span>

            <span className="animate-pulse text-cyan-300">
              Loading...
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">

            <div className="h-full w-full animate-pulse bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              AI
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
              Intelligence
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              UX
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
              Experience
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-indigo-400">
              3D
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
              Visualization
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-300">
              ∞
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
              Innovation
            </p>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center">

          <div className="flex gap-3">

            <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.30s]" />

            <span className="h-3 w-3 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.15s]" />

            <span className="h-3 w-3 animate-bounce rounded-full bg-indigo-400" />

          </div>

          <p className="mt-8 text-center text-sm tracking-[0.30em] uppercase text-slate-500">
            Preparing Components • Assets • Layouts • Experiences
          </p>

        </div>

      </div>

    </main>
  );
}