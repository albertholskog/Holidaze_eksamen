import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import VenueList from "./pages/VenueList";
import VenueSpecific from "./pages/VenueSpecific";
import Error from "./pages/Error";
import { AuthProvider } from "./utils/auth";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/venues">
              <Route index element={<VenueList />} />
              <Route path=":id" element={<VenueSpecific />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
