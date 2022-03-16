import React, { useState } from "react";
import { Quiz } from "./Quizzer";

interface setQuizProp {
    // The type is "a function that consumes a boolean and returns nothing"
    quizes: Quiz[];
    setCurrQuiz: (newQuiz: number) => void;
    setQuizes: (newQuizes: Quiz[]) => void;
}
export function QuizList({
    quizes,
    setCurrQuiz,
    setQuizes
}: setQuizProp): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);

    function remove_Quiz(quiz: Quiz): void {
        setQuizes(quizes.filter((item: Quiz): boolean => item != quiz));
    }
    //Setup add quiz, maybe use another file

    function print_Quiz(quiz: Quiz): JSX.Element {
        return (
            <div>
                Title: {quiz.title}
                <div>
                    {edit && (
                        <button
                            style={{ backgroundColor: "red" }}
                            onClick={() => remove_Quiz(quiz)}
                        >
                            Delete Quiz
                        </button>
                    )}{" "}
                    Discription: {quiz.discription}
                </div>
                <div>Total number of Questions: {quiz.length}</div>
                <button
                    style={{ backgroundColor: "gold" }}
                    onClick={() =>
                        setCurrQuiz(
                            quizes.findIndex(
                                (check: Quiz): boolean => check === quiz
                            )
                        )
                    }
                >
                    Take Quiz
                </button>
            </div>
        );
    }
    return (
        <div>
            {quizes.map((quiz: Quiz): JSX.Element => print_Quiz(quiz))}
            <div>
                <button onClick={() => setEdit(!edit)}>Edit Mode</button>
            </div>
        </div>
    );
}
