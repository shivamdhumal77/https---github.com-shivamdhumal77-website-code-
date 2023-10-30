  // Create the questions array
  const questions = [
    {
        question: "1. Do you feel more energetic in the morning or evening?",
        options: [
            {
                label: "Morning ",
                value: "Vata",
            },
            {
                label: "Evening ",
                value: "Kapha",
            },
            {
                label: "No specific preference",
                value: "Pitta",
            },
        ],
    },
    {
        question: "2. What is your typical body shape?",
        options: [
            {
                label: "Thin and lanky ",
                value: "Vata",
            },
            {
                label: "Stocky or overweight ",
                value: "Kapha",
            },
            {
                label: "Average or well-proportioned ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "3. How is your skin?",
        options: [
            {
                label: "Dry and prone to cracking",
                value: "Vata",
            },
            {
                label: "Oily or smooth ",
                value: "Kapha",
            },
            {
                label: "Sensitive, prone to redness ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "4. How is your appetite?",
        options: [
            {
                label: "Irregular, sometimes low",
                value: "Vata",
            },
            {
                label: "Consistently strong ",
                value: "Kapha",
            },
            {
                label: "Variable, strong at times ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "5. How do you react to stress?",
        options: [
            {
                label: "Anxious, restless, or fearful ",
                value: "Vata",
            },
            {
                label: "Complacent or resistant to change ",
                value: "Kapha",
            },
            {
                label: "Irritable, angry, or impatient ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "6. How do you handle cold weather?",
        options: [
            {
                label: "Easily cold, dislike cold weather ",
                value: "Vata",
            },
            {
                label: "Prefer warmth, tolerate cold well ",
                value: "Kapha",
            },
            {
                label: "Dislike excessive heat and humidity ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "7. What's your sleep pattern?",
        options: [
            {
                label: "Light sleeper, often wake up during the night ",
                value: "Vata",
            },
            {
                label: "Deep sleeper, love long hours of sleep ",
                value: "Kapha",
            },
            {
                label: "Moderate sleeper, sometimes wake up due to dreams ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "8. How do you digest food?",
        options: [
            {
                label: "Irregular digestion, often gassy or bloated ",
                value: "Vata",
            },
            {
                label: "Slow but steady digestion, rarely experience digestive issues ",
                value: "Kapha",
            },
            {
                label: "Strong digestion but prone to heartburn or acidity ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "9. How is your hair texture?",
        options: [
            {
                label: "Dry, frizzy, or curly ",
                value: "Vata",
            },
            {
                label: "Thick and oily ",
                value: "Kapha",
            },
            {
                label: "Fine and prone to early graying ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "10. What's your tolerance to spicy foods?",
        options: [
            {
                label: "Low tolerance, dislike spicy foods ",
                value: "Vata",
            },
            {
                label: "High tolerance, enjoy spicy foods ",
                value: "Kapha",
            },
            {
                label: "Moderate tolerance, like some spice but not excessive ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "11. How do you handle new experiences or changes?",
        options: [
            {
                label: "Excited, adventurous, or anxious ",
                value: "Vata",
            },
            {
                label: "Resistant, prefer routine and stability ",
                value: "Kapha",
            },
            {
                label: "Adapt well, but may become stressed ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "12. How's your memory and learning ability?",
        options: [
            {
                label: "Quick to learn but forgetful ",
                value: "Vata",
            },
            {
                label: "Steady, with a good memory ",
                value: "Kapha",
            },
            {
                label: "Sharp, but may become impatient ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "13. How do you react to cold weather?",
        options: [
            {
                label: "Easily get cold, prefer warmth ",
                value: "Vata",
            },
            {
                label: "Tolerate cold well, enjoy winter ",
                value: "Kapha",
            },
            {
                label: "Dislike cold, prefer moderate temperatures (Pitta)",
                value: "Pitta",
            },
        ],
    },
    {
        question: "14. What's your communication style?",
        options: [
            {
                label: "Talkative, expressive, and creative ",
                value: "Vata",
            },
            {
                label: "Calm, patient, and a good listener ",
                value: "Kapha",
            },
            {
                label: "Assertive, precise, and sometimes critical ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "15. How's your joint flexibility?",
        options: [
            {
                label: "Flexible, but joints may crack ",
                value: "Vata",
            },
            {
                label: "Stable and strong, but not very flexible ",
                value: "Kapha",
            },
            {
                label: "Good flexibility, but may get joint inflammation ",
                value: "Pitta",
            },
        ],
    },
    {
        question: "16. How do you handle conflict or stress in relationships?",
        options: [
            {
                label: "Avoid confrontation, prefer peace ",
                value: "Vata",
            },
            {
                label: "Avoidance of conflict, but can be complacent ",
                value: "Kapha",
            },
            {
                label: "Confrontation or assertive during conflicts ",
                value: "Pitta",
            },
        ],
    }
];

let currentQuestionIndex = 0;
const userAnswers = {};

function displayQuestion(questionIndex) {
    const question = questions[questionIndex];
    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    // Display the question
    document.getElementById("question").innerHTML = question.question;

    // Display the options for the question
    for (const option of question.options) {
        const button = document.createElement("button");
        button.textContent = option.label;
        button.addEventListener("click", function () {
            // Store the user's answer
            const userAnswer = option.value;
            userAnswers[questionIndex] = userAnswer;

            // Move to the next question or determine dosha if all questions answered
            if (questionIndex < questions.length - 1) {
                displayQuestion(questionIndex + 1);
            } else {
                // Determine the user's dosha
                const userDosha = determineDosha(userAnswers);

                // Display the user's dosha
                document.getElementById("dosha").innerHTML = `Your dominant dosha is: <strong> ${userDosha}</strong>`;;
            }
        });

        optionsDiv.appendChild(button);
    }
}

function determineDosha(userAnswers) {
    // Logic to determine the dominant dosha based on user answers
    // You can implement your own dosha determination logic here
    // For simplicity, let's just return the dosha with the most responses
    const doshaCounts = { Vata: 0, Kapha: 0, Pitta: 0 };
    for (const answerIndex in userAnswers) {
        const answer = userAnswers[answerIndex];
        doshaCounts[answer]++;
    }

    // Find the dosha with the most responses
    let dominantDosha = "Vata";
    for (const dosha in doshaCounts) {
        if (doshaCounts[dosha] > doshaCounts[dominantDosha]) {
            dominantDosha = dosha;
        }
    }

    return dominantDosha;
}

// Start by displaying the first question
displayQuestion(currentQuestionIndex);