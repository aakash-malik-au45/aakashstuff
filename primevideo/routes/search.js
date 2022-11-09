const router = require("express").Router();
const { Movie } = require("../models/movie");
const auth = require("../middleware/auth");

router.get("/search", auth, async(req, res) => {
    const search = req.query.search;
    if (search !== "") {
        const movie = await Movie.find({
            name: { $regex: search, $options: "i" },
        }).limit(10);
        const result = { movie};
        res.status(200).send(result);
    } else {
        res.status(200).send({});
    }
});

module.exports = router;