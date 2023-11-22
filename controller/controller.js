const LogisticItem = require('../models/logisticItems');

const addItem = async (req,res) => {
    try {
        if(!req.body.name) {
            return res.status(500).json({message: "Please send name"});
        }
        if(!req.body.status) {
            return res.status(500).json({message: "Please send status"});
        }
        if(!req.body.location) {
            return res.status(500).json({message: "Please send location"});
        }
        if(!req.body.id) {
            return res.status(500).json({message: "Please send id"});
        }
        const newItem = await LogisticItem.create(req.body);
        return res.status(201).json(newItem);
        
    }
    catch(error) {
        return res.status(500).json({error: error.message});
    }
}

const getItem = async (req,res) => {
    try{
        const item = await LogisticItem.findOne({id: req.params.id});
        if(!item) {
            return res.status(404).json({error : 'Item Not Found'});
        }
        else{
            return res.status(200).json(item);
        }
    }
    catch(error) {
        return res.status(500).json({error: error.message});
    }
}

const updateItem = async (req,res) => {
    try{
        if(!req.body.name) {
            return res.status(500).json({message: "Please send name"});
        }
        if(!req.body.status) {
            return  res.status(500).json({message: "Please send status"});
        }
        if(!req.body.location) {
            return res.status(500).json({message: "Please send location"});
        }
        const updatedItem = await LogisticItem.findOneAndUpdate(
            {id: req.params.id},
            req.body,
            {new: true}
        );
        if(!updatedItem) {
            return res.status(404).json({error : 'Item Not Found'});
        }
        else{
            return res.status(200).json(updatedItem);
        }
    }
    catch(error) {
        return res.status(500).json({error: error.message});
    }
}

const deleteItem = async (req,res) => {
    try{
        const deletedItem = await LogisticItem.findOneAndDelete({id: req.params.id});
        if(!deletedItem) {
            return res.status(404).json({error : 'Item Not Found'});
        }
        else{
            return res.status(200).json(deletedItem);
        }
    }
    catch(error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    deleteItem,
    updateItem,
    addItem,
    getItem
}