import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import { generateId } from '../../../Shared/helpers/generate-id.helper.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import ReasonVisit from '../../../ReasonVisit/infraestructure/models/reason_visit.js'

export default class Visitor extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  declare id: string
  
  @column()
  declare serialDocument: string

  @column()
  declare name: string

  @column()
  declare lastName: string

  @hasMany(() => ReasonVisit)
  declare reasons: HasMany<typeof ReasonVisit>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(visitor: Visitor) {
    visitor.id = generateId()
  }
}