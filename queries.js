const database = require("./database-connection");

module.exports = {
    listBooks() {
        return database("authors_books")
            .join("book", "authors_books.book_id", "=", "book.id")
            .join("author", "authors_books.author_id", "=", "author.id")
            .select({
                book_id: "book.id",
                title: "book.title",
                first_name: "author.first_name",
                last_name: "author.last_name",
                genre: "book.genre",
                cover_url: "book.cover_url"
            });
    }
};
