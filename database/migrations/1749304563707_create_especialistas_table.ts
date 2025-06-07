import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'especialistas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre_completo').notNullable()
      table.string('especialidad').notNullable()
      table.string('registro_profesional').notNullable().unique()
      table.boolean('activo').notNullable().defaultTo(true)

      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
