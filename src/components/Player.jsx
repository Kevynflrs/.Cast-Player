import React, { useRef, useEffect, useState } from 'react';
import { create } from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css';

const Player = ({ src }) => {
  const playerRef = useRef(null);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!playerRef.current) return;

    const playerInstance = create(src, playerRef.current, {
      cols: 80,
      rows: 24,
      autoPlay: true,
      loop: false,
      speed: speed,
    });

    return () => playerInstance.dispose();
  }, [src, speed]);

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <div className="player-container">
      <div ref={playerRef} className="player" />
      <div className="controls">
        <button
          className={speed === 1 ? 'active' : ''}
          onClick={() => handleSpeedChange(1)}
        >
          x1
        </button>
        <button
          className={speed === 2 ? 'active' : ''}
          onClick={() => handleSpeedChange(2)}
        >
          x2
        </button>
        <button
          className={speed === 3 ? 'active' : ''}
          onClick={() => handleSpeedChange(3)}
        >
          x3
        </button>
      </div>
    </div>
  );
};

export default Player;