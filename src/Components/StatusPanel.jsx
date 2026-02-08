function StatusPanel({ status, onToggle }) {
  return (
    <div>
      <p>Current Status: {status}</p>
      <button onClick={onToggle}>Toggle Status</button>
    </div>
  );
}

export default StatusPanel;
