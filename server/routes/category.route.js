const router = require("express").Router();
const Category = require("../model/category.model");
const checkToken = require("../lib/config");

/* 
    @route GET api/categories
    @desc Gets all categories
    @access public
    TODO: Should only be accessible to admins
*/
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send({ meta: { count: categories.length }, categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Catgories cannot be found." });
  }
});

/* 
    @route POST api/articles/create
    @desc  create articles
    @access public 
    TODO: Should only be accessible to admins
*/

router.put("/", async (req, res) => {
  try {
    await Category.findByIdAndUpdate(req.body._id, { name: req.body.name });
    let category = await Category.findById(req.body._id);
    res
      .status(200)
      .send({ msg: `${category.name} successfully updated!`, category });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: `${req.body.name} name cannot be updated. Name retained as ${category.name}`,
    });
  }
});

/* 
    @route POST api/articles/create
    @desc  create articles
    @access public 
    TODO: Should only be accessible to admins
*/

router.post("/", checkToken, async (req, res) => {
  console.log(req.body);
  try {
    let category = await Category.create(req.body);
    res
      .status(200)
      .send({ msg: `${req.body.name} successfully added!`, category });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ msg: `${req.body.name} cannot be added into categories.` });
  }
});

module.exports = router;
