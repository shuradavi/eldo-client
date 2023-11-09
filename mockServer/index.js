const express = require('express')
const cors = require('cors')
const path = require('path')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');

// simple command to curl POST with multipart/form-data header
//curl --form file='@filename here' http://localhost:4003/files/save

const MAX_ATTEMPTS = 3
let files = []
let requestCounter = 0

const app = express();
const PORT = 4003;

app.use(express.json())
app.use(cors());

const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
}

const upload = multer({ dest: 'files/' })

app.get('/files/list', async (req, res) => {
  await sleep(1500)
  res.send(files).status(200)
})

app.post('/files/save', upload.single('file'), (req, res) => {
    const fileID = uuidv4()
    const savedFile = {
      id: fileID,
      filename: req.file.filename,
      size: req.file.size,
    }
    files.push(savedFile)
    res.append('file-data', fileID)
    res.status(200).send('OK')
})

app.get('/files/delete/:id', async (req, res) => {
  const id = req.params.id;
  await sleep(800)
  files = files.filter((f) => f.id !== id)
  res.sendStatus(200)
})

console.log(files, 'files')

app.get('/files/download/:id', async (req, res) => {
  const id =  req.params.id;
  const findedFile = files.find((f) => f.id === id)
  await sleep(1000)

  console.log(requestCounter, 'counter')
  if (!findedFile) {
    return res.status(404).send({error: 'File not found'})
  }
  if (requestCounter >= MAX_ATTEMPTS) {
    requestCounter = 0
    res.sendFile(findedFile.filename, { root: path.join(__dirname, 'files') })
  } else {
    requestCounter++
    res.status(204).send(`Not ready, attempts left ${MAX_ATTEMPTS - requestCounter}`)
  }
})


app.listen(PORT, () => {
  console.log(`Mock server listening on port ${PORT}`)
})
