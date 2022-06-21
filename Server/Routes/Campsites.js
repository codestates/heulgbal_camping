const express = require('express');
const router = express.Router();

const CampsitesRouter = require('../Controllers/Index');

router.get('/', CampsitesRouter.campsite);
router.get('/:id/rooms', CampsitesRouter.roomList);

module.exports = router;