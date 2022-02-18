var express = require("express");
var router = express.Router();

// Load User model
const FoodItem = require("../models/item");

// GET request 
// Getting all the users
router.get("/", function (req, res) {
    FoodItem.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/addItem", (req, res) => {
    const newItem = new FoodItem({
        itemName: req.body.itemName,
        price: req.body.price,
        rating: req.body.rating,
        type: req.body.type,
        service: req.body.service,
        addon: req.body.addon.join(','),
        tags: req.body.tags.join(','),
        vendorName: req.body.vendorName,
        itemShop: req.body.itemShop,
    });

    newItem.save()
        .then((user) => {
        res.status(200).json(user);
    })
        
    .catch(err => {
        res.status(400).send(err);
    });
});

router.post("/editItem", (req, res) => {

    console.log(req.body);
    FoodItem.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true },
        function (err, doc) {
            if (err) {
                console.log(err);
            }
            res.status(200).json(doc);
            
        }
      
    );
});


router.post("/delItem", (req, res) => {

    FoodItem.findByIdAndDelete(req.body._id, function (err, obj){
        if (err) {
            console.log(err);
        }
        console.log(res);
        res.status(200).json(obj);
    });
});

router.post("/buyItem", (req, res) => {
    const newItem = new OrderItem({
        itemName: req.body.itemName,
        price: req.body.price,
        rating: req.body.rating,
        type: req.body.type,
        service: req.body.service,
        addon: req.body.addon,
        tags: req.body.tags,
        vendorName: req.body.vendorName,
        itemShop: req.body.itemShop,
        quantity: req.body.quantity,
        status: req.body.status,
        totalCost:req.body.totalCost,
    });

    newItem.save()
        .then((user) => {
            res.status(200).json(user);
        })

        .catch(err => {
            res.status(400).send(err);
        });
});




module.exports = router;


