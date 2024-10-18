const errorHandler = (err, req, res, next) => {

    const statusCode = err.status || 500;
    const formattedResponse = {
        code: statusCode,
        message: err.message || 'Internal Server Error',
        error: err.stack
    };
    return res.status(statusCode).json(formattedResponse);
}

export default errorHandler;