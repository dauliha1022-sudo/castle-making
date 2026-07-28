import { createScene } from "./core/scene.js";
import { createTerrain } from "./core/terrain.js";
import { setupKuruwaClick } from "./events/clickMakeKuruwa.js";

const { scene, camera, renderer } = createScene();
const { terrain, size } = createTerrain(scene);

setupKuruwaClick(camera, terrain, size);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
