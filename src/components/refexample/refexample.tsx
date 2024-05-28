import { useEffect, useRef } from "react";

const RefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("username is: " + usernameInputRef.current?.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3vh",
        height: "50vh",
      }}
    >
      <input ref={inputRef} type="text" placeholder="focus here" />
      <input ref={usernameInputRef} type="text" placeholder="username" />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};
export default RefExample;
