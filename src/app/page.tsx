export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 Mock Backend Mobile API
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Next.js backend service สำหรับ mobile application พร้อม authentication, 
            user management, และ product management
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              📡 API Endpoints
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700">🔐 Authentication</h3>
                <div className="space-y-2 text-sm">
                  <p><code className="bg-gray-100 px-2 py-1 rounded">POST /api/auth/register</code></p>
                  <p><code className="bg-gray-100 px-2 py-1 rounded">POST /api/auth/login</code></p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700">👥 Users</h3>
                <div className="space-y-2 text-sm">
                  <p><code className="bg-gray-100 px-2 py-1 rounded">GET /api/users</code></p>
                  <p><code className="bg-gray-100 px-2 py-1 rounded">POST /api/users</code></p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700">📦 Products</h3>
                <div className="space-y-2 text-sm">
                  <p><code className="bg-gray-100 px-2 py-1 rounded">GET /api/products</code></p>
                  <p><code className="bg-gray-100 px-2 py-1 rounded">POST /api/products</code></p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700">🏥 Health Check</h3>
                <div className="space-y-2 text-sm">
                  <p><code className="bg-gray-100 px-2 py-1 rounded">GET /api/health</code></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              🧪 Test Credentials
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">👑 Admin User</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> admin@example.com</p>
                  <p><strong>Password:</strong> password123</p>
                  <p><strong>Role:</strong> admin</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">👤 Regular User</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> user@example.com</p>
                  <p><strong>Password:</strong> password123</p>
                  <p><strong>Role:</strong> user</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              🛠️ Technologies
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Next.js 15
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Bun
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                JWT
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                bcryptjs
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                TailwindCSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
