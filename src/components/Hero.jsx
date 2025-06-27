function Hero() {
  return (
    <section className="text-center py-16 px-6 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
        Welcome to The Forward Talks
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Self-help. Fitness. Mindset. Growth. One step at a time.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.youtube.com/@theforwardtalks"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Watch on YouTube
        </a>
        <a
          href="/about"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          About Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
