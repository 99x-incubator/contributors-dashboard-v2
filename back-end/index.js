const express = require("express");
const Octokit = require("@octokit/rest");
const app = express();
const fs = require('fs');
require('dotenv').config();

const port = process.env.PORT;
const octokit = new Octokit({ auth: process.env.SECRET });

var dataSet={};

app.get('/', async (req, res) => {

  const repoData = await octokit.repos.listForOrg({
    org: "99xt-incubator",
    type: "public"
  });

  repoData.data.forEach(async repo => {
    const repoName = repo.name;

    const result = await octokit.repos.getContributorsStats({
      owner: "99xt-incubator",
      repo: repoName
    });

    let fetchedContributors = [repoName];

    result.data.map(contributor => {
      if (fetchedContributors.length != 0) {
        fetchedContributors.map(ftCon => {
          if (ftCon != contributor.author.login) {
            fetchedContributors.push(contributor.author.login);
          }
        });
      }
    });

    
    dataSet[repoName]=fetchedContributors;
  });
  res.send("<h1>" + dataSet + "</h1>");

});

app.listen(port, () => {
  console.log("Server started on port " + process.env.PORT);
  cacheServerRes();
});

setInterval(cacheServerRes
  , 1800000);

function cacheServerRes() {
  dataSet = octokit.repos.listForOrg({
    org: "99xt-incubator",
    type: 'public'
  }).then(({ data }) => {
    return data;
  })
}

