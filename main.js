// Based on http://www.openprocessing.org/visuals/?visualID=6910
var Utils = new function () {
        var that = this;
        //deg2rad is util for convert angle, from degrees to radians or other way around
        this.deg2rad = function (type, num) {
            if (type == "rad") {
                result = num * 180 / pi;
            }
            if (type == "deg") {
                result = num * pi / 180;
            }
            return result;
        };
        //Where pofs is point of sail and agl is angle of wind relative to boat, 
        //where a_wind is angle of wind relative to water, 
        //and a_boat is angle of boat relative to water
        this.angle2pofs = function (a_wind, a_boat) {
            var agl = Math.abs(a_wind - a_boat),
                pofs = undefined;
            //console.log("agl=",agl);
            if (agl >= 0 && agl < pi / 4 /*|| agl <= 2*pi && agl >= pi*7/4*/ ) {
                pofs = "Irons";
            } else if (agl < pi / 2 && agl >= (pi / 4) /* || agl <= 7/4*pi && agl >= 6/4*pi  */ ) {
                pofs = "Close Hauled";
            } else if (agl >= pi / 2 && agl < 3 / 4 * pi /*|| agl <= 6/4*pi && agl >= 5/4*pi */ ) {
                pofs = "Beam Reach";
            } else if (agl >= (0.75 * pi) && agl <= pi /*|| agl <= 5/4*pi && agl >= pi */ ) {
                pofs = "Running";
            } else {
                pofs = "ERROR"
            };
            //pofs = ( agl >= 0 && agl < pi/4 ) ? "Irons" : ( agl < pi/2 && agl >= pi/4 ) ? "Close Hauled" : (agl >= pi/2 && agl < 3/4*pi) ? "Beam Reach" : agl >= (0.75*pi && agl <= pi) ? "Running" : "ERROR";
            while (pofs === "ERROR") {
                alert("ERROR: Point of Sail can't be calculated!  Angle is: \n" + agl + "," + a_wind + "," + a_boat);
            }
            return pofs;
        };
        // Calculates and returns "Apparent Wind Angle" (AWA) 
    }
    //_boatAngle, _sailAngle, _windAngle, _awAngle
    
