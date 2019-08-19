
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_name: "Paint", 
           project_id: 1, 
            resource_description:" multiple colors" },
        { resource_name: "Canvas", 
          project_id: 1 , 
          resource_description:"multiple sizes" },
        { resource_name: "Brushes", 
          project_id: 1, resource_description:"different types" },
        { resource_name: "Signage for event", 
          project_id: 1, resource_description:"500 copies" },

        { resource_name: "Cakes", project_id: 2, resource_description:"different flavors" },
        { resource_name: "Tables", project_id: 2, resource_description:" long tables" },
        { resource_name: "Signs for event", project_id: 2, resource_description:" 400 copies" },
        { resource_name: "Cake display stands", project_id: 2, resource_description:" 50 cake stands" }
      ]);
    });
};
