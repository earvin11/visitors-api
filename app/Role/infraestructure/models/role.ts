import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import { generateId } from '../../../Shared/helpers/generate-id.helper.js'
import User from '../../../User/infraestructure/models/user.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Role extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare isActive: boolean

  @hasMany(() => User)
  declare users: HasMany<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(role: Role) {
    role.id = generateId()
  }
}