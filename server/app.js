const express = require('express');
const http = require("http");
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const socketConfiguration = require("./socket");
const socketIo = require("socket.io");

const app = express()
const server = http.createServer(app);

app.use(cors(
    {
        origin:['http://localhost:3000', 'http://127.0.0.1:3000'],
        credentials:true
    }
));
app.options('*', cors())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(express.json({ extended: true }))
app.use(cookieParser());

const io = socketIo(server);
server.io = io;
socketConfiguration(io);

app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/profile', require('./routes/profileRoutes'))
app.use('/api/post', require('./routes/postRoutes'))
app.use('/api/friends', require('./routes/friendsRoutes'))
app.use('/api/messages', require('./routes/messagesRoutes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.resolve('../', 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../', 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
