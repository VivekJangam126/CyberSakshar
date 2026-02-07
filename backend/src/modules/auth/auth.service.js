const User = require('../../models/User')
const jwt = require('jsonwebtoken')

exports.register = async (email, password, name) => {
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new Error('User already exists')
  }

  const user = await User.create({ email, password, name })
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

  return { token, user: { id: user._id, email: user.email, name: user.name } }
}

exports.login = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Invalid credentials')
  }

  const isMatch = await user.comparePassword(password)
  if (!isMatch) {
    throw new Error('Invalid credentials')
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

  return { token, user: { id: user._id, email: user.email, name: user.name } }
}
