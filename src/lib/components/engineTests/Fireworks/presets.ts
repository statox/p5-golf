const torch = {
    world: {
        ttl: 45,
        gravity: true,
        collisions: false,
        maxNbObjects: 300,
        particleSize: 3
    },
    cannon: {
        angle: 270,
        minYVelocity: 50,
        maxYVelocityVariation: 1,
        maxXVelocity: 30,
        creationDelay: 1
    },
    render: {
        colors: true,
        blurPx: 19
    }
};

const pullApart = {
    world: { ttl: 10000, gravity: false, collisions: true, maxNbObjects: 300, particleSize: 3 },
    cannon: {
        angle: 270,
        minYVelocity: 1,
        maxYVelocityVariation: 1,
        maxXVelocity: 1,
        creationDelay: 30
    },
    render: { colors: true, blurPx: 0 }
};

const blob = {
    world: {
        ttl: 155.09219369291745,
        gravity: false,
        collisions: false,
        maxNbObjects: 300,
        particleSize: 13
    },
    cannon: {
        angle: 270,
        minYVelocity: 36.843012235050836,
        maxYVelocityVariation: 1,
        maxXVelocity: 14.785455798724797,
        creationDelay: 1
    },
    render: { colors: false, blurPx: 0 }
};

const fireworks = {
    world: {
        ttl: 2471.1356195071517,
        gravity: true,
        collisions: true,
        maxNbObjects: 300,
        particleSize: 1
    },
    cannon: {
        angle: 270,
        minYVelocity: 21.40272272962261,
        maxYVelocityVariation: 1.0236084783732553,
        maxXVelocity: 15.8883336205411,
        creationDelay: 23
    },
    render: { colors: true, blurPx: 0 }
};

const smoke = {
    world: {
        ttl: 2581.4234016887817,
        gravity: false,
        collisions: false,
        maxNbObjects: 2064.794072031708,
        particleSize: 8
    },
    cannon: {
        angle: 84.99052214371876,
        minYVelocity: 36.843012235050836,
        maxYVelocityVariation: 1,
        maxXVelocity: 14.785455798724797,
        creationDelay: 1
    },
    render: { colors: false, blurPx: 0 }
};

export const configs: { [name: string]: Config } = {
    torch,
    pullApart,
    blob,
    fireworks,
    smoke
};

export type Config = {
    world: {
        ttl: number;
        gravity: boolean;
        collisions: boolean;
        maxNbObjects: number;
        particleSize: number;
    };
    cannon: {
        angle: number;
        minYVelocity: number;
        maxYVelocityVariation: number;
        maxXVelocity: number;
        creationDelay: number;
    };
    render: {
        colors: boolean;
        blurPx: number;
    };
};
