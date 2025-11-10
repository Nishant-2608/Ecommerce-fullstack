// src/components/Authentication_component/authentication.js
class AuthenticationService {
  registerSuccessLogin(username, token) {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("token", token);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  }

  isUserLoggedIn() {
    return sessionStorage.getItem("token") !== null;
  }

  getLoggedInUser() {
    return sessionStorage.getItem("authenticatedUser");
  }

  getToken() {
    return sessionStorage.getItem("token");
  }
}

const authenticationService = new AuthenticationService();
export default authenticationService;
