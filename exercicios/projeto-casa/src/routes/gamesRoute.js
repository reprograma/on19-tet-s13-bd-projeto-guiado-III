router.get("/all", controller.findAllGames);

router.get("/:name", controller.findByName);

router.get("/:id", controller.findGameById);

router.post("/add", controller.addNewGame);
	