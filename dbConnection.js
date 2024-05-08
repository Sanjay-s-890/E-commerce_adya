const mongoose = require('mongoose');
const Redis = require('ioredis');

// mongoDb connection
mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=>{
    console.log('mongoDb Database connected');
})
.catch((err)=>{
    console.log(err);
})

// redis connection
const redis = new Redis({
  host: 'localhost',
  port: 6379
});
redis.on('connect', ()=>{
    console.log('redis connected');
})
redis.on('error', (err)=>{
    console.log(err);
})

module.exports = redis;