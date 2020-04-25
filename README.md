# contributors-dashboard-v2

### Requirement

The idea is to create a dashboard which will display top contributors of given Github organizations list(In our case there are two `99xt` and `99xt-incubator`). Basically, we list down the organization names and under each organization name there should be a list of constributors sorted by number of contributions. Importantly, The most important section is the final leaderboard.

Eg:

```
Contributors dashboard

Leaderboard

githubuser2     52
githubuser1     34
githubuser3     33
......


99xt                  99xt-incubator

githubuser1     34    githubuser3      33
githubuser2     12    githubuser2      30
.....

```

###  Architecture 

Use [LAMG](https://github.com/codezri/lamgstack) as the solution stack.

### API structure

```
GET /organizations : Lists organizations
GET /organizations/{githubusername}/contributors : Lists contributors sorted by contributions for a given organization
GET /contributors : Lists final leaderboard information basically sorted list of all contributors
```

Use config.json to store names of organizations

```js
module.exports = {
  orgs: ['99xt', '99xt-contributors']
}
```

### Roadmap

- [ ] Study the existing codebase and compare with the main requirement above.
- [ ] Getting familiar with [LAMG](https://github.com/codezri/lamgstack)
- [ ] Presenting the UI prototype
- [ ] Presenting the Backend logic(Eg: Include how you handle Github API's rate limit using database services)
- [ ] Implementation and demos
- [ ] Deployment and integrating github Actions
- [ ] Publishing solution to `opensource.99xtechnology.com/leaderboard`

Good luck :rocket:
