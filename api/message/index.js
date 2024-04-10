const cars=require('./cars.json');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    //const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res.json( {
        // status: 200, /* Defaults to 200 */
        body: "responseMessage",
        text:cars
    });
}
module.exports.doSomething = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if (req.method=="POST"){
        cars.push(context.body);
        context.res.json( {
            // status: 200, /* Defaults to 200 */
            body: "responseMessage",
            text:cars
        });
    }
    else{
        context.res.json( {
            // status: 200, /* Defaults to 200 */
            // body: responseMessage
            text:"Goodbye from Something else"
        });
    }

    
}