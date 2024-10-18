const notFound = (req, res) => {
    res.status(404);

    const formattedResponse = {
        code: 404,
        message: 'Not Found',
        error: 'Not Found'
    };

    return res.send(formattedResponse, 404);

}

export default notFound;