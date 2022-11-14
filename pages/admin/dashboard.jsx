// import { auth } from '../../firebase';
import { getAuth } from "firebase/auth"

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export const getServerSideProps = () => {
  const auth = getAuth();
  
  if (!auth.currentUser) {
    return {
      redirect: { destination: '/admin', permanent: false}
    }
  }

  return {
    props: {}
  }
}

export default Dashboard;