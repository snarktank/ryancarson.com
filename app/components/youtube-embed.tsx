import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="Embedded YouTube video"
        className="w-full h-[350px] lg:h-[400px]"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
