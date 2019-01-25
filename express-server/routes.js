const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/todoList')
  .get(controllers.fetch)
  .post(controllers.post)
  .delete(controllers.delete)

module.exports = router;
  