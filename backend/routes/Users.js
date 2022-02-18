var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
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
router.post("/register", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        service: req.body.service,
        age: req.body.age,
        batchName: req.body.batchName,
        shopName: req.body.shopName,
        contact: req.body.contact,
        shopClosingTime: req.body.shopClosingTime,
        shopOpeningTime: req.body.shopOpeningTime,
        confirmPassword: req.body.confirmPassword,
        wallet: "0",
        date: req.body.date
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/editProfile", (req, res) => {
    
    console.log(req.body);
    User.findOneAndUpdate({ email: req.body.email },
        {
            name: req.body.name,
            service: req.body.service,
            email: req.body.email,
            age: req.body.age,
            contact: req.body.contact,
            shopName: req.body.shopName,
            batchName: req.body.batchName,
            shopOpeningTime: req.body.shopOpeningTime,
            shopClosingTime: req.body.shopClosingTime,
            password: req.body.password,
            confirmPassword:req.body.confirmPassword,
        },
         { new: true },
        function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log(docs);
                res.send(docs);
                console, log("updated");
                
            }
        }
    );
});


// POST request 
// Login
router.post("/login", (req, res) => {
	const email = req.body.email;
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else {
            if (user.password === req.body.password) {
                res.send(user);

                return user;
            }
            else {
                return res.status(404).json({
                    error: "Incorrect Password",
                });
            }
            
        }
	});
});

router.post("/addmon", (req, res) => {
    const email = req.body.email;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user email exists
        user.wallet = +user.wallet + +req.body.amount;
        User.findOneAndUpdate(
            { email: email }, user, { new: true }, function (err, docs) {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json(docs);
                }
            });
    });
});


router.post("/reduceWallet", (req, res) => {
    const email = req.body.email;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user email exists
        user.wallet = +user.wallet - +req.body.totalCost;
        User.findOneAndUpdate(
            { email: email }, user, { new: true }, function (err, docs) {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json(docs);
                }
            });
    });
});
module.exports = router;


