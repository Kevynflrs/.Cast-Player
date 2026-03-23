import { create } from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import React, { useRef, useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Player = ({ src }) => {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!playerRef.current) return;

    // Utilise `create` directement depuis l'import
    const playerInstance = create(src, playerRef.current, {
      cols: 80,
      rows: 24,
      autoPlay: false,
      loop: false,
      speed: speed,
    });

    setPlayer(playerInstance);
    playerInstance.addEventListener('play', () => setIsPlaying(true));
    playerInstance.addEventListener('pause', () => setIsPlaying(false));

    return () => playerInstance.dispose();
  }, [src, speed]);

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) player.pause();
      else player.play();
    }
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <div className="player-container">
      <div ref={playerRef} className="player" />
      <div className="controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => handleSpeedChange(0.5)}>0.5x</button>
        <button onClick={() => handleSpeedChange(1)}>1x</button>
        <button onClick={() => handleSpeedChange(2)}>2x</button>
      </div>
    </div>
  );
};

export default Player;