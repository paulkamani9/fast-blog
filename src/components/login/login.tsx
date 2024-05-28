import { useState } from "react";
import { UserType } from "../../types/types";

const Login = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      {user ? (
        <h2 style={{ color: "red" }}>{`Hello ${user.name}, welcome!`}</h2>
      ) : (
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            alignItems: "center",
          }}
        >
          <input
            placeholder="Username"
            style={{ height: "5vh", width: "100%" }}
            onChange={handleChange}
            value={username}
          />
          <button
            style={{
              background: "green",
              color: "white",
              border: "none",
              width: "100%",
              padding: "1vh",
            }}
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
export default Login;
