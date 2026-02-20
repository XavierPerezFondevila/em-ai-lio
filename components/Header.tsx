
export default function Header(){

  
  return (
  <header className="py-4 px-6 border-light border-b bg-secondary">
    <div className="flex justify-between max-w-3xl mx-auto">
      <div className="flex gap-3 items-center">
        <div className="flex w-9 h-9 w-9 rounded-md bg-primary items-center justify-center text-background">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5 text-primary-foreground"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        </div>
        <h1 className="text-lg font-medium">EM-AI-LIO generator</h1>
      </div>
      <button className="flex gap-2">
        <span className="text-md">Login</span>
      </button>
    </div>
  </header>);
}