export const YouTubeEmbed = ({ id }: { id: string }) => (
  <div className="aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&modestbranding=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);