exports.up = function(knex, Promise) {
    return knex.schema.createTable("book", table => {
        table.increments("id");
        table.text("title");
        table.text("genre");
        table.text("synopsis");
        table.text("cover_url");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("book");
};
