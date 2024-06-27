const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://Trin:Trin%40199602@cluster007.wfuzdqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster007";
//cloud string: mongodb+srv://Trin:Trin@199602@cluster007.wfuzdqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster007

const client = new MongoClient(uri,  {
  family:4,
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
  }
}
);
async function connectMongo()
{
  await client.connect()
  console.log("Mongo Connected")
  await client.db("Node").command({ping:1})
  console.log("Deployment pinged. Connection tested. Approved")
}

connectMongo();
module.exports=client;

