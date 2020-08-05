const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const user = mockData;
console.log(user)
const data = JSON.stringify(user);
console.log(data)
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err) {
    err ? console.log(err) : console.log("Mock DB created.");
});
