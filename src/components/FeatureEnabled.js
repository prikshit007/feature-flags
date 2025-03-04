import { useFeatureFlags } from "../FeatureflagContext";


const FeatureEnabled = ({ featureFlag, children }) => {
    const {flags}=useFeatureFlags()
    return flags[featureFlag] ? children : null;
  };


  export default FeatureEnabled