import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </>
  );
}

export default MainLayout;
