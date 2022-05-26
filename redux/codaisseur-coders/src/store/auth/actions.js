import axios from "axios";
import { attemptLogin, setAuthToken, setProfileInfo } from "./slice";
const API = "https://codaisseur-coders-network.herokuapp.com";

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(attemptLogin);

      const content = await axios
        .post(`${API}/login`, {
          email: email,
          password: password,
        })
        .catch((err) => console.log(err));

      dispatch(setAuthToken(content.data.jwt));
      localStorage.setItem("jwt", content.data.jwt);

      const profile = await axios
        .get(`${API}/me`, {
          headers: { Authorization: `Bearer ${content.data.jwt}` },
        })
        .catch((err) => console.log("err", err));

      dispatch(setProfileInfo(profile.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function bootstrapLogin() {
  return async function thunk(dispatch, getState) {
    const state = getState();

    const localJWT = localStorage.getItem("jwt");
    if (localJWT) dispatch(setAuthToken(localJWT));

    if (localJWT && !state.auth.me) {
      const profile = await axios
        .get(`${API}/me`, { headers: { Authorization: `Bearer ${localJWT}` } })
        .catch((err) => console.log("err", err));
      dispatch(setProfileInfo(profile.data));
    }
  };
}