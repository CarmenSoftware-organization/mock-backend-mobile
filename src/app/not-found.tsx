import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full shadow-xl border-0 rounded-lg border bg-white">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-6">
          <h1 className="text-6xl font-bold text-gray-300 mb-2">404</h1>
          <h3 className="text-2xl font-bold text-gray-900">
            Page Not Found
          </h3>
        </div>
        <div className="p-6 pt-0 text-center">
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white h-11 px-8 py-2 w-full"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
