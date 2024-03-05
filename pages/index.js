import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const myLoader = ({ src, width, quality }) => {
    return `https://avatars.githubusercontent.com/u/18418340?v=4`
  }
  return (
    <>
      <Head>
        <title>Salman Qureshi - All Links</title>
        <meta name="description" content="All Links of Salman Qureshi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <div className='w-[350px] md:w-[700px]'>
          {/* header image  */}
          <div className='w-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl'>
            <div style={{height: 150}}>
            </div>
          </div>

          <div className='grid place-content-center' style={{marginTop: -50}}>
          <Image
            loader={myLoader}
            src="me.png"
            style={{allignSelf: 'center'}}
            className='rounded-full shadow-2xl shadow-cyan-500/50 md:w-[150px] md:h-[150px] sm:w-[100px]'
            alt="Picture Salman's Avtar"
            width={100}
            height={100}
          />
          </div>
          <div style={{marginTop: 60}}></div>
          <div className='text-center' style={{marginTop: -50}}>
          <h1 style={{fontSize: 40}}>Salman Qureshi</h1>
          <p>Full Stack <span className='underline decoration-indigo-500'>Developer</span>, from <span className='underline decoration-red-500'>Kashmir</span> </p>
          <p>I like <span className='underline decoration-yellow-500'>coding</span>, <span className='underline decoration-pink-500'>gaming</span>, <span className='underline decoration-green-500'>DIY projects</span> &amp; I am inspired by <span className='underline decoration-sky-500'>Blockchain</span></p>
          </div>

          <div className='grid place-content-center my-12'>
            <div>
                <ul className='grid grid-flow-row auto-cols-max'>
                  <li style={{marginTop: 0}}>
                    <a href="https://tools.isalman.dev?ref=2023-homepage" target='_BLANK' rel="noreferrer" className="flex rounded-sm py-2 px-10 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500">🛠️ My Deployed Tools </a>
                  </li>
                  <li style={{marginTop: 20}}>
                    <a href="https://blog.isalman.dev?ref=2023-homepage" target='_BLANK' rel="noreferrer" className="flex rounded-sm py-2 px-10 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500">📃 Check Out My Blog </a>
                  </li>
                  <li style={{marginTop: 20}}>
                    <a href="https://play.google.com/store/apps/developer?id=Salman+Qureshi" target='_BLANK' rel="noreferrer" className="flex rounded-sm py-2 px-10 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500">📱 My Apps on Play Store </a>
                  </li>
                  <li style={{marginTop: 20}}>
                    <a href="https://github.com/hotheadhacker" target='_BLANK' rel="noreferrer" className="flex rounded-sm py-2 px-10 text-lg bg-gradient-to-r from-red-500 to-amber-500 rounded-lg hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500">🧑‍💻 My Open Source Work</a>
                  </li>
                  <li style={{marginTop: 20}}>
                    <a href="https://calendly.com/isalman-dev/30min" target='_BLANK' rel="noreferrer" className="flex rounded-sm py-2 px-10 text-lg bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500">💡 Have idea? Let&apos;s Discuss</a>
                  </li>
                  <li style={{marginTop: 20}}>
                    <a href="https://opensea.io/assets/matic/0xb9e006e2f14579b2bbef21494c8cad2af71b1265/2" target='_BLANK' rel="noreferrer" className="flex rounded-sm py-2 px-10 text-lg bg-gradient-to-r from-tomato-500 to-yellow-500 rounded-lg hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500">🖼️ NFT </a>
                  </li>
                </ul>
            </div>
          </div>

          <div style={{marginTop: 100}} className='grid place-content-center'><p>Designed By: <a href='https://github.com/hotheadhacker' target='_BLANK' rel="noreferrer" className='text-blue-600'>Salman Qureshi</a> - <a rel="me" href="https://infosec.exchange/@hotheadhacker">Mastodon</a></p></div>
       </div>
      </main>
    </>
  )
}
