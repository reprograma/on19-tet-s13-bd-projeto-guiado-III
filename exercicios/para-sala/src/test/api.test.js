const request = require("supertest");
const app = require("../app.js");

let elementId;

describe("API test", () => {
  test("Rota Get All - Lista Todos os cadastros", (done) => {
    request(app)
      .get("/gamestore/games/all")
      .expect(200)
      .expect((res) => {
        expect(res.body.lenght).not.toBe(0);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
    });
})
/*  test("Rota Post /users/create", (done) => {
    request(app)
      .post("/users/create")
      .expect("Content-Type", /json/)
      .send({
        name: "Tereza",
        email: "tereza@reprograma.com",
        password: "javascript",
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.savedUser._id;
        return done();
      });
  });*/

/*  test("Rota Delete /users/delete/:id", (done) => {
    request(app)
      .delete(`/users/delete/${elementId}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.userFound.email).toBe("tereza@reprograma.com");
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});*/
