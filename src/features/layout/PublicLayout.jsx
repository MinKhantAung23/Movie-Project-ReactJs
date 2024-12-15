import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLoading from "../../components/PageLoading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PublicLayout = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white via-indigo-500 to-blue-400 text-gray-900">
      <Header />

      <Suspense fallback={<PageLoading />}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="mt-4"
        />
        <div className="flex-grow ">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayout;
