import jsdom from 'jsdom';
import request from 'minimal-request-promise';
import { expect, sinon, PromiseHelper } from '../../../__testHelpers__';
import albumService from '../albumService';

const { JSDOM } = jsdom;
const sandbox = sinon.sandbox.create();
let requestStub;


const albumData =
    {
        "data": {
            "lookup": {
                "artist": {
                    "name": "Pink Floyd",
                    "lifeSpan": {
                        "begin": "1965",
                        "end": "2014"
                    },
                    "releaseGroups": {
                        "edges": [{
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOjBkZmJiMTQyLWVjMzEtNGEyNi05ZDczLThkNTcyZTg5NzBiZA==",
                                "title": "Green Is the Colour",
                                "firstReleaseDate": "1993-07",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/ee7104dd-ed89-4b4f-850a-97c265381eb8/18662681690.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOjFhMjcyMDIzLTEwZDMtMzhlZS1iYWIzLTMxN2I1NWZjYzIxZA==",
                                "title": "Wish You Were Here",
                                "firstReleaseDate": "1975-09-12",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/f4a8aa35-da90-33d8-9307-c630d38a2bed/1611519564.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOjIwYzc3ZmI0LTFjOWYtMzNjOC05ZDdlLWM0OTc3ZjExZTg0Nw==",
                                "title": "Animals",
                                "firstReleaseDate": "1977-01-23",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/b249399e-77a7-3bb5-ba51-7368506e6f02/8215817116.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOjQ5NDBiOGFhLTg5OGItM2U2MC05OTkyLTk0ZTA3M2JhYjZmNg==",
                                "title": "A Momentary Lapse of Reason",
                                "firstReleaseDate": "1987-09-07",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/b207d7d6-5922-3297-a077-9953cc9ee52d/2550521303.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOjRlOThjOWI0LTkyZjYtMzA0OS1iOWRhLWExMDg4YjYyMzY3Mg==",
                                "title": "Meddle",
                                "firstReleaseDate": "1971-10-30",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/09ed5877-bb22-4a26-8ec7-c95e5ee70fd3/14263254363.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOjY3OTJiNmQxLTRlNjUtM2MzYy05ZDIwLWQwOGFhMWRjZmM2MA==",
                                "title": "The Piper at the Gates of Dawn",
                                "firstReleaseDate": "1967-07-07",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/cf0d899c-bbc6-4a33-ba74-5e335284e836/14466470067.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOjhhOWNhYTQwLWI3YzYtMzNlYi1hMTNjLTZjMTVmMDliMWM0NA==",
                                "title": "A Saucerful of Secrets",
                                "firstReleaseDate": "1968-06-29",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/bc2be498-ff42-4a4f-b4df-53d6e3bee74a/1290107237.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOjkwODc4YjYzLWY2MzktM2M4Yi1hZWZiLTE5MGJkZjNkMTc5MA==",
                                "title": "The Division Bell",
                                "firstReleaseDate": "1994-03-28",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/2696cd76-9257-33bf-b3c0-a3cb3f4ce48a/15229284523.png"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOmI3YWE2MWFlLTM1NzItMzJjMC04YjkzLTZhZjc4ZWE4Mzc2MA==",
                                "title": "Ummagumma",
                                "firstReleaseDate": "1969-10-25",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/c1ad763c-431a-4134-94b6-8ac508154b7b/7328245998.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOmUyZjUwM2Q3LTU0ODgtM2ZlMS1iM2FjLWYyMzZkOWYxYjQ0Yw==",
                                "title": "Atom Heart Mother",
                                "firstReleaseDate": "1970-10-10",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/6571020d-6b25-4edd-9e82-44aba29827d0/1290111608.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOmU4YjdlN2EzLWVmNTYtMzRhNS1iZWRmLTA4NTc4M2M5YTA3Ng==",
                                "title": "The Final Cut",
                                "firstReleaseDate": "1983-03-21",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/2f9da099-d580-3360-a7d1-52a7d23f2d77/1612260329.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOmYyMDI2MTAxLTk0NWItM2QwNS05ZWY0LWFhNzE4ZmMzZmVlZg==",
                                "title": "The Wall",
                                "firstReleaseDate": "1979-11-30",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/93c4f215-15ae-34a2-981a-9a5fbd700004/14428284780.jpg"
                                }
                            }
                        },
                        {
                            "node": {
                                "id": "UmVsZWFzZUdyb3VwOmY1MDkzYzA2LTIzZTMtNDA0Zi1hZWFhLTQwZjcyODg1ZWUzYQ==",
                                "title": "The Dark Side of the Moon",
                                "firstReleaseDate": "1973-03-24",
                                "coverArtArchive": {
                                    "front": "http://coverartarchive.org/release/25fbfbb4-b1ee-4448-aadf-ae3bc2e2dd27/18974521469.jpg"
                                }
                            }
                        }]
                    },
                    "fanArt": {
                        "thumbnails": [{
                            "url": "https://assets.fanart.tv/fanart/music/83d91898-7763-47d7-b03b-b92132375c47/artistthumb/pink-floyd-4fad917437146.jpg"
                        },
                        {
                            "url": "https://assets.fanart.tv/fanart/music/83d91898-7763-47d7-b03b-b92132375c47/artistthumb/pink-floyd-4fb4eca9370e6.jpg"
                        },
                        {
                            "url": "https://assets.fanart.tv/fanart/music/83d91898-7763-47d7-b03b-b92132375c47/artistthumb/pink-floyd-4fad9106aa7bf.jpg"
                        }]
                    },
                    "theAudioDB": {
                        "biography": "Pink Floyd were an English rock band that achieved international success with their progressive and psychedelic rock music marked by the use of philosophical lyrics, sonic experimentation, and elaborate live shows. One of the most commercially successful and influential rock groups in the history of popular music, they have sold over 250 million records worldwide, including 74.5 million certified units in the United States. They were inducted into the US Rock and Roll Hall of Fame in 1996, and the UK Music Hall of Fame in 2005.\nThe band originally consisted of university students Roger Waters, Nick Mason, Richard Wright, and Syd Barrett. Founded in 1965, they gained popularity performing in London's underground music scene during the late 1960s. Under Barrett's creative leadership they released two charting singles, \"Arnold Layne\" and \"See Emily Play\", and a successful début album, The Piper at the Gates of Dawn (1967). Guitarist and vocalist David Gilmour joined as a fifth member in December 1967, several months prior to Barrett's April 1968 departure due to deteriorating mental health. With the loss of Syd, the band moved from psychedelic pop to a more progressive sound, with many tracks written collaboratively while on tour. With this line-up they achieved critical and commercial success with the concept albums The Dark Side of the Moon (1973), Wish You Were Here (1975), Animals (1977) and The Wall (1979). With Animals and The Wall, Waters became the primary songwriter.\nWright was forced by Waters to leave the group in 1979. Following The Final Cut (1983), the group was temporarily disbanded by Waters. Gilmour and Mason reformed in 1985, and were subsequently rejoined by Wright. They continued to record and tour through 1994, despite Waters' failed 1986 attempt to legally prevent them continuing as Pink Floyd; two more albums followed, A Momentary Lapse of Reason (1987) and The Division Bell (1994). After almost two decades of acrimony the band reunited in 2005 for a single performance, at the global awareness event Live 8. Wright died in 2008. Surviving members Gilmour and Mason joined Waters at one of his The Wall Tour shows on 12 May 2011 at the O2 Arena in London; Gilmour performed \"Comfortably Numb\" along with Waters and \"Outside the Wall\" with Mason and Waters."
                    }
                }
            }
        }
};

describe('Album Service', () => {
    before(() => {
      global.document = (new JSDOM('', { pretendToBeVisual: true }));
      global.window = document.window;
    });
  

    beforeEach(() => {
    
        if (requestStub) {
          requestStub.restore();
        }

        const stringifiedResponse = { body: JSON.stringify(albumData) };
        requestStub = sandbox.stub(request, 'post').returns(Promise.resolve(stringifiedResponse));
      });
    
      afterEach(() => {
      });

      
    function getAlbums() {
        return albumService.getAlbums();
    }

    it('getAlbums queries graphql', (done) => {
        const promiseToExecute = getAlbums();

        PromiseHelper.success(promiseToExecute, () => {
        expect(requestStub).calledOnce;
        }, done);
    });

    it('getAlbums queries graphql and gets artist name correctly', (done) => {
        const promiseToExecute = getAlbums();

        PromiseHelper.success(promiseToExecute, (album) => {
        expect(album).is.not.null;
        var albumObject = JSON.parse(album);
        var artist = albumObject.data.lookup.artist;
        expect(artist).is.not.null;
        expect(artist.name).eql('Pink Floyd');
        }, done);
    });
});