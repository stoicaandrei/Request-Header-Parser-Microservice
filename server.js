const express = require('express');
const os = require('os');
const osLocale = require('os-locale');

const app = express();

app.get('/', (req, res) => {
  
  let ipaddress = os.networkInterfaces().eth0[0].address;
  let language = osLocale.sync();
  let software = os.platform();
  
  let obj = {
    ipaddress: ipaddress,
    language: language,
    software: software
  }
  
  res.send(obj);
});

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
});
