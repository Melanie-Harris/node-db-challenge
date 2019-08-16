const express = require("express");

const routes = require("./data-model.js");

const router = express.Router();


router.get("/", (req, res) => {
  routes.getResources().then(resource => {
    res.status(200).json(resource);
  });
});
router.get("/resources", (req, res) => {
  routes.getResources().then(item =>{
    res.json(item)
  })
});

router.post("/resources", (req, res) => {
  const resources = req.body
  routes.addResources(resources).then(item =>{
    res.json(item)
  })
});

router.get("/projects", (req, res) => {
  routes.getProjects().then(item => {
    res.json(item);
  });
});

router.post("/projects", (req, res) => {
  const projects = req.body;
  routes.addProjects(projects).then(item => {
    res.json(item);
  });
});

router.get("/task", (req, res) => {
  routes.getTasks().then(item => {
    res.json(item);
  });
});

router.get("/:id/task", (req, res) => {
  const { id } = req.params;
  routes.getTask(id).then(item => {
    res.json(item);
  });
});

router.post("/task", (req, res) => {
  const task = req.body;
  routes.addTasks(task).then(item => {
    res.json(item);
  });
});


module.exports = router;
