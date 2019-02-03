const Mutation = {
    createItem(parent, args, ctx, info) {
        const item = ctx.db.mutation.createItem({
            data: {
                ...args
            }
        })
        return item;       
    }
}

module.exports = Mutation;