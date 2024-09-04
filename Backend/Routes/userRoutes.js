const route = require("express").Router();
const { createCandidateDetails } = require("../Controllers/userController");

route.post("/CreateCandidateDetails", createCandidateDetails);

module.exports = route;
