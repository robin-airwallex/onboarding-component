import React from "react";

// import classes from "./Onboarding.module.css";

// import { init } from "@airwallex/platform-onboarding-sdk";
import OnboardingComponent from "./OnboardingComponent/OnboardingComponent";

const Onboarding = () => {
  //   const options = {
  //     langKey: "en",
  //     env: "demo",
  //     authCode: "x4D7A7wOSQvoygpwqweZpG0GFHTcQfVPBTZoKV7EibgH",
  //     clientId: "BIjjMYsYTPuRqnkEloSvvf",
  //     codeVerifier:
  //       "~wh344Lea1FsCMVH39Fn9R2~nqq2uyD4wbvG9XCzWRxd0sZh9MFiF9gSVkM0C-ZvrdtjBFA6Cw1EvCpJcIjaeXg1-BXCfZd25ZmvuYZAqZtjJQA3NAa~7X1sgEfbMZJwQ",
  //   };
  return (
    <div>
      <OnboardingComponent />
    </div>
  );
};

export default Onboarding;
