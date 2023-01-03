var url = "http://localhost:1313/add/";
var data = {
      "name": "Disney's Aladdin",	
      "developer": "CAPCOM" ,
      "releaseDate": 21111993,
      "genre": "Aventura",
      "mode": "single player",
      "available": "False",
      "description": "Disney's Aladdin é um jogo eletrônico criado em 1993, baseado em um filme com o mesmo nome, lançado para Super Nintendo, junto com outros jogos de mesmo nome para outras plataformas, que são completamente diferentes, apesar de ter o mesmo tema e enredo",
}


fetch(url, {
    Method: 'POST',
    Headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    Body: data,
    Cache: 'default'
  })

