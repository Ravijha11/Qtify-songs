import "./App.css";
import AlbumSongsPage from "./components/Album Songs Page/AlbumSongsPage";
import HomePage from "./components/Home Page/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {/* Define the route for the homepage */}
      <Route path="/" element={<HomePage />} />
      {/* Define the route for the album page with a dynamic title parameter */}
      <Route path="/album/:title" element={<AlbumSongsPage />} />
    </Routes>
  );
};

export default App;
