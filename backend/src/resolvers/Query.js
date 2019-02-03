const Query = {
    getItems(parent, args, ctx, info) {
        const items = ctx.db.query.items();
        return items
    }
}

module.exports = Query;