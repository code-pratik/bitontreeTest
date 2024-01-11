import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharcterInfo from "./pages/CharacterInfoPage/CharacterInfoPage";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Error404 from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import "react-loading-skeleton/dist/skeleton.css";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import { Navigate } from "react-router-dom/dist";

function App() {
  const theme = useSelector((state) => state.main?.theme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/characters/page/:page"
              element={<CharacterListPage />}
            />
            <Route path="/characters/:id" element={<CharcterInfo />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
