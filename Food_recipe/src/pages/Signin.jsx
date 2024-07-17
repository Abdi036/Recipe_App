import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-16">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Signin</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Signin
          </button>
          <div className="py-5">
            <p>
              Don&apos;t have an account?
              <span>
                &nbsp;
                <Link to="/signup" className="text-blue-500">
                  signup
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
