import axios from 'axios'
import authHeader from './authHeader';

const login = (data) => {
    return axios
      .post("http://localhost:8080/api/auth/login", data)
      .then((response) => {
        if (response.data.accessToken) {
          console.log(response.data.otpStatus)
          //Session Saving
          localStorage.setItem('user', JSON.stringify(response.data))
          localStorage.setItem('otpStatus',response.data.otpStatus)
          localStorage.setItem('accessToken',response.data.accessToken)
          
        }
        return response.data;
      });
};

const signup = (data) => {
  return axios
    .post("http://localhost:8080/api/auth/signup", data ,{headers: authHeader()})
    .then((response) => {
      console.log(response);
      return response;
    });
};

const verify = (data) => {
  return axios
    .post("http://localhost:8080/api/auth/verifyOtp", data , {headers:authHeader()})
    .then((response) => {
      console.log(response.message)
      localStorage.setItem("otpStatus",response.message)
      return response.data;
    });
};


const getCurrentUser = () => {

  return JSON.parse(localStorage.getItem('user'));


};

const getIp = () => {

  return axios.get("http://geolocation-db.com/json/")
    .then((response) => {
        return response.data;
     });

};

const logout = () => {
  
  localStorage.clear();
}






const AuthService = {
  login,
  signup,
  verify,
  getCurrentUser,
  logout,
  getIp,
}

export default AuthService;