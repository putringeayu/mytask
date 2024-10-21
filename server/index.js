import express from "express";

const app = express(); //library express initialized

const PORT = 5000;

app.get("/", (req, res)=> {
    res.status(200).json ({
        message: "Hello World",
    });
});

app.use("*", (req, res) => {
    res.status(404).json ({
        message: "not found",
    });
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});