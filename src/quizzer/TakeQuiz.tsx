import React from "react"; //Add use State back later
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
    questionList[0]; //Remove later
    return (
        <div>
            {printQuestions}
            <button onClick={() => setCurrQuiz(-1)}>End Quiz</button>
        </div>
    );
}
