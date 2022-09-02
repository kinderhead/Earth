import { Image } from "konva/lib/shapes/Image";
import { Stage } from "konva/lib/Stage";

export default class App {
    public stage : Stage;

    private textures : {[name: string]: Image} = {};

    public constructor() {
        this.stage = new Stage({container: "Main", width: window.innerWidth, height: window.innerHeight});
        this.loadImages();

        
    }

    public update() {
        
    }

    private loadImages() : void {
        this.textures["earth"] = new Image({image: document.getElementById("earth") as CanvasImageSource});
    }
}