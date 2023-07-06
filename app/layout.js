import './globals.css'
import Provider from '@/components/Provider'
import { Space_Grotesk } from 'next/font/google'
const font = Space_Grotesk({ subsets: ['latin'], weight : ['400'] })

export const metadata = {
  title: 'Bookie',
  description: 'A bookstore application.',
}

const Root = ({ children }) => {
    return (
        <html lang='en'>
            <body className={font.className}>
                <Provider>
                    <div className=' p-4 m-4 border '>
                      {children}
                    </div>
                </Provider>
            </body>
        </html>
    )
}

export default Root
