export function flattenArea(terrain, size, centerX, centerY, radius, height) {
    const pos = terrain.geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
        const x = i % size;
        const y = Math.floor(i / size);

        const dx = x - centerX;
        const dy = y - centerY;

        if (dx *dx + dy * dy <  radius * radius) {
            pos.setZ(i, height);
        }
    }

    pos.needsUpdate = true;
    terrain.geometry.computeVertexNormals();
}

export function digMoat(terrain, size, centerX, centerY, radius, depth) {
    const pos = terrain.geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
        const x = i % size;
        const y = Math.floor(i / size);

        const dx = x - centerX;
        const dy = y - centerY;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > radius && dist < radius + 5) {
            pos.setZ(i, pos.getZ(i) - depth);
        }
    }

    pos.needsUpdate = true;
    terrain.geometry.computeVertexNormals();
}
