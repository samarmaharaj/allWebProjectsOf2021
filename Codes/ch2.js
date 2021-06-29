var game = {
  init: function() {
    game.canvas = document.getElementById("gameCanvas");
    game.context = game.canvas.getContext("2d");
    
    //initialize  objects
    levels.init();
    loader.init();
    
    game.hideScreens();
    game.showScreen("gameStartScreen");
  },
  
  hideScreens: function(){
    var screens = document.getElementsByClassName("gameLayer");
    
    //iteration
    for (let i = screens.length - 1; i >=0; i--){
      var screen = screens[i];
      
      screen.style.display = "none";
    }
  },
  
  hideScreen: function(id) {
    var screen = document.getElementById(id);
    screen.style.display = "none";
  },
  
  showScreen: function(id){
    var screen = document.getElementById(id);
    
    screen.style.display = "block";
  },
  
  showLevelScreen: function() {
  game.hideScreens();
  game.showScreen("levelSelectScreen");
  }
};

var levels = {
  data: [{ //first level
    foreground: "desert-foreground",
    background: "clouds-background",
    entities: []
  },
  { //second level
  foreground: "desert-foreground", 
  background: "clouds-background", 
  entities: []
  }],
  
  //initialize level selection
  init: function(){
    var levelSelectScreen = document.getElementById("levelSelectScreen");
    
    //handler to call
    var buttonClickHandler = function() {
      game.hideScreen("levelSelectScreen");
      
      //level label values are 1, 2. lavels are 0, 1
      levels.load(this.value - 1);
    };
    
    for (let i = 0; i < levels.data.length; i++){
      var button = document.createElement("input");
      
      button.type = "button";
      button.value = (i + 1);
      button.addEventListener("click", buttonClickHandler);
      
      levelSelectScreen.appendChild(button);
    }
  },
  
  //load all data and image of a specific level
  load: function(number){
    game.currenLevel = {number: number };
    game.score = 0;
    
    document.getElementById("score").innerHTML = "score: " + game.score;
    var lavel = levels.data[number];
    
    game.currentLevel.backgroundImage = loader.loadedImage("Html5/Ch2/images/backgrounds/" + level.background + ".png");
    game.currentLevel.foregroundImage = loader.loadedImage("Html5/Ch2/images/backgrounds/" + level.foreground + ".png");
    game.slingshotImage = loader.loadedImage("Html5/Ch2/images/slingshot.png");
    game.slingshotFrontImage = loader.loadedImage("Html5/Ch2/images/slingshot-front.png");
    
    loader.onload = game.start;
  }
};

var loader = {
    loaded: true,
    loadedCount: 0, // Assets that have been loaded so far
    totalCount: 0, // Total number of assets that need loading

    init: function() {
        // check for sound support
        var mp3Support, oggSupport;
        var audio = document.createElement("audio");

        if (audio.canPlayType) {
               // Currently canPlayType() returns:  "", "maybe" or "probably"
            mp3Support = "" !== audio.canPlayType("audio/mpeg");
            oggSupport = "" !== audio.canPlayType("audio/ogg; codecs=\"vorbis\"");
        } else {
            // The audio tag is not supported
            mp3Support = false;
            oggSupport = false;
        }

        // Check for ogg, then mp3, and finally set soundFileExtn to undefined
        loader.soundFileExtn = oggSupport ? ".ogg" : mp3Support ? ".mp3" : undefined;
    },

    loadImage: function(url) {
        this.loaded = false;
        this.totalCount++;

        game.showScreen("loadingScreen");

        var image = new Image();

        image.addEventListener("load", loader.itemLoaded, false);
        image.src = url;

        return image;
    },

    soundFileExtn: ".ogg",

    loadSound: function(url) {
        this.loaded = false;
        this.totalCount++;

        game.showScreen("loadingScreen");

        var audio = new Audio();

        audio.addEventListener("canplaythrough", loader.itemLoaded, false);
        audio.src = url + loader.soundFileExtn;

        return audio;
    },

    itemLoaded: function(ev) {
        // Stop listening for event type (load or canplaythrough) for this item now that it has been loaded
        ev.target.removeEventListener(ev.type, loader.itemLoaded, false);

        loader.loadedCount++;

        document.getElementById("loadingMessage").innerHTML = "Loaded " + loader.loadedCount + " of " + loader.totalCount;

        if (loader.loadedCount === loader.totalCount) {
            // Loader has loaded completely..
            // Reset and clear the loader
            loader.loaded = true;
            loader.loadedCount = 0;
            loader.totalCount = 0;

            // Hide the loading screen
            game.hideScreen("loadingScreen");

            // and call the loader.onload method if it exists
            if (loader.onload) {
                loader.onload();
                loader.onload = undefined;
            }
        }
    }
};

window.addEventListener("load", function(){
  game.init();
});
