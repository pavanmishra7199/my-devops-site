exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello I am Pavan Mishra here is the serverless function!' }),
    };
};
