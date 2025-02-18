import Sidebar from "../Components/SideBar";
const HomePage = () => {
  return (
    <div className="h-screen flex bg-slate-50">
      <Sidebar />
      <div className="flex items-center justify-center">
        <h1>HomePage</h1>
      </div>
    </div>
  );
};

export default HomePage;
