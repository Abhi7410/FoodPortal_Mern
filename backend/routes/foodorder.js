var express = require("express");
var router = express.Router();

// Load User model
const OrderItem = require("../models/order");

// GET request 
// Getting all the users
router.get("/", function (req, res) {
    OrderItem.find(function (err, users) {
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
router.post("/ItemBuy", (req, res) => {
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
        status: "Placed",
        quantity: req.body.quantity,
        totalCost: req.body.totalCost,
        emailBuyer: req.body.emailBuyer,
        addon_buyer:req.body.addon_buyer,
        placeTime: new Date()
                
    });
    console.log(newItem);

    newItem.save()
        .then((user) => {
            res.status(200).json(user);
        })

        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/acceptOrder", (req, res) => {

    console.log(req.body);
    OrderItem.findOneAndUpdate(
        { _id: req.body._id },
        { status: "Accepted" },
        {new:true},
        
         (err, docs) => {
            if (err) {
                res.status(500).json(error);
            } else {
                res.status(200).json(docs);       
            }

        }

    );
});

router.post("/rejectOrder", (req, res) => {

    console.log(req.body);
    OrderItem.findOneAndUpdate(
        { _id: req.body._id },
        { status: "Rejected" },
        { new: true },
        (err, docs) => {
            if (err) {
                res.status(500).json(error);
            } else {
                res.status(200).json(docs);
            }

        }

    );
});

router.post("/cookOrder", (req, res) => {

    console.log(req.body);
    OrderItem.findOneAndUpdate(
        { _id: req.body._id },
        { status: "Cooking" },
        { new: true },

        (err, docs) => {
            if (err) {
                res.status(500).json(error);
            } else {
                res.status(200).json(docs);
            }

        }

    );
});

router.post("/pickOrder", (req, res) => {

    console.log(req.body);
    OrderItem.findOneAndUpdate(
        { _id: req.body._id },
        { status: "Ready to pickup" },
        { new: true },

        (err, docs) => {
            if (err) {
                res.status(500).json(error);
            } else {
                res.status(200).json(docs);
            }

        }

    );
});

router.post("/completeOrder", (req, res) => {

    console.log(req.body);
    OrderItem.findOneAndUpdate(
        { _id: req.body._id },
        { status: "Completed" },
        { new: true },

        (err, docs) => {
            if (err) {
                res.status(500).json(error);
            } else {
                res.status(200).json(docs);
            }

        }

    );
});




module.exports = router;


