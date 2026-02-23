"use client"
import Logo from "@/components/Logo"
import { signIn } from "next-auth/react"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="p-8 rounded-xl border border-light bg-white shadow-sm">
        <div className="flex flex-col items-center gap-4 mb-6">
          <Logo size={28} />
          <div className="text-center">
            <h1 className="text-xl font-medium font-montserrat">Em<span className="font-bold">AI</span>lio gener<span className="font-bold">AI</span>tor</h1>
            <div className="text-xs text-zinc-600 mt-1">Sign in to manage your email templates</div>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          className="w-full"
          icon={<Github size={18} />}
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          <span>Entrar con GitHub</span>
        </Button>
        <p className="text-xs text-zinc-600 mt-6 text-center">By signing in, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </main>
  )
}