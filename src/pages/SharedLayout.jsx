import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <h1> SharedLayout</h1>
      <Outlet />
    </>
  );
}

export default SharedLayout;
