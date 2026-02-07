import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const LessonCard = ({ lesson, completed, onOpen }) => {
  return (
    <Card className="relative">
      {completed && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          ✓ Completed
        </div>
      )}
      <div className="mb-4">
        <img
          src={lesson.thumbnail || '/placeholder-lesson.jpg'}
          alt={lesson.title}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
      <p className="text-gray-600 mb-4">{lesson.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {lesson.duration} mins
        </span>
        <span className={`text-sm px-2 py-1 rounded ${
          lesson.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
          lesson.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {lesson.difficulty}
        </span>
      </div>
      <Button onClick={onOpen} className="w-full mt-4">
        {completed ? 'Review' : 'Start Lesson'}
      </Button>
    </Card>
  );
};

export default LessonCard;
