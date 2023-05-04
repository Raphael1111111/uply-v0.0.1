document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const rating = document.getElementById("rating");
    const image = document.querySelector(".image");
    const feedImages = [
      "https://firebasestorage.googleapis.com/v0/b/uply-v1.appspot.com/o/2023%20survey%20content%2F10e.gif?alt=media&token=3c5cbea4-aa73-4817-9518-faea92350988",
      "https://firebasestorage.googleapis.com/v0/b/uply-v1.appspot.com/o/2023%20survey%20content%2Fezgif.com-optimize%20(1).gif?alt=media&token=158e05b3-ac43-4c24-b098-f7d7856e7cb7",
      "https://firebasestorage.googleapis.com/v0/b/uply-v1.appspot.com/o/2023%20survey%20content%2F17r.gif?alt=media&token=5ba803f9-8b2c-45e9-a72b-3c0754f0d019",
      "https://firebasestorage.googleapis.com/v0/b/uply-v1.appspot.com/o/2023%20survey%20content%2F1i.gif?alt=media&token=3f2d7db8-bf66-488d-9ccb-c3bcd052fd2b",
      "https://firebasestorage.googleapis.com/v0/b/uply-v1.appspot.com/o/2023%20survey%20content%2Faustin-distel-mpN7xjKQ_Ns-unsplashsmall%20v2extra.jpg?alt=media&token=628e4cd7-0107-441b-b7cf-a0e8d31c3fdd"
    ];
    let currentImageIndex = 0;
  
    function updateContent() {
      image.src = feedImages[currentImageIndex];
      if (currentImageIndex % 2 === 0) {
        yesButton.style.display = "inline-block";
        noButton.style.display = "inline-block";
        rating.style.display = "none";
      } else {
        yesButton.style.display = "none";
        noButton.style.display = "none";
        rating.style.display = "flex";
      }
    }
  
    function showNextImage() {
      currentImageIndex++;
      if (currentImageIndex >= feedImages.length) {
        currentImageIndex = 0;
      }
      updateContent();
    }
  
    yesButton.addEventListener("click", showNextImage);
    noButton.addEventListener("click", showNextImage);
  
    rating.addEventListener("click", function (event) {
      if (event.target.tagName === "SPAN") {
        showNextImage();
      }
    });
  
    // Erstes Bild und Inhalte bei Seitenladung anzeigen
    updateContent();
  });


  
  function markActiveFooterLink(stepNumber) {
    const footerLinks = document.querySelectorAll("nav a");
  
    footerLinks.forEach((link, index) => {
      if (index === stepNumber - 1) {
        link.classList.add("active-footer-link");
      } else {
        link.classList.remove("active-footer-link");
      }
    });
  }



  
    // Laden des Headers
    fetch('header.html')
      .then(response => response.text())
      .then(headerHTML => {
        document.getElementById('header').innerHTML = headerHTML;
      });
  
    // Laden des Footers
    fetch('footer.html')
      .then(response => response.text())
      .then(footerHTML => {
        document.getElementById('footer').innerHTML = footerHTML;
      });
  
  


 
    const nextButtons = document.querySelectorAll(".next-btn");

    markActiveFooterLink(1);

    function handleNextButtonClick(event) {
      const currentStep = event.target.closest(".step");
      const nextStep = currentStep.nextElementSibling;
    
      if (nextStep) {
        currentStep.classList.add("hidden");
        nextStep.classList.remove("hidden");
        // Rufen Sie die Funktion markActiveFooterLink auf, um den aktiven Link im Footer zu markieren
        markActiveFooterLink(parseInt(nextStep.id.split("-")[1]));
      } else {
        // Öffne die feed.html-Seite, wenn das Tutorial beendet ist
        window.location.href = 'feed.html';
      }
    }
    
  
    nextButtons.forEach((button) => {
      button.addEventListener("click", handleNextButtonClick);
    });
  
    function highlightActiveTab() {
      const footerLinks = document.querySelectorAll("nav a");
  
      footerLinks.forEach((link) => {
        if (link.href === window.location.href) {
          link.classList.add("tab-highlight");
        } else {
          link.classList.remove("tab-highlight");
        }
      });
    }
  
    // Rufen Sie die Funktion highlightActiveTab auf, wenn die Seite geladen wird
    highlightActiveTab();
  
    // Rufen Sie die Funktion highlightActiveTab auf, wenn auf einen Tab im Footer geklickt wird
    document.querySelector("nav").addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        setTimeout(() => {
          highlightActiveTab();
        }, 0);
      }
    });
  

  

  