


    //test API request: 404 response
     var xhr = new XMLHttpRequest();
     xhr.open('GET', 'https://api.twitch.tv/kraken/streams/comster404/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
     xhr.onreadystatechange = comster404Info;
     xhr.send();

    //test API request: charionna
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/charionna/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = charionnaInfo;
    xhr.send();


    //test API request: castro_1021
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/castro_1021/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = castro_1021Info;
    xhr.send();

    //test API request: kinggothalion
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/kinggothalion/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = kinggothalionInfo;
    xhr.send();

    //test API request: lpmassive
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/lpmassive/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = lpmassiveInfo;
    xhr.send();

    //test API request: drlupo
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/drlupo/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = drlupoInfo;
    xhr.send();

    //test API request: exu_kefir
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/exu_kefir/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = exu_kefirInfo;
    xhr.send();

    //test API request: luminosity
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/luminosity/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = luminosityInfo;
    xhr.send();

    //test API request: montanablack88
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/montanablack88/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = montanablack88Info;
    xhr.send();

    //test API request: realkraftyy
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/realkraftyy/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = realkraftyyInfo;
    xhr.send();

    //test API request: diehahn
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/diehahn/?client_id=mlrx1e94dg7yus5yqm26lwpyxrg9j9x');
    xhr.onreadystatechange = diehahnInfo;
    xhr.send();


//--------------------------------------------------------------------
function comster404Info() {

    var closedText = document.createTextNode('account closed');


    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        document.getElementById('comster404').childNodes[0].childNodes[3].appendChild(closedText);
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

        // // just for reference - - - - - - - - - - - -
        // console.log(JSON.parse(this.response));
        //
        // console.log(streamerName);
        // // - - - - - - - - - - - - - - - - - - - - - -

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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function charionnaInfo() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function castro_1021Info() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function kinggothalionInfo() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function lpmassiveInfo() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function drlupoInfo() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function exu_kefirInfo() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function luminosityInfo() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function montanablack88Info() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function realkraftyyInfo() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------


//--------------------------------------------------------------------
function diehahnInfo() {



    // request NOT succesful
    if(this.readyState == 4 && this.status !== 200) {

        //  console.log('This is working');

        setTimeout(callSuccessChecker, 9000);
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

//----------------------------------------------------------------
