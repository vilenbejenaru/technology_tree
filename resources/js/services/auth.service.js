import axios from "axios";

const API_URL = "http://technology_tree.loc/api/auth/";

class AuthService {
    login(user) {
        return axios
            .post(API_URL + "login", {
                username: user.username,
                password: user.password,
            })
            .then((response) => {
                if (response.data.access_token) {
                    let user = {
                        access_token: response.data.access_token,
                        ...response.data.user,
                    };
                    localStorage.setItem("user", JSON.stringify(user));
                }

                return response.data.user;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(user) {
        return axios.post(API_URL + "register", {
            username: user.username,
            email: user.email,
            password: user.password,
            password_confirmation: user.password,
        });
    }
}

export default new AuthService();
