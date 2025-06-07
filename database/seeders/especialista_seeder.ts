import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { EspecialistaFactory } from '#database/factories/especialista_factory'

export default class extends BaseSeeder {
  async run() {
    await EspecialistaFactory.createMany(10)
  }
}
