export class Point {
    x: number;
    y: number;

    constructor(startX: number, startY: number){
        this.x = startX;
        this.y = startY;
    }

    get getX() {
        return this.x;
    }
}