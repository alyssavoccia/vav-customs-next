import { useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import SignIn from '../components/admin/SignIn';

const Admin = () => {
  const router = useRouter();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('logged in')
          router.push('/admin/dashboard');
        } else {
          router.push('/admin');
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  return (
    <section>
      <SignIn />
    </section>
  )
}

export default Admin;