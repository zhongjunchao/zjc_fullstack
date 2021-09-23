'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async user() {
    return {
      title: '你贵姓',
      content: '免贵姓嘉'
    }
  }
}

module.exports = UserService