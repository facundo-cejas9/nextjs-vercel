
import Head from "next/head"
import { NavBar } from "../NavBar"
import styles from "./MainLayout.module.css"
import  { FC, PropsWithChildren } from 'react'

export const MainLayout: FC <PropsWithChildren>  = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Next js testing</title>
            <meta name="description" content="Home page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar    />
    
          <main className={styles.main}>
    
                { children }
           
            
          </main>
    
         
        </div>
      )
}

