const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.use(controller.getCollection);
router.get('/', controller.showIndex);
router.get('/about', controller.showAbout);
router.get('/contact', controller.showContact);
router.get('/portfolio', controller.showPortfolio);
router.get('/resume', controller.showResume);
router.get('/admin', controller.showAdmin);
module.exports = router;
