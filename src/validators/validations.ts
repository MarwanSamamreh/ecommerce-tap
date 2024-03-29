import Joi from "joi";

export const productValidator = Joi.object({
  name: Joi.string().min(4).max(40).required(),
  price: Joi.number().min(0).required(),
  category: Joi.string()
    .valid("Skincare", "Handbags", "Jewellery", "Watches", "Eyewear")
    .required(),
  categoryId: Joi.number().integer().min(0).required(),
  description: Joi.string().min(5).max(256).required(),
  finalPrice: Joi.number().max(Joi.ref("price")).default(Joi.ref("price")),
  offer: Joi.number()
    .max(100)
    .min(0)
    .default(0)
    .when("finalPrice", {
      is: Joi.not(Joi.ref("price")),
      then: Joi.invalid(0).required(),
      otherwise: Joi.forbidden(),
    }),
  alt: Joi.string().max(56).required(),
  quantity: Joi.number().min(0).default(1),
});

export const productValidatorForUpdate = Joi.object({
  name: Joi.string().min(4).max(40),
  price: Joi.number().min(0),
  category: Joi.string().valid(
    "Skincare",
    "Handbags",
    "Jewellery",
    "Watches",
    "Eyewear"
  ),
  categoryId: Joi.number().integer().positive(),
  description: Joi.string().min(5).max(256),
  finalPrice: Joi.number().max(Joi.ref("price")).default(Joi.ref("price")),
  offer: Joi.number()
    .max(100)
    .min(0)
    .default(0)
    .when("finalPrice", {
      is: Joi.not(Joi.ref("price")),
      then: Joi.invalid(0),
      otherwise: Joi.forbidden(),
    }),
  alt: Joi.string().max(56),
  quantity: Joi.number().min(0).default(1),
  imageUrl: Joi.string().uri(),
});

export const cartItemSchema = Joi.object({
  userId: Joi.number().integer().min(0),
  productId: Joi.number().integer().min(0),
});

export const addToCartSchema = Joi.object({
  productId: Joi.number().integer().min(0),
  userId: Joi.number().integer().min(0),
  quantity: Joi.number().integer().min(0),
});

export const addresssSchema = Joi.object({
  street: Joi.string().max(128).required(),
  city: Joi.string().max(64).required(),
  state: Joi.string().max(64).required(),
  postal_code: Joi.string().max(20).required(),
  country: Joi.string().max(64).required(),
  userId: Joi.number().integer().min(0).required(),
  countryCallingCode: Joi.string().max(10).required(),
  mobileNumber: Joi.string().max(32),
  FullName: Joi.string().max(64).required(),
});

export const updateAddressSchema = Joi.object({
  newStreet: Joi.string().max(128),
  newCity: Joi.string().max(64),
  newState: Joi.string().max(64),
  newPostal_code: Joi.string().max(20),
  newCountry: Joi.string().max(64),
  newCountryCallingCode: Joi.string().max(10),
  newMobileNumber: Joi.string().max(32),
  newFullName: Joi.string().max(64),
});
export const cartsSchema = Joi.object({
  product_name: Joi.string().max(40).required(),
  product_id: Joi.string().max(40).required(),
  product_price: Joi.number().precision(6).min(0).required(),
  user_id: Joi.number().integer().required(),
  quantity: Joi.number().integer().required(),
});

export const ordersSchema = Joi.object({
  user_id: Joi.number().integer().required(),
  total: Joi.number().precision(2).required(),
  status: Joi.string().valid("pending", "completed", "cancelled").required(),
  adress_id: Joi.number().integer().required(),
});

export const reviewsSchema = Joi.object({
  userId: Joi.number().integer().required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  comment: Joi.string().min(1).required(),
});

export const updateReviewSchema = Joi.object({
  newComment: Joi.string().min(1),
  newRating: Joi.number().integer().min(1).max(5),
});

export const usersSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(50).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).max(100).required(),
});

export const wishListSchema = Joi.object({
  productId: Joi.number().integer().positive().required(),
  userId: Joi.number().integer().positive().required(),
});

export const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const changepassSchema = Joi.object({
  currentPassword: Joi.string().min(6).required(),
  newPassword: Joi.string().min(6).required(),
});

export const brandSchema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  image_secure_url: Joi.string().allow(null).max(128),
  id: Joi.number().integer().required(),
});
export const orderProductsSchema = Joi.object({
  order_id: Joi.number().integer().required(),
  product_id: Joi.number().integer().required(),
  id: Joi.number().integer().required(),
});

export const uriImageLinkSchema = Joi.string().uri().required();
