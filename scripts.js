console.log('hello!');


// my Twitch client ID : mlrx1e94dg7yus5yqm26lwpyxrg9j9x



 function twitchInfo() {

     //variables
     var response = JSON.parse(this.response);
     var myRe = /channels\/(.*)/;
     var string = JSON.parse(this.response)._links.channel;
     var match = myRe.exec(string);

     if(this.readyState == 4 && this.status == 200) {

         //variables
         var streamerName = match[1];

         // just for reference - - - - - - - - - - - -
         console.log(JSON.parse(this.response));

         console.log(streamerName);
         // - - - - - - - - - - - - - - - - - - - - - -

        if(response.stream == null) {

            //variables
            var offlineText = document.createTextNode('offline');

            document.getElementById(streamerName).parentNode.style.backgroundColor = "#F55D5D";
            // document.getElementById(streamerName).childNodes[1].appendChild(offlineText);

            console.log(document.getElementById(streamerName).childNodes[0].childNodes[3].appendChild(offlineText));

        }
     }
 }



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
