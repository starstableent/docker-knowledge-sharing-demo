const express = require('express')
const app = express()
const axios = require("axios")

const port = process.env.PORT || 3000
const message = process.env.MESSAGE || "(No message specified)"
const otherApp = process.env.OTHER_APP

app.get('/', async (req, res) => {
  let response = `<div>Message: ${message}</div>`
  if(otherApp)
  {
    try
    {
      const otherResponse = await axios({
        methtod: "get",
        url: `http://${otherApp}/message`
      })
      const otherMessage = otherResponse.data
      response = `${response}<br><div>Message from other app: ${otherMessage}</div>`
    } catch (e)
    {
      console.log(e)
    }
  }
  res.send(response)
})

app.get('/message', async (req, res) => {
  res.send(message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})