import React from 'react';

class AddFishForm extends React.Component {
	createFish(event) {
		event.preventDefault();
		// onSubmit -> create a fish object from inputs value
		const fish = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value,
		}
		console.log(fish);
		// update the state with addFish fn from the app component (passed through props)
		this.props.addFish(fish);
		// reset the form
		this.fishForm.reset(0);
	}

	render() {
		return (
			<form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
				<input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
				<input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
				<select ref={(input) => this.status = input}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea ref={(input) => this.desc = input} type="text" placeholder="Fish Desc"></textarea>
				<input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
				<button type="submit">+ Add Item</button>
			</form>
		)
	}
}

export default AddFishForm;