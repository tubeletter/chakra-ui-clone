//import { abcd } from './test1';
import styles from './test.module.css';
import styles2 from './test.module.scss';
//import styles2 from './'
//import styles from './test.module.scss'

export const Test = () => {
  return (
    <>
      <div>hi</div>
      <div className={styles.test}>test.module.css</div>
      <div className={styles2.test}>test.module.scss</div>
    </>
  );
};
