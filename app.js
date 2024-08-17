const express = require("express");
const http = require("http");
const path = require("path"); // Import the path module
const socketio = require("socket.io"); // Correct module name

const app = express();
const server = http.createServer(app);
const io = socketio(server); // Initialize socket.io with the server

app.set("view engine", "ejs"); // Set EJS as the view engine

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public"))); // Use app.use() instead of app.set()

io.on("connection", function(socket) {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.render("index"); // Render the index.ejs view
});

// Start the server using the `server` instance
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
