import app from "../server.js"
app.listen(app.get('port'))


console.log('Server en puerto ', app.get('port')) 