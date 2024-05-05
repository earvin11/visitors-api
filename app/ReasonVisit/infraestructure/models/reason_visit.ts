import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { generateId } from '../../../Shared/helpers/generate-id.helper.js'
import Visitor from '../../../Visitor/infraestructure/models/visitor.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ReasonVisit extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare visitorId: string

  @column()
  declare reason: string

  @belongsTo(() => Visitor)
  declare visitor: BelongsTo<typeof Visitor>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(reason: ReasonVisit) {
    reason.id = generateId()
  }
}