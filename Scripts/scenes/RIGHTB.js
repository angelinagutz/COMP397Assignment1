var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Decision tree: COME > GIVE SHOVEL > GO RIGHT
var scenes;
(function (scenes) {
    var RIGHTB = (function (_super) {
        __extends(RIGHTB, _super);
        function RIGHTB() {
            _super.call(this);
        }
        //PUBLIC FUNCTIONS
        RIGHTB.prototype.start = function () {
            //Add objects to the scene
            console.log("Decision made: right. Scene started");
            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Scene4Right"));
            this._gamebg.alpha = 0.5;
            this.addChild(this._gamebg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("You turned right.", "40px Consolar", "#000000", config.Screen.CENTER_X, 10);
            this.addChild(this._gameLabel);
            // Create buttons for scene and add to Game Scene container. Register for onclick events
            this._gameButton = new objects.Button("STARTOVER", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onButtonClick, this);
            stage.addChild(this);
        };
        RIGHTB.prototype.update = function () {
            // Update objects
        };
        RIGHTB.prototype._onButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return RIGHTB;
    })(objects.Scene);
    scenes.RIGHTB = RIGHTB;
})(scenes || (scenes = {}));
//# sourceMappingURL=RIGHTB.js.map