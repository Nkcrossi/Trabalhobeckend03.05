const express = require("express")
const alunosJSON=require("./data/alunos.json")
const professoresJSON=require("./data/professores.json")
const cachorrosJSON=require("./data/cachorros.json")
const server = express()

server.get("/",(rec,res)=>{
    return res.send("meu server")
})
server.get("/alunos",(rec,res)=>{
    return res.json(alunosJSON)
})
server.get("/professores",(rec,res)=>{
    return res.json(professoresJSON)
})
server.get("/cachorros",(rec,res)=>{
    return res.json(cachorrosJSON)
})
server.listen(3000,()=>{
    console.log("servidor rodando")
})
