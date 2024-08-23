import React, { useState } from "react";
import { adminLogin } from "../api";
import InputField from "../components/common/InputField";
import ErrorMessage from "../components/common/ErrorMessage";
import Container from "../components/common/Container";
import { useAppContext } from "../AppContext/useAppContext";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const { dispatch } = useAppContext(); 

  // Handle input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit button
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await adminLogin(formData);
      if (response?.statusCode === 200) {
        console.log(response,'response')
        localStorage.setItem("adminToken", response.token);
        dispatch({
          type: "SET_USER",
          payload: { email: formData.email, password: "" },
        });
        dispatch({ type: "SET_STATUS", payload: true });
        setInvalidCredentials(false);
        navigate('/dashboard/registration')
      } else {
        setInvalidCredentials(true);
      }
    } catch (error) {
      console.error("Login failed", error);
      setInvalidCredentials(true);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <Container className="my-[10rem]">
      <h1 className="mt-8 text-[38px] md:text-[48px] mb-8 text-left font-frank">
        Login
      </h1>
      {invalidCredentials && (
        <ErrorMessage
          className="flex-col gap-4 py-6 !items-start justify-start"
          message="Invalid login details."
        />
      )}

      <div className="mt-20 flex items-center justify-start bg-white">
        <div className="w-full lg:max-w-[600px] p-[20px] bg-white rounded-[5px] border-[1px] border-[#e1e1e1]">
          <form onSubmit={handleLogin}>
            <div>
              <InputField
                labelClass="text-black"
                className="mt-[5px]"
                label="Username or Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="mt-[20px]">
              <InputField
                labelClass="text-black"
                className="mt-[5px]"
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="flex justify-between items-end">
              <div className="flex items-center mt-[15px] mb-[20px]">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-[#333333]"
                >
                  Remember me
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-[#7ABCDB] flex justify-center px-[20px] py-[10px] text-[16px] font-poppins rounded-[20px] text-white"
                >
                  Login
                </button>
              </div>
            </div>

            <div className="text-sm">
              <a href="#" className="text-[#EF5D39] text-[16px] font-poppins">
                Lost your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AdminLogin;
