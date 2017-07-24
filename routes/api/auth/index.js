const router= require('express').Router();
const controller= require('./auth.controller');
const authMiddleware= require('../../../middlewares/auth');

router.post('/register', controller.register);
router.post('/login', controller.login);

router.use('/check', authMiddleware);//토큰 확인 미들웨어
router.get('/check', controller.check);

module.exports = router
