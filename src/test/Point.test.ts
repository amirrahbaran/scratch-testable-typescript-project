import { Point } from '../main/Point'

describe('Run point tests', () => {
    test('should return startX', () => {
        let point = new Point(3, 4);
        let pX = point.getX();
        expect(pX).toBe(3);
    });

    test('should return startY', () => {
        let point = new Point(3, 4);
        let pY = point.getY();
        expect(pY).toBe(4);
    });

    test('should return distance', () => {
        let point1 = new Point(3,4);
        let point2 = new Point(6,8);

        let distance = point1.getDistanceTo(point2);
        expect(distance).toBe(5);
    });
});

