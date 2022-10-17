let score: number = 0;

// Creating like an time.sleep in python
const sleep = (millisecond: number) => {
	return new Promise(resolve => setTimeout(resolve, millisecond));
};

// Set the first question
window.onload = function() {
    let quizz = document.getElementById('Q');
    if (quizz !== null) {
        quizz.innerHTML =
        `
            <h2>Question 1</h2>
            <p>Quelles Spécialité je fait ?</p>
            <ul>
                <li onClick="AnswerListener.Questions('R1', 1)" id="R1">Math, NSI, LLCE</li>
                <li onClick="AnswerListener.Questions('R2', 1)" id="R2">NSI,LLCE, Physique</li>
                <li onClick="AnswerListener.Questions('R3', 1)" id="R3">Physique, NSI, Math</li>
                <li onClick="AnswerListener.Questions('R4', 1)" id="R4">LLCE, NSI, HGGSP</li>
            </ul>
        `;
    }
}

// if false
function False(id: string) {
    let Doc = document.getElementById(id);
    if (Doc !== null) {
        Doc.style.backgroundColor = "red";
    }
}

// if false
function True(id: string) {
    let Doc = document.getElementById(id);
    if (Doc !== null) {
        Doc.style.backgroundColor = "green";
    }
}

let i: number = 1;

class AnswerListener {

