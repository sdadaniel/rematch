import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((s) => s.count);
  const dispatch = useDispatch();
  return (
    <>
      <CountContainer />
      <br />
      <div>{count}</div>
      <button onClick={() => dispatch.count.increment(1)}>Increment</button>
    </>
  );
}

const Count = (props) => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
);

export default App;

const mapState = (state) => ({
  count: state.count,
});
const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

const CountContainer = connect(mapState, mapDispatch)(Count);
