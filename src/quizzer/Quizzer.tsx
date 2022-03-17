import React, { useState } from "react";
import { Question } from "../interfaces/question";
import { QuizList } from "./QuizList";
import { TakeQuiz } from "./TakeQuiz";

export interface Quiz {
    title: string;
    discription: string;
    length: number;
    questions: Question[];
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
    const [score, setScore] = useState<number>(0);

    return (
        <div>
            {currQuiz === -1 ? (
                <QuizList
                    quizes={quizes}
                    setCurrQuiz={setCurrQuiz}
                    setQuizes={setQuizes}
                    score={score}
                ></QuizList>
            ) : (
                <TakeQuiz
                    setCurrQuiz={setCurrQuiz}
                    quizes={quizes}
                    setQuizes={setQuizes}
                    currQuiz={currQuiz}
                    score={score}
                    setScore={setScore}
                ></TakeQuiz>
            )}
        </div>
    );
}
