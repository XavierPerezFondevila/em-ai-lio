import { Mail } from "lucide-react"


export default function TemplatePreview() {

  const selectedTemplate = undefined;

  if(!selectedTemplate) {
   return (
      <div className="mt-4 flex h-full flex-col items-center justify-center rounded-lg border border-light bg-secondary/80 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-light/40">
          <Mail className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-foreground">
          No template selected
        </h3>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground leading-relaxed">
          Open a template from the list to see a live preview here.
        </p>
      </div>
    );
  }

  return "";
}