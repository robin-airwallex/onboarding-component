// import { Base64 } from "js-base64";

// function dec2hex(dec) {
//   return ("0" + dec.toString(16)).substr(-2);
// }

// function generateCodeVerifier() {
//   var array = new Uint32Array(56 / 2);
//   window.crypto.getRandomValues(array);
//   return Array.from(array, dec2hex).join("");
// }

// const codeVerifier = generateCodeVerifier();

// function sha256(plain) {
//   // returns promise ArrayBuffer
//   const encoder = new TextEncoder();
//   const data = encoder.encode(plain);
//   return window.crypto.subtle.digest("SHA-256", data);
// }

// function base64urlencode(a) {
//   var str = "";
//   var bytes = new Uint8Array(a);
//   var len = bytes.byteLength;
//   for (var i = 0; i < len; i++) {
//     str += String.fromCharCode(bytes[i]);
//   }
//   return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
// }

// async function generateCodeChallengeFromVerifier(v) {
//   var hashed = await sha256(v);
//   var base64encoded = base64urlencode(hashed);
//   return base64encoded;
// }

import { Base64 } from "js-base64";

const sha256 = (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
};

const base64UrlEncode = (hashed) => {
  const bytes = new Uint8Array(hashed);
  const base64Encoded = Base64.fromUint8Array(bytes, true);
  return base64Encoded;
};

export const generateCodeChallengeFromVerifier = async (codeVerifier) => {
  const hashed = await sha256(codeVerifier);
  const base64Encoded = base64UrlEncode(hashed);
  return base64Encoded;
};

const dec2hex = (dec) => {
  return ("0" + dec.toString(16)).slice(-2);
};

export const generateCodeVerifier = () => {
  const length = Math.random() * (129 - 43) + 43;
  const array = new Uint32Array(length / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join("");
};

// export let codeVerifier = generateCodeVerifier();

// export let codeChallenge = generateCodeChallengeFromVerifier(codeVerifier);
