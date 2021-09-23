const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.send({
    data: req.$PRODUCT_DATE,
    code: 0
  })
})
router.get('/info', (req, res) => {
  // console.log(req.query.id);
  const info = req.$PRODUCT_DATE.find(item=>item.id == req.query.id);
  res.send({
    data: info,
    code: 0
  })
})

module.exports = router;