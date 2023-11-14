import React, { useState, useEffect } from 'react';
import QuestionCard from '../src/components/QuestionCard';

const IndexPage = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        //fetch questions from the API
        fetch('/api/questions')
        .then((response) => response.json())
        .then((data) => setQuestions(data))
        .catch((error) => console.error('Error fetching questions:', error));
    }, []);
    //...rest of the code
};

export default IndexPage;