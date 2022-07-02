
import { useEffect, useState }  from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;



const Timer = ({duration,cb}) => {

    const[timer,setTimer] = useState(duration);

    useEffect(()=>{
    const timerId = setTimeout(()=>{
    setTimer(timer - 1000);
    },1000);

    if(timer <= 0 ){
      cb && cb();
      clearTimeout(timerId);
      
    }
    return () => {
      clearTimeout(timerId);
    }


    },[timer,cb]);


    const getFormattedTime = (time)=>{
      const days = Math.floor(time / DAY);
      const hours = Math.floor((time % DAY)/ HOUR);
      const minutes = Math.floor((time % HOUR)/MINUTE);
      const second = Math.floor((time % MINUTE)/SECOND);



      return <>
      <h2>{days}:{hours}:{minutes}:{second}</h2>
      </>;
    }







  return getFormattedTime(timer); 
};

Timer.defaultProps ={
  duration : 60 * 1000
}

export default Timer;


