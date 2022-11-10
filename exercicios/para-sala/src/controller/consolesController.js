const consolesModel = require("../models/consolesModel");

const findAllConsoles = async (req, res) => {
    try {
        const allConsoles = await consolesModel.find();
        res.status(200).json(allConsoles);
    } catch (error) {
        console.log(Error);
        res.status(500).json({ message: error.message })
    };
};

const findConsoleById = async (req, res) => {
    try {
        const findConsole = await consolesModel.findById(req.params.id);
        res.status(200).json(findConsole);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message })
    };
};

const addNewConsole = async (req, res) => {
    try {
        const{
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        } = req.body;
        const newConsole = new consolesModel({

            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        });
        const savedConsole = await newConsole.save();
        res.status(200).json({ message: "New console  succssefully added", savedConsole });
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    };
};

const updateConsole = async (req, res) => {
    try {
        const {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        } = req.body;
        const updateConsole = await consolesModel.findByIdAndUpdate(req.params.id, {
            name,
            developer,
            releaseDate,
            display,
            storageCapacities,
            numberOfPlayers,
            available,
            description,
        });
        res.status(200).json({ message: "Console successfully updated", updateConsole });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    };
};

const deleteConsole = async (req, res) => {
    try {
        const{id} = req.params;
        const deleteConsole = await consolesModel.findOneAndDelete(id);
        const message = `Console with name ${deleteConsole.name} was successfully deleted`;
        res.status(200).json({ message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });

    };
};

module.exports = {
    findAllConsoles,
    findConsoleById,
    addNewConsole,
    updateConsole,
    deleteConsole,
}

/*{ 
  "name":"PlayStation 4",
  "developer":"Sony Computer Entertainment",
  "releaseDate":2013,
  "display":["480p","720p","1080p","4K"],
  "storageCapacities":["500GB","1TB","2TB"],
  "numberOfPlayers":["1","2","3"],
  "available":true,
  "description":"The PlayStation 4 (PS4) is a home video game console developed by Sony Computer Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013, in North America."
}
*/ 

/*{
  "consoleId":"63664d4d574f18b8ada4c298",
  "name":"God of War",
  "developer":"Santa Monica Studio",
  "releaseDate":2018,
  "genre":["Action-adventure","hack and slash"],
  "mode":["Single-player"],
  "available":true,
  "description":"While the first seven games were loosely based on Greek mythology, this episode is loosely inspired by Norse mythology, taking place several centuries after God of War III (2010). Six of the nine realms of Norse mythology can be explored. Predating the Vikings, most of the game takes place in ancient Scandinavia in the realm of Midgard, which is inhabited by humans and other creatures."
  }
*/
