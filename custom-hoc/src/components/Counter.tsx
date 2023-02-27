import makeCounter, { InjectedCounterProps } from "../makeCounter";

interface CounterProps extends InjectedCounterProps {
  style?: React.CSSProperties;
}

const Counter = ({ style, onDecrement, onIncrement, value }: CounterProps) => (
  <div style={style}>
    <button onClick={onDecrement}> - </button>
    {value}
    <button onClick={onIncrement}> + </button>
  </div>
);

export default makeCounter(Counter);
