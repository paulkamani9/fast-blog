import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ChangeContext = () => {
  const { state, dispatch } = useContext(ThemeContext);

  console.log(state);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        gap: "3vh",
        fontSize: `${state.fontSize}px`,
      }}
      onClick={() => dispatch({ type: "CHANGE_THEME", payload: 0 })}
    >
      <button
        style={{
          width: "50%",
          padding: "2vh 2%",
          background: "pink",
          border: "none",
        }}
      >
        Change Theme
      </button>
      <button
        style={{
          width: "50%",
          padding: "2vh 2%",
          background: "lightblue",
          border: "none",
          fontSize: `${state.fontSize}px`,
        }}
        onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload: 25})}
      >
        Change Font
      </button>
    </div>
  );
};
export default ChangeContext;
