import { auth } from '../../firebase';

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export const getServerSideProps = () => {
  if (!auth.user) {
    return {
      redirect: { destination: '/admin', permanent: false}
    }
  }

  return {
    props: {}
  }
}

export default Dashboard;