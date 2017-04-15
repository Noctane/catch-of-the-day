import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.loadSample = this.loadSample.bind(this);
		// initial state
		this.state = {
			fishes: {},
			order: {}
		};
	}

	loadSample() {
		this.setState({
			fishes: sampleFishes
		})
	}

	addFish(fish) {
		// update state
		const fishes = {...this.state.fishes};
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		// set state
		this.setState({ fishes });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="list-of-fish">
						{
							Object
							.keys(this.state.fishes)
							.map(key => <Fish key={key} details={this.state.fishes[key]} />)
						}
					</ul>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSample={this.loadSample} />
			</div>
		)
	}
}

export default App;