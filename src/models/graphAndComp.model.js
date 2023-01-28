const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const ComponentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  role: { type: String },
  videoURL: { type: String },
  imageURL: { type: String }
});

const VertexSchema = new mongoose.Schema({
  c: { type: mongoose.Schema.Types.ObjectId, ref: 'Component' },
  edgesFromVertex: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Edge' }]
});

const EdgeSchema = new mongoose.Schema({
  start: { type: mongoose.Schema.Types.ObjectId, ref: 'Vertex' },
  end: { type: mongoose.Schema.Types.ObjectId, ref: 'Vertex' },
  description: { type: String }
});

const GraphSchema = new mongoose.Schema({
  startingVertices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vertex' }],
  name: { type: String, required: true },
  description: { type: String }
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

UserSchema.methods.checkPassword = function(password) {
  return this.password === password;
}

const AttemptSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  graph: { type: mongoose.Schema.Types.ObjectId, ref: 'Graph' },
  attempted_graph_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Graph' },
  score: { type: Number }
});

const Component = mongoose.model('Component', ComponentSchema);
const Vertex = mongoose.model('Vertex', VertexSchema);
const Edge = mongoose.model('Edge', EdgeSchema);
const Graph = mongoose.model('Graph', GraphSchema);
const User = mongoose.model('User', UserSchema);
const Attempt = mongoose.model('Attempt', AttemptSchema);


// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

/**
 * @typedef User
 */
// const User = mongoose.model('User', userSchema);
module.exports = {
  Component,
  Vertex,
  Edge,
  Graph,
  User,
  Attempt
}
