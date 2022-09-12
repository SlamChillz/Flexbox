const Profile = require('../models/profile');
const { createSchema, updateSchema } = require('./Utilities/validation');

exports.createProfile = function(req, res, next) {
    const {firstName, lastName, email, track} = req.body;
    const { error, value } = createSchema.validate({firstName, lastName, email, track});
    if(error) {
        return res.status(404).send({status: "Invalid entry", message: error.details[0].message});
    }
    const profile = new Profile({
        firstName: value.firstName, lastName: value.lastName, email: value.email, track: value.track
    });
    Profile.findOne({email: email}, (err, profileExist) => {
        if(err) {return next(err)};
        if(profileExist){
            res.status(400).send({message: "User exist!"});
        }
        else {
            profile.save((err) => {
                if(err) {return next(err)};
                res.status(201).send({profile});
            });
        }
    });
}

exports.allProfiles = (req, res, next) => {
    Profile.find({}, (err, profiles) => {
        if(err) {return next(err)};
        res.status(200).send(profiles);
    });
}

exports.readProfile = (req, res, next) => {
    const {id} = req.params;
    Profile.findOne({_id: id}, (err, profileExist) => {
        if(err) {return next(err)}
        if(profileExist) {
            res.status(200).send(profileExist);
        }else {
            res.status(404).send({message: "User not found!"});
        }
    });
}

exports.updateProfile = (req, res, next) => {
    const {id} = req.params;
    const {firstName, lastName, email, track} = req.body;
    const { error, value } = updateSchema.validate({firstName, lastName, track});
    if(error) {
        return res.status(404).send({status: "Invalid entry", message: error.details[0].message});
    }
    Profile.findOne({_id: id}, (err, profile) => {
        if(err) {return next(err)};
        if(profile) {
            if(profile.email != email) {
                res.status(400).send({status: "failed", message: "email can not be updated"});
            }else {
                profile.firstName = value.firstName; profile.lastName = value.lastName; profile.track = value.track;
                profile.save((err) => {
                    if(err) {return next(err)};
                });
                res.status(200).send({status: "success", profile});
            }
        }else {
            res.status(404).send({status: "failed", message: "profile not found!"});
        }
    });
}

exports.deleteProfile = (req, res, next) => {
    const {id} = req.params;
    Profile.findOneAndDelete({_id: id}, {new: true}, (err, profile) => {
        if(err) {return next(err)};
        if(profile === null) {
            res.status(404).send({status: "failed", messages: "Profile not found!"});
        }else {
            res.status(200).send({status: "success", message: `Profile with id:- ${id} deleted`});
        }
    });
}

exports.search = (req, res, next) => {
    const {key, value} = req.query;
    Profile.find().where(key).equals(value).exec((err, results) => {
        if(err) {return next(err)};
        if(results.length) {
            res.status(200).send({status: "success", results: results});
        }else {
            res.status(404).send({status: "Not found", message: "No profile found for this search!"});
        }
    });
}