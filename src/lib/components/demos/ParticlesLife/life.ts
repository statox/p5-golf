import type { PhysicObject, World } from '$lib/engine';

export type ParticleType = {
    [id: number]: number;
};

export type TypesData = {
    color: string;
    reactions: {
        [id: number]: number;
    };
};

export const lifeStep = (world: World, typesData: TypesData, particlesType: ParticleType) => {
    for (let i = 0; i < world.objects.length; i++) {
        for (let j = 0; j < world.objects.length; j++) {
            if (i === j) {
                continue;
            }
            const s1 = world.objects[i];
            const s2 = world.objects[j];

            attraction(world, s1, s2, typesData, particlesType);
        }
    }
};

const attraction = (
    world: World,
    o1: PhysicObject,
    o2: PhysicObject,
    typesData: TypesData,
    particlesType: ParticleType
) => {
    const t1 = particlesType[o1.data.id];
    const t2 = particlesType[o2.data.id];

    const G = typesData[t1]?.reactions[t2] || 0;

    const MAX_D = 90;
    const d = o2.position.distance(o1.position);
    if (d > MAX_D) {
        return;
    }

    const F = o2.position.clone().subtract(o1.position);

    const Fmag = G / (d * d);
    F.norm().multiplyScalar(Fmag);
    world.applyForce(o1, F);
    // world.applyForce(o2, F.clone().multiplyScalar(-1));
};
