import type { PhysicObject, World } from '$lib/engine';
import type { Settings } from './gui';

export const lifeStep = (world: World, settings: Settings) => {
    for (let i = 0; i < world.objects.length; i++) {
        for (let j = 0; j < world.objects.length; j++) {
            if (i === j) {
                continue;
            }
            const s1 = world.objects[i];
            const s2 = world.objects[j];

            repulsion(world, s1, s2, settings);
            attraction(world, s1, s2, settings);
        }
    }
};

const attraction = (world: World, o1: PhysicObject, o2: PhysicObject, settings: Settings) => {
    const d = o2.position.distance(o1.position);
    if (d > settings.physics.attractionRadius) {
        return;
    }
    const F = o2.position.clone().subtract(o1.position);
    const G = settings.physics.attraction;

    const Fmag = G / (d * d);
    F.norm().multiplyScalar(Fmag);
    world.applyForce(o1, F);
    world.applyForce(o2, F.clone().multiplyScalar(-1));
};

const repulsion = (world: World, o1: PhysicObject, o2: PhysicObject, settings: Settings) => {
    const d = o2.position.distance(o1.position);
    if (d > settings.physics.repulsionRadius) {
        return;
    }
    const F = o1.position.clone().subtract(o2.position);
    const G = settings.physics.repulsion;

    const Fmag = G / (d * d);
    F.norm().multiplyScalar(Fmag);
    world.applyForce(o1, F);
    world.applyForce(o2, F.clone().multiplyScalar(-1));
};
