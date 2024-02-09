import axios from 'axios';

export const checkEmailExists = async (email) => {
  try {
    const response = await axios.get(`http://localhost:8000/users?email=${email}`);
    return response.data.length > 0;
  } catch (error) {
    console.error('Error checking email existence:', error);
    throw error;
  }
};

