import React from "react";
import loadingImage from "../../assets/images/loading.png";

export default function LoadingPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50">
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute inset-0 opacity-40 [background:linear-gradient(90deg,rgba(30,41,59,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(30,41,59,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 py-12 lg:flex-row lg:justify-between">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
            Loading Cyber Safety
          </div>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Cyber<span className="text-orange-500">Sakshar</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Preparing your secure learning experience...
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce delay-150" />
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce delay-300" />
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -left-6 top-10 h-20 w-20 rounded-3xl border border-slate-200 bg-white shadow-md" />
            <div className="absolute -right-6 bottom-12 h-16 w-16 rounded-full border border-slate-200 bg-white shadow-md" />
            <div className="absolute right-10 top-0 flex h-12 w-20 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-500 shadow-sm">
              
            </div>
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-200 animate-spin" />
            <img
              src={loadingImage}
              alt="Secure login illustration"
              className="relative z-10 w-full drop-shadow-xl animate-float-hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
