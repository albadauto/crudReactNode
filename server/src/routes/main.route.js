const { Router } = require("express");
const route = Router();
const mongoose = require("mongoose");
require("../models/user.model");
const userModel = mongoose.model("userNew");


route.get("/", async (req, res) => {
    try{
        const result = await userModel.find({});
        res.json(result);
    }catch(err){
        console.log(err);
    }
})

route.post("/insert", async (req,res) => {
    try{
        const insert = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            cpf: req.body.cpf
        };
        await userModel.create(insert);
        res.status(200).json({
            success: true
        })
    }catch(err){
        console.log(err)
    }
})

route.get('/delete/:id', async (req,res) => {
    try{
        await userModel.deleteOne({_id: req.params.id})
        res.json({
            success: true
        });
    }catch(err){
        console.log(err)
    }
})

module.exports = route;