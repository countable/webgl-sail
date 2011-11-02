// Three.js r45 - http://github.com/mrdoob/three.js
var THREE = THREE || {};
if (!self.Int32Array) self.Int32Array = Array, self.Float32Array = Array;
THREE.Color = function (b) {
	b !== void 0 && this.setHex(b);
	return this
};
THREE.Color.prototype = {
	constructor: THREE.Color,
	r: 1,
	g: 1,
	b: 1,
	copy: function (b) {
		this.r = b.r;
		this.g = b.g;
		this.b = b.b;
		return this
	},
	setRGB: function (b, c, e) {
		this.r = b;
		this.g = c;
		this.b = e;
		return this
	},
	setHSV: function (b, c, e) {
		var f, h, k;
		if (e == 0) this.r = this.g = this.b = 0;
		else switch (f = Math.floor(b * 6), h = b * 6 - f, b = e * (1 - c), k = e * (1 - c * h), c = e * (1 - c * (1 - h)), f) {
		case 1:
			this.r = k;
			this.g = e;
			this.b = b;
			break;
		case 2:
			this.r = b;
			this.g = e;
			this.b = c;
			break;
		case 3:
			this.r = b;
			this.g = k;
			this.b = e;
			break;
		case 4:
			this.r = c;
			this.g = b;
			this.b = e;
			break;
		case 5:
			this.r = e;
			this.g = b;
			this.b = k;
			break;
		case 6:
		case 0:
			this.r = e, this.g = c, this.b = b
		}
		return this
	},
	setHex: function (b) {
		b = Math.floor(b);
		this.r = (b >> 16 & 255) / 255;
		this.g = (b >> 8 & 255) / 255;
		this.b = (b & 255) / 255;
		return this
	},
	getHex: function () {
		return ~~ (this.r * 255) << 16 ^ ~~ (this.g * 255) << 8 ^ ~~ (this.b * 255)
	},
	getContextStyle: function () {
		return "rgb(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + ")"
	},
	clone: function () {
		return (new THREE.Color).setRGB(this.r, this.g, this.b)
	}
};
THREE.Vector2 = function (b, c) {
	this.x = b || 0;
	this.y = c || 0
};
THREE.Vector2.prototype = {
	constructor: THREE.Vector2,
	set: function (b, c) {
		this.x = b;
		this.y = c;
		return this
	},
	copy: function (b) {
		this.x = b.x;
		this.y = b.y;
		return this
	},
	clone: function () {
		return new THREE.Vector2(this.x, this.y)
	},
	add: function (b, c) {
		this.x = b.x + c.x;
		this.y = b.y + c.y;
		return this
	},
	addSelf: function (b) {
		this.x += b.x;
		this.y += b.y;
		return this
	},
	sub: function (b, c) {
		this.x = b.x - c.x;
		this.y = b.y - c.y;
		return this
	},
	subSelf: function (b) {
		this.x -= b.x;
		this.y -= b.y;
		return this
	},
	multiplyScalar: function (b) {
		this.x *= b;
		this.y *= b;
		return this
	},
	divideScalar: function (b) {
		b ? (this.x /= b, this.y /= b) : this.set(0, 0);
		return this
	},
	negate: function () {
		return this.multiplyScalar(-1)
	},
	dot: function (b) {
		return this.x * b.x + this.y * b.y
	},
	lengthSq: function () {
		return this.x * this.x + this.y * this.y
	},
	length: function () {
		return Math.sqrt(this.lengthSq())
	},
	normalize: function () {
		return this.divideScalar(this.length())
	},
	distanceTo: function (b) {
		return Math.sqrt(this.distanceToSquared(b))
	},
	distanceToSquared: function (b) {
		var c = this.x - b.x,
			b = this.y - b.y;
		return c * c + b * b
	},
	setLength: function (b) {
		return this.normalize().multiplyScalar(b)
	},
	equals: function (b) {
		return b.x == this.x && b.y == this.y
	}
};
THREE.Vector3 = function (b, c, e) {
	this.x = b || 0;
	this.y = c || 0;
	this.z = e || 0
};
THREE.Vector3.prototype = {
	constructor: THREE.Vector3,
	set: function (b, c, e) {
		this.x = b;
		this.y = c;
		this.z = e;
		return this
	},
	setX: function (b) {
		this.x = b;
		return this
	},
	setY: function (b) {
		this.y = b;
		return this
	},
	setZ: function (b) {
		this.z = b;
		return this
	},
	copy: function (b) {
		this.x = b.x;
		this.y = b.y;
		this.z = b.z;
		return this
	},
	clone: function () {
		return new THREE.Vector3(this.x, this.y, this.z)
	},
	add: function (b, c) {
		this.x = b.x + c.x;
		this.y = b.y + c.y;
		this.z = b.z + c.z;
		return this
	},
	addSelf: function (b) {
		this.x += b.x;
		this.y += b.y;
		this.z += b.z;
		return this
	},
	addScalar: function (b) {
		this.x += b;
		this.y += b;
		this.z += b;
		return this
	},
	sub: function (b, c) {
		this.x = b.x - c.x;
		this.y = b.y - c.y;
		this.z = b.z - c.z;
		return this
	},
	subSelf: function (b) {
		this.x -= b.x;
		this.y -= b.y;
		this.z -= b.z;
		return this
	},
	multiply: function (b, c) {
		this.x = b.x * c.x;
		this.y = b.y * c.y;
		this.z = b.z * c.z;
		return this
	},
	multiplySelf: function (b) {
		this.x *= b.x;
		this.y *= b.y;
		this.z *= b.z;
		return this
	},
	multiplyScalar: function (b) {
		this.x *= b;
		this.y *= b;
		this.z *= b;
		return this
	},
	divideSelf: function (b) {
		this.x /= b.x;
		this.y /= b.y;
		this.z /= b.z;
		return this
	},
	divideScalar: function (b) {
		b ? (this.x /= b, this.y /= b, this.z /= b) : this.set(0, 0, 0);
		return this
	},
	negate: function () {
		return this.multiplyScalar(-1)
	},
	dot: function (b) {
		return this.x * b.x + this.y * b.y + this.z * b.z
	},
	lengthSq: function () {
		return this.x * this.x + this.y * this.y + this.z * this.z
	},
	length: function () {
		return Math.sqrt(this.lengthSq())
	},
	lengthManhattan: function () {
		return this.x + this.y + this.z
	},
	normalize: function () {
		return this.divideScalar(this.length())
	},
	setLength: function (b) {
		return this.normalize().multiplyScalar(b)
	},
	cross: function (b, c) {
		this.x = b.y * c.z - b.z * c.y;
		this.y = b.z * c.x - b.x * c.z;
		this.z = b.x * c.y - b.y * c.x;
		return this
	},
	crossSelf: function (b) {
		return this.set(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x)
	},
	distanceTo: function (b) {
		return Math.sqrt(this.distanceToSquared(b))
	},
	distanceToSquared: function (b) {
		return (new THREE.Vector3).sub(this, b).lengthSq()
	},
	setPositionFromMatrix: function (b) {
		this.x = b.n14;
		this.y = b.n24;
		this.z = b.n34
	},
	setRotationFromMatrix: function (b) {
		var c = Math.cos(this.y);
		this.y = Math.asin(b.n13);
		Math.abs(c) > 1.0E-5 ? (this.x = Math.atan2(-b.n23 / c, b.n33 / c), this.z = Math.atan2(-b.n12 / c, b.n11 / c)) : (this.x = 0, this.z = Math.atan2(b.n21, b.n22))
	},
	isZero: function () {
		return this.lengthSq() < 1.0E-4
	}
};
THREE.Vector4 = function (b, c, e, f) {
	this.x = b || 0;
	this.y = c || 0;
	this.z = e || 0;
	this.w = f !== void 0 ? f : 1
};
THREE.Vector4.prototype = {
	constructor: THREE.Vector4,
	set: function (b, c, e, f) {
		this.x = b;
		this.y = c;
		this.z = e;
		this.w = f;
		return this
	},
	copy: function (b) {
		this.x = b.x;
		this.y = b.y;
		this.z = b.z;
		this.w = b.w !== void 0 ? b.w : 1
	},
	clone: function () {
		return new THREE.Vector4(this.x, this.y, this.z, this.w)
	},
	add: function (b, c) {
		this.x = b.x + c.x;
		this.y = b.y + c.y;
		this.z = b.z + c.z;
		this.w = b.w + c.w;
		return this
	},
	addSelf: function (b) {
		this.x += b.x;
		this.y += b.y;
		this.z += b.z;
		this.w += b.w;
		return this
	},
	sub: function (b, c) {
		this.x = b.x - c.x;
		this.y = b.y - c.y;
		this.z = b.z - c.z;
		this.w = b.w - c.w;
		return this
	},
	subSelf: function (b) {
		this.x -= b.x;
		this.y -= b.y;
		this.z -= b.z;
		this.w -= b.w;
		return this
	},
	multiplyScalar: function (b) {
		this.x *= b;
		this.y *= b;
		this.z *= b;
		this.w *= b;
		return this
	},
	divideScalar: function (b) {
		b ? (this.x /= b, this.y /= b, this.z /= b, this.w /= b) : (this.z = this.y = this.x = 0, this.w = 1);
		return this
	},
	negate: function () {
		return this.multiplyScalar(-1)
	},
	dot: function (b) {
		return this.x * b.x + this.y * b.y + this.z * b.z + this.w * b.w
	},
	lengthSq: function () {
		return this.dot(this)
	},
	length: function () {
		return Math.sqrt(this.lengthSq())
	},
	normalize: function () {
		return this.divideScalar(this.length())
	},
	setLength: function (b) {
		return this.normalize().multiplyScalar(b)
	},
	lerpSelf: function (b, c) {
		this.x += (b.x - this.x) * c;
		this.y += (b.y - this.y) * c;
		this.z += (b.z - this.z) * c;
		this.w += (b.w - this.w) * c;
		return this
	}
};
THREE.Ray = function (b, c) {
	this.origin = b || new THREE.Vector3;
	this.direction = c || new THREE.Vector3
};
THREE.Ray.prototype = {
	constructor: THREE.Ray,
	intersectScene: function (b) {
		return this.intersectObjects(b.objects)
	},
	intersectObjects: function (b) {
		var c, e, f = [];
		c = 0;
		for (e = b.length; c < e; c++) Array.prototype.push.apply(f, this.intersectObject(b[c]));
		f.sort(function (b, c) {
			return b.distance - c.distance
		});
		return f
	},
	intersectObject: function (b) {
		function c(b, c, e) {
			var f;
			f = e.clone().subSelf(b).dot(c);
			if (f <= 0) return null;
			b = b.clone().addSelf(c.clone().multiplyScalar(f));
			return e.distanceTo(b)
		}

		function e(b, c, e, f) {
			var f = f.clone().subSelf(c),
				e = e.clone().subSelf(c),
				h = b.clone().subSelf(c),
				b = f.dot(f),
				c = f.dot(e),
				f = f.dot(h),
				k = e.dot(e),
				e = e.dot(h),
				h = 1 / (b * k - c * c),
				k = (k * f - c * e) * h,
				b = (b * e - c * f) * h;
			return k > 0 && b > 0 && k + b < 1
		}
		if (b instanceof THREE.Particle) {
			var f = c(this.origin, this.direction, b.matrixWorld.getPosition());
			if (f == null || f > b.scale.x) return [];
			return [{
				distance: f,
				point: b.position,
				face: null,
				object: b
			}]
		}
		else if (b instanceof THREE.Mesh) {
			f = c(this.origin, this.direction, b.matrixWorld.getPosition());
			if (f == null || f > b.geometry.boundingSphere.radius * Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z))) return [];
			var h, k, m, n, t, u, v, p, x, w, A = b.geometry,
				z = A.vertices,
				y = [],
				f = 0;
			for (h = A.faces.length; f < h; f++) if (k = A.faces[f], x = this.origin.clone(), w = this.direction.clone(), u = b.matrixWorld, m = u.multiplyVector3(k.centroid.clone()).subSelf(x), p = m.dot(w), !(p <= 0) && (m = u.multiplyVector3(z[k.a].position.clone()), n = u.multiplyVector3(z[k.b].position.clone()), t = u.multiplyVector3(z[k.c].position.clone()), u = k instanceof THREE.Face4 ? u.multiplyVector3(z[k.d].position.clone()) : null, v = b.matrixRotationWorld.multiplyVector3(k.normal.clone()), p = w.dot(v), b.doubleSided || (b.flipSided ? p > 0 : p < 0))) if (p = v.dot((new THREE.Vector3).sub(m, x)) / p, x = x.addSelf(w.multiplyScalar(p)), k instanceof THREE.Face3) e(x, m, n, t) && (k = {
				distance: this.origin.distanceTo(x),
				point: x,
				face: k,
				object: b
			}, y.push(k));
			else if (k instanceof THREE.Face4 && (e(x, m, n, u) || e(x, n, t, u))) k = {
				distance: this.origin.distanceTo(x),
				point: x,
				face: k,
				object: b
			}, y.push(k);
			y.sort(function (b, c) {
				return b.distance - c.distance
			});
			return y
		}
		else return []
	}
};
THREE.Rectangle = function () {
	function b() {
		k = f - c;
		m = h - e
	}
	var c, e, f, h, k, m, n = !0;
	this.getX = function () {
		return c
	};
	this.getY = function () {
		return e
	};
	this.getWidth = function () {
		return k
	};
	this.getHeight = function () {
		return m
	};
	this.getLeft = function () {
		return c
	};
	this.getTop = function () {
		return e
	};
	this.getRight = function () {
		return f
	};
	this.getBottom = function () {
		return h
	};
	this.set = function (k, m, v, p) {
		n = !1;
		c = k;
		e = m;
		f = v;
		h = p;
		b()
	};
	this.addPoint = function (k, m) {
		n ? (n = !1, c = k, e = m, f = k, h = m) : (c = c < k ? c : k, e = e < m ? e : m, f = f > k ? f : k, h = h > m ? h : m);
		b()
	};
	this.add3Points = function (k, m, v, p, x, w) {
		n ? (n = !1, c = k < v ? k < x ? k : x : v < x ? v : x, e = m < p ? m < w ? m : w : p < w ? p : w, f = k > v ? k > x ? k : x : v > x ? v : x, h = m > p ? m > w ? m : w : p > w ? p : w) : (c = k < v ? k < x ? k < c ? k : c : x < c ? x : c : v < x ? v < c ? v : c : x < c ? x : c, e = m < p ? m < w ? m < e ? m : e : w < e ? w : e : p < w ? p < e ? p : e : w < e ? w : e, f = k > v ? k > x ? k > f ? k : f : x > f ? x : f : v > x ? v > f ? v : f : x > f ? x : f, h = m > p ? m > w ? m > h ? m : h : w > h ? w : h : p > w ? p > h ? p : h : w > h ? w : h);
		b()
	};
	this.addRectangle = function (k) {
		n ? (n = !1, c = k.getLeft(), e = k.getTop(), f = k.getRight(), h = k.getBottom()) : (c = c < k.getLeft() ? c : k.getLeft(), e = e < k.getTop() ? e : k.getTop(), f = f > k.getRight() ? f : k.getRight(), h = h > k.getBottom() ? h : k.getBottom());
		b()
	};
	this.inflate = function (k) {
		c -= k;
		e -= k;
		f += k;
		h += k;
		b()
	};
	this.minSelf = function (k) {
		c = c > k.getLeft() ? c : k.getLeft();
		e = e > k.getTop() ? e : k.getTop();
		f = f < k.getRight() ? f : k.getRight();
		h = h < k.getBottom() ? h : k.getBottom();
		b()
	};
	this.intersects = function (b) {
		return Math.min(f, b.getRight()) - Math.max(c, b.getLeft()) >= 0 && Math.min(h, b.getBottom()) - Math.max(e, b.getTop()) >= 0
	};
	this.empty = function () {
		n = !0;
		h = f = e = c = 0;
		b()
	};
	this.isEmpty = function () {
		return n
	}
};
THREE.Matrix3 = function () {
	this.m = []
};
THREE.Matrix3.prototype = {
	constructor: THREE.Matrix3,
	transpose: function () {
		var b, c = this.m;
		b = c[1];
		c[1] = c[3];
		c[3] = b;
		b = c[2];
		c[2] = c[6];
		c[6] = b;
		b = c[5];
		c[5] = c[7];
		c[7] = b;
		return this
	},
	transposeIntoArray: function (b) {
		var c = this.m;
		b[0] = c[0];
		b[1] = c[3];
		b[2] = c[6];
		b[3] = c[1];
		b[4] = c[4];
		b[5] = c[7];
		b[6] = c[2];
		b[7] = c[5];
		b[8] = c[8];
		return this
	}
};
THREE.Matrix4 = function (b, c, e, f, h, k, m, n, t, u, v, p, x, w, A, z) {
	this.set(b !== void 0 ? b : 1, c || 0, e || 0, f || 0, h || 0, k !== void 0 ? k : 1, m || 0, n || 0, t || 0, u || 0, v !== void 0 ? v : 1, p || 0, x || 0, w || 0, A || 0, z !== void 0 ? z : 1);
	this.flat = Array(16);
	this.m33 = new THREE.Matrix3
};
THREE.Matrix4.prototype = {
	constructor: THREE.Matrix4,
	set: function (b, c, e, f, h, k, m, n, t, u, v, p, x, w, A, z) {
		this.n11 = b;
		this.n12 = c;
		this.n13 = e;
		this.n14 = f;
		this.n21 = h;
		this.n22 = k;
		this.n23 = m;
		this.n24 = n;
		this.n31 = t;
		this.n32 = u;
		this.n33 = v;
		this.n34 = p;
		this.n41 = x;
		this.n42 = w;
		this.n43 = A;
		this.n44 = z;
		return this
	},
	identity: function () {
		this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this
	},
	copy: function (b) {
		this.set(b.n11, b.n12, b.n13, b.n14, b.n21, b.n22, b.n23, b.n24, b.n31, b.n32, b.n33, b.n34, b.n41, b.n42, b.n43, b.n44);
		return this
	},
	lookAt: function (b, c, e) {
		var f = THREE.Matrix4.__v1,
			h = THREE.Matrix4.__v2,
			k = THREE.Matrix4.__v3;
		k.sub(b, c).normalize();
		if (k.length() === 0) k.z = 1;
		f.cross(e, k).normalize();
		f.length() === 0 && (k.x += 1.0E-4, f.cross(e, k).normalize());
		h.cross(k, f).normalize();
		this.n11 = f.x;
		this.n12 = h.x;
		this.n13 = k.x;
		this.n21 = f.y;
		this.n22 = h.y;
		this.n23 = k.y;
		this.n31 = f.z;
		this.n32 = h.z;
		this.n33 = k.z;
		return this
	},
	multiplyVector3: function (b) {
		var c = b.x,
			e = b.y,
			f = b.z,
			h = 1 / (this.n41 * c + this.n42 * e + this.n43 * f + this.n44);
		b.x = (this.n11 * c + this.n12 * e + this.n13 * f + this.n14) * h;
		b.y = (this.n21 * c + this.n22 * e + this.n23 * f + this.n24) * h;
		b.z = (this.n31 * c + this.n32 * e + this.n33 * f + this.n34) * h;
		return b
	},
	multiplyVector4: function (b) {
		var c = b.x,
			e = b.y,
			f = b.z,
			h = b.w;
		b.x = this.n11 * c + this.n12 * e + this.n13 * f + this.n14 * h;
		b.y = this.n21 * c + this.n22 * e + this.n23 * f + this.n24 * h;
		b.z = this.n31 * c + this.n32 * e + this.n33 * f + this.n34 * h;
		b.w = this.n41 * c + this.n42 * e + this.n43 * f + this.n44 * h;
		return b
	},
	rotateAxis: function (b) {
		var c = b.x,
			e = b.y,
			f = b.z;
		b.x = c * this.n11 + e * this.n12 + f * this.n13;
		b.y = c * this.n21 + e * this.n22 + f * this.n23;
		b.z = c * this.n31 + e * this.n32 + f * this.n33;
		b.normalize();
		return b
	},
	crossVector: function (b) {
		var c = new THREE.Vector4;
		c.x = this.n11 * b.x + this.n12 * b.y + this.n13 * b.z + this.n14 * b.w;
		c.y = this.n21 * b.x + this.n22 * b.y + this.n23 * b.z + this.n24 * b.w;
		c.z = this.n31 * b.x + this.n32 * b.y + this.n33 * b.z + this.n34 * b.w;
		c.w = b.w ? this.n41 * b.x + this.n42 * b.y + this.n43 * b.z + this.n44 * b.w : 1;
		return c
	},
	multiply: function (b, c) {
		var e = b.n11,
			f = b.n12,
			h = b.n13,
			k = b.n14,
			m = b.n21,
			n = b.n22,
			t = b.n23,
			u = b.n24,
			v = b.n31,
			p = b.n32,
			x = b.n33,
			w = b.n34,
			A = b.n41,
			z = b.n42,
			y = b.n43,
			C = b.n44,
			E = c.n11,
			D = c.n12,
			F = c.n13,
			M = c.n14,
			N = c.n21,
			G = c.n22,
			H = c.n23,
			K = c.n24,
			Z = c.n31,
			L = c.n32,
			P = c.n33,
			U = c.n34,
			Y = c.n41,
			X = c.n42,
			o = c.n43,
			ea = c.n44;
		this.n11 = e * E + f * N + h * Z + k * Y;
		this.n12 = e * D + f * G + h * L + k * X;
		this.n13 = e * F + f * H + h * P + k * o;
		this.n14 = e * M + f * K + h * U + k * ea;
		this.n21 = m * E + n * N + t * Z + u * Y;
		this.n22 = m * D + n * G + t * L + u * X;
		this.n23 = m * F + n * H + t * P + u * o;
		this.n24 = m * M + n * K + t * U + u * ea;
		this.n31 = v * E + p * N + x * Z + w * Y;
		this.n32 = v * D + p * G + x * L + w * X;
		this.n33 = v * F + p * H + x * P + w * o;
		this.n34 = v * M + p * K + x * U + w * ea;
		this.n41 = A * E + z * N + y * Z + C * Y;
		this.n42 = A * D + z * G + y * L + C * X;
		this.n43 = A * F + z * H + y * P + C * o;
		this.n44 = A * M + z * K + y * U + C * ea;
		return this
	},
	multiplyToArray: function (b, c, e) {
		this.multiply(b, c);
		e[0] = this.n11;
		e[1] = this.n21;
		e[2] = this.n31;
		e[3] = this.n41;
		e[4] = this.n12;
		e[5] = this.n22;
		e[6] = this.n32;
		e[7] = this.n42;
		e[8] = this.n13;
		e[9] = this.n23;
		e[10] = this.n33;
		e[11] = this.n43;
		e[12] = this.n14;
		e[13] = this.n24;
		e[14] = this.n34;
		e[15] = this.n44;
		return this
	},
	multiplySelf: function (b) {
		this.multiply(this, b);
		return this
	},
	multiplyScalar: function (b) {
		this.n11 *= b;
		this.n12 *= b;
		this.n13 *= b;
		this.n14 *= b;
		this.n21 *= b;
		this.n22 *= b;
		this.n23 *= b;
		this.n24 *= b;
		this.n31 *= b;
		this.n32 *= b;
		this.n33 *= b;
		this.n34 *= b;
		this.n41 *= b;
		this.n42 *= b;
		this.n43 *= b;
		this.n44 *= b;
		return this
	},
	determinant: function () {
		var b = this.n11,
			c = this.n12,
			e = this.n13,
			f = this.n14,
			h = this.n21,
			k = this.n22,
			m = this.n23,
			n = this.n24,
			t = this.n31,
			u = this.n32,
			v = this.n33,
			p = this.n34,
			x = this.n41,
			w = this.n42,
			A = this.n43,
			z = this.n44;
		return f * m * u * x - e * n * u * x - f * k * v * x + c * n * v * x + e * k * p * x - c * m * p * x - f * m * t * w + e * n * t * w + f * h * v * w - b * n * v * w - e * h * p * w + b * m * p * w + f * k * t * A - c * n * t * A - f * h * u * A + b * n * u * A + c * h * p * A - b * k * p * A - e * k * t * z + c * m * t * z + e * h * u * z - b * m * u * z - c * h * v * z + b * k * v * z
	},
	transpose: function () {
		var b;
		b = this.n21;
		this.n21 = this.n12;
		this.n12 = b;
		b = this.n31;
		this.n31 = this.n13;
		this.n13 = b;
		b = this.n32;
		this.n32 = this.n23;
		this.n23 = b;
		b = this.n41;
		this.n41 = this.n14;
		this.n14 = b;
		b = this.n42;
		this.n42 = this.n24;
		this.n24 = b;
		b = this.n43;
		this.n43 = this.n34;
		this.n43 = b;
		return this
	},
	clone: function () {
		var b = new THREE.Matrix4;
		b.n11 = this.n11;
		b.n12 = this.n12;
		b.n13 = this.n13;
		b.n14 = this.n14;
		b.n21 = this.n21;
		b.n22 = this.n22;
		b.n23 = this.n23;
		b.n24 = this.n24;
		b.n31 = this.n31;
		b.n32 = this.n32;
		b.n33 = this.n33;
		b.n34 = this.n34;
		b.n41 = this.n41;
		b.n42 = this.n42;
		b.n43 = this.n43;
		b.n44 = this.n44;
		return b
	},
	flatten: function () {
		this.flat[0] = this.n11;
		this.flat[1] = this.n21;
		this.flat[2] = this.n31;
		this.flat[3] = this.n41;
		this.flat[4] = this.n12;
		this.flat[5] = this.n22;
		this.flat[6] = this.n32;
		this.flat[7] = this.n42;
		this.flat[8] = this.n13;
		this.flat[9] = this.n23;
		this.flat[10] = this.n33;
		this.flat[11] = this.n43;
		this.flat[12] = this.n14;
		this.flat[13] = this.n24;
		this.flat[14] = this.n34;
		this.flat[15] = this.n44;
		return this.flat
	},
	flattenToArray: function (b) {
		b[0] = this.n11;
		b[1] = this.n21;
		b[2] = this.n31;
		b[3] = this.n41;
		b[4] = this.n12;
		b[5] = this.n22;
		b[6] = this.n32;
		b[7] = this.n42;
		b[8] = this.n13;
		b[9] = this.n23;
		b[10] = this.n33;
		b[11] = this.n43;
		b[12] = this.n14;
		b[13] = this.n24;
		b[14] = this.n34;
		b[15] = this.n44;
		return b
	},
	flattenToArrayOffset: function (b, c) {
		b[c] = this.n11;
		b[c + 1] = this.n21;
		b[c + 2] = this.n31;
		b[c + 3] = this.n41;
		b[c + 4] = this.n12;
		b[c + 5] = this.n22;
		b[c + 6] = this.n32;
		b[c + 7] = this.n42;
		b[c + 8] = this.n13;
		b[c + 9] = this.n23;
		b[c + 10] = this.n33;
		b[c + 11] = this.n43;
		b[c + 12] = this.n14;
		b[c + 13] = this.n24;
		b[c + 14] = this.n34;
		b[c + 15] = this.n44;
		return b
	},
	setTranslation: function (b, c, e) {
		this.set(1, 0, 0, b, 0, 1, 0, c, 0, 0, 1, e, 0, 0, 0, 1);
		return this
	},
	setScale: function (b, c, e) {
		this.set(b, 0, 0, 0, 0, c, 0, 0, 0, 0, e, 0, 0, 0, 0, 1);
		return this
	},
	setRotationX: function (b) {
		var c = Math.cos(b),
			b = Math.sin(b);
		this.set(1, 0, 0, 0, 0, c, -b, 0, 0, b, c, 0, 0, 0, 0, 1);
		return this
	},
	setRotationY: function (b) {
		var c = Math.cos(b),
			b = Math.sin(b);
		this.set(c, 0, b, 0, 0, 1, 0, 0, -b, 0, c, 0, 0, 0, 0, 1);
		return this
	},
	setRotationZ: function (b) {
		var c = Math.cos(b),
			b = Math.sin(b);
		this.set(c, -b, 0, 0, b, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this
	},
	setRotationAxis: function (b, c) {
		var e = Math.cos(c),
			f = Math.sin(c),
			h = 1 - e,
			k = b.x,
			m = b.y,
			n = b.z,
			t = h * k,
			u = h * m;
		this.set(t * k + e, t * m - f * n, t * n + f * m, 0, t * m + f * n, u * m + e, u * n - f * k, 0, t * n - f * m, u * n + f * k, h * n * n + e, 0, 0, 0, 0, 1);
		return this
	},
	setPosition: function (b) {
		this.n14 = b.x;
		this.n24 = b.y;
		this.n34 = b.z;
		return this
	},
	getPosition: function () {
		if (!this.position) this.position = new THREE.Vector3;
		this.position.set(this.n14, this.n24, this.n34);
		return this.position
	},
	getColumnX: function () {
		if (!this.columnX) this.columnX = new THREE.Vector3;
		this.columnX.set(this.n11, this.n21, this.n31);
		return this.columnX
	},
	getColumnY: function () {
		if (!this.columnY) this.columnY = new THREE.Vector3;
		this.columnY.set(this.n12, this.n22, this.n32);
		return this.columnY
	},
	getColumnZ: function () {
		if (!this.columnZ) this.columnZ = new THREE.Vector3;
		this.columnZ.set(this.n13, this.n23, this.n33);
		return this.columnZ
	},
	setRotationFromEuler: function (b, c) {
		var e = b.x,
			f = b.y,
			h = b.z,
			k = Math.cos(e),
			e = Math.sin(e),
			m = Math.cos(f),
			f = Math.sin(f),
			n = Math.cos(h),
			h = Math.sin(h);
		switch (c) {
		case "YXZ":
			var t = m * n,
				u = m * h,
				v = f * n,
				p = f * h;
			this.n11 = t + p * e;
			this.n12 = v * e - u;
			this.n13 = k * f;
			this.n21 = k * h;
			this.n22 = k * n;
			this.n23 = -e;
			this.n31 = u * e - v;
			this.n32 = p + t * e;
			this.n33 = k * m;
			break;
		case "ZXY":
			t = m * n;
			u = m * h;
			v = f * n;
			p = f * h;
			this.n11 = t - p * e;
			this.n12 = -k * h;
			this.n13 = v + u * e;
			this.n21 = u + v * e;
			this.n22 = k * n;
			this.n23 = p - t * e;
			this.n31 = -k * f;
			this.n32 = e;
			this.n33 = k * m;
			break;
		case "ZYX":
			t = k * n;
			u = k * h;
			v = e * n;
			p = e * h;
			this.n11 = m * n;
			this.n12 = v * f - u;
			this.n13 = t * f + p;
			this.n21 = m * h;
			this.n22 = p * f + t;
			this.n23 = u * f - v;
			this.n31 = -f;
			this.n32 = e * m;
			this.n33 = k * m;
			break;
		case "YZX":
			t = k * m;
			u = k * f;
			v = e * m;
			p = e * f;
			this.n11 = m * n;
			this.n12 = p - t * h;
			this.n13 = v * h + u;
			this.n21 = h;
			this.n22 = k * n;
			this.n23 = -e * n;
			this.n31 = -f * n;
			this.n32 = u * h + v;
			this.n33 = t - p * h;
			break;
		case "XZY":
			t = k * m;
			u = k * f;
			v = e * m;
			p = e * f;
			this.n11 = m * n;
			this.n12 = -h;
			this.n13 = f * n;
			this.n21 = t * h + p;
			this.n22 = k * n;
			this.n23 = u * h - v;
			this.n31 = v * h - u;
			this.n32 = e * n;
			this.n33 = p * h + t;
			break;
		default:
			t = k * n, u = k * h, v = e * n, p = e * h, this.n11 = m * n, this.n12 = -m * h, this.n13 = f, this.n21 = u + v * f, this.n22 = t - p * f, this.n23 = -e * m, this.n31 = p - t * f, this.n32 = v + u * f, this.n33 = k * m
		}
		return this
	},
	setRotationFromQuaternion: function (b) {
		var c = b.x,
			e = b.y,
			f = b.z,
			h = b.w,
			k = c + c,
			m = e + e,
			n = f + f,
			b = c * k,
			t = c * m;
		c *= n;
		var u = e * m;
		e *= n;
		f *= n;
		k *= h;
		m *= h;
		h *= n;
		this.n11 = 1 - (u + f);
		this.n12 = t - h;
		this.n13 = c + m;
		this.n21 = t + h;
		this.n22 = 1 - (b + f);
		this.n23 = e - k;
		this.n31 = c - m;
		this.n32 = e + k;
		this.n33 = 1 - (b + u);
		return this
	},
	scale: function (b) {
		var c = b.x,
			e = b.y,
			b = b.z;
		this.n11 *= c;
		this.n12 *= e;
		this.n13 *= b;
		this.n21 *= c;
		this.n22 *= e;
		this.n23 *= b;
		this.n31 *= c;
		this.n32 *= e;
		this.n33 *= b;
		this.n41 *= c;
		this.n42 *= e;
		this.n43 *= b;
		return this
	},
	compose: function (b, c, e) {
		var f = THREE.Matrix4.__m1,
			h = THREE.Matrix4.__m2;
		f.identity();
		f.setRotationFromQuaternion(c);
		h.setScale(e.x, e.y, e.z);
		this.multiply(f, h);
		this.n14 = b.x;
		this.n24 = b.y;
		this.n34 = b.z;
		return this
	},
	decompose: function (b, c, e) {
		var f = THREE.Matrix4.__v1,
			h = THREE.Matrix4.__v2,
			k = THREE.Matrix4.__v3;
		f.set(this.n11, this.n21, this.n31);
		h.set(this.n12, this.n22, this.n32);
		k.set(this.n13, this.n23, this.n33);
		b = b instanceof THREE.Vector3 ? b : new THREE.Vector3;
		c = c instanceof THREE.Quaternion ? c : new THREE.Quaternion;
		e = e instanceof THREE.Vector3 ? e : new THREE.Vector3;
		e.x = f.length();
		e.y = h.length();
		e.z = k.length();
		b.x = this.n14;
		b.y = this.n24;
		b.z = this.n34;
		f = THREE.Matrix4.__m1;
		f.copy(this);
		f.n11 /= e.x;
		f.n21 /= e.x;
		f.n31 /= e.x;
		f.n12 /= e.y;
		f.n22 /= e.y;
		f.n32 /= e.y;
		f.n13 /= e.z;
		f.n23 /= e.z;
		f.n33 /= e.z;
		c.setFromRotationMatrix(f);
		return [b, c, e]
	},
	extractPosition: function (b) {
		this.n14 = b.n14;
		this.n24 = b.n24;
		this.n34 = b.n34
	},
	extractRotation: function (b, c) {
		var e = 1 / c.x,
			f = 1 / c.y,
			h = 1 / c.z;
		this.n11 = b.n11 * e;
		this.n21 = b.n21 * e;
		this.n31 = b.n31 * e;
		this.n12 = b.n12 * f;
		this.n22 = b.n22 * f;
		this.n32 = b.n32 * f;
		this.n13 = b.n13 * h;
		this.n23 = b.n23 * h;
		this.n33 = b.n33 * h
	}
};
THREE.Matrix4.makeInvert = function (b, c) {
	var e = b.n11,
		f = b.n12,
		h = b.n13,
		k = b.n14,
		m = b.n21,
		n = b.n22,
		t = b.n23,
		u = b.n24,
		v = b.n31,
		p = b.n32,
		x = b.n33,
		w = b.n34,
		A = b.n41,
		z = b.n42,
		y = b.n43,
		C = b.n44;
	c === void 0 && (c = new THREE.Matrix4);
	c.n11 = t * w * z - u * x * z + u * p * y - n * w * y - t * p * C + n * x * C;
	c.n12 = k * x * z - h * w * z - k * p * y + f * w * y + h * p * C - f * x * C;
	c.n13 = h * u * z - k * t * z + k * n * y - f * u * y - h * n * C + f * t * C;
	c.n14 = k * t * p - h * u * p - k * n * x + f * u * x + h * n * w - f * t * w;
	c.n21 = u * x * A - t * w * A - u * v * y + m * w * y + t * v * C - m * x * C;
	c.n22 = h * w * A - k * x * A + k * v * y - e * w * y - h * v * C + e * x * C;
	c.n23 = k * t * A - h * u * A - k * m * y + e * u * y + h * m * C - e * t * C;
	c.n24 = h * u * v - k * t * v + k * m * x - e * u * x - h * m * w + e * t * w;
	c.n31 = n * w * A - u * p * A + u * v * z - m * w * z - n * v * C + m * p * C;
	c.n32 = k * p * A - f * w * A - k * v * z + e * w * z + f * v * C - e * p * C;
	c.n33 = h * u * A - k * n * A + k * m * z - e * u * z - f * m * C + e * n * C;
	c.n34 = k * n * v - f * u * v - k * m * p + e * u * p + f * m * w - e * n * w;
	c.n41 = t * p * A - n * x * A - t * v * z + m * x * z + n * v * y - m * p * y;
	c.n42 = f * x * A - h * p * A + h * v * z - e * x * z - f * v * y + e * p * y;
	c.n43 = h * n * A - f * t * A - h * m * z + e * t * z + f * m * y - e * n * y;
	c.n44 = f * t * v - h * n * v + h * m * p - e * t * p - f * m * x + e * n * x;
	c.multiplyScalar(1 / b.determinant());
	return c
};
THREE.Matrix4.makeInvert3x3 = function (b) {
	var c = b.m33,
		e = c.m,
		f = b.n33 * b.n22 - b.n32 * b.n23,
		h = -b.n33 * b.n21 + b.n31 * b.n23,
		k = b.n32 * b.n21 - b.n31 * b.n22,
		m = -b.n33 * b.n12 + b.n32 * b.n13,
		n = b.n33 * b.n11 - b.n31 * b.n13,
		t = -b.n32 * b.n11 + b.n31 * b.n12,
		u = b.n23 * b.n12 - b.n22 * b.n13,
		v = -b.n23 * b.n11 + b.n21 * b.n13,
		p = b.n22 * b.n11 - b.n21 * b.n12,
		b = b.n11 * f + b.n21 * m + b.n31 * u;
	b == 0 && console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");
	b = 1 / b;
	e[0] = b * f;
	e[1] = b * h;
	e[2] = b * k;
	e[3] = b * m;
	e[4] = b * n;
	e[5] = b * t;
	e[6] = b * u;
	e[7] = b * v;
	e[8] = b * p;
	return c
};
THREE.Matrix4.makeFrustum = function (b, c, e, f, h, k) {
	var m;
	m = new THREE.Matrix4;
	m.n11 = 2 * h / (c - b);
	m.n12 = 0;
	m.n13 = (c + b) / (c - b);
	m.n14 = 0;
	m.n21 = 0;
	m.n22 = 2 * h / (f - e);
	m.n23 = (f + e) / (f - e);
	m.n24 = 0;
	m.n31 = 0;
	m.n32 = 0;
	m.n33 = -(k + h) / (k - h);
	m.n34 = -2 * k * h / (k - h);
	m.n41 = 0;
	m.n42 = 0;
	m.n43 = -1;
	m.n44 = 0;
	return m
};
THREE.Matrix4.makePerspective = function (b, c, e, f) {
	var h, b = e * Math.tan(b * Math.PI / 360);
	h = -b;
	return THREE.Matrix4.makeFrustum(h * c, b * c, h, b, e, f)
};
THREE.Matrix4.makeOrtho = function (b, c, e, f, h, k) {
	var m, n, t, u;
	m = new THREE.Matrix4;
	n = c - b;
	t = e - f;
	u = k - h;
	m.n11 = 2 / n;
	m.n12 = 0;
	m.n13 = 0;
	m.n14 = -((c + b) / n);
	m.n21 = 0;
	m.n22 = 2 / t;
	m.n23 = 0;
	m.n24 = -((e + f) / t);
	m.n31 = 0;
	m.n32 = 0;
	m.n33 = -2 / u;
	m.n34 = -((k + h) / u);
	m.n41 = 0;
	m.n42 = 0;
	m.n43 = 0;
	m.n44 = 1;
	return m
};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Matrix4.__m1 = new THREE.Matrix4;
THREE.Matrix4.__m2 = new THREE.Matrix4;
THREE.Object3D = function () {
	this.name = "";
	this.id = THREE.Object3DCount++;
	this.parent = void 0;
	this.children = [];
	this.up = new THREE.Vector3(0, 1, 0);
	this.position = new THREE.Vector3;
	this.rotation = new THREE.Vector3;
	this.eulerOrder = "XYZ";
	this.scale = new THREE.Vector3(1, 1, 1);
	this.flipSided = this.doubleSided = this.dynamic = !1;
	this.renderDepth = null;
	this.rotationAutoUpdate = !0;
	this.matrix = new THREE.Matrix4;
	this.matrixWorld = new THREE.Matrix4;
	this.matrixRotationWorld = new THREE.Matrix4;
	this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
	this.quaternion = new THREE.Quaternion;
	this.useQuaternion = !1;
	this.boundRadius = 0;
	this.boundRadiusScale = 1;
	this.visible = !0;
	this.receiveShadow = this.castShadow = !1;
	this.frustumCulled = !0;
	this._vector = new THREE.Vector3
};
THREE.Object3D.prototype = {
	constructor: THREE.Object3D,
	translate: function (b, c) {
		this.matrix.rotateAxis(c);
		this.position.addSelf(c.multiplyScalar(b))
	},
	translateX: function (b) {
		this.translate(b, this._vector.set(1, 0, 0))
	},
	translateY: function (b) {
		this.translate(b, this._vector.set(0, 1, 0))
	},
	translateZ: function (b) {
		this.translate(b, this._vector.set(0, 0, 1))
	},
	lookAt: function (b) {
		this.matrix.lookAt(b, this.position, this.up);
		this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
	},
	add: function (b) {
		if (this.children.indexOf(b) === -1) {
			b.parent !== void 0 && b.parent.removeChild(b);
			b.parent = this;
			this.children.push(b);
			for (var c = this; c.parent !== void 0;) c = c.parent;
			c !== void 0 && c instanceof THREE.Scene && c.addChildRecurse(b)
		}
	},
	remove: function (b) {
		var c = this,
			e = this.children.indexOf(b);
		if (e !== -1) {
			b.parent = void 0;
			for (this.children.splice(e, 1); c.parent !== void 0;) c = c.parent;
			c !== void 0 && c instanceof THREE.Scene && c.removeChildRecurse(b)
		}
	},
	getChildByName: function (b, c) {
		var e, f, h;
		e = 0;
		for (f = this.children.length; e < f; e++) {
			h = this.children[e];
			if (h.name === b) return h;
			if (c && (h = h.getChildByName(b, c), h !== void 0)) return h
		}
	},
	updateMatrix: function () {
		this.matrix.setPosition(this.position);
		this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder);
		if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z));
		this.matrixWorldNeedsUpdate = !0
	},
	update: function (b, c, e) {
		this.matrixAutoUpdate && this.updateMatrix();
		if (this.matrixWorldNeedsUpdate || c) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixRotationWorld.extractRotation(this.matrixWorld, this.scale), this.matrixWorldNeedsUpdate = !1, c = !0;
		for (var b = 0, f = this.children.length; b < f; b++) this.children[b].update(this.matrixWorld, c, e)
	},
	addChild: function (b) {
		console.warn("DEPRECATED: Object3D.addChild() is now Object3D.add().");
		this.add(b)
	},
	removeChild: function (b) {
		console.warn("DEPRECATED: Object3D.removeChild() is now Object3D.remove().");
		this.remove(b)
	}
};
THREE.Object3DCount = 0;
THREE.Projector = function () {
	function b() {
		var b = t[n] = t[n] || new THREE.RenderableVertex;
		n++;
		return b
	}

	function c(b, c) {
		return c.z - b.z
	}

	function e(b, c) {
		var e = 0,
			f = 1,
			k = b.z + b.w,
			h = c.z + c.w,
			m = -b.z + b.w,
			n = -c.z + c.w;
		return k >= 0 && h >= 0 && m >= 0 && n >= 0 ? !0 : k < 0 && h < 0 || m < 0 && n < 0 ? !1 : (k < 0 ? e = Math.max(e, k / (k - h)) : h < 0 && (f = Math.min(f, k / (k - h))), m < 0 ? e = Math.max(e, m / (m - n)) : n < 0 && (f = Math.min(f, m / (m - n))), f < e ? !1 : (b.lerpSelf(c, e), c.lerpSelf(b, 1 - f), !0))
	}
	var f, h, k = [],
		m, n, t = [],
		u, v, p = [],
		x, w = [],
		A, z, y = [],
		C, E, D = [],
		F = [],
		M = [],
		N = new THREE.Vector4,
		G = new THREE.Vector4,
		H = new THREE.Matrix4,
		K = new THREE.Matrix4,
		Z = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
		L = new THREE.Vector4,
		P = new THREE.Vector4;
	this.projectVector = function (b, c) {
		H.multiply(c.projectionMatrix, c.matrixWorldInverse);
		H.multiplyVector3(b);
		return b
	};
	this.unprojectVector = function (b, c) {
		H.multiply(c.matrixWorld, THREE.Matrix4.makeInvert(c.projectionMatrix));
		H.multiplyVector3(b);
		return b
	};
	this.pickingRay = function (b, c) {
		var e;
		b.z = -1;
		e = new THREE.Vector3(b.x, b.y, 1);
		this.unprojectVector(b, c);
		this.unprojectVector(e, c);
		e.subSelf(b).normalize();
		return new THREE.Ray(b, e)
	};
	this.projectObjects = function (b, e, m) {
		var o, n;
		h = F.length = 0;
		o = b.objects;
		b = 0;
		for (e = o.length; b < e; b++) {
			n = o[b];
			var t;
			if (!(t = !n.visible)) if (t = n instanceof THREE.Mesh) if (t = n.frustumCulled) {
				a: {
					t = void 0;
					for (var u = n.matrixWorld, w = -n.geometry.boundingSphere.radius * Math.max(n.scale.x, Math.max(n.scale.y, n.scale.z)), p = 0; p < 6; p++) if (t = Z[p].x * u.n14 + Z[p].y * u.n24 + Z[p].z * u.n34 + Z[p].w, t <= w) {
						t = !1;
						break a
					}
					t = !0
				}
				t = !t
			}
			if (!t) t = k[h] = k[h] || new THREE.RenderableObject, h++, f = t, N.copy(n.position), H.multiplyVector3(N), f.object = n, f.z = N.z, F.push(f)
		}
		m && F.sort(c);
		return F
	};
	this.projectScene = function (f, k, h) {
		var o = k.near,
			F = k.far,
			N, pa, fa, ma, da, la, ga, $, ca, aa, ha, ka, sa, J, Q, na, ra;
		E = z = x = v = M.length = 0;
		k.matrixAutoUpdate && k.update(void 0, !0);
		f.update(void 0, !1, k);
		H.multiply(k.projectionMatrix, k.matrixWorldInverse);
		Z[0].set(H.n41 - H.n11, H.n42 - H.n12, H.n43 - H.n13, H.n44 - H.n14);
		Z[1].set(H.n41 + H.n11, H.n42 + H.n12, H.n43 + H.n13, H.n44 + H.n14);
		Z[2].set(H.n41 + H.n21, H.n42 + H.n22, H.n43 + H.n23, H.n44 + H.n24);
		Z[3].set(H.n41 - H.n21, H.n42 - H.n22, H.n43 - H.n23, H.n44 - H.n24);
		Z[4].set(H.n41 - H.n31, H.n42 - H.n32, H.n43 - H.n33, H.n44 - H.n34);
		Z[5].set(H.n41 + H.n31, H.n42 + H.n32, H.n43 + H.n33, H.n44 + H.n34);
		for (N = 0; N < 6; N++) ca = Z[N], ca.divideScalar(Math.sqrt(ca.x * ca.x + ca.y * ca.y + ca.z * ca.z));
		ca = this.projectObjects(f, k, !0);
		f = 0;
		for (N = ca.length; f < N; f++) if (aa = ca[f].object, aa.visible) if (ha = aa.matrixWorld, ka = aa.matrixRotationWorld, sa = aa.materials, J = aa.overdraw, n = 0, aa instanceof THREE.Mesh) {
			Q = aa.geometry;
			ma = Q.vertices;
			na = Q.faces;
			Q = Q.faceVertexUvs;
			pa = 0;
			for (fa = ma.length; pa < fa; pa++) m = b(), m.positionWorld.copy(ma[pa].position), ha.multiplyVector3(m.positionWorld), m.positionScreen.copy(m.positionWorld), H.multiplyVector4(m.positionScreen), m.positionScreen.x /= m.positionScreen.w, m.positionScreen.y /= m.positionScreen.w, m.visible = m.positionScreen.z > o && m.positionScreen.z < F;
			ma = 0;
			for (pa = na.length; ma < pa; ma++) {
				fa = na[ma];
				if (fa instanceof THREE.Face3) if (da = t[fa.a], la = t[fa.b], ga = t[fa.c], da.visible && la.visible && ga.visible && (aa.doubleSided || aa.flipSided != (ga.positionScreen.x - da.positionScreen.x) * (la.positionScreen.y - da.positionScreen.y) - (ga.positionScreen.y - da.positionScreen.y) * (la.positionScreen.x - da.positionScreen.x) < 0)) $ = p[v] = p[v] || new THREE.RenderableFace3, v++, u = $, u.v1.copy(da), u.v2.copy(la), u.v3.copy(ga);
				else continue;
				else if (fa instanceof THREE.Face4) if (da = t[fa.a], la = t[fa.b], ga = t[fa.c], $ = t[fa.d], da.visible && la.visible && ga.visible && $.visible && (aa.doubleSided || aa.flipSided != (($.positionScreen.x - da.positionScreen.x) * (la.positionScreen.y - da.positionScreen.y) - ($.positionScreen.y - da.positionScreen.y) * (la.positionScreen.x - da.positionScreen.x) < 0 || (la.positionScreen.x - ga.positionScreen.x) * ($.positionScreen.y - ga.positionScreen.y) - (la.positionScreen.y - ga.positionScreen.y) * ($.positionScreen.x - ga.positionScreen.x) < 0))) ra = w[x] = w[x] || new THREE.RenderableFace4, x++, u = ra, u.v1.copy(da), u.v2.copy(la), u.v3.copy(ga), u.v4.copy($);
				else continue;
				u.normalWorld.copy(fa.normal);
				ka.multiplyVector3(u.normalWorld);
				u.centroidWorld.copy(fa.centroid);
				ha.multiplyVector3(u.centroidWorld);
				u.centroidScreen.copy(u.centroidWorld);
				H.multiplyVector3(u.centroidScreen);
				ga = fa.vertexNormals;
				da = 0;
				for (la = ga.length; da < la; da++) $ = u.vertexNormalsWorld[da], $.copy(ga[da]), ka.multiplyVector3($);
				da = 0;
				for (la = Q.length; da < la; da++) if (ra = Q[da][ma]) {
					ga = 0;
					for ($ = ra.length; ga < $; ga++) u.uvs[da][ga] = ra[ga]
				}
				u.meshMaterials = sa;
				u.faceMaterials = fa.materials;
				u.overdraw = J;
				u.z = u.centroidScreen.z;
				M.push(u)
			}
		}
		else if (aa instanceof THREE.Line) {
			K.multiply(H, ha);
			ma = aa.geometry.vertices;
			da = b();
			da.positionScreen.copy(ma[0].position);
			K.multiplyVector4(da.positionScreen);
			pa = 1;
			for (fa = ma.length; pa < fa; pa++) if (da = b(), da.positionScreen.copy(ma[pa].position), K.multiplyVector4(da.positionScreen), la = t[n - 2], L.copy(da.positionScreen), P.copy(la.positionScreen), e(L, P)) L.multiplyScalar(1 / L.w), P.multiplyScalar(1 / P.w), ha = y[z] = y[z] || new THREE.RenderableLine, z++, A = ha, A.v1.positionScreen.copy(L), A.v2.positionScreen.copy(P), A.z = Math.max(L.z, P.z), A.materials = aa.materials, M.push(A)
		}
		else if (aa instanceof THREE.Particle && (G.set(aa.matrixWorld.n14, aa.matrixWorld.n24, aa.matrixWorld.n34, 1), H.multiplyVector4(G), G.z /= G.w, G.z > 0 && G.z < 1)) ha = D[E] = D[E] || new THREE.RenderableParticle, E++, C = ha, C.x = G.x / G.w, C.y = G.y / G.w, C.z = G.z, C.rotation = aa.rotation.z, C.scale.x = aa.scale.x * Math.abs(C.x - (G.x + k.projectionMatrix.n11) / (G.w + k.projectionMatrix.n14)), C.scale.y = aa.scale.y * Math.abs(C.y - (G.y + k.projectionMatrix.n22) / (G.w + k.projectionMatrix.n24)), C.materials = aa.materials, M.push(C);
		h && M.sort(c);
		return M
	}
};
THREE.Quaternion = function (b, c, e, f) {
	this.set(b || 0, c || 0, e || 0, f !== void 0 ? f : 1)
};
THREE.Quaternion.prototype = {
	constructor: THREE.Quaternion,
	set: function (b, c, e, f) {
		this.x = b;
		this.y = c;
		this.z = e;
		this.w = f;
		return this
	},
	copy: function (b) {
		this.x = b.x;
		this.y = b.y;
		this.z = b.z;
		this.w = b.w;
		return this
	},
	setFromEuler: function (b) {
		var c = Math.PI / 360,
			e = b.x * c,
			f = b.y * c,
			h = b.z * c,
			b = Math.cos(f),
			f = Math.sin(f),
			c = Math.cos(-h),
			h = Math.sin(-h),
			k = Math.cos(e),
			e = Math.sin(e),
			m = b * c,
			n = f * h;
		this.w = m * k - n * e;
		this.x = m * e + n * k;
		this.y = f * c * k + b * h * e;
		this.z = b * h * k - f * c * e;
		return this
	},
	setFromAxisAngle: function (b, c) {
		var e = c / 2,
			f = Math.sin(e);
		this.x = b.x * f;
		this.y = b.y * f;
		this.z = b.z * f;
		this.w = Math.cos(e);
		return this
	},
	setFromRotationMatrix: function (b) {
		var c = Math.pow(b.determinant(), 1 / 3);
		this.w = Math.sqrt(Math.max(0, c + b.n11 + b.n22 + b.n33)) / 2;
		this.x = Math.sqrt(Math.max(0, c + b.n11 - b.n22 - b.n33)) / 2;
		this.y = Math.sqrt(Math.max(0, c - b.n11 + b.n22 - b.n33)) / 2;
		this.z = Math.sqrt(Math.max(0, c - b.n11 - b.n22 + b.n33)) / 2;
		this.x = b.n32 - b.n23 < 0 ? -Math.abs(this.x) : Math.abs(this.x);
		this.y = b.n13 - b.n31 < 0 ? -Math.abs(this.y) : Math.abs(this.y);
		this.z = b.n21 - b.n12 < 0 ? -Math.abs(this.z) : Math.abs(this.z);
		this.normalize();
		return this
	},
	calculateW: function () {
		this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
		return this
	},
	inverse: function () {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
		return this
	},
	length: function () {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
	},
	normalize: function () {
		var b = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		b == 0 ? this.w = this.z = this.y = this.x = 0 : (b = 1 / b, this.x *= b, this.y *= b, this.z *= b, this.w *= b);
		return this
	},
	multiplySelf: function (b) {
		var c = this.x,
			e = this.y,
			f = this.z,
			h = this.w,
			k = b.x,
			m = b.y,
			n = b.z,
			b = b.w;
		this.x = c * b + h * k + e * n - f * m;
		this.y = e * b + h * m + f * k - c * n;
		this.z = f * b + h * n + c * m - e * k;
		this.w = h * b - c * k - e * m - f * n;
		return this
	},
	multiply: function (b, c) {
		this.x = b.x * c.w + b.y * c.z - b.z * c.y + b.w * c.x;
		this.y = -b.x * c.z + b.y * c.w + b.z * c.x + b.w * c.y;
		this.z = b.x * c.y - b.y * c.x + b.z * c.w + b.w * c.z;
		this.w = -b.x * c.x - b.y * c.y - b.z * c.z + b.w * c.w;
		return this
	},
	multiplyVector3: function (b, c) {
		c || (c = b);
		var e = b.x,
			f = b.y,
			h = b.z,
			k = this.x,
			m = this.y,
			n = this.z,
			t = this.w,
			u = t * e + m * h - n * f,
			v = t * f + n * e - k * h,
			p = t * h + k * f - m * e,
			e = -k * e - m * f - n * h;
		c.x = u * t + e * -k + v * -n - p * -m;
		c.y = v * t + e * -m + p * -k - u * -n;
		c.z = p * t + e * -n + u * -m - v * -k;
		return c
	}
};
THREE.Quaternion.slerp = function (b, c, e, f) {
	var h = b.w * c.w + b.x * c.x + b.y * c.y + b.z * c.z;
	if (Math.abs(h) >= 1) return e.w = b.w, e.x = b.x, e.y = b.y, e.z = b.z, e;
	var k = Math.acos(h),
		m = Math.sqrt(1 - h * h);
	if (Math.abs(m) < 0.001) return e.w = 0.5 * (b.w + c.w), e.x = 0.5 * (b.x + c.x), e.y = 0.5 * (b.y + c.y), e.z = 0.5 * (b.z + c.z), e;
	h = Math.sin((1 - f) * k) / m;
	f = Math.sin(f * k) / m;
	e.w = b.w * h + c.w * f;
	e.x = b.x * h + c.x * f;
	e.y = b.y * h + c.y * f;
	e.z = b.z * h + c.z * f;
	return e
};
THREE.Vertex = function (b) {
	this.position = b || new THREE.Vector3
};
THREE.Face3 = function (b, c, e, f, h, k) {
	this.a = b;
	this.b = c;
	this.c = e;
	this.normal = f instanceof THREE.Vector3 ? f : new THREE.Vector3;
	this.vertexNormals = f instanceof Array ? f : [];
	this.color = h instanceof THREE.Color ? h : new THREE.Color;
	this.vertexColors = h instanceof Array ? h : [];
	this.vertexTangents = [];
	this.materials = k instanceof Array ? k : [k];
	this.centroid = new THREE.Vector3
};
THREE.Face4 = function (b, c, e, f, h, k, m) {
	this.a = b;
	this.b = c;
	this.c = e;
	this.d = f;
	this.normal = h instanceof THREE.Vector3 ? h : new THREE.Vector3;
	this.vertexNormals = h instanceof Array ? h : [];
	this.color = k instanceof THREE.Color ? k : new THREE.Color;
	this.vertexColors = k instanceof Array ? k : [];
	this.vertexTangents = [];
	this.materials = m instanceof Array ? m : [m];
	this.centroid = new THREE.Vector3
};
THREE.UV = function (b, c) {
	this.u = b || 0;
	this.v = c || 0
};
THREE.UV.prototype = {
	constructor: THREE.UV,
	set: function (b, c) {
		this.u = b;
		this.v = c;
		return this
	},
	copy: function (b) {
		this.u = b.u;
		this.v = b.v;
		return this
	},
	clone: function () {
		return new THREE.UV(this.u, this.v)
	}
};
THREE.Geometry = function () {
	this.id = THREE.GeometryCount++;
	this.vertices = [];
	this.colors = [];
	this.faces = [];
	this.faceUvs = [[]];
	this.faceVertexUvs = [[]];
	this.morphTargets = [];
	this.morphColors = [];
	this.skinWeights = [];
	this.skinIndices = [];
	this.boundingSphere = this.boundingBox = null;
	this.dynamic = this.hasTangents = !1
};
THREE.Geometry.prototype = {
	constructor: THREE.Geometry,
	applyMatrix: function (b) {
		var c = new THREE.Matrix4;
		c.extractRotation(b, new THREE.Vector3(1, 1, 1));
		for (var e = 0, f = this.vertices.length; e < f; e++) b.multiplyVector3(this.vertices[e].position);
		e = 0;
		for (f = this.faces.length; e < f; e++) {
			var h = this.faces[e];
			c.multiplyVector3(h.normal);
			for (var k = 0, m = h.vertexNormals.length; k < m; k++) c.multiplyVector3(h.vertexNormals[k]);
			b.multiplyVector3(h.centroid)
		}
	},
	computeCentroids: function () {
		var b, c, e;
		b = 0;
		for (c = this.faces.length; b < c; b++) e = this.faces[b], e.centroid.set(0, 0, 0), e instanceof THREE.Face3 ? (e.centroid.addSelf(this.vertices[e.a].position), e.centroid.addSelf(this.vertices[e.b].position), e.centroid.addSelf(this.vertices[e.c].position), e.centroid.divideScalar(3)) : e instanceof THREE.Face4 && (e.centroid.addSelf(this.vertices[e.a].position), e.centroid.addSelf(this.vertices[e.b].position), e.centroid.addSelf(this.vertices[e.c].position), e.centroid.addSelf(this.vertices[e.d].position), e.centroid.divideScalar(4))
	},
	computeFaceNormals: function (b) {
		var c, e, f, h, k, m, n = new THREE.Vector3,
			t = new THREE.Vector3;
		f = 0;
		for (h = this.faces.length; f < h; f++) {
			k = this.faces[f];
			if (b && k.vertexNormals.length) {
				n.set(0, 0, 0);
				c = 0;
				for (e = k.vertexNormals.length; c < e; c++) n.addSelf(k.vertexNormals[c]);
				n.divideScalar(3)
			}
			else c = this.vertices[k.a], e = this.vertices[k.b], m = this.vertices[k.c], n.sub(m.position, e.position), t.sub(c.position, e.position), n.crossSelf(t);
			n.isZero() || n.normalize();
			k.normal.copy(n)
		}
	},
	computeVertexNormals: function () {
		var b, c, e, f;
		if (this.__tmpVertices == void 0) {
			f = this.__tmpVertices = Array(this.vertices.length);
			b = 0;
			for (c = this.vertices.length; b < c; b++) f[b] = new THREE.Vector3;
			b = 0;
			for (c = this.faces.length; b < c; b++) if (e = this.faces[b], e instanceof THREE.Face3) e.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
			else if (e instanceof THREE.Face4) e.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
		}
		else {
			f = this.__tmpVertices;
			b = 0;
			for (c = this.vertices.length; b < c; b++) f[b].set(0, 0, 0)
		}
		b = 0;
		for (c = this.faces.length; b < c; b++) e = this.faces[b], e instanceof
		THREE.Face3 ? (f[e.a].addSelf(e.normal), f[e.b].addSelf(e.normal), f[e.c].addSelf(e.normal)) : e instanceof THREE.Face4 && (f[e.a].addSelf(e.normal), f[e.b].addSelf(e.normal), f[e.c].addSelf(e.normal), f[e.d].addSelf(e.normal));
		b = 0;
		for (c = this.vertices.length; b < c; b++) f[b].normalize();
		b = 0;
		for (c = this.faces.length; b < c; b++) e = this.faces[b], e instanceof THREE.Face3 ? (e.vertexNormals[0].copy(f[e.a]), e.vertexNormals[1].copy(f[e.b]), e.vertexNormals[2].copy(f[e.c])) : e instanceof THREE.Face4 && (e.vertexNormals[0].copy(f[e.a]), e.vertexNormals[1].copy(f[e.b]), e.vertexNormals[2].copy(f[e.c]), e.vertexNormals[3].copy(f[e.d]))
	},
	computeTangents: function () {
		function b(b, c, e, f, k, h, o) {
			n = b.vertices[c].position;
			t = b.vertices[e].position;
			u = b.vertices[f].position;
			v = m[k];
			p = m[h];
			x = m[o];
			w = t.x - n.x;
			A = u.x - n.x;
			z = t.y - n.y;
			y = u.y - n.y;
			C = t.z - n.z;
			E = u.z - n.z;
			D = p.u - v.u;
			F = x.u - v.u;
			M = p.v - v.v;
			N = x.v - v.v;
			G = 1 / (D * N - F * M);
			L.set((N * w - M * A) * G, (N * z - M * y) * G, (N * C - M * E) * G);
			P.set((D * A - F * w) * G, (D * y - F * z) * G, (D * E - F * C) * G);
			K[c].addSelf(L);
			K[e].addSelf(L);
			K[f].addSelf(L);
			Z[c].addSelf(P);
			Z[e].addSelf(P);
			Z[f].addSelf(P)
		}
		var c, e, f, h, k, m, n, t, u, v, p, x, w, A, z, y, C, E, D, F, M, N, G, H, K = [],
			Z = [],
			L = new THREE.Vector3,
			P = new THREE.Vector3,
			U = new THREE.Vector3,
			Y = new THREE.Vector3,
			X = new THREE.Vector3;
		c = 0;
		for (e = this.vertices.length; c < e; c++) K[c] = new THREE.Vector3, Z[c] = new THREE.Vector3;
		c = 0;
		for (e = this.faces.length; c < e; c++) k = this.faces[c], m = this.faceVertexUvs[0][c], k instanceof THREE.Face3 ? b(this, k.a, k.b, k.c, 0, 1, 2) : k instanceof THREE.Face4 && (b(this, k.a, k.b, k.c, 0, 1, 2), b(this, k.a, k.b, k.d, 0, 1, 3));
		var o = ["a", "b",
			            "c", "d"];
		c = 0;
		for (e = this.faces.length; c < e; c++) {
			k = this.faces[c];
			for (f = 0; f < k.vertexNormals.length; f++) X.copy(k.vertexNormals[f]), h = k[o[f]], H = K[h], U.copy(H), U.subSelf(X.multiplyScalar(X.dot(H))).normalize(), Y.cross(k.vertexNormals[f], H), h = Y.dot(Z[h]), h = h < 0 ? -1 : 1, k.vertexTangents[f] = new THREE.Vector4(U.x, U.y, U.z, h)
		}
		this.hasTangents = !0
	},
	computeBoundingBox: function () {
		var b;
		if (this.vertices.length > 0) {
			this.boundingBox = {
				x: [this.vertices[0].position.x, this.vertices[0].position.x],
				y: [this.vertices[0].position.y,
					                    this.vertices[0].position.y],
				z: [this.vertices[0].position.z, this.vertices[0].position.z]
			};
			for (var c = 1, e = this.vertices.length; c < e; c++) {
				b = this.vertices[c];
				if (b.position.x < this.boundingBox.x[0]) this.boundingBox.x[0] = b.position.x;
				else if (b.position.x > this.boundingBox.x[1]) this.boundingBox.x[1] = b.position.x;
				if (b.position.y < this.boundingBox.y[0]) this.boundingBox.y[0] = b.position.y;
				else if (b.position.y > this.boundingBox.y[1]) this.boundingBox.y[1] = b.position.y;
				if (b.position.z < this.boundingBox.z[0]) this.boundingBox.z[0] = b.position.z;
				else if (b.position.z > this.boundingBox.z[1]) this.boundingBox.z[1] = b.position.z
			}
		}
	},
	computeBoundingSphere: function () {
		for (var b = 0, c = 0, e = this.vertices.length; c < e; c++) b = Math.max(b, this.vertices[c].position.length());
		this.boundingSphere = {
			radius: b
		}
	},
	mergeVertices: function () {
		var b = {},
			c = [],
			e = [],
			f, h = Math.pow(10, 4),
			k, m;
		k = 0;
		for (m = this.vertices.length; k < m; k++) f = this.vertices[k].position, f = [Math.round(f.x * h), Math.round(f.y * h), Math.round(f.z * h)].join("_"), b[f] === void 0 ? (b[f] = k, c.push(this.vertices[k]), e[k] = c.length - 1) : e[k] = e[b[f]];
		k = 0;
		for (m = this.faces.length; k < m; k++) {
			b = this.faces[k];
			if (b instanceof THREE.Face3) b.a = e[b.a], b.b = e[b.b], b.c = e[b.c];
			if (b instanceof THREE.Face4) b.a = e[b.a], b.b = e[b.b], b.c = e[b.c], b.d = e[b.d]
		}
		this.vertices = c
	}
};
THREE.GeometryCount = 0;
THREE.Spline = function (b) {
	function c(b, c, e, f, k, h, m) {
		b = (e - b) * 0.5;
		f = (f - c) * 0.5;
		return (2 * (c - e) + b + f) * m + (-3 * (c - e) - 2 * b - f) * h + b * k + c
	}
	this.points = b;
	var e = [],
		f = {
			x: 0,
			y: 0,
			z: 0
		},
		h, k, m, n, t, u, v, p, x;
	this.initFromArray = function (b) {
		this.points = [];
		for (var c = 0; c < b.length; c++) this.points[c] = {
			x: b[c][0],
			y: b[c][1],
			z: b[c][2]
		}
	};
	this.getPoint = function (b) {
		h = (this.points.length - 1) * b;
		k = Math.floor(h);
		m = h - k;
		e[0] = k == 0 ? k : k - 1;
		e[1] = k;
		e[2] = k > this.points.length - 2 ? k : k + 1;
		e[3] = k > this.points.length - 3 ? k : k + 2;
		u = this.points[e[0]];
		v = this.points[e[1]];
		p = this.points[e[2]];
		x = this.points[e[3]];
		n = m * m;
		t = m * n;
		f.x = c(u.x, v.x, p.x, x.x, m, n, t);
		f.y = c(u.y, v.y, p.y, x.y, m, n, t);
		f.z = c(u.z, v.z, p.z, x.z, m, n, t);
		return f
	};
	this.getControlPointsArray = function () {
		var b, c, e = this.points.length,
			f = [];
		for (b = 0; b < e; b++) c = this.points[b], f[b] = [c.x, c.y, c.z];
		return f
	};
	this.getLength = function (b) {
		var c, e, f = c = c = 0,
			k = new THREE.Vector3,
			h = new THREE.Vector3,
			m = [],
			n = 0;
		m[0] = 0;
		b || (b = 100);
		e = this.points.length * b;
		k.copy(this.points[0]);
		for (b = 1; b < e; b++) c = b / e, position = this.getPoint(c), h.copy(position), n += h.distanceTo(k), k.copy(position), c *= this.points.length - 1, c = Math.floor(c), c != f && (m[c] = n, f = c);
		m[m.length] = n;
		return {
			chunks: m,
			total: n
		}
	};
	this.reparametrizeByArcLength = function (b) {
		var c, e, f, k, h, m, n = [],
			t = new THREE.Vector3,
			u = this.getLength();
		n.push(t.copy(this.points[0]).clone());
		for (c = 1; c < this.points.length; c++) {
			e = u.chunks[c] - u.chunks[c - 1];
			m = Math.ceil(b * e / u.total);
			k = (c - 1) / (this.points.length - 1);
			h = c / (this.points.length - 1);
			for (e = 1; e < m - 1; e++) f = k + e * (1 / m) * (h - k), position = this.getPoint(f), n.push(t.copy(position).clone());
			n.push(t.copy(this.points[c]).clone())
		}
		this.points = n
	}
};
THREE.Edge = function (b, c, e, f) {
	this.vertices = [b, c];
	this.vertexIndices = [e, f];
	this.faces = [];
	this.faceIndices = []
};
THREE.Camera = function () {
	if (arguments.length) return console.warn("DEPRECATED: Camera() is now PerspectiveCamera() or OrthographicCamera()."), new THREE.PerspectiveCamera(arguments[0], arguments[1], arguments[2], arguments[3]);
	THREE.Object3D.call(this);
	this.matrixWorldInverse = new THREE.Matrix4;
	this.projectionMatrix = new THREE.Matrix4
};
THREE.Camera.prototype = new THREE.Object3D;
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.lookAt = function (b) {
	this.matrix.lookAt(this.position, b, this.up);
	this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
};
THREE.Camera.prototype.update = function (b, c, e) {
	this.matrixAutoUpdate && this.updateMatrix();
	if (c || this.matrixWorldNeedsUpdate) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0, THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse);
	for (b = 0; b < this.children.length; b++) this.children[b].update(this.matrixWorld, c, e)
};
THREE.OrthographicCamera = function (b, c, e, f, h, k) {
	THREE.Camera.call(this);
	this.left = b;
	this.right = c;
	this.top = e;
	this.bottom = f;
	this.near = h !== void 0 ? h : 0.1;
	this.far = k !== void 0 ? k : 2E3;
	this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = new THREE.Camera;
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
	this.projectionMatrix = THREE.Matrix4.makeOrtho(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.PerspectiveCamera = function (b, c, e, f) {
	THREE.Camera.call(this);
	this.fov = b !== void 0 ? b : 50;
	this.aspect = c !== void 0 ? c : 1;
	this.near = e !== void 0 ? e : 0.1;
	this.far = f !== void 0 ? f : 2E3;
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = new THREE.Camera;
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens = function (b, c) {
	this.fov = 2 * Math.atan((c !== void 0 ? c : 43.25) / (b * 2));
	this.fov *= 180 / Math.PI;
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function (b, c, e, f, h, k) {
	this.fullWidth = b;
	this.fullHeight = c;
	this.x = e;
	this.y = f;
	this.width = h;
	this.height = k;
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
	if (this.fullWidth) {
		var b = this.fullWidth / this.fullHeight,
			c = Math.tan(this.fov * Math.PI / 360) * this.near,
			e = -c,
			f = b * e,
			b = Math.abs(b * c - f),
			e = Math.abs(c - e);
		this.projectionMatrix = THREE.Matrix4.makeFrustum(f + this.x * b / this.fullWidth, f + (this.x + this.width) * b / this.fullWidth, c - (this.y + this.height) * e / this.fullHeight, c - this.y * e / this.fullHeight, this.near, this.far)
	}
	else this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.Light = function (b) {
	THREE.Object3D.call(this);
	this.color = new THREE.Color(b)
};
THREE.Light.prototype = new THREE.Object3D;
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function (b) {
	THREE.Light.call(this, b)
};
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function (b, c, e) {
	THREE.Light.call(this, b);
	this.position = new THREE.Vector3(0, 1, 0);
	this.intensity = c !== void 0 ? c : 1;
	this.distance = e !== void 0 ? e : 0
};
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function (b, c, e) {
	THREE.Light.call(this, b);
	this.position = new THREE.Vector3(0, 0, 0);
	this.intensity = c !== void 0 ? c : 1;
	this.distance = e !== void 0 ? e : 0
};
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.SpotLight = function (b, c, e, f) {
	THREE.Light.call(this, b);
	this.position = new THREE.Vector3(0, 1, 0);
	this.target = new THREE.Object3D;
	this.intensity = c !== void 0 ? c : 1;
	this.distance = e !== void 0 ? e : 0;
	this.castShadow = f !== void 0 ? f : !1
};
THREE.SpotLight.prototype = new THREE.Light;
THREE.SpotLight.prototype.constructor = THREE.SpotLight;
THREE.Material = function (b) {
	this.name = "";
	this.id = THREE.MaterialCount++;
	b = b || {};
	this.opacity = b.opacity !== void 0 ? b.opacity : 1;
	this.transparent = b.transparent !== void 0 ? b.transparent : !1;
	this.blending = b.blending !== void 0 ? b.blending : THREE.NormalBlending;
	this.depthTest = b.depthTest !== void 0 ? b.depthTest : !0;
	this.depthWrite = b.depthWrite !== void 0 ? b.depthWrite : !0;
	this.polygonOffset = b.polygonOffset !== void 0 ? b.polygonOffset : !1;
	this.polygonOffsetFactor = b.polygonOffsetFactor !== void 0 ? b.polygonOffsetFactor : 0;
	this.polygonOffsetUnits = b.polygonOffsetUnits !== void 0 ? b.polygonOffsetUnits : 0;
	this.alphaTest = b.alphaTest !== void 0 ? b.alphaTest : 0
};
THREE.MaterialCount = 0;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.MultiplyBlending = 3;
THREE.AdditiveAlphaBlending = 4;
THREE.LineBasicMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.linewidth = b.linewidth !== void 0 ? b.linewidth : 1;
	this.linecap = b.linecap !== void 0 ? b.linecap : "round";
	this.linejoin = b.linejoin !== void 0 ? b.linejoin : "round";
	this.vertexColors = b.vertexColors ? b.vertexColors : !1;
	this.fog = b.fog !== void 0 ? b.fog : !0
};
THREE.LineBasicMaterial.prototype = new THREE.Material;
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.MeshBasicMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.map = b.map !== void 0 ? b.map : null;
	this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
	this.envMap = b.envMap !== void 0 ? b.envMap : null;
	this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
	this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
	this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
	this.fog = b.fog !== void 0 ? b.fog : !0;
	this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
	this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshBasicMaterial.prototype = new THREE.Material;
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.map = b.map !== void 0 ? b.map : null;
	this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
	this.envMap = b.envMap !== void 0 ? b.envMap : null;
	this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
	this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
	this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
	this.fog = b.fog !== void 0 ? b.fog : !0;
	this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
	this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshLambertMaterial.prototype = new THREE.Material;
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.ambient = b.ambient !== void 0 ? new THREE.Color(b.ambient) : new THREE.Color(328965);
	this.specular = b.specular !== void 0 ? new THREE.Color(b.specular) : new THREE.Color(1118481);
	this.shininess = b.shininess !== void 0 ? b.shininess : 30;
	this.map = b.map !== void 0 ? b.map : null;
	this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
	this.envMap = b.envMap !== void 0 ? b.envMap : null;
	this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
	this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
	this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
	this.fog = b.fog !== void 0 ? b.fog : !0;
	this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
	this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshPhongMaterial.prototype = new THREE.Material;
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1
};
THREE.MeshDepthMaterial.prototype = new THREE.Material;
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.shading = b.shading ? b.shading : THREE.FlatShading;
	this.wireframe = b.wireframe ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth ? b.wireframeLinewidth : 1
};
THREE.MeshNormalMaterial.prototype = new THREE.Material;
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function () {};
THREE.MeshShaderMaterial = function (b) {
	console.warn("DEPRECATED: MeshShaderMaterial() is now ShaderMaterial().");
	return new THREE.ShaderMaterial(b)
};
THREE.ParticleBasicMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.map = b.map !== void 0 ? b.map : null;
	this.size = b.size !== void 0 ? b.size : 1;
	this.sizeAttenuation = b.sizeAttenuation !== void 0 ? b.sizeAttenuation : !0;
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.fog = b.fog !== void 0 ? b.fog : !0
};
THREE.ParticleBasicMaterial.prototype = new THREE.Material;
THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
THREE.ParticleCanvasMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.program = b.program !== void 0 ? b.program : function () {}
};
THREE.ParticleCanvasMaterial.prototype = new THREE.Material;
THREE.ParticleCanvasMaterial.prototype.constructor = THREE.ParticleCanvasMaterial;
THREE.ParticleDOMMaterial = function (b) {
	THREE.Material.call(this);
	this.domElement = b
};
THREE.ShaderMaterial = function (b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.fragmentShader = b.fragmentShader !== void 0 ? b.fragmentShader : "void main() {}";
	this.vertexShader = b.vertexShader !== void 0 ? b.vertexShader : "void main() {}";
	this.uniforms = b.uniforms !== void 0 ? b.uniforms : {};
	this.attributes = b.attributes;
	this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.fog = b.fog !== void 0 ? b.fog : !1;
	this.lights = b.lights !== void 0 ? b.lights : !1;
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.ShaderMaterial.prototype = new THREE.Material;
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial;
THREE.Texture = function (b, c, e, f, h, k) {
	this.id = THREE.TextureCount++;
	this.image = b;
	this.mapping = c !== void 0 ? c : new THREE.UVMapping;
	this.wrapS = e !== void 0 ? e : THREE.ClampToEdgeWrapping;
	this.wrapT = f !== void 0 ? f : THREE.ClampToEdgeWrapping;
	this.magFilter = h !== void 0 ? h : THREE.LinearFilter;
	this.minFilter = k !== void 0 ? k : THREE.LinearMipMapLinearFilter;
	this.offset = new THREE.Vector2(0, 0);
	this.repeat = new THREE.Vector2(1, 1);
	this.needsUpdate = !1
};
THREE.Texture.prototype = {
	constructor: THREE.Texture,
	clone: function () {
		var b = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
		b.offset.copy(this.offset);
		b.repeat.copy(this.repeat);
		return b
	}
};
THREE.TextureCount = 0;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.CubeReflectionMapping = function () {};
THREE.CubeRefractionMapping = function () {};
THREE.LatitudeReflectionMapping = function () {};
THREE.LatitudeRefractionMapping = function () {};
THREE.SphericalReflectionMapping = function () {};
THREE.SphericalRefractionMapping = function () {};
THREE.UVMapping = function () {};
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.DataTexture = function (b, c, e, f, h, k, m, n, t) {
	THREE.Texture.call(this, null, h, k, m, n, t);
	this.image = {
		data: b,
		width: c,
		height: e
	};
	this.format = f !== void 0 ? f : THREE.RGBAFormat
};
THREE.DataTexture.prototype = new THREE.Texture;
THREE.DataTexture.prototype.constructor = THREE.DataTexture;
THREE.DataTexture.prototype.clone = function () {
	var b = new THREE.DataTexture(this.data.slice(0), this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
	b.offset.copy(this.offset);
	b.repeat.copy(this.repeat);
	return b
};
THREE.Particle = function (b) {
	THREE.Object3D.call(this);
	this.materials = b instanceof Array ? b : [b]
};
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function (b, c) {
	THREE.Object3D.call(this);
	this.geometry = b;
	this.materials = c instanceof Array ? c : [c];
	this.sortParticles = !1
};
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function (b, c, e) {
	THREE.Object3D.call(this);
	this.geometry = b;
	this.materials = c instanceof Array ? c : [c];
	this.type = e != void 0 ? e : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function (b, c) {
	THREE.Object3D.call(this);
	this.geometry = b;
	this.materials = c && c.length ? c : [c];
	this.overdraw = !1;
	if (this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = b.boundingSphere.radius, this.geometry.morphTargets.length)) {
		this.morphTargetBase = -1;
		this.morphTargetForcedOrder = [];
		this.morphTargetInfluences = [];
		this.morphTargetDictionary = {};
		for (var e = 0; e < this.geometry.morphTargets.length; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
	}
};
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName = function (b) {
	if (this.morphTargetDictionary[b] !== void 0) return this.morphTargetDictionary[b];
	console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + b + " does not exist. Returning 0.");
	return 0
};
THREE.Bone = function (b) {
	THREE.Object3D.call(this);
	this.skin = b;
	this.skinMatrix = new THREE.Matrix4;
	this.hasNoneBoneChildren = !1
};
THREE.Bone.prototype = new THREE.Object3D;
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function (b, c, e) {
	this.matrixAutoUpdate && (c |= this.updateMatrix());
	if (c || this.matrixWorldNeedsUpdate) b ? this.skinMatrix.multiply(b, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
	var f, h = this.children.length;
	if (this.hasNoneBoneChildren) {
		this.matrixWorld.multiply(this.skin.matrixWorld, this.skinMatrix);
		for (f = 0; f < h; f++) b = this.children[f], b instanceof THREE.Bone ? b.update(this.skinMatrix, c, e) : b.update(this.matrixWorld, !0, e)
	}
	else for (f = 0; f < h; f++) this.children[f].update(this.skinMatrix, c, e)
};
THREE.Bone.prototype.addChild = function (b) {
	if (this.children.indexOf(b) === -1 && (b.parent !== void 0 && b.parent.removeChild(b), b.parent = this, this.children.push(b), !(b instanceof THREE.Bone))) this.hasNoneBoneChildren = !0
};
THREE.SkinnedMesh = function (b, c) {
	THREE.Mesh.call(this, b, c);
	this.identityMatrix = new THREE.Matrix4;
	this.bones = [];
	this.boneMatrices = [];
	var e, f, h, k, m, n;
	if (this.geometry.bones !== void 0) {
		for (e = 0; e < this.geometry.bones.length; e++) h = this.geometry.bones[e], k = h.pos, m = h.rotq, n = h.scl, f = this.addBone(), f.name = h.name, f.position.set(k[0], k[1], k[2]), f.quaternion.set(m[0], m[1], m[2], m[3]), f.useQuaternion = !0, n !== void 0 ? f.scale.set(n[0], n[1], n[2]) : f.scale.set(1, 1, 1);
		for (e = 0; e < this.bones.length; e++) h = this.geometry.bones[e], f = this.bones[e], h.parent === -1 ? this.addChild(f) : this.bones[h.parent].addChild(f);
		this.boneMatrices = new Float32Array(16 * this.bones.length);
		this.pose()
	}
};
THREE.SkinnedMesh.prototype = new THREE.Mesh;
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.update = function (b, c, e) {
	if (this.visible) {
		this.matrixAutoUpdate && (c |= this.updateMatrix());
		if (c || this.matrixWorldNeedsUpdate) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
		var f, h = this.children.length;
		for (f = 0; f < h; f++) b = this.children[f], b instanceof THREE.Bone ? b.update(this.identityMatrix, !1, e) : b.update(this.matrixWorld, c, e);
		e = this.bones.length;
		ba = this.bones;
		bm = this.boneMatrices;
		for (c = 0; c < e; c++) ba[c].skinMatrix.flattenToArrayOffset(bm, c * 16)
	}
};
THREE.SkinnedMesh.prototype.addBone = function (b) {
	b === void 0 && (b = new THREE.Bone(this));
	this.bones.push(b);
	return b
};
THREE.SkinnedMesh.prototype.pose = function () {
	this.update(void 0, !0);
	for (var b, c = [], e = 0; e < this.bones.length; e++) b = this.bones[e], c.push(THREE.Matrix4.makeInvert(b.skinMatrix)), b.skinMatrix.flattenToArrayOffset(this.boneMatrices, e * 16);
	if (this.geometry.skinVerticesA === void 0) {
		this.geometry.skinVerticesA = [];
		this.geometry.skinVerticesB = [];
		var f;
		for (b = 0; b < this.geometry.skinIndices.length; b++) {
			var e = this.geometry.vertices[b].position,
				h = this.geometry.skinIndices[b].x,
				k = this.geometry.skinIndices[b].y;
			f = new THREE.Vector3(e.x, e.y, e.z);
			this.geometry.skinVerticesA.push(c[h].multiplyVector3(f));
			f = new THREE.Vector3(e.x, e.y, e.z);
			this.geometry.skinVerticesB.push(c[k].multiplyVector3(f));
			this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y !== 1 && (e = (1 - (this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y)) * 0.5, this.geometry.skinWeights[b].x += e, this.geometry.skinWeights[b].y += e)
		}
	}
};
THREE.Ribbon = function (b, c) {
	THREE.Object3D.call(this);
	this.geometry = b;
	this.materials = c instanceof Array ? c : [c]
};
THREE.Ribbon.prototype = new THREE.Object3D;
THREE.Ribbon.prototype.constructor = THREE.Ribbon;
THREE.LOD = function () {
	THREE.Object3D.call(this);
	this.LODs = []
};
THREE.LOD.prototype = new THREE.Object3D;
THREE.LOD.prototype.constructor = THREE.LOD;
THREE.LOD.prototype.supr = THREE.Object3D.prototype;
THREE.LOD.prototype.addLevel = function (b, c) {
	c === void 0 && (c = 0);
	for (var c = Math.abs(c), e = 0; e < this.LODs.length; e++) if (c < this.LODs[e].visibleAtDistance) break;
	this.LODs.splice(e, 0, {
		visibleAtDistance: c,
		object3D: b
	});
	this.add(b)
};
THREE.LOD.prototype.update = function (b, c, e) {
	this.matrixAutoUpdate && (c |= this.updateMatrix());
	if (c || this.matrixWorldNeedsUpdate) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
	if (this.LODs.length > 1) {
		b = e.matrixWorldInverse;
		b = -(b.n31 * this.position.x + b.n32 * this.position.y + b.n33 * this.position.z + b.n34);
		this.LODs[0].object3D.visible = !0;
		for (var f = 1; f < this.LODs.length; f++) if (b >= this.LODs[f].visibleAtDistance) this.LODs[f - 1].object3D.visible = !1, this.LODs[f].object3D.visible = !0;
		else break;
		for (; f < this.LODs.length; f++) this.LODs[f].object3D.visible = !1
	}
	for (b = 0; b < this.children.length; b++) this.children[b].update(this.matrixWorld, c, e)
};
THREE.Sprite = function (b) {
	THREE.Object3D.call(this);
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.map = b.map instanceof THREE.Texture ? b.map : THREE.ImageUtils.loadTexture(b.map);
	this.blending = b.blending !== void 0 ? b.blending : THREE.NormalBlending;
	this.useScreenCoordinates = b.useScreenCoordinates !== void 0 ? b.useScreenCoordinates : !0;
	this.mergeWith3D = b.mergeWith3D !== void 0 ? b.mergeWith3D : !this.useScreenCoordinates;
	this.affectedByDistance = b.affectedByDistance !== void 0 ? b.affectedByDistance : !this.useScreenCoordinates;
	this.scaleByViewport = b.scaleByViewport !== void 0 ? b.scaleByViewport : !this.affectedByDistance;
	this.alignment = b.alignment instanceof THREE.Vector2 ? b.alignment : THREE.SpriteAlignment.center;
	this.rotation3d = this.rotation;
	this.rotation = 0;
	this.opacity = 1;
	this.uvOffset = new THREE.Vector2(0, 0);
	this.uvScale = new THREE.Vector2(1, 1)
};
THREE.Sprite.prototype = new THREE.Object3D;
THREE.Sprite.prototype.constructor = THREE.Sprite;
THREE.Sprite.prototype.supr = THREE.Object3D.prototype;
THREE.Sprite.prototype.updateMatrix = function () {
	this.matrix.setPosition(this.position);
	this.rotation3d.set(0, 0, this.rotation);
	this.matrix.setRotationFromEuler(this.rotation3d);
	if (this.scale.x !== 1 || this.scale.y !== 1) this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, this.scale.y);
	this.matrixWorldNeedsUpdate = !0
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Scene = function () {
	THREE.Object3D.call(this);
	this.fog = null;
	this.matrixAutoUpdate = !1;
	this.collisions = this.overrideMaterial = null;
	this.objects = [];
	this.lights = [];
	this.__objectsAdded = [];
	this.__objectsRemoved = []
};
THREE.Scene.prototype = new THREE.Object3D;
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.supr = THREE.Object3D.prototype;
THREE.Scene.prototype.add = function (b) {
	this.supr.add.call(this, b);
	this.addChildRecurse(b)
};
THREE.Scene.prototype.addChildRecurse = function (b) {
	if (b instanceof THREE.Light) this.lights.indexOf(b) === -1 && this.lights.push(b);
	else if (!(b instanceof THREE.Camera || b instanceof THREE.Bone) && this.objects.indexOf(b) === -1) {
		this.objects.push(b);
		this.__objectsAdded.push(b);
		var c = this.__objectsRemoved.indexOf(b);
		c !== -1 && this.__objectsRemoved.splice(c, 1)
	}
	for (c = 0; c < b.children.length; c++) this.addChildRecurse(b.children[c])
};
THREE.Scene.prototype.remove = function (b) {
	this.supr.remove.call(this, b);
	this.removeChildRecurse(b)
};
THREE.Scene.prototype.removeChildRecurse = function (b) {
	if (b instanceof THREE.Light) {
		var c = this.lights.indexOf(b);
		c !== -1 && this.lights.splice(c, 1)
	}
	else b instanceof THREE.Camera || (c = this.objects.indexOf(b), c !== -1 && (this.objects.splice(c, 1), this.__objectsRemoved.push(b), c = this.__objectsAdded.indexOf(b), c !== -1 && this.__objectsAdded.splice(c, 1)));
	for (c = 0; c < b.children.length; c++) this.removeChildRecurse(b.children[c])
};
THREE.Scene.prototype.addChild = function (b) {
	console.warn("DEPRECATED: Scene.addChild() is now Scene.add().");
	this.add(b)
};
THREE.Scene.prototype.addObject = function (b) {
	console.warn("DEPRECATED: Scene.addObject() is now Scene.add().");
	this.add(b)
};
THREE.Scene.prototype.addLight = function (b) {
	console.warn("DEPRECATED: Scene.addLight() is now Scene.add().");
	this.add(b)
};
THREE.Scene.prototype.removeChild = function (b) {
	console.warn("DEPRECATED: Scene.removeChild() is now Scene.remove().");
	this.remove(b)
};
THREE.Scene.prototype.removeObject = function (b) {
	console.warn("DEPRECATED: Scene.removeObject() is now Scene.remove().");
	this.remove(b)
};
THREE.Scene.prototype.removeLight = function (b) {
	console.warn("DEPRECATED: Scene.removeLight() is now Scene.remove().");
	this.remove(b)
};
THREE.Fog = function (b, c, e) {
	this.color = new THREE.Color(b);
	this.near = c !== void 0 ? c : 1;
	this.far = e !== void 0 ? e : 1E3
};
THREE.FogExp2 = function (b, c) {
	this.color = new THREE.Color(b);
	this.density = c !== void 0 ? c : 2.5E-4
};
THREE.DOMRenderer = function () {
	THREE.Renderer.call(this);
	var b = null,
		c = new THREE.Projector,
		e, f, h, k;
	this.domElement = document.createElement("div");
	this.setSize = function (b, c) {
		e = b;
		f = c;
		h = e / 2;
		k = f / 2
	};
	this.render = function (e, f) {
		var t, u, v, p, x, w, A, z;
		b = c.projectScene(e, f);
		t = 0;
		for (u = b.length; t < u; t++) if (x = b[t], x instanceof THREE.RenderableParticle) {
			A = x.x * h + h;
			z = x.y * k + k;
			v = 0;
			for (p = x.material.length; v < p; v++) if (w = x.material[v], w instanceof THREE.ParticleDOMMaterial) w = w.domElement, w.style.left = A + "px", w.style.top = z + "px"
		}
	}
};
THREE.CanvasRenderer = function (b) {
	function c(b) {
		if (y != b) w.globalAlpha = y = b
	}

	function e(b) {
		if (C != b) {
			switch (b) {
			case THREE.NormalBlending:
				w.globalCompositeOperation = "source-over";
				break;
			case THREE.AdditiveBlending:
				w.globalCompositeOperation = "lighter";
				break;
			case THREE.SubtractiveBlending:
				w.globalCompositeOperation = "darker"
			}
			C = b
		}
	}

	function f(b) {
		if (E != b) w.strokeStyle = E = b
	}

	function h(b) {
		if (D != b) w.fillStyle = D = b
	}
	var k = this,
		m = null,
		n = new THREE.Projector,
		b = b || {},
		t = b.canvas !== void 0 ? b.canvas : document.createElement("canvas"),
		u, v, p, x, w = t.getContext("2d"),
		A = new THREE.Color(0),
		z = 0,
		y = 1,
		C = 0,
		E = null,
		D = null,
		F = null,
		M = null,
		N = null,
		G, H, K, Z, L = new THREE.RenderableVertex,
		P = new THREE.RenderableVertex,
		U, Y, X, o, ea, R, pa, fa, ma, da, la, ga, $ = new THREE.Color(0),
		ca = new THREE.Color(0),
		aa = new THREE.Color(0),
		ha = new THREE.Color(0),
		ka = new THREE.Color(0),
		sa = [],
		J, Q, na, ra, va, ua, Ea, Ba, Da, Fa, V = new THREE.Rectangle,
		T = new THREE.Rectangle,
		O = new THREE.Rectangle,
		qa = !1,
		ia = new THREE.Color,
		ja = new THREE.Color,
		ya = new THREE.Color,
		wa = new THREE.Color,
		oa = new THREE.Vector3,
		Ia, za, Ka, Ca, Ga, W, b = 16;
	Ia = document.createElement("canvas");
	Ia.width = Ia.height = 2;
	za = Ia.getContext("2d");
	za.fillStyle = "rgba(0,0,0,1)";
	za.fillRect(0, 0, 2, 2);
	Ka = za.getImageData(0, 0, 2, 2);
	Ca = Ka.data;
	Ga = document.createElement("canvas");
	Ga.width = Ga.height = b;
	W = Ga.getContext("2d");
	W.translate(-b / 2, -b / 2);
	W.scale(b, b);
	b--;
	this.domElement = t;
	this.sortElements = this.sortObjects = this.autoClear = !0;
	this.info = {
		render: {
			vertices: 0,
			faces: 0
		}
	};
	this.setSize = function (b, c) {
		u = b;
		v = c;
		p = Math.floor(u / 2);
		x = Math.floor(v / 2);
		t.width = u;
		t.height = v;
		V.set(-p, -x, p, x);
		T.set(-p, -x, p, x);
		y = 1;
		C = 0;
		N = M = F = D = E = null
	};
	this.setClearColor = function (b, c) {
		A.copy(b);
		z = c;
		T.set(-p, -x, p, x)
	};
	this.setClearColorHex = function (b, c) {
		A.setHex(b);
		z = c;
		T.set(-p, -x, p, x)
	};
	this.clear = function () {
		w.setTransform(1, 0, 0, -1, p, x);
		T.isEmpty() || (T.minSelf(V), T.inflate(2), z < 1 && w.clearRect(Math.floor(T.getX()), Math.floor(T.getY()), Math.floor(T.getWidth()), Math.floor(T.getHeight())), z > 0 && (e(THREE.NormalBlending), c(1), h("rgba(" + Math.floor(A.r * 255) + "," + Math.floor(A.g * 255) + "," + Math.floor(A.b * 255) + "," + z + ")"), w.fillRect(Math.floor(T.getX()), Math.floor(T.getY()), Math.floor(T.getWidth()), Math.floor(T.getHeight()))), T.empty())
	};
	this.render = function (b, t) {
		function u(b) {
			var c, e, f, k = b.lights;
			ja.setRGB(0, 0, 0);
			ya.setRGB(0, 0, 0);
			wa.setRGB(0, 0, 0);
			b = 0;
			for (c = k.length; b < c; b++) e = k[b], f = e.color, e instanceof THREE.AmbientLight ? (ja.r += f.r, ja.g += f.g, ja.b += f.b) : e instanceof THREE.DirectionalLight ? (ya.r += f.r, ya.g += f.g, ya.b += f.b) : e instanceof THREE.PointLight && (wa.r += f.r, wa.g += f.g, wa.b += f.b)
		}

		function v(b, c, e, f) {
			var k, h, m, o, n = b.lights,
				b = 0;
			for (k = n.length; b < k; b++) h = n[b], m = h.color, h instanceof THREE.DirectionalLight ? (o = e.dot(h.position), o <= 0 || (o *= h.intensity, f.r += m.r * o, f.g += m.g * o, f.b += m.b * o)) : h instanceof THREE.PointLight && (o = e.dot(oa.sub(h.position, c).normalize()), o <= 0 || (o *= h.distance == 0 ? 1 : 1 - Math.min(c.distanceTo(h.position) / h.distance, 1), o != 0 && (o *= h.intensity, f.r += m.r * o, f.g += m.g * o, f.b += m.b * o)))
		}

		function z(b, k, m) {
			c(m.opacity);
			e(m.blending);
			var o, n, t, u, v, xa;
			if (m instanceof THREE.ParticleBasicMaterial) {
				if (m.map) u = m.map.image, v = u.width >> 1, xa = u.height >> 1, m = k.scale.x * p, t = k.scale.y * x, o = m * v, n = t * xa, O.set(b.x - o, b.y - n, b.x + o, b.y + n), V.intersects(O) && (w.save(), w.translate(b.x, b.y), w.rotate(-k.rotation), w.scale(m, -t), w.translate(-v, -xa), w.drawImage(u, 0, 0), w.restore())
			}
			else m instanceof THREE.ParticleCanvasMaterial && (o = k.scale.x * p, n = k.scale.y * x, O.set(b.x - o, b.y - n, b.x + o, b.y + n), V.intersects(O) && (f(m.color.getContextStyle()), h(m.color.getContextStyle()), w.save(), w.translate(b.x, b.y), w.rotate(-k.rotation), w.scale(o, n), m.program(w), w.restore()))
		}

		function y(b, k, h, m) {
			c(m.opacity);
			e(m.blending);
			w.beginPath();
			w.moveTo(b.positionScreen.x, b.positionScreen.y);
			w.lineTo(k.positionScreen.x, k.positionScreen.y);
			w.closePath();
			if (m instanceof THREE.LineBasicMaterial) {
				b = m.linewidth;
				if (F != b) w.lineWidth = F = b;
				b = m.linecap;
				if (M != b) w.lineCap = M = b;
				b = m.linejoin;
				if (N != b) w.lineJoin = N = b;
				f(m.color.getContextStyle());
				w.stroke();
				O.inflate(m.linewidth * 2)
			}
		}

		function A(b, f, h, m, n, u, p, w, x) {
			k.info.render.vertices += 3;
			k.info.render.faces++;
			c(w.opacity);
			e(w.blending);
			U = b.positionScreen.x;
			Y = b.positionScreen.y;
			X = f.positionScreen.x;
			o = f.positionScreen.y;
			ea = h.positionScreen.x;
			R = h.positionScreen.y;
			E(U, Y, X, o, ea, R);
			if (w instanceof THREE.MeshBasicMaterial) if (w.map) w.map.mapping instanceof THREE.UVMapping && (ra = p.uvs[0], ab(U, Y, X, o, ea, R, ra[m].u, ra[m].v, ra[n].u, ra[n].v, ra[u].u, ra[u].v, w.map));
			else if (w.envMap) {
				if (w.envMap.mapping instanceof THREE.SphericalReflectionMapping) b = t.matrixWorldInverse, oa.copy(p.vertexNormalsWorld[0]), va = (oa.x * b.n11 + oa.y * b.n12 + oa.z * b.n13) * 0.5 + 0.5, ua = -(oa.x * b.n21 + oa.y * b.n22 + oa.z * b.n23) * 0.5 + 0.5, oa.copy(p.vertexNormalsWorld[1]), Ea = (oa.x * b.n11 + oa.y * b.n12 + oa.z * b.n13) * 0.5 + 0.5, Ba = -(oa.x * b.n21 + oa.y * b.n22 + oa.z * b.n23) * 0.5 + 0.5, oa.copy(p.vertexNormalsWorld[2]), Da = (oa.x * b.n11 + oa.y * b.n12 + oa.z * b.n13) * 0.5 + 0.5, Fa = -(oa.x * b.n21 + oa.y * b.n22 + oa.z * b.n23) * 0.5 + 0.5, ab(U, Y, X, o, ea, R, va, ua, Ea, Ba, Da, Fa, w.envMap)
			}
			else w.wireframe ? Na(w.color, w.wireframeLinewidth, w.wireframeLinecap, w.wireframeLinejoin) : Oa(w.color);
			else if (w instanceof THREE.MeshLambertMaterial) w.map && !w.wireframe && (w.map.mapping instanceof THREE.UVMapping && (ra = p.uvs[0], ab(U, Y, X, o, ea, R, ra[m].u, ra[m].v, ra[n].u, ra[n].v, ra[u].u, ra[u].v, w.map)), e(THREE.SubtractiveBlending)), qa ? !w.wireframe && w.shading == THREE.SmoothShading && p.vertexNormalsWorld.length == 3 ? (ca.r = aa.r = ha.r = ja.r, ca.g = aa.g = ha.g = ja.g, ca.b = aa.b = ha.b = ja.b, v(x, p.v1.positionWorld, p.vertexNormalsWorld[0], ca), v(x, p.v2.positionWorld, p.vertexNormalsWorld[1], aa), v(x, p.v3.positionWorld, p.vertexNormalsWorld[2], ha), ca.r = Math.max(0, Math.min(w.color.r * ca.r, 1)), ca.g = Math.max(0, Math.min(w.color.g * ca.g, 1)), ca.b = Math.max(0, Math.min(w.color.b * ca.b, 1)), aa.r = Math.max(0, Math.min(w.color.r * aa.r, 1)), aa.g = Math.max(0, Math.min(w.color.g * aa.g, 1)), aa.b = Math.max(0, Math.min(w.color.b * aa.b, 1)), ha.r = Math.max(0, Math.min(w.color.r * ha.r, 1)), ha.g = Math.max(0, Math.min(w.color.g * ha.g, 1)), ha.b = Math.max(0, Math.min(w.color.b * ha.b, 1)), ka.r = (aa.r + ha.r) * 0.5, ka.g = (aa.g + ha.g) * 0.5, ka.b = (aa.b + ha.b) * 0.5, na = Ya(ca, aa, ha, ka), Va(U, Y, X, o, ea, R, 0, 0, 1, 0, 0, 1, na)) : (ia.r = ja.r, ia.g = ja.g, ia.b = ja.b, v(x, p.centroidWorld, p.normalWorld, ia), $.r = Math.max(0, Math.min(w.color.r * ia.r, 1)), $.g = Math.max(0, Math.min(w.color.g * ia.g, 1)), $.b = Math.max(0, Math.min(w.color.b * ia.b, 1)), w.wireframe ? Na($, w.wireframeLinewidth, w.wireframeLinecap, w.wireframeLinejoin) : Oa($)) : w.wireframe ? Na(w.color, w.wireframeLinewidth, w.wireframeLinecap, w.wireframeLinejoin) : Oa(w.color);
			else if (w instanceof THREE.MeshDepthMaterial) J = t.near, Q = t.far, ca.r = ca.g = ca.b = 1 - Ra(b.positionScreen.z, J, Q), aa.r = aa.g = aa.b = 1 - Ra(f.positionScreen.z, J, Q), ha.r = ha.g = ha.b = 1 - Ra(h.positionScreen.z, J, Q), ka.r = (aa.r + ha.r) * 0.5, ka.g = (aa.g + ha.g) * 0.5, ka.b = (aa.b + ha.b) * 0.5, na = Ya(ca, aa, ha, ka), Va(U, Y, X, o, ea, R, 0, 0, 1, 0, 0, 1, na);
			else if (w instanceof THREE.MeshNormalMaterial) $.r = Wa(p.normalWorld.x), $.g = Wa(p.normalWorld.y), $.b = Wa(p.normalWorld.z), w.wireframe ? Na($, w.wireframeLinewidth, w.wireframeLinecap, w.wireframeLinejoin) : Oa($)
		}

		function C(b, f, h, m, n, u, w, p, x) {
			k.info.render.vertices += 4;
			k.info.render.faces++;
			c(p.opacity);
			e(p.blending);
			if (p.map || p.envMap) A(b, f, m, 0, 1, 3, w, p, x), A(n, h, u, 1, 2, 3, w, p, x);
			else if (U = b.positionScreen.x, Y = b.positionScreen.y, X = f.positionScreen.x, o = f.positionScreen.y, ea = h.positionScreen.x, R = h.positionScreen.y, pa = m.positionScreen.x, fa = m.positionScreen.y, ma = n.positionScreen.x, da = n.positionScreen.y, la = u.positionScreen.x, ga = u.positionScreen.y, p instanceof THREE.MeshBasicMaterial) D(U, Y, X, o, ea, R, pa, fa), p.wireframe ? Na(p.color, p.wireframeLinewidth, p.wireframeLinecap, p.wireframeLinejoin) : Oa(p.color);
			else if (p instanceof THREE.MeshLambertMaterial) qa ? !p.wireframe && p.shading == THREE.SmoothShading && w.vertexNormalsWorld.length == 4 ? (ca.r = aa.r = ha.r = ka.r = ja.r, ca.g = aa.g = ha.g = ka.g = ja.g, ca.b = aa.b = ha.b = ka.b = ja.b, v(x, w.v1.positionWorld, w.vertexNormalsWorld[0], ca), v(x, w.v2.positionWorld, w.vertexNormalsWorld[1], aa), v(x, w.v4.positionWorld, w.vertexNormalsWorld[3], ha), v(x, w.v3.positionWorld, w.vertexNormalsWorld[2], ka), ca.r = Math.max(0, Math.min(p.color.r * ca.r, 1)), ca.g = Math.max(0, Math.min(p.color.g * ca.g, 1)), ca.b = Math.max(0, Math.min(p.color.b * ca.b, 1)), aa.r = Math.max(0, Math.min(p.color.r * aa.r, 1)), aa.g = Math.max(0, Math.min(p.color.g * aa.g, 1)), aa.b = Math.max(0, Math.min(p.color.b * aa.b, 1)), ha.r = Math.max(0, Math.min(p.color.r * ha.r, 1)), ha.g = Math.max(0, Math.min(p.color.g * ha.g, 1)), ha.b = Math.max(0, Math.min(p.color.b * ha.b, 1)), ka.r = Math.max(0, Math.min(p.color.r * ka.r, 1)), ka.g = Math.max(0, Math.min(p.color.g * ka.g, 1)), ka.b = Math.max(0, Math.min(p.color.b * ka.b, 1)), na = Ya(ca, aa, ha, ka), E(U, Y, X, o, pa, fa), Va(U, Y, X, o, pa, fa, 0, 0, 1, 0, 0, 1, na), E(ma, da, ea, R, la, ga), Va(ma, da, ea, R, la, ga, 1, 0, 1, 1, 0, 1, na)) : (ia.r = ja.r, ia.g = ja.g, ia.b = ja.b, v(x, w.centroidWorld, w.normalWorld, ia), $.r = Math.max(0, Math.min(p.color.r * ia.r, 1)), $.g = Math.max(0, Math.min(p.color.g * ia.g, 1)), $.b = Math.max(0, Math.min(p.color.b * ia.b, 1)), D(U, Y, X, o, ea, R, pa, fa), p.wireframe ? Na($, p.wireframeLinewidth, p.wireframeLinecap, p.wireframeLinejoin) : Oa($)) : (D(U, Y, X, o, ea, R, pa, fa), p.wireframe ? Na(p.color, p.wireframeLinewidth, p.wireframeLinecap, p.wireframeLinejoin) : Oa(p.color));
			else if (p instanceof THREE.MeshNormalMaterial) $.r = Wa(w.normalWorld.x), $.g = Wa(w.normalWorld.y), $.b = Wa(w.normalWorld.z), D(U, Y, X, o, ea, R, pa, fa), p.wireframe ? Na($, p.wireframeLinewidth, p.wireframeLinecap, p.wireframeLinejoin) : Oa($);
			else if (p instanceof THREE.MeshDepthMaterial) J = t.near, Q = t.far, ca.r = ca.g = ca.b = 1 - Ra(b.positionScreen.z, J, Q), aa.r = aa.g = aa.b = 1 - Ra(f.positionScreen.z, J, Q), ha.r = ha.g = ha.b = 1 - Ra(m.positionScreen.z, J, Q), ka.r = ka.g = ka.b = 1 - Ra(h.positionScreen.z, J, Q), na = Ya(ca, aa, ha, ka), E(U, Y, X, o, pa, fa), Va(U, Y, X, o, pa, fa, 0, 0, 1, 0, 0, 1, na), E(ma, da, ea, R, la, ga), Va(ma, da, ea, R, la, ga, 1, 0, 1, 1, 0, 1, na)
		}

		function E(b, c, e, f, k, h) {
			w.beginPath();
			w.moveTo(b, c);
			w.lineTo(e, f);
			w.lineTo(k, h);
			w.lineTo(b, c);
			w.closePath()
		}

		function D(b, c, e, f, k, h, m, o) {
			w.beginPath();
			w.moveTo(b, c);
			w.lineTo(e, f);
			w.lineTo(k, h);
			w.lineTo(m, o);
			w.lineTo(b, c);
			w.closePath()
		}

		function Na(b, c, e, k) {
			if (F != c) w.lineWidth = F = c;
			if (M != e) w.lineCap = M = e;
			if (N != k) w.lineJoin = N = k;
			f(b.getContextStyle());
			w.stroke();
			O.inflate(c * 2)
		}

		function Oa(b) {
			h(b.getContextStyle());
			w.fill()
		}

		function ab(b, c, e, f, k, m, o, n, t, p, u, x, v) {
			if (v.image.width != 0) {
				if (v.needsUpdate == !0 || sa[v.id] == void 0) {
					var xa = v.wrapS == THREE.RepeatWrapping,
						z = v.wrapT == THREE.RepeatWrapping;
					sa[v.id] = w.createPattern(v.image, xa && z ? "repeat" : xa && !z ? "repeat-x" : !xa && z ? "repeat-y" : "no-repeat");
					v.needsUpdate = !1
				}
				h(sa[v.id]);
				var xa = v.offset.x / v.repeat.x,
					z = v.offset.y / v.repeat.y,
					V = (v.image.width - 1) * v.repeat.x,
					v = (v.image.height - 1) * v.repeat.y,
					o = (o + xa) * V,
					n = (n + z) * v,
					t = (t + xa) * V,
					p = (p + z) * v,
					u = (u + xa) * V,
					x = (x + z) * v;
				e -= b;
				f -= c;
				k -= b;
				m -= c;
				t -= o;
				p -= n;
				u -= o;
				x -= n;
				xa = 1 / (t * x - u * p);
				v = (x * e - p * k) * xa;
				p = (x * f - p * m) * xa;
				e = (t * k - u * e) * xa;
				f = (t * m - u * f) * xa;
				b = b - v * o - e * n;
				c = c - p * o - f * n;
				w.save();
				w.transform(v, p, e, f, b, c);
				w.fill();
				w.restore()
			}
		}

		function Va(b, c, e, f, k, h, m, o, n, t, p, u, v) {
			var x, xa;
			x = v.width - 1;
			xa = v.height - 1;
			m *= x;
			o *= xa;
			n *= x;
			t *= xa;
			p *= x;
			u *= xa;
			e -= b;
			f -= c;
			k -= b;
			h -= c;
			n -= m;
			t -= o;
			p -= m;
			u -= o;
			xa = 1 / (n * u - p * t);
			x = (u * e - t * k) * xa;
			t = (u * f - t * h) * xa;
			e = (n * k - p * e) * xa;
			f = (n * h - p * f) * xa;
			b = b - x * m - e * o;
			c = c - t * m - f * o;
			w.save();
			w.transform(x, t, e, f, b, c);
			w.clip();
			w.drawImage(v, 0, 0);
			w.restore()
		}

		function Ya(b, c, e, f) {
			var k = ~~ (b.r * 255),
				h = ~~ (b.g * 255),
				b = ~~ (b.b * 255),
				m = ~~ (c.r * 255),
				o = ~~ (c.g * 255),
				c = ~~ (c.b * 255),
				n = ~~ (e.r * 255),
				t = ~~ (e.g * 255),
				e = ~~ (e.b * 255),
				p = ~~ (f.r * 255),
				u = ~~ (f.g * 255),
				f = ~~ (f.b * 255);
			Ca[0] = k < 0 ? 0 : k > 255 ? 255 : k;
			Ca[1] = h < 0 ? 0 : h > 255 ? 255 : h;
			Ca[2] = b < 0 ? 0 : b > 255 ? 255 : b;
			Ca[4] = m < 0 ? 0 : m > 255 ? 255 : m;
			Ca[5] = o < 0 ? 0 : o > 255 ? 255 : o;
			Ca[6] = c < 0 ? 0 : c > 255 ? 255 : c;
			Ca[8] = n < 0 ? 0 : n > 255 ? 255 : n;
			Ca[9] = t < 0 ? 0 : t > 255 ? 255 : t;
			Ca[10] = e < 0 ? 0 : e > 255 ? 255 : e;
			Ca[12] = p < 0 ? 0 : p > 255 ? 255 : p;
			Ca[13] = u < 0 ? 0 : u > 255 ? 255 : u;
			Ca[14] = f < 0 ? 0 : f > 255 ? 255 : f;
			za.putImageData(Ka, 0, 0);
			W.drawImage(Ia, 0, 0);
			return Ga
		}

		function Ra(b, c, e) {
			b = (b - c) / (e - c);
			return b * b * (3 - 2 * b)
		}

		function Wa(b) {
			b = (b + 1) * 0.5;
			return b < 0 ? 0 : b > 1 ? 1 : b
		}

		function Pa(b, c) {
			var e = c.x - b.x,
				f = c.y - b.y,
				k = e * e + f * f;
			k != 0 && (k = 1 / Math.sqrt(k), e *= k, f *= k, c.x += e, c.y += f, b.x -= e, b.y -= f)
		}
		var Za, bb, ta, Ha, Qa, Xa, $a, Aa;
		this.autoClear ? this.clear() : w.setTransform(1, 0, 0, -1, p, x);
		k.info.render.vertices = 0;
		k.info.render.faces = 0;
		m = n.projectScene(b, t, this.sortElements);
		(qa = b.lights.length > 0) && u(b);
		Za = 0;
		for (bb = m.length; Za < bb; Za++) {
			ta = m[Za];
			O.empty();
			if (ta instanceof THREE.RenderableParticle) {
				G = ta;
				G.x *= p;
				G.y *= x;
				Ha = 0;
				for (Qa = ta.materials.length; Ha < Qa;) Aa = ta.materials[Ha++], Aa.opacity != 0 && z(G, ta, Aa, b)
			}
			else if (ta instanceof
			THREE.RenderableLine) {
				if (G = ta.v1, H = ta.v2, G.positionScreen.x *= p, G.positionScreen.y *= x, H.positionScreen.x *= p, H.positionScreen.y *= x, O.addPoint(G.positionScreen.x, G.positionScreen.y), O.addPoint(H.positionScreen.x, H.positionScreen.y), V.intersects(O)) {
					Ha = 0;
					for (Qa = ta.materials.length; Ha < Qa;) Aa = ta.materials[Ha++], Aa.opacity != 0 && y(G, H, ta, Aa, b)
				}
			}
			else if (ta instanceof THREE.RenderableFace3) {
				if (G = ta.v1, H = ta.v2, K = ta.v3, G.positionScreen.x *= p, G.positionScreen.y *= x, H.positionScreen.x *= p, H.positionScreen.y *= x, K.positionScreen.x *= p, K.positionScreen.y *= x, ta.overdraw && (Pa(G.positionScreen, H.positionScreen), Pa(H.positionScreen, K.positionScreen), Pa(K.positionScreen, G.positionScreen)), O.add3Points(G.positionScreen.x, G.positionScreen.y, H.positionScreen.x, H.positionScreen.y, K.positionScreen.x, K.positionScreen.y), V.intersects(O)) {
					Ha = 0;
					for (Qa = ta.meshMaterials.length; Ha < Qa;) if (Aa = ta.meshMaterials[Ha++], Aa instanceof THREE.MeshFaceMaterial) {
						Xa = 0;
						for ($a = ta.faceMaterials.length; Xa < $a;)(Aa = ta.faceMaterials[Xa++]) && Aa.opacity != 0 && A(G, H, K, 0, 1, 2, ta, Aa, b)
					}
					else Aa.opacity != 0 && A(G, H, K, 0, 1, 2, ta, Aa, b)
				}
			}
			else if (ta instanceof THREE.RenderableFace4 && (G = ta.v1, H = ta.v2, K = ta.v3, Z = ta.v4, G.positionScreen.x *= p, G.positionScreen.y *= x, H.positionScreen.x *= p, H.positionScreen.y *= x, K.positionScreen.x *= p, K.positionScreen.y *= x, Z.positionScreen.x *= p, Z.positionScreen.y *= x, L.positionScreen.copy(H.positionScreen), P.positionScreen.copy(Z.positionScreen), ta.overdraw && (Pa(G.positionScreen, H.positionScreen), Pa(H.positionScreen, Z.positionScreen), Pa(Z.positionScreen, G.positionScreen), Pa(K.positionScreen, L.positionScreen), Pa(K.positionScreen, P.positionScreen)), O.addPoint(G.positionScreen.x, G.positionScreen.y), O.addPoint(H.positionScreen.x, H.positionScreen.y), O.addPoint(K.positionScreen.x, K.positionScreen.y), O.addPoint(Z.positionScreen.x, Z.positionScreen.y), V.intersects(O))) {
				Ha = 0;
				for (Qa = ta.meshMaterials.length; Ha < Qa;) if (Aa = ta.meshMaterials[Ha++], Aa instanceof THREE.MeshFaceMaterial) {
					Xa = 0;
					for ($a = ta.faceMaterials.length; Xa < $a;)(Aa = ta.faceMaterials[Xa++]) && Aa.opacity != 0 && C(G, H, K, Z, L, P, ta, Aa, b)
				}
				else Aa.opacity != 0 && C(G, H, K, Z, L, P, ta, Aa, b)
			}
			T.addRectangle(O)
		}
		w.setTransform(1, 0, 0, 1, 0, 0)
	}
};
THREE.SVGRenderer = function () {
	function b(b, c, e) {
		var f, k, h, m;
		f = 0;
		for (k = b.lights.length; f < k; f++) h = b.lights[f], h instanceof THREE.DirectionalLight ? (m = c.normalWorld.dot(h.position) * h.intensity, m > 0 && (e.r += h.color.r * m, e.g += h.color.g * m, e.b += h.color.b * m)) : h instanceof THREE.PointLight && (Z.sub(h.position, c.centroidWorld), Z.normalize(), m = c.normalWorld.dot(Z) * h.intensity, m > 0 && (e.r += h.color.r * m, e.g += h.color.g * m, e.b += h.color.b * m))
	}

	function c(c, e, m, o, n, p) {
		k.info.render.vertices += 3;
		k.info.render.faces++;
		U = f(Y++);
		U.setAttribute("d", "M " + c.positionScreen.x + " " + c.positionScreen.y + " L " + e.positionScreen.x + " " + e.positionScreen.y + " L " + m.positionScreen.x + "," + m.positionScreen.y + "z");
		n instanceof THREE.MeshBasicMaterial ? F.copy(n.color) : n instanceof THREE.MeshLambertMaterial ? D ? (M.r = N.r, M.g = N.g, M.b = N.b, b(p, o, M), F.r = Math.max(0, Math.min(n.color.r * M.r, 1)), F.g = Math.max(0, Math.min(n.color.g * M.g, 1)), F.b = Math.max(0, Math.min(n.color.b * M.b, 1))) : F.copy(n.color) : n instanceof THREE.MeshDepthMaterial ? (K = 1 - n.__2near / (n.__farPlusNear - o.z * n.__farMinusNear), F.setRGB(K, K, K)) : n instanceof THREE.MeshNormalMaterial && F.setRGB(h(o.normalWorld.x), h(o.normalWorld.y), h(o.normalWorld.z));
		n.wireframe ? U.setAttribute("style", "fill: none; stroke: " + F.getContextStyle() + "; stroke-width: " + n.wireframeLinewidth + "; stroke-opacity: " + n.opacity + "; stroke-linecap: " + n.wireframeLinecap + "; stroke-linejoin: " + n.wireframeLinejoin) : U.setAttribute("style", "fill: " + F.getContextStyle() + "; fill-opacity: " + n.opacity);
		t.appendChild(U)
	}

	function e(c, e, m, o, n, p, u) {
		k.info.render.vertices += 4;
		k.info.render.faces++;
		U = f(Y++);
		U.setAttribute("d", "M " + c.positionScreen.x + " " + c.positionScreen.y + " L " + e.positionScreen.x + " " + e.positionScreen.y + " L " + m.positionScreen.x + "," + m.positionScreen.y + " L " + o.positionScreen.x + "," + o.positionScreen.y + "z");
		p instanceof THREE.MeshBasicMaterial ? F.copy(p.color) : p instanceof THREE.MeshLambertMaterial ? D ? (M.r = N.r, M.g = N.g, M.b = N.b, b(u, n, M), F.r = Math.max(0, Math.min(p.color.r * M.r, 1)), F.g = Math.max(0, Math.min(p.color.g * M.g, 1)), F.b = Math.max(0, Math.min(p.color.b * M.b, 1))) : F.copy(p.color) : p instanceof THREE.MeshDepthMaterial ? (K = 1 - p.__2near / (p.__farPlusNear - n.z * p.__farMinusNear), F.setRGB(K, K, K)) : p instanceof THREE.MeshNormalMaterial && F.setRGB(h(n.normalWorld.x), h(n.normalWorld.y), h(n.normalWorld.z));
		p.wireframe ? U.setAttribute("style", "fill: none; stroke: " + F.getContextStyle() + "; stroke-width: " + p.wireframeLinewidth + "; stroke-opacity: " + p.opacity + "; stroke-linecap: " + p.wireframeLinecap + "; stroke-linejoin: " + p.wireframeLinejoin) : U.setAttribute("style", "fill: " + F.getContextStyle() + "; fill-opacity: " + p.opacity);
		t.appendChild(U)
	}

	function f(b) {
		L[b] == null && (L[b] = document.createElementNS("http://www.w3.org/2000/svg", "path"), o == 0 && L[b].setAttribute("shape-rendering", "crispEdges"));
		return L[b]
	}

	function h(b) {
		b = (b + 1) * 0.5;
		return b < 0 ? 0 : b > 1 ? 1 : b
	}
	var k = this,
		m = null,
		n = new THREE.Projector,
		t = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
		u, v, p, x, w, A, z, y, C = new THREE.Rectangle,
		E = new THREE.Rectangle,
		D = !1,
		F = new THREE.Color(16777215),
		M = new THREE.Color(16777215),
		N = new THREE.Color(0),
		G = new THREE.Color(0),
		H = new THREE.Color(0),
		K, Z = new THREE.Vector3,
		L = [],
		P = [],
		U, Y, X, o = 1;
	this.domElement = t;
	this.sortElements = this.sortObjects = this.autoClear = !0;
	this.info = {
		render: {
			vertices: 0,
			faces: 0
		}
	};
	this.setQuality = function (b) {
		switch (b) {
		case "high":
			o = 1;
			break;
		case "low":
			o = 0
		}
	};
	this.setSize = function (b, c) {
		u = b;
		v = c;
		p = u / 2;
		x = v / 2;
		t.setAttribute("viewBox", -p + " " + -x + " " + u + " " + v);
		t.setAttribute("width", u);
		t.setAttribute("height", v);
		C.set(-p, -x, p, x)
	};
	this.clear = function () {
		for (; t.childNodes.length > 0;) t.removeChild(t.childNodes[0])
	};
	this.render = function (b, f) {
		var h, u, v, F, L, M, K, ca;
		this.autoClear && this.clear();
		k.info.render.vertices = 0;
		k.info.render.faces = 0;
		m = n.projectScene(b, f, this.sortElements);
		X = Y = 0;
		if (D = b.lights.length > 0) {
			K = b.lights;
			N.setRGB(0, 0, 0);
			G.setRGB(0, 0, 0);
			H.setRGB(0, 0, 0);
			h = 0;
			for (u = K.length; h < u; h++) v = K[h], F = v.color, v instanceof THREE.AmbientLight ? (N.r += F.r, N.g += F.g, N.b += F.b) : v instanceof THREE.DirectionalLight ? (G.r += F.r, G.g += F.g, G.b += F.b) : v instanceof THREE.PointLight && (H.r += F.r, H.g += F.g, H.b += F.b)
		}
		h = 0;
		for (u = m.length; h < u; h++) if (K = m[h], E.empty(), K instanceof THREE.RenderableParticle) {
			w = K;
			w.x *= p;
			w.y *= -x;
			v = 0;
			for (F = K.materials.length; v < F;) v++
		}
		else if (K instanceof THREE.RenderableLine) {
			if (w = K.v1, A = K.v2, w.positionScreen.x *= p, w.positionScreen.y *= -x, A.positionScreen.x *= p, A.positionScreen.y *= -x, E.addPoint(w.positionScreen.x, w.positionScreen.y), E.addPoint(A.positionScreen.x, A.positionScreen.y), C.intersects(E)) {
				v = 0;
				for (F = K.materials.length; v < F;) if ((ca = K.materials[v++]) && ca.opacity != 0) {
					L = w;
					M = A;
					var aa = X++;
					P[aa] == null && (P[aa] = document.createElementNS("http://www.w3.org/2000/svg", "line"), o == 0 && P[aa].setAttribute("shape-rendering", "crispEdges"));
					U = P[aa];
					U.setAttribute("x1", L.positionScreen.x);
					U.setAttribute("y1", L.positionScreen.y);
					U.setAttribute("x2", M.positionScreen.x);
					U.setAttribute("y2", M.positionScreen.y);
					ca instanceof THREE.LineBasicMaterial && (U.setAttribute("style", "fill: none; stroke: " + ca.color.getContextStyle() + "; stroke-width: " + ca.linewidth + "; stroke-opacity: " + ca.opacity + "; stroke-linecap: " + ca.linecap + "; stroke-linejoin: " + ca.linejoin), t.appendChild(U))
				}
			}
		}
		else if (K instanceof THREE.RenderableFace3) {
			if (w = K.v1, A = K.v2, z = K.v3, w.positionScreen.x *= p, w.positionScreen.y *= -x, A.positionScreen.x *= p, A.positionScreen.y *= -x, z.positionScreen.x *= p, z.positionScreen.y *= -x, E.addPoint(w.positionScreen.x, w.positionScreen.y), E.addPoint(A.positionScreen.x, A.positionScreen.y), E.addPoint(z.positionScreen.x, z.positionScreen.y), C.intersects(E)) {
				v = 0;
				for (F = K.meshMaterials.length; v < F;) if (ca = K.meshMaterials[v++], ca instanceof THREE.MeshFaceMaterial) {
					L = 0;
					for (M = K.faceMaterials.length; L < M;)(ca = K.faceMaterials[L++]) && ca.opacity != 0 && c(w, A, z, K, ca, b)
				}
				else ca && ca.opacity != 0 && c(w, A, z, K, ca, b)
			}
		}
		else if (K instanceof THREE.RenderableFace4 && (w = K.v1, A = K.v2, z = K.v3, y = K.v4, w.positionScreen.x *= p, w.positionScreen.y *= -x, A.positionScreen.x *= p, A.positionScreen.y *= -x, z.positionScreen.x *= p, z.positionScreen.y *= -x, y.positionScreen.x *= p, y.positionScreen.y *= -x, E.addPoint(w.positionScreen.x, w.positionScreen.y), E.addPoint(A.positionScreen.x, A.positionScreen.y), E.addPoint(z.positionScreen.x, z.positionScreen.y), E.addPoint(y.positionScreen.x, y.positionScreen.y), C.intersects(E))) {
			v = 0;
			for (F = K.meshMaterials.length; v < F;) if (ca = K.meshMaterials[v++], ca instanceof THREE.MeshFaceMaterial) {
				L = 0;
				for (M = K.faceMaterials.length; L < M;)(ca = K.faceMaterials[L++]) && ca.opacity != 0 && e(w, A, z, y, K, ca, b)
			}
			else ca && ca.opacity != 0 && e(w, A, z, y, K, ca, b)
		}
	}
};
THREE.ShaderChunk = {
	fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
	fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform int combine;\n#endif",
	envmap_fragment: "#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[ 0 ].xyz, objectMatrix[ 1 ].xyz, objectMatrix[ 2 ].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
	map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
	map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",
	map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",
	map_vertex: "#ifdef USE_MAP\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
	map_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
	lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
	lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",
	lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
	lights_pars_vertex: "uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif",
	lights_vertex: "if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n}\n#endif\n}",
	lights_phong_pars_vertex: "#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif",
	lights_phong_vertex: "#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif",
	lights_pars_fragment: "uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
	lights_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + viewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * pointDistance;\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + viewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight;\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * totalDiffuse + totalSpecular + ambientLightColor * ambient;",
	color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
	color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
	color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
	color_vertex: "#ifdef USE_COLOR\nvColor = color;\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif",
	default_vertex: "#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif",
	shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform float shadowDarkness;\nuniform float shadowBias;\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",
	shadowmap_fragment: "#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_SOFT\nconst float xPixelOffset = 1.0 / SHADOWMAP_WIDTH;\nconst float yPixelOffset = 1.0 / SHADOWMAP_HEIGHT;\n#endif\nvec4 shadowColor = vec4( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nshadowCoord.z += shadowBias;\nif ( shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0 ) {\n#ifdef SHADOWMAP_SOFT\nfloat shadow = 0.0;\nfor ( float y = -1.25; y <= 1.25; y += 1.25 )\nfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\nvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadow += 1.0;\n}\nshadow /= 9.0;\nshadowColor = shadowColor * vec4( vec3( ( 1.0 - shadowDarkness * shadow ) ), 1.0 );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec4( vec3( shadowDarkness ), 1.0 );\n#endif\n}\n}\ngl_FragColor = gl_FragColor * shadowColor;\n#endif",
	shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",
	shadowmap_vertex: "#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * objectMatrix * vec4( position, 1.0 );\n}\n#endif",
	alphatest_fragment: "#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif"
};
THREE.UniformsUtils = {
	merge: function (b) {
		var c, e, f, h = {};
		for (c = 0; c < b.length; c++) for (e in f = this.clone(b[c]), f) h[e] = f[e];
		return h
	},
	clone: function (b) {
		var c, e, f, h = {};
		for (c in b) for (e in h[c] = {}, b[c]) f = b[c][e], h[c][e] = f instanceof THREE.Color || f instanceof THREE.Vector2 || f instanceof THREE.Vector3 || f instanceof THREE.Vector4 || f instanceof THREE.Matrix4 || f instanceof THREE.Texture ? f.clone() : f instanceof Array ? f.slice() : f;
		return h
	}
};
THREE.UniformsLib = {
	common: {
		diffuse: {
			type: "c",
			value: new THREE.Color(15658734)
		},
		opacity: {
			type: "f",
			value: 1
		},
		map: {
			type: "t",
			value: 0,
			texture: null
		},
		offsetRepeat: {
			type: "v4",
			value: new THREE.Vector4(0, 0, 1, 1)
		},
		lightMap: {
			type: "t",
			value: 2,
			texture: null
		},
		envMap: {
			type: "t",
			value: 1,
			texture: null
		},
		useRefract: {
			type: "i",
			value: 0
		},
		reflectivity: {
			type: "f",
			value: 1
		},
		refractionRatio: {
			type: "f",
			value: 0.98
		},
		combine: {
			type: "i",
			value: 0
		},
		morphTargetInfluences: {
			type: "f",
			value: 0
		}
	},
	fog: {
		fogDensity: {
			type: "f",
			value: 2.5E-4
		},
		fogNear: {
			type: "f",
			value: 1
		},
		fogFar: {
			type: "f",
			value: 2E3
		},
		fogColor: {
			type: "c",
			value: new THREE.Color(16777215)
		}
	},
	lights: {
		enableLighting: {
			type: "i",
			value: 1
		},
		ambientLightColor: {
			type: "fv",
			value: []
		},
		directionalLightDirection: {
			type: "fv",
			value: []
		},
		directionalLightColor: {
			type: "fv",
			value: []
		},
		pointLightColor: {
			type: "fv",
			value: []
		},
		pointLightPosition: {
			type: "fv",
			value: []
		},
		pointLightDistance: {
			type: "fv1",
			value: []
		}
	},
	particle: {
		psColor: {
			type: "c",
			value: new THREE.Color(15658734)
		},
		opacity: {
			type: "f",
			value: 1
		},
		size: {
			type: "f",
			value: 1
		},
		scale: {
			type: "f",
			value: 1
		},
		map: {
			type: "t",
			value: 0,
			texture: null
		},
		fogDensity: {
			type: "f",
			value: 2.5E-4
		},
		fogNear: {
			type: "f",
			value: 1
		},
		fogFar: {
			type: "f",
			value: 2E3
		},
		fogColor: {
			type: "c",
			value: new THREE.Color(16777215)
		}
	},
	shadowmap: {
		shadowMap: {
			type: "tv",
			value: 6,
			texture: []
		},
		shadowMatrix: {
			type: "m4v",
			value: []
		},
		shadowBias: {
			type: "f",
			value: 0.0039
		},
		shadowDarkness: {
			type: "f",
			value: 0.2
		}
	}
};
THREE.ShaderLib = {
	sprite: {
		vertexShader: "uniform int useScreenCoordinates;\nuniform int affectedByDistance;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
		fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\n}"
	},
	depth: {
		uniforms: {
			mNear: {
				type: "f",
				value: 1
			},
			mFar: {
				type: "f",
				value: 2E3
			},
			opacity: {
				type: "f",
				value: 1
			}
		},
		vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
		fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"
	},
	normal: {
		uniforms: {
			opacity: {
				type: "f",
				value: 1
			}
		},
		vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}",
		fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"
	},
	basic: {
		uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
		vertexShader: [THREE.ShaderChunk.map_pars_vertex,
			            THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex,
			            THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
		fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment,
			            THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
	},
	lambert: {
		uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap]),
		vertexShader: ["varying vec3 vLightWeighting;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex,
			            THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex,
			            THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
		fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment,
			            "gl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
	},
	phong: {
		uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap,
		{
			ambient: {
				type: "c",
				value: new THREE.Color(328965)
			},
			specular: {
				type: "c",
				value: new THREE.Color(1118481)
			},
			shininess: {
				type: "f",
				value: 30
			}
		}]),
		vertexShader: ["varying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex,
			            THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = -mvPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;", THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
		fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;",
			            THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.lights_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment,
			            THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
	},
	particle_basic: {
		uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
		vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
			            THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
		fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment,
			            "}"].join("\n")
	},
	depthRGBA: {
		uniforms: {},
		vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),
		fragmentShader: "vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"
	}
};
THREE.WebGLRenderer = function (b) {
	function c(b, c, e) {
		var f, k, h, m = b.vertices,
			n = m.length,
			t = b.colors,
			p = t.length,
			u = b.__vertexArray,
			w = b.__colorArray,
			v = b.__sortArray,
			x = b.__dirtyVertices,
			z = b.__dirtyColors,
			V = b.__webglCustomAttributes,
			y, A;
		if (V) for (y in V) V[y].offset = 0;
		if (e.sortParticles) {
			ua.multiplySelf(e.matrixWorld);
			for (f = 0; f < n; f++) k = m[f].position, Da.copy(k), ua.multiplyVector3(Da), v[f] = [Da.z, f];
			v.sort(function (b, c) {
				return c[0] - b[0]
			});
			for (f = 0; f < n; f++) k = m[v[f][1]].position, h = f * 3, u[h] = k.x, u[h + 1] = k.y, u[h + 2] = k.z;
			for (f = 0; f < p; f++) h = f * 3, color = t[v[f][1]], w[h] = color.r, w[h + 1] = color.g, w[h + 2] = color.b;
			if (V) for (y in V) {
				f = V[y];
				t = f.value.length;
				for (h = 0; h < t; h++) {
					index = v[h][1];
					p = f.offset;
					if (f.size === 1) {
						if (f.boundTo === void 0 || f.boundTo === "vertices") f.array[p] = f.value[index]
					}
					else {
						if (f.boundTo === void 0 || f.boundTo === "vertices") A = f.value[index];
						f.size === 2 ? (f.array[p] = A.x, f.array[p + 1] = A.y) : f.size === 3 ? f.type === "c" ? (f.array[p] = A.r, f.array[p + 1] = A.g, f.array[p + 2] = A.b) : (f.array[p] = A.x, f.array[p + 1] = A.y, f.array[p + 2] = A.z) : (f.array[p] = A.x, f.array[p + 1] = A.y, f.array[p + 2] = A.z, f.array[p + 3] = A.w)
					}
					f.offset += f.size
				}
			}
		}
		else {
			if (x) for (f = 0; f < n; f++) k = m[f].position, h = f * 3, u[h] = k.x, u[h + 1] = k.y, u[h + 2] = k.z;
			if (z) for (f = 0; f < p; f++) color = t[f], h = f * 3, w[h] = color.r, w[h + 1] = color.g, w[h + 2] = color.b;
			if (V) for (y in V) if (f = V[y], f.__original.needsUpdate) {
				t = f.value.length;
				for (h = 0; h < t; h++) {
					p = f.offset;
					if (f.size === 1) {
						if (f.boundTo === void 0 || f.boundTo === "vertices") f.array[p] = f.value[h]
					}
					else {
						if (f.boundTo === void 0 || f.boundTo === "vertices") A = f.value[h];
						f.size === 2 ? (f.array[p] = A.x, f.array[p + 1] = A.y) : f.size === 3 ? f.type === "c" ? (f.array[p] = A.r, f.array[p + 1] = A.g, f.array[p + 2] = A.b) : (f.array[p] = A.x, f.array[p + 1] = A.y, f.array[p + 2] = A.z) : (f.array[p] = A.x, f.array[p + 1] = A.y, f.array[p + 2] = A.z, f.array[p + 3] = A.w)
					}
					f.offset += f.size
				}
			}
		}
		if (x || e.sortParticles) o.bindBuffer(o.ARRAY_BUFFER, b.__webglVertexBuffer), o.bufferData(o.ARRAY_BUFFER, u, c);
		if (z || e.sortParticles) o.bindBuffer(o.ARRAY_BUFFER, b.__webglColorBuffer), o.bufferData(o.ARRAY_BUFFER, w, c);
		if (V) for (y in V) if (f = V[y], f.__original.needsUpdate || e.sortParticles) o.bindBuffer(o.ARRAY_BUFFER, f.buffer), o.bufferData(o.ARRAY_BUFFER, f.array, c)
	}

	function e(b, c, e, f, k) {
		f.program || X.initMaterial(f, c, e, k);
		if (f.morphTargets && !k.__webglMorphTargetInfluences) {
			k.__webglMorphTargetInfluences = new Float32Array(X.maxMorphTargets);
			for (var h = 0, m = X.maxMorphTargets; h < m; h++) k.__webglMorphTargetInfluences[h] = 0
		}
		var n = !1,
			h = f.program,
			m = h.uniforms,
			p = f.uniforms;
		h != R && (o.useProgram(h), R = h, n = !0);
		if (f.id != fa) fa = f.id, n = !0;
		if (n) {
			o.uniformMatrix4fv(m.projectionMatrix, !1, Ea);
			if (e && f.fog) if (p.fogColor.value = e.color, e instanceof
			THREE.Fog) p.fogNear.value = e.near, p.fogFar.value = e.far;
			else if (e instanceof THREE.FogExp2) p.fogDensity.value = e.density;
			if (f instanceof THREE.MeshPhongMaterial || f instanceof THREE.MeshLambertMaterial || f.lights) {
				for (var t, u, w = 0, v = 0, x = 0, z, A, y, O = Fa, T = O.directional.colors, E = O.directional.positions, C = O.point.colors, D = O.point.positions, F = O.point.distances, J = 0, qa = 0, e = t = y = 0, n = c.length; e < n; e++) if (t = c[e], u = t.color, z = t.position, A = t.intensity, y = t.distance, t instanceof THREE.AmbientLight) w += u.r, v += u.g, x += u.b;
				else if (t instanceof
				THREE.DirectionalLight) y = J * 3, T[y] = u.r * A, T[y + 1] = u.g * A, T[y + 2] = u.b * A, E[y] = z.x, E[y + 1] = z.y, E[y + 2] = z.z, J += 1;
				else if (t instanceof THREE.SpotLight) y = J * 3, T[y] = u.r * A, T[y + 1] = u.g * A, T[y + 2] = u.b * A, u = 1 / z.length(), E[y] = z.x * u, E[y + 1] = z.y * u, E[y + 2] = z.z * u, J += 1;
				else if (t instanceof THREE.PointLight) t = qa * 3, C[t] = u.r * A, C[t + 1] = u.g * A, C[t + 2] = u.b * A, D[t] = z.x, D[t + 1] = z.y, D[t + 2] = z.z, F[qa] = y, qa += 1;
				e = J * 3;
				for (n = T.length; e < n; e++) T[e] = 0;
				e = qa * 3;
				for (n = C.length; e < n; e++) C[e] = 0;
				O.point.length = qa;
				O.directional.length = J;
				O.ambient[0] = w;
				O.ambient[1] = v;
				O.ambient[2] = x;
				c = Fa;
				p.enableLighting.value = c.directional.length + c.point.length;
				p.ambientLightColor.value = c.ambient;
				p.directionalLightColor.value = c.directional.colors;
				p.directionalLightDirection.value = c.directional.positions;
				p.pointLightColor.value = c.point.colors;
				p.pointLightPosition.value = c.point.positions;
				p.pointLightDistance.value = c.point.distances
			}
			if (f instanceof THREE.MeshBasicMaterial || f instanceof THREE.MeshLambertMaterial || f instanceof THREE.MeshPhongMaterial) p.diffuse.value = f.color, p.opacity.value = f.opacity, (p.map.texture = f.map) && p.offsetRepeat.value.set(f.map.offset.x, f.map.offset.y, f.map.repeat.x, f.map.repeat.y), p.lightMap.texture = f.lightMap, p.envMap.texture = f.envMap, p.reflectivity.value = f.reflectivity, p.refractionRatio.value = f.refractionRatio, p.combine.value = f.combine, p.useRefract.value = f.envMap && f.envMap.mapping instanceof THREE.CubeRefractionMapping;
			if (f instanceof THREE.LineBasicMaterial) p.diffuse.value = f.color, p.opacity.value = f.opacity;
			else if (f instanceof THREE.ParticleBasicMaterial) p.psColor.value = f.color, p.opacity.value = f.opacity, p.size.value = f.size, p.scale.value = V.height / 2, p.map.texture = f.map;
			else if (f instanceof THREE.MeshPhongMaterial) p.ambient.value = f.ambient, p.specular.value = f.specular, p.shininess.value = f.shininess;
			else if (f instanceof THREE.MeshDepthMaterial) p.mNear.value = b.near, p.mFar.value = b.far, p.opacity.value = f.opacity;
			else if (f instanceof THREE.MeshNormalMaterial) p.opacity.value = f.opacity;
			if (k.receiveShadow && !f._shadowPass && p.shadowMatrix) {
				for (c = 0; c < oa.length; c++) p.shadowMatrix.value[c] = oa[c], p.shadowMap.texture[c] = X.shadowMap[c];
				p.shadowDarkness.value = X.shadowMapDarkness;
				p.shadowBias.value = X.shadowMapBias
			}
			c = f.uniformsList;
			p = 0;
			for (e = c.length; p < e; p++) if (v = h.uniforms[c[p][1]]) if (w = c[p][0], x = w.type, n = w.value, x == "i") o.uniform1i(v, n);
			else if (x == "f") o.uniform1f(v, n);
			else if (x == "v2") o.uniform2f(v, n.x, n.y);
			else if (x == "v3") o.uniform3f(v, n.x, n.y, n.z);
			else if (x == "v4") o.uniform4f(v, n.x, n.y, n.z, n.w);
			else if (x == "c") o.uniform3f(v, n.r, n.g, n.b);
			else if (x == "fv1") o.uniform1fv(v, n);
			else if (x == "fv") o.uniform3fv(v, n);
			else if (x == "v3v") {
				if (!w._array) w._array = new Float32Array(3 * n.length);
				x = 0;
				for (z = n.length; x < z; x++) O = x * 3, w._array[O] = n[x].x, w._array[O + 1] = n[x].y, w._array[O + 2] = n[x].z;
				o.uniform3fv(v, w._array)
			}
			else if (x == "m4") {
				if (!w._array) w._array = new Float32Array(16);
				n.flattenToArray(w._array);
				o.uniformMatrix4fv(v, !1, w._array)
			}
			else if (x == "m4v") {
				if (!w._array) w._array = new Float32Array(16 * n.length);
				x = 0;
				for (z = n.length; x < z; x++) n[x].flattenToArrayOffset(w._array, x * 16);
				o.uniformMatrix4fv(v, !1, w._array)
			}
			else if (x == "t") {
				if (o.uniform1i(v, n), v = w.texture) if (v.image instanceof Array && v.image.length == 6) {
					if (w = v, w.image.length == 6) if (w.needsUpdate) {
						if (!w.image.__webglTextureCube) w.image.__webglTextureCube = o.createTexture();
						o.activeTexture(o.TEXTURE0 + n);
						o.bindTexture(o.TEXTURE_CUBE_MAP, w.image.__webglTextureCube);
						for (n = 0; n < 6; n++) o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, w.image[n]);
						H(o.TEXTURE_CUBE_MAP, w, w.image[0]);
						w.needsUpdate = !1
					}
					else o.activeTexture(o.TEXTURE0 + n), o.bindTexture(o.TEXTURE_CUBE_MAP, w.image.__webglTextureCube)
				}
				else v instanceof
				THREE.WebGLRenderTargetCube ? (w = v, o.activeTexture(o.TEXTURE0 + n), o.bindTexture(o.TEXTURE_CUBE_MAP, w.__webglTexture)) : K(v, n)
			}
			else if (x == "tv") {
				if (!w._array) {
					w._array = [];
					x = 0;
					for (z = w.texture.length; x < z; x++) w._array[x] = n + x
				}
				o.uniform1iv(v, w._array);
				x = 0;
				for (z = w.texture.length; x < z; x++)(v = w.texture[x]) && K(v, w._array[x])
			}(f instanceof THREE.ShaderMaterial || f instanceof THREE.MeshPhongMaterial || f.envMap) && m.cameraPosition !== null && o.uniform3f(m.cameraPosition, b.position.x, b.position.y, b.position.z);
			(f instanceof
			THREE.MeshPhongMaterial || f instanceof THREE.MeshLambertMaterial || f instanceof THREE.ShaderMaterial || f.skinning) && m.viewMatrix !== null && o.uniformMatrix4fv(m.viewMatrix, !1, Ba);
			f.skinning && (o.uniformMatrix4fv(m.cameraInverseMatrix, !1, Ba), o.uniformMatrix4fv(m.boneGlobalMatrices, !1, k.boneMatrices))
		}
		o.uniformMatrix4fv(m.modelViewMatrix, !1, k._modelViewMatrixArray);
		m.normalMatrix && o.uniformMatrix3fv(m.normalMatrix, !1, k._normalMatrixArray);
		(f instanceof THREE.ShaderMaterial || f.envMap || f.skinning || k.receiveShadow) && m.objectMatrix !== null && o.uniformMatrix4fv(m.objectMatrix, !1, k._objectMatrixArray);
		return h
	}

	function f(b, c, f, k, h, m) {
		if (k.opacity != 0) {
			var n, f = e(b, c, f, k, m),
				b = f.attributes,
				c = !1,
				f = h.id * 16777215 + f.id;
			f != ma && (ma = f, c = !0);
			if (!k.morphTargets && b.position >= 0) c && (o.bindBuffer(o.ARRAY_BUFFER, h.__webglVertexBuffer), o.vertexAttribPointer(b.position, 3, o.FLOAT, !1, 0, 0));
			else if (m.morphTargetBase) {
				f = k.program.attributes;
				m.morphTargetBase !== -1 ? (o.bindBuffer(o.ARRAY_BUFFER, h.__webglMorphTargetsBuffers[m.morphTargetBase]), o.vertexAttribPointer(f.position, 3, o.FLOAT, !1, 0, 0)) : f.position >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, h.__webglVertexBuffer), o.vertexAttribPointer(f.position, 3, o.FLOAT, !1, 0, 0));
				if (m.morphTargetForcedOrder.length) for (var p = 0, t = m.morphTargetForcedOrder, u = m.morphTargetInfluences; p < k.numSupportedMorphTargets && p < t.length;) o.bindBuffer(o.ARRAY_BUFFER, h.__webglMorphTargetsBuffers[t[p]]), o.vertexAttribPointer(f["morphTarget" + p], 3, o.FLOAT, !1, 0, 0), m.__webglMorphTargetInfluences[p] = u[t[p]], p++;
				else {
					var t = [],
						w = -1,
						v = 0,
						u = m.morphTargetInfluences,
						x, z = u.length,
						p = 0;
					for (m.morphTargetBase !== -1 && (t[m.morphTargetBase] = !0); p < k.numSupportedMorphTargets;) {
						for (x = 0; x < z; x++)!t[x] && u[x] > w && (v = x, w = u[v]);
						o.bindBuffer(o.ARRAY_BUFFER, h.__webglMorphTargetsBuffers[v]);
						o.vertexAttribPointer(f["morphTarget" + p], 3, o.FLOAT, !1, 0, 0);
						m.__webglMorphTargetInfluences[p] = w;
						t[v] = 1;
						w = -1;
						p++
					}
				}
				k.program.uniforms.morphTargetInfluences !== null && o.uniform1fv(k.program.uniforms.morphTargetInfluences, m.__webglMorphTargetInfluences)
			}
			if (c) {
				if (h.__webglCustomAttributes) for (n in h.__webglCustomAttributes) b[n] >= 0 && (f = h.__webglCustomAttributes[n], o.bindBuffer(o.ARRAY_BUFFER, f.buffer), o.vertexAttribPointer(b[n], f.size, o.FLOAT, !1, 0, 0));
				b.color >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, h.__webglColorBuffer), o.vertexAttribPointer(b.color, 3, o.FLOAT, !1, 0, 0));
				b.normal >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, h.__webglNormalBuffer), o.vertexAttribPointer(b.normal, 3, o.FLOAT, !1, 0, 0));
				b.tangent >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, h.__webglTangentBuffer), o.vertexAttribPointer(b.tangent, 4, o.FLOAT, !1, 0, 0));
				b.uv >= 0 && (h.__webglUVBuffer ? (o.bindBuffer(o.ARRAY_BUFFER, h.__webglUVBuffer), o.vertexAttribPointer(b.uv, 2, o.FLOAT, !1, 0, 0), o.enableVertexAttribArray(b.uv)) : o.disableVertexAttribArray(b.uv));
				b.uv2 >= 0 && (h.__webglUV2Buffer ? (o.bindBuffer(o.ARRAY_BUFFER, h.__webglUV2Buffer), o.vertexAttribPointer(b.uv2, 2, o.FLOAT, !1, 0, 0), o.enableVertexAttribArray(b.uv2)) : o.disableVertexAttribArray(b.uv2));
				k.skinning && b.skinVertexA >= 0 && b.skinVertexB >= 0 && b.skinIndex >= 0 && b.skinWeight >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, h.__webglSkinVertexABuffer), o.vertexAttribPointer(b.skinVertexA, 4, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, h.__webglSkinVertexBBuffer), o.vertexAttribPointer(b.skinVertexB, 4, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, h.__webglSkinIndicesBuffer), o.vertexAttribPointer(b.skinIndex, 4, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, h.__webglSkinWeightsBuffer), o.vertexAttribPointer(b.skinWeight, 4, o.FLOAT, !1, 0, 0))
			}
			m instanceof THREE.Mesh ? (k.wireframe ? (o.lineWidth(k.wireframeLinewidth), c && o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, h.__webglLineBuffer), o.drawElements(o.LINES, h.__webglLineCount, o.UNSIGNED_SHORT, 0)) : (c && o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, h.__webglFaceBuffer), o.drawElements(o.TRIANGLES, h.__webglFaceCount, o.UNSIGNED_SHORT, 0)), X.info.render.calls++, X.info.render.vertices += h.__webglFaceCount, X.info.render.faces += h.__webglFaceCount / 3) : m instanceof THREE.Line ? (m = m.type == THREE.LineStrip ? o.LINE_STRIP : o.LINES, o.lineWidth(k.linewidth), o.drawArrays(m, 0, h.__webglLineCount), X.info.render.calls++) : m instanceof THREE.ParticleSystem ? (o.drawArrays(o.POINTS, 0, h.__webglParticleCount), X.info.render.calls++) : m instanceof THREE.Ribbon && (o.drawArrays(o.TRIANGLE_STRIP, 0, h.__webglVertexCount), X.info.render.calls++)
		}
	}

	function h(b, c, e) {
		if (!b.__webglVertexBuffer) b.__webglVertexBuffer = o.createBuffer();
		if (!b.__webglNormalBuffer) b.__webglNormalBuffer = o.createBuffer();
		b.hasPos && (o.bindBuffer(o.ARRAY_BUFFER, b.__webglVertexBuffer), o.bufferData(o.ARRAY_BUFFER, b.positionArray, o.DYNAMIC_DRAW), o.enableVertexAttribArray(c.attributes.position), o.vertexAttribPointer(c.attributes.position, 3, o.FLOAT, !1, 0, 0));
		if (b.hasNormal) {
			o.bindBuffer(o.ARRAY_BUFFER, b.__webglNormalBuffer);
			if (e == THREE.FlatShading) {
				var f, h, k, m, n, p, t, u, w, v, x = b.count * 3;
				for (v = 0; v < x; v += 9) e = b.normalArray, f = e[v], h = e[v + 1], k = e[v + 2], m = e[v + 3], p = e[v + 4], u = e[v + 5], n = e[v + 6], t = e[v + 7], w = e[v + 8], f = (f + m + n) / 3, h = (h + p + t) / 3, k = (k + u + w) / 3, e[v] = f, e[v + 1] = h, e[v + 2] = k, e[v + 3] = f, e[v + 4] = h, e[v + 5] = k, e[v + 6] = f, e[v + 7] = h, e[v + 8] = k
			}
			o.bufferData(o.ARRAY_BUFFER, b.normalArray, o.DYNAMIC_DRAW);
			o.enableVertexAttribArray(c.attributes.normal);
			o.vertexAttribPointer(c.attributes.normal, 3, o.FLOAT, !1, 0, 0)
		}
		o.drawArrays(o.TRIANGLES, 0, b.count);
		b.count = 0
	}

	function k(b) {
		if (la != b.doubleSided) b.doubleSided ? o.disable(o.CULL_FACE) : o.enable(o.CULL_FACE), la = b.doubleSided;
		if (ga != b.flipSided) b.flipSided ? o.frontFace(o.CW) : o.frontFace(o.CCW), ga = b.flipSided
	}

	function m(b) {
		ca != b && (b ? o.enable(o.DEPTH_TEST) : o.disable(o.DEPTH_TEST), ca = b)
	}

	function n(b) {
		aa != b && (o.depthMask(b), aa = b)
	}

	function t(b, c, e) {
		ha != b && (b ? o.enable(o.POLYGON_OFFSET_FILL) : o.disable(o.POLYGON_OFFSET_FILL), ha = b);
		if (b && (ka != c || sa != e)) o.polygonOffset(c, e), ka = c, sa = e
	}

	function u(b) {
		va[0].set(b.n41 - b.n11, b.n42 - b.n12, b.n43 - b.n13, b.n44 - b.n14);
		va[1].set(b.n41 + b.n11, b.n42 + b.n12, b.n43 + b.n13, b.n44 + b.n14);
		va[2].set(b.n41 + b.n21, b.n42 + b.n22, b.n43 + b.n23, b.n44 + b.n24);
		va[3].set(b.n41 - b.n21, b.n42 - b.n22, b.n43 - b.n23, b.n44 - b.n24);
		va[4].set(b.n41 - b.n31, b.n42 - b.n32, b.n43 - b.n33, b.n44 - b.n34);
		va[5].set(b.n41 + b.n31, b.n42 + b.n32, b.n43 + b.n33, b.n44 + b.n34);
		for (var c, b = 0; b < 6; b++) c = va[b], c.divideScalar(Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z))
	}

	function v(b) {
		for (var c = b.matrixWorld, e = -b.geometry.boundingSphere.radius * Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z)), f = 0; f < 6; f++) if (b = va[f].x * c.n14 + va[f].y * c.n24 + va[f].z * c.n34 + va[f].w, b <= e) return !1;
		return !0
	}

	function p(b, c) {
		b.list[b.count] = c;
		b.count += 1
	}

	function x(b) {
		var c, e, f = b.object,
			h = b.opaque,
			k = b.transparent;
		k.count = 0;
		b = h.count = 0;
		for (c = f.materials.length; b < c; b++) e = f.materials[b], e.transparent ? p(k, e) : p(h, e)
	}

	function w(b) {
		var c, e, f, h, k = b.object,
			m = b.buffer,
			n = b.opaque,
			o = b.transparent;
		o.count = 0;
		b = n.count = 0;
		for (f = k.materials.length; b < f; b++) if (c = k.materials[b], c instanceof THREE.MeshFaceMaterial) {
			c = 0;
			for (e = m.materials.length; c < e; c++)(h = m.materials[c]) && (h.transparent ? p(o, h) : p(n, h))
		}
		else(h = c) && (h.transparent ? p(o, h) : p(n, h))
	}

	function A(b, c) {
		return c.z - b.z
	}

	function z(b) {
		var c, n, p, t = 0,
			w, x, z, y, A = b.lights;
		wa || (wa = new THREE.PerspectiveCamera(X.shadowCameraFov, X.shadowMapWidth / X.shadowMapHeight, X.shadowCameraNear, X.shadowCameraFar));
		c = 0;
		for (n = A.length; c < n; c++) if (p = A[c], p instanceof THREE.SpotLight && p.castShadow) {
			fa = -1;
			X.shadowMap[t] || (X.shadowMap[t] = new THREE.WebGLRenderTarget(X.shadowMapWidth, X.shadowMapHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBAFormat
			}));
			oa[t] || (oa[t] = new THREE.Matrix4);
			w = X.shadowMap[t];
			x = oa[t];
			wa.position.copy(p.position);
			wa.lookAt(p.target.position);
			wa.update(void 0, !0);
			b.update(void 0, !1, wa);
			x.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
			x.multiplySelf(wa.projectionMatrix);
			x.multiplySelf(wa.matrixWorldInverse);
			wa.matrixWorldInverse.flattenToArray(Ba);
			wa.projectionMatrix.flattenToArray(Ea);
			ua.multiply(wa.projectionMatrix, wa.matrixWorldInverse);
			u(ua);
			X.initWebGLObjects(b);
			Z(w);
			o.clearColor(1, 1, 1, 1);
			X.clear();
			o.clearColor(ia.r, ia.g, ia.b, ja);
			x = b.__webglObjects.length;
			p = b.__webglObjectsImmediate.length;
			for (w = 0; w < x; w++) z = b.__webglObjects[w], y = z.object, y.visible && y.castShadow ? !(y instanceof THREE.Mesh) || !y.frustumCulled || v(y) ? (y.matrixWorld.flattenToArray(y._objectMatrixArray), C(y, wa, !1), z.render = !0) : z.render = !1 : z.render = !1;
			m(!0);
			G(THREE.NormalBlending);
			for (w = 0; w < x; w++) if (z = b.__webglObjects[w], z.render) y = z.object, buffer = z.buffer, k(y), z = y.customDepthMaterial ? y.customDepthMaterial : y.geometry.morphTargets.length ? Ka : za, f(wa, A, null, z, buffer, y);
			for (w = 0; w < p; w++) z = b.__webglObjectsImmediate[w], y = z.object, y.visible && y.castShadow && (y.matrixAutoUpdate && y.matrixWorld.flattenToArray(y._objectMatrixArray), ma = -1, C(y, wa, !1), k(y), program = e(wa, A, null, za, y), y.immediateRenderCallback ? y.immediateRenderCallback(program, o, va) : y.render(function (b) {
				h(b, program, za.shading)
			}));
			t++
		}
	}

	function y(b, c) {
		var e, f, h;
		e = W.attributes;
		var k = W.uniforms,
			m = ra / na,
			n, p = [],
			t = na * 0.5,
			u = ra * 0.5,
			w = !0;
		o.useProgram(W.program);
		R = W.program;
		ma = ca = $ = -1;
		Ja || (o.enableVertexAttribArray(W.attributes.position), o.enableVertexAttribArray(W.attributes.uv), Ja = !0);
		o.disable(o.CULL_FACE);
		o.enable(o.BLEND);
		o.depthMask(!0);
		o.bindBuffer(o.ARRAY_BUFFER, W.vertexBuffer);
		o.vertexAttribPointer(e.position, 2, o.FLOAT, !1, 16, 0);
		o.vertexAttribPointer(e.uv, 2, o.FLOAT, !1, 16, 8);
		o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, W.elementBuffer);
		o.uniformMatrix4fv(k.projectionMatrix, !1, Ea);
		o.activeTexture(o.TEXTURE0);
		o.uniform1i(k.map, 0);
		e = 0;
		for (f = b.__webglSprites.length; e < f; e++) if (h = b.__webglSprites[e], h.visible && h.opacity != 0) h.useScreenCoordinates ? h.z = -h.position.z : (h._modelViewMatrix.multiplyToArray(c.matrixWorldInverse, h.matrixWorld, h._modelViewMatrixArray), h.z = -h._modelViewMatrix.n34);
		b.__webglSprites.sort(A);
		e = 0;
		for (f = b.__webglSprites.length; e < f; e++) h = b.__webglSprites[e], h.visible && h.opacity != 0 && h.map && h.map.image && h.map.image.width && (h.useScreenCoordinates ? (o.uniform1i(k.useScreenCoordinates, 1), o.uniform3f(k.screenPosition, (h.position.x - t) / t, (u - h.position.y) / u, Math.max(0, Math.min(1, h.position.z)))) : (o.uniform1i(k.useScreenCoordinates, 0), o.uniform1i(k.affectedByDistance, h.affectedByDistance ? 1 : 0), o.uniformMatrix4fv(k.modelViewMatrix, !1, h._modelViewMatrixArray)), n = h.map.image.width / (h.scaleByViewport ? ra : 1), p[0] = n * m * h.scale.x, p[1] = n * h.scale.y, o.uniform2f(k.uvScale, h.uvScale.x, h.uvScale.y), o.uniform2f(k.uvOffset, h.uvOffset.x, h.uvOffset.y), o.uniform2f(k.alignment, h.alignment.x, h.alignment.y), o.uniform1f(k.opacity, h.opacity), o.uniform3f(k.color, h.color.r, h.color.g, h.color.b), o.uniform1f(k.rotation, h.rotation), o.uniform2fv(k.scale, p), h.mergeWith3D && !w ? (o.enable(o.DEPTH_TEST), w = !0) : !h.mergeWith3D && w && (o.disable(o.DEPTH_TEST), w = !1), G(h.blending), K(h.map, 0), o.drawElements(o.TRIANGLES, 6, o.UNSIGNED_SHORT, 0));
		o.enable(o.CULL_FACE);
		o.enable(o.DEPTH_TEST);
		o.depthMask(aa)
	}

	function C(b, c, e) {
		b._modelViewMatrix.multiplyToArray(c.matrixWorldInverse, b.matrixWorld, b._modelViewMatrixArray);
		e && THREE.Matrix4.makeInvert3x3(b._modelViewMatrix).transposeIntoArray(b._normalMatrixArray)
	}

	function E(b) {
		var c, e, f, h;
		h = b.__materials;
		b = 0;
		for (e = h.length; b < e; b++) if (f = h[b], f.attributes) for (c in f.attributes) if (f.attributes[c].needsUpdate) return !0;
		return !1
	}

	function D(b) {
		var c, e, f, h;
		h = b.__materials;
		b = 0;
		for (e = h.length; b < e; b++) if (f = h[b], f.attributes) for (c in f.attributes) f.attributes[c].needsUpdate = !1
	}

	function F(b, c) {
		var e;
		for (e = b.length - 1; e >= 0; e--) b[e].object == c && b.splice(e, 1)
	}

	function M(b) {
		function c(b) {
			var h = [];
			e = 0;
			for (f = b.length; e < f; e++) b[e] == void 0 ? h.push("undefined") : h.push(b[e].id);
			return h.join("_")
		}
		var e, f, h, k, m, n, o, p, t = {},
			u = b.morphTargets !== void 0 ? b.morphTargets.length : 0;
		b.geometryGroups = {};
		h = 0;
		for (k = b.faces.length; h < k; h++) m = b.faces[h], n = m.materials, o = c(n), t[o] == void 0 && (t[o] = {
			hash: o,
			counter: 0
		}), p = t[o].hash + "_" + t[o].counter, b.geometryGroups[p] == void 0 && (b.geometryGroups[p] = {
			faces: [],
			materials: n,
			vertices: 0,
			numMorphTargets: u
		}), m = m instanceof THREE.Face3 ? 3 : 4, b.geometryGroups[p].vertices + m > 65535 && (t[o].counter += 1, p = t[o].hash + "_" + t[o].counter, b.geometryGroups[p] == void 0 && (b.geometryGroups[p] = {
			faces: [],
			materials: n,
			vertices: 0,
			numMorphTargets: u
		})), b.geometryGroups[p].faces.push(h), b.geometryGroups[p].vertices += m;
		b.geometryGroupsList = [];
		for (var w in b.geometryGroups) b.geometryGroups[w].id = da++, b.geometryGroupsList.push(b.geometryGroups[w])
	}

	function N(b, c, e) {
		b.push({
			buffer: c,
			object: e,
			opaque: {
				list: [],
				count: 0
			},
			transparent: {
				list: [],
				count: 0
			}
		})
	}

	function G(b) {
		if (b != $) {
			switch (b) {
			case THREE.AdditiveBlending:
				o.blendEquation(o.FUNC_ADD);
				o.blendFunc(o.SRC_ALPHA, o.ONE);
				break;
			case THREE.SubtractiveBlending:
				o.blendEquation(o.FUNC_ADD);
				o.blendFunc(o.ZERO, o.ONE_MINUS_SRC_COLOR);
				break;
			case THREE.MultiplyBlending:
				o.blendEquation(o.FUNC_ADD);
				o.blendFunc(o.ZERO, o.SRC_COLOR);
				break;
			default:
				o.blendEquationSeparate(o.FUNC_ADD, o.FUNC_ADD), o.blendFuncSeparate(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA, o.ONE, o.ONE_MINUS_SRC_ALPHA)
			}
			$ = b
		}
	}

	function H(b, c, e) {
		(e.width & e.width - 1) == 0 && (e.height & e.height - 1) == 0 ? (o.texParameteri(b, o.TEXTURE_WRAP_S, Y(c.wrapS)), o.texParameteri(b, o.TEXTURE_WRAP_T, Y(c.wrapT)), o.texParameteri(b, o.TEXTURE_MAG_FILTER, Y(c.magFilter)), o.texParameteri(b, o.TEXTURE_MIN_FILTER, Y(c.minFilter)), o.generateMipmap(b)) : (o.texParameteri(b, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(b, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), o.texParameteri(b, o.TEXTURE_MAG_FILTER, U(c.magFilter)), o.texParameteri(b, o.TEXTURE_MIN_FILTER, U(c.minFilter)))
	}

	function K(b, c) {
		if (b.needsUpdate) {
			if (!b.__webglInit) b.__webglInit = !0, b.__webglTexture = o.createTexture(), X.info.memory.textures++;
			o.activeTexture(o.TEXTURE0 + c);
			o.bindTexture(o.TEXTURE_2D, b.__webglTexture);
			b instanceof
			THREE.DataTexture ? o.texImage2D(o.TEXTURE_2D, 0, Y(b.format), b.image.width, b.image.height, 0, Y(b.format), o.UNSIGNED_BYTE, b.image.data) : o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, b.image);
			H(o.TEXTURE_2D, b, b.image);
			b.needsUpdate = !1
		}
		else o.activeTexture(o.TEXTURE0 + c), o.bindTexture(o.TEXTURE_2D, b.__webglTexture)
	}

	function Z(b) {
		var c = b instanceof THREE.WebGLRenderTargetCube;
		if (b && !b.__webglFramebuffer) {
			if (b.depthBuffer === void 0) b.depthBuffer = !0;
			if (b.stencilBuffer === void 0) b.stencilBuffer = !0;
			b.__webglRenderbuffer = o.createRenderbuffer();
			b.__webglTexture = o.createTexture();
			if (c) {
				o.bindTexture(o.TEXTURE_CUBE_MAP, b.__webglTexture);
				H(o.TEXTURE_CUBE_MAP, b, b);
				b.__webglFramebuffer = [];
				for (var e = 0; e < 6; e++) b.__webglFramebuffer[e] = o.createFramebuffer(), o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, Y(b.format), b.width, b.height, 0, Y(b.format), Y(b.type), null)
			}
			else b.__webglFramebuffer = o.createFramebuffer(), o.bindTexture(o.TEXTURE_2D, b.__webglTexture), H(o.TEXTURE_2D, b, b), o.texImage2D(o.TEXTURE_2D, 0, Y(b.format), b.width, b.height, 0, Y(b.format), Y(b.type), null);
			o.bindRenderbuffer(o.RENDERBUFFER, b.__webglRenderbuffer);
			if (c) for (e = 0; e < 6; ++e) o.bindFramebuffer(o.FRAMEBUFFER, b.__webglFramebuffer[e]), o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_CUBE_MAP_POSITIVE_X + e, b.__webglTexture, 0);
			else o.bindFramebuffer(o.FRAMEBUFFER, b.__webglFramebuffer), o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, b.__webglTexture, 0);
			b.depthBuffer && !b.stencilBuffer ? (o.renderbufferStorage(o.RENDERBUFFER, o.DEPTH_COMPONENT16, b.width, b.height), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.DEPTH_ATTACHMENT, o.RENDERBUFFER, b.__webglRenderbuffer)) : b.depthBuffer && b.stencilBuffer ? (o.renderbufferStorage(o.RENDERBUFFER, o.DEPTH_STENCIL, b.width, b.height), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.DEPTH_STENCIL_ATTACHMENT, o.RENDERBUFFER, b.__webglRenderbuffer)) : o.renderbufferStorage(o.RENDERBUFFER, o.RGBA4, b.width, b.height);
			c ? o.bindTexture(o.TEXTURE_CUBE_MAP, null) : o.bindTexture(o.TEXTURE_2D, null);
			o.bindRenderbuffer(o.RENDERBUFFER, null);
			o.bindFramebuffer(o.FRAMEBUFFER, null)
		}
		var f, h;
		b ? (c = c ? b.__webglFramebuffer[b.activeCubeFace] : b.__webglFramebuffer, e = b.width, b = b.height, h = f = 0) : (c = null, e = na, b = ra, f = J, h = Q);
		c != pa && (o.bindFramebuffer(o.FRAMEBUFFER, c), o.viewport(f, h, e, b), pa = c)
	}

	function L(b) {
		b instanceof THREE.WebGLRenderTargetCube ? (o.bindTexture(o.TEXTURE_CUBE_MAP, b.__webglTexture), o.generateMipmap(o.TEXTURE_CUBE_MAP), o.bindTexture(o.TEXTURE_CUBE_MAP, null)) : (o.bindTexture(o.TEXTURE_2D, b.__webglTexture), o.generateMipmap(o.TEXTURE_2D), o.bindTexture(o.TEXTURE_2D, null))
	}

	function P(b, c) {
		var e;
		b == "fragment" ? e = o.createShader(o.FRAGMENT_SHADER) : b == "vertex" && (e = o.createShader(o.VERTEX_SHADER));
		o.shaderSource(e, c);
		o.compileShader(e);
		if (!o.getShaderParameter(e, o.COMPILE_STATUS)) return console.error(o.getShaderInfoLog(e)), console.error(c), null;
		return e
	}

	function U(b) {
		switch (b) {
		case THREE.NearestFilter:
		case THREE.NearestMipMapNearestFilter:
		case THREE.NearestMipMapLinearFilter:
			return o.NEAREST;
		default:
			return o.LINEAR
		}
	}

	function Y(b) {
		switch (b) {
		case THREE.RepeatWrapping:
			return o.REPEAT;
		case THREE.ClampToEdgeWrapping:
			return o.CLAMP_TO_EDGE;
		case THREE.MirroredRepeatWrapping:
			return o.MIRRORED_REPEAT;
		case THREE.NearestFilter:
			return o.NEAREST;
		case THREE.NearestMipMapNearestFilter:
			return o.NEAREST_MIPMAP_NEAREST;
		case THREE.NearestMipMapLinearFilter:
			return o.NEAREST_MIPMAP_LINEAR;
		case THREE.LinearFilter:
			return o.LINEAR;
		case THREE.LinearMipMapNearestFilter:
			return o.LINEAR_MIPMAP_NEAREST;
		case THREE.LinearMipMapLinearFilter:
			return o.LINEAR_MIPMAP_LINEAR;
		case THREE.ByteType:
			return o.BYTE;
		case THREE.UnsignedByteType:
			return o.UNSIGNED_BYTE;
		case THREE.ShortType:
			return o.SHORT;
		case THREE.UnsignedShortType:
			return o.UNSIGNED_SHORT;
		case THREE.IntType:
			return o.INT;
		case THREE.UnsignedShortType:
			return o.UNSIGNED_INT;
		case THREE.FloatType:
			return o.FLOAT;
		case THREE.AlphaFormat:
			return o.ALPHA;
		case THREE.RGBFormat:
			return o.RGB;
		case THREE.RGBAFormat:
			return o.RGBA;
		case THREE.LuminanceFormat:
			return o.LUMINANCE;
		case THREE.LuminanceAlphaFormat:
			return o.LUMINANCE_ALPHA
		}
		return 0
	}
	var X = this,
		o, ea = [],
		R = null,
		pa = null,
		fa = -1,
		ma = null,
		da = 0,
		la = null,
		ga = null,
		$ = null,
		ca = null,
		aa = null,
		ha = null,
		ka = null,
		sa = null,
		J = 0,
		Q = 0,
		na = 0,
		ra = 0,
		va = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
		ua = new THREE.Matrix4,
		Ea = new Float32Array(16),
		Ba = new Float32Array(16),
		Da = new THREE.Vector4,
		Fa = {
			ambient: [0, 0, 0],
			directional: {
				length: 0,
				colors: [],
				positions: []
			},
			point: {
				length: 0,
				colors: [],
				positions: [],
				distances: []
			}
		},
		b = b || {},
		V = b.canvas !== void 0 ? b.canvas : document.createElement("canvas"),
		T = b.stencil !== void 0 ? b.stencil : !0,
		O = b.preserveDrawingBuffer !== void 0 ? b.preserveDrawingBuffer : !1,
		qa = b.antialias !== void 0 ? b.antialias : !1,
		ia = b.clearColor !== void 0 ? new THREE.Color(b.clearColor) : new THREE.Color(0),
		ja = b.clearAlpha !== void 0 ? b.clearAlpha : 0,
		ya = b.maxLights !== void 0 ? b.maxLights : 4;
	this.info = {
		memory: {
			programs: 0,
			geometries: 0,
			textures: 0
		},
		render: {
			calls: 0,
			vertices: 0,
			faces: 0
		}
	};
	this.maxMorphTargets = 8;
	this.domElement = V;
	this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
	this.shadowMapBias = 0.0039;
	this.shadowMapDarkness = 0.5;
	this.shadowMapHeight = this.shadowMapWidth = 512;
	this.shadowCameraNear = 1;
	this.shadowCameraFar = 5E3;
	this.shadowCameraFov = 50;
	this.shadowMap = [];
	this.shadowMapEnabled = !1;
	this.shadowMapSoft = !0;
	var wa, oa = [],
		b = THREE.ShaderLib.depthRGBA,
		Ia = THREE.UniformsUtils.clone(b.uniforms),
		za = new THREE.ShaderMaterial({
			fragmentShader: b.fragmentShader,
			vertexShader: b.vertexShader,
			uniforms: Ia
		}),
		Ka = new THREE.ShaderMaterial({
			fragmentShader: b.fragmentShader,
			vertexShader: b.vertexShader,
			uniforms: Ia,
			morphTargets: !0
		});
	za._shadowPass = !0;
	Ka._shadowPass = !0;
	try {
		if (!(o = V.getContext("experimental-webgl", {
			antialias: qa,
			stencil: T,
			preserveDrawingBuffer: O
		}))) throw "Error creating WebGL context.";
		console.log(navigator.userAgent + " | " + o.getParameter(o.VERSION) + " | " + o.getParameter(o.VENDOR) + " | " + o.getParameter(o.RENDERER) + " | " + o.getParameter(o.SHADING_LANGUAGE_VERSION))
	}
	catch (Ca) {
		console.error(Ca)
	}
	o.clearColor(0, 0, 0, 1);
	o.clearDepth(1);
	o.clearStencil(0);
	o.enable(o.DEPTH_TEST);
	o.depthFunc(o.LEQUAL);
	o.frontFace(o.CCW);
	o.cullFace(o.BACK);
	o.enable(o.CULL_FACE);
	o.enable(o.BLEND);
	o.blendEquation(o.FUNC_ADD);
	o.blendFunc(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA);
	o.clearColor(ia.r, ia.g, ia.b, ja);
	this.context = o;
	var Ga = o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0,
		W = {};
	W.vertices = new Float32Array(16);
	W.faces = new Uint16Array(6);
	T = 0;
	W.vertices[T++] = -1;
	W.vertices[T++] = -1;
	W.vertices[T++] = 0;
	W.vertices[T++] = 1;
	W.vertices[T++] = 1;
	W.vertices[T++] = -1;
	W.vertices[T++] = 1;
	W.vertices[T++] = 1;
	W.vertices[T++] = 1;
	W.vertices[T++] = 1;
	W.vertices[T++] = 1;
	W.vertices[T++] = 0;
	W.vertices[T++] = -1;
	W.vertices[T++] = 1;
	W.vertices[T++] = 0;
	T = W.vertices[T++] = 0;
	W.faces[T++] = 0;
	W.faces[T++] = 1;
	W.faces[T++] = 2;
	W.faces[T++] = 0;
	W.faces[T++] = 2;
	W.faces[T++] = 3;
	W.vertexBuffer = o.createBuffer();
	W.elementBuffer = o.createBuffer();
	o.bindBuffer(o.ARRAY_BUFFER, W.vertexBuffer);
	o.bufferData(o.ARRAY_BUFFER, W.vertices, o.STATIC_DRAW);
	o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, W.elementBuffer);
	o.bufferData(o.ELEMENT_ARRAY_BUFFER, W.faces, o.STATIC_DRAW);
	W.program = o.createProgram();
	o.attachShader(W.program, P("fragment", THREE.ShaderLib.sprite.fragmentShader));
	o.attachShader(W.program, P("vertex", THREE.ShaderLib.sprite.vertexShader));
	o.linkProgram(W.program);
	W.attributes = {};
	W.uniforms = {};
	W.attributes.position = o.getAttribLocation(W.program, "position");
	W.attributes.uv = o.getAttribLocation(W.program, "uv");
	W.uniforms.uvOffset = o.getUniformLocation(W.program, "uvOffset");
	W.uniforms.uvScale = o.getUniformLocation(W.program, "uvScale");
	W.uniforms.rotation = o.getUniformLocation(W.program, "rotation");
	W.uniforms.scale = o.getUniformLocation(W.program, "scale");
	W.uniforms.alignment = o.getUniformLocation(W.program, "alignment");
	W.uniforms.color = o.getUniformLocation(W.program, "color");
	W.uniforms.map = o.getUniformLocation(W.program, "map");
	W.uniforms.opacity = o.getUniformLocation(W.program, "opacity");
	W.uniforms.useScreenCoordinates = o.getUniformLocation(W.program, "useScreenCoordinates");
	W.uniforms.affectedByDistance = o.getUniformLocation(W.program, "affectedByDistance");
	W.uniforms.screenPosition = o.getUniformLocation(W.program, "screenPosition");
	W.uniforms.modelViewMatrix = o.getUniformLocation(W.program, "modelViewMatrix");
	W.uniforms.projectionMatrix = o.getUniformLocation(W.program, "projectionMatrix");
	var Ja = !1;
	this.setSize = function (b, c) {
		V.width = b;
		V.height = c;
		this.setViewport(0, 0, V.width, V.height)
	};
	this.setViewport = function (b, c, e, f) {
		J = b;
		Q = c;
		na = e;
		ra = f;
		o.viewport(J, Q, na, ra)
	};
	this.setScissor = function (b, c, e, f) {
		o.scissor(b, c, e, f)
	};
	this.enableScissorTest = function (b) {
		b ? o.enable(o.SCISSOR_TEST) : o.disable(o.SCISSOR_TEST)
	};
	this.setClearColorHex = function (b, c) {
		ia.setHex(b);
		ja = c;
		o.clearColor(ia.r, ia.g, ia.b, ja)
	};
	this.setClearColor = function (b, c) {
		ia.copy(b);
		ja = c;
		o.clearColor(ia.r, ia.g, ia.b, ja)
	};
	this.getClearColor = function () {
		return ia
	};
	this.getClearAlpha = function () {
		return ja
	};
	this.clear = function (b, c, e) {
		var f = 0;
		if (b == void 0 || b) f |= o.COLOR_BUFFER_BIT;
		if (c == void 0 || c) f |= o.DEPTH_BUFFER_BIT;
		if (e == void 0 || e) f |= o.STENCIL_BUFFER_BIT;
		o.clear(f)
	};
	this.getContext = function () {
		return o
	};
	this.deallocateObject = function (b) {
		if (b.__webglInit) if (b.__webglInit = !1, delete b._modelViewMatrix, delete b._normalMatrixArray, delete b._modelViewMatrixArray, delete b._objectMatrixArray, b instanceof THREE.Mesh) for (g in b.geometry.geometryGroups) {
			var c = b.geometry.geometryGroups[g];
			o.deleteBuffer(c.__webglVertexBuffer);
			o.deleteBuffer(c.__webglNormalBuffer);
			o.deleteBuffer(c.__webglTangentBuffer);
			o.deleteBuffer(c.__webglColorBuffer);
			o.deleteBuffer(c.__webglUVBuffer);
			o.deleteBuffer(c.__webglUV2Buffer);
			o.deleteBuffer(c.__webglSkinVertexABuffer);
			o.deleteBuffer(c.__webglSkinVertexBBuffer);
			o.deleteBuffer(c.__webglSkinIndicesBuffer);
			o.deleteBuffer(c.__webglSkinWeightsBuffer);
			o.deleteBuffer(c.__webglFaceBuffer);
			o.deleteBuffer(c.__webglLineBuffer);
			if (c.numMorphTargets) for (var e = 0, f = c.numMorphTargets; e < f; e++) o.deleteBuffer(c.__webglMorphTargetsBuffers[e]);
			X.info.memory.geometries--
		}
		else if (b instanceof THREE.Ribbon) b = b.geometry, o.deleteBuffer(b.__webglVertexBuffer), o.deleteBuffer(b.__webglColorBuffer), X.info.memory.geometries--;
		else if (b instanceof THREE.Line) b = b.geometry, o.deleteBuffer(b.__webglVertexBuffer), o.deleteBuffer(b.__webglColorBuffer), X.info.memory.geometries--;
		else if (b instanceof THREE.ParticleSystem) b = b.geometry, o.deleteBuffer(b.__webglVertexBuffer), o.deleteBuffer(b.__webglColorBuffer), X.info.memory.geometries--
	};
	this.deallocateTexture = function (b) {
		if (b.__webglInit) b.__webglInit = !1, o.deleteTexture(b.__webglTexture), X.info.memory.textures--
	};
	this.initMaterial = function (b, c, e, f) {
		var h, k, m, n;
		b instanceof THREE.MeshDepthMaterial ? n = "depth" : b instanceof THREE.MeshNormalMaterial ? n = "normal" : b instanceof THREE.MeshBasicMaterial ? n = "basic" : b instanceof THREE.MeshLambertMaterial ? n = "lambert" : b instanceof THREE.MeshPhongMaterial ? n = "phong" : b instanceof THREE.LineBasicMaterial ? n = "basic" : b instanceof THREE.ParticleBasicMaterial && (n = "particle_basic");
		if (n) {
			var p = THREE.ShaderLib[n];
			b.uniforms = THREE.UniformsUtils.clone(p.uniforms);
			b.vertexShader = p.vertexShader;
			b.fragmentShader = p.fragmentShader
		}
		var t, u, w;
		t = w = p = 0;
		for (u = c.length; t < u; t++) m = c[t], m instanceof THREE.SpotLight && w++, m instanceof THREE.DirectionalLight && w++, m instanceof THREE.PointLight && p++;
		p + w <= ya ? t = w : (t = Math.ceil(ya * w / (p + w)), p = ya - t);
		m = {
			directional: t,
			point: p
		};
		p = w = 0;
		for (t = c.length; p < t; p++) u = c[p], u instanceof THREE.SpotLight && u.castShadow && w++;
		var v = 50;
		if (f !== void 0 && f instanceof THREE.SkinnedMesh) v = f.bones.length;
		var x;
		a: {
			t = b.fragmentShader;
			u = b.vertexShader;
			var p = b.uniforms,
				c = b.attributes,
				e = {
					map: !! b.map,
					envMap: !! b.envMap,
					lightMap: !! b.lightMap,
					vertexColors: b.vertexColors,
					fog: e,
					useFog: b.fog,
					sizeAttenuation: b.sizeAttenuation,
					skinning: b.skinning,
					morphTargets: b.morphTargets,
					maxMorphTargets: this.maxMorphTargets,
					maxDirLights: m.directional,
					maxPointLights: m.point,
					maxBones: v,
					shadowMapEnabled: this.shadowMapEnabled && f.receiveShadow,
					shadowMapSoft: this.shadowMapSoft,
					shadowMapWidth: this.shadowMapWidth,
					shadowMapHeight: this.shadowMapHeight,
					maxShadows: w,
					alphaTest: b.alphaTest
				},
				z, f = [];
			n ? f.push(n) : (f.push(t), f.push(u));
			for (z in e) f.push(z), f.push(e[z]);
			n = f.join();
			z = 0;
			for (f = ea.length; z < f; z++) if (ea[z].code == n) {
				x = ea[z].program;
				break a
			}
			z = o.createProgram();
			f = [Ga ? "#define VERTEX_TEXTURES" : "", "#define MAX_DIR_LIGHTS " + e.maxDirLights,
				                "#define MAX_POINT_LIGHTS " + e.maxPointLights, "#define MAX_SHADOWS " + e.maxShadows, "#define MAX_BONES " + e.maxBones, e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapSoft ? "#define SHADOWMAP_SOFT" : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
			m = ["#ifdef GL_ES\nprecision highp float;\n#endif", "#define MAX_DIR_LIGHTS " + e.maxDirLights, "#define MAX_POINT_LIGHTS " + e.maxPointLights, "#define MAX_SHADOWS " + e.maxShadows, e.alphaTest ? "#define ALPHATEST " + e.alphaTest : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
				                e.shadowMapSoft ? "#define SHADOWMAP_SOFT" : "", e.shadowMapSoft ? "#define SHADOWMAP_WIDTH " + e.shadowMapWidth.toFixed(1) : "", e.shadowMapSoft ? "#define SHADOWMAP_HEIGHT " + e.shadowMapHeight.toFixed(1) : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
			o.attachShader(z, P("fragment", m + t));
			o.attachShader(z, P("vertex", f + u));
			o.linkProgram(z);
			o.getProgramParameter(z, o.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + o.getProgramParameter(z, o.VALIDATE_STATUS) + ", gl error [" + o.getError() + "]");
			z.uniforms = {};
			z.attributes = {};
			var y, f = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition", "cameraInverseMatrix", "boneGlobalMatrices", "morphTargetInfluences"];
			for (y in p) f.push(y);
			y = f;
			f = 0;
			for (p = y.length; f < p; f++) t = y[f], z.uniforms[t] = o.getUniformLocation(z, t);
			f = ["position", "normal", "uv", "uv2", "tangent", "color", "skinVertexA", "skinVertexB", "skinIndex", "skinWeight"];
			for (y = 0; y < e.maxMorphTargets; y++) f.push("morphTarget" + y);
			for (x in c) f.push(x);
			x = f;
			y = 0;
			for (c = x.length; y < c; y++) e = x[y], z.attributes[e] = o.getAttribLocation(z, e);
			z.id = ea.length;
			ea.push({
				program: z,
				code: n
			});
			X.info.memory.programs = ea.length;
			x = z
		}
		b.program = x;
		x = b.program.attributes;
		x.position >= 0 && o.enableVertexAttribArray(x.position);
		x.color >= 0 && o.enableVertexAttribArray(x.color);
		x.normal >= 0 && o.enableVertexAttribArray(x.normal);
		x.tangent >= 0 && o.enableVertexAttribArray(x.tangent);
		b.skinning && x.skinVertexA >= 0 && x.skinVertexB >= 0 && x.skinIndex >= 0 && x.skinWeight >= 0 && (o.enableVertexAttribArray(x.skinVertexA), o.enableVertexAttribArray(x.skinVertexB), o.enableVertexAttribArray(x.skinIndex), o.enableVertexAttribArray(x.skinWeight));
		if (b.attributes) for (k in b.attributes) x[k] !== void 0 && x[k] >= 0 && o.enableVertexAttribArray(x[k]);
		if (b.morphTargets) for (k = b.numSupportedMorphTargets = 0; k < this.maxMorphTargets; k++) y = "morphTarget" + k, x[y] >= 0 && (o.enableVertexAttribArray(x[y]), b.numSupportedMorphTargets++);
		b.uniformsList = [];
		for (h in b.uniforms) b.uniformsList.push([b.uniforms[h], h])
	};
	this.clearTarget = function (b, c, e, f) {
		Z(b);
		this.clear(c, e, f)
	};
	this.render = function (b, c, p, V) {
		var O, T, E, D, F, H, J, qa, K = b.lights,
			ja = b.fog;
		fa = -1;
		this.shadowMapEnabled && z(b, c);
		X.info.render.calls = 0;
		X.info.render.vertices = 0;
		X.info.render.faces = 0;
		c.matrixAutoUpdate && c.update(void 0, !0);
		b.update(void 0, !1, c);
		c.matrixWorldInverse.flattenToArray(Ba);
		c.projectionMatrix.flattenToArray(Ea);
		ua.multiply(c.projectionMatrix, c.matrixWorldInverse);
		u(ua);
		this.initWebGLObjects(b);
		Z(p);
		(this.autoClear || V) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
		F = b.__webglObjects.length;
		for (V = 0; V < F; V++) if (O = b.__webglObjects[V], J = O.object, J.visible) if (!(J instanceof THREE.Mesh) || !J.frustumCulled || v(J)) {
			if (J.matrixWorld.flattenToArray(J._objectMatrixArray), C(J, c, !0), w(O), O.render = !0, this.sortObjects) O.object.renderDepth ? O.z = O.object.renderDepth : (Da.copy(J.position), ua.multiplyVector3(Da), O.z = Da.z)
		}
		else O.render = !1;
		else O.render = !1;
		this.sortObjects && b.__webglObjects.sort(A);
		H = b.__webglObjectsImmediate.length;
		for (V = 0; V < H; V++) O = b.__webglObjectsImmediate[V], J = O.object, J.visible && (J.matrixAutoUpdate && J.matrixWorld.flattenToArray(J._objectMatrixArray), C(J, c, !0), x(O));
		if (b.overrideMaterial) {
			m(b.overrideMaterial.depthTest);
			G(b.overrideMaterial.blending);
			for (V = 0; V < F; V++) if (O = b.__webglObjects[V], O.render) J = O.object, qa = O.buffer, k(J), f(c, K, ja, b.overrideMaterial, qa, J);
			for (V = 0; V < H; V++) O = b.__webglObjectsImmediate[V], J = O.object, J.visible && (ma = -1, k(J), T = e(c, K, ja, b.overrideMaterial, J), J.immediateRenderCallback ? J.immediateRenderCallback(T, o, va) : J.render(function (c) {
				h(c, T, b.overrideMaterial.shading)
			}))
		}
		else {
			G(THREE.NormalBlending);
			for (V = F - 1; V >= 0; V--) if (O = b.__webglObjects[V], O.render) {
				J = O.object;
				qa = O.buffer;
				E = O.opaque;
				k(J);
				for (O = 0; O < E.count; O++) D = E.list[O], m(D.depthTest), n(D.depthWrite), t(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), f(c, K, ja, D, qa, J)
			}
			for (V = 0; V < H; V++) if (O = b.__webglObjectsImmediate[V], J = O.object, J.visible) {
				ma = -1;
				E = O.opaque;
				k(J);
				for (O = 0; O < E.count; O++) D = E.list[O], m(D.depthTest), n(D.depthWrite), t(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), T = e(c, K, ja, D, J), J.immediateRenderCallback ? J.immediateRenderCallback(T, o, va) : J.render(function (b) {
					h(b, T, D.shading)
				})
			}
			for (V = 0; V < F; V++) if (O = b.__webglObjects[V], O.render) {
				J = O.object;
				qa = O.buffer;
				E = O.transparent;
				k(J);
				for (O = 0; O < E.count; O++) D = E.list[O], G(D.blending), m(D.depthTest), n(D.depthWrite), t(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), f(c, K, ja, D, qa, J)
			}
			for (V = 0; V < H; V++) if (O = b.__webglObjectsImmediate[V], J = O.object, J.visible) {
				ma = -1;
				E = O.transparent;
				k(J);
				for (O = 0; O < E.count; O++) D = E.list[O], G(D.blending), m(D.depthTest), n(D.depthWrite), t(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), T = e(c, K, ja, D, J), J.immediateRenderCallback ? J.immediateRenderCallback(T, o, va) : J.render(function (b) {
					h(b, T, D.shading)
				})
			}
		}
		b.__webglSprites.length && y(b, c);
		p && p.minFilter !== THREE.NearestFilter && p.minFilter !== THREE.LinearFilter && L(p)
	};
	this.initWebGLObjects = function (b) {
		if (!b.__webglObjects) b.__webglObjects = [], b.__webglObjectsImmediate = [], b.__webglSprites = [];
		for (; b.__objectsAdded.length;) {
			var e = b.__objectsAdded[0],
				f = b,
				h = void 0,
				k = void 0,
				m = void 0;
			if (!e.__webglInit) if (e.__webglInit = !0, e._modelViewMatrix = new THREE.Matrix4, e._normalMatrixArray = new Float32Array(9), e._modelViewMatrixArray = new Float32Array(16), e._objectMatrixArray = new Float32Array(16), e.matrixWorld.flattenToArray(e._objectMatrixArray), e instanceof THREE.Mesh) for (h in k = e.geometry, k.geometryGroups == void 0 && M(k), k.geometryGroups) {
				if (m = k.geometryGroups[h], !m.__webglVertexBuffer) {
					var n = m;
					n.__webglVertexBuffer = o.createBuffer();
					n.__webglNormalBuffer = o.createBuffer();
					n.__webglTangentBuffer = o.createBuffer();
					n.__webglColorBuffer = o.createBuffer();
					n.__webglUVBuffer = o.createBuffer();
					n.__webglUV2Buffer = o.createBuffer();
					n.__webglSkinVertexABuffer = o.createBuffer();
					n.__webglSkinVertexBBuffer = o.createBuffer();
					n.__webglSkinIndicesBuffer = o.createBuffer();
					n.__webglSkinWeightsBuffer = o.createBuffer();
					n.__webglFaceBuffer = o.createBuffer();
					n.__webglLineBuffer = o.createBuffer();
					if (n.numMorphTargets) {
						var p = void 0,
							t = void 0;
						n.__webglMorphTargetsBuffers = [];
						p = 0;
						for (t = n.numMorphTargets; p < t; p++) n.__webglMorphTargetsBuffers.push(o.createBuffer())
					}
					X.info.memory.geometries++;
					for (var n = e, u = void 0, w = void 0, x = void 0, v = x = void 0, z = void 0, y = void 0, V = y = p = 0, O = x = w = void 0, x = t = O = w = u = void 0, v = n.geometry, z = v.faces, O = m.faces, u = 0, w = O.length; u < w; u++) x = O[u], x = z[x], x instanceof THREE.Face3 ? (p += 3, y += 1, V += 3) : x instanceof THREE.Face4 && (p += 4, y += 2, V += 4);
					for (var u = m, w = n, A = O = z = void 0, T = void 0, A = void 0, x = [], z = 0, O = w.materials.length; z < O; z++) if (A = w.materials[z], A instanceof THREE.MeshFaceMaterial) {
						A = 0;
						for (l = u.materials.length; A < l; A++)(T = u.materials[A]) && x.push(T)
					}
					else(T = A) && x.push(T);
					u = x;
					m.__materials = u;
					a: {
						z = w = void 0;
						O = u.length;
						for (w = 0; w < O; w++) if (z = u[w], z.map || z.lightMap || z instanceof THREE.ShaderMaterial) {
							w = !0;
							break a
						}
						w = !1
					}
					a: {
						O = z = void 0;
						x = u.length;
						for (z = 0; z < x; z++) if (O = u[z], !(O instanceof THREE.MeshBasicMaterial && !O.envMap || O instanceof THREE.MeshDepthMaterial)) {
							O = O && O.shading != void 0 && O.shading == THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading;
							break a
						}
						O = !1
					}
					a: {
						x = z = void 0;
						A = u.length;
						for (z = 0; z < A; z++) if (x = u[z], x.vertexColors) {
							x = x.vertexColors;
							break a
						}
						x = !1
					}
					m.__vertexArray = new Float32Array(p * 3);
					if (O) m.__normalArray = new Float32Array(p * 3);
					if (v.hasTangents) m.__tangentArray = new Float32Array(p * 4);
					if (x) m.__colorArray = new Float32Array(p * 3);
					if (w) {
						if (v.faceUvs.length > 0 || v.faceVertexUvs.length > 0) m.__uvArray = new Float32Array(p * 2);
						if (v.faceUvs.length > 1 || v.faceVertexUvs.length > 1) m.__uv2Array = new Float32Array(p * 2)
					}
					if (n.geometry.skinWeights.length && n.geometry.skinIndices.length) m.__skinVertexAArray = new Float32Array(p * 4), m.__skinVertexBArray = new Float32Array(p * 4), m.__skinIndexArray = new Float32Array(p * 4), m.__skinWeightArray = new Float32Array(p * 4);
					m.__faceArray = new Uint16Array(y * 3 + (n.geometry.edgeFaces ? n.geometry.edgeFaces.length * 6 : 0));
					m.__lineArray = new Uint16Array(V * 2);
					if (m.numMorphTargets) {
						m.__morphTargetsArrays = [];
						v = 0;
						for (z = m.numMorphTargets; v < z; v++) m.__morphTargetsArrays.push(new Float32Array(p * 3))
					}
					m.__needsSmoothNormals = O == THREE.SmoothShading;
					m.__uvType = w;
					m.__vertexColorType = x;
					m.__normalType = O;
					m.__webglFaceCount = y * 3 + (n.geometry.edgeFaces ? n.geometry.edgeFaces.length * 6 : 0);
					m.__webglLineCount = V * 2;
					v = 0;
					for (z = u.length; v < z; v++) if (w = u[v], w.attributes) {
						if (m.__webglCustomAttributes === void 0) m.__webglCustomAttributes = {};
						for (a in w.attributes) {
							x = w.attributes[a];
							O = {};
							for (t in x) O[t] = x[t];
							if (!O.__webglInitialized || O.createUniqueBuffers) O.__webglInitialized = !0, y = 1, O.type === "v2" ? y = 2 : O.type === "v3" ? y = 3 : O.type === "v4" ? y = 4 : O.type === "c" && (y = 3), O.size = y, O.array = new Float32Array(p * y), O.buffer = o.createBuffer(), O.buffer.belongsToAttribute = a, x.needsUpdate = !0, O.__original = x;
							m.__webglCustomAttributes[a] = O
						}
					}
					m.__inittedArrays = !0;
					k.__dirtyVertices = !0;
					k.__dirtyMorphTargets = !0;
					k.__dirtyElements = !0;
					k.__dirtyUvs = !0;
					k.__dirtyNormals = !0;
					k.__dirtyTangents = !0;
					k.__dirtyColors = !0
				}
			}
			else if (e instanceof THREE.Ribbon) {
				if (k = e.geometry, !k.__webglVertexBuffer) m = k, m.__webglVertexBuffer = o.createBuffer(), m.__webglColorBuffer = o.createBuffer(), X.info.memory.geometries++, m = k, n = m.vertices.length, m.__vertexArray = new Float32Array(n * 3), m.__colorArray = new Float32Array(n * 3), m.__webglVertexCount = n, k.__dirtyVertices = !0, k.__dirtyColors = !0
			}
			else if (e instanceof THREE.Line) {
				if (k = e.geometry, !k.__webglVertexBuffer) m = k, m.__webglVertexBuffer = o.createBuffer(), m.__webglColorBuffer = o.createBuffer(), X.info.memory.geometries++, m = k, n = m.vertices.length, m.__vertexArray = new Float32Array(n * 3), m.__colorArray = new Float32Array(n * 3), m.__webglLineCount = n, k.__dirtyVertices = !0, k.__dirtyColors = !0
			}
			else if (e instanceof THREE.ParticleSystem && (k = e.geometry, !k.__webglVertexBuffer)) {
				m = k;
				m.__webglVertexBuffer = o.createBuffer();
				m.__webglColorBuffer = o.createBuffer();
				X.info.geometries++;
				m = k;
				n = e;
				p = m.vertices.length;
				m.__vertexArray = new Float32Array(p * 3);
				m.__colorArray = new Float32Array(p * 3);
				m.__sortArray = [];
				m.__webglParticleCount = p;
				m.__materials = n.materials;
				V = y = t = void 0;
				t = 0;
				for (y = n.materials.length; t < y; t++) if (V = n.materials[t], V.attributes) {
					if (m.__webglCustomAttributes === void 0) m.__webglCustomAttributes = {};
					for (a in V.attributes) {
						originalAttribute = V.attributes[a];
						attribute = {};
						for (property in originalAttribute) attribute[property] = originalAttribute[property];
						if (!attribute.__webglInitialized || attribute.createUniqueBuffers) attribute.__webglInitialized = !0, size = 1, attribute.type === "v2" ? size = 2 : attribute.type === "v3" ? size = 3 : attribute.type === "v4" ? size = 4 : attribute.type === "c" && (size = 3), attribute.size = size, attribute.array = new Float32Array(p * size), attribute.buffer = o.createBuffer(), attribute.buffer.belongsToAttribute = a, originalAttribute.needsUpdate = !0, attribute.__original = originalAttribute;
						m.__webglCustomAttributes[a] = attribute
					}
				}
				k.__dirtyVertices = !0;
				k.__dirtyColors = !0
			}
			if (!e.__webglActive) {
				if (e instanceof THREE.Mesh) for (h in k = e.geometry, k.geometryGroups) m = k.geometryGroups[h], N(f.__webglObjects, m, e);
				else e instanceof THREE.Ribbon || e instanceof THREE.Line || e instanceof THREE.ParticleSystem ? (k = e.geometry, N(f.__webglObjects, k, e)) : THREE.MarchingCubes !== void 0 && e instanceof THREE.MarchingCubes || e.immediateRenderCallback ? f.__webglObjectsImmediate.push({
					object: e,
					opaque: {
						list: [],
						count: 0
					},
					transparent: {
						list: [],
						count: 0
					}
				}) : e instanceof THREE.Sprite && f.__webglSprites.push(e);
				e.__webglActive = !0
			}
			b.__objectsAdded.splice(0, 1)
		}
		for (; b.__objectsRemoved.length;) {
			e = b.__objectsRemoved[0];
			f = b;
			if (e instanceof THREE.Mesh || e instanceof THREE.ParticleSystem || e instanceof THREE.Ribbon || e instanceof THREE.Line) F(f.__webglObjects, e);
			else if (e instanceof THREE.Sprite) {
				f = f.__webglSprites;
				h = e;
				k = void 0;
				for (k = f.length - 1; k >= 0; k--) f[k] == h && f.splice(k, 1)
			}
			else(e instanceof THREE.MarchingCubes || e.immediateRenderCallback) && F(f.__webglObjectsImmediate, e);
			e.__webglActive = !1;
			b.__objectsRemoved.splice(0, 1)
		}
		e = 0;
		for (f = b.__webglObjects.length; e < f; e++) if (k = b.__webglObjects[e].object, t = m = h = void 0, k instanceof THREE.Mesh) {
			h = k.geometry;
			n = 0;
			for (p = h.geometryGroupsList.length; n < p; n++) if (m = h.geometryGroupsList[n], t = E(m), h.__dirtyVertices || h.__dirtyMorphTargets || h.__dirtyElements || h.__dirtyUvs || h.__dirtyNormals || h.__dirtyColors || h.__dirtyTangents || t) if (t = m, y = o.DYNAMIC_DRAW, V = !h.dynamic, t.__inittedArrays) {
				var C = u = v = void 0,
					J = void 0,
					H = C = void 0,
					qa = void 0,
					K = void 0,
					ja = void 0,
					ia = T = A = x = O = z = w = void 0,
					G = void 0,
					L = void 0,
					I = J = ja = J = K = qa = void 0,
					B = void 0,
					Q = B = I = qa = void 0,
					U = void 0,
					aa = Q = B = I = C = C = H = ja = J = Q = B = I = U = Q = B = I = U = Q = B = I = void 0,
					P = 0,
					na = 0,
					ca = 0,
					Z = 0,
					ra = 0,
					Y = 0,
					R = 0,
					ya = 0,
					W = 0,
					S = 0,
					oa = 0,
					Q = I = 0,
					Q = void 0,
					ha = t.__vertexArray,
					wa = t.__uvArray,
					va = t.__uv2Array,
					ma = t.__normalArray,
					ea = t.__tangentArray,
					fa = t.__colorArray,
					ka = t.__skinVertexAArray,
					$ = t.__skinVertexBArray,
					da = t.__skinIndexArray,
					ga = t.__skinWeightArray,
					pa = t.__morphTargetsArrays,
					la = t.__webglCustomAttributes,
					B = void 0,
					za = t.__faceArray,
					sa = t.__lineArray,
					Ia = t.__needsSmoothNormals,
					z = t.__vertexColorType,
					w = t.__uvType,
					O = t.__normalType,
					ua = k.geometry,
					Ea = ua.__dirtyVertices,
					Ca = ua.__dirtyElements,
					Ba = ua.__dirtyUvs,
					Ka = ua.__dirtyNormals,
					Ga = ua.__dirtyTangents,
					Da = ua.__dirtyColors,
					Fa = ua.__dirtyMorphTargets,
					Ja = ua.vertices,
					cb = t.faces,
					fb = ua.faces,
					db = ua.faceVertexUvs[0],
					eb = ua.faceVertexUvs[1],
					Sa = ua.skinVerticesA,
					Ta = ua.skinVerticesB,
					Ua = ua.skinIndices,
					Ma = ua.skinWeights,
					La = ua.morphTargets;
				if (la) for (aa in la) la[aa].offset = 0, la[aa].offsetSrc = 0;
				v = 0;
				for (u = cb.length; v < u; v++) if (C = cb[v], J = fb[C], db && (x = db[C]), eb && (A = eb[C]), C = J.vertexNormals, H = J.normal, qa = J.vertexColors, K = J.color, ja = J.vertexTangents, J instanceof THREE.Face3) {
					if (Ea) T = Ja[J.a].position, ia = Ja[J.b].position, G = Ja[J.c].position, ha[na] = T.x, ha[na + 1] = T.y, ha[na + 2] = T.z, ha[na + 3] = ia.x, ha[na + 4] = ia.y, ha[na + 5] = ia.z, ha[na + 6] = G.x, ha[na + 7] = G.y, ha[na + 8] = G.z, na += 9;
					if (la) for (aa in la) if (B = la[aa], B.__original.needsUpdate) I = B.offset, Q = B.offsetSrc, B.size === 1 ? (B.boundTo === void 0 || B.boundTo === "vertices" ? (B.array[I] = B.value[J.a], B.array[I + 1] = B.value[J.b], B.array[I + 2] = B.value[J.c]) : B.boundTo === "faces" ? (Q = B.value[Q], B.array[I] = Q, B.array[I + 1] = Q, B.array[I + 2] = Q, B.offsetSrc++) : B.boundTo === "faceVertices" && (B.array[I] = B.value[Q], B.array[I + 1] = B.value[Q + 1], B.array[I + 2] = B.value[Q + 2], B.offsetSrc += 3), B.offset += 3) : (B.boundTo === void 0 || B.boundTo === "vertices" ? (T = B.value[J.a], ia = B.value[J.b], G = B.value[J.c]) : B.boundTo === "faces" ? (G = ia = T = Q = B.value[Q], B.offsetSrc++) : B.boundTo === "faceVertices" && (T = B.value[Q], ia = B.value[Q + 1], G = B.value[Q + 2], B.offsetSrc += 3), B.size === 2 ? (B.array[I] = T.x, B.array[I + 1] = T.y, B.array[I + 2] = ia.x, B.array[I + 3] = ia.y, B.array[I + 4] = G.x, B.array[I + 5] = G.y, B.offset += 6) : B.size === 3 ? (B.type === "c" ? (B.array[I] = T.r, B.array[I + 1] = T.g, B.array[I + 2] = T.b, B.array[I + 3] = ia.r, B.array[I + 4] = ia.g, B.array[I + 5] = ia.b, B.array[I + 6] = G.r, B.array[I + 7] = G.g, B.array[I + 8] = G.b) : (B.array[I] = T.x, B.array[I + 1] = T.y, B.array[I + 2] = T.z, B.array[I + 3] = ia.x, B.array[I + 4] = ia.y, B.array[I + 5] = ia.z, B.array[I + 6] = G.x, B.array[I + 7] = G.y, B.array[I + 8] = G.z), B.offset += 9) : (B.array[I] = T.x, B.array[I + 1] = T.y, B.array[I + 2] = T.z, B.array[I + 3] = T.w, B.array[I + 4] = ia.x, B.array[I + 5] = ia.y, B.array[I + 6] = ia.z, B.array[I + 7] = ia.w, B.array[I + 8] = G.x, B.array[I + 9] = G.y, B.array[I + 10] = G.z, B.array[I + 11] = G.w, B.offset += 12));
					if (Fa) {
						I = 0;
						for (B = La.length; I < B; I++) T = La[I].vertices[J.a].position, ia = La[I].vertices[J.b].position, G = La[I].vertices[J.c].position, Q = pa[I], Q[oa] = T.x, Q[oa + 1] = T.y, Q[oa + 2] = T.z, Q[oa + 3] = ia.x, Q[oa + 4] = ia.y, Q[oa + 5] = ia.z, Q[oa + 6] = G.x, Q[oa + 7] = G.y, Q[oa + 8] = G.z;
						oa += 9
					}
					if (Ma.length) I = Ma[J.a], B = Ma[J.b], Q = Ma[J.c], ga[S] = I.x, ga[S + 1] = I.y, ga[S + 2] = I.z, ga[S + 3] = I.w, ga[S + 4] = B.x, ga[S + 5] = B.y, ga[S + 6] = B.z, ga[S + 7] = B.w, ga[S + 8] = Q.x, ga[S + 9] = Q.y, ga[S + 10] = Q.z, ga[S + 11] = Q.w, I = Ua[J.a], B = Ua[J.b], Q = Ua[J.c], da[S] = I.x, da[S + 1] = I.y, da[S + 2] = I.z, da[S + 3] = I.w, da[S + 4] = B.x, da[S + 5] = B.y, da[S + 6] = B.z, da[S + 7] = B.w, da[S + 8] = Q.x, da[S + 9] = Q.y, da[S + 10] = Q.z, da[S + 11] = Q.w, I = Sa[J.a], B = Sa[J.b], Q = Sa[J.c], ka[S] = I.x, ka[S + 1] = I.y, ka[S + 2] = I.z, ka[S + 3] = 1, ka[S + 4] = B.x, ka[S + 5] = B.y, ka[S + 6] = B.z, ka[S + 7] = 1, ka[S + 8] = Q.x, ka[S + 9] = Q.y, ka[S + 10] = Q.z, ka[S + 11] = 1, I = Ta[J.a], B = Ta[J.b], Q = Ta[J.c], $[S] = I.x, $[S + 1] = I.y, $[S + 2] = I.z, $[S + 3] = 1, $[S + 4] = B.x, $[S + 5] = B.y, $[S + 6] = B.z, $[S + 7] = 1, $[S + 8] = Q.x, $[S + 9] = Q.y, $[S + 10] = Q.z, $[S + 11] = 1, S += 12;
					if (Da && z) qa.length == 3 && z == THREE.VertexColors ? (J = qa[0], I = qa[1], B = qa[2]) : B = I = J = K, fa[W] = J.r, fa[W + 1] = J.g, fa[W + 2] = J.b, fa[W + 3] = I.r, fa[W + 4] = I.g, fa[W + 5] = I.b, fa[W + 6] = B.r, fa[W + 7] = B.g, fa[W + 8] = B.b, W += 9;
					if (Ga && ua.hasTangents) qa = ja[0], K = ja[1], J = ja[2], ea[R] = qa.x, ea[R + 1] = qa.y, ea[R + 2] = qa.z, ea[R + 3] = qa.w, ea[R + 4] = K.x, ea[R + 5] = K.y, ea[R + 6] = K.z, ea[R + 7] = K.w, ea[R + 8] = J.x, ea[R + 9] = J.y, ea[R + 10] = J.z, ea[R + 11] = J.w, R += 12;
					if (Ka && O) if (C.length == 3 && Ia) for (ja = 0; ja < 3; ja++) H = C[ja], ma[Y] = H.x, ma[Y + 1] = H.y, ma[Y + 2] = H.z, Y += 3;
					else for (ja = 0; ja < 3; ja++) ma[Y] = H.x, ma[Y + 1] = H.y, ma[Y + 2] = H.z, Y += 3;
					if (Ba && x !== void 0 && w) for (ja = 0; ja < 3; ja++) C = x[ja], wa[ca] = C.u, wa[ca + 1] = C.v, ca += 2;
					if (Ba && A !== void 0 && w) for (ja = 0; ja < 3; ja++) C = A[ja], va[Z] = C.u, va[Z + 1] = C.v, Z += 2;
					Ca && (za[ra] = P, za[ra + 1] = P + 1, za[ra + 2] = P + 2, ra += 3, sa[ya] = P, sa[ya + 1] = P + 1, sa[ya + 2] = P, sa[ya + 3] = P + 2, sa[ya + 4] = P + 1, sa[ya + 5] = P + 2, ya += 6, P += 3)
				}
				else if (J instanceof THREE.Face4) {
					if (Ea) T = Ja[J.a].position, ia = Ja[J.b].position, G = Ja[J.c].position, L = Ja[J.d].position, ha[na] = T.x, ha[na + 1] = T.y, ha[na + 2] = T.z, ha[na + 3] = ia.x, ha[na + 4] = ia.y, ha[na + 5] = ia.z, ha[na + 6] = G.x, ha[na + 7] = G.y, ha[na + 8] = G.z, ha[na + 9] = L.x, ha[na + 10] = L.y, ha[na + 11] = L.z, na += 12;
					if (la) for (aa in la) if (B = la[aa], B.__original.needsUpdate) I = B.offset, Q = B.offsetSrc, B.size === 1 ? (B.boundTo === void 0 || B.boundTo === "vertices" ? (B.array[I] = B.value[J.a], B.array[I + 1] = B.value[J.b], B.array[I + 2] = B.value[J.c], B.array[I + 3] = B.value[J.d]) : B.boundTo === "faces" ? (Q = B.value[Q], B.array[I] = Q, B.array[I + 1] = Q, B.array[I + 2] = Q, B.array[I + 3] = Q, B.offsetSrc++) : B.boundTo === "faceVertices" && (B.array[I] = B.value[Q], B.array[I + 1] = B.value[Q + 1], B.array[I + 2] = B.value[Q + 2], B.array[I + 3] = B.value[Q + 3], B.offsetSrc += 4), B.offset += 4) : (B.boundTo === void 0 || B.boundTo === "vertices" ? (T = B.value[J.a], ia = B.value[J.b], G = B.value[J.c], L = B.value[J.d]) : B.boundTo === "faces" ? (L = G = ia = T = Q = B.value[Q], B.offsetSrc++) : B.boundTo === "faceVertices" && (T = B.value[Q], ia = B.value[Q + 1], G = B.value[Q + 2], L = B.value[Q + 3], B.offsetSrc += 4), B.size === 2 ? (B.array[I] = T.x, B.array[I + 1] = T.y, B.array[I + 2] = ia.x, B.array[I + 3] = ia.y, B.array[I + 4] = G.x, B.array[I + 5] = G.y, B.array[I + 6] = L.x, B.array[I + 7] = L.y, B.offset += 8) : B.size === 3 ? (B.type === "c" ? (B.array[I] = T.r, B.array[I + 1] = T.g, B.array[I + 2] = T.b, B.array[I + 3] = ia.r, B.array[I + 4] = ia.g, B.array[I + 5] = ia.b, B.array[I + 6] = G.r, B.array[I + 7] = G.g, B.array[I + 8] = G.b, B.array[I + 9] = L.r, B.array[I + 10] = L.g, B.array[I + 11] = L.b) : (B.array[I] = T.x, B.array[I + 1] = T.y, B.array[I + 2] = T.z, B.array[I + 3] = ia.x, B.array[I + 4] = ia.y, B.array[I + 5] = ia.z, B.array[I + 6] = G.x, B.array[I + 7] = G.y, B.array[I + 8] = G.z, B.array[I + 9] = L.x, B.array[I + 10] = L.y, B.array[I + 11] = L.z), B.offset += 12) : (B.array[I] = T.x, B.array[I + 1] = T.y, B.array[I + 2] = T.z, B.array[I + 3] = T.w, B.array[I + 4] = ia.x, B.array[I + 5] = ia.y, B.array[I + 6] = ia.z, B.array[I + 7] = ia.w, B.array[I + 8] = G.x, B.array[I + 9] = G.y, B.array[I + 10] = G.z, B.array[I + 11] = G.w, B.array[I + 12] = L.x, B.array[I + 13] = L.y, B.array[I + 14] = L.z, B.array[I + 15] = L.w, B.offset += 16));
					if (Fa) {
						I = 0;
						for (B = La.length; I < B; I++) T = La[I].vertices[J.a].position, ia = La[I].vertices[J.b].position, G = La[I].vertices[J.c].position, L = La[I].vertices[J.d].position, Q = pa[I], Q[oa] = T.x, Q[oa + 1] = T.y, Q[oa + 2] = T.z, Q[oa + 3] = ia.x, Q[oa + 4] = ia.y, Q[oa + 5] = ia.z, Q[oa + 6] = G.x, Q[oa + 7] = G.y, Q[oa + 8] = G.z, Q[oa + 9] = L.x, Q[oa + 10] = L.y, Q[oa + 11] = L.z;
						oa += 12
					}
					if (Ma.length) I = Ma[J.a], B = Ma[J.b], Q = Ma[J.c], U = Ma[J.d], ga[S] = I.x, ga[S + 1] = I.y, ga[S + 2] = I.z, ga[S + 3] = I.w, ga[S + 4] = B.x, ga[S + 5] = B.y, ga[S + 6] = B.z, ga[S + 7] = B.w, ga[S + 8] = Q.x, ga[S + 9] = Q.y, ga[S + 10] = Q.z, ga[S + 11] = Q.w, ga[S + 12] = U.x, ga[S + 13] = U.y, ga[S + 14] = U.z, ga[S + 15] = U.w, I = Ua[J.a], B = Ua[J.b], Q = Ua[J.c], U = Ua[J.d], da[S] = I.x, da[S + 1] = I.y, da[S + 2] = I.z, da[S + 3] = I.w, da[S + 4] = B.x, da[S + 5] = B.y, da[S + 6] = B.z, da[S + 7] = B.w, da[S + 8] = Q.x, da[S + 9] = Q.y, da[S + 10] = Q.z, da[S + 11] = Q.w, da[S + 12] = U.x, da[S + 13] = U.y, da[S + 14] = U.z, da[S + 15] = U.w, I = Sa[J.a], B = Sa[J.b], Q = Sa[J.c], U = Sa[J.d], ka[S] = I.x, ka[S + 1] = I.y, ka[S + 2] = I.z, ka[S + 3] = 1, ka[S + 4] = B.x, ka[S + 5] = B.y, ka[S + 6] = B.z, ka[S + 7] = 1, ka[S + 8] = Q.x, ka[S + 9] = Q.y, ka[S + 10] = Q.z, ka[S + 11] = 1, ka[S + 12] = U.x, ka[S + 13] = U.y, ka[S + 14] = U.z, ka[S + 15] = 1, I = Ta[J.a], B = Ta[J.b], Q = Ta[J.c], J = Ta[J.d], $[S] = I.x, $[S + 1] = I.y, $[S + 2] = I.z, $[S + 3] = 1, $[S + 4] = B.x, $[S + 5] = B.y, $[S + 6] = B.z, $[S + 7] = 1, $[S + 8] = Q.x, $[S + 9] = Q.y, $[S + 10] = Q.z, $[S + 11] = 1, $[S + 12] = J.x, $[S + 13] = J.y, $[S + 14] = J.z, $[S + 15] = 1, S += 16;
					if (Da && z) qa.length == 4 && z == THREE.VertexColors ? (J = qa[0], I = qa[1], B = qa[2], qa = qa[3]) : qa = B = I = J = K, fa[W] = J.r, fa[W + 1] = J.g, fa[W + 2] = J.b, fa[W + 3] = I.r, fa[W + 4] = I.g, fa[W + 5] = I.b, fa[W + 6] = B.r, fa[W + 7] = B.g, fa[W + 8] = B.b, fa[W + 9] = qa.r, fa[W + 10] = qa.g, fa[W + 11] = qa.b, W += 12;
					if (Ga && ua.hasTangents) qa = ja[0], K = ja[1], J = ja[2], ja = ja[3], ea[R] = qa.x, ea[R + 1] = qa.y, ea[R + 2] = qa.z, ea[R + 3] = qa.w, ea[R + 4] = K.x, ea[R + 5] = K.y, ea[R + 6] = K.z, ea[R + 7] = K.w, ea[R + 8] = J.x, ea[R + 9] = J.y, ea[R + 10] = J.z, ea[R + 11] = J.w, ea[R + 12] = ja.x, ea[R + 13] = ja.y, ea[R + 14] = ja.z, ea[R + 15] = ja.w, R += 16;
					if (Ka && O) if (C.length == 4 && Ia) for (ja = 0; ja < 4; ja++) H = C[ja], ma[Y] = H.x, ma[Y + 1] = H.y, ma[Y + 2] = H.z, Y += 3;
					else for (ja = 0; ja < 4; ja++) ma[Y] = H.x, ma[Y + 1] = H.y, ma[Y + 2] = H.z, Y += 3;
					if (Ba && x !== void 0 && w) for (ja = 0; ja < 4; ja++) C = x[ja], wa[ca] = C.u, wa[ca + 1] = C.v, ca += 2;
					if (Ba && A !== void 0 && w) for (ja = 0; ja < 4; ja++) C = A[ja], va[Z] = C.u, va[Z + 1] = C.v, Z += 2;
					Ca && (za[ra] = P, za[ra + 1] = P + 1, za[ra + 2] = P + 3, za[ra + 3] = P + 1, za[ra + 4] = P + 2, za[ra + 5] = P + 3, ra += 6, sa[ya] = P, sa[ya + 1] = P + 1, sa[ya + 2] = P, sa[ya + 3] = P + 3, sa[ya + 4] = P + 1, sa[ya + 5] = P + 2, sa[ya + 6] = P + 2, sa[ya + 7] = P + 3, ya += 8, P += 4)
				}
				Ea && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglVertexBuffer), o.bufferData(o.ARRAY_BUFFER, ha, y));
				if (la) for (aa in la) B = la[aa], B.__original.needsUpdate && (o.bindBuffer(o.ARRAY_BUFFER, B.buffer), o.bufferData(o.ARRAY_BUFFER, B.array, y));
				if (Fa) {
					I = 0;
					for (B = La.length; I < B; I++) o.bindBuffer(o.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[I]), o.bufferData(o.ARRAY_BUFFER, pa[I], y)
				}
				Da && W > 0 && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglColorBuffer), o.bufferData(o.ARRAY_BUFFER, fa, y));
				Ka && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglNormalBuffer), o.bufferData(o.ARRAY_BUFFER, ma, y));
				Ga && ua.hasTangents && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglTangentBuffer), o.bufferData(o.ARRAY_BUFFER, ea, y));
				Ba && ca > 0 && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglUVBuffer), o.bufferData(o.ARRAY_BUFFER, wa, y));
				Ba && Z > 0 && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglUV2Buffer), o.bufferData(o.ARRAY_BUFFER, va, y));
				Ca && (o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, t.__webglFaceBuffer), o.bufferData(o.ELEMENT_ARRAY_BUFFER, za, y), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, t.__webglLineBuffer), o.bufferData(o.ELEMENT_ARRAY_BUFFER, sa, y));
				S > 0 && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglSkinVertexABuffer), o.bufferData(o.ARRAY_BUFFER, ka, y), o.bindBuffer(o.ARRAY_BUFFER, t.__webglSkinVertexBBuffer), o.bufferData(o.ARRAY_BUFFER, $, y), o.bindBuffer(o.ARRAY_BUFFER, t.__webglSkinIndicesBuffer), o.bufferData(o.ARRAY_BUFFER, da, y), o.bindBuffer(o.ARRAY_BUFFER, t.__webglSkinWeightsBuffer), o.bufferData(o.ARRAY_BUFFER, ga, y));
				V && (delete t.__inittedArrays, delete t.__colorArray, delete t.__normalArray, delete t.__tangentArray, delete t.__uvArray, delete t.__uv2Array, delete t.__faceArray, delete t.__vertexArray, delete t.__lineArray, delete t.__skinVertexAArray, delete t.__skinVertexBArray, delete t.__skinIndexArray, delete t.__skinWeightArray)
			}
			h.__dirtyVertices = !1;
			h.__dirtyMorphTargets = !1;
			h.__dirtyElements = !1;
			h.__dirtyUvs = !1;
			h.__dirtyNormals = !1;
			h.__dirtyTangents = !1;
			h.__dirtyColors = !1;
			D(m)
		}
		else if (k instanceof THREE.Ribbon) {
			h = k.geometry;
			if (h.__dirtyVertices || h.__dirtyColors) {
				k = h;
				m = o.DYNAMIC_DRAW;
				n = v = V = V = void 0;
				u = k.vertices;
				p = k.colors;
				w = u.length;
				t = p.length;
				z = k.__vertexArray;
				y = k.__colorArray;
				O = k.__dirtyColors;
				if (k.__dirtyVertices) {
					for (V = 0; V < w; V++) v = u[V].position, n = V * 3, z[n] = v.x, z[n + 1] = v.y, z[n + 2] = v.z;
					o.bindBuffer(o.ARRAY_BUFFER, k.__webglVertexBuffer);
					o.bufferData(o.ARRAY_BUFFER, z, m)
				}
				if (O) {
					for (V = 0; V < t; V++) color = p[V], n = V * 3, y[n] = color.r, y[n + 1] = color.g, y[n + 2] = color.b;
					o.bindBuffer(o.ARRAY_BUFFER, k.__webglColorBuffer);
					o.bufferData(o.ARRAY_BUFFER, y, m)
				}
			}
			h.__dirtyVertices = !1;
			h.__dirtyColors = !1
		}
		else if (k instanceof THREE.Line) {
			h = k.geometry;
			if (h.__dirtyVertices || h.__dirtyColors) {
				k = h;
				m = o.DYNAMIC_DRAW;
				n = v = V = V = void 0;
				u = k.vertices;
				p = k.colors;
				w = u.length;
				t = p.length;
				z = k.__vertexArray;
				y = k.__colorArray;
				O = k.__dirtyColors;
				if (k.__dirtyVertices) {
					for (V = 0; V < w; V++) v = u[V].position, n = V * 3, z[n] = v.x, z[n + 1] = v.y, z[n + 2] = v.z;
					o.bindBuffer(o.ARRAY_BUFFER, k.__webglVertexBuffer);
					o.bufferData(o.ARRAY_BUFFER, z, m)
				}
				if (O) {
					for (V = 0; V < t; V++) color = p[V], n = V * 3, y[n] = color.r, y[n + 1] = color.g, y[n + 2] = color.b;
					o.bindBuffer(o.ARRAY_BUFFER, k.__webglColorBuffer);
					o.bufferData(o.ARRAY_BUFFER, y, m)
				}
			}
			h.__dirtyVertices = !1;
			h.__dirtyColors = !1
		}
		else if (k instanceof THREE.ParticleSystem) h = k.geometry, t = E(h), (h.__dirtyVertices || h.__dirtyColors || k.sortParticles || t) && c(h, o.DYNAMIC_DRAW, k), h.__dirtyVertices = !1, h.__dirtyColors = !1, D(h)
	};
	this.setFaceCulling = function (b, e) {
		b ? (!e || e == "ccw" ? o.frontFace(o.CCW) : o.frontFace(o.CW), b == "back" ? o.cullFace(o.BACK) : b == "front" ? o.cullFace(o.FRONT) : o.cullFace(o.FRONT_AND_BACK), o.enable(o.CULL_FACE)) : o.disable(o.CULL_FACE)
	};
	this.supportsVertexTextures = function () {
		return Ga
	}
};
THREE.WebGLRenderTarget = function (b, c, e) {
	this.width = b;
	this.height = c;
	e = e || {};
	this.wrapS = e.wrapS !== void 0 ? e.wrapS : THREE.ClampToEdgeWrapping;
	this.wrapT = e.wrapT !== void 0 ? e.wrapT : THREE.ClampToEdgeWrapping;
	this.magFilter = e.magFilter !== void 0 ? e.magFilter : THREE.LinearFilter;
	this.minFilter = e.minFilter !== void 0 ? e.minFilter : THREE.LinearMipMapLinearFilter;
	this.offset = new THREE.Vector2(0, 0);
	this.repeat = new THREE.Vector2(1, 1);
	this.format = e.format !== void 0 ? e.format : THREE.RGBAFormat;
	this.type = e.type !== void 0 ? e.type : THREE.UnsignedByteType;
	this.depthBuffer = e.depthBuffer !== void 0 ? e.depthBuffer : !0;
	this.stencilBuffer = e.stencilBuffer !== void 0 ? e.stencilBuffer : !0
};
THREE.WebGLRenderTarget.prototype.clone = function () {
	var b = new THREE.WebGLRenderTarget(this.width, this.height);
	b.wrapS = this.wrapS;
	b.wrapT = this.wrapT;
	b.magFilter = this.magFilter;
	b.minFilter = this.minFilter;
	b.offset.copy(this.offset);
	b.repeat.copy(this.repeat);
	b.format = this.format;
	b.type = this.type;
	b.depthBuffer = this.depthBuffer;
	b.stencilBuffer = this.stencilBuffer;
	return b
};
THREE.WebGLRenderTargetCube = function (b, c, e) {
	THREE.WebGLRenderTarget.call(this, b, c, e);
	this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = new THREE.WebGLRenderTarget;
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube;
THREE.RenderableVertex = function () {
	this.positionWorld = new THREE.Vector3;
	this.positionScreen = new THREE.Vector4;
	this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function (b) {
	this.positionWorld.copy(b.positionWorld);
	this.positionScreen.copy(b.positionScreen)
};
THREE.RenderableFace3 = function () {
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.v3 = new THREE.RenderableVertex;
	this.centroidWorld = new THREE.Vector3;
	this.centroidScreen = new THREE.Vector3;
	this.normalWorld = new THREE.Vector3;
	this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
	this.faceMaterials = this.meshMaterials = null;
	this.overdraw = !1;
	this.uvs = [[]];
	this.z = null
};
THREE.RenderableFace4 = function () {
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.v3 = new THREE.RenderableVertex;
	this.v4 = new THREE.RenderableVertex;
	this.centroidWorld = new THREE.Vector3;
	this.centroidScreen = new THREE.Vector3;
	this.normalWorld = new THREE.Vector3;
	this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
	this.faceMaterials = this.meshMaterials = null;
	this.overdraw = !1;
	this.uvs = [[]];
	this.z = null
};
THREE.RenderableObject = function () {
	this.z = this.object = null
};
THREE.RenderableParticle = function () {
	this.rotation = this.z = this.y = this.x = null;
	this.scale = new THREE.Vector2;
	this.materials = null
};
THREE.RenderableLine = function () {
	this.z = null;
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.materials = null
};
THREE.ColorUtils = {
	adjustHSV: function (b, c, e, f) {
		var h = THREE.ColorUtils.__hsv;
		THREE.ColorUtils.rgbToHsv(b, h);
		h.h = THREE.ColorUtils.clamp(h.h + c, 0, 1);
		h.s = THREE.ColorUtils.clamp(h.s + e, 0, 1);
		h.v = THREE.ColorUtils.clamp(h.v + f, 0, 1);
		b.setHSV(h.h, h.s, h.v)
	},
	rgbToHsv: function (b, c) {
		var e = b.r,
			f = b.g,
			h = b.b,
			k = Math.max(Math.max(e, f), h),
			m = Math.min(Math.min(e, f), h);
		if (m == k) m = e = 0;
		else {
			var n = k - m,
				m = n / k,
				e = e == k ? (f - h) / n : f == k ? 2 + (h - e) / n : 4 + (e - f) / n;
			e /= 6;
			e < 0 && (e += 1);
			e > 1 && (e -= 1)
		}
		c === void 0 && (c = {
			h: 0,
			s: 0,
			v: 0
		});
		c.h = e;
		c.s = m;
		c.v = k;
		return c
	},
	clamp: function (b, c, e) {
		return b < c ? c : b > e ? e : b
	}
};
THREE.ColorUtils.__hsv = {
	h: 0,
	s: 0,
	v: 0
};
THREE.GeometryUtils = {
	merge: function (b, c) {
		var e, f, h = b.vertices.length,
			k = c instanceof THREE.Mesh ? c.geometry : c,
			m = b.vertices,
			n = k.vertices,
			t = b.faces,
			u = k.faces,
			v = b.faceVertexUvs[0],
			k = k.faceVertexUvs[0];
		if (c instanceof THREE.Mesh) c.matrixAutoUpdate && c.updateMatrix(), e = c.matrix, f = new THREE.Matrix4, f.extractRotation(e, c.scale);
		for (var p = 0, x = n.length; p < x; p++) {
			var w = new THREE.Vertex(n[p].position.clone());
			e && e.multiplyVector3(w.position);
			m.push(w)
		}
		p = 0;
		for (x = u.length; p < x; p++) {
			var w = u[p],
				A, z, y = w.vertexNormals,
				C = w.vertexColors;
			w instanceof THREE.Face3 ? A = new THREE.Face3(w.a + h, w.b + h, w.c + h) : w instanceof THREE.Face4 && (A = new THREE.Face4(w.a + h, w.b + h, w.c + h, w.d + h));
			A.normal.copy(w.normal);
			f && f.multiplyVector3(A.normal);
			m = 0;
			for (n = y.length; m < n; m++) z = y[m].clone(), f && f.multiplyVector3(z), A.vertexNormals.push(z);
			A.color.copy(w.color);
			m = 0;
			for (n = C.length; m < n; m++) z = C[m], A.vertexColors.push(z.clone());
			A.materials = w.materials.slice();
			A.centroid.copy(w.centroid);
			e && e.multiplyVector3(A.centroid);
			t.push(A)
		}
		p = 0;
		for (x = k.length; p < x; p++) {
			e = k[p];
			f = [];
			m = 0;
			for (n = e.length; m < n; m++) f.push(new THREE.UV(e[m].u, e[m].v));
			v.push(f)
		}
	},
	clone: function (b) {
		var c = new THREE.Geometry,
			e, f = b.vertices,
			h = b.faces,
			k = b.faceVertexUvs[0],
			b = 0;
		for (e = f.length; b < e; b++) {
			var m = new THREE.Vertex(f[b].position.clone());
			c.vertices.push(m)
		}
		b = 0;
		for (e = h.length; b < e; b++) {
			var n = h[b],
				t, u, v = n.vertexNormals,
				p = n.vertexColors;
			n instanceof THREE.Face3 ? t = new THREE.Face3(n.a, n.b, n.c) : n instanceof THREE.Face4 && (t = new THREE.Face4(n.a, n.b, n.c, n.d));
			t.normal.copy(n.normal);
			f = 0;
			for (m = v.length; f < m; f++) u = v[f], t.vertexNormals.push(u.clone());
			t.color.copy(n.color);
			f = 0;
			for (m = p.length; f < m; f++) u = p[f], t.vertexColors.push(u.clone());
			t.materials = n.materials.slice();
			t.centroid.copy(n.centroid);
			c.faces.push(t)
		}
		b = 0;
		for (e = k.length; b < e; b++) {
			h = k[b];
			t = [];
			f = 0;
			for (m = h.length; f < m; f++) t.push(new THREE.UV(h[f].u, h[f].v));
			c.faceVertexUvs[0].push(t)
		}
		return c
	},
	randomPointInTriangle: function (b, c, e) {
		var f, h, k, m = new THREE.Vector3,
			n = THREE.GeometryUtils.__v1;
		f = THREE.GeometryUtils.random();
		h = THREE.GeometryUtils.random();
		f + h > 1 && (f = 1 - f, h = 1 - h);
		k = 1 - f - h;
		m.copy(b);
		m.multiplyScalar(f);
		n.copy(c);
		n.multiplyScalar(h);
		m.addSelf(n);
		n.copy(e);
		n.multiplyScalar(k);
		m.addSelf(n);
		return m
	},
	randomPointInFace: function (b, c, e) {
		var f, h, k;
		if (b instanceof THREE.Face3) return f = c.vertices[b.a].position, h = c.vertices[b.b].position, k = c.vertices[b.c].position, THREE.GeometryUtils.randomPointInTriangle(f, h, k);
		else if (b instanceof THREE.Face4) {
			f = c.vertices[b.a].position;
			h = c.vertices[b.b].position;
			k = c.vertices[b.c].position;
			var c = c.vertices[b.d].position,
				m;
			e ? b._area1 && b._area2 ? (e = b._area1, m = b._area2) : (e = THREE.GeometryUtils.triangleArea(f, h, c), m = THREE.GeometryUtils.triangleArea(h, k, c), b._area1 = e, b._area2 = m) : (e = THREE.GeometryUtils.triangleArea(f, h, c), m = THREE.GeometryUtils.triangleArea(h, k, c));
			return THREE.GeometryUtils.random() * (e + m) < e ? THREE.GeometryUtils.randomPointInTriangle(f, h, c) : THREE.GeometryUtils.randomPointInTriangle(h, k, c)
		}
	},
	randomPointsInGeometry: function (b, c) {
		function e(b) {
			function e(c, f) {
				if (f < c) return c;
				var h = c + Math.floor((f - c) / 2);
				return u[h] > b ? e(c, h - 1) : u[h] < b ? e(h + 1, f) : h
			}
			return e(0, u.length - 1)
		}
		var f, h, k = b.faces,
			m = b.vertices,
			n = k.length,
			t = 0,
			u = [],
			v, p, x, w;
		for (h = 0; h < n; h++) {
			f = k[h];
			if (f instanceof THREE.Face3) v = m[f.a].position, p = m[f.b].position, x = m[f.c].position, f._area = THREE.GeometryUtils.triangleArea(v, p, x);
			else if (f instanceof THREE.Face4) v = m[f.a].position, p = m[f.b].position, x = m[f.c].position, w = m[f.d].position, f._area1 = THREE.GeometryUtils.triangleArea(v, p, w), f._area2 = THREE.GeometryUtils.triangleArea(p, x, w), f._area = f._area1 + f._area2;
			t += f._area;
			u[h] = t
		}
		f = [];
		m = {};
		for (h = 0; h < c; h++) n = THREE.GeometryUtils.random() * t, n = e(n), f[h] = THREE.GeometryUtils.randomPointInFace(k[n], b, !0), m[n] ? m[n] += 1 : m[n] = 1;
		return f
	},
	triangleArea: function (b, c, e) {
		var f, h = THREE.GeometryUtils.__v1;
		h.sub(b, c);
		f = h.length();
		h.sub(b, e);
		b = h.length();
		h.sub(c, e);
		e = h.length();
		c = 0.5 * (f + b + e);
		return Math.sqrt(c * (c - f) * (c - b) * (c - e))
	},
	random16: function () {
		return (65280 * Math.random() + 255 * Math.random()) / 65535
	},
	center: function (b) {
		b.computeBoundingBox();
		var c = new THREE.Matrix4;
		c.setTranslation(-0.5 * (b.boundingBox.x[1] + b.boundingBox.x[0]), -0.5 * (b.boundingBox.y[1] + b.boundingBox.y[0]), -0.5 * (b.boundingBox.z[1] + b.boundingBox.z[0]));
		b.applyMatrix(c);
		b.computeBoundingBox()
	}
};
THREE.GeometryUtils.random = THREE.GeometryUtils.random16;
THREE.GeometryUtils.__v1 = new THREE.Vector3;
THREE.ImageUtils = {
	loadTexture: function (b, c, e) {
		var f = new Image,
			h = new THREE.Texture(f, c);
		f.onload = function () {
			h.needsUpdate = !0;
			e && e(this)
		};
		f.crossOrigin = "";
		f.src = b;
		return h
	},
	loadTextureCube: function (b, c, e) {
		var f, h = [],
			k = new THREE.Texture(h, c),
			c = h.loadCount = 0;
		for (f = b.length; c < f; ++c) h[c] = new Image, h[c].onload = function () {
			h.loadCount += 1;
			if (h.loadCount == 6) k.needsUpdate = !0;
			e && e(this)
		}, h[c].crossOrigin = "", h[c].src = b[c];
		return k
	},
	getNormalMap: function (b, c) {
		var e = function (b) {
				var e = Math.sqrt(b[0] * b[0] + b[1] * b[1] + b[2] * b[2]);
				return [b[0] / e, b[1] / e, b[2] / e]
			};
		c |= 1;
		var f = b.width,
			h = b.height,
			k = document.createElement("canvas");
		k.width = f;
		k.height = h;
		var m = k.getContext("2d");
		m.drawImage(b, 0, 0);
		for (var n = m.getImageData(0, 0, f, h).data, t = m.createImageData(f, h), u = t.data, v = 0; v < f; v++) for (var p = 1; p < h; p++) {
			var x = p - 1 < 0 ? h - 1 : p - 1,
				w = (p + 1) % h,
				A = v - 1 < 0 ? f - 1 : v - 1,
				z = (v + 1) % f,
				y = [],
				C = [0, 0, n[(p * f + v) * 4] / 255 * c];
			y.push([-1, 0, n[(p * f + A) * 4] / 255 * c]);
			y.push([-1, -1, n[(x * f + A) * 4] / 255 * c]);
			y.push([0, -1, n[(x * f + v) * 4] / 255 * c]);
			y.push([1, -1, n[(x * f + z) * 4] / 255 * c]);
			y.push([1, 0, n[(p * f + z) * 4] / 255 * c]);
			y.push([1, 1, n[(w * f + z) * 4] / 255 * c]);
			y.push([0, 1, n[(w * f + v) * 4] / 255 * c]);
			y.push([-1, 1, n[(w * f + A) * 4] / 255 * c]);
			x = [];
			A = y.length;
			for (w = 0; w < A; w++) {
				var z = y[w],
					E = y[(w + 1) % A],
					z = [z[0] - C[0], z[1] - C[1], z[2] - C[2]],
					E = [E[0] - C[0], E[1] - C[1], E[2] - C[2]];
				x.push(e([z[1] * E[2] - z[2] * E[1], z[2] * E[0] - z[0] * E[2], z[0] * E[1] - z[1] * E[0]]))
			}
			y = [0, 0, 0];
			for (w = 0; w < x.length; w++) y[0] += x[w][0], y[1] += x[w][1], y[2] += x[w][2];
			y[0] /= x.length;
			y[1] /= x.length;
			y[2] /= x.length;
			C = (p * f + v) * 4;
			u[C] = (y[0] + 1) / 2 * 255 | 0;
			u[C + 1] = (y[1] + 0.5) * 255 | 0;
			u[C + 2] = y[2] * 255 | 0;
			u[C + 3] = 255
		}
		m.putImageData(t, 0, 0);
		return k
	}
};
THREE.SceneUtils = {
	showHierarchy: function (b, c) {
		THREE.SceneUtils.traverseHierarchy(b, function (b) {
			b.visible = c
		})
	},
	traverseHierarchy: function (b, c) {
		var e, f, h = b.children.length;
		for (f = 0; f < h; f++) e = b.children[f], c(e), THREE.SceneUtils.traverseHierarchy(e, c)
	}
};
if (THREE.WebGLRenderer) THREE.ShaderUtils = {
	lib: {
		fresnel: {
			uniforms: {
				mRefractionRatio: {
					type: "f",
					value: 1.02
				},
				mFresnelBias: {
					type: "f",
					value: 0.1
				},
				mFresnelPower: {
					type: "f",
					value: 2
				},
				mFresnelScale: {
					type: "f",
					value: 1
				},
				tCube: {
					type: "t",
					value: 1,
					texture: null
				}
			},
			fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
			vertexShader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"
		},
		normal: {
			uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap,
			{
				enableAO: {
					type: "i",
					value: 0
				},
				enableDiffuse: {
					type: "i",
					value: 0
				},
				enableSpecular: {
					type: "i",
					value: 0
				},
				enableReflection: {
					type: "i",
					value: 0
				},
				tDiffuse: {
					type: "t",
					value: 0,
					texture: null
				},
				tCube: {
					type: "t",
					value: 1,
					texture: null
				},
				tNormal: {
					type: "t",
					value: 2,
					texture: null
				},
				tSpecular: {
					type: "t",
					value: 3,
					texture: null
				},
				tAO: {
					type: "t",
					value: 4,
					texture: null
				},
				tDisplacement: {
					type: "t",
					value: 5,
					texture: null
				},
				uNormalScale: {
					type: "f",
					value: 1
				},
				uDisplacementBias: {
					type: "f",
					value: 0
				},
				uDisplacementScale: {
					type: "f",
					value: 1
				},
				uDiffuseColor: {
					type: "c",
					value: new THREE.Color(15658734)
				},
				uSpecularColor: {
					type: "c",
					value: new THREE.Color(1118481)
				},
				uAmbientColor: {
					type: "c",
					value: new THREE.Color(328965)
				},
				uShininess: {
					type: "f",
					value: 30
				},
				uOpacity: {
					type: "f",
					value: 1
				},
				uReflectivity: {
					type: "f",
					value: 0.5
				},
				uOffset: {
					type: "v2",
					value: new THREE.Vector2(0, 0)
				},
				uRepeat: {
					type: "v2",
					value: new THREE.Vector2(1, 1)
				}
			}]),
			fragmentShader: ["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform float uNormalScale;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;",
				                THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\nif( enableAO )\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + viewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = specularTex.r * pow( pointDotNormalHalf, uShininess );\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + viewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = specularTex.r * pow( dirDotNormalHalf, uShininess );\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight;\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * totalDiffuse + totalSpecular + ambientLightColor * uAmbientColor;\nif ( enableReflection ) {\nvec3 wPos = cameraPosition - vViewPosition;\nvec3 vReflect = reflect( normalize( wPos ), normal );\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, uReflectivity );\n}",
				                THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
			vertexShader: ["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;",
				                THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvViewPosition = -mvPosition.xyz;\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv * uRepeat + uOffset;\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif",
				                THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
		},
		cube: {
			uniforms: {
				tCube: {
					type: "t",
					value: 1,
					texture: null
				}
			},
			vertexShader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"
		}
	}
};
THREE.Curve = function () {};
THREE.Curve.prototype.getPoint = function () {
	console.log("Warning, getPoint() not implemented!");
	return null
};
THREE.Curve.prototype.getPointAt = function (b) {
	return this.getPoint(this.getUtoTmapping(b))
};
THREE.Curve.prototype.getPoints = function (b) {
	b || (b = 5);
	var c, e = [];
	for (c = 0; c <= b; c++) e.push(this.getPoint(c / b));
	return e
};
THREE.Curve.prototype.getSpacedPoints = function (b) {
	b || (b = 5);
	var c, e = [];
	for (c = 0; c <= b; c++) e.push(this.getPointAt(c / b));
	return e
};
THREE.Curve.prototype.getLength = function () {
	var b = this.getLengths();
	return b[b.length - 1]
};
THREE.Curve.prototype.getLengths = function (b) {
	b || (b = 200);
	if (this.cacheArcLengths && this.cacheArcLengths.length == b + 1) return this.cacheArcLengths;
	var c = [],
		e, f = this.getPoint(0),
		h, k = 0;
	c.push(0);
	for (h = 1; h <= b; h++) e = this.getPoint(h / b), k += e.distanceTo(f), c.push(k), f = e;
	return this.cacheArcLengths = c
};
THREE.Curve.prototype.getUtoTmapping = function (b, c) {
	var e = this.getLengths(),
		f = 0,
		h = e.length,
		k;
	k = c ? c : b * e[h - 1];
	time = Date.now();
	for (var m = 0, n = h - 1, t; m <= n;) if (f = Math.floor(m + (n - m) / 2), t = e[f] - k, t < 0) m = f + 1;
	else if (t > 0) n = f - 1;
	else {
		n = f;
		break
	}
	f = n;
	if (e[f] == k) return f / (h - 1);
	m = e[f];
	return e = (f + (k - m) / (e[f + 1] - m)) / (h - 1)
};
THREE.Curve.prototype.getNormalVector = function (b) {
	b = this.getTangent(b);
	return new THREE.Vector2(-b.y, b.x)
};
THREE.Curve.prototype.getTangent = function (b) {
	var c = b - 1.0E-4;
	b += 1.0E-4;
	c < 0 && (c = 0);
	b > 1 && (b = 1);
	var c = this.getPoint(c),
		b = this.getPoint(b),
		e = new THREE.Vector2;
	e.sub(b, c);
	return e.unit()
};
THREE.LineCurve = function (b, c) {
	b instanceof THREE.Vector2 ? (this.v1 = b, this.v2 = c) : THREE.LineCurve.oldConstructor.apply(this, arguments)
};
THREE.LineCurve.oldConstructor = function (b, c, e, f) {
	this.constructor(new THREE.Vector2(b, c), new THREE.Vector2(e, f))
};
THREE.LineCurve.prototype = new THREE.Curve;
THREE.LineCurve.prototype.constructor = THREE.LineCurve;
THREE.LineCurve.prototype.getPoint = function (b) {
	var c = new THREE.Vector2;
	c.sub(this.v2, this.v1);
	c.multiplyScalar(b).addSelf(this.v1);
	return c
};
THREE.LineCurve.prototype.getPointAt = function (b) {
	return this.getPoint(b)
};
THREE.LineCurve.prototype.getTangent = function () {
	var b = new THREE.Vector2;
	b.sub(this.v2, this.v1);
	b.normalize();
	return b
};
THREE.QuadraticBezierCurve = function (b, c, e) {
	if (!(c instanceof THREE.Vector2)) var f = Array.prototype.slice.call(arguments),
		b = new THREE.Vector2(f[0], f[1]),
		c = new THREE.Vector2(f[2], f[3]),
		e = new THREE.Vector2(f[4], f[5]);
	this.v0 = b;
	this.v1 = c;
	this.v2 = e
};
THREE.QuadraticBezierCurve.prototype = new THREE.Curve;
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint = function (b) {
	var c;
	c = THREE.Shape.Utils.b2(b, this.v0.x, this.v1.x, this.v2.x);
	b = THREE.Shape.Utils.b2(b, this.v0.y, this.v1.y, this.v2.y);
	return new THREE.Vector2(c, b)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function (b) {
	var c;
	c = THREE.Curve.Utils.tangentQuadraticBezier(b, this.v0.x, this.v1.x, this.v2.x);
	b = THREE.Curve.Utils.tangentQuadraticBezier(b, this.v0.y, this.v1.y, this.v2.y);
	c = new THREE.Vector2(c, b);
	c.normalize();
	return c
};
THREE.CubicBezierCurve = function (b, c, e, f) {
	if (!(c instanceof THREE.Vector2)) var h = Array.prototype.slice.call(arguments),
		b = new THREE.Vector2(h[0], h[1]),
		c = new THREE.Vector2(h[2], h[3]),
		e = new THREE.Vector2(h[4], h[5]),
		f = new THREE.Vector2(h[6], h[7]);
	this.v0 = b;
	this.v1 = c;
	this.v2 = e;
	this.v3 = f
};
THREE.CubicBezierCurve.prototype = new THREE.Curve;
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve;
THREE.CubicBezierCurve.prototype.getPoint = function (b) {
	var c;
	c = THREE.Shape.Utils.b3(b, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
	b = THREE.Shape.Utils.b3(b, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
	return new THREE.Vector2(c, b)
};
THREE.CubicBezierCurve.prototype.getTangent = function (b) {
	var c;
	c = THREE.Curve.Utils.tangentCubicBezier(b, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
	b = THREE.Curve.Utils.tangentCubicBezier(b, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
	c = new THREE.Vector2(c, b);
	c.normalize();
	return c
};
THREE.SplineCurve = function (b) {
	this.points = b
};
THREE.SplineCurve.prototype = new THREE.Curve;
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint = function (b) {
	var c = new THREE.Vector2,
		e = [],
		f = this.points,
		h;
	h = (f.length - 1) * b;
	b = Math.floor(h);
	h -= b;
	e[0] = b == 0 ? b : b - 1;
	e[1] = b;
	e[2] = b > f.length - 2 ? b : b + 1;
	e[3] = b > f.length - 3 ? b : b + 2;
	c.x = THREE.Curve.Utils.interpolate(f[e[0]].x, f[e[1]].x, f[e[2]].x, f[e[3]].x, h);
	c.y = THREE.Curve.Utils.interpolate(f[e[0]].y, f[e[1]].y, f[e[2]].y, f[e[3]].y, h);
	return c
};
THREE.ArcCurve = function (b, c, e, f, h, k) {
	this.aX = b;
	this.aY = c;
	this.aRadius = e;
	this.aStartAngle = f;
	this.aEndAngle = h;
	this.aClockwise = k
};
THREE.ArcCurve.prototype = new THREE.Curve;
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve;
THREE.ArcCurve.prototype.getPoint = function (b) {
	var c = this.aEndAngle - this.aStartAngle;
	this.aClockwise || (b = 1 - b);
	b = this.aStartAngle + b * c;
	return new THREE.Vector2(this.aX + this.aRadius * Math.cos(b), this.aY + this.aRadius * Math.sin(b))
};
THREE.Curve.Utils = {
	tangentQuadraticBezier: function (b, c, e, f) {
		return 2 * (1 - b) * (e - c) + 2 * b * (f - e)
	},
	tangentCubicBezier: function (b, c, e, f, h) {
		return -3 * c * (1 - b) * (1 - b) + 3 * e * (1 - b) * (1 - b) - 6 * b * e * (1 - b) + 6 * b * f * (1 - b) - 3 * b * b * f + 3 * b * b * h
	},
	tangentSpline: function (b) {
		return 6 * b * b - 6 * b + (3 * b * b - 4 * b + 1) + (-6 * b * b + 6 * b) + (3 * b * b - 2 * b)
	},
	interpolate: function (b, c, e, f, h) {
		var b = (e - b) * 0.5,
			f = (f - c) * 0.5,
			k = h * h;
		return (2 * c - 2 * e + b + f) * h * k + (-3 * c + 3 * e - 2 * b - f) * k + b * h + c
	}
};
THREE.Curve.create = function (b, c) {
	b.prototype = new THREE.Curve;
	b.prototype.constructor = b;
	b.prototype.getPoint = c;
	return b
};
THREE.LineCurve3 = THREE.Curve.create(function (b, c) {
	this.v1 = b;
	this.v2 = c
}, function (b) {
	var c = new THREE.Vector3;
	c.sub(v2, v1);
	c.multiplyScalar(b);
	c.addSelf(this.v1);
	return c
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (b, c, e) {
	this.v0 = b;
	this.v1 = c;
	this.v2 = e
}, function (b) {
	var c, e;
	c = THREE.Shape.Utils.b2(b, this.v0.x, this.v1.x, this.v2.x);
	e = THREE.Shape.Utils.b2(b, this.v0.y, this.v1.y, this.v2.y);
	b = THREE.Shape.Utils.b2(b, this.v0.z, this.v1.z, this.v2.z);
	return new THREE.Vector3(c, e, b)
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function (b, c, e, f) {
	this.v0 = b;
	this.v1 = c;
	this.v2 = e;
	this.v3 = f
}, function (b) {
	var c, e;
	c = THREE.Shape.Utils.b3(b, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
	e = THREE.Shape.Utils.b3(b, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
	b = THREE.Shape.Utils.b3(b, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
	return new THREE.Vector3(c, e, b)
});
THREE.SplineCurve3 = THREE.Curve.create(function (b) {
	this.points = b
}, function (b) {
	var c = new THREE.Vector3,
		e = [],
		f = this.points,
		h;
	h = (f.length - 1) * b;
	b = Math.floor(h);
	h -= b;
	e[0] = b == 0 ? b : b - 1;
	e[1] = b;
	e[2] = b > f.length - 2 ? b : b + 1;
	e[3] = b > f.length - 3 ? b : b + 2;
	c.x = THREE.Curve.Utils.interpolate(f[e[0]].x, f[e[1]].x, f[e[2]].x, f[e[3]].x, h);
	c.y = THREE.Curve.Utils.interpolate(f[e[0]].y, f[e[1]].y, f[e[2]].y, f[e[3]].y, h);
	c.z = THREE.Curve.Utils.interpolate(f[e[0]].z, f[e[1]].z, f[e[2]].z, f[e[3]].z, h);
	return c
});
THREE.CurvePath = function () {
	this.curves = [];
	this.bends = []
};
THREE.CurvePath.prototype = new THREE.Curve;
THREE.CurvePath.prototype.constructor = THREE.CurvePath;
THREE.CurvePath.prototype.add = function (b) {
	this.curves.push(b)
};
THREE.CurvePath.prototype.checkConnection = function () {};
THREE.CurvePath.prototype.closePath = function () {};
THREE.CurvePath.prototype.getPoint = function (b) {
	for (var c = b * this.getLength(), e = this.getCurveLengths(), b = 0; b < e.length;) {
		if (e[b] >= c) return c = e[b] - c, b = this.curves[b], c = 1 - c / b.getLength(), b.getPointAt(c);
		b++
	}
	return null
};
THREE.CurvePath.prototype.getLength = function () {
	var b = this.getCurveLengths();
	return b[b.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function () {
	if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
	var b = [],
		c = 0,
		e, f = this.curves.length;
	for (e = 0; e < f; e++) c += this.curves[e].getLength(), b.push(c);
	return this.cacheLengths = b
};
THREE.CurvePath.prototype.getBoundingBox = function () {
	var b = this.getPoints(),
		c, e, f, h;
	c = e = Number.NEGATIVE_INFINITY;
	f = h = Number.POSITIVE_INFINITY;
	var k, m, n, t;
	t = new THREE.Vector2;
	m = 0;
	for (n = b.length; m < n; m++) {
		k = b[m];
		if (k.x > c) c = k.x;
		else if (k.x < f) f = k.x;
		if (k.y > e) e = k.y;
		else if (k.y < e) h = k.y;
		t.addSelf(k.x, k.y)
	}
	return {
		minX: f,
		minY: h,
		maxX: c,
		maxY: e,
		centroid: t.divideScalar(n)
	}
};
THREE.CurvePath.prototype.createPointsGeometry = function (b) {
	return this.createGeometry(this.getPoints(b, !0))
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function (b) {
	return this.createGeometry(this.getSpacedPoints(b, !0))
};
THREE.CurvePath.prototype.createGeometry = function (b) {
	for (var c = new THREE.Geometry, e = 0; e < b.length; e++) c.vertices.push(new THREE.Vertex(new THREE.Vector3(b[e].x, b[e].y, 0)));
	return c
};
THREE.CurvePath.prototype.addWrapPath = function (b) {
	this.bends.push(b)
};
THREE.CurvePath.prototype.getTransformedPoints = function (b, c) {
	var e = this.getPoints(b),
		f, h;
	if (!c) c = this.bends;
	f = 0;
	for (h = c.length; f < h; f++) e = this.getWrapPoints(e, c[f]);
	return e
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function (b, c) {
	var e = this.getSpacedPoints(b),
		f, h;
	if (!c) c = this.bends;
	f = 0;
	for (h = c.length; f < h; f++) e = this.getWrapPoints(e, c[f]);
	return e
};
THREE.CurvePath.prototype.getWrapPoints = function (b, c) {
	var e = this.getBoundingBox(),
		f, h, k, m, n, t;
	f = 0;
	for (h = b.length; f < h; f++) k = b[f], m = k.x, n = k.y, t = m / e.maxX, t = c.getUtoTmapping(t, m), m = c.getPoint(t), n = c.getNormalVector(t).multiplyScalar(n), k.x = m.x + n.x, k.y = m.y + n.y;
	return b
};
THREE.Path = function (b) {
	THREE.CurvePath.call(this);
	this.actions = [];
	b && this.fromPoints(b)
};
THREE.Path.prototype = new THREE.CurvePath;
THREE.Path.prototype.constructor = THREE.Path;
THREE.PathActions = {
	MOVE_TO: "moveTo",
	LINE_TO: "lineTo",
	QUADRATIC_CURVE_TO: "quadraticCurveTo",
	BEZIER_CURVE_TO: "bezierCurveTo",
	CSPLINE_THRU: "splineThru",
	ARC: "arc"
};
THREE.Path.prototype.fromPoints = function (b) {
	this.moveTo(b[0].x, b[0].y);
	var c, e = b.length;
	for (c = 1; c < e; c++) this.lineTo(b[c].x, b[c].y)
};
THREE.Path.prototype.moveTo = function () {
	var b = Array.prototype.slice.call(arguments);
	this.actions.push({
		action: THREE.PathActions.MOVE_TO,
		args: b
	})
};
THREE.Path.prototype.lineTo = function (b, c) {
	var e = Array.prototype.slice.call(arguments),
		f = this.actions[this.actions.length - 1].args;
	this.curves.push(new THREE.LineCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(b, c)));
	this.actions.push({
		action: THREE.PathActions.LINE_TO,
		args: e
	})
};
THREE.Path.prototype.quadraticCurveTo = function (b, c, e, f) {
	var h = Array.prototype.slice.call(arguments),
		k = this.actions[this.actions.length - 1].args;
	this.curves.push(new THREE.QuadraticBezierCurve(new THREE.Vector2(k[k.length - 2], k[k.length - 1]), new THREE.Vector2(b, c), new THREE.Vector2(e, f)));
	this.actions.push({
		action: THREE.PathActions.QUADRATIC_CURVE_TO,
		args: h
	})
};
THREE.Path.prototype.bezierCurveTo = function (b, c, e, f, h, k) {
	var m = Array.prototype.slice.call(arguments),
		n = this.actions[this.actions.length - 1].args;
	this.curves.push(new THREE.CubicBezierCurve(new THREE.Vector2(n[n.length - 2], n[n.length - 1]), new THREE.Vector2(b, c), new THREE.Vector2(e, f), new THREE.Vector2(h, k)));
	this.actions.push({
		action: THREE.PathActions.BEZIER_CURVE_TO,
		args: m
	})
};
THREE.Path.prototype.splineThru = function (b) {
	var c = Array.prototype.slice.call(arguments),
		e = this.actions[this.actions.length - 1].args,
		e = [new THREE.Vector2(e[e.length - 2], e[e.length - 1])];
	Array.prototype.push.apply(e, b);
	this.curves.push(new THREE.SplineCurve(e));
	this.actions.push({
		action: THREE.PathActions.CSPLINE_THRU,
		args: c
	})
};
THREE.Path.prototype.arc = function (b, c, e, f, h, k) {
	var m = Array.prototype.slice.call(arguments);
	this.curves.push(new THREE.ArcCurve(b, c, e, f, h, k));
	this.actions.push({
		action: THREE.PathActions.ARC,
		args: m
	})
};
THREE.Path.prototype.getSpacedPoints = function (b) {
	b || (b = 40);
	for (var c = [], e = 0; e < b; e++) c.push(this.getPoint(e / b));
	return c
};
THREE.Path.prototype.getPoints = function (b, c) {
	var b = b || 12,
		e = [],
		f, h, k, m, n, t, u, v, p, x, w, A, z;
	f = 0;
	for (h = this.actions.length; f < h; f++) switch (k = this.actions[f], m = k.action, k = k.args, m) {
	case THREE.PathActions.LINE_TO:
		e.push(new THREE.Vector2(k[0], k[1]));
		break;
	case THREE.PathActions.QUADRATIC_CURVE_TO:
		n = k[2];
		t = k[3];
		p = k[0];
		x = k[1];
		e.length > 0 ? (m = e[e.length - 1], w = m.x, A = m.y) : (m = this.actions[f - 1].args, w = m[m.length - 2], A = m[m.length - 1]);
		for (m = 1; m <= b; m++) z = m / b, k = THREE.Shape.Utils.b2(z, w, p, n), z = THREE.Shape.Utils.b2(z, A, x, t), e.push(new THREE.Vector2(k, z));
		break;
	case THREE.PathActions.BEZIER_CURVE_TO:
		n = k[4];
		t = k[5];
		p = k[0];
		x = k[1];
		u = k[2];
		v = k[3];
		e.length > 0 ? (m = e[e.length - 1], w = m.x, A = m.y) : (m = this.actions[f - 1].args, w = m[m.length - 2], A = m[m.length - 1]);
		for (m = 1; m <= b; m++) z = m / b, k = THREE.Shape.Utils.b3(z, w, p, u, n), z = THREE.Shape.Utils.b3(z, A, x, v, t), e.push(new THREE.Vector2(k, z));
		break;
	case THREE.PathActions.CSPLINE_THRU:
		m = this.actions[f - 1].args;
		m = [new THREE.Vector2(m[m.length - 2], m[m.length - 1])];
		z = b * k[0].length;
		m = m.concat(k[0]);
		k = new THREE.SplineCurve(m);
		for (m = 1; m <= z; m++) e.push(k.getPointAt(m / z));
		break;
	case THREE.PathActions.ARC:
		m = this.actions[f - 1].args;
		n = k[0];
		t = k[1];
		u = k[2];
		p = k[3];
		z = k[4];
		x = !! k[5];
		v = m[m.length - 2];
		w = m[m.length - 1];
		m.length == 0 && (v = w = 0);
		A = z - p;
		var y = b * 2;
		for (m = 1; m <= y; m++) z = m / y, x || (z = 1 - z), z = p + z * A, k = v + n + u * Math.cos(z), z = w + t + u * Math.sin(z), e.push(new THREE.Vector2(k, z))
	}
	c && e.push(e[0]);
	return e
};
THREE.Path.prototype.transform = function (b, c) {
	this.getBoundingBox();
	return this.getWrapPoints(this.getPoints(c), b)
};
THREE.Path.prototype.nltransform = function (b, c, e, f, h, k) {
	var m = this.getPoints(),
		n, t, u, v, p;
	n = 0;
	for (t = m.length; n < t; n++) u = m[n], v = u.x, p = u.y, u.x = b * v + c * p + e, u.y = f * p + h * v + k;
	return m
};
THREE.Path.prototype.debug = function (b) {
	var c = this.getBoundingBox();
	b || (b = document.createElement("canvas"), b.setAttribute("width", c.maxX + 100), b.setAttribute("height", c.maxY + 100), document.body.appendChild(b));
	c = b.getContext("2d");
	c.fillStyle = "white";
	c.fillRect(0, 0, b.width, b.height);
	c.strokeStyle = "black";
	c.beginPath();
	var e, f, h, b = 0;
	for (e = this.actions.length; b < e; b++) f = this.actions[b], h = f.args, f = f.action, f != THREE.PathActions.CSPLINE_THRU && c[f].apply(c, h);
	c.stroke();
	c.closePath();
	c.strokeStyle = "red";
	f = this.getPoints();
	b = 0;
	for (e = f.length; b < e; b++) h = f[b], c.beginPath(), c.arc(h.x, h.y, 1.5, 0, Math.PI * 2, !1), c.stroke(), c.closePath()
};
THREE.Path.prototype.toShapes = function () {
	var b, c, e, f, h = [],
		k = new THREE.Path;
	b = 0;
	for (c = this.actions.length; b < c; b++) e = this.actions[b], f = e.args, e = e.action, e == THREE.PathActions.MOVE_TO && k.actions.length != 0 && (h.push(k), k = new THREE.Path), k[e].apply(k, f);
	k.actions.length != 0 && h.push(k);
	if (h.length == 0) return [];
	var m, k = [];
	if (THREE.Shape.Utils.isClockWise(h[0].getPoints())) {
		b = 0;
		for (c = h.length; b < c; b++) f = h[b], THREE.Shape.Utils.isClockWise(f.getPoints()) ? (m && k.push(m), m = new THREE.Shape, m.actions = f.actions, m.curves = f.curves) : m.holes.push(f);
		k.push(m)
	}
	else {
		m = new THREE.Shape;
		b = 0;
		for (c = h.length; b < c; b++) f = h[b], THREE.Shape.Utils.isClockWise(f.getPoints()) ? (m.actions = f.actions, m.curves = f.curves, k.push(m), m = new THREE.Shape) : m.holes.push(f)
	}
	return k
};
THREE.Shape = function () {
	THREE.Path.apply(this, arguments);
	this.holes = []
};
THREE.Shape.prototype = new THREE.Path;
THREE.Shape.prototype.constructor = THREE.Path;
THREE.Shape.prototype.extrude = function (b) {
	return new THREE.ExtrudeGeometry(this, b)
};
THREE.Shape.prototype.getPointsHoles = function (b) {
	var c, e = this.holes.length,
		f = [];
	for (c = 0; c < e; c++) f[c] = this.holes[c].getTransformedPoints(b, this.bends);
	return f
};
THREE.Shape.prototype.getSpacedPointsHoles = function (b) {
	var c, e = this.holes.length,
		f = [];
	for (c = 0; c < e; c++) f[c] = this.holes[c].getTransformedSpacedPoints(b, this.bends);
	return f
};
THREE.Shape.prototype.extractAllPoints = function (b) {
	return {
		shape: this.getTransformedPoints(b),
		holes: this.getPointsHoles(b)
	}
};
THREE.Shape.prototype.extractAllSpacedPoints = function (b) {
	return {
		shape: this.getTransformedSpacedPoints(b),
		holes: this.getSpacedPointsHoles(b)
	}
};
THREE.Shape.Utils = {
	removeHoles: function (b, c) {
		var e = b.concat(),
			f = e.concat(),
			h, k, m, n, t, u, v, p, x, w, A = [];
		for (t = 0; t < c.length; t++) {
			u = c[t];
			Array.prototype.push.apply(f, u);
			k = Number.POSITIVE_INFINITY;
			for (h = 0; h < u.length; h++) {
				x = u[h];
				w = [];
				for (p = 0; p < e.length; p++) v = e[p], v = x.distanceToSquared(v), w.push(v), v < k && (k = v, m = h, n = p)
			}
			h = n - 1 >= 0 ? n - 1 : e.length - 1;
			k = m - 1 >= 0 ? m - 1 : u.length - 1;
			var z = [u[m], e[n], e[h]];
			p = THREE.FontUtils.Triangulate.area(z);
			var y = [u[m], u[k], e[n]];
			x = THREE.FontUtils.Triangulate.area(y);
			w = n;
			v = m;
			n += 1;
			m += -1;
			n < 0 && (n += e.length);
			n %= e.length;
			m < 0 && (m += u.length);
			m %= u.length;
			h = n - 1 >= 0 ? n - 1 : e.length - 1;
			k = m - 1 >= 0 ? m - 1 : u.length - 1;
			z = [u[m], e[n], e[h]];
			z = THREE.FontUtils.Triangulate.area(z);
			y = [u[m], u[k], e[n]];
			y = THREE.FontUtils.Triangulate.area(y);
			p + x > z + y && (n = w, m = v, n < 0 && (n += e.length), n %= e.length, m < 0 && (m += u.length), m %= u.length, h = n - 1 >= 0 ? n - 1 : e.length - 1, k = m - 1 >= 0 ? m - 1 : u.length - 1);
			p = e.slice(0, n);
			x = e.slice(n);
			w = u.slice(m);
			v = u.slice(0, m);
			k = [u[m], u[k], e[n]];
			A.push([u[m], e[n], e[h]]);
			A.push(k);
			e = p.concat(w).concat(v).concat(x)
		}
		return {
			shape: e,
			isolatedPts: A,
			allpoints: f
		}
	},
	triangulateShape: function (b, c) {
		var e = THREE.Shape.Utils.removeHoles(b, c),
			f = e.allpoints,
			h = e.isolatedPts,
			e = THREE.FontUtils.Triangulate(e.shape, !1),
			k, m, n, t, u = {};
		k = 0;
		for (m = f.length; k < m; k++) t = f[k].x + ":" + f[k].y, u[t] !== void 0 && console.log("Duplicate point", t), u[t] = k;
		k = 0;
		for (m = e.length; k < m; k++) {
			n = e[k];
			for (f = 0; f < 3; f++) t = n[f].x + ":" + n[f].y, t = u[t], t !== void 0 && (n[f] = t)
		}
		k = 0;
		for (m = h.length; k < m; k++) {
			n = h[k];
			for (f = 0; f < 3; f++) t = n[f].x + ":" + n[f].y, t = u[t], t !== void 0 && (n[f] = t)
		}
		return e.concat(h)
	},
	isClockWise: function (b) {
		return THREE.FontUtils.Triangulate.area(b) < 0
	},
	b2p0: function (b, c) {
		var e = 1 - b;
		return e * e * c
	},
	b2p1: function (b, c) {
		return 2 * (1 - b) * b * c
	},
	b2p2: function (b, c) {
		return b * b * c
	},
	b2: function (b, c, e, f) {
		return this.b2p0(b, c) + this.b2p1(b, e) + this.b2p2(b, f)
	},
	b3p0: function (b, c) {
		var e = 1 - b;
		return e * e * e * c
	},
	b3p1: function (b, c) {
		var e = 1 - b;
		return 3 * e * e * b * c
	},
	b3p2: function (b, c) {
		return 3 * (1 - b) * b * b * c
	},
	b3p3: function (b, c) {
		return b * b * b * c
	},
	b3: function (b, c, e, f, h) {
		return this.b3p0(b, c) + this.b3p1(b, e) + this.b3p2(b, f) + this.b3p3(b, h)
	}
};
THREE.TextPath = function (b, c) {
	THREE.Path.call(this);
	this.parameters = c || {};
	this.set(b)
};
THREE.TextPath.prototype.set = function (b, c) {
	this.text = b;
	var c = c || this.parameters,
		e = c.curveSegments !== void 0 ? c.curveSegments : 4,
		f = c.font !== void 0 ? c.font : "helvetiker",
		h = c.weight !== void 0 ? c.weight : "normal",
		k = c.style !== void 0 ? c.style : "normal";
	THREE.FontUtils.size = c.size !== void 0 ? c.size : 100;
	THREE.FontUtils.divisions = e;
	THREE.FontUtils.face = f;
	THREE.FontUtils.weight = h;
	THREE.FontUtils.style = k
};
THREE.TextPath.prototype.toShapes = function () {
	for (var b = THREE.FontUtils.drawText(this.text).paths, c = [], e = 0, f = b.length; e < f; e++) Array.prototype.push.apply(c, b[e].toShapes());
	return c
};
THREE.AnimationHandler = function () {
	var b = [],
		c = {},
		e = {
			update: function (e) {
				for (var c = 0; c < b.length; c++) b[c].update(e)
			},
			addToUpdate: function (e) {
				b.indexOf(e) === -1 && b.push(e)
			},
			removeFromUpdate: function (e) {
				e = b.indexOf(e);
				e !== -1 && b.splice(e, 1)
			},
			add: function (b) {
				c[b.name] !== void 0 && console.log("THREE.AnimationHandler.add: Warning! " + b.name + " already exists in library. Overwriting.");
				c[b.name] = b;
				if (b.initialized !== !0) {
					for (var e = 0; e < b.hierarchy.length; e++) {
						for (var f = 0; f < b.hierarchy[e].keys.length; f++) {
							if (b.hierarchy[e].keys[f].time < 0) b.hierarchy[e].keys[f].time = 0;
							if (b.hierarchy[e].keys[f].rot !== void 0 && !(b.hierarchy[e].keys[f].rot instanceof THREE.Quaternion)) {
								var n = b.hierarchy[e].keys[f].rot;
								b.hierarchy[e].keys[f].rot = new THREE.Quaternion(n[0], n[1], n[2], n[3])
							}
						}
						if (b.hierarchy[e].keys[0].morphTargets !== void 0) {
							n = {};
							for (f = 0; f < b.hierarchy[e].keys.length; f++) for (var t = 0; t < b.hierarchy[e].keys[f].morphTargets.length; t++) {
								var u = b.hierarchy[e].keys[f].morphTargets[t];
								n[u] = -1
							}
							b.hierarchy[e].usedMorphTargets = n;
							for (f = 0; f < b.hierarchy[e].keys.length; f++) {
								var v = {};
								for (u in n) {
									for (t = 0; t < b.hierarchy[e].keys[f].morphTargets.length; t++) if (b.hierarchy[e].keys[f].morphTargets[t] === u) {
										v[u] = b.hierarchy[e].keys[f].morphTargetsInfluences[t];
										break
									}
									t === b.hierarchy[e].keys[f].morphTargets.length && (v[u] = 0)
								}
								b.hierarchy[e].keys[f].morphTargetsInfluences = v
							}
						}
						for (f = 1; f < b.hierarchy[e].keys.length; f++) b.hierarchy[e].keys[f].time === b.hierarchy[e].keys[f - 1].time && (b.hierarchy[e].keys.splice(f, 1), f--);
						for (f = 1; f < b.hierarchy[e].keys.length; f++) b.hierarchy[e].keys[f].index = f
					}
					f = parseInt(b.length * b.fps, 10);
					b.JIT = {};
					b.JIT.hierarchy = [];
					for (e = 0; e < b.hierarchy.length; e++) b.JIT.hierarchy.push(Array(f));
					b.initialized = !0
				}
			},
			get: function (b) {
				if (typeof b === "string") return c[b] ? c[b] : (console.log("THREE.AnimationHandler.get: Couldn't find animation " + b), null)
			},
			parse: function (b) {
				var e = [];
				if (b instanceof THREE.SkinnedMesh) for (var c = 0; c < b.bones.length; c++) e.push(b.bones[c]);
				else f(b, e);
				return e
			}
		},
		f = function (b, e) {
			e.push(b);
			for (var c = 0; c < b.children.length; c++) f(b.children[c], e)
		};
	e.LINEAR = 0;
	e.CATMULLROM = 1;
	e.CATMULLROM_FORWARD = 2;
	return e
}();
THREE.Animation = function (b, c, e, f) {
	this.root = b;
	this.data = THREE.AnimationHandler.get(c);
	this.hierarchy = THREE.AnimationHandler.parse(b);
	this.currentTime = 0;
	this.timeScale = 1;
	this.isPlaying = !1;
	this.loop = this.isPaused = !0;
	this.interpolationType = e !== void 0 ? e : THREE.AnimationHandler.LINEAR;
	this.JITCompile = f !== void 0 ? f : !0;
	this.points = [];
	this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function (b, c) {
	if (!this.isPlaying) {
		this.isPlaying = !0;
		this.loop = b !== void 0 ? b : !0;
		this.currentTime = c !== void 0 ? c : 0;
		var e, f = this.hierarchy.length,
			h;
		for (e = 0; e < f; e++) {
			h = this.hierarchy[e];
			if (this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD) h.useQuaternion = !0;
			h.matrixAutoUpdate = !0;
			if (h.animationCache === void 0) h.animationCache = {}, h.animationCache.prevKey = {
				pos: 0,
				rot: 0,
				scl: 0
			}, h.animationCache.nextKey = {
				pos: 0,
				rot: 0,
				scl: 0
			}, h.animationCache.originalMatrix = h instanceof
			THREE.Bone ? h.skinMatrix : h.matrix;
			var k = h.animationCache.prevKey;
			h = h.animationCache.nextKey;
			k.pos = this.data.hierarchy[e].keys[0];
			k.rot = this.data.hierarchy[e].keys[0];
			k.scl = this.data.hierarchy[e].keys[0];
			h.pos = this.getNextKeyWith("pos", e, 1);
			h.rot = this.getNextKeyWith("rot", e, 1);
			h.scl = this.getNextKeyWith("scl", e, 1)
		}
		this.update(0)
	}
	this.isPaused = !1;
	THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function () {
	this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
	this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function () {
	this.isPaused = this.isPlaying = !1;
	THREE.AnimationHandler.removeFromUpdate(this);
	for (var b = 0; b < this.hierarchy.length; b++) if (this.hierarchy[b].animationCache !== void 0) this.hierarchy[b] instanceof THREE.Bone ? this.hierarchy[b].skinMatrix = this.hierarchy[b].animationCache.originalMatrix : this.hierarchy[b].matrix = this.hierarchy[b].animationCache.originalMatrix, delete this.hierarchy[b].animationCache
};
THREE.Animation.prototype.update = function (b) {
	if (this.isPlaying) {
		var c = ["pos", "rot", "scl"],
			e, f, h, k, m, n, t, u, v = this.data.JIT.hierarchy,
			p, x;
		this.currentTime += b * this.timeScale;
		x = this.currentTime;
		p = this.currentTime %= this.data.length;
		u = parseInt(Math.min(p * this.data.fps, this.data.length * this.data.fps), 10);
		for (var w = 0, A = this.hierarchy.length; w < A; w++) if (b = this.hierarchy[w], t = b.animationCache, this.JITCompile && v[w][u] !== void 0) b instanceof THREE.Bone ? (b.skinMatrix = v[w][u], b.matrixAutoUpdate = !1, b.matrixWorldNeedsUpdate = !1) : (b.matrix = v[w][u], b.matrixAutoUpdate = !1, b.matrixWorldNeedsUpdate = !0);
		else {
			if (this.JITCompile) b instanceof THREE.Bone ? b.skinMatrix = b.animationCache.originalMatrix : b.matrix = b.animationCache.originalMatrix;
			for (var z = 0; z < 3; z++) {
				e = c[z];
				m = t.prevKey[e];
				n = t.nextKey[e];
				if (n.time <= x) {
					if (p < x) if (this.loop) {
						m = this.data.hierarchy[w].keys[0];
						for (n = this.getNextKeyWith(e, w, 1); n.time < p;) m = n, n = this.getNextKeyWith(e, w, n.index + 1)
					}
					else {
						this.stop();
						return
					}
					else {
						do m = n, n = this.getNextKeyWith(e, w, n.index + 1);
						while (n.time < p)
					}
					t.prevKey[e] = m;
					t.nextKey[e] = n
				}
				b.matrixAutoUpdate = !0;
				b.matrixWorldNeedsUpdate = !0;
				f = (p - m.time) / (n.time - m.time);
				h = m[e];
				k = n[e];
				if (f < 0 || f > 1) console.log("THREE.Animation.update: Warning! Scale out of bounds:" + f + " on bone " + w), f = f < 0 ? 0 : 1;
				if (e === "pos") if (e = b.position, this.interpolationType === THREE.AnimationHandler.LINEAR) e.x = h[0] + (k[0] - h[0]) * f, e.y = h[1] + (k[1] - h[1]) * f, e.z = h[2] + (k[2] - h[2]) * f;
				else {
					if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) if (this.points[0] = this.getPrevKeyWith("pos", w, m.index - 1).pos, this.points[1] = h, this.points[2] = k, this.points[3] = this.getNextKeyWith("pos", w, n.index + 1).pos, f = f * 0.33 + 0.33, h = this.interpolateCatmullRom(this.points, f), e.x = h[0], e.y = h[1], e.z = h[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) f = this.interpolateCatmullRom(this.points, f * 1.01), this.target.set(f[0], f[1], f[2]), this.target.subSelf(e), this.target.y = 0, this.target.normalize(), f = Math.atan2(this.target.x, this.target.z), b.rotation.set(0, f, 0)
				}
				else if (e === "rot") THREE.Quaternion.slerp(h, k, b.quaternion, f);
				else if (e === "scl") e = b.scale, e.x = h[0] + (k[0] - h[0]) * f, e.y = h[1] + (k[1] - h[1]) * f, e.z = h[2] + (k[2] - h[2]) * f
			}
		}
		if (this.JITCompile && v[0][u] === void 0) {
			this.hierarchy[0].update(void 0, !0);
			for (w = 0; w < this.hierarchy.length; w++) v[w][u] = this.hierarchy[w] instanceof THREE.Bone ? this.hierarchy[w].skinMatrix.clone() : this.hierarchy[w].matrix.clone()
		}
	}
};
THREE.Animation.prototype.interpolateCatmullRom = function (b, c) {
	var e = [],
		f = [],
		h, k, m, n, t, u;
	h = (b.length - 1) * c;
	k = Math.floor(h);
	h -= k;
	e[0] = k == 0 ? k : k - 1;
	e[1] = k;
	e[2] = k > b.length - 2 ? k : k + 1;
	e[3] = k > b.length - 3 ? k : k + 2;
	k = b[e[0]];
	n = b[e[1]];
	t = b[e[2]];
	u = b[e[3]];
	e = h * h;
	m = h * e;
	f[0] = this.interpolate(k[0], n[0], t[0], u[0], h, e, m);
	f[1] = this.interpolate(k[1], n[1], t[1], u[1], h, e, m);
	f[2] = this.interpolate(k[2], n[2], t[2], u[2], h, e, m);
	return f
};
THREE.Animation.prototype.interpolate = function (b, c, e, f, h, k, m) {
	b = (e - b) * 0.5;
	f = (f - c) * 0.5;
	return (2 * (c - e) + b + f) * m + (-3 * (c - e) - 2 * b - f) * k + b * h + c
};
THREE.Animation.prototype.getNextKeyWith = function (b, c, e) {
	var f = this.data.hierarchy[c].keys;
	for (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? e = e < f.length - 1 ? e : f.length - 1 : e %= f.length; e < f.length; e++) if (f[e][b] !== void 0) return f[e];
	return this.data.hierarchy[c].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function (b, c, e) {
	for (var f = this.data.hierarchy[c].keys, e = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? e > 0 ? e : 0 : e >= 0 ? e : e + f.length; e >= 0; e--) if (f[e][b] !== void 0) return f[e];
	return this.data.hierarchy[c].keys[f.length - 1]
};
THREE.CubeCamera = function (b, c, e, f) {
	this.cameraPX = new THREE.PerspectiveCamera(90, 1, b, c);
	this.cameraNX = new THREE.PerspectiveCamera(90, 1, b, c);
	this.cameraPY = new THREE.PerspectiveCamera(90, 1, b, c);
	this.cameraNY = new THREE.PerspectiveCamera(90, 1, b, c);
	this.cameraPZ = new THREE.PerspectiveCamera(90, 1, b, c);
	this.cameraNZ = new THREE.PerspectiveCamera(90, 1, b, c);
	this.cameraPXTarget = new THREE.Vector3(0, 0, 0);
	this.cameraNXTarget = new THREE.Vector3(0, 0, 0);
	this.cameraPYTarget = new THREE.Vector3(0, 0, 0);
	this.cameraNYTarget = new THREE.Vector3(0, 0, 0);
	this.cameraPZTarget = new THREE.Vector3(0, 0, 0);
	this.cameraNZTarget = new THREE.Vector3(0, 0, 0);
	this.height = e;
	this.position = new THREE.Vector3(0, e, 0);
	this.cameraPX.position = this.position;
	this.cameraNX.position = this.position;
	this.cameraPY.position = this.position;
	this.cameraNY.position = this.position;
	this.cameraPZ.position = this.position;
	this.cameraNZ.position = this.position;
	this.cameraPY.up.set(0, 0, 1);
	this.cameraPZ.up.set(0, -1, 0);
	this.cameraNZ.up.set(0, -1, 0);
	this.renderTarget = new THREE.WebGLRenderTargetCube(f, f, {
		format: THREE.RGBFormat,
		magFilter: THREE.LinearFilter,
		minFilter: THREE.LinearFilter
	});
	this.updatePosition = function (b) {
		this.position.x = b.x;
		this.position.z = b.z;
		this.cameraPXTarget.add(this.position, new THREE.Vector3(-1, 0, 0));
		this.cameraNXTarget.add(this.position, new THREE.Vector3(1, 0, 0));
		this.cameraPYTarget.add(this.position, new THREE.Vector3(0, 1, 0));
		this.cameraNYTarget.add(this.position, new THREE.Vector3(0, -1, 0));
		this.cameraPZTarget.add(this.position, new THREE.Vector3(0, 0, 1));
		this.cameraNZTarget.add(this.position, new THREE.Vector3(0, 0, -1));
		this.cameraPX.lookAt(this.cameraPXTarget);
		this.cameraNX.lookAt(this.cameraNXTarget);
		this.cameraPY.lookAt(this.cameraPYTarget);
		this.cameraNY.lookAt(this.cameraNYTarget);
		this.cameraPZ.lookAt(this.cameraPZTarget);
		this.cameraNZ.lookAt(this.cameraNZTarget)
	};
	this.updateCubeMap = function (b, e) {
		var c = this.renderTarget;
		b.setFaceCulling("back", "cw");
		e.scale.y = -1;
		e.position.y = 2 * this.height;
		e.updateMatrix();
		c.activeCubeFace = 0;
		b.render(e, this.cameraPX, c);
		c.activeCubeFace = 1;
		b.render(e, this.cameraNX, c);
		e.scale.y = 1;
		e.position.y = 0;
		e.updateMatrix();
		e.scale.x = -1;
		e.updateMatrix();
		c.activeCubeFace = 2;
		b.render(e, this.cameraPY, c);
		e.scale.x = 1;
		e.updateMatrix();
		b.setFaceCulling("back", "ccw");
		c.activeCubeFace = 3;
		b.render(e, this.cameraNY, c);
		e.scale.x = -1;
		e.updateMatrix();
		b.setFaceCulling("back", "cw");
		c.activeCubeFace = 4;
		b.render(e, this.cameraPZ, c);
		c.activeCubeFace = 5;
		b.render(e, this.cameraNZ, c);
		e.scale.x = 1;
		e.updateMatrix();
		b.setFaceCulling("back", "ccw")
	}
};
THREE.FirstPersonCamera = function () {
	console.warn("DEPRECATED: FirstPersonCamera() is FirstPersonControls().")
};
THREE.PathCamera = function () {
	console.warn("DEPRECATED: PathCamera() is PathControls().")
};
THREE.FlyCamera = function () {
	console.warn("DEPRECATED: FlyCamera() is FlyControls().")
};
THREE.RollCamera = function () {
	console.warn("DEPRECATED: RollCamera() is RollControls().")
};
THREE.TrackballCamera = function () {
	console.warn("DEPRECATED: TrackballCamera() is TrackballControls().")
};
THREE.CombinedCamera = function (b, c, e, f, h, k, m) {
	THREE.Camera.call(this);
	this.cameraO = new THREE.OrthographicCamera(b / -2, b / 2, c / 2, c / -2, k, m);
	this.cameraP = new THREE.PerspectiveCamera(e, b / c, f, h);
	this.toPerspective()
};
THREE.CombinedCamera.prototype = new THREE.Camera;
THREE.CombinedCamera.prototype.constructor = THREE.CoolCamera;
THREE.CombinedCamera.prototype.toPerspective = function () {
	this.near = this.cameraP.near;
	this.far = this.cameraP.far;
	this.projectionMatrix = this.cameraP.projectionMatrix
};
THREE.CombinedCamera.prototype.toOrthographic = function () {
	this.near = this.cameraO.near;
	this.far = this.cameraO.far;
	this.projectionMatrix = this.cameraO.projectionMatrix
};
THREE.CombinedCamera.prototype.setFov = function (b) {
	this.cameraP.fov = b;
	this.cameraP.updateProjectionMatrix();
	this.toPerspective()
};
THREE.CombinedCamera.prototype.setLens = function (b, c) {
	c || (c = 43.25);
	var e = 2 * Math.atan(c / (b * 2));
	e *= 180 / Math.PI;
	this.setFov(e);
	return e
};
THREE.FirstPersonControls = function (b, c) {
	function e(b, e) {
		return function () {
			e.apply(b, arguments)
		}
	}
	this.object = b;
	this.target = new THREE.Vector3(0, 0, 0);
	this.domElement = c !== void 0 ? c : document;
	this.movementSpeed = 1;
	this.lookSpeed = 0.005;
	this.noFly = !1;
	this.lookVertical = !0;
	this.autoForward = !1;
	this.activeLook = !0;
	this.heightSpeed = !1;
	this.heightCoef = 1;
	this.heightMin = 0;
	this.constrainVertical = !1;
	this.verticalMin = 0;
	this.verticalMax = Math.PI;
	this.lastUpdate = (new Date).getTime();
	this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = this.autoSpeedFactor = this.tdiff = 0;
	this.mouseDragOn = this.freeze = this.moveRight = this.moveLeft = this.moveBackward = this.moveForward = !1;
	this.domElement === document ? (this.viewHalfX = window.innerWidth / 2, this.viewHalfY = window.innerHeight / 2) : (this.viewHalfX = this.domElement.offsetWidth / 2, this.viewHalfY = this.domElement.offsetHeight / 2, this.domElement.setAttribute("tabindex", -1));
	this.onMouseDown = function (b) {
		this.domElement !== document && this.domElement.focus();
		b.preventDefault();
		b.stopPropagation();
		if (this.activeLook) switch (b.button) {
		case 0:
			this.moveForward = !0;
			break;
		case 2:
			this.moveBackward = !0
		}
		this.mouseDragOn = !0
	};
	this.onMouseUp = function (b) {
		b.preventDefault();
		b.stopPropagation();
		if (this.activeLook) switch (b.button) {
		case 0:
			this.moveForward = !1;
			break;
		case 2:
			this.moveBackward = !1
		}
		this.mouseDragOn = !1
	};
	this.onMouseMove = function (b) {
		this.domElement === document ? (this.mouseX = b.pageX - this.viewHalfX, this.mouseY = b.pageY - this.viewHalfY) : (this.mouseX = b.pageX - this.domElement.offsetLeft - this.viewHalfX, this.mouseY = b.pageY - this.domElement.offsetTop - this.viewHalfY)
	};
	this.onKeyDown = function (b) {
		switch (b.keyCode) {
		case 38:
		case 87:
			this.moveForward = !0;
			break;
		case 37:
		case 65:
			this.moveLeft = !0;
			break;
		case 40:
		case 83:
			this.moveBackward = !0;
			break;
		case 39:
		case 68:
			this.moveRight = !0;
			break;
		case 82:
			this.moveUp = !0;
			break;
		case 70:
			this.moveDown = !0;
			break;
		case 81:
			this.freeze = !this.freeze
		}
	};
	this.onKeyUp = function (b) {
		switch (b.keyCode) {
		case 38:
		case 87:
			this.moveForward = !1;
			break;
		case 37:
		case 65:
			this.moveLeft = !1;
			break;
		case 40:
		case 83:
			this.moveBackward = !1;
			break;
		case 39:
		case 68:
			this.moveRight = !1;
			break;
		case 82:
			this.moveUp = !1;
			break;
		case 70:
			this.moveDown = !1
		}
	};
	this.update = function () {
		var b = (new Date).getTime();
		this.tdiff = (b - this.lastUpdate) / 1E3;
		this.lastUpdate = b;
		if (!this.freeze) {
			this.autoSpeedFactor = this.heightSpeed ? this.tdiff * ((this.object.position.y < this.heightMin ? this.heightMin : this.object.position.y > this.heightMax ? this.heightMax : this.object.position.y) - this.heightMin) * this.heightCoef : 0;
			var e = this.tdiff * this.movementSpeed;
			(this.moveForward || this.autoForward && !this.moveBackward) && this.object.translateZ(-(e + this.autoSpeedFactor));
			this.moveBackward && this.object.translateZ(e);
			this.moveLeft && this.object.translateX(-e);
			this.moveRight && this.object.translateX(e);
			this.moveUp && this.object.translateY(e);
			this.moveDown && this.object.translateY(-e);
			e = this.tdiff * this.lookSpeed;
			this.activeLook || (e = 0);
			this.lon += this.mouseX * e;
			this.lookVertical && (this.lat -= this.mouseY * e);
			this.lat = Math.max(-85, Math.min(85, this.lat));
			this.phi = (90 - this.lat) * Math.PI / 180;
			this.theta = this.lon * Math.PI / 180;
			var b = this.target,
				c = this.object.position;
			b.x = c.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
			b.y = c.y + 100 * Math.cos(this.phi);
			b.z = c.z + 100 * Math.sin(this.phi) * Math.sin(this.theta)
		}
		b = 1;
		this.constrainVertical && (b = Math.PI / (this.verticalMax - this.verticalMin));
		this.lon += this.mouseX * e;
		this.lookVertical && (this.lat -= this.mouseY * e * b);
		this.lat = Math.max(-85, Math.min(85, this.lat));
		this.phi = (90 - this.lat) * Math.PI / 180;
		this.theta = this.lon * Math.PI / 180;
		if (this.constrainVertical) this.phi = (this.phi - 0) * (this.verticalMax - this.verticalMin) / (Math.PI - 0) + this.verticalMin;
		b = this.target;
		c = this.object.position;
		b.x = c.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
		b.y = c.y + 100 * Math.cos(this.phi);
		b.z = c.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);
		this.object.lookAt(b)
	};
	this.domElement.addEventListener("contextmenu", function (b) {
		b.preventDefault()
	}, !1);
	this.domElement.addEventListener("mousemove", e(this, this.onMouseMove), !1);
	this.domElement.addEventListener("mousedown", e(this, this.onMouseDown), !1);
	this.domElement.addEventListener("mouseup", e(this, this.onMouseUp), !1);
	this.domElement.addEventListener("keydown", e(this, this.onKeyDown), !1);
	this.domElement.addEventListener("keyup", e(this, this.onKeyUp), !1)
};
THREE.PathControls = function (b, c) {
	function e(b) {
		if ((b *= 2) < 1) return 0.5 * b * b;
		return -0.5 * (--b * (b - 2) - 1)
	}

	function f(b, e) {
		return function () {
			e.apply(b, arguments)
		}
	}

	function h(b, e, c, f) {
		var h = {
			name: c,
			fps: 0.6,
			length: f,
			hierarchy: []
		},
			k, m = e.getControlPointsArray(),
			n = e.getLength(),
			y = m.length,
			C = 0;
		k = y - 1;
		e = {
			parent: -1,
			keys: []
		};
		e.keys[0] = {
			time: 0,
			pos: m[0],
			rot: [0, 0, 0, 1],
			scl: [1, 1, 1]
		};
		e.keys[k] = {
			time: f,
			pos: m[k],
			rot: [0, 0, 0, 1],
			scl: [1, 1, 1]
		};
		for (k = 1; k < y - 1; k++) C = f * n.chunks[k] / n.total, e.keys[k] = {
			time: C,
			pos: m[k]
		};
		h.hierarchy[0] = e;
		THREE.AnimationHandler.add(h);
		return new THREE.Animation(b, c, THREE.AnimationHandler.CATMULLROM_FORWARD, !1)
	}

	function k(b, e) {
		var c, f, h = new THREE.Geometry;
		for (c = 0; c < b.points.length * e; c++) f = c / (b.points.length * e), f = b.getPoint(f), h.vertices[c] = new THREE.Vertex(new THREE.Vector3(f.x, f.y, f.z));
		return h
	}
	this.object = b;
	this.domElement = c !== void 0 ? c : document;
	this.id = "PathControls" + THREE.PathControlsIdCounter++;
	this.duration = 1E4;
	this.waypoints = [];
	this.useConstantSpeed = !0;
	this.resamplingCoef = 50;
	this.debugPath = new THREE.Object3D;
	this.debugDummy = new THREE.Object3D;
	this.animationParent = new THREE.Object3D;
	this.lookSpeed = 0.005;
	this.lookHorizontal = this.lookVertical = !0;
	this.verticalAngleMap = {
		srcRange: [0, 2 * Math.PI],
		dstRange: [0, 2 * Math.PI]
	};
	this.horizontalAngleMap = {
		srcRange: [0, 2 * Math.PI],
		dstRange: [0, 2 * Math.PI]
	};
	this.target = new THREE.Object3D;
	this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = 0;
	this.domElement === document ? (this.viewHalfX = window.innerWidth / 2, this.viewHalfY = window.innerHeight / 2) : (this.viewHalfX = this.domElement.offsetWidth / 2, this.viewHalfY = this.domElement.offsetHeight / 2, this.domElement.setAttribute("tabindex", -1));
	var m = Math.PI * 2,
		n = Math.PI / 180;
	this.update = function () {
		var b, c;
		this.lookHorizontal && (this.lon += this.mouseX * this.lookSpeed);
		this.lookVertical && (this.lat -= this.mouseY * this.lookSpeed);
		this.lon = Math.max(0, Math.min(360, this.lon));
		this.lat = Math.max(-85, Math.min(85, this.lat));
		this.phi = (90 - this.lat) * n;
		this.theta = this.lon * n;
		b = this.phi % m;
		this.phi = b >= 0 ? b : b + m;
		b = this.verticalAngleMap.srcRange;
		c = this.verticalAngleMap.dstRange;
		var f = c[1] - c[0];
		this.phi = e(((this.phi - b[0]) * (c[1] - c[0]) / (b[1] - b[0]) + c[0] - c[0]) / f) * f + c[0];
		b = this.horizontalAngleMap.srcRange;
		c = this.horizontalAngleMap.dstRange;
		f = c[1] - c[0];
		this.theta = e(((this.theta - b[0]) * (c[1] - c[0]) / (b[1] - b[0]) + c[0] - c[0]) / f) * f + c[0];
		b = this.target.position;
		b.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
		b.y = 100 * Math.cos(this.phi);
		b.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);
		this.object.lookAt(this.target.position)
	};
	this.onMouseMove = function (b) {
		this.domElement === document ? (this.mouseX = b.pageX - this.viewHalfX, this.mouseY = b.pageY - this.viewHalfY) : (this.mouseX = b.pageX - this.domElement.offsetLeft - this.viewHalfX, this.mouseY = b.pageY - this.domElement.offsetTop - this.viewHalfY)
	};
	this.init = function () {
		this.spline = new THREE.Spline;
		this.spline.initFromArray(this.waypoints);
		this.useConstantSpeed && this.spline.reparametrizeByArcLength(this.resamplingCoef);
		if (this.createDebugDummy) {
			var b = new THREE.MeshLambertMaterial({
				color: 30719
			}),
				e = new THREE.MeshLambertMaterial({
					color: 65280
				}),
				c = new THREE.CubeGeometry(10, 10, 20),
				m = new THREE.CubeGeometry(2, 2, 10);
			this.animationParent = new THREE.Mesh(c, b);
			b = new THREE.Mesh(m, e);
			b.position.set(0, 10, 0);
			this.animation = h(this.animationParent, this.spline, this.id, this.duration);
			this.animationParent.add(this.object);
			this.animationParent.add(this.target);
			this.animationParent.add(b)
		}
		else this.animation = h(this.animationParent, this.spline, this.id, this.duration), this.animationParent.add(this.target), this.animationParent.add(this.object);
		if (this.createDebugPath) {
			var b = this.debugPath,
				e = this.spline,
				c = k(e, 10),
				m = k(e, 10),
				n = new THREE.LineBasicMaterial({
					color: 16711680,
					linewidth: 3
				});
			lineObj = new THREE.Line(c, n);
			particleObj = new THREE.ParticleSystem(m, new THREE.ParticleBasicMaterial({
				color: 16755200,
				size: 3
			}));
			lineObj.scale.set(1, 1, 1);
			b.add(lineObj);
			particleObj.scale.set(1, 1, 1);
			b.add(particleObj);
			m = new THREE.SphereGeometry(1, 16, 8);
			n = new THREE.MeshBasicMaterial({
				color: 65280
			});
			for (i = 0; i < e.points.length; i++) c = new THREE.Mesh(m, n), c.position.copy(e.points[i]), b.add(c)
		}
		this.domElement.addEventListener("mousemove", f(this, this.onMouseMove), !1)
	}
};
THREE.PathControlsIdCounter = 0;
THREE.FlyControls = function (b, c) {
	function e(b, e) {
		return function () {
			e.apply(b, arguments)
		}
	}
	this.object = b;
	this.domElement = c !== void 0 ? c : document;
	c && this.domElement.setAttribute("tabindex", -1);
	this.movementSpeed = 1;
	this.rollSpeed = 0.005;
	this.autoForward = this.dragToLook = !1;
	this.object.useQuaternion = !0;
	this.tmpQuaternion = new THREE.Quaternion;
	this.mouseStatus = 0;
	this.moveState = {
		up: 0,
		down: 0,
		left: 0,
		right: 0,
		forward: 0,
		back: 0,
		pitchUp: 0,
		pitchDown: 0,
		yawLeft: 0,
		yawRight: 0,
		rollLeft: 0,
		rollRight: 0
	};
	this.moveVector = new THREE.Vector3(0, 0, 0);
	this.rotationVector = new THREE.Vector3(0, 0, 0);
	this.lastUpdate = -1;
	this.tdiff = 0;
	this.handleEvent = function (b) {
		if (typeof this[b.type] == "function") this[b.type](b)
	};
	this.keydown = function (b) {
		if (!b.altKey) {
			switch (b.keyCode) {
			case 16:
				this.movementSpeedMultiplier = 0.1;
				break;
			case 87:
				this.moveState.forward = 1;
				break;
			case 83:
				this.moveState.back = 1;
				break;
			case 65:
				this.moveState.left = 1;
				break;
			case 68:
				this.moveState.right = 1;
				break;
			case 82:
				this.moveState.up = 1;
				break;
			case 70:
				this.moveState.down = 1;
				break;
			case 38:
				this.moveState.pitchUp = 1;
				break;
			case 40:
				this.moveState.pitchDown = 1;
				break;
			case 37:
				this.moveState.yawLeft = 1;
				break;
			case 39:
				this.moveState.yawRight = 1;
				break;
			case 81:
				this.moveState.rollLeft = 1;
				break;
			case 69:
				this.moveState.rollRight = 1
			}
			this.updateMovementVector();
			this.updateRotationVector()
		}
	};
	this.keyup = function (b) {
		switch (b.keyCode) {
		case 16:
			this.movementSpeedMultiplier = 1;
			break;
		case 87:
			this.moveState.forward = 0;
			break;
		case 83:
			this.moveState.back = 0;
			break;
		case 65:
			this.moveState.left = 0;
			break;
		case 68:
			this.moveState.right = 0;
			break;
		case 82:
			this.moveState.up = 0;
			break;
		case 70:
			this.moveState.down = 0;
			break;
		case 38:
			this.moveState.pitchUp = 0;
			break;
		case 40:
			this.moveState.pitchDown = 0;
			break;
		case 37:
			this.moveState.yawLeft = 0;
			break;
		case 39:
			this.moveState.yawRight = 0;
			break;
		case 81:
			this.moveState.rollLeft = 0;
			break;
		case 69:
			this.moveState.rollRight = 0
		}
		this.updateMovementVector();
		this.updateRotationVector()
	};
	this.mousedown = function (b) {
		this.domElement !== document && this.domElement.focus();
		b.preventDefault();
		b.stopPropagation();
		if (this.dragToLook) this.mouseStatus++;
		else switch (b.button) {
		case 0:
			this.object.moveForward = !0;
			break;
		case 2:
			this.object.moveBackward = !0
		}
	};
	this.mousemove = function (b) {
		if (!this.dragToLook || this.mouseStatus > 0) {
			var e = this.getContainerDimensions(),
				c = e.size[0] / 2,
				m = e.size[1] / 2;
			this.moveState.yawLeft = -(b.pageX - e.offset[0] - c) / c;
			this.moveState.pitchDown = (b.pageY - e.offset[1] - m) / m;
			this.updateRotationVector()
		}
	};
	this.mouseup = function (b) {
		b.preventDefault();
		b.stopPropagation();
		if (this.dragToLook) this.mouseStatus--, this.moveState.yawLeft = this.moveState.pitchDown = 0;
		else switch (b.button) {
		case 0:
			this.moveForward = !1;
			break;
		case 2:
			this.moveBackward = !1
		}
		this.updateRotationVector()
	};
	this.update = function () {
		var b = (new Date).getTime();
		if (this.lastUpdate == -1) this.lastUpdate = b;
		this.tdiff = (b - this.lastUpdate) / 1E3;
		this.lastUpdate = b;
		var b = this.tdiff * this.movementSpeed,
			e = this.tdiff * this.rollSpeed;
		this.object.translateX(this.moveVector.x * b);
		this.object.translateY(this.moveVector.y * b);
		this.object.translateZ(this.moveVector.z * b);
		this.tmpQuaternion.set(this.rotationVector.x * e, this.rotationVector.y * e, this.rotationVector.z * e, 1).normalize();
		this.object.quaternion.multiplySelf(this.tmpQuaternion);
		this.object.matrix.setPosition(this.object.position);
		this.object.matrix.setRotationFromQuaternion(this.object.quaternion);
		this.object.matrixWorldNeedsUpdate = !0
	};
	this.updateMovementVector = function () {
		var b = this.moveState.forward || this.autoForward && !this.moveState.back ? 1 : 0;
		this.moveVector.x = -this.moveState.left + this.moveState.right;
		this.moveVector.y = -this.moveState.down + this.moveState.up;
		this.moveVector.z = -b + this.moveState.back
	};
	this.updateRotationVector = function () {
		this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
		this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
		this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft
	};
	this.getContainerDimensions = function () {
		return this.domElement != document ? {
			size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
			offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
		} : {
			size: [window.innerWidth, window.innerHeight],
			offset: [0,
				                0]
		}
	};
	this.domElement.addEventListener("mousemove", e(this, this.mousemove), !1);
	this.domElement.addEventListener("mousedown", e(this, this.mousedown), !1);
	this.domElement.addEventListener("mouseup", e(this, this.mouseup), !1);
	this.domElement.addEventListener("keydown", e(this, this.keydown), !1);
	this.domElement.addEventListener("keyup", e(this, this.keyup), !1);
	this.updateMovementVector();
	this.updateRotationVector()
};
THREE.RollControls = function (b, c) {
	this.object = b;
	this.domElement = c !== void 0 ? c : document;
	this.mouseLook = !0;
	this.autoForward = !1;
	this.rollSpeed = this.movementSpeed = this.lookSpeed = 1;
	this.constrainVertical = [-0.9, 0.9];
	this.object.matrixAutoUpdate = !1;
	this.forward = new THREE.Vector3(0, 0, 1);
	this.roll = 0;
	this.lastUpdate = -1;
	this.delta = 0;
	var e = new THREE.Vector3,
		f = new THREE.Vector3,
		h = new THREE.Vector3,
		k = new THREE.Matrix4,
		m = !1,
		n = 1,
		t = 0,
		u = 0,
		v = 0,
		p = 0,
		x = 0,
		w = window.innerWidth / 2,
		A = window.innerHeight / 2;
	this.update = function () {
		var b = (new Date).getTime();
		if (this.lastUpdate == -1) this.lastUpdate = b;
		this.delta = (b - this.lastUpdate) / 1E3;
		this.lastUpdate = b;
		this.mouseLook && (b = this.delta * this.lookSpeed, this.rotateHorizontally(b * p), this.rotateVertically(b * x));
		b = this.delta * this.movementSpeed;
		this.object.translateZ(-b * (t > 0 || this.autoForward && !(t < 0) ? 1 : t));
		this.object.translateX(b * u);
		this.object.translateY(b * v);
		m && (this.roll += this.rollSpeed * this.delta * n);
		if (this.forward.y > this.constrainVertical[1]) this.forward.y = this.constrainVertical[1], this.forward.normalize();
		else if (this.forward.y < this.constrainVertical[0]) this.forward.y = this.constrainVertical[0], this.forward.normalize();
		h.copy(this.forward);
		f.set(0, 1, 0);
		e.cross(f, h).normalize();
		f.cross(h, e).normalize();
		this.object.matrix.n11 = e.x;
		this.object.matrix.n12 = f.x;
		this.object.matrix.n13 = h.x;
		this.object.matrix.n21 = e.y;
		this.object.matrix.n22 = f.y;
		this.object.matrix.n23 = h.y;
		this.object.matrix.n31 = e.z;
		this.object.matrix.n32 = f.z;
		this.object.matrix.n33 = h.z;
		k.identity();
		k.n11 = Math.cos(this.roll);
		k.n12 = -Math.sin(this.roll);
		k.n21 = Math.sin(this.roll);
		k.n22 = Math.cos(this.roll);
		this.object.matrix.multiplySelf(k);
		this.object.matrixWorldNeedsUpdate = !0;
		this.object.matrix.n14 = this.object.position.x;
		this.object.matrix.n24 = this.object.position.y;
		this.object.matrix.n34 = this.object.position.z
	};
	this.translateX = function (b) {
		this.object.position.x += this.object.matrix.n11 * b;
		this.object.position.y += this.object.matrix.n21 * b;
		this.object.position.z += this.object.matrix.n31 * b
	};
	this.translateY = function (b) {
		this.object.position.x += this.object.matrix.n12 * b;
		this.object.position.y += this.object.matrix.n22 * b;
		this.object.position.z += this.object.matrix.n32 * b
	};
	this.translateZ = function (b) {
		this.object.position.x -= this.object.matrix.n13 * b;
		this.object.position.y -= this.object.matrix.n23 * b;
		this.object.position.z -= this.object.matrix.n33 * b
	};
	this.rotateHorizontally = function (b) {
		e.set(this.object.matrix.n11, this.object.matrix.n21, this.object.matrix.n31);
		e.multiplyScalar(b);
		this.forward.subSelf(e);
		this.forward.normalize()
	};
	this.rotateVertically = function (b) {
		f.set(this.object.matrix.n12, this.object.matrix.n22, this.object.matrix.n32);
		f.multiplyScalar(b);
		this.forward.addSelf(f);
		this.forward.normalize()
	};
	this.domElement.addEventListener("contextmenu", function (b) {
		b.preventDefault()
	}, !1);
	this.domElement.addEventListener("mousemove", function (b) {
		p = (b.clientX - w) / window.innerWidth;
		x = (b.clientY - A) / window.innerHeight
	}, !1);
	this.domElement.addEventListener("mousedown", function (b) {
		b.preventDefault();
		b.stopPropagation();
		switch (b.button) {
		case 0:
			t = 1;
			break;
		case 2:
			t = -1
		}
	}, !1);
	this.domElement.addEventListener("mouseup", function (b) {
		b.preventDefault();
		b.stopPropagation();
		switch (b.button) {
		case 0:
			t = 0;
			break;
		case 2:
			t = 0
		}
	}, !1);
	this.domElement.addEventListener("keydown", function (b) {
		switch (b.keyCode) {
		case 38:
		case 87:
			t = 1;
			break;
		case 37:
		case 65:
			u = -1;
			break;
		case 40:
		case 83:
			t = -1;
			break;
		case 39:
		case 68:
			u = 1;
			break;
		case 81:
			m = !0;
			n = 1;
			break;
		case 69:
			m = !0;
			n = -1;
			break;
		case 82:
			v = 1;
			break;
		case 70:
			v = -1
		}
	}, !1);
	this.domElement.addEventListener("keyup", function (b) {
		switch (b.keyCode) {
		case 38:
		case 87:
			t = 0;
			break;
		case 37:
		case 65:
			u = 0;
			break;
		case 40:
		case 83:
			t = 0;
			break;
		case 39:
		case 68:
			u = 0;
			break;
		case 81:
			m = !1;
			break;
		case 69:
			m = !1;
			break;
		case 82:
			v = 0;
			break;
		case 70:
			v = 0
		}
	}, !1)
};
THREE.TrackballControls = function (b, c) {
	function e(b, e) {
		return function () {
			e.apply(b, arguments)
		}
	}
	this.object = b;
	this.domElement = c !== void 0 ? c : document;
	this.screen = {
		width: window.innerWidth,
		height: window.innerHeight,
		offsetLeft: 0,
		offsetTop: 0
	};
	this.radius = (this.screen.width + this.screen.height) / 4;
	this.rotateSpeed = 1;
	this.zoomSpeed = 1.2;
	this.panSpeed = 0.3;
	this.staticMoving = this.noPan = this.noZoom = !1;
	this.dynamicDampingFactor = 0.2;
	this.minDistance = 0;
	this.maxDistance = Infinity;
	this.keys = [65, 83, 68];
	this.target = new THREE.Vector3(0, 0, 0);
	var f = !1,
		h = this.STATE.NONE,
		k = new THREE.Vector3,
		m = new THREE.Vector3,
		n = new THREE.Vector3,
		t = new THREE.Vector2,
		u = new THREE.Vector2,
		v = new THREE.Vector2,
		p = new THREE.Vector2;
	this.handleEvent = function (b) {
		if (typeof this[b.type] == "function") this[b.type](b)
	};
	this.getMouseOnScreen = function (b, e) {
		return new THREE.Vector2((b - this.screen.offsetLeft) / this.radius * 0.5, (e - this.screen.offsetTop) / this.radius * 0.5)
	};
	this.getMouseProjectionOnBall = function (b, e) {
		var c = new THREE.Vector3((b - this.screen.width * 0.5 - this.screen.offsetLeft) / this.radius, (this.screen.height * 0.5 + this.screen.offsetTop - e) / this.radius, 0),
			f = c.length();
		f > 1 ? c.normalize() : c.z = Math.sqrt(1 - f * f);
		k.copy(this.object.position).subSelf(this.target);
		f = this.object.up.clone().setLength(c.y);
		f.addSelf(this.object.up.clone().crossSelf(k).setLength(c.x));
		f.addSelf(k.setLength(c.z));
		return f
	};
	this.rotateCamera = function () {
		var b = Math.acos(m.dot(n) / m.length() / n.length());
		if (b) {
			var e = (new THREE.Vector3).cross(m, n).normalize(),
				c = new THREE.Quaternion;
			b *= this.rotateSpeed;
			c.setFromAxisAngle(e, -b);
			c.multiplyVector3(k);
			c.multiplyVector3(this.object.up);
			c.multiplyVector3(n);
			this.staticMoving ? m = n : (c.setFromAxisAngle(e, b * (this.dynamicDampingFactor - 1)), c.multiplyVector3(m))
		}
	};
	this.zoomCamera = function () {
		var b = 1 + (u.y - t.y) * this.zoomSpeed;
		b !== 1 && b > 0 && (k.multiplyScalar(b), this.staticMoving ? t = u : t.y += (u.y - t.y) * this.dynamicDampingFactor)
	};
	this.panCamera = function () {
		var b = p.clone().subSelf(v);
		if (b.lengthSq()) {
			b.multiplyScalar(k.length() * this.panSpeed);
			var e = k.clone().crossSelf(this.object.up).setLength(b.x);
			e.addSelf(this.object.up.clone().setLength(b.y));
			this.object.position.addSelf(e);
			this.target.addSelf(e);
			this.staticMoving ? v = p : v.addSelf(b.sub(p, v).multiplyScalar(this.dynamicDampingFactor))
		}
	};
	this.checkDistances = function () {
		if (!this.noZoom || !this.noPan) this.object.position.lengthSq() > this.maxDistance * this.maxDistance && this.object.position.setLength(this.maxDistance), k.lengthSq() < this.minDistance * this.minDistance && this.object.position.add(this.target, k.setLength(this.minDistance))
	};
	this.update = function () {
		k.copy(this.object.position).subSelf(this.target);
		this.rotateCamera();
		this.noZoom || this.zoomCamera();
		this.noPan || this.panCamera();
		this.object.position.add(this.target, k);
		this.checkDistances();
		this.object.lookAt(this.target)
	};
	this.domElement.addEventListener("contextmenu", function (b) {
		b.preventDefault()
	}, !1);
	this.domElement.addEventListener("mousemove", e(this, function (b) {
		f && (m = n = this.getMouseProjectionOnBall(b.clientX, b.clientY), t = u = this.getMouseOnScreen(b.clientX, b.clientY), v = p = this.getMouseOnScreen(b.clientX, b.clientY), f = !1);
		h !== this.STATE.NONE && (h === this.STATE.ROTATE ? n = this.getMouseProjectionOnBall(b.clientX, b.clientY) : h === this.STATE.ZOOM && !this.noZoom ? u = this.getMouseOnScreen(b.clientX, b.clientY) : h === this.STATE.PAN && !this.noPan && (p = this.getMouseOnScreen(b.clientX, b.clientY)))
	}), !1);
	this.domElement.addEventListener("mousedown", e(this, function (b) {
		b.preventDefault();
		b.stopPropagation();
		if (h === this.STATE.NONE) h = b.button, h === this.STATE.ROTATE ? m = n = this.getMouseProjectionOnBall(b.clientX, b.clientY) : h === this.STATE.ZOOM && !this.noZoom ? t = u = this.getMouseOnScreen(b.clientX, b.clientY) : this.noPan || (v = p = this.getMouseOnScreen(b.clientX, b.clientY))
	}), !1);
	this.domElement.addEventListener("mouseup", e(this, function (b) {
		b.preventDefault();
		b.stopPropagation();
		h = this.STATE.NONE
	}), !1);
	window.addEventListener("keydown", e(this, function (b) {
		if (h === this.STATE.NONE) {
			if (b.keyCode === this.keys[this.STATE.ROTATE]) h = this.STATE.ROTATE;
			else if (b.keyCode === this.keys[this.STATE.ZOOM] && !this.noZoom) h = this.STATE.ZOOM;
			else if (b.keyCode === this.keys[this.STATE.PAN] && !this.noPan) h = this.STATE.PAN;
			h !== this.STATE.NONE && (f = !0)
		}
	}), !1);
	window.addEventListener("keyup", e(this, function () {
		if (h !== this.STATE.NONE) h = this.STATE.NONE
	}), !1)
};
THREE.TrackballControls.prototype.STATE = {
	NONE: -1,
	ROTATE: 0,
	ZOOM: 1,
	PAN: 2
};
THREE.CubeGeometry = function (b, c, e, f, h, k, m, n) {
	function t(b, e, c, m, n, p, t, w) {
		var v, x, A = f || 1,
			Z = h || 1,
			L = n / 2,
			P = p / 2,
			U = u.vertices.length;
		if (b == "x" && e == "y" || b == "y" && e == "x") v = "z";
		else if (b == "x" && e == "z" || b == "z" && e == "x") v = "y", Z = k || 1;
		else if (b == "z" && e == "y" || b == "y" && e == "z") v = "x", A = k || 1;
		var Y = A + 1,
			X = Z + 1;
		n /= A;
		var o = p / Z;
		for (x = 0; x < X; x++) for (p = 0; p < Y; p++) {
			var ea = new THREE.Vector3;
			ea[b] = (p * n - L) * c;
			ea[e] = (x * o - P) * m;
			ea[v] = t;
			u.vertices.push(new THREE.Vertex(ea))
		}
		for (x = 0; x < Z; x++) for (p = 0; p < A; p++) u.faces.push(new THREE.Face4(p + Y * x + U, p + Y * (x + 1) + U, p + 1 + Y * (x + 1) + U, p + 1 + Y * x + U, null, null, w)), u.faceVertexUvs[0].push([new THREE.UV(p / A, x / Z), new THREE.UV(p / A, (x + 1) / Z), new THREE.UV((p + 1) / A, (x + 1) / Z), new THREE.UV((p + 1) / A, x / Z)])
	}
	THREE.Geometry.call(this);
	var u = this,
		v = b / 2,
		p = c / 2,
		x = e / 2;
	if (m !== void 0) if (m instanceof Array) this.materials = m;
	else {
		this.materials = [];
		for (var w = 0; w < 6; w++) this.materials.push([m])
	}
	else this.materials = [];
	this.sides = {
		px: !0,
		nx: !0,
		py: !0,
		ny: !0,
		pz: !0,
		nz: !0
	};
	if (n != void 0) for (var A in n) this.sides[A] != void 0 && (this.sides[A] = n[A]);
	this.sides.px && t("z", "y", -1, -1, e, c, v, this.materials[0]);
	this.sides.nx && t("z", "y", 1, -1, e, c, -v, this.materials[1]);
	this.sides.py && t("x", "z", 1, 1, b, e, p, this.materials[2]);
	this.sides.ny && t("x", "z", 1, -1, b, e, -p, this.materials[3]);
	this.sides.pz && t("x", "y", 1, -1, b, c, x, this.materials[4]);
	this.sides.nz && t("x", "y", -1, -1, b, c, -x, this.materials[5]);
	this.mergeVertices();
	this.computeCentroids();
	this.computeFaceNormals()
};
THREE.CubeGeometry.prototype = new THREE.Geometry;
THREE.CubeGeometry.prototype.constructor = THREE.CubeGeometry;
THREE.CylinderGeometry = function (b, c, e, f, h, k) {
	THREE.Geometry.call(this);
	var b = b != null ? b : 20,
		c = c != null ? c : 20,
		e = e || 100,
		m = e / 2,
		f = f || 8,
		h = h || 1,
		n, t, u = [],
		v = [];
	for (t = 0; t <= h; t++) {
		var p = [],
			x = [],
			w = t / h,
			A = w * (c - b) + b;
		for (n = 0; n <= f; n++) {
			var z = n / f;
			this.vertices.push(new THREE.Vertex(new THREE.Vector3(A * Math.sin(z * Math.PI * 2), -w * e + m, A * Math.cos(z * Math.PI * 2))));
			p.push(this.vertices.length - 1);
			x.push(new THREE.UV(z, w))
		}
		u.push(p);
		v.push(x)
	}
	for (t = 0; t < h; t++) for (n = 0; n < f; n++) {
		var e = u[t][n],
			p = u[t + 1][n],
			x = u[t + 1][n + 1],
			w = u[t][n + 1],
			A = this.vertices[e].position.clone().setY(0).normalize(),
			z = this.vertices[p].position.clone().setY(0).normalize(),
			y = this.vertices[x].position.clone().setY(0).normalize(),
			C = this.vertices[w].position.clone().setY(0).normalize(),
			E = v[t][n].clone(),
			D = v[t + 1][n].clone(),
			F = v[t + 1][n + 1].clone(),
			M = v[t][n + 1].clone();
		this.faces.push(new THREE.Face4(e, p, x, w, [A, z, y, C]));
		this.faceVertexUvs[0].push([E, D, F, M])
	}
	if (!k && b > 0) {
		this.vertices.push(new THREE.Vertex(new THREE.Vector3(0, m, 0)));
		for (n = 0; n < f; n++) e = u[0][n], p = u[0][n +
			            1], x = this.vertices.length - 1, A = new THREE.Vector3(0, 1, 0), z = new THREE.Vector3(0, 1, 0), y = new THREE.Vector3(0, 1, 0), E = v[0][n].clone(), D = v[0][n + 1].clone(), F = new THREE.UV(D.u, 0), this.faces.push(new THREE.Face3(e, p, x, [A, z, y])), this.faceVertexUvs[0].push([E, D, F])
	}
	if (!k && c > 0) {
		this.vertices.push(new THREE.Vertex(new THREE.Vector3(0, -m, 0)));
		for (n = 0; n < f; n++) e = u[t][n + 1], p = u[t][n], x = this.vertices.length - 1, A = new THREE.Vector3(0, -1, 0), z = new THREE.Vector3(0, -1, 0), y = new THREE.Vector3(0, -1, 0), E = v[t][n + 1].clone(), D = v[t][n].clone(), F = new THREE.UV(D.u, 1), this.faces.push(new THREE.Face3(e, p, x, [A, z, y])), this.faceVertexUvs[0].push([E, D, F])
	}
	this.computeCentroids();
	this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = new THREE.Geometry;
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry;
THREE.ExtrudeGeometry = function (b, c) {
	if (typeof b != "undefined") {
		THREE.Geometry.call(this);
		var b = b instanceof Array ? b : [b],
			e, f = b.length,
			h;
		this.shapebb = b[f - 1].getBoundingBox();
		for (e = 0; e < f; e++) h = b[e], this.addShape(h, c);
		this.computeCentroids();
		this.computeFaceNormals()
	}
};
THREE.ExtrudeGeometry.prototype = new THREE.Geometry;
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShape = function (b, c) {
	function e(b, e, c) {
		e || console.log("die");
		return e.clone().multiplyScalar(c).addSelf(b)
	}

	function f(b, e, c) {
		var f = THREE.ExtrudeGeometry.__v1,
			h = THREE.ExtrudeGeometry.__v2,
			k = THREE.ExtrudeGeometry.__v3,
			m = THREE.ExtrudeGeometry.__v4,
			n = THREE.ExtrudeGeometry.__v5,
			o = THREE.ExtrudeGeometry.__v6;
		f.set(b.x - e.x, b.y - e.y);
		h.set(b.x - c.x, b.y - c.y);
		f = f.normalize();
		h = h.normalize();
		k.set(-f.y, f.x);
		m.set(h.y, -h.x);
		n.copy(b).addSelf(k);
		o.copy(b).addSelf(m);
		if (n.equals(o)) return m.clone();
		n.copy(e).addSelf(k);
		o.copy(c).addSelf(m);
		k = f.dot(m);
		m = o.subSelf(n).dot(m);
		k == 0 && (console.log("Either infinite or no solutions!"), m == 0 ? console.log("Its finite solutions.") : console.log("Too bad, no solutions."));
		m /= k;
		if (m < 0) return e = Math.atan2(e.y - b.y, e.x - b.x), b = Math.atan2(c.y - b.y, c.x - b.x), e > b && (b += Math.PI * 2), anglec = (e + b) / 2, new THREE.Vector2(-Math.cos(anglec), -Math.sin(anglec));
		return f.multiplyScalar(m).addSelf(n).subSelf(b).clone()
	}

	function h(b) {
		for (L = b.length; --L >= 0;) {
			la = L;
			ga = L - 1;
			ga < 0 && (ga = b.length - 1);
			for (var e = 0, c = w + v * 2, e = 0; e < c; e++) {
				var f = ea * e,
					h = ea * (e + 1),
					k = $ + la + f,
					m = $ + la + h,
					o = k,
					f = $ + ga + f,
					h = $ + ga + h,
					p = m;
				o += Z;
				f += Z;
				h += Z;
				p += Z;
				K.faces.push(new THREE.Face4(o, f, h, p, null, null, F));
				F && (o = e / c, f = (e + 1) / c, h = n + t * 2, k = (K.vertices[k].position.z + t) / h, m = (K.vertices[m].position.z + t) / h, K.faceVertexUvs[0].push([new THREE.UV(k, o), new THREE.UV(m, o), new THREE.UV(m, f), new THREE.UV(k, f)]))
			}
		}
	}

	function k(b, e, c) {
		K.vertices.push(new THREE.Vertex(new THREE.Vector3(b, e, c)))
	}

	function m(b, e, c) {
		b += Z;
		e += Z;
		c += Z;
		K.faces.push(new THREE.Face3(b, e, c, null, null, D));
		if (D) {
			var f = M.maxY,
				h = M.maxX,
				k = K.vertices[e].position.x,
				e = K.vertices[e].position.y,
				m = K.vertices[c].position.x,
				c = K.vertices[c].position.y;
			K.faceVertexUvs[0].push([new THREE.UV(K.vertices[b].position.x / h, K.vertices[b].position.y / f), new THREE.UV(k / h, e / f), new THREE.UV(m / h, c / f)])
		}
	}
	var n = c.amount !== void 0 ? c.amount : 100,
		t = c.bevelThickness !== void 0 ? c.bevelThickness : 6,
		u = c.bevelSize !== void 0 ? c.bevelSize : t - 2,
		v = c.bevelSegments !== void 0 ? c.bevelSegments : 3,
		p = c.bevelEnabled !== void 0 ? c.bevelEnabled : !0,
		x = c.curveSegments !== void 0 ? c.curveSegments : 12,
		w = c.steps !== void 0 ? c.steps : 1,
		A = c.bendPath,
		z = c.extrudePath,
		y, C = !1,
		E = c.useSpacedPoints !== void 0 ? c.useSpacedPoints : !1,
		D = c.material,
		F = c.extrudeMaterial,
		M = this.shapebb;
	if (z) y = z.getPoints(x), w = y.length, C = !0, p = !1;
	p || (u = t = v = 0);
	var N, G, H, K = this,
		Z = this.vertices.length;
	A && b.addWrapPath(A);
	x = E ? b.extractAllSpacedPoints(x) : b.extractAllPoints(x);
	A = x.shape;
	x = x.holes;
	if (z = !THREE.Shape.Utils.isClockWise(A)) {
		A = A.reverse();
		G = 0;
		for (H = x.length; G < H; G++) N = x[G], THREE.Shape.Utils.isClockWise(N) && (x[G] = N.reverse());
		z = !1
	}
	z = THREE.Shape.Utils.triangulateShape(A, x);
	E = A;
	G = 0;
	for (H = x.length; G < H; G++) N = x[G], A = A.concat(N);
	var L, P, U, Y, X, o, ea = A.length,
		R = z.length,
		pa = [];
	L = 0;
	P = E.length;
	la = P - 1;
	for (ga = L + 1; L < P; L++, la++, ga++) la == P && (la = 0), ga == P && (ga = 0), pa[L] = f(E[L], E[la], E[ga]);
	var fa = [],
		ma, da = pa.concat();
	G = 0;
	for (H = x.length; G < H; G++) {
		N = x[G];
		ma = [];
		L = 0;
		P = N.length;
		la = P - 1;
		for (ga = L + 1; L < P; L++, la++, ga++) la == P && (la = 0), ga == P && (ga = 0), ma[L] = f(N[L], N[la], N[ga]);
		fa.push(ma);
		da = da.concat(ma)
	}
	for (U = 0; U < v; U++) {
		Y = U / v;
		X = t * (1 - Y);
		Y = u * Math.sin(Y * Math.PI / 2);
		L = 0;
		for (P = E.length; L < P; L++) o = e(E[L], pa[L], Y), k(o.x, o.y, -X);
		G = 0;
		for (H = x.length; G < H; G++) {
			N = x[G];
			ma = fa[G];
			L = 0;
			for (P = N.length; L < P; L++) o = e(N[L], ma[L], Y), k(o.x, o.y, -X)
		}
	}
	Y = u;
	for (L = 0; L < ea; L++) o = p ? e(A[L], da[L], Y) : A[L], C ? k(o.x, o.y + y[0].y, y[0].x) : k(o.x, o.y, 0);
	for (U = 1; U <= w; U++) for (L = 0; L < ea; L++) o = p ? e(A[L], da[L], Y) : A[L], C ? k(o.x, o.y + y[U - 1].y, y[U - 1].x) : k(o.x, o.y, n / w * U);
	for (U = v - 1; U >= 0; U--) {
		Y = U / v;
		X = t * (1 - Y);
		Y = u * Math.sin(Y * Math.PI / 2);
		L = 0;
		for (P = E.length; L < P; L++) o = e(E[L], pa[L], Y), k(o.x, o.y, n + X);
		G = 0;
		for (H = x.length; G < H; G++) {
			N = x[G];
			ma = fa[G];
			L = 0;
			for (P = N.length; L < P; L++) o = e(N[L], ma[L], Y), C ? k(o.x, o.y + y[w - 1].y, y[w - 1].x + X) : k(o.x, o.y, n + X)
		}
	}
	if (p) {
		p = ea * 0;
		for (L = 0; L < R; L++) u = z[L], m(u[2] + p, u[1] + p, u[0] + p);
		p = ea * (w + v * 2);
		for (L = 0; L < R; L++) u = z[L], m(u[0] + p, u[1] + p, u[2] + p)
	}
	else {
		for (L = 0; L < R; L++) u = z[L], m(u[2], u[1], u[0]);
		for (L = 0; L < R; L++) u = z[L], m(u[0] + ea * w, u[1] + ea * w, u[2] + ea * w)
	}
	var la, ga, $ = 0;
	h(E);
	$ += E.length;
	G = 0;
	for (H = x.length; G < H; G++) N = x[G], h(N), $ += N.length
};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.IcosahedronGeometry = function (b) {
	function c(b, e, c) {
		var f = Math.sqrt(b * b + e * e + c * c);
		return h.vertices.push(new THREE.Vertex(new THREE.Vector3(b / f, e / f, c / f))) - 1
	}

	function e(b, e, c, f) {
		f.faces.push(new THREE.Face3(b, e, c))
	}

	function f(b, e) {
		var f = h.vertices[b].position,
			k = h.vertices[e].position;
		return c((f.x + k.x) / 2, (f.y + k.y) / 2, (f.z + k.z) / 2)
	}
	var h = this,
		k = new THREE.Geometry;
	this.subdivisions = b || 0;
	THREE.Geometry.call(this);
	b = (1 + Math.sqrt(5)) / 2;
	c(-1, b, 0);
	c(1, b, 0);
	c(-1, -b, 0);
	c(1, -b, 0);
	c(0, -1, b);
	c(0, 1, b);
	c(0, -1, -b);
	c(0, 1, -b);
	c(b, 0, -1);
	c(b, 0, 1);
	c(-b, 0, -1);
	c(-b, 0, 1);
	e(0, 11, 5, k);
	e(0, 5, 1, k);
	e(0, 1, 7, k);
	e(0, 7, 10, k);
	e(0, 10, 11, k);
	e(1, 5, 9, k);
	e(5, 11, 4, k);
	e(11, 10, 2, k);
	e(10, 7, 6, k);
	e(7, 1, 8, k);
	e(3, 9, 4, k);
	e(3, 4, 2, k);
	e(3, 2, 6, k);
	e(3, 6, 8, k);
	e(3, 8, 9, k);
	e(4, 9, 5, k);
	e(2, 4, 11, k);
	e(6, 2, 10, k);
	e(8, 6, 7, k);
	e(9, 8, 1, k);
	for (var m = 0; m < this.subdivisions; m++) {
		var b = new THREE.Geometry,
			n;
		for (n in k.faces) {
			var t = f(k.faces[n].a, k.faces[n].b),
				u = f(k.faces[n].b, k.faces[n].c),
				v = f(k.faces[n].c, k.faces[n].a);
			e(k.faces[n].a, t, v, b);
			e(k.faces[n].b, u, t, b);
			e(k.faces[n].c, v, u, b);
			e(t, u, v, b)
		}
		k.faces = b.faces
	}
	h.faces = k.faces;
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.IcosahedronGeometry.prototype = new THREE.Geometry;
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;
THREE.LatheGeometry = function (b, c, e) {
	THREE.Geometry.call(this);
	this.steps = c || 12;
	this.angle = e || 2 * Math.PI;
	for (var c = this.angle / this.steps, e = [], f = [], h = [], k = [], m = (new THREE.Matrix4).setRotationZ(c), n = 0; n < b.length; n++) this.vertices.push(new THREE.Vertex(b[n])), e[n] = b[n].clone(), f[n] = this.vertices.length - 1;
	for (var t = 0; t <= this.angle + 0.001; t += c) {
		for (n = 0; n < e.length; n++) t < this.angle ? (e[n] = m.multiplyVector3(e[n].clone()), this.vertices.push(new THREE.Vertex(e[n])), h[n] = this.vertices.length - 1) : h = k;
		t == 0 && (k = f);
		for (n = 0; n < f.length - 1; n++) this.faces.push(new THREE.Face4(h[n], h[n + 1], f[n + 1], f[n])), this.faceVertexUvs[0].push([new THREE.UV(1 - t / this.angle, n / b.length), new THREE.UV(1 - t / this.angle, (n + 1) / b.length), new THREE.UV(1 - (t - c) / this.angle, (n + 1) / b.length), new THREE.UV(1 - (t - c) / this.angle, n / b.length)]);
		f = h;
		h = []
	}
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = new THREE.Geometry;
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry;
THREE.OctahedronGeometry = function (b, c) {
	function e(e) {
		var c = e.clone().normalize(),
			c = new THREE.Vertex(c.clone().multiplyScalar(b));
		c.index = m.vertices.push(c) - 1;
		c.uv = new THREE.UV(Math.atan2(e.z, -e.x) / 2 / Math.PI + 0.5, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + 0.5);
		return c
	}

	function f(b, e, c, n) {
		n < 1 ? (n = new THREE.Face3(b.index, e.index, c.index, [b.position, e.position, c.position]), n.centroid.addSelf(b.position).addSelf(e.position).addSelf(c.position).divideScalar(3), n.normal = n.centroid.clone().normalize(), m.faces.push(n), n = Math.atan2(n.centroid.z, -n.centroid.x), m.faceVertexUvs[0].push([k(b.uv, b.position, n), k(e.uv, e.position, n), k(c.uv, c.position, n)])) : (n -= 1, f(b, h(b, e), h(b, c), n), f(h(b, e), e, h(e, c), n), f(h(b, c), h(e, c), c, n), f(h(b, e), h(e, c), h(b, c), n))
	}

	function h(b, c) {
		n[b.index] || (n[b.index] = []);
		n[c.index] || (n[c.index] = []);
		var f = n[b.index][c.index];
		f === void 0 && (n[b.index][c.index] = n[c.index][b.index] = f = e((new THREE.Vector3).add(b.position, c.position).divideScalar(2)));
		return f
	}

	function k(b, e, c) {
		c < 0 && b.u === 1 && (b = new THREE.UV(b.u - 1, b.v));
		e.x === 0 && e.z === 0 && (b = new THREE.UV(c / 2 / Math.PI + 0.5, b.v));
		return b
	}
	THREE.Geometry.call(this);
	var c = isFinite(c) ? c : 3,
		m = this;
	e(new THREE.Vector3(1, 0, 0));
	e(new THREE.Vector3(-1, 0, 0));
	e(new THREE.Vector3(0, 1, 0));
	e(new THREE.Vector3(0, -1, 0));
	e(new THREE.Vector3(0, 0, 1));
	e(new THREE.Vector3(0, 0, -1));
	var n = [],
		t = this.vertices;
	f(t[0], t[2], t[4], c);
	f(t[0], t[4], t[3], c);
	f(t[0], t[3], t[5], c);
	f(t[0], t[5], t[2], c);
	f(t[1], t[2], t[5], c);
	f(t[1], t[5], t[3], c);
	f(t[1], t[3], t[4], c);
	f(t[1], t[4], t[2], c);
	this.boundingSphere = {
		radius: b
	}
};
THREE.OctahedronGeometry.prototype = new THREE.Geometry;
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry;
THREE.PlaneGeometry = function (b, c, e, f) {
	THREE.Geometry.call(this);
	var h, k = b / 2,
		m = c / 2,
		e = e || 1,
		f = f || 1,
		n = e + 1,
		t = f + 1;
	b /= e;
	var u = c / f;
	for (h = 0; h < t; h++) for (c = 0; c < n; c++) this.vertices.push(new THREE.Vertex(new THREE.Vector3(c * b - k, -(h * u - m), 0)));
	for (h = 0; h < f; h++) for (c = 0; c < e; c++) this.faces.push(new THREE.Face4(c + n * h, c + n * (h + 1), c + 1 + n * (h + 1), c + 1 + n * h)), this.faceVertexUvs[0].push([new THREE.UV(c / e, h / f), new THREE.UV(c / e, (h + 1) / f), new THREE.UV((c + 1) / e, (h + 1) / f), new THREE.UV((c + 1) / e, h / f)]);
	this.computeCentroids();
	this.computeFaceNormals()
};
THREE.PlaneGeometry.prototype = new THREE.Geometry;
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;
THREE.SphereGeometry = function (b, c, e) {
	THREE.Geometry.call(this);
	for (var b = b || 50, f, h = Math.PI, k = Math.max(3, c || 8), m = Math.max(2, e || 6), c = [], e = 0; e < m + 1; e++) {
		f = e / m;
		var n = b * Math.cos(f * h),
			t = b * Math.sin(f * h),
			u = [],
			v = 0;
		for (f = 0; f < k; f++) {
			var p = 2 * f / k,
				x = t * Math.sin(p * h),
				p = t * Math.cos(p * h);
			(e == 0 || e == m) && f > 0 || (v = this.vertices.push(new THREE.Vertex(new THREE.Vector3(p, n, x))) - 1);
			u.push(v)
		}
		c.push(u)
	}
	for (var w, A, z, h = c.length, e = 0; e < h; e++) if (k = c[e].length, e > 0) for (f = 0; f < k; f++) {
		u = f == k - 1;
		m = c[e][u ? 0 : f + 1];
		n = c[e][u ? k - 1 : f];
		t = c[e - 1][u ?
			            k - 1 : f];
		u = c[e - 1][u ? 0 : f + 1];
		x = e / (h - 1);
		w = (e - 1) / (h - 1);
		A = (f + 1) / k;
		var p = f / k,
			v = new THREE.UV(1 - A, x),
			x = new THREE.UV(1 - p, x),
			p = new THREE.UV(1 - p, w),
			y = new THREE.UV(1 - A, w);
		e < c.length - 1 && (w = this.vertices[m].position.clone(), A = this.vertices[n].position.clone(), z = this.vertices[t].position.clone(), w.normalize(), A.normalize(), z.normalize(), this.faces.push(new THREE.Face3(m, n, t, [new THREE.Vector3(w.x, w.y, w.z), new THREE.Vector3(A.x, A.y, A.z), new THREE.Vector3(z.x, z.y, z.z)])), this.faceVertexUvs[0].push([v, x, p]));
		e > 1 && (w = this.vertices[m].position.clone(), A = this.vertices[t].position.clone(), z = this.vertices[u].position.clone(), w.normalize(), A.normalize(), z.normalize(), this.faces.push(new THREE.Face3(m, t, u, [new THREE.Vector3(w.x, w.y, w.z), new THREE.Vector3(A.x, A.y, A.z), new THREE.Vector3(z.x, z.y, z.z)])), this.faceVertexUvs[0].push([v, p, y]))
	}
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
	this.boundingSphere = {
		radius: b
	}
};
THREE.SphereGeometry.prototype = new THREE.Geometry;
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;
THREE.TextGeometry = function (b, c) {
	var e = (new THREE.TextPath(b, c)).toShapes();
	c.amount = c.height !== void 0 ? c.height : 50;
	if (c.bevelThickness === void 0) c.bevelThickness = 10;
	if (c.bevelSize === void 0) c.bevelSize = 8;
	if (c.bevelEnabled === void 0) c.bevelEnabled = !1;
	if (c.bend) {
		var f = e[e.length - 1].getBoundingBox().maxX;
		c.bendPath = new THREE.QuadraticBezierCurve(new THREE.Vector2(0, 0), new THREE.Vector2(f / 2, 120), new THREE.Vector2(f, 0))
	}
	THREE.ExtrudeGeometry.call(this, e, c)
};
THREE.TextGeometry.prototype = new THREE.ExtrudeGeometry;
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry;
THREE.FontUtils = {
	faces: {},
	face: "helvetiker",
	weight: "normal",
	style: "normal",
	size: 150,
	divisions: 10,
	getFace: function () {
		return this.faces[this.face][this.weight][this.style]
	},
	getTextShapes: function (b, c) {
		return (new TextPath(b, c)).toShapes()
	},
	loadFace: function (b) {
		var c = b.familyName.toLowerCase();
		this.faces[c] = this.faces[c] || {};
		this.faces[c][b.cssFontWeight] = this.faces[c][b.cssFontWeight] || {};
		this.faces[c][b.cssFontWeight][b.cssFontStyle] = b;
		return this.faces[c][b.cssFontWeight][b.cssFontStyle] = b
	},
	drawText: function (b) {
		for (var c = this.getFace(), e = this.size / c.resolution, f = 0, h = String(b).split(""), k = h.length, m = [], b = 0; b < k; b++) {
			var n = new THREE.Path,
				n = this.extractGlyphPoints(h[b], c, e, f, n);
			f += n.offset;
			m.push(n.path)
		}
		return {
			paths: m,
			offset: f / 2
		}
	},
	extractGlyphPoints: function (b, c, e, f, h) {
		var k = [],
			m, n, t, u, v, p, x, w, A, z, y = c.glyphs[b] || c.glyphs[ctxt.options.fallbackCharacter];
		if (y) {
			if (y.o) {
				c = y._cachedOutline || (y._cachedOutline = y.o.split(" "));
				t = c.length;
				for (b = 0; b < t;) switch (n = c[b++], n) {
				case "m":
					n = c[b++] * e + f;
					u = c[b++] * e;
					k.push(new THREE.Vector2(n, u));
					h.moveTo(n, u);
					break;
				case "l":
					n = c[b++] * e + f;
					u = c[b++] * e;
					k.push(new THREE.Vector2(n, u));
					h.lineTo(n, u);
					break;
				case "q":
					n = c[b++] * e + f;
					u = c[b++] * e;
					x = c[b++] * e + f;
					w = c[b++] * e;
					h.quadraticCurveTo(x, w, n, u);
					if (m = k[k.length - 1]) {
						v = m.x;
						p = m.y;
						m = 1;
						for (divisions = this.divisions; m <= divisions; m++) {
							var C = m / divisions,
								E = THREE.Shape.Utils.b2(C, v, x, n),
								C = THREE.Shape.Utils.b2(C, p, w, u);
							k.push(new THREE.Vector2(E, C))
						}
					}
					break;
				case "b":
					if (n = c[b++] * e + f, u = c[b++] * e, x = c[b++] * e + f, w = c[b++] * -e, A = c[b++] * e + f, z = c[b++] * -e, h.bezierCurveTo(n, u, x, w, A, z), m = k[k.length - 1]) {
						v = m.x;
						p = m.y;
						m = 1;
						for (divisions = this.divisions; m <= divisions; m++) C = m / divisions, E = THREE.Shape.Utils.b3(C, v, x, A, n), C = THREE.Shape.Utils.b3(C, p, w, z, u), k.push(new THREE.Vector2(E, C))
					}
				}
			}
			return {
				offset: y.ha * e,
				points: k,
				path: h
			}
		}
	}
};
(function (b) {
	var c = function (b) {
			for (var c = b.length, h = 0, k = c - 1, m = 0; m < c; k = m++) h += b[k].x * b[m].y - b[m].x * b[k].y;
			return h * 0.5
		};
	b.Triangulate = function (b, f) {
		var h = b.length;
		if (h < 3) return null;
		var k = [],
			m = [],
			n = [],
			t, u, v;
		if (c(b) > 0) for (u = 0; u < h; u++) m[u] = u;
		else for (u = 0; u < h; u++) m[u] = h - 1 - u;
		var p = 2 * h;
		for (u = h - 1; h > 2;) {
			if (p-- <= 0) {
				console.log("Warning, unable to triangulate polygon!");
				if (f) return n;
				return k
			}
			t = u;
			h <= t && (t = 0);
			u = t + 1;
			h <= u && (u = 0);
			v = u + 1;
			h <= v && (v = 0);
			var x;
			a: {
				x = b;
				var w = t,
					A = u,
					z = v,
					y = h,
					C = m,
					E = void 0,
					D = void 0,
					F = void 0,
					M = void 0,
					N = void 0,
					G = void 0,
					H = void 0,
					K = void 0,
					Z = void 0,
					D = x[C[w]].x,
					F = x[C[w]].y,
					M = x[C[A]].x,
					N = x[C[A]].y,
					G = x[C[z]].x,
					H = x[C[z]].y;
				if (1.0E-10 > (M - D) * (H - F) - (N - F) * (G - D)) x = !1;
				else {
					for (E = 0; E < y; E++) if (!(E == w || E == A || E == z)) {
						var K = x[C[E]].x,
							Z = x[C[E]].y,
							L = void 0,
							P = void 0,
							U = void 0,
							Y = void 0,
							X = void 0,
							o = void 0,
							ea = void 0,
							R = void 0,
							pa = void 0,
							fa = void 0,
							ma = void 0,
							da = void 0,
							L = U = X = void 0,
							L = G - M,
							P = H - N,
							U = D - G,
							Y = F - H,
							X = M - D,
							o = N - F,
							ea = K - D,
							R = Z - F,
							pa = K - M,
							fa = Z - N,
							ma = K - G,
							da = Z - H,
							L = L * fa - P * pa,
							X = X * R - o * ea,
							U = U * da - Y * ma;
						if (L >= 0 && U >= 0 && X >= 0) {
							x = !1;
							break a
						}
					}
					x = !0
				}
			}
			if (x) {
				k.push([b[m[t]], b[m[u]], b[m[v]]]);
				n.push([m[t], m[u], m[v]]);
				t = u;
				for (v = u + 1; v < h; t++, v++) m[t] = m[v];
				h--;
				p = 2 * h
			}
		}
		if (f) return n;
		return k
	};
	b.Triangulate.area = c;
	return b
})(THREE.FontUtils);
self._typeface_js = {
	faces: THREE.FontUtils.faces,
	loadFace: THREE.FontUtils.loadFace
};
THREE.TorusGeometry = function (b, c, e, f, h) {
	THREE.Geometry.call(this);
	this.radius = b || 100;
	this.tube = c || 40;
	this.segmentsR = e || 8;
	this.segmentsT = f || 6;
	this.arc = h || Math.PI * 2;
	h = new THREE.Vector3;
	b = [];
	c = [];
	for (e = 0; e <= this.segmentsR; e++) for (f = 0; f <= this.segmentsT; f++) {
		var k = f / this.segmentsT * this.arc,
			m = e / this.segmentsR * Math.PI * 2;
		h.x = this.radius * Math.cos(k);
		h.y = this.radius * Math.sin(k);
		var n = new THREE.Vector3;
		n.x = (this.radius + this.tube * Math.cos(m)) * Math.cos(k);
		n.y = (this.radius + this.tube * Math.cos(m)) * Math.sin(k);
		n.z = this.tube * Math.sin(m);
		this.vertices.push(new THREE.Vertex(n));
		b.push(new THREE.UV(f / this.segmentsT, 1 - e / this.segmentsR));
		c.push(n.clone().subSelf(h).normalize())
	}
	for (e = 1; e <= this.segmentsR; e++) for (f = 1; f <= this.segmentsT; f++) {
		var h = (this.segmentsT + 1) * e + f - 1,
			k = (this.segmentsT + 1) * (e - 1) + f - 1,
			m = (this.segmentsT + 1) * (e - 1) + f,
			n = (this.segmentsT + 1) * e + f,
			t = new THREE.Face4(h, k, m, n, [c[h], c[k], c[m], c[n]]);
		t.normal.addSelf(c[h]);
		t.normal.addSelf(c[k]);
		t.normal.addSelf(c[m]);
		t.normal.addSelf(c[n]);
		t.normal.normalize();
		this.faces.push(t);
		this.faceVertexUvs[0].push([b[h].clone(), b[k].clone(), b[m].clone(), b[n].clone()])
	}
	this.computeCentroids()
};
THREE.TorusGeometry.prototype = new THREE.Geometry;
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry;
THREE.TorusKnotGeometry = function (b, c, e, f, h, k, m) {
	function n(b, e, c, f, h, k) {
		e = c / f * b;
		c = Math.cos(e);
		return new THREE.Vector3(h * (2 + c) * 0.5 * Math.cos(b), h * (2 + c) * Math.sin(b) * 0.5, k * h * Math.sin(e) * 0.5)
	}
	THREE.Geometry.call(this);
	this.radius = b || 200;
	this.tube = c || 40;
	this.segmentsR = e || 64;
	this.segmentsT = f || 8;
	this.p = h || 2;
	this.q = k || 3;
	this.heightScale = m || 1;
	this.grid = Array(this.segmentsR);
	e = new THREE.Vector3;
	f = new THREE.Vector3;
	k = new THREE.Vector3;
	for (b = 0; b < this.segmentsR; ++b) {
		this.grid[b] = Array(this.segmentsT);
		for (c = 0; c < this.segmentsT; ++c) {
			var t = b / this.segmentsR * 2 * this.p * Math.PI,
				m = c / this.segmentsT * 2 * Math.PI,
				h = n(t, m, this.q, this.p, this.radius, this.heightScale),
				t = n(t + 0.01, m, this.q, this.p, this.radius, this.heightScale);
			e.x = t.x - h.x;
			e.y = t.y - h.y;
			e.z = t.z - h.z;
			f.x = t.x + h.x;
			f.y = t.y + h.y;
			f.z = t.z + h.z;
			k.cross(e, f);
			f.cross(k, e);
			k.normalize();
			f.normalize();
			t = -this.tube * Math.cos(m);
			m = this.tube * Math.sin(m);
			h.x += t * f.x + m * k.x;
			h.y += t * f.y + m * k.y;
			h.z += t * f.z + m * k.z;
			this.grid[b][c] = this.vertices.push(new THREE.Vertex(new THREE.Vector3(h.x, h.y, h.z))) - 1
		}
	}
	for (b = 0; b < this.segmentsR; ++b) for (c = 0; c < this.segmentsT; ++c) {
		var f = (b + 1) % this.segmentsR,
			k = (c + 1) % this.segmentsT,
			h = this.grid[b][c],
			e = this.grid[f][c],
			f = this.grid[f][k],
			k = this.grid[b][k],
			m = new THREE.UV(b / this.segmentsR, c / this.segmentsT),
			t = new THREE.UV((b + 1) / this.segmentsR, c / this.segmentsT),
			u = new THREE.UV((b + 1) / this.segmentsR, (c + 1) / this.segmentsT),
			v = new THREE.UV(b / this.segmentsR, (c + 1) / this.segmentsT);
		this.faces.push(new THREE.Face4(h, e, f, k));
		this.faceVertexUvs[0].push([m, t, u, v])
	}
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = new THREE.Geometry;
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry;
THREE.SubdivisionModifier = function (b) {
	this.subdivisions = b === void 0 ? 1 : b;
	this.useOldVertexColors = !1;
	this.supportUVs = !0
};
THREE.SubdivisionModifier.prototype.constructor = THREE.SubdivisionModifier;
THREE.SubdivisionModifier.prototype.modify = function (b) {
	for (var c = this.subdivisions; c-- > 0;) this.smooth(b)
};
THREE.SubdivisionModifier.prototype.smooth = function (b) {
	function c(b, e, c, f, n, t) {
		var w = new THREE.Face4(b, e, c, f, null, n.color, n.material);
		if (m.useOldVertexColors) {
			w.vertexColors = [];
			for (var o, u, v, x = 0; x < 4; x++) {
				v = t[x];
				o = new THREE.Color;
				o.setRGB(0, 0, 0);
				for (var y = 0; y < v.length; y++) u = n.vertexColors[v[y] - 1], o.r += u.r, o.g += u.g, o.b += u.b;
				o.r /= v.length;
				o.g /= v.length;
				o.b /= v.length;
				w.vertexColors[x] = o
			}
		}
		h.push(w);
		(!m.supportUVs || p.length != 0) && k.push([p[b], p[e], p[c], p[f]])
	}

	function e(b, e) {
		return Math.min(b, e) + "_" + Math.max(b, e)
	}
	var f = [],
		h = [],
		k = [],
		m = this,
		n = b.vertices,
		f = b.faces,
		t = n.concat(),
		u = [],
		v = {},
		p = [],
		x, w, A, z, y, C = b.faceVertexUvs[0];
	x = 0;
	for (w = C.length; x < w; x++) {
		A = 0;
		for (z = C[x].length; A < z; A++) y = f[x]["abcd".charAt(A)], p[y] || (p[y] = C[x][A])
	}
	var E;
	x = 0;
	for (w = f.length; x < w; x++) if (y = f[x], u.push(y.centroid), t.push(new THREE.Vertex(y.centroid)), m.supportUVs && p.length != 0) {
		E = new THREE.UV;
		if (y instanceof THREE.Face3) E.u = p[y.a].u + p[y.b].u + p[y.c].u, E.v = p[y.a].v + p[y.b].v + p[y.c].v, E.u /= 3, E.v /= 3;
		else if (y instanceof THREE.Face4) E.u = p[y.a].u + p[y.b].u + p[y.c].u + p[y.d].u, E.v = p[y.a].v + p[y.b].v + p[y.c].v + p[y.d].v, E.u /= 4, E.v /= 4;
		p.push(E)
	}
	z = function (b) {
		function c(b, e, f) {
			b[e] === void 0 && (b[e] = []);
			b[e].push(f)
		}
		var f, h, k, m, n = {};
		f = 0;
		for (h = b.faces.length; f < h; f++) k = b.faces[f], k instanceof THREE.Face3 ? (m = e(k.a, k.b), c(n, m, f), m = e(k.b, k.c), c(n, m, f), m = e(k.c, k.a), c(n, m, f)) : k instanceof THREE.Face4 && (m = e(k.a, k.b), c(n, m, f), m = e(k.b, k.c), c(n, m, f), m = e(k.c, k.d), c(n, m, f), m = e(k.d, k.a), c(n, m, f));
		return n
	}(b);
	var D, F, M = 0,
		C = n.length,
		N;
	for (x in z) if (y = z[x], E = y[0], D = y[1], N = x.split("_"), w = N[0], N = N[1], F = new THREE.Vector3, y.length != 2 ? (F.addSelf(n[w].position), F.addSelf(n[N].position), F.multiplyScalar(0.5)) : (F.addSelf(u[E]), F.addSelf(u[D]), F.addSelf(n[w].position), F.addSelf(n[N].position), F.multiplyScalar(0.25)), v[x] = C + f.length + M, t.push(new THREE.Vertex(F)), M++, m.supportUVs && p.length != 0) E = new THREE.UV, E.u = p[w].u + p[N].u, E.v = p[w].v + p[N].v, E.u /= 2, E.v /= 2, p.push(E);
	x = 0;
	for (w = u.length; x < w; x++) y = f[x], E = C + x, y instanceof THREE.Face3 ? (D = e(y.a, y.b), N = e(y.b, y.c), M = e(y.c, y.a), c(E, v[D], y.b, v[N], y, ["123", "12", "2", "23"]), c(E, v[N], y.c, v[M], y, ["123", "23", "3", "31"]), c(E, v[M], y.a, v[D], y, ["123", "31", "1", "12"])) : y instanceof THREE.Face4 ? (D = e(y.a, y.b), N = e(y.b, y.c), M = e(y.c, y.d), F = e(y.d, y.a), c(E, v[D], y.b, v[N], y, ["1234", "12", "2", "23"]), c(E, v[N], y.c, v[M], y, ["1234", "23", "3", "34"]), c(E, v[M], y.d, v[F], y, ["1234", "34", "4", "41"]), c(E, v[F], y.a, v[D], y, ["1234", "41", "1", "12"])) : console.log("face should be a face!", y);
	var f = t,
		G = {},
		H = {},
		t = function (b, e) {
			G[b] === void 0 && (G[b] = []);
			G[b].push(e)
		},
		v = function (b, e) {
			H[b] === void 0 && (H[b] = {});
			H[b][e] = null
		};
	for (x in z) y = z[x], N = x.split("_"), w = N[0], N = N[1], t(w, [w, N]), t(N, [w, N]), E = y[0], D = y[1], v(w, E), D ? v(w, D) : v(w, E), v(N, E), D ? v(N, D) : v(N, E);
	t = new THREE.Vector3;
	v = new THREE.Vector3;
	x = 0;
	for (w = n.length; x < w; x++) if (G[x] !== void 0) {
		t.set(0, 0, 0);
		v.set(0, 0, 0);
		z = new THREE.Vector3(0, 0, 0);
		C = 0;
		for (A in H[x]) t.addSelf(u[A]), C++;
		t.divideScalar(C);
		C = G[x].length;
		for (A = 0; A < C; A++) y = G[x][A], y = n[y[0]].position.clone().addSelf(n[y[1]].position).divideScalar(2), v.addSelf(y);
		v.divideScalar(C);
		z.addSelf(n[x].position);
		z.multiplyScalar(C - 3);
		z.addSelf(t);
		z.addSelf(v.multiplyScalar(2));
		z.divideScalar(C);
		f[x].position = z
	}
	b.vertices = f;
	b.faces = h;
	b.faceVertexUvs[0] = k;
	delete b.__tmpVertices;
	b.computeCentroids();
	b.computeFaceNormals();
	b.computeVertexNormals()
};
THREE.Loader = function (b) {
	this.statusDomElement = (this.showStatus = b) ? THREE.Loader.prototype.addStatusElement() : null;
	this.onLoadStart = function () {};
	this.onLoadProgress = function () {};
	this.onLoadComplete = function () {}
};
THREE.Loader.prototype = {
	constructor: THREE.Loader,
	addStatusElement: function () {
		var b = document.createElement("div");
		b.style.position = "absolute";
		b.style.right = "0px";
		b.style.top = "0px";
		b.style.fontSize = "0.8em";
		b.style.textAlign = "left";
		b.style.background = "rgba(0,0,0,0.25)";
		b.style.color = "#fff";
		b.style.width = "120px";
		b.style.padding = "0.5em 0.5em 0.5em 0.5em";
		b.style.zIndex = 1E3;
		b.innerHTML = "Loading ...";
		return b
	},
	updateProgress: function (b) {
		var c = "Loaded ";
		c += b.total ? (100 * b.loaded / b.total).toFixed(0) + "%" : (b.loaded / 1E3).toFixed(2) + " KB";
		this.statusDomElement.innerHTML = c
	},
	extractUrlbase: function (b) {
		b = b.split("/");
		b.pop();
		return b.length < 1 ? "" : b.join("/") + "/"
	},
	init_materials: function (b, c, e) {
		b.materials = [];
		for (var f = 0; f < c.length; ++f) b.materials[f] = [THREE.Loader.prototype.createMaterial(c[f], e)]
	},
	hasNormals: function (b) {
		var c, e, f = b.materials.length;
		for (e = 0; e < f; e++) if (c = b.materials[e][0], c instanceof THREE.ShaderMaterial) return !0;
		return !1
	},
	createMaterial: function (b, c) {
		function e(b) {
			b = Math.log(b) / Math.LN2;
			return Math.floor(b) == b
		}

		function f(b, c) {
			var f = new Image;
			f.onload = function () {
				if (!e(this.width) || !e(this.height)) {
					var c = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2)),
						f = Math.pow(2, Math.round(Math.log(this.height) / Math.LN2));
					b.image.width = c;
					b.image.height = f;
					b.image.getContext("2d").drawImage(this, 0, 0, c, f)
				}
				else b.image = this;
				b.needsUpdate = !0
			};
			f.src = c
		}

		function h(b, e, k, h, m, n) {
			var p = document.createElement("canvas");
			b[e] = new THREE.Texture(p);
			b[e].sourceFile = k;
			if (h) {
				b[e].repeat.set(h[0], h[1]);
				if (h[0] != 1) b[e].wrapS = THREE.RepeatWrapping;
				if (h[1] != 1) b[e].wrapT = THREE.RepeatWrapping
			}
			m && b[e].offset.set(m[0], m[1]);
			if (n) {
				h = {
					repeat: THREE.RepeatWrapping,
					mirror: THREE.MirroredRepeatWrapping
				};
				if (h[n[0]] !== void 0) b[e].wrapS = h[n[0]];
				if (h[n[1]] !== void 0) b[e].wrapT = h[n[1]]
			}
			f(b[e], c + "/" + k)
		}

		function k(b) {
			return (b[0] * 255 << 16) + (b[1] * 255 << 8) + b[2] * 255
		}
		var m, n, t;
		n = "MeshLambertMaterial";
		m = {
			color: 15658734,
			opacity: 1,
			map: null,
			lightMap: null,
			normalMap: null,
			wireframe: b.wireframe
		};
		b.shading && (b.shading == "Phong" ? n = "MeshPhongMaterial" : b.shading == "Basic" && (n = "MeshBasicMaterial"));
		if (b.blending) if (b.blending == "Additive") m.blending = THREE.AdditiveBlending;
		else if (b.blending == "Subtractive") m.blending = THREE.SubtractiveBlending;
		else if (b.blending == "Multiply") m.blending = THREE.MultiplyBlending;
		if (b.transparent !== void 0 || b.opacity < 1) m.transparent = b.transparent;
		if (b.depthTest !== void 0) m.depthTest = b.depthTest;
		if (b.vertexColors !== void 0) if (b.vertexColors == "face") m.vertexColors = THREE.FaceColors;
		else if (b.vertexColors) m.vertexColors = THREE.VertexColors;
		if (b.colorDiffuse) m.color = k(b.colorDiffuse);
		else if (b.DbgColor) m.color = b.DbgColor;
		if (b.colorSpecular) m.specular = k(b.colorSpecular);
		if (b.colorAmbient) m.ambient = k(b.colorAmbient);
		if (b.transparency) m.opacity = b.transparency;
		if (b.specularCoef) m.shininess = b.specularCoef;
		b.mapDiffuse && c && h(m, "map", b.mapDiffuse, b.mapDiffuseRepeat, b.mapDiffuseOffset, b.mapDiffuseWrap);
		b.mapLight && c && h(m, "lightMap", b.mapLight, b.mapLightRepeat, b.mapLightOffset, b.mapLightWrap);
		b.mapNormal && c && h(m, "normalMap", b.mapNormal, b.mapNormalRepeat, b.mapNormalOffset, b.mapNormalWrap);
		b.mapSpecular && c && h(m, "specularMap", b.mapSpecular, b.mapSpecularRepeat, b.mapSpecularOffset, b.mapSpecularWrap);
		if (b.mapNormal) {
			var u = THREE.ShaderUtils.lib.normal,
				v = THREE.UniformsUtils.clone(u.uniforms),
				p = m.color;
			n = m.specular;
			t = m.ambient;
			var x = m.shininess;
			v.tNormal.texture = m.normalMap;
			if (b.mapNormalFactor) v.uNormalScale.value = b.mapNormalFactor;
			if (m.map) v.tDiffuse.texture = m.map, v.enableDiffuse.value = !0;
			if (m.specularMap) v.tSpecular.texture = m.specularMap, v.enableSpecular.value = !0;
			if (m.lightMap) v.tAO.texture = m.lightMap, v.enableAO.value = !0;
			v.uDiffuseColor.value.setHex(p);
			v.uSpecularColor.value.setHex(n);
			v.uAmbientColor.value.setHex(t);
			v.uShininess.value = x;
			if (m.opacity) v.uOpacity.value = m.opacity;
			m = new THREE.ShaderMaterial({
				fragmentShader: u.fragmentShader,
				vertexShader: u.vertexShader,
				uniforms: v,
				lights: !0,
				fog: !0
			})
		}
		else m = new THREE[n](m);
		return m
	}
};
THREE.BinaryLoader = function (b) {
	THREE.Loader.call(this, b)
};
THREE.BinaryLoader.prototype = new THREE.Loader;
THREE.BinaryLoader.prototype.constructor = THREE.BinaryLoader;
THREE.BinaryLoader.prototype.supr = THREE.Loader.prototype;
THREE.BinaryLoader.prototype.load = function (b) {
	var c = b.model,
		e = b.callback,
		f = b.texture_path ? b.texture_path : THREE.Loader.prototype.extractUrlbase(c),
		h = b.bin_path ? b.bin_path : THREE.Loader.prototype.extractUrlbase(c),
		b = (new Date).getTime(),
		c = new Worker(c),
		k = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
	c.onmessage = function (b) {
		THREE.BinaryLoader.prototype.loadAjaxBuffers(b.data.buffers, b.data.materials, e, h, f, k)
	};
	c.onerror = function (b) {
		alert("worker.onerror: " + b.message + "\n" + b.data);
		b.preventDefault()
	};
	c.postMessage(b)
};
THREE.BinaryLoader.prototype.loadAjaxBuffers = function (b, c, e, f, h, k) {
	var m = new XMLHttpRequest,
		n = f + "/" + b,
		t = 0;
	m.onreadystatechange = function () {
		m.readyState == 4 ? m.status == 200 || m.status == 0 ? THREE.BinaryLoader.prototype.createBinModel(m.responseText, e, h, c) : alert("Couldn't load [" + n + "] [" + m.status + "]") : m.readyState == 3 ? k && (t == 0 && (t = m.getResponseHeader("Content-Length")), k({
			total: t,
			loaded: m.responseText.length
		})) : m.readyState == 2 && (t = m.getResponseHeader("Content-Length"))
	};
	m.open("GET", n, !0);
	m.overrideMimeType("text/plain; charset=x-user-defined");
	m.setRequestHeader("Content-Type", "text/plain");
	m.send(null)
};
THREE.BinaryLoader.prototype.createBinModel = function (b, c, e, f) {
	var h = function (e) {
			function c(b, e) {
				var f = v(b, e),
					h = v(b, e + 1),
					k = v(b, e + 2),
					m = v(b, e + 3),
					n = (m << 1 & 255 | k >> 7) - 127;
				f |= (k & 127) << 16 | h << 8;
				if (f == 0 && n == -127) return 0;
				return (1 - 2 * (m >> 7)) * (1 + f * Math.pow(2, -23)) * Math.pow(2, n)
			}

			function h(b, e) {
				var c = v(b, e),
					f = v(b, e + 1),
					k = v(b, e + 2);
				return (v(b, e + 3) << 24) + (k << 16) + (f << 8) + c
			}

			function t(b, e) {
				var c = v(b, e);
				return (v(b, e + 1) << 8) + c
			}

			function u(b, e) {
				var c = v(b, e);
				return c > 127 ? c - 256 : c
			}

			function v(b, e) {
				return b.charCodeAt(e) & 255
			}

			function p(e) {
				var c, f, k;
				c = h(b, e);
				f = h(b, e + N);
				k = h(b, e + G);
				e = t(b, e + H);
				C.faces.push(new THREE.Face3(c, f, k, null, null, C.materials[e]))
			}

			function x(e) {
				var c, f, k, m, o, p;
				c = h(b, e);
				f = h(b, e + N);
				k = h(b, e + G);
				m = t(b, e + H);
				o = h(b, e + K);
				p = h(b, e + Z);
				e = h(b, e + L);
				m = C.materials[m];
				var w = F[p * 3],
					u = F[p * 3 + 1];
				p = F[p * 3 + 2];
				var v = F[e * 3],
					x = F[e * 3 + 1],
					e = F[e * 3 + 2];
				C.faces.push(new THREE.Face3(c, f, k, [new THREE.Vector3(F[o * 3], F[o * 3 + 1], F[o * 3 + 2]), new THREE.Vector3(w, u, p), new THREE.Vector3(v, x, e)], null, m))
			}

			function w(e) {
				var c, f, k, m;
				c = h(b, e);
				f = h(b, e + P);
				k = h(b, e + U);
				m = h(b, e + Y);
				e = t(b, e + X);
				C.faces.push(new THREE.Face4(c, f, k, m, null, null, C.materials[e]))
			}

			function A(e) {
				var c, f, k, m, p, w, u, v;
				c = h(b, e);
				f = h(b, e + P);
				k = h(b, e + U);
				m = h(b, e + Y);
				p = t(b, e + X);
				w = h(b, e + o);
				u = h(b, e + ea);
				v = h(b, e + R);
				e = h(b, e + pa);
				p = C.materials[p];
				var x = F[u * 3],
					V = F[u * 3 + 1];
				u = F[u * 3 + 2];
				var y = F[v * 3],
					O = F[v * 3 + 1];
				v = F[v * 3 + 2];
				var z = F[e * 3],
					A = F[e * 3 + 1],
					e = F[e * 3 + 2];
				C.faces.push(new THREE.Face4(c, f, k, m, [new THREE.Vector3(F[w * 3], F[w * 3 + 1], F[w * 3 + 2]), new THREE.Vector3(x, V, u), new THREE.Vector3(y, O, v), new THREE.Vector3(z, A, e)], null, p))
			}

			function z(e) {
				var c, f, k, m;
				c = h(b, e);
				f = h(b, e + fa);
				k = h(b, e + ma);
				e = M[c * 2];
				m = M[c * 2 + 1];
				c = M[f * 2];
				var o = C.faceVertexUvs[0];
				f = M[f * 2 + 1];
				var p = M[k * 2];
				k = M[k * 2 + 1];
				var t = [];
				t.push(new THREE.UV(e, m));
				t.push(new THREE.UV(c, f));
				t.push(new THREE.UV(p, k));
				o.push(t)
			}

			function y(e) {
				var c, f, k, m, o, p;
				c = h(b, e);
				f = h(b, e + da);
				k = h(b, e + la);
				m = h(b, e + ga);
				e = M[c * 2];
				o = M[c * 2 + 1];
				c = M[f * 2];
				p = M[f * 2 + 1];
				f = M[k * 2];
				var t = C.faceVertexUvs[0];
				k = M[k * 2 + 1];
				var w = M[m * 2];
				m = M[m * 2 + 1];
				var u = [];
				u.push(new THREE.UV(e, o));
				u.push(new THREE.UV(c, p));
				u.push(new THREE.UV(f, k));
				u.push(new THREE.UV(w, m));
				t.push(u)
			}
			var C = this,
				E = 0,
				D, F = [],
				M = [],
				N, G, H, K, Z, L, P, U, Y, X, o, ea, R, pa, fa, ma, da, la, ga, $, ca, aa, ha, ka, sa;
			THREE.Geometry.call(this);
			THREE.Loader.prototype.init_materials(C, f, e);
			D = {
				signature: b.substr(E, 8),
				header_bytes: v(b, E + 8),
				vertex_coordinate_bytes: v(b, E + 9),
				normal_coordinate_bytes: v(b, E + 10),
				uv_coordinate_bytes: v(b, E + 11),
				vertex_index_bytes: v(b, E + 12),
				normal_index_bytes: v(b, E + 13),
				uv_index_bytes: v(b, E + 14),
				material_index_bytes: v(b, E + 15),
				nvertices: h(b, E + 16),
				nnormals: h(b, E + 16 + 4),
				nuvs: h(b, E + 16 + 8),
				ntri_flat: h(b, E + 16 + 12),
				ntri_smooth: h(b, E + 16 + 16),
				ntri_flat_uv: h(b, E + 16 + 20),
				ntri_smooth_uv: h(b, E + 16 + 24),
				nquad_flat: h(b, E + 16 + 28),
				nquad_smooth: h(b, E + 16 + 32),
				nquad_flat_uv: h(b, E + 16 + 36),
				nquad_smooth_uv: h(b, E + 16 + 40)
			};
			E += D.header_bytes;
			N = D.vertex_index_bytes;
			G = D.vertex_index_bytes * 2;
			H = D.vertex_index_bytes * 3;
			K = D.vertex_index_bytes * 3 + D.material_index_bytes;
			Z = D.vertex_index_bytes * 3 + D.material_index_bytes + D.normal_index_bytes;
			L = D.vertex_index_bytes * 3 + D.material_index_bytes + D.normal_index_bytes * 2;
			P = D.vertex_index_bytes;
			U = D.vertex_index_bytes * 2;
			Y = D.vertex_index_bytes * 3;
			X = D.vertex_index_bytes * 4;
			o = D.vertex_index_bytes * 4 + D.material_index_bytes;
			ea = D.vertex_index_bytes * 4 + D.material_index_bytes + D.normal_index_bytes;
			R = D.vertex_index_bytes * 4 + D.material_index_bytes + D.normal_index_bytes * 2;
			pa = D.vertex_index_bytes * 4 + D.material_index_bytes + D.normal_index_bytes * 3;
			fa = D.uv_index_bytes;
			ma = D.uv_index_bytes * 2;
			da = D.uv_index_bytes;
			la = D.uv_index_bytes * 2;
			ga = D.uv_index_bytes * 3;
			e = D.vertex_index_bytes * 3 + D.material_index_bytes;
			sa = D.vertex_index_bytes * 4 + D.material_index_bytes;
			$ = D.ntri_flat * e;
			ca = D.ntri_smooth * (e + D.normal_index_bytes * 3);
			aa = D.ntri_flat_uv * (e + D.uv_index_bytes * 3);
			ha = D.ntri_smooth_uv * (e + D.normal_index_bytes * 3 + D.uv_index_bytes * 3);
			ka = D.nquad_flat * sa;
			e = D.nquad_smooth * (sa + D.normal_index_bytes * 4);
			sa = D.nquad_flat_uv * (sa + D.uv_index_bytes * 4);
			E +=
			function (e) {
				for (var f, h, k, n = D.vertex_coordinate_bytes * 3, o = e + D.nvertices * n; e < o; e += n) f = c(b, e), h = c(b, e + D.vertex_coordinate_bytes), k = c(b, e + D.vertex_coordinate_bytes * 2), C.vertices.push(new THREE.Vertex(new THREE.Vector3(f, h, k)));
				return D.nvertices * n
			}(E);
			E +=
			function (e) {
				for (var c, f, h, k = D.normal_coordinate_bytes * 3, m = e + D.nnormals * k; e < m; e += k) c = u(b, e), f = u(b, e + D.normal_coordinate_bytes), h = u(b, e + D.normal_coordinate_bytes * 2), F.push(c / 127, f / 127, h / 127);
				return D.nnormals * k
			}(E);
			E +=
			function (e) {
				for (var f, h, k = D.uv_coordinate_bytes * 2, n = e + D.nuvs * k; e < n; e += k) f = c(b, e), h = c(b, e + D.uv_coordinate_bytes), M.push(f, h);
				return D.nuvs * k
			}(E);
			$ = E + $;
			ca = $ + ca;
			aa = ca + aa;
			ha = aa + ha;
			ka = ha + ka;
			e = ka + e;
			sa = e + sa;
			(function (b) {
				var e, c = D.vertex_index_bytes * 3 + D.material_index_bytes,
					f = c + D.uv_index_bytes * 3,
					h = b + D.ntri_flat_uv * f;
				for (e = b; e < h; e += f) p(e), z(e + c);
				return h - b
			})(ca);
			(function (b) {
				var e, c = D.vertex_index_bytes * 3 + D.material_index_bytes + D.normal_index_bytes * 3,
					f = c + D.uv_index_bytes * 3,
					h = b + D.ntri_smooth_uv * f;
				for (e = b; e < h; e += f) x(e), z(e + c);
				return h - b
			})(aa);
			(function (b) {
				var e, c = D.vertex_index_bytes * 4 + D.material_index_bytes,
					f = c + D.uv_index_bytes * 4,
					h = b + D.nquad_flat_uv * f;
				for (e = b; e < h; e += f) w(e), y(e + c);
				return h - b
			})(e);
			(function (b) {
				var e, c = D.vertex_index_bytes * 4 + D.material_index_bytes + D.normal_index_bytes * 4,
					f = c + D.uv_index_bytes * 4,
					h = b + D.nquad_smooth_uv * f;
				for (e = b; e < h; e += f) A(e), y(e + c);
				return h - b
			})(sa);
			(function (b) {
				var e, c = D.vertex_index_bytes * 3 + D.material_index_bytes,
					f = b + D.ntri_flat * c;
				for (e = b; e < f; e += c) p(e);
				return f - b
			})(E);
			(function (b) {
				var e, c = D.vertex_index_bytes * 3 + D.material_index_bytes + D.normal_index_bytes * 3,
					f = b + D.ntri_smooth * c;
				for (e = b; e < f; e += c) x(e);
				return f - b
			})($);
			(function (b) {
				var e, c = D.vertex_index_bytes * 4 + D.material_index_bytes,
					f = b + D.nquad_flat * c;
				for (e = b; e < f; e += c) w(e);
				return f - b
			})(ha);
			(function (b) {
				var e, c = D.vertex_index_bytes * 4 + D.material_index_bytes + D.normal_index_bytes * 4,
					f = b + D.nquad_smooth * c;
				for (e = b; e < f; e += c) A(e);
				return f - b
			})(ka);
			this.computeCentroids();
			this.computeFaceNormals();
			THREE.Loader.prototype.hasNormals(this) && this.computeTangents()
		};
	h.prototype = new THREE.Geometry;
	h.prototype.constructor = h;
	c(new h(e))
};
THREE.ColladaLoader = function () {
	function b(b, e, c) {
		for (var b = $.evaluate(b, $, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null), f = {}, h = b.iterateNext(), k = 0; h;) {
			h = (new e).parse(h);
			if (h.id.length == 0) h.id = c + k++;
			f[h.id] = h;
			h = b.iterateNext()
		}
		return f
	}

	function c() {
		var b = 1E6,
			e = -b,
			c = 0,
			f;
		for (f in J) for (var h = J[f], k = 0; k < h.sampler.length; k++) {
			var m = h.sampler[k];
			m.create();
			b = Math.min(b, m.startTime);
			e = Math.max(e, m.endTime);
			c = Math.max(c, m.input.length)
		}
		return {
			start: b,
			end: e,
			frames: c
		}
	}

	function e(b, c, f, h) {
		b.world = b.world || new THREE.Matrix4;
		b.world.copy(b.matrix);
		if (b.channels && b.channels.length) {
			var k = b.channels[0].sampler.output[f];
			k instanceof THREE.Matrix4 && b.world.copy(k)
		}
		h && b.world.multiply(h, b.world);
		c.push(b);
		for (h = 0; h < b.nodes.length; h++) e(b.nodes[h], c, f, b.world)
	}

	function f(b, f, h) {
		var k = Q[f.url];
		if (!k || !k.skin) console.log("ColladaLoader: Could not find skin controller.");
		else if (!f.skeleton || !f.skeleton.length) console.log("ColladaLoader: Could not find the skeleton for the skin. ");
		else {
			var m = c(),
				f = aa.getChildById(f.skeleton[0], !0) || aa.getChildBySid(f.skeleton[0], !0),
				n, o, p, t, w = new THREE.Vector3,
				u;
			for (n = 0; n < b.vertices.length; n++) k.skin.bindShapeMatrix.multiplyVector3(b.vertices[n].position);
			for (h = 0; h < m.frames; h++) {
				var v = [],
					x = [];
				for (n = 0; n < b.vertices.length; n++) x.push(new THREE.Vertex(new THREE.Vector3));
				e(f, v, h);
				n = v;
				o = k.skin;
				for (t = 0; t < n.length; t++) if (p = n[t], u = -1, p.type == "JOINT") {
					for (var y = 0; y < o.joints.length; y++) if (p.sid == o.joints[y]) {
						u = y;
						break
					}
					if (u >= 0) {
						y = o.invBindMatrices[u];
						p.invBindMatrix = y;
						p.skinningMatrix = new THREE.Matrix4;
						p.skinningMatrix.multiply(p.world, y);
						p.weights = [];
						for (y = 0; y < o.weights.length; y++) for (var z = 0; z < o.weights[y].length; z++) {
							var A = o.weights[y][z];
							A.joint == u && p.weights.push(A)
						}
					}
					else throw "ColladaLoader: Could not find joint '" + p.sid + "'.";
				}
				for (n = 0; n < v.length; n++) if (v[n].type == "JOINT") for (o = 0; o < v[n].weights.length; o++) p = v[n].weights[o], t = p.index, p = p.weight, u = b.vertices[t], t = x[t], w.x = u.position.x, w.y = u.position.y, w.z = u.position.z, v[n].skinningMatrix.multiplyVector3(w), t.position.x += w.x * p, t.position.y += w.y * p, t.position.z += w.z * p;
				b.morphTargets.push({
					name: "target_" + h,
					vertices: x
				})
			}
		}
	}

	function h(b) {
		var e = new THREE.Object3D,
			c, k, m;
		e.name = b.id || "";
		e.matrixAutoUpdate = !1;
		e.matrix = b.matrix;
		for (m = 0; m < b.controllers.length; m++) {
			var n = Q[b.controllers[m].url];
			switch (n.type) {
			case "skin":
				if (na[n.skin.source]) {
					var o = new A;
					o.url = n.skin.source;
					o.instance_material = b.controllers[m].instance_material;
					b.geometries.push(o);
					c = b.controllers[m]
				}
				else if (Q[n.skin.source] && (k = n = Q[n.skin.source], n.morph && na[n.morph.source])) o = new A, o.url = n.morph.source, o.instance_material = b.controllers[m].instance_material, b.geometries.push(o);
				break;
			case "morph":
				if (na[n.morph.source]) o = new A, o.url = n.morph.source, o.instance_material = b.controllers[m].instance_material, b.geometries.push(o), k = b.controllers[m];
				console.log("ColladaLoader: Morph-controller partially supported.")
			}
		}
		for (m = 0; m < b.geometries.length; m++) {
			var n = b.geometries[m],
				o = n.instance_material,
				n = na[n.url],
				p = {},
				t = 0,
				w;
			if (n && n.mesh && n.mesh.primitives) {
				if (e.name.length == 0) e.name = n.id;
				if (o) for (j = 0; j < o.length; j++) {
					w = o[j];
					var u = va[ra[w.target].instance_effect.url].shader;
					u.material.opacity = !u.material.opacity ? 1 : u.material.opacity;
					w = p[w.symbol] = u.material;
					t++
				}
				o = w || new THREE.MeshLambertMaterial({
					color: 14540253,
					shading: THREE.FlatShading
				});
				n = n.mesh.geometry3js;
				if (t > 1) {
					o = new THREE.MeshFaceMaterial;
					for (j = 0; j < n.faces.length; j++) t = n.faces[j], t.materials = [p[t.daeMaterial]]
				}
				if (c !== void 0) f(n, c), o.morphTargets = !0, o = new THREE.SkinnedMesh(n, o), o.skeleton = c.skeleton, o.skinController = Q[c.url], o.skinInstanceController = c, o.name = "skin_" + Da.length, Da.push(o);
				else if (k !== void 0) {
					p = n;
					t = k instanceof x ? Q[k.url] : k;
					if (!t || !t.morph) console.log("could not find morph controller!");
					else {
						t = t.morph;
						for (u = 0; u < t.targets.length; u++) {
							var v = na[t.targets[u]];
							if (v.mesh && v.mesh.primitives && v.mesh.primitives.length) v = v.mesh.primitives[0].geometry, v.vertices.length === p.vertices.length && p.morphTargets.push({
								name: "target_1",
								vertices: v.vertices
							})
						}
						p.morphTargets.push({
							name: "target_Z",
							vertices: p.vertices
						})
					}
					o.morphTargets = !0;
					o = new THREE.Mesh(n, o);
					o.name = "morph_" + Ba.length;
					Ba.push(o)
				}
				else o = new THREE.Mesh(n, o);
				e.add(o)
			}
		}
		for (m = 0; m < b.nodes.length; m++) e.add(h(b.nodes[m], b));
		return e
	}

	function k() {
		this.init_from = this.id = ""
	}

	function m() {
		this.type = this.name = this.id = "";
		this.morph = this.skin = null
	}

	function n() {
		this.weights = this.targets = this.source = this.method = null
	}

	function t() {
		this.source = "";
		this.bindShapeMatrix = null;
		this.invBindMatrices = [];
		this.joints = [];
		this.weights = []
	}

	function u() {
		this.name = this.id = "";
		this.nodes = [];
		this.scene = new THREE.Object3D
	}

	function v() {
		this.sid = this.name = this.id = "";
		this.nodes = [];
		this.controllers = [];
		this.transforms = [];
		this.geometries = [];
		this.channels = [];
		this.matrix = new THREE.Matrix4
	}

	function p() {
		this.type = this.sid = "";
		this.data = [];
		this.matrix = new THREE.Matrix4
	}

	function x() {
		this.url = "";
		this.skeleton = [];
		this.instance_material = []
	}

	function w() {
		this.target = this.symbol = ""
	}

	function A() {
		this.url = "";
		this.instance_material = []
	}

	function z() {
		this.id = "";
		this.mesh = null
	}

	function y(b) {
		this.geometry = b.id;
		this.primitives = [];
		this.geometry3js = this.vertices = null
	}

	function C() {}

	function E() {
		this.material = "";
		this.count = 0;
		this.inputs = [];
		this.vcount = null;
		this.p = [];
		this.geometry = new THREE.Geometry
	}

	function D() {
		this.source = "";
		this.stride = this.count = 0;
		this.params = []
	}

	function F() {
		this.input = {}
	}

	function M() {
		this.semantic = "";
		this.offset = 0;
		this.source = "";
		this.set = 0
	}

	function N(b) {
		this.id = b;
		this.type = null
	}

	function G() {
		this.name = this.id = "";
		this.instance_effect = null
	}

	function H() {
		this.color = new THREE.Color(0);
		this.color.setRGB(Math.random(), Math.random(), Math.random());
		this.color.a = 1;
		this.texcoord = this.texture = null
	}

	function K(b, e) {
		this.type = b;
		this.effect = e;
		this.material = null
	}

	function Z(b) {
		this.effect = b;
		this.format = this.init_from = null
	}

	function L(b) {
		this.effect = b;
		this.mipfilter = this.magfilter = this.minfilter = this.wrap_t = this.wrap_s = this.source = null
	}

	function P() {
		this.name = this.id = "";
		this.sampler = this.surface = this.shader = null
	}

	function U() {
		this.url = ""
	}

	function Y() {
		this.name = this.id = "";
		this.source = {};
		this.sampler = [];
		this.channel = []
	}

	function X(b) {
		this.animation = b;
		this.target = this.source = "";
		this.member = this.arrIndices = this.arrSyntax = this.dotSyntax = this.sid = null
	}

	function o(b) {
		this.id = "";
		this.animation = b;
		this.inputs = [];
		this.endTime = this.startTime = this.interpolation = this.output = this.input = null;
		this.duration = 0
	}

	function ea(b) {
		var e = b.getAttribute("id");
		if (ka[e] != void 0) return ka[e];
		ka[e] = (new N(e)).parse(b);
		return ka[e]
	}

	function R(b) {
		if (b == "dae") return "http://www.collada.org/2005/11/COLLADASchema";
		return null
	}

	function pa(b) {
		for (var b = ma(b), e = [], c = 0; c < b.length; c++) e.push(parseFloat(b[c]));
		return e
	}

	function fa(b) {
		for (var b = ma(b), e = [], c = 0; c < b.length; c++) e.push(parseInt(b[c], 10));
		return e
	}

	function ma(b) {
		return b.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/)
	}

	function da(b, e, c) {
		return b.hasAttribute(e) ? parseInt(b.getAttribute(e), 10) : c
	}

	function la(b, e) {
		if (b === void 0) {
			for (var c = "0."; c.length < e + 2;) c += "0";
			return c
		}
		e = e || 2;
		c = b.toString().split(".");
		for (c[1] = c.length > 1 ? c[1].substr(0, e) : "0"; c[1].length < e;) c[1] += "0";
		return c.join(".")
	}

	function ga(b, e) {
		var c = "";
		c += la(b.x, e) + ",";
		c += la(b.y, e) + ",";
		c += la(b.z, e);
		return c
	}
	var $ = null,
		ca = null,
		aa, ha = null,
		ka = {},
		sa = {},
		J = {},
		Q = {},
		na = {},
		ra = {},
		va = {},
		ua, Ea, Ba, Da, Fa = THREE.SmoothShading;
	k.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeName == "init_from") this.init_from = c.textContent
		}
		return this
	};
	m.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		this.name = b.getAttribute("name");
		this.type = "none";
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			switch (c.nodeName) {
			case "skin":
				this.skin = (new t).parse(c);
				this.type = c.nodeName;
				break;
			case "morph":
				this.morph = (new n).parse(c), this.type = c.nodeName
			}
		}
		return this
	};
	n.prototype.parse = function (b) {
		var e = {},
			c = [],
			f;
		this.method = b.getAttribute("method");
		this.source = b.getAttribute("source").replace(/^#/, "");
		for (f = 0; f < b.childNodes.length; f++) {
			var h = b.childNodes[f];
			if (h.nodeType == 1) switch (h.nodeName) {
			case "source":
				h = (new N).parse(h);
				e[h.id] = h;
				break;
			case "targets":
				c = this.parseInputs(h);
				break;
			default:
				console.log(h.nodeName)
			}
		}
		for (f = 0; f < c.length; f++) switch (b = c[f], h = e[b.source], b.semantic) {
		case "MORPH_TARGET":
			this.targets = h.read();
			break;
		case "MORPH_WEIGHT":
			this.weights = h.read()
		}
		return this
	};
	n.prototype.parseInputs = function (b) {
		for (var e = [], c = 0; c < b.childNodes.length; c++) {
			var f = b.childNodes[c];
			if (f.nodeType == 1) switch (f.nodeName) {
			case "input":
				e.push((new M).parse(f))
			}
		}
		return e
	};
	t.prototype.parse = function (b) {
		var e = {},
			c, f;
		this.source = b.getAttribute("source").replace(/^#/, "");
		this.invBindMatrices = [];
		this.joints = [];
		this.weights = [];
		for (var h = 0; h < b.childNodes.length; h++) {
			var k = b.childNodes[h];
			if (k.nodeType == 1) switch (k.nodeName) {
			case "bind_shape_matrix":
				k = pa(k.textContent);
				this.bindShapeMatrix = new THREE.Matrix4;
				this.bindShapeMatrix.set(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14], k[15]);
				break;
			case "source":
				k = (new N).parse(k);
				e[k.id] = k;
				break;
			case "joints":
				c = k;
				break;
			case "vertex_weights":
				f = k;
				break;
			default:
				console.log(k.nodeName)
			}
		}
		this.parseJoints(c, e);
		this.parseWeights(f, e);
		return this
	};
	t.prototype.parseJoints = function (b, e) {
		for (var c = 0; c < b.childNodes.length; c++) {
			var f = b.childNodes[c];
			if (f.nodeType == 1) switch (f.nodeName) {
			case "input":
				var f = (new M).parse(f),
					h = e[f.source];
				if (f.semantic == "JOINT") this.joints = h.read();
				else if (f.semantic == "INV_BIND_MATRIX") this.invBindMatrices = h.read()
			}
		}
	};
	t.prototype.parseWeights = function (b, e) {
		for (var c, f, h = [], k = 0; k < b.childNodes.length; k++) {
			var m = b.childNodes[k];
			if (m.nodeType == 1) switch (m.nodeName) {
			case "input":
				h.push((new M).parse(m));
				break;
			case "v":
				c = fa(m.textContent);
				break;
			case "vcount":
				f = fa(m.textContent)
			}
		}
		for (k = m = 0; k < f.length; k++) {
			for (var n = f[k], o = [], p = 0; p < n; p++) {
				for (var t = {}, u = 0; u < h.length; u++) {
					var w = h[u],
						v = c[m + w.offset];
					switch (w.semantic) {
					case "JOINT":
						t.joint = v;
						break;
					case "WEIGHT":
						t.weight = e[w.source].data[v]
					}
				}
				o.push(t);
				m += h.length
			}
			for (p = 0; p < o.length; p++) o[p].index = k;
			this.weights.push(o)
		}
	};
	u.prototype.getChildById = function (b, e) {
		for (var c = 0; c < this.nodes.length; c++) {
			var f = this.nodes[c].getChildById(b, e);
			if (f) return f
		}
		return null
	};
	u.prototype.getChildBySid = function (b, e) {
		for (var c = 0; c < this.nodes.length; c++) {
			var f = this.nodes[c].getChildBySid(b, e);
			if (f) return f
		}
		return null
	};
	u.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		this.name = b.getAttribute("name");
		this.nodes = [];
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "node":
				this.nodes.push((new v).parse(c))
			}
		}
		return this
	};
	v.prototype.getChannelForTransform = function (b) {
		for (var e = 0; e < this.channels.length; e++) {
			var c = this.channels[e],
				f = c.target.split("/");
			f.shift();
			var h = f.shift(),
				k = h.indexOf(".") >= 0,
				m = h.indexOf("(") >= 0,
				n;
			if (k) f = h.split("."), h = f.shift(), f.shift();
			else if (m) {
				n = h.split("(");
				h = n.shift();
				for (f = 0; f < n.length; f++) n[f] = parseInt(n[f].replace(/\)/, ""))
			}
			if (h == b) return c.info = {
				sid: h,
				dotSyntax: k,
				arrSyntax: m,
				arrIndices: n
			}, c
		}
		return null
	};
	v.prototype.getChildById = function (b, e) {
		if (this.id == b) return this;
		if (e) for (var c = 0; c < this.nodes.length; c++) {
			var f = this.nodes[c].getChildById(b, e);
			if (f) return f
		}
		return null
	};
	v.prototype.getChildBySid = function (b, e) {
		if (this.sid == b) return this;
		if (e) for (var c = 0; c < this.nodes.length; c++) {
			var f = this.nodes[c].getChildBySid(b, e);
			if (f) return f
		}
		return null
	};
	v.prototype.getTransformBySid = function (b) {
		for (var e = 0; e < this.transforms.length; e++) if (this.transforms[e].sid == b) return this.transforms[e];
		return null
	};
	v.prototype.parse = function (b) {
		var e;
		this.id = b.getAttribute("id");
		this.sid = b.getAttribute("sid");
		this.name = b.getAttribute("name");
		this.type = b.getAttribute("type");
		this.type = this.type == "JOINT" ? this.type : "NODE";
		this.nodes = [];
		this.transforms = [];
		this.geometries = [];
		this.controllers = [];
		this.matrix = new THREE.Matrix4;
		for (var c = 0; c < b.childNodes.length; c++) if (e = b.childNodes[c], e.nodeType == 1) switch (e.nodeName) {
		case "node":
			this.nodes.push((new v).parse(e));
			break;
		case "instance_camera":
			break;
		case "instance_controller":
			this.controllers.push((new x).parse(e));
			break;
		case "instance_geometry":
			this.geometries.push((new A).parse(e));
			break;
		case "instance_light":
			break;
		case "instance_node":
			e = e.getAttribute("url").replace(/^#/, "");
			(e = $.evaluate(".//dae:library_nodes//dae:node[@id='" + e + "']", $, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()) && this.nodes.push((new v).parse(e));
			break;
		case "rotate":
		case "translate":
		case "scale":
		case "matrix":
		case "lookat":
		case "skew":
			this.transforms.push((new p).parse(e));
			break;
		case "extra":
			break;
		default:
			console.log(e.nodeName)
		}
		b = [];
		c = 1E6;
		e = -1E6;
		for (var f in J) for (var h = J[f], k = 0; k < h.channel.length; k++) {
			var m = h.channel[k],
				n = h.sampler[k];
			f = m.target.split("/")[0];
			if (f == this.id) n.create(), m.sampler = n, c = Math.min(c, n.startTime), e = Math.max(e, n.endTime), b.push(m)
		}
		if (b.length) this.startTime = c, this.endTime = e;
		if ((this.channels = b) && this.channels.length) {
			f = 1E7;
			for (i = 0; i < this.channels.length; i++) {
				b = this.channels[i].sampler;
				for (c = 0; c < b.input.length - 1; c++) f = Math.min(f, b.input[c + 1] - b.input[c])
			}
			c = [];
			for (b = this.startTime; b < this.endTime; b += f) {
				e = b;
				for (var h = {}, o = k = void 0, k = 0; k < this.channels.length; k++) o = this.channels[k], h[o.sid] = o;
				m = new THREE.Matrix4;
				for (k = 0; k < this.transforms.length; k++) if (n = this.transforms[k], o = h[n.sid], o !== void 0) {
					for (var t = o.sampler, u, o = 0; o < t.input.length - 1; o++) if (t.input[o + 1] > e) {
						u = t.output[o];
						break
					}
					m = u !== void 0 ? u instanceof THREE.Matrix4 ? m.multiply(m, u) : m.multiply(m, n.matrix) : m.multiply(m, n.matrix)
				}
				else m = m.multiply(m, n.matrix);
				e = m;
				c.push({
					time: b,
					pos: [e.n14, e.n24, e.n34],
					rotq: [0, 0, 0, 1],
					scl: [1, 1, 1]
				})
			}
			this.keys = c
		}
		this.updateMatrix();
		return this
	};
	v.prototype.updateMatrix = function () {
		this.matrix.identity();
		for (var b = 0; b < this.transforms.length; b++) this.matrix.multiply(this.matrix, this.transforms[b].matrix)
	};
	p.prototype.parse = function (b) {
		this.sid = b.getAttribute("sid");
		this.type = b.nodeName;
		this.data = pa(b.textContent);
		this.updateMatrix();
		return this
	};
	p.prototype.updateMatrix = function () {
		var b = 0;
		this.matrix.identity();
		switch (this.type) {
		case "matrix":
			this.matrix.set(this.data[0], this.data[1], this.data[2], this.data[3], this.data[4], this.data[5], this.data[6], this.data[7], this.data[8], this.data[9], this.data[10], this.data[11], this.data[12], this.data[13], this.data[14], this.data[15]);
			break;
		case "translate":
			this.matrix.setTranslation(this.data[0], this.data[1], this.data[2]);
			break;
		case "rotate":
			b = this.data[3] * (Math.PI / 180);
			this.matrix.setRotationAxis(new THREE.Vector3(this.data[0], this.data[1], this.data[2]), b);
			break;
		case "scale":
			this.matrix.setScale(this.data[0], this.data[1], this.data[2])
		}
		return this.matrix
	};
	x.prototype.parse = function (b) {
		this.url = b.getAttribute("url").replace(/^#/, "");
		this.skeleton = [];
		this.instance_material = [];
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "skeleton":
				this.skeleton.push(c.textContent.replace(/^#/, ""));
				break;
			case "bind_material":
				if (c = $.evaluate(".//dae:instance_material", c, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)) for (var f = c.iterateNext(); f;) this.instance_material.push((new w).parse(f)), f = c.iterateNext()
			}
		}
		return this
	};
	w.prototype.parse = function (b) {
		this.symbol = b.getAttribute("symbol");
		this.target = b.getAttribute("target").replace(/^#/, "");
		return this
	};
	A.prototype.parse = function (b) {
		this.url = b.getAttribute("url").replace(/^#/, "");
		this.instance_material = [];
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1 && c.nodeName == "bind_material") {
				if (b = $.evaluate(".//dae:instance_material", c, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)) for (e = b.iterateNext(); e;) this.instance_material.push((new w).parse(e)), e = b.iterateNext();
				break
			}
		}
		return this
	};
	z.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			switch (c.nodeName) {
			case "mesh":
				this.mesh = (new y(this)).parse(c)
			}
		}
		return this
	};
	y.prototype.parse = function (b) {
		function e(b, c) {
			var f = ga(b.position);
			h[f] === void 0 && (h[f] = {
				v: b,
				index: c
			});
			return h[f]
		}
		this.primitives = [];
		var c;
		for (c = 0; c < b.childNodes.length; c++) {
			var f = b.childNodes[c];
			switch (f.nodeName) {
			case "source":
				ea(f);
				break;
			case "vertices":
				this.vertices = (new F).parse(f);
				break;
			case "triangles":
				this.primitives.push((new E).parse(f));
				break;
			case "polygons":
				console.warn("polygon holes not yet supported!");
			case "polylist":
				this.primitives.push((new C).parse(f))
			}
		}
		var h = {};
		this.geometry3js = new THREE.Geometry;
		f = ka[this.vertices.input.POSITION.source].data;
		for (b = c = 0; c < f.length; c += 3, b++) {
			var k = new THREE.Vertex(new THREE.Vector3(f[c], f[c + 1], f[c + 2]));
			e(k, b);
			this.geometry3js.vertices.push(k)
		}
		for (c = 0; c < this.primitives.length; c++) primitive = this.primitives[c], primitive.setVertices(this.vertices), this.handlePrimitive(primitive, this.geometry3js, h);
		this.geometry3js.computeCentroids();
		this.geometry3js.computeFaceNormals();
		this.geometry3js.computeVertexNormals();
		this.geometry3js.computeBoundingBox();
		return this
	};
	y.prototype.handlePrimitive = function (b, e, c) {
		var f = 0,
			h, k, m = b.p,
			n = b.inputs,
			o, p, t, u = 0,
			w = 3,
			v = [];
		for (h = 0; h < n.length; h++) switch (o = n[h], o.semantic) {
		case "TEXCOORD":
			v.push(o.set)
		}
		for (; f < m.length;) {
			var x = [],
				y = [],
				z = {},
				A = [];
			b.vcount && (w = b.vcount[u++]);
			for (h = 0; h < w; h++) for (k = 0; k < n.length; k++) switch (o = n[k], source = ka[o.source], p = m[f + h * n.length + o.offset], numParams = source.accessor.params.length, t = p * numParams, o.semantic) {
			case "VERTEX":
				o = ga(e.vertices[p].position);
				x.push(c[o].index);
				break;
			case "NORMAL":
				y.push(new THREE.Vector3(source.data[t], source.data[t + 1], source.data[t + 2]));
				break;
			case "TEXCOORD":
				z[o.set] === void 0 && (z[o.set] = []);
				z[o.set].push(new THREE.UV(source.data[t], source.data[t + 1]));
				break;
			case "COLOR":
				A.push((new THREE.Color).setRGB(source.data[t], source.data[t + 1], source.data[t + 2]))
			}
			var C;
			w == 3 ? C = new THREE.Face3(x[0], x[1], x[2], [y[0], y[1], y[2]], A.length ? A : new THREE.Color) : w == 4 && (C = new THREE.Face4(x[0], x[1], x[2], x[3], [y[0], y[1], y[2], y[3]], A.length ? A : new THREE.Color));
			C.daeMaterial = b.material;
			e.faces.push(C);
			for (k = 0; k < v.length; k++) h = z[v[k]], e.faceVertexUvs[k].push([h[0],
				                h[1], h[2]]);
			f += n.length * w
		}
	};
	C.prototype = new E;
	C.prototype.constructor = C;
	E.prototype.setVertices = function (b) {
		for (var e = 0; e < this.inputs.length; e++) if (this.inputs[e].source == b.id) this.inputs[e].source = b.input.POSITION.source
	};
	E.prototype.parse = function (b) {
		this.inputs = [];
		this.material = b.getAttribute("material");
		this.count = da(b, "count", 0);
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			switch (c.nodeName) {
			case "input":
				this.inputs.push((new M).parse(b.childNodes[e]));
				break;
			case "vcount":
				this.vcount = fa(c.textContent);
				break;
			case "p":
				this.p = fa(c.textContent)
			}
		}
		return this
	};
	D.prototype.parse = function (b) {
		this.params = [];
		this.source = b.getAttribute("source");
		this.count = da(b, "count", 0);
		this.stride = da(b, "stride", 0);
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeName == "param") {
				var f = {};
				f.name = c.getAttribute("name");
				f.type = c.getAttribute("type");
				this.params.push(f)
			}
		}
		return this
	};
	F.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		for (var e = 0; e < b.childNodes.length; e++) b.childNodes[e].nodeName == "input" && (input = (new M).parse(b.childNodes[e]), this.input[input.semantic] = input);
		return this
	};
	M.prototype.parse = function (b) {
		this.semantic = b.getAttribute("semantic");
		this.source = b.getAttribute("source").replace(/^#/, "");
		this.set = da(b, "set", -1);
		this.offset = da(b, "offset", 0);
		if (this.semantic == "TEXCOORD" && this.set < 0) this.set = 0;
		return this
	};
	N.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			switch (c.nodeName) {
			case "bool_array":
				for (var f = ma(c.textContent), h = [], k = 0; k < f.length; k++) h.push(f[k] == "true" || f[k] == "1" ? !0 : !1);
				this.data = h;
				this.type = c.nodeName;
				break;
			case "float_array":
				this.data = pa(c.textContent);
				this.type = c.nodeName;
				break;
			case "int_array":
				this.data = fa(c.textContent);
				this.type = c.nodeName;
				break;
			case "IDREF_array":
			case "Name_array":
				this.data = ma(c.textContent);
				this.type = c.nodeName;
				break;
			case "technique_common":
				for (f = 0; f < c.childNodes.length; f++) if (c.childNodes[f].nodeName == "accessor") {
					this.accessor = (new D).parse(c.childNodes[f]);
					break
				}
			}
		}
		return this
	};
	N.prototype.read = function () {
		var b = [],
			e = this.accessor.params[0];
		switch (e.type) {
		case "IDREF":
		case "Name":
		case "name":
		case "float":
			return this.data;
		case "float4x4":
			for (e = 0; e < this.data.length; e += 16) {
				var c = this.data.slice(e, e + 16),
					f = new THREE.Matrix4;
				f.set(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]);
				b.push(f)
			}
			break;
		default:
			console.log("ColladaLoader: Source: Read dont know how to read " + e.type + ".")
		}
		return b
	};
	G.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		this.name = b.getAttribute("name");
		for (var e = 0; e < b.childNodes.length; e++) if (b.childNodes[e].nodeName == "instance_effect") {
			this.instance_effect = (new U).parse(b.childNodes[e]);
			break
		}
		return this
	};
	H.prototype.isColor = function () {
		return this.texture == null
	};
	H.prototype.isTexture = function () {
		return this.texture != null
	};
	H.prototype.parse = function (b) {
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "color":
				c = pa(c.textContent);
				this.color = new THREE.Color(0);
				this.color.setRGB(c[0], c[1], c[2]);
				this.color.a = c[3];
				break;
			case "texture":
				this.texture = c.getAttribute("texture"), this.texcoord = c.getAttribute("texcoord")
			}
		}
		return this
	};
	K.prototype.parse = function (b) {
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "ambient":
			case "emission":
			case "diffuse":
			case "specular":
			case "transparent":
				this[c.nodeName] = (new H).parse(c);
				break;
			case "shininess":
			case "reflectivity":
			case "transparency":
				var f;
				f = $.evaluate(".//dae:float", c, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
				for (var h = f.iterateNext(), k = []; h;) k.push(h), h = f.iterateNext();
				f = k;
				f.length > 0 && (this[c.nodeName] = parseFloat(f[0].textContent))
			}
		}
		this.create();
		return this
	};
	K.prototype.create = function () {
		var b = {},
			e = this.transparency !== void 0 && this.transparency < 1,
			c;
		for (c in this) switch (c) {
		case "ambient":
		case "emission":
		case "diffuse":
		case "specular":
			var f = this[c];
			if (f instanceof H) if (f.isTexture()) {
				if (this.effect.sampler && this.effect.surface && this.effect.sampler.source == this.effect.surface.sid && (f = sa[this.effect.surface.init_from])) b.map = THREE.ImageUtils.loadTexture(Ea + f.init_from), b.map.wrapS = THREE.RepeatWrapping, b.map.wrapT = THREE.RepeatWrapping, b.map.repeat.x = 1, b.map.repeat.y = -1
			}
			else c == "diffuse" ? b.color = f.color.getHex() : e || (b[c] = f.color.getHex());
			break;
		case "shininess":
		case "reflectivity":
			b[c] = this[c];
			break;
		case "transparency":
			if (e) b.transparent = !0, b.opacity = this[c], e = !0
		}
		b.shading = Fa;
		return this.material = new THREE.MeshLambertMaterial(b)
	};
	Z.prototype.parse = function (b) {
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "init_from":
				this.init_from = c.textContent;
				break;
			case "format":
				this.format = c.textContent;
				break;
			default:
				console.log("unhandled Surface prop: " + c.nodeName)
			}
		}
		return this
	};
	L.prototype.parse = function (b) {
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "source":
				this.source = c.textContent;
				break;
			case "minfilter":
				this.minfilter = c.textContent;
				break;
			case "magfilter":
				this.magfilter = c.textContent;
				break;
			case "mipfilter":
				this.mipfilter = c.textContent;
				break;
			case "wrap_s":
				this.wrap_s = c.textContent;
				break;
			case "wrap_t":
				this.wrap_t = c.textContent;
				break;
			default:
				console.log("unhandled Sampler2D prop: " + c.nodeName)
			}
		}
		return this
	};
	P.prototype.create = function () {
		if (this.shader == null) return null
	};
	P.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		this.name = b.getAttribute("name");
		this.shader = null;
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "profile_COMMON":
				this.parseTechnique(this.parseProfileCOMMON(c))
			}
		}
		return this
	};
	P.prototype.parseNewparam = function (b) {
		for (var e = b.getAttribute("sid"), c = 0; c < b.childNodes.length; c++) {
			var f = b.childNodes[c];
			if (f.nodeType == 1) switch (f.nodeName) {
			case "surface":
				this.surface = (new Z(this)).parse(f);
				this.surface.sid = e;
				break;
			case "sampler2D":
				this.sampler = (new L(this)).parse(f);
				this.sampler.sid = e;
				break;
			case "extra":
				break;
			default:
				console.log(f.nodeName)
			}
		}
	};
	P.prototype.parseProfileCOMMON = function (b) {
		for (var e, c = 0; c < b.childNodes.length; c++) {
			var f = b.childNodes[c];
			if (f.nodeType == 1) switch (f.nodeName) {
			case "profile_COMMON":
				this.parseProfileCOMMON(f);
				break;
			case "technique":
				e = f;
				break;
			case "newparam":
				this.parseNewparam(f);
				break;
			case "extra":
				break;
			default:
				console.log(f.nodeName)
			}
		}
		return e
	};
	P.prototype.parseTechnique = function (b) {
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "lambert":
			case "blinn":
			case "phong":
				this.shader = (new K(c.nodeName, this)).parse(c)
			}
		}
	};
	U.prototype.parse = function (b) {
		this.url = b.getAttribute("url").replace(/^#/, "");
		return this
	};
	Y.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		this.name = b.getAttribute("name");
		this.source = {};
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "source":
				c = (new N).parse(c);
				this.source[c.id] = c;
				break;
			case "sampler":
				this.sampler.push((new o(this)).parse(c));
				break;
			case "channel":
				this.channel.push((new X(this)).parse(c))
			}
		}
		return this
	};
	X.prototype.parse = function (b) {
		this.source = b.getAttribute("source").replace(/^#/, "");
		this.target = b.getAttribute("target");
		var e = this.target.split("/");
		e.shift();
		var b = e.shift(),
			c = b.indexOf(".") >= 0,
			f = b.indexOf("(") >= 0,
			h, k;
		if (c) e = b.split("."), b = e.shift(), k = e.shift();
		else if (f) {
			h = b.split("(");
			b = h.shift();
			for (e = 0; e < h.length; e++) h[e] = parseInt(h[e].replace(/\)/, ""))
		}
		this.sid = b;
		this.dotSyntax = c;
		this.arrSyntax = f;
		this.arrIndices = h;
		this.member = k;
		return this
	};
	o.prototype.parse = function (b) {
		this.id = b.getAttribute("id");
		this.inputs = [];
		for (var e = 0; e < b.childNodes.length; e++) {
			var c = b.childNodes[e];
			if (c.nodeType == 1) switch (c.nodeName) {
			case "input":
				this.inputs.push((new M).parse(c))
			}
		}
		return this
	};
	o.prototype.create = function () {
		for (var b = 0; b < this.inputs.length; b++) {
			var e = this.inputs[b],
				c = this.animation.source[e.source];
			switch (e.semantic) {
			case "INPUT":
				this.input = c.read();
				break;
			case "OUTPUT":
				this.output = c.read();
				break;
			case "INTERPOLATION":
				this.interpolation = c.read();
				break;
			case "IN_TANGENT":
				break;
			case "OUT_TANGENT":
				break;
			default:
				console.log(e.semantic)
			}
		}
		this.duration = this.endTime = this.startTime = 0;
		if (this.input.length) {
			this.startTime = 1E8;
			this.endTime = -1E8;
			for (b = 0; b < this.input.length; b++) this.startTime = Math.min(this.startTime, this.input[b]), this.endTime = Math.max(this.endTime, this.input[b]);
			this.duration = this.endTime - this.startTime
		}
	};
	return {
		load: function (e, f) {
			if (document.implementation && document.implementation.createDocument) {
				document.implementation.createDocument("http://www.collada.org/2005/11/COLLADASchema", "COLLADA", null);
				e += "?rnd=" + Math.random();
				var n = new XMLHttpRequest;
				n.overrideMimeType && n.overrideMimeType("text/xml");
				n.onreadystatechange = function () {
					if (n.readyState == 4 && (n.status == 0 || n.status == 200)) {
						ha = f;
						var o, p = e;
						$ = n.responseXML;
						o = ha;
						p !== void 0 && (p = p.split("/"), p.pop(), Ea = p.length < 1 ? "" : p.join("/") + "/");
						sa = b("//dae:library_images/dae:image", k, "image");
						ra = b("//dae:library_materials/dae:material", G, "material");
						va = b("//dae:library_effects/dae:effect", P, "effect");
						na = b("//dae:library_geometries/dae:geometry", z, "geometry");
						Q = b("//dae:library_controllers/dae:controller", m, "controller");
						J = b("//dae:library_animations/dae:animation", Y, "animation");
						ua = b(".//dae:library_visual_scenes/dae:visual_scene", u, "visual_scene");
						Ba = [];
						Da = [];
						(p = $.evaluate(".//dae:scene/dae:instance_visual_scene", $, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()) ? (p = p.getAttribute("url").replace(/^#/, ""), aa = ua[p]) : aa = null;
						ca = new THREE.Object3D;
						for (p = 0; p < aa.nodes.length; p++) ca.add(h(aa.nodes[p]));
						c();
						for (var t in J);
						t = {
							scene: ca,
							morphs: Ba,
							skins: Da,
							dae: {
								images: sa,
								materials: ra,
								effects: va,
								geometries: na,
								controllers: Q,
								animations: J,
								visualScenes: ua,
								scene: aa
							}
						};
						o && o(t)
					}
				};
				n.open("GET", e, !0);
				n.send(null)
			}
			else alert("Don't know how to parse XML!")
		},
		setPreferredShading: function (b) {
			Fa = b
		},
		applySkin: f,
		geometries: na
	}
};
THREE.JSONLoader = function (b) {
	THREE.Loader.call(this, b)
};
THREE.JSONLoader.prototype = new THREE.Loader;
THREE.JSONLoader.prototype.constructor = THREE.JSONLoader;
THREE.JSONLoader.prototype.supr = THREE.Loader.prototype;
THREE.JSONLoader.prototype.load = function (b) {
	var c = this,
		e = b.model,
		f = b.callback,
		h = b.texture_path ? b.texture_path : this.extractUrlbase(e),
		b = new Worker(e);
	b.onmessage = function (b) {
		c.createModel(b.data, f, h);
		c.onLoadComplete()
	};
	this.onLoadStart();
	b.postMessage((new Date).getTime())
};
THREE.JSONLoader.prototype.createModel = function (b, c, e) {
	var f = new THREE.Geometry,
		h = b.scale !== void 0 ? 1 / b.scale : 1;
	this.init_materials(f, b.materials, e);
	(function (e) {
		if (b.version === void 0 || b.version != 2) console.error("Deprecated file format.");
		else {
			var c, h, t, u, v, p, x, w, A, z, y, C, E, D, F = b.faces;
			p = b.vertices;
			var M = b.normals,
				N = b.colors,
				G = 0;
			for (c = 0; c < b.uvs.length; c++) b.uvs[c].length && G++;
			for (c = 0; c < G; c++) f.faceUvs[c] = [], f.faceVertexUvs[c] = [];
			u = 0;
			for (v = p.length; u < v;) x = new THREE.Vertex, x.position.x = p[u++] * e, x.position.y = p[u++] * e, x.position.z = p[u++] * e, f.vertices.push(x);
			u = 0;
			for (v = F.length; u < v;) {
				e = F[u++];
				p = e & 1;
				t = e & 2;
				c = e & 4;
				h = e & 8;
				w = e & 16;
				x = e & 32;
				z = e & 64;
				e &= 128;
				p ? (y = new THREE.Face4, y.a = F[u++], y.b = F[u++], y.c = F[u++], y.d = F[u++], p = 4) : (y = new THREE.Face3, y.a = F[u++], y.b = F[u++], y.c = F[u++], p = 3);
				if (t) t = F[u++], y.materials = f.materials[t];
				t = f.faces.length;
				if (c) for (c = 0; c < G; c++) C = b.uvs[c], A = F[u++], D = C[A * 2], A = C[A * 2 + 1], f.faceUvs[c][t] = new THREE.UV(D, A);
				if (h) for (c = 0; c < G; c++) {
					C = b.uvs[c];
					E = [];
					for (h = 0; h < p; h++) A = F[u++], D = C[A * 2], A = C[A * 2 + 1], E[h] = new THREE.UV(D, A);
					f.faceVertexUvs[c][t] = E
				}
				if (w) w = F[u++] * 3, h = new THREE.Vector3, h.x = M[w++], h.y = M[w++], h.z = M[w], y.normal = h;
				if (x) for (c = 0; c < p; c++) w = F[u++] * 3, h = new THREE.Vector3, h.x = M[w++], h.y = M[w++], h.z = M[w], y.vertexNormals.push(h);
				if (z) x = F[u++], x = new THREE.Color(N[x]), y.color = x;
				if (e) for (c = 0; c < p; c++) x = F[u++], x = new THREE.Color(N[x]), y.vertexColors.push(x);
				f.faces.push(y)
			}
		}
	})(h);
	(function () {
		var e, c, h, t;
		if (b.skinWeights) {
			e = 0;
			for (c = b.skinWeights.length; e < c; e += 2) h = b.skinWeights[e], t = b.skinWeights[e + 1], f.skinWeights.push(new THREE.Vector4(h, t, 0, 0))
		}
		if (b.skinIndices) {
			e = 0;
			for (c = b.skinIndices.length; e < c; e += 2) h = b.skinIndices[e], t = b.skinIndices[e + 1], f.skinIndices.push(new THREE.Vector4(h, t, 0, 0))
		}
		f.bones = b.bones;
		f.animation = b.animation
	})();
	(function (e) {
		if (b.morphTargets !== void 0) {
			var c, h, t, u, v, p, x, w, A;
			c = 0;
			for (h = b.morphTargets.length; c < h; c++) {
				f.morphTargets[c] = {};
				f.morphTargets[c].name = b.morphTargets[c].name;
				f.morphTargets[c].vertices = [];
				w = f.morphTargets[c].vertices;
				A = b.morphTargets[c].vertices;
				t = 0;
				for (u = A.length; t < u; t += 3) v = A[t] * e, p = A[t + 1] * e, x = A[t + 2] * e, w.push(new THREE.Vertex(new THREE.Vector3(v, p, x)))
			}
		}
		if (b.morphColors !== void 0) {
			c = 0;
			for (h = b.morphColors.length; c < h; c++) {
				f.morphColors[c] = {};
				f.morphColors[c].name = b.morphColors[c].name;
				f.morphColors[c].colors = [];
				u = f.morphColors[c].colors;
				v = b.morphColors[c].colors;
				e = 0;
				for (t = v.length; e < t; e += 3) p = new THREE.Color(16755200), p.setRGB(v[e], v[e + 1], v[e + 2]), u.push(p)
			}
		}
	})(h);
	f.computeCentroids();
	f.computeFaceNormals();
	this.hasNormals(f) && f.computeTangents();
	c(f)
};
THREE.SceneLoader = function () {
	this.onLoadStart = function () {};
	this.onLoadProgress = function () {};
	this.onLoadComplete = function () {};
	this.callbackSync = function () {};
	this.callbackProgress = function () {}
};
THREE.SceneLoader.prototype = {
	load: function (b, c) {
		var e = this,
			f = new Worker(b);
		f.postMessage(0);
		var h = THREE.Loader.prototype.extractUrlbase(b);
		f.onmessage = function (b) {
			function f(b, e) {
				return e == "relativeToHTML" ? b : h + "/" + b
			}

			function n() {
				for (w in P.objects) if (!R.objects[w]) if (E = P.objects[w], E.geometry !== void 0) {
					if (N = R.geometries[E.geometry]) {
						var b = !1;
						Z = [];
						for (fa = 0; fa < E.materials.length; fa++) Z[fa] = R.materials[E.materials[fa]], b = Z[fa] instanceof THREE.ShaderMaterial;
						b && N.computeTangents();
						D = E.position;
						r = E.rotation;
						q = E.quaternion;
						s = E.scale;
						q = 0;
						Z.length == 0 && (Z[0] = new THREE.MeshFaceMaterial);
						Z.length > 1 && (Z = [new THREE.MeshFaceMaterial]);
						object = new THREE.Mesh(N, Z);
						object.name = w;
						object.position.set(D[0], D[1], D[2]);
						q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]);
						object.scale.set(s[0], s[1], s[2]);
						object.visible = E.visible;
						R.scene.add(object);
						R.objects[w] = object;
						E.meshCollider && (b = THREE.CollisionUtils.MeshColliderWBox(object), R.scene.collisions.colliders.push(b));
						if (E.castsShadow) b = new THREE.ShadowVolume(N), R.scene.add(b), b.position = object.position, b.rotation = object.rotation, b.scale = object.scale;
						E.trigger && E.trigger.toLowerCase() != "none" && (b = {
							type: E.trigger,
							object: E
						}, R.triggers[object.name] = b)
					}
				}
				else D = E.position, r = E.rotation, q = E.quaternion, s = E.scale, q = 0, object = new THREE.Object3D, object.name = w, object.position.set(D[0], D[1], D[2]), q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]), object.scale.set(s[0], s[1], s[2]), object.visible = E.visible !== void 0 ? E.visible : !1, R.scene.add(object), R.objects[w] = object, R.empties[w] = object, E.trigger && E.trigger.toLowerCase() != "none" && (b = {
					type: E.trigger,
					object: E
				}, R.triggers[object.name] = b)
			}

			function t(b) {
				return function (c) {
					R.geometries[b] = c;
					n();
					Y -= 1;
					e.onLoadComplete();
					v()
				}
			}

			function u(b) {
				return function (e) {
					R.geometries[b] = e
				}
			}

			function v() {
				e.callbackProgress({
					totalModels: o,
					totalTextures: ea,
					loadedModels: o - Y,
					loadedTextures: ea - X
				}, R);
				e.onLoadProgress();
				Y == 0 && X == 0 && c(R)
			}
			var p, x, w, A, z, y, C, E, D, F, M, N, G, H, K, Z, L, P, U, Y, X, o, ea, R;
			P = b.data;
			K = new THREE.BinaryLoader;
			U = new THREE.JSONLoader;
			X = Y = 0;
			R = {
				scene: new THREE.Scene,
				geometries: {},
				materials: {},
				textures: {},
				objects: {},
				cameras: {},
				lights: {},
				fogs: {},
				triggers: {},
				empties: {}
			};
			b = !1;
			for (w in P.objects) if (E = P.objects[w], E.meshCollider) {
				b = !0;
				break
			}
			if (b) R.scene.collisions = new THREE.CollisionSystem;
			if (P.transform) {
				b = P.transform.position;
				F = P.transform.rotation;
				var pa = P.transform.scale;
				b && R.scene.position.set(b[0], b[1], b[2]);
				F && R.scene.rotation.set(F[0], F[1], F[2]);
				pa && R.scene.scale.set(pa[0], pa[1], pa[2]);
				(b || F || pa) && R.scene.updateMatrix()
			}
			b = function () {
				X -= 1;
				v();
				e.onLoadComplete()
			};
			for (z in P.cameras) F = P.cameras[z], F.type == "perspective" ? G = new THREE.PerspectiveCamera(F.fov, F.aspect, F.near, F.far) : F.type == "ortho" && (G = new THREE.OrthographicCamera(F.left, F.right, F.top, F.bottom, F.near, F.far)), D = F.position, F = F.target, G.position.set(D[0], D[1], D[2]), G.target = new THREE.Vector3(F[0], F[1], F[2]), R.cameras[z] = G;
			for (A in P.lights) z = P.lights[A], G = z.color !== void 0 ? z.color : 16777215, F = z.intensity !== void 0 ? z.intensity : 1, z.type == "directional" ? (D = z.direction, L = new THREE.DirectionalLight(G, F), L.position.set(D[0], D[1], D[2]), L.position.normalize()) : z.type == "point" ? (D = z.position, d = z.distance, L = new THREE.PointLight(G, F, d), L.position.set(D[0], D[1], D[2])) : z.type == "ambient" && (L = new THREE.AmbientLight(G)), R.scene.add(L), R.lights[A] = L;
			for (y in P.fogs) A = P.fogs[y], A.type == "linear" ? H = new THREE.Fog(0, A.near, A.far) : A.type == "exp2" && (H = new THREE.FogExp2(0, A.density)), F = A.color, H.color.setRGB(F[0], F[1], F[2]), R.fogs[y] = H;
			if (R.cameras && P.defaults.camera) R.currentCamera = R.cameras[P.defaults.camera];
			if (R.fogs && P.defaults.fog) R.scene.fog = R.fogs[P.defaults.fog];
			F = P.defaults.bgcolor;
			R.bgColor = new THREE.Color;
			R.bgColor.setRGB(F[0], F[1], F[2]);
			R.bgColorAlpha = P.defaults.bgalpha;
			for (p in P.geometries) if (y = P.geometries[p], y.type == "bin_mesh" || y.type == "ascii_mesh") Y += 1, e.onLoadStart();
			o = Y;
			for (p in P.geometries) y = P.geometries[p], y.type == "cube" ? (N = new THREE.CubeGeometry(y.width, y.height, y.depth, y.segmentsWidth, y.segmentsHeight, y.segmentsDepth, null, y.flipped, y.sides), R.geometries[p] = N) : y.type == "plane" ? (N = new THREE.PlaneGeometry(y.width, y.height, y.segmentsWidth, y.segmentsHeight), R.geometries[p] = N) : y.type == "sphere" ? (N = new THREE.SphereGeometry(y.radius, y.segmentsWidth, y.segmentsHeight), R.geometries[p] = N) : y.type == "cylinder" ? (N = new THREE.CylinderGeometry(y.topRad, y.botRad, y.height, y.radSegs, y.heightSegs), R.geometries[p] = N) : y.type == "torus" ? (N = new THREE.TorusGeometry(y.radius, y.tube, y.segmentsR, y.segmentsT), R.geometries[p] = N) : y.type == "icosahedron" ? (N = new THREE.IcosahedronGeometry(y.subdivisions), R.geometries[p] = N) : y.type == "bin_mesh" ? K.load({
				model: f(y.url, P.urlBaseType),
				callback: t(p)
			}) : y.type == "ascii_mesh" ? U.load({
				model: f(y.url, P.urlBaseType),
				callback: t(p)
			}) : y.type == "embedded_mesh" && (y = P.embeds[y.id]) && U.createModel(y, u(p), "");
			for (C in P.textures) if (p = P.textures[C], p.url instanceof Array) {
				X += p.url.length;
				for (K = 0; K < p.url.length; K++) e.onLoadStart()
			}
			else X += 1, e.onLoadStart();
			ea = X;
			for (C in P.textures) {
				p = P.textures[C];
				if (p.mapping != void 0 && THREE[p.mapping] != void 0) p.mapping = new THREE[p.mapping];
				if (p.url instanceof Array) {
					K = [];
					for (var fa = 0; fa < p.url.length; fa++) K[fa] = f(p.url[fa], P.urlBaseType);
					K = THREE.ImageUtils.loadTextureCube(K, p.mapping, b)
				}
				else {
					K = THREE.ImageUtils.loadTexture(f(p.url, P.urlBaseType), p.mapping, b);
					if (THREE[p.minFilter] != void 0) K.minFilter = THREE[p.minFilter];
					if (THREE[p.magFilter] != void 0) K.magFilter = THREE[p.magFilter];
					if (p.repeat) {
						K.repeat.set(p.repeat[0], p.repeat[1]);
						if (p.repeat[0] != 1) K.wrapS = THREE.RepeatWrapping;
						if (p.repeat[1] != 1) K.wrapT = THREE.RepeatWrapping
					}
					p.offset && K.offset.set(p.offset[0], p.offset[1]);
					if (p.wrap) {
						U = {
							repeat: THREE.RepeatWrapping,
							mirror: THREE.MirroredRepeatWrapping
						};
						if (U[p.wrap[0]] !== void 0) K.wrapS = U[p.wrap[0]];
						if (U[p.wrap[1]] !== void 0) K.wrapT = U[p.wrap[1]]
					}
				}
				R.textures[C] = K
			}
			for (x in P.materials) {
				C = P.materials[x];
				for (M in C.parameters) if (M == "envMap" || M == "map" || M == "lightMap") C.parameters[M] = R.textures[C.parameters[M]];
				else if (M == "shading") C.parameters[M] = C.parameters[M] == "flat" ? THREE.FlatShading : THREE.SmoothShading;
				else if (M == "blending") C.parameters[M] = THREE[C.parameters[M]] ? THREE[C.parameters[M]] : THREE.NormalBlending;
				else if (M == "combine") C.parameters[M] = C.parameters[M] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation;
				else if (M == "vertexColors") if (C.parameters[M] == "face") C.parameters[M] = THREE.FaceColors;
				else if (C.parameters[M]) C.parameters[M] = THREE.VertexColors;
				if (C.parameters.opacity !== void 0 && C.parameters.opacity < 1) C.parameters.transparent = !0;
				if (C.parameters.normalMap) {
					p = THREE.ShaderUtils.lib.normal;
					b = THREE.UniformsUtils.clone(p.uniforms);
					K = C.parameters.color;
					U = C.parameters.specular;
					y = C.parameters.ambient;
					H = C.parameters.shininess;
					b.tNormal.texture = R.textures[C.parameters.normalMap];
					if (C.parameters.normalMapFactor) b.uNormalScale.value = C.parameters.normalMapFactor;
					if (C.parameters.map) b.tDiffuse.texture = C.parameters.map, b.enableDiffuse.value = !0;
					if (C.parameters.lightMap) b.tAO.texture = C.parameters.lightMap, b.enableAO.value = !0;
					if (C.parameters.specularMap) b.tSpecular.texture = R.textures[C.parameters.specularMap], b.enableSpecular.value = !0;
					b.uDiffuseColor.value.setHex(K);
					b.uSpecularColor.value.setHex(U);
					b.uAmbientColor.value.setHex(y);
					b.uShininess.value = H;
					if (C.parameters.opacity) b.uOpacity.value = C.parameters.opacity;
					C = new THREE.ShaderMaterial({
						fragmentShader: p.fragmentShader,
						vertexShader: p.vertexShader,
						uniforms: b,
						lights: !0,
						fog: !0
					})
				}
				else C = new THREE[C.type](C.parameters);
				R.materials[x] = C
			}
			n();
			e.callbackSync(R)
		}
	},
	constructor: THREE.SceneLoader
};
THREE.UTF8Loader = function () {};
THREE.UTF8Loader.prototype = new THREE.UTF8Loader;
THREE.UTF8Loader.prototype.constructor = THREE.UTF8Loader;
THREE.UTF8Loader.prototype.load = function (b) {
	var c = new XMLHttpRequest,
		e = b.model,
		f = b.callback,
		h = b.scale !== void 0 ? b.scale : 1,
		k = b.offsetX !== void 0 ? b.offsetX : 0,
		m = b.offsetY !== void 0 ? b.offsetY : 0,
		n = b.offsetZ !== void 0 ? b.offsetZ : 0;
	c.onreadystatechange = function () {
		c.readyState == 4 ? c.status == 200 || c.status == 0 ? THREE.UTF8Loader.prototype.createModel(c.responseText, f, h, k, m, n) : alert("Couldn't load [" + e + "] [" + c.status + "]") : c.readyState != 3 && c.readyState == 2 && c.getResponseHeader("Content-Length")
	};
	c.open("GET", e, !0);
	c.send(null)
};
THREE.UTF8Loader.prototype.decompressMesh = function (b) {
	var c = b.charCodeAt(0);
	c >= 57344 && (c -= 2048);
	c++;
	for (var e = new Float32Array(8 * c), f = 1, h = 0; h < 8; h++) {
		for (var k = 0, m = 0; m < c; ++m) {
			var n = b.charCodeAt(m + f);
			k += n >> 1 ^ -(n & 1);
			e[8 * m + h] = k
		}
		f += c
	}
	c = b.length - f;
	k = new Uint16Array(c);
	for (h = m = 0; h < c; h++) n = b.charCodeAt(h + f), k[h] = m - n, n == 0 && m++;
	return [e, k]
};
THREE.UTF8Loader.prototype.createModel = function (b, c, e, f, h, k) {
	var m = function () {
			var c = this;
			c.materials = [];
			THREE.Geometry.call(this);
			var m = THREE.UTF8Loader.prototype.decompressMesh(b),
				u = [],
				v = [];
			(function (b, m, t) {
				for (var u, v, y, C = b.length; t < C; t += m) u = b[t], v = b[t + 1], y = b[t + 2], u = u / 16383 * e, v = v / 16383 * e, y = y / 16383 * e, u += f, v += h, y += k, c.vertices.push(new THREE.Vertex(new THREE.Vector3(u, v, y)))
			})(m[0], 8, 0);
			(function (b, e, c) {
				for (var f, h, k = b.length; c < k; c += e) f = b[c], h = b[c + 1], f /= 1023, h /= 1023, v.push(f, 1 - h)
			})(m[0], 8, 3);
			(function (b, e, c) {
				for (var f, h, k, m = b.length; c < m; c += e) f = b[c], h = b[c + 1], k = b[c + 2], f = (f - 512) / 511, h = (h - 512) / 511, k = (k - 512) / 511, u.push(f, h, k)
			})(m[0], 8, 5);
			(function (b) {
				var e, f, h, k, m, t, E, D, F, M = b.length;
				for (e = 0; e < M; e += 3) {
					f = b[e];
					h = b[e + 1];
					k = b[e + 2];
					m = c;
					D = f;
					F = h;
					t = k;
					E = f;
					var N = h,
						G = k,
						H = m.materials[0],
						K = u[N * 3],
						Z = u[N * 3 + 1],
						N = u[N * 3 + 2],
						L = u[G * 3],
						P = u[G * 3 + 1],
						G = u[G * 3 + 2];
					E = new THREE.Vector3(u[E * 3], u[E * 3 + 1], u[E * 3 + 2]);
					N = new THREE.Vector3(K, Z, N);
					G = new THREE.Vector3(L, P, G);
					m.faces.push(new THREE.Face3(D, F, t, [E, N, G], null, H));
					m = v[f * 2];
					f = v[f * 2 + 1];
					t = v[h * 2];
					E = v[h * 2 + 1];
					D = v[k * 2];
					F = v[k * 2 + 1];
					k = c.faceVertexUvs[0];
					h = t;
					t = E;
					E = [];
					E.push(new THREE.UV(m, f));
					E.push(new THREE.UV(h, t));
					E.push(new THREE.UV(D, F));
					k.push(E)
				}
			})(m[1]);
			this.computeCentroids();
			this.computeFaceNormals()
		};
	m.prototype = new THREE.Geometry;
	m.prototype.constructor = m;
	c(new m)
};
THREE.Axes = function () {
	THREE.Object3D.call(this);
	var b = new THREE.Geometry;
	b.vertices.push(new THREE.Vertex);
	b.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 100, 0)));
	var c = new THREE.CylinderGeometry(0, 5, 25, 5, 1),
		e = new THREE.Line(b, new THREE.LineBasicMaterial({
			color: 16711680
		}));
	e.rotation.z = -Math.PI / 2;
	this.add(e);
	e = new THREE.Mesh(c, new THREE.MeshBasicMaterial({
		color: 16711680
	}));
	e.position.x = 100;
	e.rotation.z = -Math.PI / 2;
	this.add(e);
	e = new THREE.Line(b, new THREE.LineBasicMaterial({
		color: 65280
	}));
	this.add(e);
	e = new THREE.Mesh(c, new THREE.MeshBasicMaterial({
		color: 65280
	}));
	e.position.y = 100;
	this.add(e);
	e = new THREE.Line(b, new THREE.LineBasicMaterial({
		color: 255
	}));
	e.rotation.x = Math.PI / 2;
	this.add(e);
	e = new THREE.Mesh(c, new THREE.MeshBasicMaterial({
		color: 255
	}));
	e.position.z = 100;
	e.rotation.x = Math.PI / 2;
	this.add(e)
};
THREE.Axes.prototype = new THREE.Object3D;
THREE.Axes.prototype.constructor = THREE.Axes;
THREE.MarchingCubes = function (b, c) {
	THREE.Object3D.call(this);
	this.materials = c instanceof Array ? c : [c];
	this.init = function (b) {
		this.isolation = 80;
		this.size = b;
		this.size2 = this.size * this.size;
		this.size3 = this.size2 * this.size;
		this.halfsize = this.size / 2;
		this.delta = 2 / this.size;
		this.yd = this.size;
		this.zd = this.size2;
		this.field = new Float32Array(this.size3);
		this.normal_cache = new Float32Array(this.size3 * 3);
		this.vlist = new Float32Array(36);
		this.nlist = new Float32Array(36);
		this.firstDraw = !0;
		this.maxCount = 4096;
		this.count = 0;
		this.hasNormal = this.hasPos = !1;
		this.positionArray = new Float32Array(this.maxCount * 3);
		this.normalArray = new Float32Array(this.maxCount * 3)
	};
	this.lerp = function (b, c, h) {
		return b + (c - b) * h
	};
	this.VIntX = function (b, c, h, k, m, n, t, u, v, p) {
		m = (m - v) / (p - v);
		v = this.normal_cache;
		c[k] = n + m * this.delta;
		c[k + 1] = t;
		c[k + 2] = u;
		h[k] = this.lerp(v[b], v[b + 3], m);
		h[k + 1] = this.lerp(v[b + 1], v[b + 4], m);
		h[k + 2] = this.lerp(v[b + 2], v[b + 5], m)
	};
	this.VIntY = function (b, c, h, k, m, n, t, u, v, p) {
		m = (m - v) / (p - v);
		v = this.normal_cache;
		c[k] = n;
		c[k + 1] = t + m * this.delta;
		c[k + 2] = u;
		c = b + this.yd * 3;
		h[k] = this.lerp(v[b], v[c], m);
		h[k + 1] = this.lerp(v[b + 1], v[c + 1], m);
		h[k + 2] = this.lerp(v[b + 2], v[c + 2], m)
	};
	this.VIntZ = function (b, c, h, k, m, n, t, u, v, p) {
		m = (m - v) / (p - v);
		v = this.normal_cache;
		c[k] = n;
		c[k + 1] = t;
		c[k + 2] = u + m * this.delta;
		c = b + this.zd * 3;
		h[k] = this.lerp(v[b], v[c], m);
		h[k + 1] = this.lerp(v[b + 1], v[c + 1], m);
		h[k + 2] = this.lerp(v[b + 2], v[c + 2], m)
	};
	this.compNorm = function (b) {
		var c = b * 3;
		this.normal_cache[c] == 0 && (this.normal_cache[c] = this.field[b - 1] - this.field[b + 1], this.normal_cache[c + 1] = this.field[b - this.yd] - this.field[b + this.yd], this.normal_cache[c + 2] = this.field[b - this.zd] - this.field[b + this.zd])
	};
	this.polygonize = function (b, c, h, k, m, n) {
		var t = k + 1,
			u = k + this.yd,
			v = k + this.zd,
			p = t + this.yd,
			x = t + this.zd,
			w = k + this.yd + this.zd,
			A = t + this.yd + this.zd,
			z = 0,
			y = this.field[k],
			C = this.field[t],
			E = this.field[u],
			D = this.field[p],
			F = this.field[v],
			M = this.field[x],
			N = this.field[w],
			G = this.field[A];
		y < m && (z |= 1);
		C < m && (z |= 2);
		E < m && (z |= 8);
		D < m && (z |= 4);
		F < m && (z |= 16);
		M < m && (z |= 32);
		N < m && (z |= 128);
		G < m && (z |= 64);
		var H = THREE.edgeTable[z];
		if (H == 0) return 0;
		var K = this.delta,
			Z = b + K,
			L = c + K,
			K = h + K;
		H & 1 && (this.compNorm(k), this.compNorm(t), this.VIntX(k * 3, this.vlist, this.nlist, 0, m, b, c, h, y, C));
		H & 2 && (this.compNorm(t), this.compNorm(p), this.VIntY(t * 3, this.vlist, this.nlist, 3, m, Z, c, h, C, D));
		H & 4 && (this.compNorm(u), this.compNorm(p), this.VIntX(u * 3, this.vlist, this.nlist, 6, m, b, L, h, E, D));
		H & 8 && (this.compNorm(k), this.compNorm(u), this.VIntY(k * 3, this.vlist, this.nlist, 9, m, b, c, h, y, E));
		H & 16 && (this.compNorm(v), this.compNorm(x), this.VIntX(v * 3, this.vlist, this.nlist, 12, m, b, c, K, F, M));
		H & 32 && (this.compNorm(x), this.compNorm(A), this.VIntY(x * 3, this.vlist, this.nlist, 15, m, Z, c, K, M, G));
		H & 64 && (this.compNorm(w), this.compNorm(A), this.VIntX(w * 3, this.vlist, this.nlist, 18, m, b, L, K, N, G));
		H & 128 && (this.compNorm(v), this.compNorm(w), this.VIntY(v * 3, this.vlist, this.nlist, 21, m, b, c, K, F, N));
		H & 256 && (this.compNorm(k), this.compNorm(v), this.VIntZ(k * 3, this.vlist, this.nlist, 24, m, b, c, h, y, F));
		H & 512 && (this.compNorm(t), this.compNorm(x), this.VIntZ(t * 3, this.vlist, this.nlist, 27, m, Z, c, h, C, M));
		H & 1024 && (this.compNorm(p), this.compNorm(A), this.VIntZ(p * 3, this.vlist, this.nlist, 30, m, Z, L, h, D, G));
		H & 2048 && (this.compNorm(u), this.compNorm(w), this.VIntZ(u * 3, this.vlist, this.nlist, 33, m, b, L, h, E, N));
		z <<= 4;
		for (m = k = 0; THREE.triTable[z + m] != -1;) b = z + m, c = b + 1, h = b + 2, this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[b], 3 * THREE.triTable[c], 3 * THREE.triTable[h], n), m += 3, k++;
		return k
	};
	this.posnormtriv = function (b, c, h, k, m, n) {
		var t = this.count * 3;
		this.positionArray[t] = b[h];
		this.positionArray[t + 1] = b[h + 1];
		this.positionArray[t + 2] = b[h + 2];
		this.positionArray[t + 3] = b[k];
		this.positionArray[t + 4] = b[k + 1];
		this.positionArray[t + 5] = b[k + 2];
		this.positionArray[t + 6] = b[m];
		this.positionArray[t + 7] = b[m + 1];
		this.positionArray[t + 8] = b[m + 2];
		this.normalArray[t] = c[h];
		this.normalArray[t + 1] = c[h + 1];
		this.normalArray[t + 2] = c[h + 2];
		this.normalArray[t + 3] = c[k];
		this.normalArray[t + 4] = c[k + 1];
		this.normalArray[t + 5] = c[k + 2];
		this.normalArray[t + 6] = c[m];
		this.normalArray[t + 7] = c[m + 1];
		this.normalArray[t + 8] = c[m + 2];
		this.hasNormal = this.hasPos = !0;
		this.count += 3;
		this.count >= this.maxCount - 3 && n(this)
	};
	this.begin = function () {
		this.count = 0;
		this.hasNormal = this.hasPos = !1
	};
	this.end = function (b) {
		if (this.count != 0) {
			for (var c = this.count * 3; c < this.positionArray.length; c++) this.positionArray[c] = 0;
			b(this)
		}
	};
	this.addBall = function (b, c, h, k, m) {
		var n = this.size * Math.sqrt(k / m),
			t = h * this.size,
			u = c * this.size,
			v = b * this.size,
			p = Math.floor(t - n);
		p < 1 && (p = 1);
		t = Math.floor(t + n);
		t > this.size - 1 && (t = this.size - 1);
		var x = Math.floor(u - n);
		x < 1 && (x = 1);
		u = Math.floor(u + n);
		u > this.size - 1 && (u = this.size - 1);
		var w = Math.floor(v - n);
		w < 1 && (w = 1);
		n = Math.floor(v + n);
		n > this.size - 1 && (n = this.size - 1);
		for (var A, z, y, C, E, D; p < t; p++) {
			v = this.size2 * p;
			z = p / this.size - h;
			E = z * z;
			for (z = x; z < u; z++) {
				y = v + this.size * z;
				A = z / this.size - c;
				D = A * A;
				for (A = w; A < n; A++) C = A / this.size - b, C = k / (1.0E-6 + C * C + D + E) - m, C > 0 && (this.field[y + A] += C)
			}
		}
	};
	this.addPlaneX = function (b, c) {
		var h, k, m, n, t, u = this.size,
			v = this.yd,
			p = this.zd,
			x = this.field,
			w = u * Math.sqrt(b / c);
		w > u && (w = u);
		for (h = 0; h < w; h++) if (k = h / u, k *= k, n = b / (1.0E-4 + k) - c, n > 0) for (k = 0; k < u; k++) {
			t = h + k * v;
			for (m = 0; m < u; m++) x[p * m + t] += n
		}
	};
	this.addPlaneY = function (b, c) {
		var h, k, m, n, t, u, v = this.size,
			p = this.yd,
			x = this.zd,
			w = this.field,
			A = v * Math.sqrt(b / c);
		A > v && (A = v);
		for (k = 0; k < A; k++) if (h = k / v, h *= h, n = b / (1.0E-4 + h) - c, n > 0) {
			t = k * p;
			for (h = 0; h < v; h++) {
				u = t + h;
				for (m = 0; m < v; m++) w[x * m + u] += n
			}
		}
	};
	this.addPlaneZ = function (b, c) {
		var h, k, m, n, t, u;
		size = this.size;
		yd = this.yd;
		zd = this.zd;
		field = this.field;
		dist = size * Math.sqrt(b / c);
		dist > size && (dist = size);
		for (m = 0; m < dist; m++) if (h = m / size, h *= h, n = b / (1.0E-4 + h) - c, n > 0) {
			t = zd * m;
			for (k = 0; k < size; k++) {
				u = t + k * yd;
				for (h = 0; h < size; h++) field[u + h] += n
			}
		}
	};
	this.reset = function () {
		var b;
		for (b = 0; b < this.size3; b++) this.normal_cache[b * 3] = 0, this.field[b] = 0
	};
	this.render = function (b) {
		this.begin();
		var c, h, k, m, n, t, u, v, p, x = this.size - 2;
		for (m = 1; m < x; m++) {
			p = this.size2 * m;
			u = (m - this.halfsize) / this.halfsize;
			for (k = 1; k < x; k++) {
				v = p + this.size * k;
				t = (k - this.halfsize) / this.halfsize;
				for (h = 1; h < x; h++) n = (h - this.halfsize) / this.halfsize, c = v + h, this.polygonize(n, t, u, c, this.isolation, b)
			}
		}
		this.end(b)
	};
	this.generateGeometry = function () {
		var b = 0,
			c = new THREE.Geometry,
			h = [];
		this.render(function (k) {
			var m, n, t, u, v, p, x, w;
			for (m = 0; m < k.count; m++) x = m * 3, v = x + 1, w = x + 2, n = k.positionArray[x], t = k.positionArray[v], u = k.positionArray[w], p = new THREE.Vector3(n, t, u), n = k.normalArray[x], t = k.normalArray[v], u = k.normalArray[w], x = new THREE.Vector3(n, t, u), x.normalize(), v = new THREE.Vertex(p), c.vertices.push(v), h.push(x);
			nfaces = k.count / 3;
			for (m = 0; m < nfaces; m++) x = (b + m) * 3, v = x + 1, w = x + 2, p = h[x], n = h[v], t = h[w], x = new THREE.Face3(x, v, w, [p, n, t]), c.faces.push(x);
			b += nfaces;
			k.count = 0
		});
		return c
	};
	this.init(b)
};
THREE.MarchingCubes.prototype = new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107,
	    1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170,
	    419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0]);
THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1,
	    -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7,
	    -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1,
	    -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5,
	    8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1,
	    -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6,
	    5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1,
	    -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1,
	    10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1,
	    6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1,
	    8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7,
	    2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1,
	    -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6,
	    -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10,
	    -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	    1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1,
	    -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11,
	    2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11,
	    4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1,
	    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10,
	    2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
THREE.PlaneCollider = function (b, c) {
	this.point = b;
	this.normal = c
};
THREE.SphereCollider = function (b, c) {
	this.center = b;
	this.radius = c;
	this.radiusSq = c * c
};
THREE.BoxCollider = function (b, c) {
	this.min = b;
	this.max = c;
	this.dynamic = !0;
	this.normal = new THREE.Vector3
};
THREE.MeshCollider = function (b, c) {
	this.mesh = b;
	this.box = c;
	this.numFaces = this.mesh.geometry.faces.length;
	this.normal = new THREE.Vector3
};
THREE.CollisionSystem = function () {
	this.collisionNormal = new THREE.Vector3;
	this.colliders = [];
	this.hits = []
};
THREE.Collisions = new THREE.CollisionSystem;
THREE.CollisionSystem.prototype.merge = function (b) {
	Array.prototype.push.apply(this.colliders, b.colliders);
	Array.prototype.push.apply(this.hits, b.hits)
};
THREE.CollisionSystem.prototype.rayCastAll = function (b) {
	b.direction.normalize();
	this.hits.length = 0;
	var c, e, f, h, k = 0;
	c = 0;
	for (e = this.colliders.length; c < e; c++) if (h = this.colliders[c], f = this.rayCast(b, h), f < Number.MAX_VALUE) h.distance = f, f > k ? this.hits.push(h) : this.hits.unshift(h), k = f;
	return this.hits
};
THREE.CollisionSystem.prototype.rayCastNearest = function (b) {
	var c = this.rayCastAll(b);
	if (c.length == 0) return null;
	for (var e = 0; c[e] instanceof THREE.MeshCollider;) {
		var f = this.rayMesh(b, c[e]);
		if (f.dist < Number.MAX_VALUE) {
			c[e].distance = f.dist;
			c[e].faceIndex = f.faceIndex;
			break
		}
		e++
	}
	if (e > c.length) return null;
	return c[e]
};
THREE.CollisionSystem.prototype.rayCast = function (b, c) {
	if (c instanceof THREE.PlaneCollider) return this.rayPlane(b, c);
	else if (c instanceof THREE.SphereCollider) return this.raySphere(b, c);
	else if (c instanceof THREE.BoxCollider) return this.rayBox(b, c);
	else if (c instanceof THREE.MeshCollider && c.box) return this.rayBox(b, c.box)
};
THREE.CollisionSystem.prototype.rayMesh = function (b, c) {
	for (var e = this.makeRayLocal(b, c.mesh), f = Number.MAX_VALUE, h, k = 0; k < c.numFaces; k++) {
		var m = c.mesh.geometry.faces[k],
			n = c.mesh.geometry.vertices[m.a].position,
			t = c.mesh.geometry.vertices[m.b].position,
			u = c.mesh.geometry.vertices[m.c].position,
			v = m instanceof THREE.Face4 ? c.mesh.geometry.vertices[m.d].position : null;
		m instanceof THREE.Face3 ? (m = this.rayTriangle(e, n, t, u, f, this.collisionNormal, c.mesh), m < f && (f = m, h = k, c.normal.copy(this.collisionNormal), c.normal.normalize())) : m instanceof THREE.Face4 && (m = this.rayTriangle(e, n, t, v, f, this.collisionNormal, c.mesh), m < f && (f = m, h = k, c.normal.copy(this.collisionNormal), c.normal.normalize()), m = this.rayTriangle(e, t, u, v, f, this.collisionNormal, c.mesh), m < f && (f = m, h = k, c.normal.copy(this.collisionNormal), c.normal.normalize()))
	}
	return {
		dist: f,
		faceIndex: h
	}
};
THREE.CollisionSystem.prototype.rayTriangle = function (b, c, e, f, h, k, m) {
	var n = THREE.CollisionSystem.__v1,
		t = THREE.CollisionSystem.__v2;
	k.set(0, 0, 0);
	n.sub(e, c);
	t.sub(f, e);
	k.cross(n, t);
	n = k.dot(b.direction);
	if (!(n < 0)) if (m.doubleSided || m.flipSided) k.multiplyScalar(-1), n *= -1;
	else return Number.MAX_VALUE;
	m = k.dot(c) - k.dot(b.origin);
	if (!(m <= 0)) return Number.MAX_VALUE;
	if (!(m >= n * h)) return Number.MAX_VALUE;
	m /= n;
	n = THREE.CollisionSystem.__v3;
	n.copy(b.direction);
	n.multiplyScalar(m);
	n.addSelf(b.origin);
	Math.abs(k.x) > Math.abs(k.y) ? Math.abs(k.x) > Math.abs(k.z) ? (b = n.y - c.y, k = e.y - c.y, h = f.y - c.y, n = n.z - c.z, e = e.z - c.z, f = f.z - c.z) : (b = n.x - c.x, k = e.x - c.x, h = f.x - c.x, n = n.y - c.y, e = e.y - c.y, f = f.y - c.y) : Math.abs(k.y) > Math.abs(k.z) ? (b = n.x - c.x, k = e.x - c.x, h = f.x - c.x, n = n.z - c.z, e = e.z - c.z, f = f.z - c.z) : (b = n.x - c.x, k = e.x - c.x, h = f.x - c.x, n = n.y - c.y, e = e.y - c.y, f = f.y - c.y);
	c = k * f - e * h;
	if (c == 0) return Number.MAX_VALUE;
	c = 1 / c;
	f = (b * f - n * h) * c;
	if (!(f >= 0)) return Number.MAX_VALUE;
	c *= k * n - e * b;
	if (!(c >= 0)) return Number.MAX_VALUE;
	if (!(1 - f - c >= 0)) return Number.MAX_VALUE;
	return m
};
THREE.CollisionSystem.prototype.makeRayLocal = function (b, c) {
	var e = THREE.CollisionSystem.__m;
	THREE.Matrix4.makeInvert(c.matrixWorld, e);
	var f = THREE.CollisionSystem.__r;
	f.origin.copy(b.origin);
	f.direction.copy(b.direction);
	e.multiplyVector3(f.origin);
	e.rotateAxis(f.direction);
	f.direction.normalize();
	return f
};
THREE.CollisionSystem.prototype.rayBox = function (b, c) {
	var e;
	c.dynamic && c.mesh && c.mesh.matrixWorld ? e = this.makeRayLocal(b, c.mesh) : (e = THREE.CollisionSystem.__r, e.origin.copy(b.origin), e.direction.copy(b.direction));
	var f = 0,
		h = 0,
		k = 0,
		m = 0,
		n = 0,
		t = 0,
		u = !0;
	e.origin.x < c.min.x ? (f = c.min.x - e.origin.x, f /= e.direction.x, u = !1, m = -1) : e.origin.x > c.max.x && (f = c.max.x - e.origin.x, f /= e.direction.x, u = !1, m = 1);
	e.origin.y < c.min.y ? (h = c.min.y - e.origin.y, h /= e.direction.y, u = !1, n = -1) : e.origin.y > c.max.y && (h = c.max.y - e.origin.y, h /= e.direction.y, u = !1, n = 1);
	e.origin.z < c.min.z ? (k = c.min.z - e.origin.z, k /= e.direction.z, u = !1, t = -1) : e.origin.z > c.max.z && (k = c.max.z - e.origin.z, k /= e.direction.z, u = !1, t = 1);
	if (u) return -1;
	u = 0;
	h > f && (u = 1, f = h);
	k > f && (u = 2, f = k);
	switch (u) {
	case 0:
		n = e.origin.y + e.direction.y * f;
		if (n < c.min.y || n > c.max.y) return Number.MAX_VALUE;
		e = e.origin.z + e.direction.z * f;
		if (e < c.min.z || e > c.max.z) return Number.MAX_VALUE;
		c.normal.set(m, 0, 0);
		break;
	case 1:
		m = e.origin.x + e.direction.x * f;
		if (m < c.min.x || m > c.max.x) return Number.MAX_VALUE;
		e = e.origin.z + e.direction.z * f;
		if (e < c.min.z || e > c.max.z) return Number.MAX_VALUE;
		c.normal.set(0, n, 0);
		break;
	case 2:
		m = e.origin.x + e.direction.x * f;
		if (m < c.min.x || m > c.max.x) return Number.MAX_VALUE;
		n = e.origin.y + e.direction.y * f;
		if (n < c.min.y || n > c.max.y) return Number.MAX_VALUE;
		c.normal.set(0, 0, t)
	}
	return f
};
THREE.CollisionSystem.prototype.rayPlane = function (b, c) {
	var e = b.direction.dot(c.normal),
		f = c.point.dot(c.normal);
	if (e < 0) e = (f - b.origin.dot(c.normal)) / e;
	else return Number.MAX_VALUE;
	return e > 0 ? e : Number.MAX_VALUE
};
THREE.CollisionSystem.prototype.raySphere = function (b, c) {
	var e = c.center.clone().subSelf(b.origin);
	if (e.lengthSq < c.radiusSq) return -1;
	var f = e.dot(b.direction.clone());
	if (f <= 0) return Number.MAX_VALUE;
	e = c.radiusSq - (e.lengthSq() - f * f);
	if (e >= 0) return Math.abs(f) - Math.sqrt(e);
	return Number.MAX_VALUE
};
THREE.CollisionSystem.__v1 = new THREE.Vector3;
THREE.CollisionSystem.__v2 = new THREE.Vector3;
THREE.CollisionSystem.__v3 = new THREE.Vector3;
THREE.CollisionSystem.__nr = new THREE.Vector3;
THREE.CollisionSystem.__m = new THREE.Matrix4;
THREE.CollisionSystem.__r = new THREE.Ray;
THREE.CollisionUtils = {};
THREE.CollisionUtils.MeshOBB = function (b) {
	b.geometry.computeBoundingBox();
	var c = b.geometry.boundingBox,
		e = new THREE.Vector3(c.x[0], c.y[0], c.z[0]),
		c = new THREE.Vector3(c.x[1], c.y[1], c.z[1]),
		e = new THREE.BoxCollider(e, c);
	e.mesh = b;
	return e
};
THREE.CollisionUtils.MeshAABB = function (b) {
	var c = THREE.CollisionUtils.MeshOBB(b);
	c.min.addSelf(b.position);
	c.max.addSelf(b.position);
	c.dynamic = !1;
	return c
};
THREE.CollisionUtils.MeshColliderWBox = function (b) {
	return new THREE.MeshCollider(b, THREE.CollisionUtils.MeshOBB(b))
};
if (THREE.WebGLRenderer) THREE.AnaglyphWebGLRenderer = function (b) {
	THREE.WebGLRenderer.call(this, b);
	var c = this,
		e = this.setSize,
		f = this.render,
		h = new THREE.PerspectiveCamera,
		k = new THREE.PerspectiveCamera,
		m = new THREE.Matrix4,
		n = new THREE.Matrix4,
		t, u, v;
	h.matrixAutoUpdate = k.matrixAutoUpdate = !1;
	var b = {
		minFilter: THREE.LinearFilter,
		magFilter: THREE.NearestFilter,
		format: THREE.RGBAFormat
	},
		p = new THREE.WebGLRenderTarget(512, 512, b),
		x = new THREE.WebGLRenderTarget(512, 512, b),
		w = new THREE.PerspectiveCamera(53, 1, 1, 1E4);
	w.position.z = 2;
	_material = new THREE.ShaderMaterial({
		uniforms: {
			mapLeft: {
				type: "t",
				value: 0,
				texture: p
			},
			mapRight: {
				type: "t",
				value: 1,
				texture: x
			}
		},
		vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
		fragmentShader: "uniform sampler2D mapLeft;\nuniform sampler2D mapRight;\nvarying vec2 vUv;\nvoid main() {\nvec4 colorL, colorR;\nvec2 uv = vUv;\ncolorL = texture2D( mapLeft, uv );\ncolorR = texture2D( mapRight, uv );\ngl_FragColor = vec4( colorL.g * 0.7 + colorL.b * 0.3, colorR.g, colorR.b, colorL.a + colorR.a ) * 1.1;\n}"
	});
	var A = new THREE.Scene;
	A.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), _material));
	this.setSize = function (b, f) {
		e.call(c, b, f);
		p.width = b;
		p.height = f;
		x.width = b;
		x.height = f
	};
	this.render = function (b, e) {
		e.update(null, !0);
		if (t !== e.aspect || u !== e.near || v !== e.fov) {
			t = e.aspect;
			u = e.near;
			v = e.fov;
			var C = e.projectionMatrix.clone(),
				E = 125 / 30 * 0.5,
				D = E * u / 125,
				F = u * Math.tan(v * Math.PI / 360),
				M;
			m.n14 = E;
			n.n14 = -E;
			E = -F * t + D;
			M = F * t + D;
			C.n11 = 2 * u / (M - E);
			C.n13 = (M + E) / (M - E);
			h.projectionMatrix = C.clone();
			E = -F * t - D;
			M = F * t - D;
			C.n11 = 2 * u / (M - E);
			C.n13 = (M + E) / (M - E);
			k.projectionMatrix = C.clone()
		}
		h.matrix = e.matrixWorld.clone().multiplySelf(n);
		h.update(null, !0);
		h.position.copy(e.position);
		h.near = u;
		h.far = e.far;
		f.call(c, b, h, p, !0);
		k.matrix = e.matrixWorld.clone().multiplySelf(m);
		k.update(null, !0);
		k.position.copy(e.position);
		k.near = u;
		k.far = e.far;
		f.call(c, b, k, x, !0);
		f.call(c, A, w)
	}
};
if (THREE.WebGLRenderer) THREE.CrosseyedWebGLRenderer = function (b) {
	THREE.WebGLRenderer.call(this, b);
	this.autoClear = !1;
	var c = this,
		e = this.setSize,
		f = this.render,
		h, k, m = new THREE.PerspectiveCamera;
	m.target = new THREE.Vector3(0, 0, 0);
	var n = new THREE.PerspectiveCamera;
	n.target = new THREE.Vector3(0, 0, 0);
	c.separation = 10;
	if (b && b.separation !== void 0) c.separation = b.separation;
	this.setSize = function (b, f) {
		e.call(c, b, f);
		h = b / 2;
		k = f
	};
	this.render = function (b, e) {
		this.clear();
		m.fov = e.fov;
		m.aspect = 0.5 * e.aspect;
		m.near = e.near;
		m.far = e.far;
		m.updateProjectionMatrix();
		m.position.copy(e.position);
		m.target.copy(e.target);
		m.translateX(c.separation);
		m.lookAt(m.target);
		n.projectionMatrix = m.projectionMatrix;
		n.position.copy(e.position);
		n.target.copy(e.target);
		n.translateX(-c.separation);
		n.lookAt(n.target);
		this.setViewport(0, 0, h, k);
		f.call(c, b, m);
		this.setViewport(h, 0, h, k);
		f.call(c, b, n, !1)
	}
};