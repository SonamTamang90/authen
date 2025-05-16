import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  return (
    <div className="mx-auto mt-16 max-w-2xl text-center">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Welcome, {session?.user?.name || "User"}!
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        You are now successfully authenticated. Use the profile menu in the top
        right to sign out.
      </p>
      <div className="mt-10 overflow-hidden rounded-xl bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Your Account Details
          </h3>
          <div className="mt-5 border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {session?.user?.name || "Not provided"}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {session?.user?.email || "Not provided"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
