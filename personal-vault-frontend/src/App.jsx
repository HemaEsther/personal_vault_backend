import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CreateNotes from "./pages/CreateNotes";
import ViewNotes from "./pages/viewNotes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/notes/create"
          element={
            <PrivateRoute>
              <CreateNotes />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/notes/view"
          element={
            <PrivateRoute>
              <ViewNotes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
