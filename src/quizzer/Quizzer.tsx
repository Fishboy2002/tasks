import React, { useState } from "react";
import { QuestionType } from "../interfaces/question";
import { QuizList } from "./QuizList";
import { TakeQuiz } from "./TakeQuiz";

export interface Quiz {
    title: string;
    discription: string;
    length: number;
    questions: QuestionType[];
}

const INITIAL_QUIZES: Quiz[] = [
    {
        title: "Test",
        discription: "Simple Test for stuff",
        length: 0,
        questions: []
    },
    {
        title: "Stuff",
        discription: "Answer questions about stuff",
        length: 0,
        questions: []
    }
];

export function Quizzer(): JSX.Element {
    const [quizes, setQuizes] = useState<Quiz[]>(INITIAL_QUIZES);
    const [currQuiz, setCurrQuiz] = useState<number>(-1);

    return (
        <div>
            {currQuiz === -1 ? (
                <QuizList
                    quizes={quizes}
                    setCurrQuiz={setCurrQuiz}
                    setQuizes={setQuizes}
                ></QuizList>
            ) : (
                <TakeQuiz
                    questionList={quizes[currQuiz].questions}
                    setCurrQuiz={setCurrQuiz}
                ></TakeQuiz>
            )}
        </div>
    );
}
