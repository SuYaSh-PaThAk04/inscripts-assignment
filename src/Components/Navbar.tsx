// components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="w-full border-b shadow-sm p-4 flex justify-between items-center bg-white">
      <h1 className="text-lg font-semibold text-gray-800">Workspace</h1>
      <span className="text-sm text-gray-500">Powered by React + Tailwind</span>
    </nav>
  );
};

export default Navbar;
