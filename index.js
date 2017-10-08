#!/usr/bin/env node

const path = require('path');
const os = require('os');
const repl = require('repl');

const request = require('request');

const r = repl.start({

  useColors: true,
  ignoreUndefined: true,
  prompt: '// ' + os.userInfo().username +'@'+ os.hostname() + ': ',

  });

let position = [];
let data = {};

r.context.cat = function(name){

  if(data[position.join('/')]) {

      let url =
      data[position.join('/')]
      .filter(i=>i.name===name)
      .map(i=>i.url)
      .pop();

      request(url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', (body)); // Print the HTML for the Google homepage.
      });


  }



}

r.context.mk = function(url){
  const name = path.basename(url);
  if( ! data[ position.join('/') ]) data[ position.join('/') ] = [];
  data[ position.join('/') ].push({name,url});
}

r.context.ls = function(){
  if(data[position.join('/')]) console.log( data[position.join('/')].map(i=>i.name).join('\n') )
}

r.context.pwd = function(){
  console.log('/%s', position.join('/'))
}

r.context.cd = function(location){
  if(location.match(/^\//)){
    position = location
    .split('/')
    .filter(i=>i.trim());
  }else if(location.match(/^\.\.$/)){
    position.pop();
  }else if(location.match(/^\.$/)){
    //NOOP
  }else{
    location
    .split('/')
    .filter(i=>i.trim())
    .forEach(i=>{
      if(i === '..'){
        if(position.length) position.pop();
      } else if(i === '.'){
        // noop
      } else {
        position.push(i)
      }
    })
  }
}
