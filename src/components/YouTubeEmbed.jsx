function YouTubeEmbed() {
  return (
    <section className="px-6 py-12 text-center bg-white">
      <h2 className="text-3xl font-semibold mb-4">Latest Episode</h2>
      <div className="relative w-full max-w-3xl mx-auto aspect-video">
        <iframe
          className="w-full h-full rounded shadow-md"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="The Forward Talks"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default YouTubeEmbed;
