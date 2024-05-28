import "./App.css";
import ChangeContext from "./components/changecontext/changecontext";
import Login from "./components/login/login";
// import Bloglist from "./components/bloglist/bloglist";
// import Child from "./components/child/child";
// import SecondBorn from "./components/child2/child2";
import Navbar from "./components/navbar/navbar";
import { ThemeProvider } from "./context/ThemeContext";
// import PostSearch from "./components/postsearch/postsearch";
// import Parent from "./components/parent/parent";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <ChangeContext />
    </ThemeProvider>
  );
}

export default App;
