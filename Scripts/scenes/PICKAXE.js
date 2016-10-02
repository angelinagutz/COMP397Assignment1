var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var PICKAXE = (function (_super) {
        __extends(PICKAXE, _super);
        function PICKAXE() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        PICKAXE.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            //Add background
            this._gamebg = new createjs.Bitmap(assets.getResult("Scene3"));
            this._gamebg.alpha = 0.5;
            this.addChild(this._gamebg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Test test test", "40px Consolar", "#000000", config.Screen.CENTER_X, 10);
            this.addChild(this._gameLabel);
            // Create buttons for scene and add to Game Scene container. Register for onclick events
            this._gameButton1 = new objects.Button("LEFT", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton1);
            this._gameButton1.on("click", this._onButton1Click, this);
            this._gameButton2 = new objects.Button("RIGHT", 120, config.Screen.CENTER_Y + 150);
            this.addChild(this._gameButton2);
            this._gameButton2.on("click", this._onButton2Click, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        PICKAXE.prototype.update = function () {
            // Update objects
        };
        PICKAXE.prototype._onButton1Click = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.LEFTA;
            changeScene();
        };
        PICKAXE.prototype._onButton2Click = function (event) {
            scene = config.Scene.RIGHTA;
            changeScene();
        };
        return PICKAXE;
    })(objects.Scene);
    scenes.PICKAXE = PICKAXE;
})(scenes || (scenes = {}));
//# sourceMappingURL=PICKAXE.js.map