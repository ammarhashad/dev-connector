const express = require('express');
const connectDB = require('./config/db')
const app = express();


const  PORT = process.env.PORT || 5000

connectDB();

app.get('/' , (req , res) => res.send('API is working '))


app.use(express.json({extended : false}))

app.use('/api/users' , require('./routes/api/users'))
app.use('/api/profile' , require('./routes/api/profile'))
app.use('/api/posts' , require('./routes/api/posts'))
app.use('/api/auth' , require('./routes/api/auth'))




app.listen(PORT , () => console.log(`server is running on port ${PORT}`))