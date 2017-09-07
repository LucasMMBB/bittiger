const fs = require('fs');
// request: npm install fs-readfile-promise
const readFile = require('fs-readfile-promise');

readFile('./log.txt')
    .then(data => {
        data = data.toString();
        res(data);
    })
    .catch(err => {console.log(err)});


let res = (data) => {  
    errIndex = data.indexOf("ERROR");
    OKstr = data.substring(0, errIndex);
    ERRORstr = data.substring(errIndex, data.length);
    console.log(OKstr);
    console.log(ERRORstr);

    // parse ok data
    let indices = []
    for(let i = 0; i < OKstr.length; i++){
        if (OKstr[i] === " ") indices.push(i);
    }// for ends
    let map = {};
    mapLen = 0;
    for(let i = 0; i < indices.length; i++){
        if(i+1 == indices.length) break;
        key = OKstr.substring(indices[i] + 1, indices[i+1]);
        i++;
        value = OKstr.substring(indices[i] + 1, indices[i+1]);
        //console.log(key +" "+ value);
        map[key] = parseInt(value);
        mapLen++;
    }

    // parse error data
    let errInd = []
    for(let j = 0; j < ERRORstr.length; j++){
        if(ERRORstr[j] === " ") errInd.push(j);
    }
    let errmap = {};
    errmapLen = 0;
    for(let j = 0; j < errInd.length; j++){
        if(j+1 == errInd.length) break;
        key = ERRORstr.substring(errInd[j] + 1, errInd[j+1]);
        j++;
        value = ERRORstr.substring(errInd[j] + 1, errInd[j+1]);
        //console.log(key +" "+ value);
        errmap[key] = parseInt(value);
        errmapLen++;
    }
    console.log("======= resultes =======");
    console.log( "Success : failture = "+ mapLen.toString() + " : " + (mapLen - errmapLen).toString());
    console.log("consuming time distribution");
    console.log(map);
    let failmap = {};
    for(let key in map){
        if(!errmap.hasOwnProperty(key)){
            failmap[key] = map[key]
        }
    }
    console.log("error distribution")
    console.log(failmap);
}
/*
fs.readFile('log.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    //console.log(data);
    //console.log(typeof(data));
    errIndex = data.indexOf("ERROR");
    OKstr = data.substring(0, errIndex);
    ERRORstr = data.substring(errIndex, data.length);
    console.log(OKstr);
    console.log(ERRORstr);

    // parse ok data
    let indices = []
    for(let i = 0; i < OKstr.length; i++){
        if (OKstr[i] === " ") indices.push(i);
    }// for ends
    let map = {};
    mapLen = 0;
    for(let i = 0; i < indices.length; i++){
        if(i+1 == indices.length) break;
        key = OKstr.substring(indices[i] + 1, indices[i+1]);
        i++;
        value = OKstr.substring(indices[i] + 1, indices[i+1]);
        //console.log(key +" "+ value);
        map[key] = parseInt(value);
        mapLen++;
    }

    // parse error data
    let errInd = []
    for(let j = 0; j < ERRORstr.length; j++){
        if(ERRORstr[j] === " ") errInd.push(j);
    }
    let errmap = {};
    errmapLen = 0;
    for(let j = 0; j < errInd.length; j++){
        if(j+1 == errInd.length) break;
        key = ERRORstr.substring(errInd[j] + 1, errInd[j+1]);
        j++;
        value = ERRORstr.substring(errInd[j] + 1, errInd[j+1]);
        //console.log(key +" "+ value);
        errmap[key] = parseInt(value);
        errmapLen++;
    }
    console.log("======= resultes =======");
    console.log( "Success : failture = "+ mapLen.toString() + " : " + (mapLen - errmapLen).toString());
    console.log("consuming time distribution");
    console.log(map);
    let failmap = {};
    for(let key in map){
        if(!errmap.hasOwnProperty(key)){
            failmap[key] = map[key]
        }
    }
    console.log("error distribution")
    console.log(failmap);
});



*/