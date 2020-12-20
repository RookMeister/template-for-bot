const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
  id: { type: Number, unique: true, index: true },
}, {
  timestamps: true,
});

const UserModel = mongoose.model('user', UserSchema);

async function findUser({id, username}) {
  let user = await UserModel.findOne({ chat_id: id })
  if (!user) {
    try {
      user = await new UserModel({ chat_id: id, username }).save()
      console.log(`Сохранен пользователь ${username}`);
    } catch (err) {
      user = await UserModel.findOne({ chat_id: id })
    }
  }
  return user
}

async function findAllUsers() {
  return  UserModel.find({});
}

module.exports = { UserModel, findUser, findAllUsers };