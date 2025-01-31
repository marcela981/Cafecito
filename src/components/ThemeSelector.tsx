import { coffeeColorPalettes } from "@/lib/theme/colorPalettes";

export default function ThemeSelector() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {coffeeColorPalettes.map((palette) => (
        <div 
          key={palette.name}
          className="p-6 rounded-lg shadow-lg"
          style={{
            backgroundColor: palette.colors.primary,
            color: palette.colors.text
          }}
        >
          <h3 className="text-xl font-bold mb-4">{palette.name}</h3>
          <p className="text-sm mb-4 opacity-90">{palette.description}</p>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: palette.colors.primary }} />
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: palette.colors.secondary }} />
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: palette.colors.accent }} />
          </div>
        </div>
      ))}
    </div>
  );
}