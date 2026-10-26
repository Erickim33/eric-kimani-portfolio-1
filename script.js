// Close the mobile nav after a link is tapped
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    var nav = document.querySelector('.nav-links');
    if (nav) nav.classList.remove('open');
  });
});
