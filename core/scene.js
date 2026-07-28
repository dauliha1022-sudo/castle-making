export function createScene() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(40, 200, 200);
    camera.rotation.x = -0.8;   // 下向き（-30度くらい）

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // ★ 空と地面の光 → 凹凸が強調される
    const hemi = new THREE.HemisphereLight(0xeeeeff, 0x444422, 0.6);
    scene.add(hemi);

    // ★ 太陽光（影の方向を作る）
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(100, 200, 100);
    scene.add(light);

    return { scene, camera, renderer };
}
