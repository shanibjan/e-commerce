import React, { useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiExplosion = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div>
      <button onClick={triggerConfetti}>Show Confetti</button>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default ConfettiExplosion;
