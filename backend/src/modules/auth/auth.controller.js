const authService = require('./auth.service')

exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    const result = await authService.register(email, password, name)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await authService.login(email, password)
    res.status(200).json(result)
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}
