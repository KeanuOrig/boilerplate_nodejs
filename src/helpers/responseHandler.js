const formatResponse = (code, message, data) => {
    const formattedResponse = {
        code: code,
        message: message,
        error: data,
    };
    return formattedResponse;
};


export default {
    formatResponse
};