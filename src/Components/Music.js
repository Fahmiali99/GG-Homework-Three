import React from "react";
import axios from "axios";

function Music() {
  document.getElementById("callApi").onclick = function () {
    axios
      .get(
        `https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json`
      )
      .then(function (response) {
        if (response.status === 200) {
          console.log("Data Sukeses !!!", response.data);
        }
      })

      .catch((error) => {
        if (error.respons) {
          alert("Eror Data", error.data);
        }
      });
  };

  const musicMe = process.env.MUSIC_KEY_API;
  console.log(musicMe);

  return (
    <div classNameName="musicPage">
      <div id="app">
        <div id="wrapper">
          <div className="playlist">
            <header id="header">
              <div className="titleLogo">
                <h1>Create Playlist</h1>
              </div>
            </header>
            <main className="main">
              <form id="playlistForm">
                <label for="title">Title</label>
                <br />
                <input
                  id="titleForm"
                  type="text"
                  name="title"
                  placeholder="title"
                />
                <br />
                <label for="artis">Artis</label>
                <br />
                <input
                  id="artisForm"
                  type="text"
                  name="artis"
                  placeholder="artis"
                />
                <br />
                <label for="album">Album</label>
                <br />
                <input
                  id="albumForm"
                  type="text"
                  name="album"
                  placeholder="album"
                />
                <br />
                <label for="desc">Description</label> <br />
                <textarea
                  id="descForm"
                  type="text"
                  name="desc"
                  placeholder="desc"
                ></textarea>
                <br />
                <button type="submit" name="submit" value="submit">
                  Create Playlias
                </button>
              </form>
              <div>
                <ul id="playlist-ul"></ul>
              </div>
            </main>
          </div>
        </div>

        <div id="wrapper-two">
          <div className="playlist-two">
            <div className="callingapi">
              <button
                className="callapi"
                onclick="callApi()"
                id="callApi"
                type="callApi"
                name="calApi"
                value="callApi"
              >
                Get Api
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
