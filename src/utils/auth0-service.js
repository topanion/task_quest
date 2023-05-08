const { ManagementClient } = require("@auth0/nextjs-auth0");

const management = new ManagementClient({
  domain: process.env.AUTH0_BASE_URL,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "read:users update:users",
});

module.exports = management;
