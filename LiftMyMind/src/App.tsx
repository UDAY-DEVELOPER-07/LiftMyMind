import React from "react";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black/[0.96] antialiased relative overflow-hidden">
      <div className="relative z-[3] pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            Lift My Mind
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Welcome to Lift My Mind, a mental health app designed to help you
            manage your mental well-being. This app provides a variety of
            features, including mood tracking, journaling, and mindfulness
            exercises.
          </p>
        </div>
      </div>
    </div>
  );
}