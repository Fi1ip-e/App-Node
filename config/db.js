if (process.env.NODE_ENV == "production")
{
    module.exports = {mongoURI: "mongodb+srv://filcarva:filcarv@25@blogapp.n9du6.mongodb.net/blogapp?retryWrites=true&w=majority"}
}
else
{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}