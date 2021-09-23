'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test)
  router.get('/user', controller.user.index)
  router.get('/getid/:id', controller.user.getid)
  // router.post('/add', controller.user.add)
  router.get('/getUser', controller.user.add)
  // note-book
  router.get('/list', controller.home.list)
  router.post('/add', controller.home.add)
  router.post('/edit', controller.home.update)
  router.post('/detail/:id', controller.home.getDiaryById)
  // 删除接口
};
