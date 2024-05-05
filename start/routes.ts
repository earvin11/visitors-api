/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import roleRoutes from '../app/Role/infraestructure/role.routes.js'
import userRoutes from '../app/User/infraestructure/user.routes.js';
import authRoutes from '../app/User/infraestructure/routes/auth.routes.js';
import visitorsRoutes from '../app/Visitor/infraestructure/visitors.routes.js';
import reasonVisitRoutes from '../app/ReasonVisit/infraestructure/reason-visit.routes.js';

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(authRoutes).prefix('auth');
router.group(reasonVisitRoutes).prefix('reason-visits');
router.group(roleRoutes).prefix('roles');
router.group(visitorsRoutes).prefix('visitors');
router.group(userRoutes).prefix('users');
