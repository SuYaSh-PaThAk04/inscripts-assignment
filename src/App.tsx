import Navbar from './Components/Navbar'
import SpreadSheetTable from './Components/SpreadSheetTable'
import Toolbar from './Components/ToolBar'
import SheetTab from './Components/SheetTab'
import BreadcrumbHeader from './Components/HeadBar'
import TopRightActions from './Components/TopRightActions'

function App() {

  return (
    <>
        <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex justify-between items-center px-4 pt-2">
        <BreadcrumbHeader />
        <TopRightActions />
      </div>
      <Toolbar />
      <SheetTab />
      <SpreadSheetTable />
    </div>
    </>
  )
}

export default App
