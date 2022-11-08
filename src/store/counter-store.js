// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
	name: "counter",
	initialCounterState,
	reducers: {
		increment(state) {
			console.log("ASDASDAS");
			// we should never manipulate state like this usually, but createSlice has a built-in functionality
			// that detects these kind of manipulations and actually makes copies instead of modifying the existing state
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter += action.payload;
		},
		toggleCounter(state) {
			console.log(state.showCounter);

			state.showCounter = !state.showCounter;
		},
	},
});

const authSlice = createSlice({
	name: "auth",
	initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

// we can access actions as below:
// counterSlice.actions.increment;
// this will return an action object of this shape: {type: "some auto-generated uinque id"}

const store = configureStore({
	// reducer can get a single reducer, like counterSlice.reducer, or multiple reducers combined using combineReducers()
	// docs: https://redux.js.org/api/combinereducers
	reducer: counterSlice.reducer,
});

// this is an option to work with slices, but configureStore from the toolkit is recommended
//const store = createStore(counterSlice.reducer);

/* classic, non-toolkit approach */

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === "increment") {
// 		return { counter: state.counter + 1, showCounter: state.showCounter };
// 	}
// 	if (action.type === "increase") {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if (action.type === "decrement") {
// 		return { counter: state.counter - 1, showCounter: state.showCounter };
// 	}
// 	if (action.type === "toggle") {
// 		return {
// 			showCounter: !state.showCounter,
// 			counter: state.counter,
// 		};
// 	}
// 	return state;
// };

// const store = createStore(counterReducer);

export const counterActions = counterSlice.actions;
export default store;
