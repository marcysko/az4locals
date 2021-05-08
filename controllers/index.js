const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
