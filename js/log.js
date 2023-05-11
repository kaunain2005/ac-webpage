// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
    const name_byAuthor = "kaunain";
    const password_byAuthor = "2005";
  
//     // Get the entered username and password
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
  
//     // Perform simple validation (you can add more complex validation if needed)
//     if (username === name_byAuthor && password === password_byAuthor) {
//       // Redirect to the admin page
//       window.location.href = "https://www.youtube.com/channel/UC0QAw3kjnc690MLJ5Fote1w";
//     } else {
//       alert("Invalid username or password. Please try again.");
//     }
//   });

// login form************************
document.getElementById("openFormBtn").addEventListener("click", function() {
    document.getElementById("loginFormPopup").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("loginFormPopup").style.display = "none";
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform simple validation (you can add more complex validation if needed)
    if (username === name_byAuthor && password === password_byAuthor) {
      // Redirect to the admin page
      window.location.href = "https://www.youtube.com/channel/UC0QAw3kjnc690MLJ5Fote1w";
    } else {
      alert("Its confidential!! Only admin can sign in.");
    }
  });
  