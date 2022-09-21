import { Layer } from "konva/lib/Layer";
import { Image } from "konva/lib/shapes/Image";
import { Stage } from "konva/lib/Stage";
import { Line } from "konva/lib/shapes/Line";

import $ from "jquery";

import plates from "../res/plates.json";
import orogens from "../res/orogens.json";
import hotspots from "../res/hotspots.json";

import Orogen from "./orogen";
import { Circle } from "konva/lib/shapes/Circle";

export default class App {
    public stage : Stage;
    public layer : Layer;

    private textures : {[name: string]: Image} = {};

    private earthSize : [number, number] = [0, 0];

    private showPlates : boolean = false;
    private tectonicColors : string[] = [];
    private tectonics : number[][] = [];

    private showOrogens : boolean = false;
    private orogens : Orogen[] = [];

    private showHotspots : boolean = false;

    public constructor() {
        console.log("Initializing");

        this.stage = new Stage({container: "Main", width: window.innerWidth, height: window.innerHeight});
        this.layer = new Layer();
        this.stage.add(this.layer);

        this.loadImages().then(() => {
            addEventListener("resize", (event) => this.update());
            document.getElementById("Plates").addEventListener("click", () => {
                this.showPlates = !this.showPlates;
                this.update();
            });

            document.getElementById("Orogens").addEventListener("click", () => {
                this.showOrogens = !this.showOrogens;
                this.update();
            });

            document.getElementById("Hotspots").addEventListener("click", () => {
                this.showHotspots = !this.showHotspots;
                this.update();
            });

            plates.features.forEach(i => {
                let points : number[] = [];
                i.geometry.coordinates.forEach(i => {
                    let p = this.latLongToXY(i[1], i[0]);
                    if (isNaN(p[0]) || isNaN(p[1])) {
                        throw new RangeError("Uh oh");
                    }
                    points.push(p[0]);
                    points.push(p[1]);
                });
                this.tectonics.push(points);
                if (i.properties.Type == "subduction") {
                    this.tectonicColors.push("green");
                } else {
                    this.tectonicColors.push("red");
                }
            });

            orogens.features.forEach(e => {
                e.geometry.coordinates.forEach(j => {
                    if (e.geometry.type == "Polygon") {
                        let points : number[] = [];
                        j.forEach(i => {
                            let p = this.latLongToXY(i[1], i[0]);
                            if (isNaN(p[0]) || isNaN(p[1])) {
                                throw new RangeError("Uh oh");
                            }
                            points.push(p[0]);
                            points.push(p[1]);
                        });
                        this.orogens.push(new Orogen(points));
                    }
                    else {
                        j.forEach(k => {
                            let points : number[] = [];
                            k.forEach(i => {
                                let p = this.latLongToXY(i[1], i[0]);
                                if (isNaN(p[0]) || isNaN(p[1])) {
                                    throw new RangeError("Uh oh");
                                }
                                points.push(p[0]);
                                points.push(p[1]);
                            });
                            this.orogens.push(new Orogen(points));
                        });
                    }
                });
            });

            this.update();
        });
    }

    public update() {
        this.stage.clear();
        this.layer.children.forEach((i) => {i.remove()});
        this.layer.clear();

        this.layer.add(this.textures["earth"]);

        if (this.showPlates) {
            this.tectonics.forEach((i, idex) => {
                this.layer.add(new Line({points:i, stroke:this.tectonicColors[idex]}));
            });
        }

        if (this.showOrogens) {
            this.orogens.forEach(i => {
                this.layer.add(new Line({points:i.points, stroke:"lightblue", closed:true, fill:"lightblue", opacity:.5}));
            });
        }

        if (this.showHotspots) {
            hotspots.forEach(i => {
                let p = this.latLongToXY(i[0], i[1]);
                this.layer.add(new Circle({x:p[0], y:p[1], radius:4, fill:"orange"}))
            });
        }
        
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