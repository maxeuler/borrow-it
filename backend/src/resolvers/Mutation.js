const Mutation = {
	async createItem(parent, args, ctx, info) {
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					...args
				}
			},
			info
		);
		return item;
	},
	signup(parent, args, ctx, info) {
		console.log(args);
	}
};

module.exports = Mutation;
