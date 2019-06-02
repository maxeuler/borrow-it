const { forwardTo } = require('prisma-binding');

const Query = {
	items: forwardTo('db'),
	item: forwardTo('db'),
	currentUser(parent, args, ctx, info) {
		const userId = ctx.request.userId;
		if (!userId) {
			return null;
		}

		return ctx.db.query.user({ where: { id: userId } });
	},
	reviews: forwardTo('db')
};

module.exports = Query;
