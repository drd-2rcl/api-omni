const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
  // const { github_username } = request.body;

  // const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

  // console.log(request.body)

  return response.json({ ok: true })
});

module.exports = routes;