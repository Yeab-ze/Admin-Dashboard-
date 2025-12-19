import React from "react";
import Sidebar from "./assets/components/layout/Sidebar";
import Header from "./assets/components/layout/Header";
import "./App";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-300">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header/>
        
      </div>
    </div>
  );
};

export default App;
