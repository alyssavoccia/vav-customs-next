import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import Image from 'next/image';
import miniDarkLogo from '../../static/mini-logo-dark.png';
import styles from '../../styles/SignIn.module.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const onSubmit = async (e) => {
    console.log('here')
    e.preventDefault();

    try {
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      toast.error('Incorrect login information');
    } 
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.header}>
        <Image src={miniDarkLogo} alt='VAV Customs Logo' width={361} height={202} />
        <h1>Sign in to your account</h1>
      </div>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={onSubmit}>
          <input className={styles.formInput} type='email' name='email' id='email' placeholder='Email' onChange={onChange} />
          <input className={styles.formInput} type='password' name='password' id='password' placeholder='Password' onChange={onChange} />
          <button className={styles.formButton} type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;