var Ship = function () {
        var initial_rotation = [0, 0, 0];
        var vector = new THREE.Vector3(),
            _acceleration, _width = 100,
            _height = 100,
            _depth = 100,
            _goal, _neighborhoodRadius = 20,
            _boatAngle, _sailAngle, _windAngle, _awAngle, _drag = 0.5,
            _maxSpeed = 4,
            _maxSteerForce = 0.1,
            _avoidWalls = true;
        this.position = new THREE.Vector3();
        this.velocity = new THREE.Vector3();
        boatAngle = new THREE.Vector3();
        sailAngle = new THREE.Vector3();
        windAngle = new THREE.Vector3();
        _acceleration = new THREE.Vector3();
        _direction = new THREE.Vector3();
        awAngle = new THREE.Vector3();
        _sailAngle = 0;
        _boatAngle = 0;
        _windAngle = 0;
        this.speed = 0;
        that = this;
        this.setGoal = function (target) {
            _goal = target;
        };
        this.setAvoidWalls = function (value) {
            _avoidWalls = value;
        };
        // Sets and calculates angle of apparent wind angle (awa)
        this.getBoatAngle = function () {
            return _boatAngle
        }
        this.setWindAngle = function () {
            _windAngle = pi * 2 * Math.random();
        };
        this.getWindAngle = function () {
            //var t = setTimeout("that.setWindAngle()",50);
            //console.log(_windAngle);
            return _windAngle;
        };
        this.setWorldSize = function (width, height, depth) {
            _width = width;
            _height = height; //vector
            _depth = depth;
        };
        this.run = function () {
            this.checkBounds();
            this.move();
        };
        this.POFS = function () {
            return Utils.angle2pofs(that.getRot(that.getBoatAngle()), that.getWindAngle());
        };
        this.speedup = function (delta) {
            //   while(that.POFS != "Irons") {
            this.speed += delta;
            if (that.POFS() === "Irons") {
                this.speed -= delta;
            }
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
        this.getRot = function (rot) {
            if (rot >= pi && rot < 2 * pi && rot != 0) {
                rot = pi - (rot - pi);
            }
            if (rot >= 2 * pi) {
                rot -= 2 * pi;
            }
            return rot;
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
            this.position.addSelf(this.velocity);
            //	}
        };
        this.getVelocity = function () {
            return this.velocity;
        }
        this.getAWA = function () {
            return "not implemented";
        };
        this.checkBounds = function () {
            if (this.position.x > _width) this.position.x = -_width;
            if (this.position.x < -_width) this.position.x = _width;
            if (this.position.y > _height) this.position.y = -_height;
            if (this.position.y < -_height) this.position.y = _height;
            if (this.position.z > _depth) this.position.z = -_depth;
            if (this.position.z < -_depth) this.position.z = _depth;
        };
    }
Ship1 = new Ship();
var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    SCREEN_WIDTH_HALF = SCREEN_WIDTH / 2,
    SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;
var camera, scene, renderer, bird, windvale;
var ship;
var stats;
init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 100;
    origin = new THREE.Vector3(0, 0, 0);
    camera.lookAt(origin);
    scene = new THREE.Scene();
    windvale = new THREE.Mesh(new THREE.CubeGeometry(3, 3, 20), new THREE.MeshBasicMaterial({
        color: 0xff0000e,
        wireframe: true
    }));
    scene.add(windvale);
    ship = new Ship();
    ship.position.x = 0;
    ship.position.y = 0;
    ship.position.z = 0;
    ship.velocity.x = 1;
    ship.velocity.y = 0;
    ship.velocity.z = 0;
    ship.setAvoidWalls(false);
    scene.add( new THREE.AmbientLight( 0x00020 ) );
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(directionalLight);
    
    // TODO add an ocean. currently the boat sinks for some reason.
    /*
    plane = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200 ),
        new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading } ) );
    plane.rotation.x = - 90 * ( Math.PI / 180 );
    plane.overdraw = true;
    scene.add( plane );*/

    bird = new THREE.Mesh(new Boat(), new THREE.MeshLambertMaterial( { color: 0xffffff, shading: THREE.FlatShading } ) );
    bird.phase = Math.floor(Math.random() * 62.83);
    bird.position = ship.position;
    //bird.doubleSided = true;
    bird.scale.x = bird.scale.y = bird.scale.z = 5;
    ship.setWorldSize(bird.position.x + 100, bird.position.y + 200, 100);
    scene.add(bird);
    windvale.position.x = 170 + bird.position.x;
    windvale.position.y = 80 + bird.position.y;
    windvale.position.z = 0;
    renderer = new THREE.CanvasRenderer();
    // renderer.autoClear = false;
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    document.addEventListener('keydown', onDocumentMouseMove, false);
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

function ajax(id, txt) {
    var divElement = document.getElementById(id);
    while (divElement.childNodes.length >= 1) {
        divElement.removeChild(divElement.firstChild);
    }
    //txt = document.write(txt.replace("\n","<br >"));
    txt = return2br(txt);
    divElement.appendChild(divElement.ownerDocument.createTextNode(txt)); //txt.replace("\n", "<br/>"));
}

function onDocumentMouseMove(event) {
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
    // TODO: make full blow ajax handler for future, put in seperate, ajax.js file!
    // [cvo] lol, ajax is when we do server communication without reloading the page. Don't think this is the same thing. Might call it info panel or something.
    ajax("infobar", return2br("Current point of sail: " + Ship1.POFS() + " Wind Angle: " + Ship1.getWindAngle() + "Apparent Wind:" + Ship1.getAWA()));
}

function render() {
    camera.position.y = (bird.position.y + 100);
    camera.position.x = (bird.position.x + 100);
    pofs = Utils.angle2pofs(Ship1.getRot(Ship1.getBoatAngle()), Ship1.getWindAngle());
    console.log(pofs, " ", Ship1.getRot(Ship1.getBoatAngle()), Ship1.getWindAngle());
    windvale.rotation.y = Ship1.getWindAngle();
    ship.run();
    color = bird.materials[0].color;
    color.r = color.g = color.b = (500 - bird.position.z) / 1000;
    bird.rotation.y = -ship.getBoatAngle() + pi / 2;
    renderer.render(scene, camera);
}