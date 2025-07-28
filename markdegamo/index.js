$(document).ready(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});

$(document).ready(function () {
    $("a").on('click', function (event) {


        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});
const names = ["Mark", "Aranco", "Degamo"];
const roles = [
  "Aspiring Front-End Developer",
  "Aspiring Back-End Developer",
  "Aspiring Full-Stack Engineer",
  "Aspiring DevOps Specialist",
  "Aspiring AI Engineer"
];

let nameIndex = 0;
let nameCharIndex = 0;
let typingName = true;

let roleIndex = 0;
let roleCharIndex = 0;
let typingRole = true;

const $name = $("#typed-name");
const $role = $("#typed-description");

function typeName() {
  if (typingName) {
    if (nameCharIndex < names[nameIndex].length) {
      $name.text($name.text() + names[nameIndex].charAt(nameCharIndex));
      nameCharIndex++;
      setTimeout(typeName, 100);  // faster typing
    } else {
      typingName = false;
      setTimeout(typeName, 1000); // shorter pause
    }
  } else {
    if (nameCharIndex > 0) {
      $name.text(names[nameIndex].substring(0, nameCharIndex - 1));
      nameCharIndex--;
      setTimeout(typeName, 50);   // faster deleting
    } else {
      typingName = true;
      nameIndex = (nameIndex + 1) % names.length;
      setTimeout(typeName, 200);
    }
  }
}

function typeRole() {
  if (typingRole) {
    if (roleCharIndex < roles[roleIndex].length) {
      $role.text($role.text() + roles[roleIndex].charAt(roleCharIndex));
      roleCharIndex++;
      setTimeout(typeRole, 100);  
    }
  } else {
    if (roleCharIndex > 0) {
      $role.text(roles[roleIndex].substring(0, roleCharIndex - 1));
      roleCharIndex--;
      setTimeout(typeRole, 50);   
    } else {
      typingRole = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 200);
    }
  }
}

$(document).ready(() => {
  typeName();
  typeRole();
});

