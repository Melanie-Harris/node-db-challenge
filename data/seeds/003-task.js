
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task')
    .then(function () {
      // Inserts seed entries
      return knex("task").insert([
        {
          task_name: "Send announcements to art enthusiast",
          project_id: 1,
          task_completed: false,
          task_description: "email these",
        },
        {
          task_name: "Setup art event",
          project_id: 1,
          task_completed: false,
          task_description: "email announcements"
        },

        {
          task_name: "Send general announcements",
          project_id: 2,
          task_completed: false,
          task_description: "email, snail mail, and WOM"
        },
        {
          task_name: "Setup bake event",
          project_id: 2,
          task_completed: false,
          task_description: "hire staff",
          
        }
      ]);
    });
};
