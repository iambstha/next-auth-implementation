import Nav from '@/components/Nav'
import './globals.css'
import Provider from '@/components/Provider'
import { Space_Grotesk } from 'next/font/google'
import HeadProfile from '@/components/HeadProfile'
import Footer from '@/components/Footer'
const font = Space_Grotesk({ subsets: ['latin'], weight : ['400'] })

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  title: 'Next Auth Implemantation',
  description: 'A next auth implementation example website to test next auth features.',
}

const Root = ({ children }) => {
    return (
        <html lang='en'>
            <body className={font.className}>
                <Provider>
                    <div className=' flex flex-col w-full text-center p-2 '>
                        <h2 className=' text-2xl p-2 '>Next Auth Implementation for Stable <a target='_blank' className=' text-blue-500 hover:underline ' href="https://nextjs.org/docs/app/building-your-application/routing#the-app-router">App Router</a> </h2>
                        <p><span className=' text-red-500 font-semibold '>Alert: </span>Work in progress!!!</p>
                    </div>
                    <div className='p-2 md:p-4 m-2 md:m-4 flex flex-col w-ful '>
                      <HeadProfile />
                      <Nav />
                      {children}
                      <Footer />
                    </div>
                </Provider>
            </body>
        </html>
    )
}

export default Root
