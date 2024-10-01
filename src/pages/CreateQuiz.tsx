import React, { useState } from 'react';
import { API_POST } from '../service/Quiz';
import { IQuiz } from '../constant/Question';
import Header from '../components/Header';
import '../css/Quiz.css'
import { useNavigate } from 'react-router-dom';

const CreateQuiz: React.FC<{ setNewQuiz: (quiz: IQuiz) => void }> = ({ setNewQuiz }) => {

    const [ title, setTitle ] = useState<string>("");
    const [ description, setDescription ] = useState<string>("");
    const navigate = useNavigate();
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newQuiz = await API_POST('/quizzes', { title, description });
        setNewQuiz(newQuiz as unknown as IQuiz);
        navigate('/');
    };
    return (
        <div className='container'>
            <Header/>
        <form onSubmit={handleSubmit}>
            <h2>Tạo Quiz Mới</h2>
            <div className="mb-3 row">
    <label htmlFor="input-quiz" className="col-sm-2 col-form-label">Tiêu đề</label>
    <input
        className="form-control"
        type="text"
        placeholder="Tiêu đề"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        id="input-quiz"
    />
</div>

<div className="mb-3 row">
    <label htmlFor="text-area-quiz" className="col-sm-2 col-form-label">Mô tả</label>
    <textarea
        className="form-control"
        placeholder="Mô tả"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
        id="text-area-quiz"
    />
</div>
<button className="btn btn-success" type="submit">Tạo Quiz</button>
        </form>
        </div>
    );
};

export default CreateQuiz;
