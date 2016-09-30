console.log('hello!');


// my Twitch client ID : mlrx1e94dg7yus5yqm26lwpyxrg9j9x

 // var xhr = new XMLHttpRequest();
 // xhr.open('GET', 'https://api.twitch.tv/kraken/streams/?channel=charionna,castro_102,kinggothalion,lpmassive,drlupo,exu_kefir,luminosity,montanablack88,realkraftyy,diehahn&client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
 // xhr.onreadystatechange = twitchInfo;
 // xhr.send();

 function twitchInfo() {

     var response = JSON.parse(this.response);

     if(this.readyState == 4 && this.status == 200) {

         //console.log(JSON.parse(this.response));


     }
 }



//test API request: charionna
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/charionna/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
xhr.onreadystatechange = twitchInfo;
xhr.send();


//test API request: castro_102
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/streams/castro_102/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
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
