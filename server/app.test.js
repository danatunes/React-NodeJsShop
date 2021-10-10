import supertest from 'supertest'
import app from './controllers/userController'
import {request} from "express";

describe("POST /users",()=>{

    describe("given a username and password", () =>{
    //should save the username and password to the database
        //should response with a json object contain the user id
        //
        test("should response with a 200 status code",()=>{
             const response = await request(app).post("/users").send({
                 username : "username",
                 password : "password"
             })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header",()=>{
            const response = await
        })
    })

    describe("when the username and password is missing",()=>{
        //should respond with a status code of 400
    })
})