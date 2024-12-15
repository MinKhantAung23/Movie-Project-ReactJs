/* eslint-disable react/no-unescaped-entities */

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-gray-400">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 text-gray-900 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
