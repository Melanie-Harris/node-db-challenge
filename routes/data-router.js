// **********NOTES FROM REVIEW: 
//ADDED ERROR CODES, 
//FIXED PROBLEMS MISSED FROM README MVP:
    //When returning `project` or `task` information, the `completed` property should be `true` or `false`.
//WORKED ON ONE TO MANY RELATIONSHIP
//STUDIED JS THIS WEEKEND

//*******COMPLETED********* */

const express = require("express");

const routes = require("./data-model.js");

const router = express.Router();


router.get("/", (req, res) => {
  routes.getResources().then(resource => {
    res.status(200).json(resource);
  }).catch(error =>{
    res.status(500).json({message: 'get failed'});
  })
});
router.get("/resources", (req, res) => {
  routes
    .getResources()
    .then(item => {
      res.status(200).json(item);
    })
    .catch(error => {
      res.status(500).json({message: 'get failed'});
    });
});

router.post("/resources", (req, res) => {
  const resources = req.body
  routes
    .addResources(resources)
    .then(item => {
      res.status(201).json(item);
    })
    .catch(error => {
      res.status(500).json({message: 'post failed'});
    });
});


//
router.get("/projects", (req, res) => {
  routes.getProjects().then(item => {
 for (let i = 0; i < item.length; i++)//iterate over items array
    {if(item[i].project_completed === 0){item[i].project_completed = false}else{
      item[i].project_completed = true;
    }}//info from migration
    res.status(200).json(item);
  }).catch(error => {
    es.status(500).json({ message: "get failed" });
  });
});

router.post("/projects", (req, res) => {
  const projects = req.body;
  routes
    .addProjects(projects)
    .then(item => {
      res.status(201).json(item);
    })
    .catch(error => {
      res.status(500).json({message: 'post failed'});
    });
});

router.get("/task", (req, res) => {
  routes
    .getTasks()
    .then(item => {
      res.status(200).json(item);
    })
    .catch(error => {
      res.status(500).json({message: 'get failed'});
    });
});

router.get("/:id/task", (req, res) => {
  const { id } = req.params;
  routes.getTask(id).then(item => {
    res.status(200).json(item);
  }).catch(error => {
    res.status(500).json({message: 'get failed'});
  });
});

router.post("/task", (req, res) => {
  const task = req.body;
  routes
    .addTasks(task)
    .then(item => {
      res.status(201).json(item);
    })
    .catch(error => {
      res.status(500).json({message: 'post failed'});
    });
});


module.exports = router;
