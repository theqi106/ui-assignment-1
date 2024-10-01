
import React, { useState } from 'react'
import { API_POST } from '../service/Quiz';
import { IQuestion } from '../constant/Question';

const QuestionForm:React.FC<{ quizId: string, setQuizD: (q: IQuestion) => void }> = ({quizId, setQuizD}) => {
    const [text, setText] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState<string>('0');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const question = { text, options, correctAnswerIndex };
        const quiz = await API_POST(`/quizzes/${quizId}/question`, question);
        setQuizD(quiz as unknown as IQuestion);
        setText('');
        setOptions(['', '', '', '']);
        setCorrectAnswerIndex('')
    };

    return (
        <form onSubmit={(e) => { handleSubmit(e); }}>
            <h2 className="text-center">Thêm Câu Hỏi</h2>
            <div className="mb-3 row">
            <label htmlFor="question" className="col-sm-2 col-form-label">Câu hỏi</label>
            <div className="col-sm-10">
                <input
                    id="question"
                    type="text"
                    className="form-control form-control-sm" // Thay đổi kích thước ô input
                    placeholder="Câu hỏi"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                />
            </div>
        </div>

        {options.map((option, index) => (
            <div className="mb-3 row" key={index}>
                <label htmlFor={`option-${index}`} className="col-sm-2 col-form-label">{`Lựa chọn ${index + 1}`}</label>
                <div className="col-sm-10">
                    <input
                        id={`option-${index}`}
                        type="text"
                        className="form-control form-control-sm" // Thay đổi kích thước ô input
                        placeholder={`Lựa chọn ${index + 1}`}
                        value={option}
                        onChange={e => {
                            const newOptions = [...options];
                            newOptions[index] = e.target.value;
                            setOptions(newOptions);
                        }}
                        required
                    />
                </div>
            </div>
        ))}

        <div className="mb-3 row">
            <label htmlFor="correct-answer-index" className="col-sm-2 col-form-label">Chỉ số câu trả lời đúng</label>
            <div className="col-sm-10">
                <input
                    id="correct-answer-index"
                    type="number"
                    className="form-control form-control-sm" // Thay đổi kích thước ô input
                    min="0"
                    max={options.length - 1}
                    value={correctAnswerIndex}
                    onChange={e => setCorrectAnswerIndex(e.target.value)}
                    required
                    placeholder="Chỉ số câu trả lời đúng"
                />
            </div>
        </div>

        <button className="btn btn-primary w-100" type="submit">Thêm Câu Hỏi</button>
        </form>
    );
};

export default QuestionForm;
