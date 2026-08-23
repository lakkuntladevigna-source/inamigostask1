```javascript
// =========================================
// INAMIGOS FOUNDATION
// Basic JavaScript
// =========================================


// ---------- SMOOTH SCROLL ----------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ---------- NAVBAR SHADOW ON SCROLL ----------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 4px 20px rgba(8, 59, 102, 0.15)";
    } else {
        navbar.style.boxShadow =
            "0 2px 12px rgba(0, 0, 0, 0.08)";
    }

});


// ---------- IMPACT COUNTER ANIMATION ----------

const counters = document.querySelectorAll(".impact-box h3");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const originalText = counter.innerText;

            let number = parseInt(
                originalText.replace(/,/g, "")
            );

            let suffix = originalText.includes("+") ? "+" : "";

            let current = 0;

            const increment = Math.ceil(number / 100);

            const updateCounter = () => {

                current += increment;

                if (current >= number) {
                    counter.innerText =
                        number.toLocaleString() + suffix;

                    return;
                }

                counter.innerText =
                    current.toLocaleString() + suffix;

                requestAnimationFrame(updateCounter);
            };

            updateCounter();

            observer.unobserve(counter);
        }

    });

}, {
    threshold: 0.5
});


counters.forEach(counter => {
    observer.observe(counter);
});


// ---------- PROJECT CARD CLICK EFFECT ----------

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("click", function () {

        projectCards.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ---------- WELCOME MESSAGE ----------

window.addEventListener("load", function () {

    console.log(
        "Welcome to the InAmigos Foundation Awareness Website 🌱"
    );

});
```
