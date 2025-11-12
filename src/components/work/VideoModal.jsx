import React, { useState } from 'react';
import './videoModal.css';

const VideoModal = ({ videos, isOpen, onClose }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  if (!isOpen || !videos || videos.length === 0) return null;

  const currentVideo = videos[currentVideoIndex];

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const getEmbedUrl = (url) => {
    // YouTube
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Vimeo
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    // Se já for uma URL de embed, retorna como está
    if (url.includes('embed') || url.includes('youtube.com/embed') || url.includes('vimeo.com/video')) {
      return url;
    }
    return url;
  };

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          <i className="uil uil-times"></i>
        </button>

        <div className="video-modal-header">
          <h3 className="video-modal-title">{currentVideo.title || 'Project Video'}</h3>
          {videos.length > 1 && (
            <div className="video-modal-counter">
              {currentVideoIndex + 1} / {videos.length}
            </div>
          )}
        </div>

        <div className="video-modal-player">
          {currentVideo.type === 'youtube' || currentVideo.url.includes('youtube') || currentVideo.url.includes('youtu.be') ? (
            <iframe
              src={getEmbedUrl(currentVideo.url)}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-modal-iframe"
            ></iframe>
          ) : currentVideo.type === 'vimeo' || currentVideo.url.includes('vimeo') ? (
            <iframe
              src={getEmbedUrl(currentVideo.url)}
              title={currentVideo.title}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="video-modal-iframe"
            ></iframe>
          ) : (
            <video controls className="video-modal-video">
              <source src={currentVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {currentVideo.description && (
          <p className="video-modal-description">{currentVideo.description}</p>
        )}

        {videos.length > 1 && (
          <div className="video-modal-navigation">
            <button className="video-modal-nav-btn" onClick={handlePrevVideo}>
              <i className="uil uil-angle-left"></i>
              Previous
            </button>
            <div className="video-modal-dots">
              {videos.map((_, index) => (
                <button
                  key={index}
                  className={`video-modal-dot ${index === currentVideoIndex ? 'active' : ''}`}
                  onClick={() => setCurrentVideoIndex(index)}
                />
              ))}
            </div>
            <button className="video-modal-nav-btn" onClick={handleNextVideo}>
              Next
              <i className="uil uil-angle-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;

