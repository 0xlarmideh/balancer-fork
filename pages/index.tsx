import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MaxWidth from '@/components/_common/MaxWidth'
import Header from '@/components/Pages Components/Pools/Header'
import Pools from '@/components/Pages Components/Pools/Pools'
import Layout from '@/components/Layout/Layout'
import { PoolStateContextProvider } from '@/context/PoolsContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PoolStateContextProvider>
      <Layout>
        <main>
          {/* <FilledButton text='Connect wallet' /> */}
          <MaxWidth>
            <Header />
            <Pools />
          </MaxWidth>
        </main>
      </Layout>
    </PoolStateContextProvider>
  );
}
