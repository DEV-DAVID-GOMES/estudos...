const express = require("express");
const router = require("./routes");

const app = express()

app.use(express.json())

app.use("/api", router)

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`))