const mongoose = require('mongoose');
module.exports = async()=>{
const moongeUri = "mongodb+srv://shivani10kaushik5:shivani@cluster0.icgjawn.mongodb.net/?retryWrites=true&w=majority"

try{
    const connect = await mongoose.connect(moongeUri,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log(`MongoDB  connected : ${connect.connection.host}`);

}catch(error){
    console.log(error);
}
}