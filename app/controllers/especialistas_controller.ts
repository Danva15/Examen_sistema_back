// app/Controllers/Http/EspecialistasController.ts

import type { HttpContext } from '@adonisjs/core/http'
import Especialista from '#models/especialista'
import Disponibilidad from '#models/disponibilidad'
import {
  createEspecialistaValidator,
  updateEspecialistaValidator,
} from '../validators/store_especialista.js'

export default class EspecialistasController {
  public async index({ response }: HttpContext) {
    const especialistas = await Especialista.query().preload('disponibilidades')
    return response.ok(especialistas)
  }

  public async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createEspecialistaValidator)
    const especialista = await Especialista.create(data)

    if (data.disponibilidades) {
      const disponibilidades = data.disponibilidades.map((item: any) => ({
        ...item,
        especialista_id: especialista.id,
      }))
      await Disponibilidad.createMany(disponibilidades)
    }

    return response.created(especialista)
  }

  public async show({ params, response }: HttpContext) {
    const especialista = await Especialista.query()
      .where('id', params.id)
      .preload('disponibilidades')
      .first()

    if (!especialista) {
      return response.notFound({ message: 'Especialista no encontrado' })
    }

    return especialista
  }

  public async update({ params, request, response }: HttpContext) {
    const especialista = await Especialista.find(params.id)
    if (!especialista) {
      return response.notFound({ message: 'Especialista no encontrado' })
    }

    const data = await request.validateUsing(updateEspecialistaValidator)
    especialista.merge(data)
    await especialista.save()

    if (data.disponibilidades) {
      await especialista.related('disponibilidades').query().delete()
      const disponibilidades = data.disponibilidades.map((item: any) => ({
        ...item,
        especialista_id: especialista.id,
      }))
      await Disponibilidad.createMany(disponibilidades)
    }

    return response.ok(especialista)
  }

  public async destroy({ params, response }: HttpContext) {
    const especialista = await Especialista.find(params.id)
    if (!especialista) {
      return response.notFound({ message: 'Especialista no encontrado' })
    }

    especialista.activo = false // Soft delete
    await especialista.save()
    return response.ok({ message: 'Especialista marcado como inactivo' })
  }

  // Obtener especialistas inactivos
  public async inactivos({ response }: HttpContext) {
    const inactivos = await Especialista.query().where('activo', false).preload('disponibilidades') // Si tienes relación definida
    return response.ok(inactivos)
  }

  // Restaurar especialista inactivo
  public async restaurar({ params, response }: HttpContext) {
    const especialista = await Especialista.find(params.id)
    if (!especialista) return response.notFound({ message: 'No encontrado' })

    especialista.activo = true
    await especialista.save()
    return response.ok({ message: 'Especialista restaurado' })
  }

  // Eliminar definitivamente
  public async eliminar({ params, response }: HttpContext) {
    const especialista = await Especialista.find(params.id)
    if (!especialista) return response.notFound({ message: 'No encontrado' })

    await especialista.delete()
    return response.ok({ message: 'Eliminado permanentemente' })
  }
}
