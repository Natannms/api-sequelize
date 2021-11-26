const express = require("express");
const {Op} = require("sequelize")
const Band = require("../models/Band")
const BandsController = express.Router();

BandsController.get('/bands/:id', async (req, res)=>{
    console.log(req.body)
    const BandsList = await Band.findAll({
        limit: req.body.all ? 900 : req.body.limit,
        attributes: ['id', 'name'],
        where: {
            id:req.params.id
        }
    });

    res.json(BandsList)

})
BandsController.post('/bandsListForEvent', async (req, res)=>{
    console.log(req.body)
    // console.log(req.body.bands_id)
    // const BandsList = await Band.findAll({
      
    //     attributes: ['id', 'name'],
    //     where: {
    //         id:{ [Op.in]: req.body.bands_id}
    //     }
    // });

    // res.json(BandsList)

})

module.exports = BandsController;