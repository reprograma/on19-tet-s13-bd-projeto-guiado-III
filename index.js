

/*

 const findGameByName = async (req, res) => {
    try {
      const findName = await gamesModel.findGameByName(req.query.addNewGame).populate(
        "Console"
      );
      if (findName == null) {
        res.status(404).json({ message: "Game not available" });
      }
      res.status(200).json(findName);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };
[]Crie uma rota GET que encontre um jogo usando como parametro o name (crie a logica na pasta controller);
[]Crie uma rota GET que encontre um console usando como parametro available (crie a logica na pasta controller);
[]Cadastre no seu banco de dados um novo jogo e/ou um novo console (a sua escolha), tire um print da tela e adicione essa imagem no seu README.md isso servirá como comprovante pessoal de que todo seu codigo esta funcionando.
[]Opcional (não conta como avaliação): Crie uma rota GET para genre em jogos e uma rota GET para developer em consoles.*/