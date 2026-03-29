'use client'

import { sendGTMEvent } from "@next/third-parties/google";
import { signIn, signOut, useSession } from "next-auth/react"


export function Button() {
    const {data: session} = useSession();

    if (session?.user) {
    return (
      
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " onClick={() => signOut()}>Sign out</button>
      
    )
  }
  return (
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => {
        signIn()
        sendGTMEvent({ event: 'sign_in', sign_in_method: 'github'})
      } }>Sign in</button>
  )
}