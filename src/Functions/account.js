import Axios from "axios";
import { apiURL } from "./api-config";

const User = {
  auth: (username, password) => {
    console.log("Logging in Ben");
  },
  register: (username, email, password) => {
    console.log(apiURL);

    console.log();

    console.log("Registering a new user with ", email, password);

    //test

    Axios({
      method: "post",
      url: apiURL + "/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        password: password,
        username: username,
        age: "25",
        profile_picture: "sadsa",
        product: "lol",
        bio: "lol",
        gender: "M",
        city: "Rochester",
        state: "NY",
        country: "US",
        show_on_app: 1,
      },
    });

    // Axios.post(apiURL + "/auth/register", {
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data: {
    //     email: email,
    //     password: password,
    //     username: username,
    //     age: "25",
    //     profile_picture: "sadsa",
    //     product: "lol",
    //     bio: "lol",
    //     gender: "M",
    //     city: "Rochester",
    //     state: "NY",
    //     country: "US",
    //     show_on_app: 1
    //   }
    // })
    //   .then(res => {
    //     console.log(`statusCode: ${res.statusCode}`);
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  },
};

export { User };
