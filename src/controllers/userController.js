
import BaseController from './baseController.js';
import UserService from '../services/userService.js';
import ResponseHandler from '../helpers/responseHandler.js';
import { createUserSchema, updateUserSchema } from '../requests/userRequest.js';

export default class UserController extends BaseController {

    static async getAllUsers(req, res, next) {
        await UserController.handleAsyncRequest(UserService.getAllUsers, req, res, next);
    }
    
    static async getById(req, res, next) {
        await UserController.handleAsyncRequest(UserService.getById, req, res, next);
    }

    static async create(req, res, next) {
        const { error, value } = createUserSchema.validate(req.body);

        if (error) {
            res.status(400).send(ResponseHandler.formatResponse(400, "Bad Request", error.details[0].message))
        }

        await UserController.handleAsyncRequest(UserService.create, req, res, next);
    }

    static async update(req, res, next) {
        const { error, value } = createUserSchema.validate(req.body);

        if (error) {
            res.status(400).send(ResponseHandler.formatResponse(400, "Bad Request", error.details[0].message))
        }
        
        await UserController.handleAsyncRequest(UserService.update, req, res, next);
    }

    static async delete(req, res, next) {
        await UserController.handleAsyncRequest(UserService.delete, req, res, next);
    }

    static async restore(req, res, next) {
        await UserController.handleAsyncRequest(UserService.restore, req, res, next);
    }
}