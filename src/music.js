import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './music.css'; // Custom CSS file

const platforms = [
  { name: 'Spotify', icon: 'fab fa-spotify', link: 'https://open.spotify.com/artist/4vK29PNjUv7hv1aW1Jyb8W', action: 'Play', btnClass: 'btn-outline-success' },
  { name: 'On Apple Music', icon: 'fab fa-apple', link: 'https://music.apple.com/us/artist/alphonce-kioko/706385289', action: 'Play', btnClass: 'btn-outline-danger' },
  { name: 'iTunes Store', icon: 'fab fa-itunes', link: 'https://music.apple.com/ke/artist/alphonce-kioko/706385289', action: 'Download', btnClass: 'btn-outline-primary' },
  { name: 'Kamba Music', icon: 'fas fa-music', link: 'https://kambamusic.com/artist/40', action: 'Play', btnClass: 'btn-outline-dark' },
  { name: 'Deezer', icon: 'fas fa-music', link: 'https://www.deezer.com/en/artist/5196206', action: 'Play', btnClass: 'btn-outline-info' },
  { name: 'YouTube', icon: 'fab fa-youtube', link: 'https://www.youtube.com/@officialmaimamusic6494', action: 'Play', btnClass: 'btn-outline-danger' },
  { name: 'Boomplay', icon: 'fas fa-music', link: 'https://www.boomplay.com/artists/34665?from=search', action: 'Stream', btnClass: 'btn-outline-warning' },
  { name: 'Audiomack', icon: 'fas fa-music', link: 'https://audiomack.com/kithungo-raha', action: 'Stream', btnClass: 'btn-outline-secondary' },
  { name: 'Mdundo', icon: 'fas fa-music', link: 'https://mdundo.com/a/2843', action: 'Stream', btnClass: 'btn-outline-warning' },
  { name: 'YouTube Music', icon: 'fas fa-music', link: 'https://www.youtube.com/@officialmaimamusic6494', action: 'Play', btnClass: 'btn-outline-danger' },
];

const MusicPlatform = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    const audio = document.getElementById('audio-element');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <div className="card text-center mx-auto">
        <div className="card-img-container">
          <img
            src={`${process.env.PUBLIC_URL}/maima.jpg`}
            alt="Artist"
            className="card-img-top"
          />
          <div className="play-button" onClick={handlePlayButtonClick}>
            <i className={`fas fa-${isPlaying ? 'pause' : 'play'}-circle fa-3x`}></i>
          </div>
          <audio id="audio-element" src={`${process.env.PUBLIC_URL}/maima.mp3`}></audio>
        </div>
        <div className="card-body">
          <h5 className="card-title">mukau ni ex wakwa</h5>
          <p className="card-text"> Maima | Listen | Download | Share to Maima Songs on All digital Platforms</p>
          <div className="platform-buttons">
            {platforms.map((platform, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <i className={`${platform.icon} me-2`}></i>
                  <span>{platform.name}</span>
                </div>
                <a href={platform.link} className={`btn btn-sm ${platform.btnClass} ms-auto small-btn`} 
                target="_blank" rel="noopener noreferrer">
                  {platform.action}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center mb-3">
            <a href="https://x.com/KithungoM" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/kithungo_raha_maima/" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.facebook.com/kithungoraha.kioko.5" className="text-dark" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
          </div>
          <p className="mb-0">powered by Afrisauti</p>
        </div>
      </div>
    </div>
  );
};

export default MusicPlatform;
