document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled"); //menambahkan class
    } else {
      navbar.classList.remove("scrolled"); //menghapus class
    }
  });

  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 120, // Sesuaikan offset dengan tinggi navbar
        behavior: "smooth",
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".toggle ul");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

function toggleMenu() {
  document.querySelector(".toggle ul").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const text = "I'm a Web Developer";
  let index = 0;
  const speed = 200;
  const typingElement = document.getElementById("typing-effect");

  function typeWriter() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed); // Panggil fungsi typeWriter lagi dengan jeda
    }
  }

  // Mulai animasi typing setelah DOM selesai dimuat
  typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".toggle ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Hapus class active dari semua link
      navLinks.forEach((el) => el.classList.remove("active"));

      // Tambahkan class active ke link yang diklik
      this.classList.add("active");
    });
  });
});
