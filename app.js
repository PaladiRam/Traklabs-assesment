const mongoose = require('mongoose');

moongoose.connect('mongodb://localhost/playgorund')
.then(()) => console.log('connected to MongoDB')
.catch(err => console.error('could not connect'),err);

//Schema definition
const record = new moongoose.Schema({
    id:Number,
    name:String,
    email:String,
});
async function setRecord(){
    const R2 = new R1({
        id:1
        name:'Ramith',
        email:pnsyramith@yahoo.in;
    });
    const result = await R1.save();

}
const R1= mongoose.model('Record',record);
setRecord();
