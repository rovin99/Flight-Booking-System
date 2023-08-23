const express= require('express');
const {ServerConfig,Logger}=require('./config');
const apiRoutes= require('./routes');
const app = express();

app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,()=>{
    console.log(`listening on port: ${ServerConfig.PORT}`);
    Logger.info('successfully started',"root",{msg:"something started"});
})