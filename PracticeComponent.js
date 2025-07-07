'use client';
import React from 'react';

export default function PracticeComponent() {
  const exercises = [
    { id: 1, title: 'React基础练习', link: '/exercises/react-basic' },
    { id: 2, title: '状态管理练习', link: '/exercises/state-management' },
    { id: 3, title: '组件通信练习', link: '/exercises/component-communication' }
  ];

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">练习列表</h2>
      <ul className="space-y-2">
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <a 
              href={exercise.link} 
              className="text-blue-600 hover:underline"
            >
              {exercise.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}