const app = require("./src/api");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
});