class Chain {
    constructor(firstBody, secondBody) {
        var options = {
            bodyA: firstBody,
            bodyB: secondBody,
            stiffness: 0.04,
            length: 10
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    display() {
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        push()
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop()
    }

}