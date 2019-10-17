const express = require("express");
const Octokit = require("@octokit/rest");
const app = express();
const fs = require('fs');
require('dotenv').config();

const port = process.env.PORT;
const octokit = new Octokit({ auth: process.env.SECRET });

var dataSet = {};

app.get('/', async (req, res) => {

  const repoData = await octokit.repos.listForOrg({
    org: "99xt-incubator",
    type: "public"
  });

  let fetchedContributors = [];


  const x = await Promise.all(repoData.data.map(async repo => {
    const repoName = repo.name;

    const result = await octokit.repos.getContributorsStats({
      owner: "99xt-incubator",
      repo: repoName
    });


    result.data.map(contributor => {
      // if (fetchedContributors.length != 0) {
      //   fetchedContributors.map(ftCon => {
      //     if (ftCon != contributor.author.login) {
      fetchedContributors.push(contributor);
    });
    //    });
    // }
    // });

    dataSet[repoName] = fetchedContributors;

  })).then(() => {
    res.json(dataSet);
  }).catch(err => {
    console.log(err);
  });


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

