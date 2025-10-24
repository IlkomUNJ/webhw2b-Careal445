import { HttpContextContract } from '@adonisjs/core/services/router'

export default class SearchController {
    public async index({ request, view }: HttpContextContract) {
        const q = (request.input('q') || '').toString().trim()

        // contoh data — ganti dengan query DB nyata jika ada model
        const products = [
            { id: 1, name: 'Red Shirt', price: 19.99 },
            { id: 2, name: 'Blue Jeans', price: 49.99 },
            { id: 3, name: 'Green Hat', price: 14.99 },
            { id: 4, name: 'Violet Jacket', price: 89.99 },
        ]

        const results = q
            ? products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()))
            : []

        return view.render('pages.search', { query: q, results })
    }
}