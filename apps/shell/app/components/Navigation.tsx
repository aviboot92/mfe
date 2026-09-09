"use client";

export default function Navigation() {
  const handleUsersClick = () => {
    console.log("Users clicked");
  };

  return (
    <nav>
      <button>Dashboard</button>

      <button onClick={handleUsersClick}>
        Users
      </button>
    </nav>
  );
}