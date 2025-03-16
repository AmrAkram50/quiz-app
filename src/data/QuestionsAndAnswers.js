export const questions = [
    {
        question: 'What is the primary purpose of React?',
        answers: [
            'To manage databases',
            'To build user interfaces (UIs)',
            'To handle server-side rendering only',
            'To manage backend logic',
            'To compile JavaScript code'
        ],
        correctAnswer: '1'
    },
    {
        question: 'What is the difference between a controlled and uncontrolled component in React?',
        answers: [
            'Controlled components are easier to use and do not track user input.',
            'Uncontrolled components do not require a value prop.',
            'Controlled components use state to manage input values, while uncontrolled components use refs.',
            'Uncontrolled components update automatically with state changes.',
            'Controlled components do not require event handlers.'
        ],
        correctAnswer: '2'
    },
    {
        question: 'Which hook is used to perform side effects in a React component?',
        answers: [
            'useState',
            'useEffect',
            'useContext',
            'useMemo',
            'useRef'
        ],
        correctAnswer: '1'
    },
    {
        question: 'How does React handle reconciliation?',
        answers: [
            'By using a linked list to compare DOM elements.',
            'By re-rendering the entire DOM on every change.',
            'By using a virtual DOM to compare changes and update efficiently.',
            'By caching previous states and directly modifying the DOM.',
            'By comparing only class components.'
        ],
        correctAnswer: '2'
    },
    {
        question: 'What is the purpose of React’s key prop in lists?',
        answers: [
            'To pass values between components.',
            'To uniquely identify elements for efficient updates.',
            'To trigger re-renders in all components.',
            'To style components conditionally.',
            'To manage global state across components.'
        ],
        correctAnswer: '1'
    },
    {
        question: 'What happens if you call setState in a React component?',
        answers: [
            'The component always re-renders immediately.',
            'The component never re-renders.',
            'React schedules an update and re-renders the component.',
            'The state is updated synchronously.',
            'Previous state values are erased.'
        ],
        correctAnswer: '2'
    }
]