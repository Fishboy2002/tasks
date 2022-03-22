import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "./newQuestion";
import { Quiz } from "./Quizzer";

interface setQuizProp {
    // The type is "a function that consumes a boolean and returns nothing"
    quizes: Quiz[];
    setCurrQuiz: (newQuiz: number) => void;
    setQuizes: (newQuizes: Quiz[]) => void;
    score: number;
    setScore: (newScore: number) => void;
}
function setAnswered(
    question: Question,
    score: number,
    setScore: (newScore: number) => void
): Question {
    setScore(score - question.points);
    return { ...question, answered: false };
}
function clearHelp(
    quizes: Quiz[],
    quiz: Quiz,
    curr: Quiz,
    score: number,
    setScore: (newScore: number) => void
): Quiz {
    return {
        ...curr,
        questions: curr.questions.map(
            (question: Question): Question =>
                question.answered
                    ? setAnswered(question, score, setScore)
                    : question
        )
    };
}

function clearAnswers(
    quizes: Quiz[],
    quiz: Quiz,
    setQuizes: (newQuizes: Quiz[]) => void,
    score: number,
    setScore: (newScore: number) => void
) {
    setQuizes(
        quizes.map(
            (curr: Quiz): Quiz =>
                curr === quiz
                    ? clearHelp(quizes, quiz, curr, score, setScore)
                    : curr
        )
    );
}

export function QuizList({
    quizes,
    setCurrQuiz,
    setQuizes,
    score,
    setScore
}: setQuizProp): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setdescription] = useState<string>("");

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
                    description: {quiz.description}
                </div>
                <div>Total number of Questions: {quiz.length}</div>
                <button
                    style={{ backgroundColor: "royalblue" }}
                    onClick={() =>
                        clearAnswers(quizes, quiz, setQuizes, score, setScore)
                    }
                >
                    Clear Answers
                </button>
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
    function add_Quiz(): JSX.Element {
        return (
            <div>
                <Form.Group controlId="formQuizTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setTitle(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formQuizdescription">
                    <Form.Label>description:</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setdescription(event.target.value)}
                    />
                </Form.Group>
                <button
                    onClick={() =>
                        setQuizes([
                            ...quizes,
                            {
                                title: title,
                                description: description,
                                length: 0,
                                questions: []
                            }
                        ])
                    }
                >
                    Add Quiz
                </button>
            </div>
        );
    }
    return (
        <div>
            <h3>You have currently scored {score} points</h3>
            {quizes.map((quiz: Quiz): JSX.Element => print_Quiz(quiz))}
            {edit && add_Quiz()}
            <div>
                <button onClick={() => setEdit(!edit)}>Edit Mode</button>
            </div>
        </div>
    );
}
