import { Layer } from "konva/lib/Layer";
import { Image } from "konva/lib/shapes/Image";
import { Stage } from "konva/lib/Stage";

import $ from "jquery";

import { Circle } from "konva/lib/shapes/Circle";

export default class App {
    public stage : Stage;
    public layer : Layer;

    private textures : {[name: string]: Image} = {};

    private earthSize : [number, number] = [0, 0];

    public constructor() {
        console.log("Initializing");

        this.stage = new Stage({container: "Main", width: window.innerWidth, height: window.innerHeight});
        this.layer = new Layer();
        this.stage.add(this.layer);

        this.loadImages().then(() => {
            addEventListener("resize", (event) => this.update())

            this.update();
        });
    }

    public update() {
        this.stage.clear();

        this.layer.add(this.textures["earth"]);
        
        this.layer.draw();
    }

    private loadImages() : Promise<void> {
        return new Promise<void>((resolve, reject) => {
            var count = 0;
            var total = 0;

            $("img").each(function (idx, img) {
                total++;
                $("<img>").on("load", () => {console.log("Loaded " + $(img).attr("src")); count++;}).attr("src", $(img).attr("src"));
            });

            var wait = () => {
                if (count == total) {
                    this.textures["earth"] = new Image({image: document.getElementById("earth") as CanvasImageSource});
                    this.earthSize = [this.textures["earth"].width(), this.textures["earth"].height()];
                    resolve();
                } else {
                    setTimeout(wait, 50);
                }
            }
            setTimeout(wait, 50);
        });
    }

    public latLongToXY(latitude : number, longitude : number) : [number, number] {
        return [
            (longitude+180) * (this.earthSize[0]/360),
            (this.earthSize[1]/2) - (this.earthSize[0] * Math.log(Math.tan((Math.PI/4)+((latitude*Math.PI/180)/2))) / (2*Math.PI))
        ];
    }
}