const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const router = express.Router()

const db = require('../db/profiles')



//GET All Users
router.get('/getuser', getTokenDecoder(), (req, res) => {
  db.getUserById(req.user.id)
    .then(dbRes => {
      res.send(dbRes)
    })
})

//GET User by ID
router.get('/:id', (req, res) => {
  db.getUserById(req.params.id)
    .then(dbRes => {
      res.send(dbRes)
    })
})

//UPDATE User
router.put('/edit', getTokenDecoder(), (req, res) => {
  const userData = req.body
  if (req.user.id === Number(userData.id)) {
    db.editUser(userData)
      .then(dbRes => {
        res.send({ ok: true })
      })
  } else {
    res.sendStatus(401)
  }
})

module.exports = router


