const openMenuButton = document.getElementById("open-menu")
const menuMB = document.getElementById("menu-MB")
openMenuButton.addEventListener('click', () => menuMB.classList.toggle('active'))

window.addEventListener('submit', event => event.preventDefault())
const wait = (ms) => new Promise((reslove) => setTimeout(reslove, ms))

let answersRefrence = {
    0: "ببین داداش اگه مشکل داری یعنی هوادار نیستی و دشمنی و اگه تا سی ثانیه دیگه مشکلت حل نشه به فحش میکشمت :)",
    1: " اصلا به نطرت اینجا یه سایت واقعیه؟ تو یوزری تو دشمنی توکیی؟",
    2: "اصلا به چه فکری اومدی اینجا مشکل ثبت کردی؟ ببینم تو هواداری تو دشمنی تو کیی؟"
}
let commentAnswers = {
    0: "داش بمولا سایت دیتابیس نداره زجه نزن که کامنتت ثبت نمیشه"
}
const userName = document.getElementById("user-name")
const userEmail = document.getElementById("user-email")
const userProblem = document.getElementById("user-problem")
const submitProblem = document.getElementById('submit-problem')
const answerElement = document.getElementById('answer');

submitProblem.addEventListener('click', submitProblemFunc)

function submitProblemFunc() {
    if (!userEmail.value || !userEmail.value || !userProblem.value) {
        return
    }
    typeLettersOneByOne(answersRefrence, answerElement, submitProblem, submitProblemFunc)
}

const commentUserName = document.getElementById("comment-user-name")
const commentUserEmail = document.getElementById("comment-user-email")
const commentUser = document.getElementById("comment-user")
const commentSubmit = document.getElementById('submit-comment')
const commentAnswerElement = document.getElementById('comment-answer');

commentSubmit.addEventListener('click', submitCommentFunc)

function submitCommentFunc() {
    if (!commentUserEmail.value || !commentUserName.value || !commentUser.value) {
        return
    }
    commentAnswerElement.parentElement.parentElement.classList.add("show")
    typeLettersOneByOne(commentAnswers, commentAnswerElement, commentSubmit, submitCommentFunc)
}

const pollAnswers = [
    ["مشکل داری میکل داری ما اینجا داریم زحمت میکشیم تو نمیدونی ما به چه باگایی خوردیم"],
    ["اونایی که طرفداری میکنن میان کنسرت من خاک پاشونم ❤"]
]

const submitPoll = document.getElementById('submit-poll')
const pollReaction = document.getElementById('poll-reaction')

const pollPositive = document.getElementById('positive-poll')
const pollNegative = document.getElementById('negative-poll')
submitPoll.addEventListener('click', submitPollFunc)

function submitPollFunc() {
    if (!pollNegative.checked && !pollPositive.checked) {
        return
    }
    if (pollPositive.checked) {
        typeLettersOneByOne(pollAnswers[1], pollReaction, submitPoll, submitPollFunc)
    } else {
        typeLettersOneByOne(pollAnswers[0], pollReaction, submitPoll, submitPollFunc)
    }
    pollReaction.parentElement.parentElement.classList.add("show")
}

const typeLettersOneByOne = async (answers, answerElem, submitElem, func) => {
    const answersLength = Object.keys(answers).length
    const randomIndex = Math.floor(Math.random() * answersLength)
    answers = answers[randomIndex]
    answerElem.innerHTML = ""
    submitElem.removeEventListener('click', func)
    for (let index = 0; index < answers.length; index++) {
        answerElem.innerHTML += answers[index]
        await wait(100)
    }
    submitElem.addEventListener('click', func)
}