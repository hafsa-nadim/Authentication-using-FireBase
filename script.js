import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBEmRheNCEiRGcLOJBb8FoaEYmrdaGYKv0",
    authDomain: "signup-login-form-754b4.firebaseapp.com",
    projectId: "signup-login-form-754b4",
    storageBucket: "signup-login-form-754b4.firebasestorage.app",
    messagingSenderId: "273901785995",
    appId: "1:273901785995:web:7bde48c92fc7b6e771958e",
    measurementId: "G-19RZ9G15J0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById("signupBtn")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Signup Successful");
            window.location.href = "welcome.html";
        })
        .catch(error => document.getElementById("message").innerText = error.message);
});
document.getElementById("loginBtn")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Successful");
            window.location.href = "welcome.html";
        })
        .catch(error => document.getElementById("message").innerText = error.message);
});
export function logout() {
    signOut(auth)
        .then(() => {
            alert("Logged out");
            window.location.href = "index.html";
        })
        .catch(error => console.error("Logout Error:", error));
}
document.getElementById("logoutBtn")?.addEventListener("click", logout);
