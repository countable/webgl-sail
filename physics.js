

var pi = Math.PI;


Physics = new function () {
		var that = this, L = new THREE.Vector3(), D = new THREE.Vector3(), vt_wind = new ThreeVector3(2,2,0), 
		va_wind = new ThreeVector3();
		
		// where type is unit type of angle (radians or deg)
		this.getCl = function (type, agl) {
			if (agl < pi/2) Cl = ( (Utils.deg2rad(type, agl) + 5)* 0.1);
			if (agl > pi/2) Cl = ( (Utils.deg2rad(type, agl) + 5) *0.01);
			return Cl
		}
		
		//this.getbVl = function (_windAngle, _)
		this.density = function (prs, T) { return d = prs / (287.058*T) }
		
		this.getAW = function (v_aw, v_tw){
			va_wind.add(-Boid1.getVelocity(), vtwind);
			return va_wind;
		
		}
		//Finds force of foil :
		//Where F is lift vector of foil, L is total lift force, Fd is drag vector of sail, Bd is drag of boat (not considering foil drag),p is density of air, v is velocity of APPARENT wind, m is mass of boat
		this.a_foil = function  (type, F, p, A, C, v) {
			var D, L;
			if (type == "Aero"){
				L.z = 1/2(pa*A*C*(v)^2); 
				A.x = -1/2(pa*A*C*(v)^2);
				
				
			} //else if (type == "Hydro") {
				//L
			
			
			//}		
			
		};
		
		this.F_tot = function (agl1, agl2) {
			
		
		
		};

	}