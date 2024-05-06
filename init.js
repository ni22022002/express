const mongoose = require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js")

main().then(()=>{
    console.log("connection is successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats=[
    {
    from:"neha",
    to:"priya",
    msg:"send me exam sheets",
    created_at:new Date(),
    },
    {
    from:"rohit",
    to:"mohit",
    msg:"how are you?",
    created_at:new Date(),
    },
    {
    from:"sonu",
    to:"golu",
    msg:"lets play cricket today",
    created_at:new Date(),
    },
    {
    from:"akela",
    to:"mela",
    msg:"send me exam paper",
    created_at:new Date(),
    },
    
];

Chat.insertMany(chats);

Chat.save();
