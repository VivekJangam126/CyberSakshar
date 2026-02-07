import React, { useState, useEffect } from 'react';
import { learningAPI } from './learningAPI';
import LessonCard from './LessonCard';
import Modal from '../../components/Modal';
import Button from '../../components/Button';

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLessons();
  }, []);

  const loadLessons = async () => {
    try {
      const data = await learningAPI.getLessons();
      setLessons(data.lessons);
      setCompletedLessons(data.completed || []);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load lessons:', error);
      setLoading(false);
    }
  };

  const openLesson = (lesson) => {
    setSelectedLesson(lesson);
    setShowModal(true);
  };

  const completeLesson = async () => {
    try {
      await learningAPI.completeLesson(selectedLesson.id);
      setCompletedLessons([...completedLessons, selectedLesson.id]);
      setShowModal(false);
      setSelectedLesson(null);
    } catch (error) {
      console.error('Failed to complete lesson:', error);
    }
  };

  if (loading) return <div className="text-center p-8">Loading lessons...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cybersecurity Lessons</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              completed={completedLessons.includes(lesson.id)}
              onOpen={() => openLesson(lesson)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={selectedLesson?.title}
      >
        <div>
          <div className="mb-4">
            <img
              src={selectedLesson?.image || '/placeholder-lesson.jpg'}
              alt={selectedLesson?.title}
              className="w-full rounded-lg"
            />
          </div>
          <div className="prose max-w-none">
            {selectedLesson?.content}
          </div>
          <div className="mt-4 flex justify-end">
            <Button onClick={completeLesson}>
              Mark as Complete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Lessons;
