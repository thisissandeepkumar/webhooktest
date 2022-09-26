const Express = require("express");
const app = Express();

app.use(Express.json());

app.post("/webhook", async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    message: "OK",
  });
});

app.listen(3500, () => {
  console.log("Listening on port 3500");
});
