import TopHeader from "./Header";
import SideBar from "./SideBar";

export default function Dashboard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex h-screen overflow-auto">
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Dashboard
              </span>
            </div>
          </div>
          {/* sidebar componenet */}
          <SideBar />
        </aside>

        {/* Main Content */}

        <div className="container mx-auto p-4 md:p-6">
          {/* <TopHeader /> */}
          {/* <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 mb-4 ">
            <p className="text-3xl font-bold mt-4 font-serif text-black">
              Welcome to Institute Admin Dashboard
            </p>
            <p className="text-2zl font-serif mt-2 text-black">
              Good Evening ! Mr.Unique Neupane (Saas Project)
            </p>
          </div>
          {children} */}
          {children}
        </div>
      </div>
    </>
  );
}
