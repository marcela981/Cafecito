type SectionHeaderProps = {
    title: string;
    subtitle?: string;
  };
  
  export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }