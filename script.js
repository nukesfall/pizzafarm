function checkDomain() {
    var searchInput = document.getElementById("searchInput").value.trim();
    var availabilityText = document.getElementById("availability");
  
    if (searchInput === "") {
      availabilityText.innerText = "Please enter a word.";
      return;
    }
  
    var domain = searchInput.toLowerCase() + ".bot";
    var url = "https://www.namecheap.com/domains/registration/results/?domain=" + domain;
  
    fetch(url)
      .then(response => response.text())
      .then(data => {
        if (data.includes("The domain name you've entered is not available")) {
          availabilityText.innerText = domain + " is not available.";
        } else {
          availabilityText.innerText = domain + " is available!";
        }
      })
      .catch(error => {
        console.error('Error:', error);
        availabilityText.innerText = "An error occurred. Please try again later.";
      });
  }
  