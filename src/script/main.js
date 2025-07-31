console.log("Mama, i'm coming home");

import AOS from "aos";

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
})

// logica do contador

document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter")
    const yearsElement = document.getElementById("year");
    const monthsElement = document.getElementById("month");
    const daysElement = document.getElementById("day");

    const startDate = new Date('1948-12-03T00:00:00Z');
    const endDate = new Date('2025-07-22T08:00:00Z');

    const animationDuration = 6000;
    const updateInterval = 10;

    const totalTimeSpan = endDate.getTime() - startDate.getTime(); // Aqui calculamos o tempo total em milissegundos
    const timeIncrement = totalTimeSpan / (animationDuration / updateInterval); // Aqui calculamos o incremento de tempo para cada atualização

    let currentTime = startDate.getTime();
    const tributeInterval = setInterval(() => { 

        currentTime += timeIncrement;

        if (currentTime >= endDate.getTime()) {
            clearInterval(tributeInterval);
            currentTime  = endDate.getTime(); 
            counterElement.innerHTML = "Be grateful, you witnessed history being written!";
        }

        const currentTimeForCalc = new Date(currentTime);

        let years = currentTimeForCalc.getUTCFullYear() - startDate.getUTCFullYear();
        let months = currentTimeForCalc.getUTCMonth() - startDate.getUTCMonth();
        let days = currentTimeForCalc.getUTCDate() - startDate.getUTCDate();

        if (days < 0) {
            months--; // Ajusta o mês se os dias forem negativos
            const lastDayOfPrevMonth = new Date(currentTimeForCalc.getUTCFullYear(), currentTimeForCalc.getUTCMonth(), 0);
            days += lastDayOfPrevMonth.getUTCDate();
        }

        if (months < 0) {
            years--; // Ajusta o ano
            months += 12;
        }

        yearsElement.textContent = String(years).padStart(2, '0');
        monthsElement.textContent = String(months).padStart(2, '0');
        daysElement.textContent = String(days).padStart(2, '0');


    }, updateInterval)

})