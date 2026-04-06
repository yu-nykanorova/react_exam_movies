import * as Joi from "joi";

export const searchValidator = Joi.object({
    search:
        Joi.string()
           .trim()
           .pattern(/^[A-Za-zА-Яа-яёЁіІїЇєЄҐґ0-9\s]+$/)
           .max(20)
           .required()
           .messages({
               "string.empty": "Search query is empty",
               "string.pattern.base": "Only letters and numbers",
               "string.max": "20 characters maximum",
           })
});