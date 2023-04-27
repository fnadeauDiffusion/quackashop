const authenticationController = require('../controllers/authentication.controller.js')

module.exports = (app) => {
    app.post('/register', authenticationController.register)
}