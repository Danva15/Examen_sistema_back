import vine from '@vinejs/vine'

export const createEspecialistaValidator = vine.compile(
  vine.object({
    nombre_completo: vine.string().minLength(3),
    especialidad: vine.string(),
    registro_profesional: vine.string().unique(async (db, value) => {
      const exists = await db.from('especialistas').where('registro_profesional', value).first()
      return !exists
    }),
    disponibilidades: vine
      .array(
        vine.object({
          dia: vine.string(),
          hora_inicio: vine.string(),
          hora_fin: vine.string(),
        })
      )
      .optional(),
  })
)

export const updateEspecialistaValidator = vine.compile(
  vine.object({
    nombre_completo: vine.string().minLength(3),
    especialidad: vine.string(),
    registro_profesional: vine.string(),
    disponibilidades: vine
      .array(
        vine.object({
          dia: vine.string(),
          hora_inicio: vine.string(),
          hora_fin: vine.string(),
        })
      )
      .optional(),
  })
)
