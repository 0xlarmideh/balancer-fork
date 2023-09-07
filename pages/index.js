import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FilledButton } from '@/components/_common/Buttons'
import Navbar from '@/components/Layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        {/* <FilledButton text='Connect wallet' /> */}
        <Navbar />
      </main>
    </>
  )
}
