document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const question = document.querySelector('.question');
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const btnGroup = document.querySelector('.btn-group');

    yesBtn.addEventListener('click', () => {
        question.innerHTML = "Grabe ka akala ko di mo na ako love :( hehe ILOVEYOU TOO";
        btnGroup.style.marginTop = "150px"; // Adjust the margin-top value as needed
    });

    noBtn.addEventListener('mouseenter', () => {
        const wrapperRect = wrapper.getBoundingClientRect();
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtn.clientWidth)) + 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtn.clientHeight)) + 1;
        
        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
    });
});
