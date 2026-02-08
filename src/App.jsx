import { useState } from "react";
import ProfileCard from "./Components/ProfileCard";
import StatusPanel from "./Components/StatusPanel";
import './index.css';

function App() {
  // State managed in parent
  const [status, setStatus] = useState("Active");

  // State update function
  const toggleStatus = () => {
    setStatus(status === "Active" ? "Inactive" : "Active");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Profile Dashboard</h2>

      {/* Passing data via props */}
      <ProfileCard
        name="Alex Chen"
        role="Marketing Operations Manager"
        status={status}
      />

      <StatusPanel status={status} onToggle={toggleStatus} />
    </div>
  );
}

export default App;
