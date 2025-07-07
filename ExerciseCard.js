export default function ExerciseCard({ exercise }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
      <p className="text-gray-600 mb-4">{exercise.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {exercise.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <a 
        href={`/exercises/${exercise.id}`} 
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        开始练习
      </a>
    </div>
  );
}