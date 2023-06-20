import React, { useState, useEffect, useRef } from "react";

import OnboardingContext from "./onboardingContext";

import { axiosUtil } from "../utils/axios";

const OnboardingContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [expiry, setExpiry] = useState("");

  const initialised = useRef(false);
  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;
      const fetchToken = () => {
        axiosUtil
          .request({
            url: "/v1/authentication/login",
            method: "post",
            headers: {
              "x-api-key":
                "f69114db9fc2834d2b99e71d600cdaf186098676a3620143c4637a84b474088c87a95fbf1827ea4d16799d2df03f7326",
              "x-client-id": "9fCj8koxSFq8UNKzI4pD7g",
            },
          })
          .then(({ data }) => {
            setToken(data.token);
            setExpiry(data.expires_at);
          })
          .catch((error) => {
            console.log("Error from provider: ", error);
          });
      };

      fetchToken();
    }
  }, [token]);

  const expChecker = (exp) => {
    const timeNow = new Date();
    const timeExp = new Date(exp);

    if (timeNow > timeExp) {
      setToken("");
    } else {
      console.log("its not expired");
    }
  };

  const ctxVal = {
    token: token,
    expiry: expiry,
    expChecker: expChecker,
  };

  return (
    <OnboardingContext.Provider value={ctxVal}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingContextProvider;
