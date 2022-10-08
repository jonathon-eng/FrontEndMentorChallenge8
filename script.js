const unread = document.getElementsByClassName('unread');
const currentNoti = document.getElementById('notification');
const unreadDot = document.getElementsByClassName('unreadDot');


// Notification count is set to 0 before page as loaded, afterwards the below function triggers, and sets the value according to how many notifications are there.
document.addEventListener('DOMContentLoaded', notificationCount);


function notificationCount() {
    const unreadCount = unread.length;
    currentNoti.textContent = unreadCount;
};

const notibutton = document.querySelector('button');
// the function below, resets all containers by removing the unread class from every element, which then reupdates the notification count.
notibutton.addEventListener('click', () => {
 const containers = document.querySelectorAll('.container');
 containers.forEach(container => {
    container.classList.remove('unread');
    notificationCount();
});
console.log(unreadDot);
const dots = document.querySelectorAll(".unreadDot")
dots.forEach(dot => {
    dot.classList.remove('unreadDot');
})

});