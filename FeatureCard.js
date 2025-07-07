export default function FeatureCard({ icon, title, description, linkText, linkHref, color }) {
  return (
    <div className={`bg-${color}-100 p-6 rounded-lg shadow-md`}>
      <div className="flex items-center mb-4">
        <div className={`bg-${color}-500 p-2 rounded-full mr-4`}>
          {/* 这里可以放置图标 */}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mb-4">{description}</p>
      {linkText && (
        <a href={linkHref} className={`text-${color}-600 hover:text-${color}-800 font-medium`}>
          {linkText}
        </a>
      )}
    </div>
  );
}