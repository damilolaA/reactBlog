const createElement = React.createElement;

const Movie = (props) => {

	return (
		createElement('h3', null, props.title, props.color)
	)
}

const MyComponent = () => {

	return (
		createElement('div', {color: 'green'}, 
			createElement(Movie, {title: 'Black Panther'}),
			createElement(Movie, {title: "Billions"}),
			createElement(Movie, {title: "Fast & Furious"})
		)
	)
}

let handle = document.getElementById('app');

ReactDOM.render(createElement(MyComponent), handle)
