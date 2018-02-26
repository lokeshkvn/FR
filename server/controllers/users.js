const User = require('../models/users');
const Farmer = require('../models/farmers');
const Retailer = require('../models/retailers');
const Administrator = require('../models/administrators');
const RetailerCardInfo = require('../models/retailer_card_info')

module.exports = {
    getUsers: async (req, res, next)=>{
        const users = await User.find({});
        res.status(200).json(users);
        res.json(users);
    },

    getFarmers: async (req, res, next)=>{
        const farmers = await Farmer.find({});
        res.status(200).json(farmers);
    },

    getOneFarmer: async (req, res, next) => {
        const {user_id} = req.params;
        const farmer = await Farmer.findById(user_id);
        res.status(201).json({success: true, found_farmer: farmer});
    },

    updateFarmer: async (req, res, next) => {
        const {user_id} = req.params;
        const updates = req.body;
        console.log("updates: " + updates);
        const old_farmer = await Farmer.findById(user_id);
        await Farmer.findByIdAndUpdate(old_farmer._id, updates);
        res.status(201).json({success: true});
    },

    newFarmer: async (req, res, next)=>{
        let newUser = new User({
            user_name: req.body.user_name,
            user_type: "2",
            password: req.body.password
        });
        const user = await newUser.save();
        console.log("user created successfully");
        req.user = user;
        let newFarmer = new Farmer({
            name: req.body.user_name,
            user_type: "2",
            user_id: req.user,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            date_of_birth: req.body.date_of_birth,
            farmer_type: req.body.farmer_type,
            account_info_id: req.body.account_info_id,
            card_info_id: req.body.card_info_id
        });
        var farmer = await newFarmer.save();
        farmer = farmer.populate({path: "user_id", model: "User"}, (err) => {
            if(err){
                console.log("Error while populating");
                res.json({error: err});
            } else {
                res.json({msg: "Farmer created successfully", farmer_details: farmer});
            }
        });
        // res.json({msg: "Farmer created successfully", farmer_details: farmer});
    },

    getRetailers: async (req, res, next)=>{
        const retailers = await Retailer.find({});
        res.status(200).json(retailers);
    },

    getOneRetailer: async (req, res, next) => {
        const {user_id} = req.params;
        const retailer = await Retailer.findById(user_id);
        res.status(201).json({success: true, found_retailer: retailer});
    },

    updateRetailer: async (req, res, next) => {
        const {user_id} = req.params;
        const updates = req.body;
        console.log("updates: " + updates);
        const old_retailer = await Retailer.findById(user_id);
        await Retailer.findByIdAndUpdate(old_retailer._id, updates);
        res.status(201).json({success: true});
    },
    
    newRetailer: async (req, res, next)=>{
        let newUser = new User({
            user_name: req.body.user_name,
            user_type: "3",
            password: req.body.password
        });
        const user = await newUser.save();
        console.log("user created successfully");
        req.user = user;
        let newRetailer = new Retailer({
            user_id: req.user,
            name: req.body.user_name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            date_of_birth: req.body.date_of_birth,
            card_info_id: req.body.card_info_id
        });
        const retailer = await newRetailer.save();
        res.json({msg: "retailer created successfully", retailer_details: retailer});
    },

    addCard: async (req, res, next)=>{
        const {retailer_id} = req.params;
        var retailer = await Retailer.findById(retailer_id);
        console.log(retailer);
        const card = new RetailerCardInfo(req.body);
        card.retailer_id = retailer;
        const saved_card = await card.save();
        retailer.card_info_id.push(saved_card);
        retailer = await retailer.save();
        res.status(201).json({msg: "card added successfully", card_details: saved_card, retailer_details: retailer});
    },

    removeCard: async (req, res, next)=>{
        const {card_info_id} = req.params;
        const card = await RetailerCardInfo.findById(card_info_id);
        var retailer = await Retailer.findById(card.retailer_id);
        await retailer.card_info_id.pull(card);
        card.active = false;
        await card.save();
        retailer = await retailer.save();
        res.status(201).json({msg: "card removed successfully", retailer_details: retailer});
    },

    getAdministrators: async (req, res, next)=>{
        const administrators = await Administrator.find({});
        res.status(200).json(administrators);
    },

    getOneAdministrator: async (req, res, next) => {
        const {user_id} = req.params;
        const administrator = await Administrator.findById(user_id);
        res.status(201).json({success: true, found_administrator: administrator});
    },

    newAdministrator: async (req, res, next)=>{
        let newUser = new User({
            user_name: req.body.user_name,
            user_type: "1",
            password: req.body.password
        });
        const user = await newUser.save()
        console.log("user created successfully");
        req.user = user;
        let newAdministrator = new Administrator({
            user_id: req.user,
            name: req.body.user_name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            date_of_birth: req.body.date_of_birth,
            admin_type: req.body.admin_type
        });
        const administrator = await newAdministrator.save();
        res.json({msg: "administrator created successfully", administrator_details: administrator});
    },

    loginUser: async (req, res, next)=>{
        let user = {
            user_name: req.user_name,
            password: req.password
        };
        const found_user = await User.findOne({user_name: user.user_name});
        console.log("Found the user");
        console.log(found_user);
        if(found_user.user_type == "1"){
            console.log("user_type: Administrator");
            const found_administrator = await Administrator.findById(found_user._id);
            res.json(found_administrator);
        }
        if(found_user.user_type == "2"){
            console.log("user_type: Farmer");
            const found_farmer = await Farmer.findById(found_user._id);
            res.json(found_farmer);
        }
        if(found_user.user_type == "3"){
            console.log("user_type: Retailer");
            const found_retailer = await Retailer.findOne(found_user._id);
            res.json(found_retailer)
        }
        else{
            console.log("Not found")
        }
    }
}