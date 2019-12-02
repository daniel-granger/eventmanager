main = exports

//Create the express instance
var express = require("express")
var helmet = require("helmet")
main.app = express()

//Introduce CORS for development
var cors = require("cors")

//Tell Express to handle requests with JSON (rather than URL encoded)
main.app.use(express.json())

//REMOVE IN PROD FOR SECURITY
main.app.use(cors())
main.app.use(helmet())

//Import endpoints
const submit = require("./endpoints/submit.js")

main.app.get("/coffee", (req, res) => {
	res.status(418).send("But I'm a teapot.")
})

main.app.listen(3000)
