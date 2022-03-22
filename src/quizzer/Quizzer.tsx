import React, { useState } from "react";
import { Question } from "./newQuestion";
import { QuizList } from "./QuizList";
import { TakeQuiz } from "./TakeQuiz";

export interface Quiz {
    title: string;
    description: string;
    length: number;
    questions: Question[];
}

const INITIAL_QUIZES: Quiz[] = [
    {
        title: "Testing Quiz",
        description: "Test Quiz for Testing",
        length: 1,
        questions: [
            {
                id: 5,
                name: "Test Question",
                body: "Testing Purposes",
                type: "multiple_choice_question",
                options: ["First", "Second", "Third", "Answer"],
                expected: "Answer",
                points: 1,
                published: true,
                answered: false
            }
        ]
    },
    {
        title: "Stuff",
        description: "Answer questions about stuff",
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
                    setScore={setScore}
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
