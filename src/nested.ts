import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";
// /*

//  * A representation of a students' answer in a quizzing game

// export interface Answer {
//     /** The ID of the question being answered. */
//     questionId: number;
//     /** The text that the student entered for their answer. */
//     text: string;
//     /** Whether or not the student has submitted this answer. */
//     submitted: boolean;
//     /** Whether or not the students' answer matched the expected. */
//     correct: boolean;
// }
// */


/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const onlyPublishedQuestions = questions.filter((q => q.published))
    return onlyPublishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    //const onlyNonEmptyQuestions = questions.filter((q: Question): Question => (q.body !== "" && q.expected !== "" && q.options !== q.options != []) )
    //Go through an array only give back only non-empty "" or []
    const onlyNonEmptyQuestions = questions.filter((question: Question): boolean => (question.body !== "" || question.expected !== "" || question.options.length > 0))
    return onlyNonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(questions: Question[],id: number): Question | null {
    //Using find we check every question in question and check if the question id matches the target id
    const findQuestionById = questions.find((question: Question): boolean => question.id === id);

    return findQuestionById === undefined ? null : findQuestionById;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const filterOutQuestionId = questions.filter((question: Question): boolean => question.id !== id)
    return filterOutQuestionId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const onlyNamesOfQuestions = questions.map((q => q.name))
    return onlyNamesOfQuestions;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    //How can I add the points from the questions array
    //const addAllPoints = questions.reduce((total: number, num: number) => total + questions.points,0)
    const mapAllPoints = questions.map((question: Question) => question.points);
    const addMappedPoints = mapAllPoints.reduce((total: number, val:number): number => total + val, 0);

    return addMappedPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const mapOnlyPublishedQuestion = questions.filter((q => q.published));
    const getPublishedQuestionsPoints = mapOnlyPublishedQuestion.map((q => q.points));
    const sumOnlyPublishedQuestions = getPublishedQuestionsPoints.reduce((total: number, value: number): number => total + value,0);

    return sumOnlyPublishedQuestions;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const getAllData = questions.map(
        q => `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
    );

    const formatRow = [
        "id,name,options,points,published",
        ...getAllData
    ].join("\n");

    return formatRow;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */

// /***
//  * A representation of a students' answer in a quizzing game
//  */
// export interface Answer {
//     /** The ID of the question being answered. */
//     questionId: number;
//     /** The text that the student entered for their answer. */
//     text: string;
//     /** Whether or not the student has submitted this answer. */
//     submitted: boolean;
//     /** Whether or not the students' answer matched the expected. */
//     correct: boolean;
// }

export function makeAnswers(questions: Question[]): Answer[] {
    const mapQuestionToAnswer = questions.map((question: Question): Answer => ({questionId: question.id, text: "", submitted: false, correct: false}))
    return mapQuestionToAnswer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const nowPublishedQuestions = questions.map((question: Question): Question => ({...question, published: true}));

    return nowPublishedQuestions;

}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if(questions.length === 0){
        return true;
    }

    const firstQuestion = questions[0].type;

    //since we are comparing all other questions to the first one
    const everyTypeQuestion = questions.every((question: Question): boolean => question.type === firstQuestion)
    return everyTypeQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */

// export function makeBlankQuestion(
//     id: number,
//     name: string,
//     type: QuestionType,
// ): Question {
//     return {
//         id: id,
//         name: name,
//         type: type,
//         body: "",
//         expected: "",
//         options: [],
//         points: 1,
//         published: false,
//     };
// }

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const blankQuestion = makeBlankQuestion(id, name, type);

    return [...questions, blankQuestion];
}


/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(questions: Question[],targetId: number,newName: string): Question[] {
    const mapAllQuestions = questions.map((question: Question): Question => question.id === targetId ? ({...question, name: newName}) : question)
    return mapAllQuestions;
}



/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */


// items.map(item =>
//     item.id === selectedId
//         ? {
//             ...item,
//             category: newCategory,
//             extras: newCategory === "custom" ? item.extras : []
//         }
//         : item
// );
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const changeTypeIfQuestionHasTargetId = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? {
                    ...question,
                    type: newQuestionType,
                    options: newQuestionType !== "multiple_choice_question"
                        ? []
                        : question.options
                }
                : question
    );

    return changeTypeIfQuestionHasTargetId;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

// // Append
// const extendedColors = [...colors, newColor];

// // Replace at an index
// const updatedColors = colors.map((color, index) =>
//     index === selectedIndex ? newColor : color
// );
// questions.map((question: Question): Question => {
//     // If this question doesn't match targetId, return it unchanged.

//     // Otherwise, build updatedOptions from question.options.

//     // Return a copied question with options set to updatedOptions.
// });
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((question: Question): Question => {
        if (question.id !== targetId) {
            return question;
        }

        const updatedOptions =
            targetOptionIndex === -1
                ? [...question.options, newOption]
                : question.options.map((option, index) =>
                    index === targetOptionIndex ? newOption : option
                );

        return { ...question, options: updatedOptions };
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetIndex = questions.findIndex(
        question => question.id === targetId
    );

    const copiedQuestions = [...questions];

    if (targetIndex === -1) {
        return copiedQuestions;
    }

    const duplicate = duplicateQuestion(newId, questions[targetIndex]);
    copiedQuestions.splice(targetIndex + 1, 0, duplicate);

    return copiedQuestions;
}