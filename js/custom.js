document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Disable the button and show the circular loader
    var button = document.getElementById("submit-button");
    var buttonText = document.getElementById("button-text");
    var buttonLoader = document.getElementById("button-loader");

    button.disabled = true;
    buttonText.style.display = "none";
    buttonLoader.style.display = "inline-block";


    // Get form data
    const formData = new FormData(this);

    // Send the form data using fetch API
    fetch("https://script.google.com/macros/s/AKfycbzXOk_AGCMZShz3r4C7aLsC0Aiy1urIr4HbDok9SyN3ssVuX45YahpNK_XjySoDND2b-g/exec", {
        method: "post",
        body: formData
    }).then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return response.text(); // Or response.json() if your script returns JSON
    }).then(data => {
        // Show success modal popup
        showModal("Message sent successfully!", "success");

        // Clear form fields
        document.getElementById("contact-form").reset();
    }).catch(error => {
        console.error("Error!", error.message);
        // Show error modal popup
        showModal("Something went wrong. Please try again.", "error");
    }).finally(() => {
        // Hide loader and enable button
        button.disabled = false;
        buttonText.style.display = "inline";
        buttonLoader.style.display = "none";
    });
});

function showModal(message, type) {
    var modal = document.getElementById("status-modal");
    var modalMessage = document.getElementById("modal-message");

    modalMessage.textContent = message;
    modalMessage.className = type; // Apply success or error class

    modal.style.display = "block";

    // Close modal on click of close button or outside modal
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function scrollToDiv(divId, offset = 0) {
    const element = document.querySelector(divId);
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // document.querySelectorAll('a[href^="#"], a[href^="./#"], a[href^="../#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     const target = document.querySelector(this.getAttribute("href"));
  //     window.scrollTo({
  //       top: target.offsetTop, // Adjust this value based on your header height
  //       behavior: "smooth",
  //     });
  //   });
  // });

  // document.querySelectorAll('a[href^="#"], a[href^="./#"], a[href^="../#"], a[href^="./"]').forEach((anchor) => {
  //   const href = anchor.getAttribute('href');
    
  //   // Use regex to match './any_string/#'
  //   if (href.match(/^\.\/.*\/#$/) || href.match(/^#/) || href.match(/^\.\/#/) || href.match(/^\.\.\/#/)) {
  //     anchor.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       const target = document.querySelector(this.getAttribute("href"));
  //       window.scrollTo({
  //         top: target.offsetTop, // Adjust this value based on your header height
  //         behavior: "smooth",
  //       });
  //     });
  //   }
  // });

  document.querySelectorAll('a[href^="#"], a[href^="./#"], a[href^="../#"], a[href^="./"]').forEach((anchor) => {
    const href = anchor.getAttribute('href');
    
    // Use regex to match './any_string/#'
    if (href.match(/^\.\/.*\/#$/) || href.match(/^#/) || href.match(/^\.\/#/) || href.match(/^\.\.\/#/)) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        let targetSelector = this.getAttribute("href");
  
        // Handle ./ prefix by removing it
        if (targetSelector.startsWith("./")) {
          targetSelector = targetSelector.replace(/^\.\//, "");
        }
  
        // Query the target element
        const target = document.querySelector(targetSelector);
  
        if (target) {
          window.scrollTo({
            top: target.offsetTop, // Adjust this value based on your header height
            behavior: "smooth",
          });
        }
      });
    }
  });  
  
//New Code

