const expres = require("express");
const router = expres.Router();
const controller = require("../controllers/rootControllers");
const userAuth = require("../middleware/userAuth");

router.get("/", userAuth, controller.getUsers);
router.post("/", controller.createUser);
router.put("/update/:id", controller.updateUser);
router.delete("/delete/:id", controller.deleteUser);
router.post("/signup", controller.signup);
router.post("/login", controller.login);

module.exports = router;
