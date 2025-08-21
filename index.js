import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let type = "random";

app.get("/", async (req, res) => {

    let response;

    if (type == "random") {
        response = await axios.get(
            "https://official-joke-api.appspot.com/jokes/random"
        );
        response = response.data;
    }
    else{
        response = await axios.get(
            "https://official-joke-api.appspot.com/jokes/" + type + "/random"
        );
        response = response.data[0];
    }

    console.log("type = " + type);
    console.log("RESPONSE: ");
    console.log(response.data);

    res.render("index.ejs", {
        question: response.setup,
        answer: response.punchline,
    });
});

app.post("/", async (req, res) => {
    
    type = req.body.category;

    console.log("POST category: " + req.body.category);

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is Listening on port ${port}`);
});
