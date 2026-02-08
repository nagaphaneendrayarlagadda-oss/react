function ProfileCard({ name, role, status }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px" }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProfileCard;
