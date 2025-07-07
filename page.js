import { exercises } from '@/data/exercises';

export default function ExercisePage({ params }) {
  const exercise = exercises.find(ex => ex.id.toString() === params.id);
  
  if (!exercise) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">练习不存在</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{exercise.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        {exercise.content}
      </div>
    </div>
  );
}