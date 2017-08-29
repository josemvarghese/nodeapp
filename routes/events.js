var express = require('express');
var router = express.Router();
var eventModel = require('../model/event');

router.post('/addevent', function(req, res, next) {
	var newevent = new eventModel({
        name : req.body.eventName,
        description : req.body.eventDesc,
        createdBy : req.body.createdBy
    })
    newevent.save(function(err, data){
        if(err){ return next(err) }
        res.json(201, data)
    })
});

router.get('/events',function(req,res,next) {
    eventModel.find({}, function (err, data) {
        res.json(data);
    });
});

router.get('/events/:id',function(req,res,next) {
    eventModel.findOne({_id:req.params.id}, function (err, data) {
        res.json(data);
    });
});

module.exports = router;
