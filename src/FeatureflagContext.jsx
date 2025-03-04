import { createContext, useContext, useState } from "react";

const FeatureFlagContext = createContext();

const FEATURE_FLAGS = {
  TEST_NEW_PRODUCTS_QUERY: true,
  ADVANCED_ANALYTICS: true,
  DISABLED_FEATURE: false,
  EXPERIMENTAL_FEATURE: false,
  MULTIPLE_ALLOWANCES: [
    { percentageOfUsers: 0.25, userRoles: ["user"] },
    { userRoles: ["admin", "tester"] },
  ],
};

export const FeatureFlagProvider = ({ children }) => {
  const [flags, setFlags] = useState(FEATURE_FLAGS);
  console.log("flags",flags)

  return (
    <FeatureFlagContext.Provider value={{ flags, setFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlags = () => useContext(FeatureFlagContext);



