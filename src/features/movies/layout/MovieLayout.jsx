import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "../../../components/PageLoading";
import { ToastContainer } from "react-toastify";

const MovieLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen">
      <Suspense fallback={<PageLoading />}>
        <ToastContainer />
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieLayout;
