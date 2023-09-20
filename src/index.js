const express= require('express');
const {ServerConfig,Logger}=require('./config');
const apiRoutes= require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,async()=>{
    console.log(`listening on port: ${ServerConfig.PORT}`);
    Logger.info('successfully started',"root",{msg:"something started"});
    const {City,airport}= require('./models');

    const response=await City.findByPk(1);

    //const newairport=await response.createAirport({name: 'Kempagowda Airport', code: 'BLR ',address: 'Bengaluru' });
    //const newairport=await response.getAirports();
    // console.log(response);
    // const hbairport=await airport.findByPk(2);

    // await response.removeAirports(hbairport);

    
    
    
});