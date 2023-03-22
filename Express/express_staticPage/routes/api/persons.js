const express = require("express");
const persons = require("../../Persons");
const uuid = require("uuid");

const router = express.Router();

//get all persons
router.get("/", (req, res) => res.json(persons));

//get single person
router.get("/:id", (req, res) => {
  const found = persons.some((person) => person.id === parseInt(req.params.id));

  if (found) {
    res.json(persons.filter((person) => person.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no person with id:${req.params.id}` });
  }
});

//create Person
router.post("/", (req, res) => {
  const newPerson = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    //,status: "married",
  };

  if (!newPerson.name || !newPerson.age) {
    return res.status(400).json({ msg: "Please inclue name and age" });
  }

  persons.push(newPerson);
  res.json(persons);
});

//Update Person
router.put("/:id", (req, res) => {
  const found = persons.some((person) => person.id === parseInt(req.params.id));

  if (found) {
    const updPerson = req.body;
    persons.forEach((person) => {
      person.name = updPerson.name ? updPerson.name : person.name;
      person.age = updPerson.age ? updPerson.age : person.age;

      res.json({ msg: "Person updated", person });
    });
  } else {
    res.status(400).json({ msg: `no person with id:${req.params.id}` });
  }
});

//delete person
router.delete("/:id", (req, res) => {
  const found = persons.some((person) => person.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "Person deleted",
      persons: persons.filter(
        (person) => person.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `no person with id:${req.params.id}` });
  }
});

module.exports = router;
