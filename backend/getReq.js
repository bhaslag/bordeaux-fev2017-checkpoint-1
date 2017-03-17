const API_URL = 'http://localhost:3000/articles';

var button = document.getElementsByClassName('btn-kaamelott');

button.addEventListener('click', function() {
  console.log("button push");
  var xhr = new XMLHttpRequest();

  if(xhr) {
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('bbbbbbbbb');
          var result = JSON.parse(xhr.responseText);
          console.log(result);
          show(result);
        }
        else {
          alert("Connected but not");
        }
      }
    };
    console.log('aaaaaaaaaaaaaaaaaaaa');
    xhr.open('GET', API_URL + "/" + id);
    console.log(url);
    xhr.send(null);
  }
});
