exports.up = function(knex, Promise) {
    return knex.schema.createTable("authors_books", table => {
        table.increments("id");
        table.integer("author_id");
        table
            .foreign("author_id")
            .references("id")
            .inTable("author");
        table.integer("book_id");
        table
            .foreign("book_id")
            .references("id")
            .inTable("book");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("authors_books");
};
