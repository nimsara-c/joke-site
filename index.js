import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static("public"));



app.get("/", async (req, res) => {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    res.render("index.ejs", {
        question: response.data.setup,
        answer: response.data.punchline
    });
    console.log(DeviceInfo.getBaseOs.name);

});

app.listen(port, ()=> {
    console.log(`Server is Listening on port ${port}`);
});