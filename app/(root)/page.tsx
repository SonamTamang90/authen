import { auth } from "@/auth";
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  EyeIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Home = async () => {
  const session = await auth();

  // Mock data for demo purposes
  const stats = [
    { name: 'Total Sessions', value: '12', icon: ChartBarIcon, change: '+4.75%', changeType: 'positive' },
    { name: 'Active Devices', value: '3', icon: DevicePhoneMobileIcon, change: '+2.02%', changeType: 'positive' },
    { name: 'Last Login', value: '2h ago', icon: ClockIcon, change: 'Today', changeType: 'neutral' },
    { name: 'Security Score', value: '98%', icon: ShieldCheckIcon, change: '+1.2%', changeType: 'positive' },
  ];

  const recentActivity = [
    { action: 'Signed in from Chrome', location: 'New York, US', time: '2 hours ago', device: 'Desktop' },
    { action: 'Profile updated', location: 'New York, US', time: '1 day ago', device: 'Mobile' },
    { action: 'Password changed', location: 'New York, US', time: '3 days ago', device: 'Desktop' },
    { action: 'Signed in from Safari', location: 'California, US', time: '1 week ago', device: 'Mobile' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {session?.user?.name?.split(' ')[0] || "User"}! 👋
            </h1>
            <p className="text-blue-100 text-lg">
              Here&apos;s what&apos;s happening with your account today.
            </p>
          </div>
          <div className="hidden md:block">
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User"}
                width={80}
                height={80}
                className="rounded-full border-4 border-white/20"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">
                {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 
                stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Account Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                ) : (
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold">
                    {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{session?.user?.name || "User"}</h3>
                  <p className="text-gray-600">{session?.user?.email || "No email provided"}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1"></div>
                      Active
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDaysIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-500">Member Since</span>
                  </div>
                  <p className="text-gray-900 font-semibold">January 2024</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-500">Location</span>
                  </div>
                  <p className="text-gray-900 font-semibold">New York, US</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserGroupIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Edit Profile</p>
                  <p className="text-sm text-gray-500">Update your information</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Security Settings</p>
                  <p className="text-sm text-gray-500">Manage your security</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <EyeIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Privacy Settings</p>
                  <p className="text-sm text-gray-500">Control your privacy</p>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.location} • {activity.device}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
