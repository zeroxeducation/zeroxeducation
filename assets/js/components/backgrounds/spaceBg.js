let scene, camera, renderer, stars, starGeo;

function init() {
    // basic settings
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("spaceBg").appendChild(renderer.domElement);

    //set star's geo location randomly on the screen in 3 dimentions
    starGeo = new THREE.Geometry();
    for (let i = 0; i < 3000; i++) {
        star = new THREE.Vector3(
            Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 500 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.002;
        starGeo.vertices.push(star);
    }
    // random list of the texture
    var texturesList = [
        './assets/images/stars/star01.png',
        './assets/images/stars/star02.png',
        './assets/images/stars/star04.png',
        './assets/images/stars/star05.png'
    ];
    var randIndex = THREE.Math.randInt(0, texturesList.length - 1);
    var sprite = new THREE.TextureLoader().load(texturesList[randIndex]);
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 1,
        map: sprite
    });
    // combine texture of the star and its location then add to the scene
    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);


    // // add 300 earths
    // starGeo = new THREE.Geometry();
    // for(let i=0;i<300;i++) {
    //   star = new THREE.Vector3(
    //     Math.random() * 600 - 300,
    //     Math.random() * 600 - 300,
    //     Math.random() * 600 - 300
    //   );
    //   star.velocity = 0;
    //   star.acceleration = 0.0005;
    //   starGeo.vertices.push(star);
    // }

    // let sprite = new THREE.TextureLoader().load( './assets/images/stars/earth.png' );
    // let starMaterial = new THREE.PointsMaterial({
    //   color: 0xaaaaaa,
    //   size: 3,
    //   map: sprite
    // });

    // stars = new THREE.Points(starGeo,starMaterial);
    // scene.add(stars);

    window.addEventListener("resize", onWindowResize, false);
    animate();
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function animate() {
    starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;

        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y += 0.001;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();
