import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1>Better design for your digital products.</h1>
        <p>
          Turning your idea into Reality. We bring together the teams from the global tech industry.
        </p>
      </div>
      <div className={styles.imgContainer}></div>
      <Image src="/hero.png" width={500} height={500} alt="" className={styles.img} />
    </div>
  );
}

