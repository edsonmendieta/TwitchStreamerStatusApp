console.log('hello!');


// my Twitch client ID : mlrx1e94dg7yus5yqm26lwpyxrg9j9x

 var xhr = new XMLHttpRequest();
 xhr.open('GET', 'https://api.twitch.tv/kraken/streams/kinggothalion/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
 xhr.onreadystatechange = twitchInfo;
 xhr.send();

 function twitchInfo() {

     if(this.readyState == 4 && this.status == 200) {

         console.log(JSON.parse(this.response));
     }
 }
