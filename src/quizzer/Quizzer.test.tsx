import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import userEvent from "@testing-library/user-event";

describe("Quizzer and QuizList Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });

    //Tests for testing QuizList
    test("The test quiz title is displayed", () => {
        expect(screen.getByText(/Testing Quiz/i)).toBeInTheDocument();
    });
    test("The test quiz description is displayed", () => {
        expect(screen.getByText(/Test Quiz for Testing/i)).toBeInTheDocument();
    });
    test("The test quiz length is displayed", () => {
        expect(screen.getAllByText(/1/i).length >= 1);
    });
    test("The Score is Displayed", () => {
        expect(
            screen.getByText(/You have currently scored 0 points/i)
        ).toBeInTheDocument();
    });
    test("There is a button labled Edit Mode", () => {
        const editButton = screen.getByRole("button", { name: /Edit Mode/i });
        expect(editButton).toBeInTheDocument();
        editButton.click();
    });
    test("There is a button to Delete a Quiz", () => {
        const editButton = screen.getByRole("button", { name: /Edit Mode/i });
        editButton.click();
        const deleteButton = screen.getAllByRole("button", {
            name: /Delete Quiz/i
        });
        expect(deleteButton.length >= 1);
    });
    test("When in edit mode, you can add a quiz with an inputed name and description", () => {
        const editButton = screen.getByRole("button", { name: /Edit Mode/i });
        editButton.click();
        const addButton = screen.getByRole("button", {
            name: /Add Quiz/i
        });
        const titleBox = screen.getByRole("textbox", { name: /Title:/i });
        userEvent.type(titleBox, "Test2 Title");
        const descBox = screen.getByRole("textbox", { name: /description:/i });
        userEvent.type(descBox, "Test2 Desc");
        addButton.click();
        expect(screen.getByText(/Test2 Title/i)).toBeInTheDocument();
        expect(screen.getByText(/Test2 Desc/i)).toBeInTheDocument();
    });
});
