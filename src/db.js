const redis = require("redis");
//require("global-agent/bootstrap")

 // DB Connection. In this case is Redis Client 
 const redisHost = process.env.REDIS_SERVICE 
 const redisPort = process.env.REDIS_PORT 
 const redisAccessKey = process.env.REDIS_ACCESS_KEY 

 const dbConnection = redis.createClient(redisPort, redisHost,{auth_pass: redisAccessKey});
 
 dbConnection.on("connect", function () {
     redisReachable = true;
     console.log("DBService: Redis is reachable" )
 });

 dbConnection.on("error", function (err) {
     console.log(err)
     redisReachable = false;
     console.log("DBService: Redis is not reachable")
 });

 module.exports = dbConnection