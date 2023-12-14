new Promise( (resolve, reject) => {

    setTimeout( () => resolve({ status : 'okay' }), 2000 )

}).then( ob => console.log(ob) )
