const cars=require('./cars.json');
let next_ind=3;
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    //const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    
    if (req.body.key==="get"){
        context.res.json( {
            // status: 200, /* Defaults to 200 */
            body: "responseMessage",
            text:cars
        });
    }
    else if(req.body.key==="post"){
        cars.push(req.body.one);
        context.res.json( {
            // status: 200, /* Defaults to 200 */
            body: "all good",
        });
    }
    else if(req.boy.key==="adjust"){

    }
}
