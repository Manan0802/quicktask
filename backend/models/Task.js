import mongoose from "mongoose";//mongose ko import kardia abb moongoose mai apne maai do ccheeze hai kya ek schemea ek model shema se define kara kaya kaise hogaa aur model se schemea ko modelize kardia fir usi model ko export kardia 


const taskSchema=new mongoose.Schema({
    text:{
        type: String,
        require:true,
    },
    isCompleted : {
        type: Boolean,
        default: false,
    },
},
{timestamps:true}
)

const Task=mongoose.model('Task',taskSchema);

export default Task;