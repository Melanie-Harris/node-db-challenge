const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  addResources,
  getResources,
  addProjects,
  getProjects,
  addTasks,
  getTasks,
};

function getResources() {
  return db("resources");
}

function addResources(item) {
 return db("resources")
   .insert(item)
   .then(ids => ({ id: ids[0] }));
}


function addProjects(item) {
  return db("projects")
    .insert(item)
    .then(ids => ({ id: ids[0] }));
}
function getProjects() {
  return db("projects");
}


function addTasks(item) {
  return db("task")
    .insert(item)
    .then(ids => ({ id: ids[0] }));
}
//the list of all task
function getTasks() {
  return db("task");
}
//The list of tasks should including the project name and project description**.
function getTasks(id) {
  return db
    .select([
      "projects.name",
      "projects.description",
    ])// returns records from 1 or more tables
    .from("projects")
    .leftJoin("tasks", { "projects.task_id": "tasks.id" })
    .where({ "tasks.id": Number(id) });}

      //WORKING THROUGH THIS LAST ONE: NOTES BELOW THIS LINE
      //"hmm... lets think"....
      //'tasks.notes',,'projects.id'