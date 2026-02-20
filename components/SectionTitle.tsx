interface SectionTitleProps {
  title: string;
  textContent?: string;
};

export default function SectionTitle({title, textContent}: SectionTitleProps) {

  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-prinary">{title}</h2>
      { textContent && 
        <p className="mt-1 text-lower-text">{textContent}</p>
      }
    </div>
  );



}