import { useFeatureFlags } from "../FeatureflagContext";
import { Link } from "react-router";
import FeatureEnabled from "./FeatureEnabled";

const Dashboard = () => {
    const { flags } = useFeatureFlags();
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <FeatureEnabled featureFlag="ADVANCED_ANALYTICS">
        <div className="p-4 bg-gray-200 rounded">
          <h2 className="text-lg font-semibold">Advanced Analytics</h2>
        </div>
      </FeatureEnabled>
        <br />
        <Link to="/settings" className="text-blue-500 underline">Go to Settings</Link>
      </div>
    );
  };

  export default Dashboard