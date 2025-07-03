// components/BreadcrumbHeader.tsx
const BreadcrumbHeader = () => {
  return (
    <div className="flex items-center text-sm text-gray-600 px-4 py-2 space-x-2">
      <span className="text-purple-600 font-semibold">📁 Workspace</span>
      <span>&gt;</span>
      <span>Folder 2</span>
      <span>&gt;</span>
      <span className="text-gray-900 font-semibold">Spreadsheet 3</span>
    </div>
  );
};

export default BreadcrumbHeader;
