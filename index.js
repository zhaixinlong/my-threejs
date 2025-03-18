import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x000000 );


const loader = new THREE.TextureLoader();
loader.load( './images/1.jpg', function ( texture ) {
    scene.background = texture;
    renderer.render( scene, camera );
} );


// 创建相机
const camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);
camera.position.z = 5;
camera.position.x = 2;
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cube = new THREE.Mesh(
    new THREE.BoxGeometry( 1, 1, 1 ),
    new THREE.MeshBasicMaterial()
);
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry( 1, 1, 1 ),
    new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
);
scene.add( cube , cube1);

renderer.render( scene, camera );


function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}

// animate();