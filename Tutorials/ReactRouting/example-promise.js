function getTempCallBack(location, callback)
{
    callback(undefined, 70);
    callback('City not found');
}

getTempCallBack('Philadelphia', function(err, temp){
    if(err){
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});


function getTemPromise(location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}


// function getTemPromise(location){
//     return new Promise(function(resolve, reject){
//         resolve(79);
//         reject('City not found');
//     });
// }

getTemPromise('Philadelphia').then(function(temp){
    console.log('promise success', temp);
}, function(err){
    console.log('promise error', err);
})