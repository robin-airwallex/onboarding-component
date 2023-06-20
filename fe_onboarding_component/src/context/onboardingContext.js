import { createContext } from "react";

const OnboardingContext = createContext({
  token: "",
  expChecker: (exp) => {},
  expiry: "",
  codeVerifier: "",
});

export default OnboardingContext;
