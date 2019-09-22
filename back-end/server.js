const express = require('express');
const Octokit = require("@octokit/rest");
const fs = require('fs');

const port = 3000;
const app = express();
const octokit = new Octokit();
const outputFilename = 'my.json'; //store cache data. Can be removed later


app.get('/',(req,res)=>{
    res.send("Welcome Home");
});

app.listen(port,()=>{
    console.log("Server started on port 3000");
});

var dataSet = octokit.repos.listForOrg({
    org: "99xt-incubator",
    type: 'public'
})
.then(({data})=>{
    console.log("Ran");
    
    fs.writeFile(outputFilename, JSON.stringify(data, null, 4), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + outputFilename);
        }
    }); 
    return data;
});

