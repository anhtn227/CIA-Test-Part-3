
import React, { useState, useEffect } from 'react';
import { Question } from './types';
import { getQuestions } from './services/geminiService';
import LoadingSpinner from './components/LoadingSpinner';
import QuestionCard from './components/QuestionCard';

type ExamStatus = 'menu' | 'loading' | 'in_progress' | 'finished';

const App: React.FC = () => {
    const [examStatus, setExamStatus] = useState<ExamStatus>('menu');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [showFeedback, setShowFeedback] = useState(false);
    
    // Config state
    const [unit, setUnit] = useState('all');
    const [count, setCount] = useState(10);
    const [score, setScore] = useState(0);

    const startExam = async () => {
        setExamStatus('loading');
        const fetchedQuestions = await getQuestions(unit, count);
        setQuestions(fetchedQuestions);
        setUserAnswers(new Array(fetchedQuestions.length).fill(null));
        setCurrentQuestionIndex(0);
        setShowFeedback(false);
        setScore(0);
        setExamStatus('in_progress');
    };

    const handleAnswer = (optionIndex: number) => {
        if (showFeedback) return;
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newAnswers);
        setShowFeedback(true);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowFeedback(false);
        } else {
            finishExam();
        }
    };
    
    const finishExam = () => {
        let correctCount = 0;
        questions.forEach((q, index) => {
            const correctIndex = q.options.findIndex(opt => opt.is_correct);
            if (userAnswers[index] === correctIndex) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setExamStatus('finished');
    };

    const restartExam = () => {
        setExamStatus('menu');
    };

    const renderContent = () => {
        switch (examStatus) {
            case 'loading':
                return <div className="flex justify-center items-center p-10"><LoadingSpinner /></div>;
            case 'in_progress':
                return (
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-indigo-700">
                                Câu hỏi {currentQuestionIndex + 1}/{questions.length}
                            </h2>
                            <button onClick={finishExam} className="text-sm text-red-500 hover:text-red-700 font-medium transition duration-150">
                                Kết thúc sớm
                            </button>
                        </div>
                        <QuestionCard
                            question={questions[currentQuestionIndex]}
                            onAnswer={handleAnswer}
                            userAnswer={userAnswers[currentQuestionIndex]}
                            showFeedback={showFeedback}
                        />
                        {showFeedback && (
                             <button onClick={handleNext} className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-150 font-semibold shadow-md">
                                {currentQuestionIndex < questions.length - 1 ? 'Câu Tiếp Theo' : 'Hoàn Thành Bài Thi'}
                            </button>
                        )}
                    </div>
                );
            case 'finished':
                 const percentage = (score / questions.length) * 100;
                 const passed = percentage >= 80;
                return (
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Kết Quả Bài Thi</h2>
                        <div className={`p-6 rounded-lg mb-6 ${passed ? 'bg-green-50' : 'bg-red-50'}`}>
                            <p className={`text-xl font-semibold mb-2 ${passed ? 'text-green-700' : 'text-red-700'}`}>
                                {passed ? 'Chúc Mừng! Bạn Đã Đạt' : 'Cần Cố Gắng Thêm!'}
                            </p>
                            <p className="text-6xl font-extrabold text-gray-800">{score}/{questions.length}</p>
                            <p className="text-2xl font-medium mt-2 text-gray-600">({percentage.toFixed(0)}%)</p>
                        </div>
                        <button onClick={restartExam} className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-150 font-semibold shadow-md">
                            Làm bài khác
                        </button>
                    </div>
                );
            case 'menu':
            default:
                return (
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">Cấu Hình Bài Luyện Tập</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                             <div>
                                <label htmlFor="unit-select" className="block text-sm font-medium text-gray-700 mb-2">Chọn Chủ Đề (Unit)</label>
                                <select id="unit-select" value={unit} onChange={(e) => setUnit(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
                                    <option value="all">Tất Cả</option>
                                    <option value="governance">Quản trị (Governance)</option>
                                    <option value="risk_management">Quản lý Rủi ro (Risk Mgmt)</option>
                                    <option value="it_governance">Quản trị CNTT (IT Gov)</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="question-count" className="block text-sm font-medium text-gray-700 mb-2">Số Lượng Câu Hỏi</label>
                                <select id="question-count" value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
                                    <option value="5">5 Câu</option>
                                    <option value="10">10 Câu</option>
                                    <option value="25">25 Câu</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={startExam} className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-150 font-semibold text-lg shadow-md">
                            Bắt Đầu
                        </button>
                    </div>
                );
        }
    };
    
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-indigo-800 tracking-tight">Luyện Thi CIA Part 3</h1>
                <p className="mt-2 text-lg text-gray-600">Công cụ luyện tập câu hỏi trắc nghiệm</p>
            </header>
            <main>
                {renderContent()}
            </main>
        </div>
    );
};

export default App;
