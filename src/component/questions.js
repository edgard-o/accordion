import React from 'react';
import Question from './question';

const Questions = ({ questions }) => {
    return (
        <section className='info'>
            <div>
                {questions.map((question) => {
                    return <Question key={question.id} {...question} />
                })}
            </div>
        </section>
    )
};

export default Questions;