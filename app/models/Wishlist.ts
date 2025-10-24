import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Wishlist extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public product_id: number | null

    @column()
    public product_name: string

    @column()
    public price: number

    @column()
    public user_email: string | null

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime
}