

    const albumQuery = `query PinkFloyd {
        lookup {
          artist(mbid: "83d91898-7763-47d7-b03b-b92132375c47") {
            name
            lifeSpan {
              begin
              end
            }
            releaseGroups(first: 13, type: ALBUM) {
              edges {
                node {
                  id
                  title
                  firstReleaseDate
                  coverArtArchive {
                    front
                  }
                }
              }
            }
            fanArt {
              thumbnails {
                url
              }
            }
            theAudioDB {
              biography
            }
          }
        }
      }
      `;



export default {albumQuery};