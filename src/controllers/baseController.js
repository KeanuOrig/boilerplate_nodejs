export default class BaseController {
    static async handleAsyncRequest(asyncFunction, req, res, next) {
        try {
            const data = await asyncFunction(req);

            const formattedResponse = {
                code: 200,
                message: 'Success',
                result: data,
            };
    
            res.status(200).send(formattedResponse)

        } catch (error) {
            next(error);
        }
    }
}