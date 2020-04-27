const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

const {addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

app.use(cors());
app.use(router);

io.on('connection',(socket)=>{
  socket.on('join',({name, room},callback)=>{
    console.log('User joined')
    const{user,error} = addUser({id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});

    socket.broadcast.to(user.room).emit({user: 'admin', text: `${user.name} has joined!`})

    callback();
  })

  socket.on('sendMessage', (message,callback) =>{
    const user = getUser(socket.id);

    io.to(user.room).emit('message', {user: user.name, text: message});

    callback();
  });

  // socket.on('disconnect',()=>{
  //   const user = removeUser(socket.id);

  //   io.to(user.room).emit('message',{user: 'admin', message: `${user.name} has left`});
  // })
})

server.listen(process.env.PORT || 5000,()=>{
  console.log(`Server has started`);
});