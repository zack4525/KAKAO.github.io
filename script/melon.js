var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId:  'uR8Mrt1IpXg',     //, 'uR8Mrt1IpXg' '6uJf2IT2Zh8'
    events: {
      'onReady': onPlayerReady ,  
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.pauseVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    
    done = true;
  }
}
function stopVideo() {
    player.stopVideo();
}
function playVideo() {
    player.playVideo();
}
function pauseVideo(){
    player.pauseVideo();
}




var i = 0;
var arrMusic = new Array();

function addMusic(){
    var newMusic = prompt("유튜브 동영상 URL ID를 넣어주세요") ;
    var music_list = $("#music_list")
    music_list.append("<li id=music_list"+i+" value="+newMusic+">"+newMusic+"</li>") ;
    arrMusic[i] = newMusic;
    i++;
}
function startAddMusic(){
    player.loadPlaylist( arrMusic, 0,0, 'small')
}

function nextVideo(){
    player.nextVideo();
}
function previousVideo(){
    player.previousVideo();
}

function playVideoAt(){
    player.playVideoAt(0);
}


