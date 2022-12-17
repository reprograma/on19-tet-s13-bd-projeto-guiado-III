router.get("/:id", controller.findConsoleById);

router.get("/", controller.consoleByAvailable);

router.post("/add", controller.addNewConsole);

router.patch("/:id", controller.updateConsole);
	