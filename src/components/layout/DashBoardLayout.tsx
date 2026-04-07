import { Outlet } from "react-router";

export default function DashBoardLayout() {
  return (
    <div className="bg-cream flex h-screen w-full gap-2 overflow-hidden">
      <div className="sticky top-0 h-screen"></div>

      <div className="flex-1 overflow-y-auto pr-3">
        <Outlet />
      </div>
    </div>
  );
}
