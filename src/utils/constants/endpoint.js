export const API_ENDPOINT = {
  // USER
  USER_WHOAMI: "/auth/whoami",
  USER_LOGIN: "/auth/login",
  USER_LOGIN_AUTH: "/auth/google",
  USER_REGISTER: "/auth/register",
  USER_FORGOT_PASSWORD: "/auth/forgotPassword",
  USER_RESEND_OTP: "/auth/resend-otp",
  USER_UPDATE_PROFIL: "/profile",
  USER_CHANGE_PASSWORD: "/auth/change-password",
  USER_PROFIL: "/profile",
  USER_UPDATE_IMAGE_USER: "/profile/",

  USER_OTP: (otp, token) => {
    return `/auth/verifyOTP?otp=${otp}&token=${token}`;
  },

  USER_RESET_PASSWORD: (token) => {
    return `/auth/reset-password?token=${token}`;
  },

  // CATEGORY
  GET_CATEGORIES: "/categories",

  GET_CATEGORIES_ID: (id) => {
    return `/categories/${id}`;
  },

  // COURSES
  GET_COURSES_ME: "/courses/me",
  GET_ALL_COURSES: "/courses",
  COURSE_CHECKOUT: "/payment/checkout",
  COURSE_CHECKOUT_NOTIFICATION: "/payment/notification",

  GET_COURSES_ME_ID: (id) => {
    return `/courses/me/${id}`;
  },

  GET_DETAIL_COURSES_ME: (id) => {
    return `/courses/me/${id}`;
  },

  UPDATE_PROGRESS: (progressId) => {
    return `/courses/me/progress/${progressId}`;
  },

  GET_COURSES: (page, limit) => {
    return `/courses?page=${page}&limit=${limit}`;
  },

  GET_SEARCH_COURSE: (searchQuery) => {
    return `/courses?search=${searchQuery}`;
  },

  GET_DETAIL_COURSE: (id) => {
    return `/courses/${id}`;
  },

  COURSE_CHECKOUT_FREE: (id) => {
    return `/courses/${id}/join`;
  },

  DELETE_COURSE: (id) => {
    return `/courses/${id}`;
  },

  UPDATE_COURSES: (id) => {
    return `/courses/${id}`;
  },

  // PROMO
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

  // RATING
  POST_RATING: "/ratings",

  RATINGS: (id) => {
    return `/ratings/${id}`;
  },

  // NOTIFICATIONS
  GET_NOTIFICATION: "/notification",
  PUT_NOTIFICATION: (id) => {
    return `/notification/${id}`;
  },

  // TRANSACTIONS
  GET_TRANSACTION_USER: "/transactions/me",
  GET_ALL_TRANSACTION_: '/transactions',
  // ADMIN
  ADMIN_LOGIN: "/auth/admin/login",
  GET_ADMIN: "/auth/admin/whoami",
  POST_COURSE: "/courses",
  PROMO: "/promo",
  ACTIVE_USERS: "/activeUsers",
  ACTIVE_CLASS: "/activeClass",
  PREMIUM_CLASS: "/premiumClass",
};
