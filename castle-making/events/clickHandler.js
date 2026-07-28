import { flattenArea } from "../tools/terrainTools.js";

export function setupKuruwaClick(camera, terrain, size) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener("click", (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(terrain);

        if (intersects.length > 0) {
            const point = intersects[0].point;

            const gx = Math.floor((point.x + 100) / (200 / size));
            const gy = Math.floor((point.z + 100) / (200 / size));

            const height = point.y;

            flattenArea(terrain, size, gx, gy, 10, height);
        }
    });
}
