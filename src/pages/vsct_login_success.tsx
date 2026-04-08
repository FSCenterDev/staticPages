import fscSvg from '@/assets/fsc.19b1f3d1.svg';

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/60"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-16 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl"></div>
        <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl"></div>
      </div>

      <header className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8">
        <img
          src={fscSvg}
          alt="FSCenter Logo"
          className="h-[48px] w-[139px] object-contain"
        />
      </header>


      <main className="relative mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-24">
        <section
          className="w-full max-w-2xl rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-center shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-12"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <span className="text-xl font-semibold text-emerald-600">✓</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">登录成功</h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">欢迎使用vSct EuroScope地面扇加载插件，您可以关闭本页了。</p>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            感谢如下成员为 vSct 所做的贡献：.................
          </p>
        </section>
      </main>
    </div>
  );
}
