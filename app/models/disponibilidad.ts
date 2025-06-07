import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Especialista from '#models/especialista'

export default class Disponibilidad extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare especialistaId: number

  @column()
  declare dia: string

  @column()
  declare hora_inicio: string

  @column()
  declare hora_fin: string

  @belongsTo(() => Especialista, {
    foreignKey: 'especialistaId',
  })
  declare especialista: BelongsTo<typeof Especialista>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
