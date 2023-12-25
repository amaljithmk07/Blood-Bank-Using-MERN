const express = require("express");
const userbloodroutes = express.Router();
const multer = require("multer");
const bloodbank = require("../models/userbloodschema");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../front-end/public/upload/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//add

userbloodroutes.post("/add", upload.single("image"), (req, res) => {
  const Data = new bloodbank({
    image: req.file.filename,
    full_name: req.body.full_name,
    date_of_birth: req.body.date_of_birth,
    blood_group: req.body.blood_group,
    phone_number: req.body.phone_number,
    gender: req.body.gender,
    address: req.body.address,
  });
  Data.save()
    .then((data) => {
      // res.send(data)
      res.redirect("/api/blood/view");
    })
    .catch((err) => {
      res.send(err);
    });
});

//view

userbloodroutes.get("/view", (req, res) => {
  bloodbank
    .find()
    .then((data) => {
      // res.render('results', { details: data })
      res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "profile view successful",
      });

      // res.send(data)
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        error: true,
        data: data,
        ErrorMessage: err.message,
      });
    });
});

//view One

userbloodroutes.get("/view/:id", (req, res) => {
  bloodbank
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.render("resultone", { data });

      // res.send(data)
    })
    .catch((err) => {
      res.send(err);
    });
});

//delete one

userbloodroutes.get("/delete/:id", (req, res) => {
  bloodbank
    .deleteOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.redirect("/api/blood/view");
      // res.send('Deleted Successfully')
    })
    .catch((err) => {
      res.send(err);
    });
});

//update list

userbloodroutes.get("/list/:id", (req, res) => {
  bloodbank
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.render("update", { data });
    })
    .catch((err) => {
      res.send(err);
    });
});

//UpdateOne

userbloodroutes.post("/update/:id", upload.single("image"), (req, res) => {
  bloodbank
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      (data.full_name = req.body.full_name),
        (data.blood_group = req.body.blood_group),
        (data.gender = req.body.gender),
        (data.date_of_birth = req.body.date_of_birth),
        (data.phone_number = req.body.phone_number),
        (data.address = req.body.address),
        (data.image = req.file.filename);
      data
        .save()
        .then((data) => {
          res.redirect("/api/blood/view");
          // res.send(data)
        })
        .catch((err) => {
          res.send(err);
        });
    });
});

module.exports = userbloodroutes;
