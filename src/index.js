const express = require("express");
const apiRoutes = require("./routes");
const { ServerConfig } = require("./config");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`server running at port ${ServerConfig.PORT}`);
});
