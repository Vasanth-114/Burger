var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);
var redirectingText = document.getElementById('redirectingText');
    redirectOnClick(redirectingText, 'SignIn'); 
function redirectOnClick(textElement, SignIn) {
  textElement.addEventListener('click', function() {
      // Dynamically resolve the URL using Django's reverse URL template tag
      var targetUrl = "{% static/templates/sign.html"+SignIn+" %}";
      window.location.href = targetUrl;
  });
}


var redirectingText = document.getElementById('redirectingText');
redirectOnClick(redirectingText, "{% static 'sign.html' %}")
function redirectFunction(event) {
  event.preventDefault();
  //window.location.href = '{% static/templates/sign.html{% static '/sign.html' %} % };
}
const link = document.createElement("link");
link.href = "../templates/sign.html"; // Uses "../" to go up one level
 // Or "import" depending on your needs
document.head.appendChild(link);
const redirecting = document.getElementById('redirectingText');
redirecting.addEventListener('click', function() {
  const targetUrl = `{% url 'sign' %}`;
  window.location.href = targetUrl;
});
const redirectingtext = document.getElementById('redirecting');
redirectingtext.addEventListener('click', function() {
const targetUrl = `{% url 'menupage' %}`;
window.location.href = targetUrl;
});
const redirec = document.getElementById('redirect');
redirec.addEventListener('click', function() {
const targetUrl = `{% url 'dealspage' %}`;
window.location.href = targetUrl;
});

for (let i = 0; i < scrollAnimElements.length; i++) {
  observer.observe(scrollAnimElements[i]);
}
const offersContainer = document.querySelector('.divoffers-card-parent');
const cardWidth = offersContainer.querySelector('.divoffers-card').offsetWidth;

function scrollCards() {
offersContainer.scrollBy({ left: cardWidth });

if (offersContainer.scrollLeft !== 0) {
offersContainer.style.scrollBehavior = 'smooth';
offersContainer.scrollTo({ left: 0, behavior: 'smooth' });
} else {
requestAnimationFrame(scrollCards); // Use requestAnimationFrame for smoother performance
}
}

scrollCards(); // Start the scrolling
const offerCardsContainer = document.querySelector('.offer-cards');
const triggerButton = document.querySelector('.trigger-button');

triggerButton.addEventListener('click', () => {
const cardWidth = offerCardsContainer.querySelector('.offer-card').offsetWidth;
const totalWidth = cardWidth * offerCardsContainer.querySelectorAll('.offer-card').length;
const containerWidth = offerCardsContainer.offsetWidth;
const scrollDistance = totalWidth - containerWidth;

let scrollPosition = 0;

function animateScroll() {
scrollPosition += 10; // Adjust value for desired scroll speed
if (scrollPosition > scrollDistance) {
scrollPosition = 0; // Reset for infinite loop
}
offerCardsContainer.style.transform = `translateX(-${scrollPosition}px)`;
requestAnimationFrame(animateScroll);
}
animateScroll();
});
new WOW().init();



AOS.init();