document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.btnFootNav');

    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        handleButtonClick(this);
      });
    });

    function handleButtonClick(clickedButton) {
      var buttonValue = clickedButton.value;

      
      switch (buttonValue) {
        case 'HOME':
            location.href='index.html'; 
          //location.href='https://choidusite.netlify.app/index'; 
          break;
        case 'login':
            location.href='login.html';
          //location.href='https://choidusite.netlify.app/login';
          break;
        case 'help':
            location.href='help.html';
          //location.href='https://choidusite.netlify.app/help';
          break;
        case 'image':
            location.href='image.html';
          //location.href='https://choidusite.netlify.app/image';
          break;
        
      }
    } 
  });