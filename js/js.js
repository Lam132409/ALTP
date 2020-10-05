const question = [
    {
        question: 'Dac san Viet Tri la gi',
        answer: [
            'Kho ga',
            'Kho bo',
            'Thit cho',
            'Rau muong luoc'
        ],
        correct: 3
    },
    {
        question:'Dai ca lop la ai',
        answer: [
            'Uyen',
            'Thuong',
            'Nga',
            'Tuyet'
        ],
        correct: 4
    },
];
class altp {
    constructor(question, answer) {
        this.ui = new ui();
        this.ui.showScreen('welcomeScreen');
        this.currentQuestion = 0;
        this.currentAnswer = null;
         this.ui.onStartBtnClick( () => {
             this.start();
         });
    }
    start() {
        this.ui.showScreen('questionScreen');
        this.ui.resetAnswerStyle();


        this.ui.showQuestion(question[this.currentQuestion]);
        this.ui.onClickAnswer((answer) => {
            this.currentAnswer = answer;
            this.ui.setSelectedAnswer(answer);
                this.checkAnswer();
        });
    }
    checkAnswer () {
        if (this.currentAnswer == question[this.currentQuestion].correct) {
            this.currentQuestion++;
            this.start();
        }
        else {
            this.ui.showResult(this.currentAnswer,question[this.currentQuestion].correct);
                this.reset();
        }

    }
    reset () {
        this.currentQuestion = 0;
        this.ui.showScreen('welcome');
        this.ui.resetAnswerStyle();
        this.start();
    }
}

var game = new altp();


