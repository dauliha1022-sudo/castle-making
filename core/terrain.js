export function createTerrain(scene) {
    const size = 128;

    const geometry = new THREE.PlaneGeometry(200, 200, size - 1, size - 1);
    const pos = geometry.attributes.position;

    const noise = new Noise(Math.random());

    const cx = size / 2;
    const cy = size / 2;

    for (let i = 0; i < pos.count; i++) {
        const x = i % size;
        const y = Math.floor(i / size);

        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const weight = Math.max(0, 1 - dist / (size * 0.6));

        const n1 = noise.perlin2(x / 30, y / 30) * 30;
        const n2 = noise.perlin2(x / 20, y / 20) * 20;
        const n3 = noise.perlin2(x / 10, y / 10) * 10;

        const centerHill = Math.exp(-(dist * dist) / 700) * 40;

        const h = (n1 + n2 + n3) * weight + centerHill;

        pos.setZ(i, h);
    }

    pos.needsUpdate = true;

    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
        color: 0x88cc88,
        roughness: 0.9,
        metalness: 0.0
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2;

    scene.add(terrain);

    return { terrain, size };
}
