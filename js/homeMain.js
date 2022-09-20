const today = new Date();
document.querySelector("footer p span").textContent = today.getFullYear();
document.getElementsByClassName('lastTimeUpdate')[0].textContent = document.lastModified;

document.getEle