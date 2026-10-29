import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2027-01-09T19:00:00');

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Min: Math.floor((difference / 1000 / 60) % 60),
          Seg: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {Object.keys(timeLeft).length > 0 ? (
        Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="countdown-item">
            <span className="number">{value}</span>
            <span className="label">{unit}</span>
          </div>
        ))
      ) : (
        <span className="countdown-final">¡Llegó el gran día!</span>
      )}
    </div>
  );
};

export default Countdown;