    static Questions(element: string, Question: number) {
        
        let GoQ: number = 0;

        // Say the answers && questions
        if (document.getElementById(element) !== null) {
            if (element === "R1" && Question === 1 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(2);
                });
                return 0;
            } else if (element === "R2" && Question === 2 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(3);
                });
                return 0;
            } else if (element === "R4" && Question === 3 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(4);
                });
                return 0;
            } else if (element === "R2" && Question === 4 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(5);
                });
                return 0;
            } else if (element === "R3" && Question === 5 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(6);
                });
                return 0;
            } else if (element === "R4" && Question === 6 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(7);
                });
                return 0;
            } else if (element === "R1" && Question === 7 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(8);
                });
                return 0;
            } else if (element === "R3" && Question === 8 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(9);
                });
                return 0;
            } else if (element === "R2" && Question === 9 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#NewQuestion(10);
                });
                return 0;
            } else if (element === "R4" && Question === 10 && element !== null) {
                score++;
                GoQ++;
                True(element);
                sleep(500).then(() => {
                    AnswerListener.#Result(score);
                });
                return 0;
            }
            False(element);
            GoQ++;
            sleep(500).then(() => {
                if (Question < 10) {
                    AnswerListener.#NewQuestion(Question + 1);
                } else if (Question >= 10) {
                    AnswerListener.#Result(score);
                }
            });
        }
    }

    static #NewQuestion(value: number) {

        let quizz = document.getElementById('Q'), WAI = document.getElementById("WAI");
        
        // Put next questions + answers
        if (value === 2 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 2</h2><p>Quelle etait mon premier language de programmation ?</p><ul><li onClick="AnswerListener.Questions('R1', 2)" id="R1">Python</li><li onClick="AnswerListener.Questions('R2', 2)" id="R2">Batch</li><li onClick="AnswerListener.Questions('R3', 2)" id="R3">Javascript</li><li onClick="AnswerListener.Questions('R4', 2)" id="R4">Ruby</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        } else if (value === 3 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 3</h2><p>Dans quel lycée suis-je ?</p><ul><li onClick="AnswerListener.Questions('R1', 3)" id="R1">Lycée Marie Curie</li><li onClick="AnswerListener.Questions('R2', 3)" id="R2">Lycée Fustel de Coulanges</li><li onClick="AnswerListener.Questions('R3', 3)" id="R3">Lycée Marcel Rudloff</li><li onClick="AnswerListener.Questions('R4', 3)" id="R4">Lycée Jean-Monnet</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        } else if (value === 4 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 4</h2><p>Quelle est mon troisième prénom ?</p><ul><li onClick="AnswerListener.Questions('R1', 4)" id="R1">Hugo</li><li onClick="AnswerListener.Questions('R2', 4)" id="R2">Guy</li><li onClick="AnswerListener.Questions('R3', 4)" id="R3">Jean</li><li onClick="AnswerListener.Questions('R4', 4)" id="R4">Patrick</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        } else if (value === 5 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 5</h2><p>Quelle voiture je conduis en ce moment ?</p><ul><li onClick="AnswerListener.Questions('R1', 5)" id="R1">Peugeot 206</li><li onClick="AnswerListener.Questions('R2', 5)" id="R2">Fiat 500</li><li onClick="AnswerListener.Questions('R3', 5)" id="R3">Fiat Panda</li><li onClick="AnswerListener.Questions('R4', 5)" id="R4">Supra Mk4</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        } else if (value === 6 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 6</h2><p>Depuis quand je fais du html (et tout ce qui va avec) ?</p><ul><li onClick="AnswerListener.Questions('R1', 6)" id="R1">plus de 5 ans</li><li onClick="AnswerListener.Questions('R2', 6)" id="R2">1 an et demi</li><li onClick="AnswerListener.Questions('R3', 6)" id="R3">3 ans et 4 mois</li><li onClick="AnswerListener.Questions('R4', 6)" id="R4">2 ans et 9 mois</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        } else if (value === 7 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 7</h2><p>Où suis-je né ?</p><ul><li onClick="AnswerListener.Questions('R1', 7)" id="R1">Hannovre</li><li onClick="AnswerListener.Questions('R2', 7)" id="R2">Strasbourg</li><li onClick="AnswerListener.Questions('R3', 7)" id="R3">Offenburg</li><li onClick="AnswerListener.Questions('R4', 7)" id="R4">Düsseldorf</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        } else if (value === 8 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 8</h2><p>Où ai-je fait du basket ?</p><ul><li onClick="AnswerListener.Questions('R1', 8)" id="R1">SIG</li><li onClick="AnswerListener.Questions('R2', 8)" id="R2">Saint Joseph</li><li onClick="AnswerListener.Questions('R3', 8)" id="R3">ASES</li><li onClick="AnswerListener.Questions('R4', 8)" id="R4">AUS</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        } else if (value === 9 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 9</h2><p>Comment je me décris ?</p><ul><li onClick="AnswerListener.Questions('R1', 9)" id="R1">Optimiste</li><li onClick="AnswerListener.Questions('R2', 9)" id="R2">Perfectionniste</li><li onClick="AnswerListener.Questions('R3', 9)" id="R3">Minimaliste</li><li onClick="AnswerListener.Questions('R4', 9)" id="R4">Pessimiste</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        } else if (value === 10 && quizz !== null && WAI !== null) {
            i++;
            quizz.innerHTML = `<h2>Question 10</h2><p>Quelle éditeur de textes je utilise ?</p><ul><li onClick="AnswerListener.Questions('R1', 10)" id="R1">Vim</li><li onClick="AnswerListener.Questions('R2', 10)" id="R2">Sublime texte</li><li onClick="AnswerListener.Questions('R3', 10)" id="R3">Notepad++</li><li onClick="AnswerListener.Questions('R4', 10)" id="R4">Visual Studio Code</li></ul>`;
            WAI.innerHTML = `Question ${i}/10`;
        }
    }

    static #Result(ResultScore: number) {
        // Put the result
        let quizz = document.getElementById('Q');
        if (quizz) {
            if (ResultScore <= 4) quizz.innerHTML = `<h3>Tu as eu ${ResultScore}/10<br>Tu me connais pas du tout</h3><p class="answers">Question 1: Math, NSI, LLCE<br>Question 2: Batch<br>Question 3: Lycée Jean-Monnet<br>Question 4: Guy<br>Question 5: Fiat Panda<br>Question 6: 2 ans et 9 mois<br>Question 7: Hannovre<br>Question 8: ASES<br>Question 9: Perfectionniste<br>Question 10: Visual Studio Code</p>`;
            else if (ResultScore <= 9) quizz.innerHTML = `<h3>Tu as eu ${ResultScore}/10<br>Bien joué tu me connais presque parfaitement</h3><p class="answers">Question 1: Math, NSI, LLCE<br>Question 2: Batch<br>Question 3: Lycée Jean-Monnet<br>Question 4: Guy<br>Question 5: Fiat Panda<br>Question 6: 2 ans et 9 mois<br>Question 7: Hannovre<br>Question 8: ASES<br>Question 9: Perfectionniste<br>Question 10: Visual Studio Code</p>`;
            else quizz.innerHTML = `<h3>Tu as eu ${ResultScore}/10<br>Incroyable! tu me connais aussi bien que moi je connais ma vie!</h3><p class="answers">Question 1: Math, NSI, LLCE<br>Question 2: Batch<br>Question 3: Lycée Jean-Monnet<br>Question 4: Guy<br>Question 5: Fiat Panda<br>Question 6: 2 ans et 9 mois<br>Question 7: Hannovre<br>Question 8: ASES<br>Question 9: Perfectionniste<br>Question 10: Visual Studio Code</p>`;
        }
    }
}
