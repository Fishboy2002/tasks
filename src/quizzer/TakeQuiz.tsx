import React, { useState } from "react";
import { QuestionType } from "../interfaces/question";

interface takeQuizProp {
    // The type is "a function that consumes a boolean and returns nothing"
    questionList: QuestionType[];
    setCurrQuiz: (newQuiz: number) => void;
}
function printQuestions(): JSX.Element {
    return <div></div>;
}

export function TakeQuiz({
    questionList,
    setCurrQuiz
}: takeQuizProp): JSX.Element {
    return (
        <div>
            {printQuestions}
            <button onClick={() => setCurrQuiz(-1)}>End Quiz</button>
        </div>
    );
}
