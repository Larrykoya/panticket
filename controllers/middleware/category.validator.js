import Joi from "joi";

const categorySchema = Joi.object({
    name: Joi.string().min(2).max(50).required()
});

export const validateCategoryData = function (req, res, next) {
    let{error, value} = categorySchema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error,
        })
    }
    req.body = value;
    next();
};