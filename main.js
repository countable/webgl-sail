
var Wind = function(x,z) {
    this.direction = new THREE.Vector3(x,0,z);
    this.getAngle = function () {
        return Math.atan2(this.direction.z, this.direction.x);
    }
    this.getStrength = function () {
        return Math.sqrt(Math.pow(this.direction.x,2) + Math.pow(this.direction.z, 2));
    }   
}

var Sail = function () {

	var scope = this;
    scope.vertices = [];
    scope.faces = [];

	THREE.Geometry.call( this );

	v(   0,   2.5,   1 );
	v(   0,   2.5,   -5 );
	v(   0,   15,  1 );

	f3( 0, 1, 2 );


	this.computeCentroids();
	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f3( a, b, c ) {

		scope.faces.push( new THREE.Face3( a, b, c ) );

	}

}
Sail.prototype = new THREE.Geometry();
Sail.prototype.constructor = Sail;

var Utils = {

    //deg2rad is util for convert angle, from degrees to radians or other way around
    deg2rad: function (type, num) {
        if (type == "rad") {
            result = num * 180 / pi;
        }
        if (type == "deg") {
            result = num * pi / 180;
        }
        return result;
    },
    
    normalize_angle: function(a) {
        while (a < 0) a += pi*2;
        while (a > pi*2) a -= pi*2;
        return a;
    },

    //Where pofs is point of sail and agl is angle of wind relative to boat, 
    //where a_wind is angle of wind relative to water, 
    //and a_boat is angle of boat relative to water
    angle2pofs: function (a_wind, a_boat) {
        Utils.normalize_angle(a_boat);
        Utils.normalize_angle(a_wind);
        
        var agl = Math.abs(a_boat - a_wind), pofs;
        
        if (agl >= 0 && agl < pi / 4 ) {
            pofs = "Irons";
        } else if (agl < pi / 2 && agl >= (pi / 4) ) {
            pofs = "Close Hauled";
        } else if (agl >= pi / 2 && agl < 3 / 4 * pi ) {
            pofs = "Beam Reach";
        } else if (agl >= (0.75 * pi) && agl <= pi ) {
            pofs = "Running";
        } else {
            pofs = "ERROR"
        };

        while (pofs === "ERROR") {
            alert("ERROR: Point of Sail can't be calculated!  Angle is: \n" + agl + "," + a_wind + "," + a_boat);
        }
        return pofs;
    }
    // Calculates and returns "Apparent Wind Angle" (AWA) 
}


var Ship = function () {
    var initial_rotation = [0, 0, 0];
    var vector = new THREE.Vector3(),_width = 70,_height = 70,_boatAngle,_maxSpeed = 4;

    this.position = new THREE.Vector3(0,0,0);
    this.velocity = new THREE.Vector3(0,0,0);
    this.rotation = new THREE.Vector3(0,0,0);

    _acceleration = new THREE.Vector3();
    _direction = new THREE.Vector3();
    awAngle = new THREE.Vector3();
    _sailAngle = 0;
    _boatAngle = 0;
    this.speed = 0;
    that = this;

    this.set_up_model = function () { 
        
        this.mesh = new THREE.Mesh(new Boat(), new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading } ) );
        this.mesh.position.x = 0;
        this.mesh.position.y = 0;
        this.mesh.position.z = 50;
        this.mesh.rotation.y = pi;
    
        this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z = 5;
    
    }   
    
    this.getBoatAngle = function () {
        return _boatAngle;
    }

    this.run = function () {
        this.checkBounds();
        this.move();
    };

    this.speedup = function (delta) {
        //   while(that.POFS != "Irons") {
        this.speed += delta;
        console.log("adding v", this.speed, delta);
        /*if (that.POFS() === "Irons") {
            this.speed -= delta;
        }*/
        if (this.speed > _maxSpeed) {
            this.speed = _maxSpeed;
        }
        // }
        //	else if (that.POFS == "IRONS") {this.speed = 0}
    };
    this.turn = function (delta) {
        //console.log(_boatAngle, "before")
        _boatAngle += delta;
        //rot = _boatAngle;
        //console.log(rot, "after");
        while (_boatAngle > 2 * pi) _boatAngle -= 2 * pi;
        while (_boatAngle < 0) _boatAngle += 2 * pi;
    };

    this.sheet = function (delta) {
        while (_sailAngle <= pi / 2 && _sailAngle >= pi / 12) {
            _sailAngle = that.getRot(_sailAngle + delta)
        }
    };
    this.move = function () {

        //if(that.POFS() == "Irons" ){
        //	this.velocity.x = 0
        //	this.velocity.z = 0
        //	}else {
        this.velocity.x = Math.cos(_boatAngle) * this.speed;
        this.velocity.z = Math.sin(_boatAngle) * this.speed;
        //TODO ADD WIND VELOCITY!
        console.log ('moving',this.velocity.x,this.velocity.z);
        this.position.addSelf(this.velocity);
        // }
    };

    this.checkBounds = function () {
        if (this.position.x > _width) this.position.x = -_width;
        if (this.position.x < -_width) this.position.x = _width;
        if (this.position.z > _height) this.position.z = -_height;
        if (this.position.z < -_height) this.position.z = _height;
    };
}

