import { ReactNode } from "react";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageTemplate = ({ title, subtitle, children }: PageTemplateProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
