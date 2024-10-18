import Joi from 'joi';

// Schema for validating task update request
const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid('admin', 'user', 'guest'),
  // Add more validation rules as needed
});

const updateUserSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string().email(),
  role: Joi.string().valid('admin', 'user', 'guest'),
  // Add more validation rules as needed
});

export { 
  createUserSchema, 
  updateUserSchema 
}; 
