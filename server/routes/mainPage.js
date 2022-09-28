const router = require('express').Router();
const { Attributes } = require('../db/models')


router.route('/')
  .get(async (req, res) => {
    try {
      const attributes = await Attributes.findAll();
      res.json(attributes)
      console.log('ATTRIBUTES =====>', attributes)
    } catch (err) {
      res.sendStatus(404)
      console.log('ERROR ======>', err)
    }
  })

module.exports = router
