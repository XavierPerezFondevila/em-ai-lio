import TemplatePreviewer from "@/components/preview/TemplatePreviewerSection";
import TemplatesList from "@/components/lists/TemplatesList";

export default function Home() {
  return (
    <main className="flex w-full p-6 gap-6 bg-background h-[calc(100vh-69px)]">
      <div className="flex flex-col w-[60%] h-full overflow-hidden">
        <TemplatesList/>
      </div>
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <TemplatePreviewer/>
      </div>
    </main>
  );
}