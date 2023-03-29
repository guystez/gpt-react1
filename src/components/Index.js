import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';
import React, { Component } from 'react'
import pass_c_name from './components/Home'

// import { string1 } from "test.py"
// import { response } from 
// const { Configuration, OpenAIApi } = require("openai");
// const { exec } = require('child_process');

// exec('python test.py', (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   // Extract the string value from the output
//   const string = stdout.trim();

//   console.log(string);  // Output: "Hello, guy sterzer!"
// });





  //     let input1= axios.get(`http://127.0.0.1:5555/myapp/chatresponse/`)
  //     .then((response)=> console.log(response.data))
  

  // console.log(response);

const cname =pass_c_name()
const configuration = new Configuration({
  apiKey: "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",
});
let input = "write a sells email from this information:"
let q = cname[response.data['text']]
let a = input+q
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  
  model: "text-davinci-003",
  prompt: a,
  max_tokens: 700,
  temperature: 0.9,
});
console.log(response.data)