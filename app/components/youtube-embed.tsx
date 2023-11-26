import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      src={videoSrc}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title="Embedded YouTube video"
      className="h-full max-w-lg"
    ></iframe>
  );
};

export default YouTubeEmbed;
