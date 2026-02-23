import { Brain } from "lucide-react";

export default function Logo({size} : {size: number}) {
  
  return (
    <div className="rounded-2xl p-4 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 shadow-lg shadow-slate-800/60">
      <Brain size={size} className="text-cyan-400" />
    </div>
  );

}