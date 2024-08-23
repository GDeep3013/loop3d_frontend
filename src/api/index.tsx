import axios from "axios";

// const BASE_URL = 'http://192.168.1.3:3002';
const BASE_URL = 'http://24.144.120.186:3002';


// admin-login
interface AdminLoginPayload {
  email: string;
  password: string;
}

export const adminLogin = async (payload: AdminLoginPayload) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/adminlogin`,
      payload,
     {
      headers: {
        'Content-Type': 'application/json'
      }
     }
    );
    return response?.data;

  } catch (error) {
    console.log(error, "login api error");
  }
};

// create-user (manager)
interface UserRegistrationPayload {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
}

export const registerUser = async (payload: UserRegistrationPayload, token: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/createUser`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
       }
    );
    return response.data;
  } catch (error) {
    console.log("Error during registration", error);
  }
};


// start-survey
interface StartSurveyPayload {
  loop_lead_name: string;
  loop_lead_email: string;
  tab: "individual_contributor" | "people_manager";
  selectedOptions: string[];
}
export const startSurvay = async (payload: StartSurveyPayload) => {
  try {
    const response = await axios.post(`${BASE_URL}/start-survay`, payload);
    return response;
  } catch (error) {
    console.log(error, "api error");
  }
};
