export default class App {
    public canvas : HTMLCanvasElement;

    public constructor() {
        requestAnimationFrame(this.update.bind(this))
        this.canvas = document.getElementById("Main") as HTMLCanvasElement;
    }

    public update() {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
        requestAnimationFrame(this.update.bind(this))
    }

    private loadImages() {
        
    }
}