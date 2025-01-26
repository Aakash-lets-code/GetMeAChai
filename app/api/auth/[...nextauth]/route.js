import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose"
import User from '@/models/User';
import Payment from '@/models/Payment';

export const authOption = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        //connect to the database
        const client = await mongoose.connect("mongodb://localhost:27017/chai")
        // check if the user already exists in the databaseconst userExists = await User.findOne({ githubId: user.id })
        const currentUser = User.findone({ email: email })
        if (!currentUser) {
          // if the user doesn't exist, create a new user
          const newUser = new User({
            email: email,
            username: email.split("@")[0]
          })
          await newUser.save()
          user.name = newUser.username
        }
        else{
          user.name = currentUser.username
        }
      }
    }
  }
});

export { authOption as GET, authOption as POST }