// FeatureCard.jsx
export default function FeatureCard({
  icon,
  title,
  description,
  linkText,
  linkColor,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center max-w-sm">
      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
        style={{ backgroundColor: `${linkColor}15` }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Link */}
      <a
        href="#"
        className="font-medium flex items-center gap-1"
        style={{ color: linkColor }}
      >
        {linkText} →
      </a>
    </div>
  );
}
