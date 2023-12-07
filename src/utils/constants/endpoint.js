export const API_ENDPOINT = {
  USER_WHOAMI: "/auth/whoami",
  USER_LOGIN: "/auth/login",
  USER_REGISTER: "/auth/register",
  USER_OTP: "/auth/verifyOTP",
  USER_FORGOT_PASSWORD: "/auth/forgotPassword",

  GET_CATEGORIES: "/categories",

  GET_CATEGORIES_ID: (id) => {
    return `/categories/${id}`;
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

  USER_RESET_PASSWORD: (token) => {
    return `/auth/reset-password?token=${token}`;
  },

  ADMIN_LOGIN: "/auth/admin/login",
  GET_ADMIN: "/auth/admin/whoami",
};
