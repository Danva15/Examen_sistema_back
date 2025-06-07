import factory from '@adonisjs/lucid/factories'
import Especialista from '#models/especialista'

export const EspecialistaFactory = factory
  .define(Especialista, async ({ faker }) => {
    return {
      nombre_completo: faker.person.fullName(),
      especialidad: faker.person.jobType(),
      registro_profesional: faker.string.alphanumeric({ length: 10 }),
      activo: true,
    }
  })
  .build()
