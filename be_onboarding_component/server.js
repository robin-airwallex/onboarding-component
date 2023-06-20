const express = require("express");
const app = express();

const account_create_body = require("./account_create");

const axios = require("axios");

app.use(express.static("public"));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("<h2>Hope this works!!<h2>");
});

app.post("/create_account", async (req, res) => {
  const { token, challenge } = req.body;
  //   console.log("account_create_body - ", account_create_body);
  const account = await axios.request({
    url: "https://api-demo.airwallex.com/api/v1/accounts/create",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      headers: "[object Object]",
    },
    data: account_create_body,
  });

  const id = account.data.id;

  console.log("id - ", id);

  const authorize_account = await axios.request({
    url: `https://api-demo.airwallex.com/api/v1/accounts/${id}/authorize`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      code_challenge: challenge,
      scope: ["w:awx_action:onboarding"],
    },
  });
  const auth_code = authorize_account.data.authorization_code;

  res.send(auth_code);
});

app.listen(4242, () => {
  console.log(`Example app listening on Post 4242!!`);
});
