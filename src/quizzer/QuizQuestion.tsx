import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "./newQuestion";
import { Quiz } from "./Quizzer";

interface quizQuestionProp {
    // The type is "a function that consumes a boolean and returns nothing"
    quizes: Quiz[];
    setQuizes: (newQuiz: Quiz[]) => void;
    currQuiz: number;
    ques: Question;
    score: number;
    setScore: (newScore: number) => void;
}
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
function correctHelp(curr: Quiz, quizes: Quiz[], ques: Question): Quiz {
    return {
        ...curr,
        questions: curr.questions.map(
            (q: Question): Question =>
                q === ques ? { ...q, answered: true } : q
        )
    };
}
function correct(
    { quizes, setQuizes, currQuiz, ques, score, setScore }: quizQuestionProp,
    choice: string
): string {
    if (choice === ques.expected) {
        if (ques.answered) {
            return "✔️";
        }
        setQuizes(
            quizes.map(
                (curr: Quiz): Quiz =>
                    curr === quizes[currQuiz]
                        ? correctHelp(curr, quizes, ques)
                        : curr
            )
        );
        const newScore: number = score + ques.points;
        setScore(newScore);
        return "✔️";
    }
    return "❌";
}
export function QuizQuestion({
    quizes,
    setQuizes,
    currQuiz,
    ques,
    score,
    setScore
}: quizQuestionProp): JSX.Element {
    const [choice, setChoice] = useState<string>("");
    return ques.type === "multiple_choice_question" ? (
        <div>
            {ques.answered
                ? "You have already answered this question"
                : "This question has not yet been answered"}
            <Form.Group controlId="answers">
                <Form.Label>Choose an answer</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event: ChangeEvent) =>
                        setChoice(event.target.value)
                    }
                >
                    {ques.options.map((val: string) => (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {correct(
                {
                    quizes,
                    setQuizes,
                    currQuiz,
                    ques,
                    score,
                    setScore
                },
                choice
            )}
        </div>
    ) : (
        <div>
            {ques.answered
                ? "You have already answered this question"
                : "This question has not yet been answered"}
            <Form.Group controlId="answers">
                <Form.Label>Input your answer:</Form.Label>
                <Form.Control
                    value={choice}
                    onChange={(event: ChangeEvent) =>
                        setChoice(event.target.value)
                    }
                />
            </Form.Group>
            {correct(
                {
                    quizes,
                    setQuizes,
                    currQuiz,
                    ques,
                    score,
                    setScore
                },
                choice
            )}
        </div>
    );
}
