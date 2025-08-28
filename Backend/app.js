const express = require("express")
const cors = require("cors")
const app = express()
const message = require("./routes/MessageRoute.js")
const connectDB = require("./config/db")
connectDB()

app.use(cors())
// app.use(bodyParser.json());
app.use(express.json());

app.use("/api", message)

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})
