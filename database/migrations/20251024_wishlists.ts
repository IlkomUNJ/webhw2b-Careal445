import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Wishlists extends BaseSchema {
    protected tableName = 'wishlists'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')
            table.integer('product_id').nullable()
            table.string('product_name').notNullable()
            table.decimal('price', 10, 2).notNullable()
            table.string('user_email').nullable()
            table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}