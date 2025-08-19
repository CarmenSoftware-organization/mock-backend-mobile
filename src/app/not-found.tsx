import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-6xl font-bold text-gray-300 mb-4">404</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-block"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
