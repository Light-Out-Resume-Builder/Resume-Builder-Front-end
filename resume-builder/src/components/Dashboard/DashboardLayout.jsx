import DashboardNav from '../../components/Dashboard/DashboardNav.jsx';

import PropTypes from 'prop-types';

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

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
 
