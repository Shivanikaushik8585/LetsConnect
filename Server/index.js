const express = require('express')
const app = express()

const cors = require('cors');
const port = 3000
const dbConnect = require('./dbConnect');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/authRouter')
const postRouter = require('./routers/postRouter')
const userRouter = require('./routers/userRouter')
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(cors({

  credentials: true,
  origin: 'http://localhost:5173'
  // origin: 'http://localhost:5173/'
}
));
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(morgan('common'))
app.use('/auth', authRouter);
app.use('/posts', postRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send('ok from server')
})
dbConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})