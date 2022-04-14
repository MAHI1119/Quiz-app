const quizData = [
    {
        questions: "1. Which of the following data structures can be used to implement queues",
        a: "Stack",
        b: "Arrays",
        c: "LinkedList",
        d: "Queues",
        correct: "a",
    },
    {
        questions:"2. Which of the following data structures allow insertion and deletion from both ends?",
        a: "Queue",
        b: "Stack",
        c: "Deque",
        d: "Strings",
        correct: "c",
    },
    {
        questions: "3. Which of the following is a Divide and Conquer Algorithm?",
        a: "Bubble Sort",
        b: "Selection Sort",
        c: "Heap Sort",
        d: "Merge Sort",
        correct: "d",
    },
    {
        questions: "4. How are Strings represented in memory in C",
        a: "An array of Characters",
        b: "The object of some class",
        c: "1Same as other primitive data types",
        d: "linkedList of Characters",
        correct: "a",
    },
    {
        questions: "5. Which of the following is not the type of queue?",
        a: "Priority queue",
        b: "Single-ended queue",
        c: "circular queue",
        d: "Ordinary queue",
        correct: "b",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('questions')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.questions
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
