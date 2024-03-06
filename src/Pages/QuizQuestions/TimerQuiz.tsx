import React from 'react';

const  TimerQuiz=(submitAnswers,timeDuration)=> {
  const [minutes, setMinutes] = React.useState(1);
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          submitAnswers()
        } else {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <div className=' bg-gray-200 rounded-lg w-24  p-4' >
      <p className=' rounded-lg   font-semibold  text-center text-lg'>
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}

export default TimerQuiz;
