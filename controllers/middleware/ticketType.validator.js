import Joi from 'joi';

const ticketTypeSchema = Joi.object({
    price: Joi.number().required(),
    name: Joi.string().min(2).max(20).required(),
    event: Joi.string().required()
});

const ticketTypeUpdateSchema = Joi.object({
    price: Joi.number(),
    name: Joi.string().min(2).max(20),
    event: Joi.string()
});

export const validateTicketTypeData = function (req, res, next) {
    let{error, value} = ticketTypeSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error
        })
    }req.body = value;
    next();
};

export const validateTicketTypeUpdateData = function (req, res, next) {
    let{error, value} = ticketTypeUpdateSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error
        })
    }req.body = value;
    next();
};