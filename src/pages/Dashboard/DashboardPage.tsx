import DashboardLayout from "../../components/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Admin Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="bg-white p-6 rounded shadow">Total Users</div>
        <div className="bg-white p-6 rounded shadow">Total Revenue</div>
        <div className="bg-white p-6 rounded shadow">New Signups</div>
        <div className="bg-white p-6 rounded shadow">Reports</div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
