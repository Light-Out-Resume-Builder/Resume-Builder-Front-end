import DashboardNav from '../../components/Dashboard/DashboardNav.jsx';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex flex-col '>
      <DashboardNav />
      <div className="">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
