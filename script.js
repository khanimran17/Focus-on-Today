const errorLabel = document.querySelector('.error-label');
const checkboxAll = document.querySelectorAll('.custom-checkbox');
const input = document.querySelectorAll('#task');
const quote = document.querySelector('#quote');
const progressBar = document.querySelector('.complete-bar');
const completedText = document.querySelector('#completed-text');

const quoteArr = [
    'Move one step ahead, today!',
    'Great start! One step closer to your goal.',
    'Almost there! Just one more to go!',
    "Congratulations! You've completed all your goals for today!",
];

checkboxAll.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allInputField = [...input].every((inputArg) => {
            return inputArg.value;
        });
        if (allInputField) {
            checkbox.parentElement.classList.toggle('completed');

            progressBar.classList.add('complete-progress');

            input.forEach((el) => {
                if (el.parentElement.classList.contains('completed')) {
                    el.setAttribute('readonly', true);
                } else {
                    el.removeAttribute('readonly');
                }
            });

            const completedTasks = document.querySelectorAll('.completed').length;
            progressBar.style.width = `${(completedTasks / 3) * 100}%`;
            if (completedTasks === 0) {
                completedText.innerText = '';
            } else {
                completedText.innerText = `${completedTasks}/3 Completed`;
            }
            quote.innerText = quoteArr[completedTasks];

            // if (completedTasks === 0) {
            //     progressBar.style.width = '0%';
            //     completedText.innerText = ''
            //     quote.innerText = 'Move one step ahead, today!';
            // }
            // else if (completedTasks === 1) {
            //     progressBar.style.width = '33.33%';
            //     completedText.innerText = '1/3 Completed'
            //     quote.innerText = '"Great start! One step closer to your goal."';

            // }
            // else if (completedTasks === 2) {
            //     progressBar.style.width = '66.66%';
            //     completedText.innerText = '2/3 Completed'
            //     quote.innerText = '"Almost there! Just one more to go!"';
            // }
            // else if (completedTasks === 3) {
            //     progressBar.style.width = '100%'
            //     completedText.innerText = '3/3 Completed'
            //     quote.innerText = `"Congratulations! You've completed all your goals for today!"`;
            // }
        } else {
            errorLabel.style.visibility = 'visible';
        }
    });
});

input.forEach((el) => {
    el.addEventListener('focus', () => {
        errorLabel.style.visibility = 'hidden';
    });
});
