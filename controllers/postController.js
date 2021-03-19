const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


const { PostModel } = require('../models/postModels');

router.get('/', (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error to get data : ' + err);
    });
});

router.post('/', (req, res) => {
    const newRecord = new PostModel({
        author : req.body.author,
        message : req.body.message
    });

    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data : ' + err);
    });

});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('ID unknow : ' + req.params.id);
    };
    const updateRecord = {
        author : req.body.author,
        message : req.body.message
    };

    PostModel.findByIdAndUpdate(
        req.params.id,
        {$set : updateRecord},
        {new : true},
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log('error update data : ' + err);
        }
    );

});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Id unknow : ' + req.params.id);
    };

    PostModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log('Delete error : ' + err);
        }
    );
})


module.exports = router;