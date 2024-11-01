const {schemaValidation} = require('./util/schemaValidation');

module.exports.lambdaHandler = async (event, context) => {
  try{
    const body = event.body
    const value = await schemaValidation.validateAsync(body);
    console.log(value)
    const response = {
      statusCode: 200,
      body: JSON.stringify(value)
    };

    return response;
  }catch (err) {
    return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid request body", error: err.message || err }),
    };
}
}