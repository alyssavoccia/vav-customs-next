import AuthRoute from "../../../hoc/authRoute";
import styles from '../../../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <AuthRoute>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h1>VAV Customs</h1>
        </div>
        <div className='dashboardSection'>
          <h2>Recent Custom Build Inquiries</h2>
        </div>
        <div className='dashboardSection'>
          <h2>Recent Blog Entries</h2>
        </div>
      </div>
    </AuthRoute>
  )
}

export default Dashboard;