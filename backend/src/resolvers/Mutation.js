const bcyrpt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Mutation = {
	async createItem(parent, args, ctx, info) {
		// check if they are logged in
		if (!ctx.request.userId) {
			throw new Error('You must be logged in to do that 🙅🏼‍');
		}
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					user: {
						connect: {
							id: ctx.request.userId
						}
					},
					...args
				}
			},
			info
		);
		return item;
	},
	async signup(parent, args, ctx, info) {
		// 1. format email
		args.email = args.email.toLowerCase();
		// 2. hash their password
		const password = await bcyrpt.hash(args.password, 10);
		// 3. create user
		const user = await ctx.db.mutation.createUser(
			{
				data: {
					...args,
					password // we override plain password with the hashed one
				}
			},
			info
		);
		// 4. create jwt
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		// 5. set jwt as cookie in response
		ctx.response.cookie('token', token, {
			httpOnly: true, // we don't want js to access token
			maxAge: 1000 * 60 * 60 * 24 * 365 // one year from now
		});
		// 6. return user
		return user;
	},
	async signin(parent, { email, password }, ctx, info) {
		// 1. check if email exists
		const user = await ctx.db.query.user({ where: { email } });
		if (!user) {
			throw new Error('No user with this email');
		}
		// 2. compare passwords
		const valid = await bcyrpt.compare(password, user.password);
		if (!valid) {
			throw new Error('Invalid password!');
		}
		// 3. generate jwt
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		// 4. set jwt as cookie
		ctx.response.cookie('token', token, {
			httpOnly: true,
			maxAge: 100 * 60 * 60 * 24 * 365 // one year
		});
		// 5. send user back
		return user;
	}
};

module.exports = Mutation;
