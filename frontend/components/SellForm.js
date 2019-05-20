import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import { Title } from './Item';

const CREATE_ITEM_MUTATION = gql`
	mutation CREATE_ITEM_MUTATION(
		$title: String!
		$description: String!
		$image: String!
		$maxDays: Int
	) {
		createItem(
			title: $title
			description: $description
			image: $image
			maxDays: $maxDays
		) {
			id
		}
	}
`;

class SellForm extends Component {
	state = {
		title: '',
		description: '',
		image: '',
		maxDays: 7
	};

	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	uploadFile = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'borrowit');

		const res = await fetch(
			'https://api.cloudinary.com/v1_1/maxeulercloud/image/upload',
			{
				method: 'POST',
				body: data
			}
		);
		const file = await res.json();
		this.setState({
			image: file.secure_url
		});
	};

	render() {
		return (
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
				{(createItem, { loading, error }) => (
					<React.Fragment>
						<Title>Borrow Your Stuff! 🚀</Title>
						<Form
							onSubmit={async e => {
								e.preventDefault();
								const res = await createItem();
								console.log(res);
								Router.push({
									pathname: '/item',
									query: { id: res.data.createItem.id }
								});
							}}
						>
							<fieldset>
								<label htmlFor="title">
									Title
									<input
										type="text"
										name="title"
										placeholder="Title"
										required
										onChange={this.handleChange}
										value={this.state.title}
									/>
								</label>
								<label htmlFor="image">
									Image
									<input
										type="file"
										name="image"
										placeholder="Upload An Image"
										required
										onChange={this.uploadFile}
									/>
									{this.state.image && (
										<img
											src={this.state.image}
											width="200"
											alt="Upload Preview"
										/>
									)}
								</label>
								<label htmlFor="description">
									Description
									<textarea
										name="description"
										placeholer="Enter a description"
										required
										onChange={this.handleChange}
										value={this.state.description}
									/>
								</label>
								<label htmlFor="maxDays">
									Max Days
									<input
										type="number"
										name="maxDays"
										required
										onChange={this.handleChange}
										value={this.state.maxDays}
									/>
								</label>
								<button type="submit">Upload</button>
							</fieldset>
						</Form>
					</React.Fragment>
				)}
			</Mutation>
		);
	}
}

export default SellForm;
