import { useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Admin = () => {
  const router = useRouter();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/admin/dashboard');
        } else {
          router.push('/admin');
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  return (
    <div>Admin</div>
  )
}

export default Admin;