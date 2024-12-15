const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, 'credentialsDontPost/.env') }) 
const uri = process.env.MONGO_CONNECTION_STRING;

const databaseAndCollection = {db: "335Final", collection:"FinalProject"};
const portNumber = process.argv[2];

const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true})); 
app.listen(portNumber);


app.get("/", (request, response) => { 
    response.render("index");
});

app.get("/bookAppt", (request, response) => {
    response.render("bookAppt");
});

app.get("/reviewAppt", (request, response) => {
    response.render("reviewAppt");
});

app.post("/submit", async (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const date = request.body.date;
    const service = request.body.servicesSelected;

    const appointmentInfo = {name, email, date, service};

    await client.connect();
    await insertAppointment(appointmentInfo); 
    response.render("processedAppt", appointmentInfo);
});

app.post("/findAppointment", async (request, response) => {
    const email = request.body.email;

    await client.connect();
    const appointment = await findEmail(email);

    if (appointment) {
        response.render('processedAppt', appointment);
    } else {
        const variables = {
            name: "NONE",
            email: "NONE",
            date: "NONE",
            servoce: "NONE",
        }
        response.render('processedAppt', variables);
    }
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const { create } = require("domain");
const client = new MongoClient(uri, {serverApi: ServerApiVersion.v1 });

async function main() {
    try {
        await client.connect();

        console.log(`Web server started and running at http://localhost:${portNumber}`);
        const prompt = "Stop to shutdown the server: ";
        process.stdout.write(prompt);
        process.stdin.setEncoding("utf8");

        process.stdin.on("readable", () => {
            const dataInput = process.stdin.read();
            if (dataInput != null) {
                const command = dataInput.trim();
                if (command === "stop") {
                    console.log(`Shutting down the server`);
                    process.exit(0);
                } 
            } 
        }) 

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function insertAppointment(newApp) {
    const result = await client.db(databaseAndCollection.db).collection(databaseAndCollection.collection).insertOne(newApp);
}

async function findEmail(emailAddy) {
    const application = await client.db(databaseAndCollection.db).collection(databaseAndCollection.collection).findOne({email: emailAddy});
    return application;
}

main().catch(console.error);
