import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reason_visits'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').unique().primary()
      table.uuid('visitor_id').unsigned().references('visitors.id').notNullable()
      table.string('reason', 255).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}