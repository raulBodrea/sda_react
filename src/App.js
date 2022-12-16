import useClicker from './hooks/useClicker';

function App() {
  const clicker = useClicker();
  const { noOfClicks, increment, decrement, reset } = clicker;

  return (
    <>
      <button onClick={increment}>INCREMENT</button>
      <h1>Clicked {noOfClicks} times</h1>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}

export default App;
