// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//
var promptAndPlay = function() {
  var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
  var song = parseSong(songString);
  // Disable the "Play" button while the song is playing.
  $('#play-button').attr('disabled', 'true');
  // Change the "Play" button to read "Playing..." while the song is playing.
  $('#play-button').html('Playing...');
  playSong(song, 500, function() {
    // Make sure to re-enable it when the song is finished playing.
    $('#play-button').removeAttr('disabled');
    // Make sure to change it back to "Play" when the song is finished.
    $('#play-button').html('Play');
  });
  //playSong(song, 500, promptAndPlay);
};

// Get things going.
// promptAndPlay();

$(document).ready(function () {
  // When the user clicks the "Play" button, the Jukebox should prompt the 
  // user to enter a song and play it. Implement this is `jukebox.js`
  $('#play-button').on('click', function () {
    promptAndPlay();
  });
});