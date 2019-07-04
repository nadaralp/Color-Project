const path = require('path');
const express = require('exress');
const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization, x-auth-token');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
    next();
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/public'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})