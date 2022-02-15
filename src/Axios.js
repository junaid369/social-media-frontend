import axios from "axios";

export const doSignup = (formdata) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("http://localhost:3000/api/user/signup", formdata)
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (formdata) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post("http://localhost:3000/api/user/login", formdata)
      .then((data) => {
        localStorage.setItem("token", data.data.token);

        localStorage.setItem("user", JSON.stringify(data.data.user));
        let usertoken = localStorage.getItem("user");

        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const verifyEmailotp = (fromdata) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post("http://localhost:3000/api/user/verifyEmailOtp", fromdata)
      .then((data) => {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

        resolve(data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};

export const thirdPartyLogin = ({ email }) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post("http://localhost:3000/api/user/thirdPartyLogin", { email })
      .then((data) => {
        localStorage.setItem("token", data.data.token);

        localStorage.setItem("user", JSON.stringify(data.data.user));

        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const updatepsost = (formdata) => {
  const token = localStorage.getItem("token");
  console.log(token);

  return new Promise(async (resolve, reject) => {
    axios
      .post("http://localhost:3000/api/user/createpost", formdata, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        resolve(data.data.post);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getAllPost = () => {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve, reject) => {
    axios
      .get("http://localhost:3000/api/user/getallpost", {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getUserDetails = () => {
  console.log("hear");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const ID = user._id;

  return new Promise(async (resolve, reject) => {
    axios
      .get(`http://localhost:3000/api/user/getuserdetails/${ID}`, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        resolve(data.data.user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateProfile = (formdata) => {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve, reject) => {
    axios
      .post("http://localhost:3000/api/user/profile", formdata, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {

        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
