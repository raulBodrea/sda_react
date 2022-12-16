import { useState } from 'react';

const useClicker = () => {
  const [noOfClicks, setNoOfClicks] = useState(0);

  const increment = () => setNoOfClicks(noOfClicks + 1);

  const decrement = () => setNoOfClicks(noOfClicks - 1);

  const reset = () => setNoOfClicks(0);

  return { noOfClicks, increment, decrement, reset };
};

export default useClicker;
