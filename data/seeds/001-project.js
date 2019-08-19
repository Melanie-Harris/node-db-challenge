
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Paint Night",
          project_description: "raise money through art",
          project_completed: false,
          task_id: 1,
        },
        {
          project_name: "Cake Only Bake Sale",
          project_description: "raise money through bake sale",
          project_completed: false,
          task_id:2,
        }
      ]);
    });
};
