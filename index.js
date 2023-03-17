const { MemClient } = require("@mem-labs/mem-node");

const memClient = new MemClient({
  apiAccessToken: "<Replace this with your access token>"
});

const runApp = async () => {
  console.log("Creating a new mem...");

  const result = await memClient.createMem({
    content: "Hello World",
  });

  console.log("Success!");
  console.log(`Created Mem Id: ${result.id}`);
}

runApp();