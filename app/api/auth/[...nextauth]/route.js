import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectionToDB } from '@/utils/database'
import User from '@/models/user'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin"
            return token
        },
        async signIn({ profile }) {
            try {
                await connectionToDB()

                const userExists = await User.findOne({
                    email: profile.email
                })

                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(/\s/g, "").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true
            }
            catch (error) {
                console.log(error)
                return false
            }
        }
    },
})

export { handler as GET, handler as POST }

