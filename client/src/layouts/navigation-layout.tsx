import { Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <div
      className="relative h-full min-h-screen bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(to top, #faffb4bc 10%, #f8f8f8ba), url('../src/assets/images/navigation.jpg')",
        backgroundSize: "contain",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="z-[1] backdrop-blur-md">
        <Outlet />
      </div>
    </div>
  );
}

export default NavLayout;
