
import React from 'react';
import { Question, Option } from '../types';

interface QuestionCardProps {
    question: Question;
    onAnswer: (optionIndex: number) => void;
    userAnswer: number | null;
    showFeedback: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, userAnswer, showFeedback }) => {
    const correctOptionIndex = question.options.findIndex(opt => opt.is_correct);

    const getOptionClass = (index: number) => {
        let classes = 'p-4 border-2 rounded-lg cursor-pointer transition duration-150 flex items-start';
        if (!showFeedback) {
            if (userAnswer === index) {
                return `${classes} border-indigo-500 bg-indigo-50 ring-2 ring-indigo-300`;
            }
            return `${classes} border-gray-300 hover:bg-gray-100`;
        }
        
        // With feedback
        if (index === correctOptionIndex) {
            return `${classes} border-green-500 bg-green-50 cursor-not-allowed`;
        }
        if (index === userAnswer) {
            return `${classes} border-red-500 bg-red-50 cursor-not-allowed`;
        }
        return `${classes} border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed`;
    };

    return (
        <div>
            <div className="mb-6 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg font-semibold text-gray-800">{question.question_vn}</p>
                <p className="text-sm italic text-gray-600 mt-1">{question.question_en}</p>
            </div>

            <div className="space-y-4">
                {question.options.map((option, index) => (
                    <div key={index} className={getOptionClass(index)} onClick={() => onAnswer(index)}>
                        <span className="font-bold text-indigo-700 mr-3">{String.fromCharCode(65 + index)}.</span>
                        <div>
                           <p className="font-medium text-gray-800">{option.text_vn}</p>
                           <p className="text-sm text-gray-500 italic">{option.text_en}</p>
                        </div>
                    </div>
                ))}
            </div>

            {showFeedback && (
                <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <h3 className={`font-bold text-lg mb-3 ${userAnswer === correctOptionIndex ? 'text-green-700' : 'text-red-700'}`}>
                       {userAnswer === correctOptionIndex ? 'Chính xác!' : 'Chưa chính xác'}
                    </h3>
                    <div className="text-sm space-y-4">
                        <p>
                            <span className="font-semibold text-gray-700">Đáp án đúng là:</span>
                            <span className="ml-2 font-bold text-green-800">{String.fromCharCode(65 + correctOptionIndex)}. {question.options[correctOptionIndex].text_vn}</span>
                        </p>
                        <div>
                            <p className="font-semibold text-gray-700 mb-1">Giải thích (VN):</p>
                            <p className="text-gray-800 pl-2 border-l-2 border-indigo-200">{question.explanation_vn}</p>
                        </div>
                         <div>
                            <p className="font-semibold text-gray-700 mb-1">Explanation (EN):</p>
                            <p className="text-gray-800 pl-2 border-l-2 border-indigo-200 italic">{question.explanation_en}</p>
                        </div>
                        <p className="text-xs text-gray-500 pt-2 border-t mt-4">
                            Nguồn: <span className="font-medium">{question.citation}</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
