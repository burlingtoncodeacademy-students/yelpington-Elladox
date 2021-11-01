const { response } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const publicDir = path.resolve("./client/public");

app.use(express.static(publicDir));

const restaurantsDir = path.resolve("./api");
console.log(restaurantsDir);
/* set up api for specific restaurants */
app.get("/api/:restaurantId", (request, response) => {
  /* var to get the proper path for the .sendFile method */
  let filePath = path.join(
    restaurantsDir,
    request.params.restaurantId + ".json"
  );
  response.sendFile(filePath);
});
/* set up api for the index of restaurant id's */
app.get("/api", (request, response) => {
  response.sendFile(__dirname + "/api/directory.json");
});

/* set up server to listen on port 5000 */
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
