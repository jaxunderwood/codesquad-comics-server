const express = require("express");

const app = express();
const PORT = 8080;

const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("node:path");

// const authorRoutes = require("./routes/authorsRoutes");
const booksRoutes = require("./routes/bookRoutes");
// const bookInventory = require("./data/booksInventory");
// const authRoutes = require("./routes/authRouter");



app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));

// app.use("/api/authors", authorRoutes);
app.use("/api/books", booksRoutes);
// app.use("/api", authRoutes);





app.get("/", (request, response, next) =>{
    // response.send("This route points to the Home page")
    response.status(200).json({
        success: { message: "This route points to the Home page"},
        statusCode: 200,
    });
});



app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
});
