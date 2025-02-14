const studentFullName = 'akashwaghela';
const studentNumber = 1162264;

console.log(`${studentFullName}-${studentNumber}`);

const headerContent = document.querySelector("h1");
headerContent.classList.add("headingPrimary");
headerContent.innerHTML = `${studentFullName}-${studentNumber}`;
console.log(headerContent.classList);