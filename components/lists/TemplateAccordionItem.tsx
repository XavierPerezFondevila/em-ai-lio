"use client"

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Badge from "../ui/badge"

interface TemplateAccordionItemProps {
  id: number
  name: string
  subject: string
  content: string
  isOpen: boolean
  onToggle: (id: number) => void
  onContentChange: (content: string) => void
}

export function TemplateAccordionItem({
  id,
  name,
  subject,
  content,
  isOpen,
  onToggle,
  onContentChange,
}: TemplateAccordionItemProps) {
  return (
    <div className="w-full flex-shrink-0 first:rounded-t-md last:rounded-b-md overflow-hidden border-x border-t last:border-b border-light">
      <button
        type="button"
        role="button"
        aria-expanded={isOpen}
        onClick={() => onToggle(id)}
        className={cn(
          "flex w-full items-center justify-between px-5 py-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer",
          isOpen ? "bg-secondary/60" : "bg-secondary/80"
        )}
      >
        <div className="flex items-center gap-3">
          <ChevronRight
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-90"
            )}
          />
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <Badge className="font-mono text-xs">
          ID: <span className="ml-2">{id}</span>
        </Badge>
      </button>

      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden bg-secondary/60">
          <div className="p-4 pt-0">
            caca
          </div>
        </div>
      </div>
    </div>
  )
}