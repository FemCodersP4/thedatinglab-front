import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const API_URL = process.env.API_URL;

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user && !user.token) return { Authorization: "" };
  return {
    Authorization: "Bearer " + user.token,
    isAdmin: user.isAdmin ? "true" : "false",
  };
};

export const UserService = {
  getLogin: async (formData) => {
    return await axios.post(`${API_URL}/login`, {
      email: formData.email,
      password: formData.password,
    });
  },

  registerUser: async (formData) => {
    return await axios.post(`${API_URL}/register`, {
      ...formData,
    });
  },
};

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/admin/users`, {
    headers: authHeader(),
  });
  return response.data;
};

export const getUserById = async (userId) => {
  const response = await axios.get(`${API_URL}/profile/${userId}`, {
    headers: authHeader(),
  });
  return response.data;
};

export const getProfileById = async (profileId) => {
  const response = await axios.get(`${API_URL}/profile/${profileId}`, {
    headers: authHeader(),
  });
  return response.data;
}

export const getMatch = async () => {
  const response = await axios.get(`${API_URL}/matching-users`, {
    headers: authHeader(),
  });
  return response.data;
};


export const updateProfile = async (profileId, formData) => {
  return await axios.put(`${API_URL}/profile/${profileId}`, {
    image: formData.image,
    description: formData.description,
    vitalMoment: formData.vitalMoment,
  }, {
    headers: authHeader(),
  });
};

export const createProfile = async (formData, headers) => {
  return await axios.post(`${API_URL}/profile`,  formData, {
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data', 
    },
  });
};