var camera, scene, renderer, boat, windvale, ship, wind, sail;

var stats;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 100;
    origin = new THREE.Vector3(0, 0, 0);
    camera.lookAt(origin);

    scene = new THREE.Scene();
    
    //Lights
    scene.add( new THREE.AmbientLight( 0x00020 ) );
    var directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add( directionalLight );
    
    //Models
    windvale = new THREE.Mesh(new THREE.CubeGeometry(3, 3, 20), new THREE.MeshBasicMaterial({
        color: 0xff0000e,
        wireframe: true
    }));
    scene.add(windvale);

    ship = new Ship();
    ship.set_up_model();
    scene.add( ship.mesh );

    sail = new THREE.Mesh(new Sail(), new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading } ) );
    sail.position.x = 0;
    sail.position.y = 0;
    sail.position.z = 50;
    sail.rotation.y = pi;

    sail.scale.x = sail.scale.y = sail.scale.z = 5;
    sail.doubleSided = true;
    scene.add( sail );

    wind = new Wind(1,0);
   
    ocean = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200 ),
        new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading } ) );
    ocean.rotation.x = -pi / 2 ;
    //scene.add( ocean );

    renderer = new THREE.WebGLRenderer({antialias: true});
    // renderer.autoClear = false;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.addEventListener('keydown', onKey, false);
    document.body.appendChild(renderer.domElement);
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
}
//TODO : MAKE FUNCTION that replaces "/n' characters in string w/ <br> tag in html
function return2br(dataStr) {
    return dataStr.replace(/[\r\n]/g, "<br />");
}

function onKey(event) {
    if (event.which == 38) {
        ship.sheet(pi / 12)
        ship.speedup(1);
    }
    if (event.which == 40) {
        ship.sheet(-pi / 12)
        ship.speedup(-0.3);
    }
    if (event.which == 37) {
        ship.turn(-0.05);
    }
    if (event.which == 39) {
        ship.turn(0.05);
    }
}

function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
   }

function render() {
    //pofs = Utils.angle2pofs(wind.getAngle(), ship.getBoatAngle());

    ship.mesh.rotation.y = -ship.getBoatAngle() + pi / 2;
    ship.mesh.position.x = ship.position.x;
    ship.mesh.position.z = ship.position.z;

    sail.position.x = ship.mesh.position.x;
    sail.position.y = ship.mesh.position.y;
    sail.position.z = ship.mesh.position.z;
    sail.rotation = ship.mesh.rotation;
    
    camera.position.x = ship.mesh.position.x;
    camera.position.z = 100 //ship.mesh.position.z;
    camera.position.y =100
    camera.lookAt(ship.mesh.position);

    ship.run();
    color = ship.mesh.materials[0].color;
    color.r = color.g = color.b = (500 - ship.mesh.position.z) / 1000;

    renderer.render(scene, camera);
}


