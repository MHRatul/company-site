import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill= {true}
            alt="logo"
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='Name' className={styles.input} />
          <input type='text' placeholder='Email' className={styles.input} />
          <input type='text' placeholder='Subject' className={styles.input} />
          <textarea placeholder='Message' cols={30} rows={10} className={styles.textArea} />
          <Button className={styles.button} url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact