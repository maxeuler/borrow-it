import React, { Component } from 'react';
import Form from './styles/Form';

class SellForm extends Component {
	render() {
		return (
			<Form>
				<fieldset>
					<label htmlFor="title">
						Title
						<input type="text" name="title" placeholder="Title" required />
					</label>
					<label htmlFor="image">
						Image
						<input
							type="file"
							name="image"
							placeholder="Upload An Image"
							required
						/>
					</label>
					<label htmlFor="description">
						Description
						<textarea
							name="description"
							placeholer="Enter a description"
							required
						/>
					</label>
					<label htmlFor="maxDays">
						Max Days
						<input type="number" name="maxDays" required />
					</label>
					<button type="submit">Upload</button>
				</fieldset>
			</Form>
		);
	}
}

export default SellForm;
