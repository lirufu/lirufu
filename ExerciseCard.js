import Link from 'next/link';
import PropTypes from 'prop-types';

export default function ExerciseCard({ exercise }) {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-50 to-gray-50 border-b p-4">
        <h3 className="text-xl font-bold text-gray-800">{exercise.title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-2">{exercise.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{exercise.date}</span>
          <Link legacyBehavior href={`/exercises/${exercise.id}`}>
            <a className="text-blue-500 hover:text-blue-700">查看练习</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
};
