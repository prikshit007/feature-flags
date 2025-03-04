import { useFeatureFlags } from "../FeatureflagContext";
import { Link } from "react-router";
const Settings = () => {

    const { flags, setFlags } = useFeatureFlags();
  
    const toggleFeature = () => {
        console.log("in toggling")
        setFlags((prev) => ({ ...prev, ADVANCED_ANALYTICS: !prev.ADVANCED_ANALYTICS }));
      };
   
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Settings</h1>
        <button onClick={toggleFeature} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Advanced Analytics
        </button>
        <br />
        <Link to="/" className="text-blue-500 underline">Back to Dashboard</Link>
      </div>
    );
  };

  export default Settings