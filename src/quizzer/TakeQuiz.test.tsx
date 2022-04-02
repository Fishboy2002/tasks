import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import userEvent from "@testing-library/user-event";

describe("TakeQuiz Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
        const takeQuizButton = screen.getAllByRole("button", {
            name: /Take Quiz/i
        });
        takeQuizButton[0].click();
    });
    test("The test question name is displayed", () => {
        expect(screen.getByText(/Test Question/i)).toBeInTheDocument();
    });
    test("The test question body is displayed", () => {
        expect(screen.getByText(/Testing Purposes/i)).toBeInTheDocument();
    });
    test("The test question point value is displayed", () => {
        expect(screen.getByText(/Worth 1 Points/i)).toBeInTheDocument();
    });
    test("The test question point value is displayed", () => {
        const editButton = screen.getByRole("button", {
            name: /Edit Questions/i
        });
        editButton.click();
        expect(
            screen.getByRole("combobox", {
                name: /Multiple Choice or Short Answer?/i
            })
        ).toBeInTheDocument();
    });
    test("Questions can be either multiple choice or short answer", () => {
        const editButton = screen.getByRole("button", {
            name: /Edit Questions/i
        });
        editButton.click();
        const typeDropdown = screen.getByRole("combobox", {
            name: /Multiple Choice or Short Answer?/i
        });
        userEvent.selectOptions(typeDropdown, "Multiple Choice");
        expect(screen.getAllByText(/Multiple Choice/i).length >= 2);
        userEvent.selectOptions(typeDropdown, "Short Answer");
        expect(screen.getAllByText(/Short Answer/i).length >= 2);
    });
    test("Testing adding a multiple choice question", () => {
        const editButton = screen.getByRole("button", {
            name: /Edit Questions/i
        });
        editButton.click();
        const typeDropdown = screen.getByRole("combobox", {
            name: /Multiple Choice or Short Answer?/i
        });
        userEvent.selectOptions(typeDropdown, "Multiple Choice");
        const nameBox = screen.getByRole("textbox", { name: /Name:/i });
        userEvent.type(nameBox, "Second Question for Testing");
        const descBox = screen.getByRole("textbox", {
            name: "Description/Body:"
        });
        userEvent.type(descBox, "Second Question body");
        const answerBox = screen.getByRole("textbox", {
            name: /Expected Answer:/i
        });
        userEvent.type(answerBox, "No Answer");
        const points = screen.getByRole("spinbutton", {
            name: /How many Points is this question worth?/i
        });
        userEvent.type(points, "10");
        const addOption = screen.getByRole("button", {
            name: /Add Option/i
        });
        const optionBox = screen.getByRole("textbox", {
            name: "Multiple Choice Option:"
        });
        userEvent.type(optionBox, "Option 1");
        addOption.click();
        const addQues = screen.getByRole("button", {
            name: /Add Question/i
        });
        addQues.click();
        expect(
            screen.getByText(/Second Question for Testing/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/Second Question Body/i)).toBeInTheDocument();
        expect(screen.getByText(/Worth 10 Points/i)).toBeInTheDocument();
    });
    test("Multiple Choice Questions can be answered", () => {
        const typeDropdown = screen.getByRole("combobox", {
            name: /Choose an answer/i
        });
        expect(
            screen.getAllByText(/This question has not yet been answered/i)
                .length >= 2
        );
        userEvent.selectOptions(typeDropdown, "Answer");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        userEvent.selectOptions(typeDropdown, "First");
        expect(screen.getAllByText(/❌/i).length >= 2);
        expect(
            screen.getByText(/You have already answered this question/i)
        ).toBeInTheDocument();
    });
    test("Short Answer Questions can be answered", () => {
        const answerBox = screen.getByRole("textbox", {
            name: /Input your answer:/i
        });
        expect(
            screen.getAllByText(/This question has not yet been answered/i)
                .length >= 2
        );
        userEvent.type(answerBox, "Answer");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        userEvent.type(answerBox, "Wrong");
        expect(screen.getAllByText(/❌/i).length >= 2);
        expect(
            screen.getByText(/You have already answered this question/i)
        ).toBeInTheDocument();
    });
});
