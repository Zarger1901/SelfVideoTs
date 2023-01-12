// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'

export default class SitesController {
    // constructor(protected app: Database) {}
    public async index({ request, view }) {
        const page = request.input('page', 1)
        const limit = 15
        const users = await Database.query().from('help_topic').paginate(page, limit)

        return view.render('index', {
            users,
        })
    }
}
