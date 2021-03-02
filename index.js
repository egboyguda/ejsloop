const express = require('express')
const app = express();
const path = require('path');
const json = require('./json/data.json')
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/r/:subreddit',async(req,res)=>{
    const {subreddit} = await req.params;
    if(json[`${subreddit}`]!=null){
        const reddit = await json[`${subreddit}`]
        //console.log(reddit['name'])
        //reddit post
        const post = reddit['posts']
        res.render('subreddit',{subreddit,reddit,post})
    }else{
        res.render('page404')
    }
    
    
})


























app.listen(3000,()=>{
    console.log("app is running")
})
