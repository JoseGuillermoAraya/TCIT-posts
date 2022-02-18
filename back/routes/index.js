var express = require("express");
const Posts = require("../models/Posts");

var router = express.Router();
router.get("/", async (req, res, next) => {
  console.log(req.body);
  return res.json(await Posts.query().select("*"));
});
router.post("/", async (req, res, next) => {
  console.log(req.body);
  if (!req.body.nombre || !req.body.descripcion) {
    return res.json({
      status: "fail",
      message: "incluir nombre y descripcion",
    });
  }
  return res.json(
    await Posts.query().insert({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    })
  );
});
router.delete("/", async (req, res, next) => {
  console.log(req.body);
  if (!req.body.id) {
    return res.json({
      status: "fail",
      message: "incluir id",
    });
  }
  const post = await Posts.query().findById(req.body.id);
  if (!post)
    return res.json({
      status: "fail",
      message: `post con id ${req.body.id} no encontrado`,
    });
  await Posts.query().deleteById(req.body.id);
  return res.json(post);
});
module.exports = router;
