const router = require('express').Router();
const eventRoutes = require('./EventRoutes');
const userEventRoutes = require('./UserEventRoutes');
const userEventTypeRoutes = require('./userEventTypeRoutes');

router.use('/events', eventRoutes);
router.use('/user-events', userEventRoutes);
router.use('/user-events-types', userEventTypeRoutes);

module.exports = router;
