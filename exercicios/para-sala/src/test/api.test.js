const request = require('supertest');
const app = require("../app.js");

let elementId;

describe("API TEST", () =>{
    test("get /gamestore/consoles/all", (done) =>{
        request(app)
        .get("/gamestore/consoles/all")
        .expect(200)
        .expect((res) =>{
            expect(res.body.lenght).not.toBe(0)
        })
        .end((err, res) =>{
        if (err) return done (err);
        return done();
       })
    })
    test("POST /gamestore/consoles/add", (done) =>{
        request(app)
        .post("/gamestore/consoles/add")
        .expect(200)
        .expect((res) =>{
            expect(res.body.lenght).not.toBe(0)
        })
        .end((err, res) =>{
        if (err) return done (err);
        return done();
       })
    })
    test("GET /gamestore/consoles/:available", (done) =>{
        request(app)
        .post("/gamestore/consoles/:available")
        .expect(200)
        .expect((res) =>{
            expect(res.body.lenght).not.toBe(0)
        })
        .end((err, res) =>{
        if (err) return done (err);
        return done();
       })
    })
})

