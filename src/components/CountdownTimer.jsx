import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate = "2025-12-31T23:59:59" }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timeComponents.push(
      <div key={interval} className="countdown-box">
        <div className="countdown-value">
          {interval === "hours" ||
          interval === "minutes" ||
          interval === "seconds"
            ? timeLeft[interval] < 10
              ? timeLeft[interval] <= 0
                ? "00"
                : "0" + timeLeft[interval]
              : timeLeft[interval]
            : timeLeft[interval]}
        </div>
        <div className="countdown-label">{interval}</div>
      </div>
    );
  });

  return (
    <div className="countdown">
      {timeComponents.length && timeComponents}

      <style jsx="true">{`
        .countdown {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
          position: relative;
          z-index: 5;
        }

        .countdown-box {
          background: rgba(0, 57, 93, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(10px);
        }

        .countdown-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
        }

        .countdown-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          opacity: 0.8;
          color: white;
        }

        @media (max-width: 768px) {
          .countdown-box {
            width: 80px;
            height: 80px;
          }

          .countdown-value {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .countdown {
            gap: 10px;
          }

          .countdown-box {
            width: 70px;
            height: 70px;
          }

          .countdown-value {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CountdownTimer;
