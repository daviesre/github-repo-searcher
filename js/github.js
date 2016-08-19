var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(username) {
  $('.showUser').text("");
  $.get('https://api.github.com/users/' + username + '/repos?type?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
      $('.showUser').append("<li><strong>Repository</strong>: " + response[i].name + "</li>");
      $('.showUser').append("<li>Description: " + response[i].description + "</li>");
      $('.showUser').append("<li>URL: " + response[i].url + "</li>");
      $('.showUser').append(
      console.log(response);
    }
  }).fail(function(error){
    $('.showUser').text(error.responseJSON.message);
  });
};

exports.githubModule = GitHub;
