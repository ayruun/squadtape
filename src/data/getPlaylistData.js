const axios = require("axios");
const fs = require("fs");
const open = require("open");

const express = require("express");
const app = express();
const port = 8080;

const fileName = "playlistData.json";
const userId = "ayruun";
const apiPageLimit = 50;

const clientId = "0c45b5ac0e5747e5b9f404c7b6f014fb";
const redirectUri = `http://localhost:${port}`;
const authUrl = `https://accounts.spotify.com/authorize\
?client_id=${clientId}\
&response_type=token\
&redirect_uri=${redirectUri}`;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>title</title>
  </head>
  <body>
    <script>
      window.location.href = window.location.href.replace("#", "token?")
    </script>
  </body>
  </html>`);
});

app.get("/token", async (req, res) => {
  const access_token = req.query.access_token;
  let playlists = [];

  for (let offset = 0; offset < 1001; offset += apiPageLimit) {
    const { data } = await axios
      .get(
        `https://api.spotify.com/v1/users/${userId}/playlists?offset=${offset}&limit=${apiPageLimit}`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      .catch(err => console.log(err.toJSON()));

    playlists.push(
      ...data.items.filter(el => {
        return el.name.indexOf("Squad Tape") > -1;
      })
    );

    if (!data.next) {
      break;
    }
  }

  fs.writeFile(fileName, JSON.stringify(playlists, null, "  "), "utf8", () => {
    let msg = `Done. Saved ${playlists.length} playlists to file ${fileName}.`;
    res.send(msg);
    console.log(msg);

    process.exit();
  });
});

app.listen(port, () => {
  open(authUrl);
  console.log(`Please open the auth link: \n${authUrl}\n`);
});
