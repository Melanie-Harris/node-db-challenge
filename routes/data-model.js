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
  getTask,
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
//The list of tasks should include the project name and project description**.
function getTask(id) {
  return db
    .select([
      "projects.project_name",
      "projects.project_description",
      "task.task_description",
      "task.task_name"
    ]) // "selects" columns from 1 or more tables. Selecting form task and project
    .from("task")
    .leftJoin("projects", { "task.project_id": "projects.id" })//task.project.id is foreign key. foreign key becomes project.id : is primary key 
    .where({ "projects.id": Number(id) });}//

     
      