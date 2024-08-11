let allRead = document.querySelector('button');
let notifications = document.querySelectorAll('.notification');
let icons = document.querySelectorAll(
  "main section .notification .description p span:last-of-type"
);
let notificationCount = document.querySelector('.count');
let count = 7;
notificationCount.textContent = count;

allRead.addEventListener('click', function() {
  notifications.forEach((e, index) => {
    e.style.backgroundColor = "transparent";
   icons[index].style.display = "none";
   notificationCount.innerText = 0;
  });
});

notifications.forEach((e,index) => {
    e.addEventListener('click', function() {
        if (icons[index].style.display !== "none") {
            count--;
            notificationCount.innerText = count;
        }
        e.style.backgroundColor = "transparent";
        icons[index].style.display = "none";
    });
});