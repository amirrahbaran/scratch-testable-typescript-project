export class Point {
    x: number;
    y: number;

    constructor(startX: number, startY: number){
        this.x = startX;
        this.y = startY;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getDistanceTo(otherPoint: Point): number {
        let dx = this.x - otherPoint.getX();
        let dy = this.y - otherPoint.getY();
        return Math.sqrt(dx * dx + dy * dy);
    }
}