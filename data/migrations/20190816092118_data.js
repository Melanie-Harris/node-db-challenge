
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();//produces id
      tbl.string('project_name')
         .unique()
         .notNullable()
      tbl.string('project_description')
         .notNullable()
      tbl.boolean('project_completed')//knex.js: boolean — table.boolean(name). Adds a boolean column.
         .defaultTo(false)//defaultTo — column.defaultTo(value). Sets the default value for the column on an insert.
         .notNullable()
        //a project can have multiple tasks.
        tbl.integer("task_id")// creates foreign key that connects
          .unsigned() // restrictions for positive numbers only
          .notNullable()
          .references("id")// references a specific id number
          .inTable("task")// connects two tables
          .onUpdate("CASCADE")// changes all occurrences of the id
          .onDelete("CASCADE")// changes all occurrences of the id
  })
  //the same resource can be used in multiple projects.
  .createTable('resources', tbl =>{
    tbl.increments()
    tbl.string('resource_name')
        .notNullable()
    tbl.string('resource_description')
    tbl.integer("project_id")// creates foreign key that connects
          .unsigned() // restrictions for positive numbers only
          .notNullable()
          .references("id")// references a specific id number
          .inTable("projects")// connects two tables
          .onUpdate("CASCADE")// changes all occurrences of the id
          .onDelete("CASCADE")// changes all occurrences of the id

  })
  //a task belongs to only one project. (unique)
.createTable('task', tbl=>{
    tbl.increments()// id
    tbl.string('task_name')
        .notNullable()
        .unique()
    tbl.string('task_description')
        .notNullable()
    tbl.string('task_notes')
    tbl.boolean("task_completed") //knex.js: boolean — table.boolean(name). Adds a boolean column.
      .defaultTo(false) //defaultTo — column.defaultTo(value). Sets the default value for the column on an insert.
      .notNullable();
    tbl.integer("project_id")// creates foreign key that connects
          .unsigned() // restrictions for positive numbers only
          .notNullable()
          .references("id")// references a specific id number
          .inTable("projects")// connects two tables
          .onUpdate("CASCADE")// changes all occurrences of the id
          .onDelete("CASCADE")// changes all occurrences of the id
          .index()
})
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
