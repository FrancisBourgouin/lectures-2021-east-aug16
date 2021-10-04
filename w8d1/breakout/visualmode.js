// useVisualMode => Works like the back history of a browser

// Backlog (history of navigation) (ones we want to keep, ones we don't want to keep)
// A way to go back

// Way to store history : [] or {}, [] because order is important, and a list of independent elements

// const someObject = {
//   name,
//   firstName,
//   age,
//   nickname
// }

// const results = [90,45,30,80]

// Modes : 🐛 🥦

const history = ["🐛", "🥦"];

// add to the history
const transition = (mode) => {
	// push!
	// history.push(mode)
	const newHistory = [...history, mode];

	return newHistory;
};

// console.log(transition("🐛"));
// console.log(transition("🐛"));
// console.log(transition("🐛"));
// console.log(transition("🐛"));
// console.log(history);
// go back in history

const back = () => {
	const newHistory = [...history].slice(0, history.length - 1);
	newHistory();

	return newHistory[newHistory.length - 1];
};

console.log(back());
console.log(back());

const useVisualMode = () => {
	const [history, setHistory] = useState([]);

	const transition = (mode, replace = false) => {
		let newHistory;

		if (replace) {
			newHistory = [...history.slice(0, -1), mode];
		} else {
			newHistory = [...history, mode];
		}

		return setHistory(newHistory);
	};

	const back = () => {
		let newHistory;

		if (history.length > 1) {
			history = [...history].slice(0, -1);
		} else {
			newHistory = [...history];
		}

		return setHistory(newHistory);
	};

	const current = history[history.length - 1];
};

// if(bcrypt.compareSync(a,b) === true)

transition("1");
transition("2");

const transition = (mode, replace = false) => {
	let newHistory;

	if (replace) {
		newHistory = [...history.slice(0, -1), mode];
	} else {
		newHistory = [...history, mode];
	}

	return setHistory(newHistory);
};

const transition = (mode, replace = false) => {
	setHistory((prev) => {
		let newHistory;

		if (replace) {
			newHistory = [...prev.slice(0, -1), mode];
		} else {
			newHistory = [...prev, mode];
		}

		return newHistory;
	});
};
