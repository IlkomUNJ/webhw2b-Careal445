import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Wishlist from 'App/Models/Wishlist'

export default class WishlistController {
    public async index({ request, view }: HttpContextContract) {
        const email = request.input('email')
        const results = email ? await Wishlist.query().where('user_email', email) : await Wishlist.all()
        return view.render('pages.wishlist', { results: results || [], email })
    }

    public async store({ request, response }: HttpContextContract) {
        const payload = request.only(['product_id', 'product_name', 'price', 'user_email'])
        await Wishlist.create(payload)
        return response.redirect('back')
    }

    public async destroy({ params, response }: HttpContextContract) {
        const item = await Wishlist.find(params.id)
        if (item) await item.delete()
        return response.redirect('back')
    }
}