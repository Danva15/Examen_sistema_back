import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Disponibilidad from '#models/disponibilidad'

export default class Especialista extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre_completo: string

  @column()
  declare especialidad: string

  @column()
  declare registro_profesional: string

  @column()
  declare activo: boolean

  @hasMany(() => Disponibilidad)
  declare disponibilidades: HasMany<typeof Disponibilidad>
}
