export const API_ENDPOINT = {
  USER_WHOAMI: "/auth/whoami",
  USER_LOGIN: "/auth/login",
  USER_REGISTER: "/auth/register",
  USER_FORGOT_PASSWORD: "/auth/forgotPassword",
  USER_RESEND_OTP: "/auth/resend-otp",
  USER_UPDATE_PROFIL: "/profile",
  USER_CHANGE_PASSWORD: "/auth/change-password",
  USER_PROFIL: "/profile",
  USER_UPDATE_IMAGE_USER: "/profile/",

  GET_CATEGORIES: "/categories",

  USER_OTP: (otp, token) => {
    return `/auth/verifyOTP?otp=${otp}&token=${token}`;
  },

  GET_CATEGORIES_ID: (id) => {
    return `/categories/${id}`;
  },

  GET_COURSES_ME: "/courses/me",

  GET_COURSES: (page, limit) => {
    return `/courses?page=${page}&limit=${limit}`;
  },

  GET_SEARCH_COURSE: (searchQuery) => {
    return `/courses?search=${searchQuery}`;
  },

  GET_DETAIL_COURSE: (id) => {
    return `/courses/${id}`;
  },

  USER_RESET_PASSWORD: (token) => {
    return `/auth/reset-password?token=${token}`;
  },

  GET_PROMO: "/promo",

  GET_DETAIL_PROMO: (id) => {
    return `/promo/${id}`;
  },

  COURSE_CHECKOUT: "/payment/checkout",

  COURSE_CHECKOUT_FREE: (id) => {
    return `/courses/${id}/join`;
  },

  COURSE_CHECKOUT_NOTIFICATION: "/payment/notification",
  DELETE_COURSE: (id) => {
    return `/courses/${id}`;
  },

  UPDATE_COURSES: (id) => {
    return `/courses/${id}`;
  },

  GET_PROMO: "/promo",

  GET_DETAIL_PROMO: (id) => {
    return `/promo/${id}`;
  },

  DELETE_PROMO: (id) => {
    return `/promo/${id}`;
  },

  UPDATE_PROMO: (id) => {
    return `/promo/${id}`;
  },

  ADMIN_LOGIN: "/auth/admin/login",
  GET_ADMIN: "/auth/admin/whoami",
  GET_ALL_COURSE: "/courses",
  POST_COURSE: "/courses",
  PROMO: "/promo",
  ACTIVE_USERS: "/activeUsers",
  ACTIVE_CLASS: "/activeClass",
  PREMIUM_CLASS: "/premiumClass",
};
