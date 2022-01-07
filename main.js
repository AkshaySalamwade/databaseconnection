const express = require("express");
const app = express();

const { selectUser } = require("./user");

app.get("/users", async (request, response) => { 
    const list = await selectUser();
    response.json(list);
});

app.listen(4000, () => console.log("server started"));