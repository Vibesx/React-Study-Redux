import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-store";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const show = useSelector((state) => state.showCounter);

	const incrementHandler = () => {
		// we need to call the function in these cases because it returns an action object with type and everything else we need
		dispatch(counterActions.increment());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
		// what this function returns (with arguments) is an object of the type:
		// {type: SOME_ID, payload: <what_we_entered_as_arguments>}
		// payload is a fixed name, that is why we need to manipulate what we want to pass in the arguments stage
		// if we only want one value, ex a number, we can pass it and call it using action.payload
		// if we need multiple values, we should pass an object
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	// old non-toolkit approach
	// const incrementHandler = () => {
	// 	dispatch({ type: "increment" });
	// };

	// const increaseHandler = () => {
	// 	dispatch({ type: "increase", amount: 5 });
	// };

	// const decrementHandler = () => {
	// 	dispatch({ type: "decrement" });
	// };

	// const toggleCounterHandler = () => {
	// 	dispatch({ type: "toggle" });
	// };

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
