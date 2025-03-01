import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="text-xl font-bold text-red-600">
      ⏳ {formatTime(timeLeft)}
    </div>
  );
};

// ✅ ตั้งค่า PropTypes เพื่อตรวจสอบ props
CountdownTimer.propTypes = {
  initialTime: PropTypes.number.isRequired, // ต้องเป็นตัวเลข
  onTimeUp: PropTypes.func, // ไม่บังคับ (optional)
};

export default CountdownTimer;
