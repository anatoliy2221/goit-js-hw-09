const feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener("input", () => {
    const email = feedbackForm.elements.email.value;
    const message = feedbackForm.elements.message.value;
    const localStorageKey = "feedback-form-state";
        const obj = {
            email: `${email}`,
            textarea: `${message}`,
};
    
localStorage.setItem(localStorageKey, JSON.stringify(obj));

});



// localStorage.setItem("settings", JSON.stringify(settings));

// loginForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;
//     if (email === "" || password === "") {
//         alert("All form fields must be filled in");
//     } else {
//         const resultValue = {
//             email: email.trim(),
//             password: password.trim(),
//         };
//         console.log(resultValue);
//         form.reset();
//     }
// }


// textarea.value = localStorage.getItem(localStorageKey) ?? "";






// localStorage.setItem("settings", JSON.stringify(settings));

// const handleClick = (event) => {
//   event.preventDefault();  
//   console.log(localStorage.setItem("feedback-form-state", "`${event.currentTarget.value}`"));
//   };
// feedbackForm.addEventListener("input", handleClick);





// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// 	console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });




// event.currentTarget.value



// Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".



// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними
// значеннями.