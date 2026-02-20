"use client"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <button onClick={() => signIn("github", { callbackUrl: "/" })}>
        Entrar con GitHub
      </button>
    </div>
  )
}