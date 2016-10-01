console.log('hello');


// my Twitch client ID : mlrx1e94dg7yus5yqm26lwpyxrg9j9x


function callSuccessChecker() {

    for (i = 0; i < 10; i++) {// <--------not working YET

        var allContainers = document.getElementsByClassName('resultContainer');
        var closedText = document.createTextNode('closed');

        if(allContainers[i].style.backgroundColor == '#F5D16B') {

            allContainers[0].children[0].children[0].children[1].appendChild(closedText);
        }
    }
}




 function twitchInfo() {



     // request NOT succesful
     if(this.readyState == 4 && this.status !== 200) {

         console.log('This is working');

         callSuccessChecker();
     }


     //request SUCCESSFUL
     if(this.readyState == 4 && this.status == 200) {

         //variables
         var response = JSON.parse(this.response);
         var myRe = /channels\/(.*)/;
         var string = JSON.parse(this.response)._links.channel;
         var match = myRe.exec(string);

         //dependent variable
         var streamerName = match[1];

         // just for reference - - - - - - - - - - - -
         console.log(JSON.parse(this.response));

         console.log(streamerName);
         // - - - - - - - - - - - - - - - - - - - - - -

         // if streamer is OFFLINE
        if(response.stream == null) {

            //variables
            var offlineText = document.createTextNode('offline');

            document.getElementById(streamerName).parentNode.style.backgroundColor = "#F55D5D";

            document.getElementById(streamerName).childNodes[0].childNodes[3].appendChild(offlineText);

        }

        // if streamer is ONLINE
        else if(response.stream !== null) {

            //variables
            var streamDetailsProperty = 'status'; //status is a keyword...
            var streamDetails = document.createTextNode(response.stream.channel[streamDetailsProperty]);

            document.getElementById(streamerName).parentNode.style.backgroundColor = "#3FDD90";

            document.getElementById(streamerName).childNodes[0].childNodes[3].appendChild(streamDetails);
        }
     }
 }



 //test API request: 404 response
 var xhr = new XMLHttpRequest();
 xhr.open('GET', 'https://api.twitch.tv/kraken/streams/comster404/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
 xhr.onreadystatechange = twitchInfo;
 xhr.send();

//test API request: charionna
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/charionna/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();


//test API request: castro_1021
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/castro_1021/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();

//test API request: kinggothalion
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/kinggothalion/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();

//test API request: lpmassive
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/lpmassive/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();

//test API request: drlupo
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/drlupo/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();

//test API request: exu_kefir
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/exu_kefir/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();

//test API request: luminosity
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/luminosity/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();

//test API request: montanablack88
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/montanablack88/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();

//test API request: realkraftyy
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/realkraftyy/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();

//test API request: diehahn
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/diehahn/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();



// callSuccessChecker();
