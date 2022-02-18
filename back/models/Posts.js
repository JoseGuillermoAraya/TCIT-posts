const { Model } = require("objection");

class Posts extends Model {
  static get tableName() {
    return "posts";
  }
}
module.exports = Posts;
