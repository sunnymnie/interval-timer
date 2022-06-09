import { useCallback, useEffect, useRef, useState } from "react";

export default function useCountdown({ minutes, onStart, onStop, onComplete }) {
  const timerId = useRef(null);
  const time = minutes * 60;
  const [endTime, setEndTime] = useState(null)
  // const [progress, setProgress] = useState(0)
  const [timeLeft, setTime] = useState(time)
  const [ticking, setTicking] = useState(false)

  const clear = () => {
    clearInterval(timerId.current)
    timerId.current = null
  };

  const tick = useCallback(() => {
    // console.log(`current: ${new Date()} difference: ${endTime && (endTime - new Date())}`)
    console.log(timeLeft)
    if (timeLeft > 0) {
      setTime(Math.floor((endTime - new Date()) / 1000))
      // setProgress((count) => count + 1);
    }
    if (timeLeft <= 1) {
      setTicking(false);
      clear();
      onComplete?.();
    }
  }, [onComplete, timeLeft]);

  useEffect(() => {
    if (ticking) {
      timerId.current = setInterval(tick, 1000);
    } else {
      clear();
    }

    return clear;
  }, [tick, ticking]);

  useEffect(() => {
    setTime(time);
  }, [time]);

  const createEndTime = (seconds) => {
    let result = new Date();
    result.setSeconds(result.getSeconds() + seconds);
    return result;
  }

  const start = useCallback(() => {
    setEndTime(createEndTime(time))
    setTicking(true);
    onStart?.();
  }, [onStart]);

  const stop = useCallback(() => {
    setTicking(false);
    onStop?.();
  }, [onStop]);

  const reset = useCallback(() => {
    setTicking(false);
    // setProgress(0);
    onStop?.();
  }, [onStop]);

  return {
    start,
    stop,
    reset,
    ticking,
    timeLeft,
    progress: ((time - timeLeft) / time) * 100,
  };
}