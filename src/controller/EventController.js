const express = require("express");
const Event = require("../models/Event");
const EventController = express.Router();
const paginate = require("paginate-array");

EventController.post('/events', async (req, res) => {

    let requestConfig = {
        limit: req.body.all ? 900 : req.body.limit,
        attributes:[
            'id',
            'main_band_id',
            'name',
            'location',
            'cep_location',
            'bands_id',
            'situation',
            'date_start',
            'date_finished',
            'hour_start',
            'hour_finished'
        ]
     }

    const event = await Event.findAll(requestConfig);
    res.json({
        msg: "retornando normalmente",
        Event: event,
    })
})
EventController.post('/eventsPaginated', async (req, res) => {
    let fields = [ 'id', 'main_band_id', 'name', 'location', 'cep_location', 'bands_id', 'situation', 'date_start', 'date_finished', 'hour_start', 'hour_finished']
    let requestConfig = null;
    
    if(req.body.offset){
        requestConfig = {
                limit: req.body.all ? req.body.limit : 900,
                offset: req.body.offset,
                attributes:fields
            }
    }
     res.json(requestConfig);
    // const event = await Event.findAndCountAll(requestConfig);
    // res.json({
    //     msg: "retornando normalmente",
    //     Event: event,
    // })
})

module.exports = EventController;