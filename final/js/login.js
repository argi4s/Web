function login() {
  const username = $("#username").val();
  const password = $("#password").val();

  if (!username || !password) {
    showAlert("Please provide both your username and password.");
    return;
  }

  $.ajax({
    url: "./php/signIn.php",
    method: "POST",
    data: { username, password },
    success: handleSuccess,
  });
}

function handleSuccess(result) {
  if (typeof result === "object") {
      localStorage.setItem("logged_user", JSON.stringify(result));
      
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: '#f1f5f9',
      });
      
      Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
      });

      const logged_user = JSON.parse(localStorage.getItem("logged_user"));
      // Checking user's admin status
      let redirectURL = "map.html";
      if (logged_user[0] && logged_user[0].isAdmin === "0") {
          redirectURL = "map_user.html";
      }

      // Adding a delay of 2 seconds before redirecting
      setTimeout(() => {
          navigateTo(redirectURL);
      }, 2000);
    } else if (result == "2") {
      showError("Invalid username or password.");
    } else {
      showError("An unexpected error occurred.");
    }
}

function navigateTo(url) {
  window.location.assign(url);
}

function showAlert(message) {
  Swal.fire({
    icon: "warning",
    title: message,
  });
}

function showError(message) {
  Swal.fire({
    icon: "error",
    title: message,
  });
}
