import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DashboardSidebar from '../components/layout/DashboardSidebar';
import MobileDashboardNav from '../components/layout/MobileDashboardNav';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>CrimeWatch AI Dashboard</title>
        <meta name="description" content="Access real-time crime data, interactive maps, and AI-powered predictions in the CrimeWatch AI dashboard." />
      </Helmet>
      
      <div className="pt-20 pb-8 min-h-screen bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="flex gap-6">
            <DashboardSidebar />
            
            <div className="flex-1 p-1">
              <Outlet />
            </div>
          </div>
          
          <MobileDashboardNav />
        </div>
      </div>
    </>
  );
};

export default Dashboard;