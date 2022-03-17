import React from "react";
import { Question } from "../interfaces/question";

interface quizQuestionProp {
    // The type is "a function that consumes a boolean and returns nothing"
    ques: Question;
    score: number;
    setScore: (newScore: number) => void;
}
export function QuizQuestion({
    ques,
    score,
    setScore
}: quizQuestionProp): JSX.Element {
    setScore(score);
    return (
        <div>
            This Question can not yet be taken. Ignore this: {ques.body},{" "}
            {score}
        </div>
    );
}
