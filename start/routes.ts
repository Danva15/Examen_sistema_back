/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import EspecialistasController from '#controllers/especialistas_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/', [EspecialistasController, 'index'])
    router.post('/', [EspecialistasController, 'store'])
    router.get('/:id', [EspecialistasController, 'show'])
    router.put('/:id', [EspecialistasController, 'update'])
    router.delete('/:id', [EspecialistasController, 'destroy'])
    router.get('/inactivos', [EspecialistasController, 'inactivos']) // Descomentar en tu backend
    router.put('/:id/restaurar', [EspecialistasController, 'restaurar']) // Descomentar en tu backend
    router.delete('/:id/eliminar-definitivo', [EspecialistasController, 'eliminar']) // Descomentar en tu backend
  })
  .prefix('/api/especialistas')
