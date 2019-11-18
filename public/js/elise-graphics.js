(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("elise", [], factory);
	else if(typeof exports === 'object')
		exports["elise"] = factory();
	else
		root["elise"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessages = /** @class */ (function () {
    function ErrorMessages() {
    }
    ErrorMessages.BitmapResourceSourceIsUndefined = 'Bitmap resource source is undefined.';
    ErrorMessages.BoundsAreUndefined = 'Bounds are undefined.';
    ErrorMessages.CanvasContextIsNull = 'Canvas context is null.';
    ErrorMessages.CanvasDrawImageError = 'Exception thrown calling canvas context drawImage.';
    ErrorMessages.CanvasIsUndefined = 'Canvas is undefined.';
    ErrorMessages.ComponentTypeNotRegistered = 'Component type is not registered.';
    ErrorMessages.ControllerIsUndefined = 'Controller is undefined.';
    ErrorMessages.ElementAlreadyExists = 'Element already exists in collection.';
    ErrorMessages.ElementUndefined = 'Element is undefined';
    ErrorMessages.ElementIdUndefined = 'Element ID is undefined.';
    ErrorMessages.ErrorCreatingCanvasPattern = 'Error creating canvas pattern.';
    ErrorMessages.HostElementUndefined = 'Host element is undefined.';
    ErrorMessages.ImageUndefined = 'Image is undefined';
    ErrorMessages.InvalidColorString = 'Invalid color string.';
    ErrorMessages.InvalidFrameIndex = 'Invalid frame index.';
    ErrorMessages.InvalidResourceType = 'Invalid resource type.';
    ErrorMessages.InvalidPointIndex = 'Invalid point index: ';
    ErrorMessages.InvalidPointString = 'Point string is invalid.';
    ErrorMessages.InvalidSizeString = 'Invalid size string';
    ErrorMessages.LocationUndefined = 'Location is undefined.';
    ErrorMessages.ModelUndefined = 'Model is undefined.';
    ErrorMessages.ModelBasePathUndefined = 'Model base path is undefined.';
    ErrorMessages.ModelPathUndefined = 'Model path is undefined.';
    ErrorMessages.ModelResourceUndefined = 'Model resource is undefined.';
    ErrorMessages.NoAnimationFramesAreDefined = 'No animation frames are defined.';
    ErrorMessages.NoCommandsAreDefined = 'No commands are defined.';
    ErrorMessages.NoPointsAreDefined = 'No points are defined.';
    ErrorMessages.NormalImageSourceUndefined = 'Normal image source is undefined.';
    ErrorMessages.NotImplemented = 'Method not implemented.';
    ErrorMessages.PaneSurfaceIsUndefined = 'Pane surface is undefined.';
    ErrorMessages.PointsAreInvalid = 'Points are invalid.';
    ErrorMessages.RendererIsUndefined = 'Renderer is undefined.';
    ErrorMessages.ResourceIsInvalid = 'Resource is invalid.';
    ErrorMessages.ResourceKeyIsUndefined = 'Resource key is undefined';
    ErrorMessages.ResourceManagerIsUndefined = 'Resource manager is undefined';
    ErrorMessages.ResourcesFailedToLoad = 'One or more resources failed to load';
    ErrorMessages.SizeUndefined = 'Size is undefined.';
    ErrorMessages.SourceUndefined = 'Source is undefined.';
    ErrorMessages.StartTimeIsUndefined = 'Start time is undefined.';
    ErrorMessages.SurfaceIsAlreadyBound = 'Surface is already bound.';
    ErrorMessages.SurfaceDivIsUndefined = 'Surface div is undefined.';
    ErrorMessages.SurfaceIsUndefined = 'Surface is undefined.';
    ErrorMessages.TargetIsUndefined = 'Target is undefined.';
    ErrorMessages.VideoIsUndefined = 'Video is undefined';
    return ErrorMessages;
}());
exports.ErrorMessages = ErrorMessages;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
/**
 * Describes a point in 2D space
 */
var Point = /** @class */ (function () {
    /**
     * @param x - X Coordinate
     * @param y - Y Coordinate
     */
    function Point(x, y) {
        this._x = x;
        this._y = y;
        this.clone = this.clone.bind(this);
        this.equals = this.equals.bind(this);
        this.toString = this.toString.bind(this);
    }
    /**
     * Point factory function
     * @param x - X coordinate
     * @param y - Y coordinate
     * @returns New point
     */
    Point.create = function (x, y) {
        return new Point(x, y);
    };
    /**
     * Parses a point described as a string or clones existing point
     * @param pointSource - Point string description or point to clone
     * @returns Parsed or cloned point object
     */
    Point.parse = function (pointSource) {
        if (typeof pointSource === 'string') {
            var parts = pointSource.split(',');
            if (parts.length !== 2) {
                throw new Error(error_messages_1.ErrorMessages.InvalidPointString);
            }
            var x = parseFloat(parts[0]);
            var y = parseFloat(parts[1]);
            if (isNaN(x) || isNaN(y)) {
                throw new Error(error_messages_1.ErrorMessages.InvalidPointString);
            }
            return new Point(x, y);
        }
        else {
            return new Point(pointSource.x, pointSource.y);
        }
    };
    /**
     * Scales a point by specified scaling factors.  Scaling reference can be optionally specified.
     * @param point - Point to be scaled.
     * @param scaleX - X scaling factor
     * @param scaleY - Y scaling factor
     * @param baseX - Optional x reference point
     * @param baseY - Optional y reference point
     * @returns Scaled point
     */
    Point.scale = function (point, scaleX, scaleY, baseX, baseY) {
        if (baseX !== undefined && baseY !== undefined) {
            return new Point((point.x - baseX) * scaleX + baseX, (point.y - baseY) * scaleY + baseY);
        }
        else {
            return new Point(point.x * scaleX, point.y * scaleY);
        }
    };
    /**
     * Returns a new point from a given point translated by a given offset
     * @param point - Original point
     * @param offsetX - X offset
     * @param offsetY - Y offset
     * @returns Translated point
     */
    Point.translate = function (point, offsetX, offsetY) {
        return new Point(point.x + offsetX, point.y + offsetY);
    };
    /**
     * Clones this point into a new instance
     * @returns Clone of point
     */
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    Object.defineProperty(Point.prototype, "x", {
        /**
         * Returns x coordinate
         * @returns X coordinate
         */
        get: function () {
            return this._x;
        },
        /**
         * Sets x coordinate
         * @param value - X coordinate
         */
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        /**
         * Returns y coordinate
         * @returns Y coordinate
         */
        get: function () {
            return this._y;
        },
        /**
         * Sets y coordinate
         * @param value - Y coordinate
         */
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Compares this point with another for equality
     * @param that - Point to compare with this
     * @returns True if point given matches this
     */
    Point.prototype.equals = function (that) {
        return that !== null && this.x === that.x && this.y === that.y;
    };
    /**
     * Describes point as a string
     * @returns Description of point
     */
    Point.prototype.toString = function () {
        return this.x.toFixed(0) + ',' + this.y.toFixed(0);
    };
    Point.Origin = new Point(0, 0);
    return Point;
}());
exports.Point = Point;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
/**
 * Describes the size of a 2D rectangular object or region
 */
var Size = /** @class */ (function () {
    /**
     * @param width - Width
     * @param width - Height
     */
    function Size(width, height) {
        this._width = width;
        this._height = height;
        this.clone = this.clone.bind(this);
        this.equals = this.equals.bind(this);
        this.toString = this.toString.bind(this);
    }
    /**
     * Size factory function
     * @param width - Width for new size
     * @param height - Height for new size
     */
    Size.create = function (width, height) {
        return new Size(width, height);
    };
    /**
     * Parses a size described as a string or clones existing size
     * @param sizeSource - Size string description or size to clone
     * @returns Parsed or cloned size
     */
    Size.parse = function (sizeSource) {
        if (typeof sizeSource === 'string') {
            var parts = sizeSource.split('x');
            if (parts.length !== 2) {
                throw new Error(error_messages_1.ErrorMessages.InvalidSizeString);
            }
            var width = parseFloat(parts[0]);
            var height = parseFloat(parts[1]);
            if (isNaN(width) || isNaN(height)) {
                throw new Error(error_messages_1.ErrorMessages.InvalidSizeString);
            }
            return new Size(width, height);
        }
        else {
            return new Size(sizeSource.width, sizeSource.height);
        }
    };
    /**
     * Returns a new scaled size
     * @param s - Size to scale
     * @param scaleX - Horizontal scale factor
     * @param scaleY - Vertical scale factor
     * @returns Scaled size
     */
    Size.scale = function (s, scaleX, scaleY) {
        return new Size(s.width * scaleX, s.height * scaleY);
    };
    /**
     * Clones this size to a new instance
     * @returns Clone of size
     */
    Size.prototype.clone = function () {
        return new Size(this._width, this._height);
    };
    Object.defineProperty(Size.prototype, "width", {
        /**
         * Width
         * @returns Width
         */
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "height", {
        /**
         * Height
         * @returns Height
         */
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Compares this size with another for equality
     * @param that - Size to compare with this
     * @returns True if that Size matches this
     */
    Size.prototype.equals = function (that) {
        return this.width === that.width && this.height === that.height;
    };
    /**
     * Describes size as a string
     * @returns Description of size
     */
    Size.prototype.toString = function () {
        return this.width + 'x' + this.height;
    };
    /**
     * Empty size
     */
    Size.Empty = new Size(0, 0);
    return Size;
}());
exports.Size = Size;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(10);
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var region_1 = __webpack_require__(7);
var size_1 = __webpack_require__(2);
var linear_gradient_fill_1 = __webpack_require__(27);
var radial_gradient_fill_1 = __webpack_require__(28);
/**
 * Base class for renderable model elements
 */
var ElementBase = /** @class */ (function () {
    function ElementBase(type) {
        /**
         * True if individual points can be edited
         */
        this.editPoints = false;
        /**
         * Should element disallow moving/sizing
         */
        this.locked = false;
        /**
         * Should aspect ratio be maintained during resizing
         */
        this.aspectLocked = false;
        /**
         * Fill scaling factor
         */
        this.fillScale = 1;
        /**
         * Fill X Offset
         */
        this.fillOffsetX = 0;
        /**
         * Fill Y Offset
         */
        this.fillOffsetY = 0;
        /**
         * Should element support interaction
         */
        this.interactive = false;
        /**
         * Element fill stack
         */
        this.fillStack = [];
        this.type = type;
        this.addTo = this.addTo.bind(this);
        this.canEditPoints = this.canEditPoints.bind(this);
        this.canFill = this.canFill.bind(this);
        this.canMove = this.canMove.bind(this);
        this.canMovePoint = this.canMovePoint.bind(this);
        this.canNudge = this.canNudge.bind(this);
        this.canResize = this.canResize.bind(this);
        this.canStroke = this.canStroke.bind(this);
        this.clearBounds = this.clearBounds.bind(this);
        this.clone = this.clone.bind(this);
        this.cloneTo = this.cloneTo.bind(this);
        this.describe = this.describe.bind(this);
        this.draw = this.draw.bind(this);
        this.getBounds = this.getBounds.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getPointAt = this.getPointAt.bind(this);
        this.getResourceKeys = this.getResourceKeys.bind(this);
        this.getSize = this.getSize.bind(this);
        this.hitTest = this.hitTest.bind(this);
        this.nudgeSize = this.nudgeSize.bind(this);
        this.parse = this.parse.bind(this);
        this.pointCount = this.pointCount.bind(this);
        this.registerResources = this.registerResources.bind(this);
        this.scale = this.scale.bind(this);
        this.serialize = this.serialize.bind(this);
        this.setFill = this.setFill.bind(this);
        this.setFillOffsetX = this.setFillOffsetX.bind(this);
        this.setFillOffsetY = this.setFillOffsetY.bind(this);
        this.setFillScale = this.setFillScale.bind(this);
        this.setInteractive = this.setInteractive.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.setPointAt = this.setPointAt.bind(this);
        this.setSize = this.setSize.bind(this);
        this.setStroke = this.setStroke.bind(this);
        this.setTransform = this.setTransform.bind(this);
        this.toString = this.toString.bind(this);
        this.translate = this.translate.bind(this);
    }
    Object.defineProperty(ElementBase.prototype, "size", {
        /**
         * Size get accessor as string
         * @returns Size as string
         */
        get: function () {
            if (!this._size) {
                return undefined;
            }
            else {
                return this._size.toString();
            }
        },
        /**
         * Size set accessor as string
         * @param sizeString - Size as string
         */
        set: function (sizeString) {
            if (!sizeString) {
                this._size = undefined;
            }
            else {
                this._size = size_1.Size.parse(sizeString);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementBase.prototype, "location", {
        /**
         * Location set accessor as string
         * @returns Location as string
         */
        get: function () {
            if (!this._location) {
                return undefined;
            }
            else {
                return this._location.toString();
            }
        },
        /**
         * Location set accessor as string
         * @param locationString - Location as string
         */
        set: function (locationString) {
            if (!locationString) {
                this._location = undefined;
            }
            else {
                this._location = point_1.Point.parse(locationString);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Copies properies of another element instance to this instance
     * @param Source element
     */
    ElementBase.prototype.parse = function (o) {
        if (o.type) {
            this.type = String(o.type);
        }
        if (o.id) {
            this.id = String(o.id);
        }
        if (o.size) {
            this._size = size_1.Size.parse(o.size);
        }
        if (o.location) {
            this._location = point_1.Point.parse(o.location);
        }
        if (o.locked) {
            this.locked = o.locked;
        }
        else {
            this.locked = false;
        }
        if (o.aspectLocked) {
            this.aspectLocked = o.aspectLocked;
        }
        else {
            this.aspectLocked = false;
        }
        if (o.fill) {
            if (typeof o.fill === 'string') {
                this.fill = o.fill;
            }
            else if (o.fill.type === 'linearGradient') {
                var lgr1 = o.fill;
                var lgr2 = new linear_gradient_fill_1.LinearGradientFill(lgr1.start, lgr1.end);
                for (var _i = 0, _a = lgr1.stops; _i < _a.length; _i++) {
                    var stop_1 = _a[_i];
                    lgr2.addFillStop(stop_1.color, stop_1.offset);
                }
                this.fill = lgr2;
            }
            else if (o.fill.type === 'radialGradient') {
                var rgr1 = o.fill;
                var rgr2 = new radial_gradient_fill_1.RadialGradientFill(rgr1.center, rgr1.focus, rgr1.radiusX, rgr1.radiusY);
                for (var _b = 0, _c = rgr1.stops; _b < _c.length; _b++) {
                    var stop_2 = _c[_b];
                    rgr2.addFillStop(stop_2.color, stop_2.offset);
                }
                this.fill = rgr2;
            }
            else {
                this.fill = o.fill;
            }
        }
        if (o.fillScale) {
            this.fillScale = o.fillScale;
        }
        if (o.fillOffsetX) {
            this.fillOffsetX = o.fillOffsetX;
        }
        if (o.fillOffsetY) {
            this.fillOffsetY = o.fillOffsetY;
        }
        if (o.stroke) {
            this.stroke = o.stroke;
        }
        if (o.transform) {
            this.transform = o.transform;
        }
        if (o.mouseDown) {
            this.mouseDown = o.mouseDown;
            this.interactive = true;
        }
        if (o.mouseUp) {
            this.mouseUp = o.mouseUp;
            this.interactive = true;
        }
        if (o.mouseEnter) {
            this.mouseEnter = o.mouseEnter;
            this.interactive = true;
        }
        if (o.mouseLeave) {
            this.mouseLeave = o.mouseLeave;
            this.interactive = true;
        }
        if (o.click) {
            this.click = o.click;
            this.interactive = true;
        }
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    ElementBase.prototype.serialize = function () {
        var o = {};
        o.type = this.type;
        if (this.id) {
            o.id = String(this.id);
        }
        if (this.size) {
            o.size = this.size.toString();
        }
        if (this.location) {
            o.location = this.location.toString();
        }
        if (this.locked) {
            o.locked = this.locked;
        }
        if (this.aspectLocked) {
            o.aspectLocked = this.aspectLocked;
        }
        if (this.fill) {
            o.fill = this.fill;
        }
        if (this.fillScale && this.fillScale !== 1) {
            o.fillScale = this.fillScale;
        }
        if (this.fillOffsetX) {
            o.fillOffsetX = this.fillOffsetX;
        }
        if (this.fillOffsetY) {
            o.fillOffsetY = this.fillOffsetY;
        }
        if (this.stroke) {
            o.stroke = this.stroke;
        }
        if (this.transform) {
            o.transform = this.transform;
        }
        if (this.mouseDown) {
            o.mouseDown = this.mouseDown;
        }
        if (this.mouseUp) {
            o.mouseUp = this.mouseUp;
        }
        if (this.mouseEnter) {
            o.mouseEnter = this.mouseEnter;
        }
        if (this.mouseLeave) {
            o.mouseLeave = this.mouseLeave;
        }
        if (this.click) {
            o.click = this.click;
        }
        return o;
    };
    /**
     * Clones this element to a new instance
     * @returns Cloned element instance
     */
    ElementBase.prototype.clone = function () {
        var e = new ElementBase(this.type);
        this.cloneTo(e);
        return e;
    };
    /**
     * Copies properties of this instance to another instance
     * @param e - Target element instance
     */
    ElementBase.prototype.cloneTo = function (e) {
        if (this.type) {
            e.type = this.type;
        }
        if (this.id) {
            e.id = this.id;
        }
        if (this.size) {
            e.size = this.size.toString();
        }
        if (this.location) {
            e.location = this.location.toString();
        }
        if (this.locked) {
            e.locked = this.locked;
        }
        if (this.aspectLocked) {
            e.aspectLocked = this.aspectLocked;
        }
        if (this.fill) {
            e.fill = this.fill;
        }
        if (this.fillScale && this.fillScale !== 1) {
            e.fillScale = this.fillScale;
        }
        if (this.fillOffsetX) {
            e.fillOffsetX = this.fillOffsetX;
        }
        if (this.fillOffsetY) {
            e.fillOffsetY = this.fillOffsetY;
        }
        if (this.stroke) {
            e.stroke = this.stroke;
        }
        if (this.transform) {
            e.transform = this.transform;
        }
        if (this.mouseDown) {
            e.mouseDown = this.mouseDown;
        }
        if (this.mouseUp) {
            e.mouseUp = this.mouseUp;
        }
        if (this.mouseEnter) {
            e.mouseEnter = this.mouseEnter;
        }
        if (this.mouseLeave) {
            e.mouseLeave = this.mouseLeave;
        }
        if (this.click) {
            e.click = this.click;
        }
    };
    /**
     * Returns string description of element
     * @returns Element description
     */
    ElementBase.prototype.toString = function () {
        var description = this.type;
        if (this._location) {
            description += " - (" + this._location.x + "," + this._location.y + ")";
        }
        if (this._size) {
            description += " [" + this._size.width + "x" + this._size.height + "]";
        }
        return description;
    };
    /**
     * Returns detailed string description
     * @returns Detailed description
     */
    ElementBase.prototype.describe = function () {
        var desc = this.toString();
        if (this.stroke) {
            desc = this.stroke.toString() + ' stroked ' + desc;
        }
        if (this.fill) {
            desc = this.fill.toString() + ' filled ' + desc;
        }
        return desc;
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    ElementBase.prototype.canStroke = function () {
        return false;
    };
    /**
     * Can element be filled
     * @returns Can fill
     */
    ElementBase.prototype.canFill = function () {
        return false;
    };
    /**
     * Can element be moved
     * @returns Can move
     */
    ElementBase.prototype.canMove = function () {
        return true;
    };
    /**
     * Can element be resized
     * @returns Can resize
     */
    ElementBase.prototype.canResize = function () {
        return true;
    };
    /**
     * Can element be nudged with keyboard commands
     * @returns Can nudge
     */
    ElementBase.prototype.canNudge = function () {
        return true;
    };
    /**
     * Can individual element points be moved
     * @returns Can move point
     */
    ElementBase.prototype.canMovePoint = function () {
        return false;
    };
    /**
     * Can element points be edited
     * @returns Can edit points
     */
    ElementBase.prototype.canEditPoints = function () {
        return false;
    };
    /**
     * Register any required resources with the provided resource manager
     * @param rm - Resource manager
     */
    ElementBase.prototype.registerResources = function (rm) {
        var key;
        // If an image or model fill, then register referenced resource
        if (this.fill && typeof this.fill === 'string') {
            var fillString = this.fill;
            if (fillString.toLowerCase().substring(0, 6) === 'image(' ||
                fillString.toLowerCase().substring(0, 6) === 'model(') {
                key = fillString.substring(6, fillString.length - 1);
                if (key.indexOf(';') !== -1) {
                    var parts = key.split(';');
                    key = parts[1];
                }
                rm.register(key);
            }
        }
    };
    /**
     * Returns list of keys referenced by element
     */
    ElementBase.prototype.getResourceKeys = function () {
        var keys = [];
        var key;
        // If an image or model fill, then register referenced resource
        if (this.fill && typeof this.fill === 'string') {
            var fillString = this.fill;
            if (fillString.toLowerCase().substring(0, 6) === 'image(' ||
                fillString.toLowerCase().substring(0, 6) === 'model(') {
                key = fillString.substring(6, fillString.length - 1);
                if (key.indexOf(';') !== -1) {
                    var parts = key.split(';');
                    key = parts[1];
                }
                keys.push(key);
            }
        }
        return keys;
    };
    /**
     * Render the element to the HTML5 rendering context provided
     * @param c - Rendering context
     */
    ElementBase.prototype.draw = function (c) {
        return;
    };
    /**
     * Determines if given x/y coordinate is contained within element
     * @param Rendering context
     * @param tx - X coordinate
     * @param ty - Y coordinate
     * @returns True if coordinate is contained within element
     */
    ElementBase.prototype.hitTest = function (c, tx, ty) {
        if (this._size === undefined) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if (this._location === undefined) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        if (this.model === undefined) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var model = this.model;
        var x = this._location.x;
        var y = this._location.y;
        var w = this._size.width;
        var h = this._size.height;
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, this._location);
        }
        c.beginPath();
        c.rect(x, y, w, h);
        var hit = c.isPointInPath(tx, ty);
        c.closePath();
        c.restore();
        return hit;
    };
    /**
     * Resizes element by a given width and height amount
     * @param widthDelta - Width adjustment
     * @param heightDelta Height adjustment
     * @returns Resized element
     */
    ElementBase.prototype.nudgeSize = function (widthDelta, heightDelta) {
        if (this._size === undefined) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var newWidth = this._size.width + widthDelta;
        var newHeight = this._size.height + heightDelta;
        if (newWidth < 0) {
            newWidth = 0;
        }
        if (newHeight < 0) {
            newHeight = 0;
        }
        this._size = new size_1.Size(newWidth, newHeight);
        return this;
    };
    /**
     * Moves element by a given horizontal and vertical offset
     * @param offsetX - Horizontal offset
     * @param offsetY - Vertical offset
     * @returns Relocated element
     */
    ElementBase.prototype.translate = function (offsetX, offsetY) {
        if (this._location === undefined) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        this._location = new point_1.Point(this._location.x + offsetX, this._location.y + offsetY);
        return this;
    };
    /**
     * Scales element by a given horizontal and vertical scaling factor
     * @param scaleX - Horizontal scaling factor
     * @param scaleY - Vertical scaling factor
     * @returns Scaled element
     */
    ElementBase.prototype.scale = function (scaleX, scaleY) {
        if (this._size === undefined) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if (this._location === undefined) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        this._size = size_1.Size.scale(this._size, scaleX, scaleY);
        this._location = point_1.Point.scale(this._location, scaleY, scaleY);
        return this;
    };
    /**
     * Element bounding region. Returns rectangular region that completely encloses the element
     * @returns Rectangular element bounding region
     */
    ElementBase.prototype.getBounds = function () {
        if (this._size === undefined) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var location = this._location;
        if (location === undefined) {
            location = new point_1.Point(0, 0);
        }
        return new region_1.Region(location.x, location.y, this._size.width, this._size.height);
    };
    /**
     * Clears the interal bounds of the associated complex element, forcing
     * the bounds to be recomputed on the next request.
     */
    ElementBase.prototype.clearBounds = function () {
        this._location = undefined;
        this._size = undefined;
    };
    /**
     * Location get accessor
     */
    ElementBase.prototype.getLocation = function () {
        if (this._location === undefined) {
            var bounds = this.getBounds();
            if (bounds) {
                this._location = bounds.location;
            }
        }
        return this._location;
    };
    /**
     * Location set accessor.  Sets location value as string or Point
     * @param pointSource - Location as Point object or string
     * @returns This element
     */
    ElementBase.prototype.setLocation = function (pointSource) {
        this._location = point_1.Point.parse(pointSource);
        return this;
    };
    /**
     * Size get accessor
     * @returns Size of element bounding region
     */
    ElementBase.prototype.getSize = function () {
        if (this._size === undefined) {
            var bounds = this.getBounds();
            if (bounds) {
                this._size = bounds.size;
            }
        }
        return this._size;
    };
    /**
     * Size set accessor. Sets size of element as string or Size object
     * @param sizeSource - Size as Size object or string
     * @returns This element
     */
    ElementBase.prototype.setSize = function (sizeSource) {
        this._size = size_1.Size.parse(sizeSource);
        return this;
    };
    /**
     * Sets stroke used to draw element outline
     * @param stroke - Stroke definition
     * @returns This element
     */
    ElementBase.prototype.setStroke = function (stroke) {
        if (stroke instanceof color_1.Color) {
            this.stroke = stroke.toString();
        }
        else {
            this.stroke = stroke;
        }
        return this;
    };
    /**
     * Sets fill used to fill element interior
     * @param fill - Fill definition
     * @returns This element
     */
    ElementBase.prototype.setFill = function (fill) {
        if (fill instanceof color_1.Color) {
            this.fill = fill.toString();
        }
        else {
            this.fill = fill;
        }
        return this;
    };
    /**
     * Sets fill scale used to alter fill rendering
     * @param scale - Fill scale - Default 1
     * @returns This element
     */
    ElementBase.prototype.setFillScale = function (scale) {
        this.fillScale = scale;
        return this;
    };
    /**
     * Sets fill X offset used to alter fill rendering
     * @param offset - Fill X Offset
     * @returns This element
     */
    ElementBase.prototype.setFillOffsetX = function (offset) {
        this.fillOffsetX = offset;
        return this;
    };
    /**
     * Sets fill Y offset used to alter fill rendering
     * @param offset - Fill Y Offset
     * @returns This element
     */
    ElementBase.prototype.setFillOffsetY = function (offset) {
        this.fillOffsetY = offset;
        return this;
    };
    /**
     * Sets user interface interactivity for element
     * @param interactive - Interactive flag value
     * @returns This element
     */
    ElementBase.prototype.setInteractive = function (interactive) {
        this.interactive = interactive;
        return this;
    };
    /**
     * Sets affine transform used for rendering element
     * @param transform - Transform definition
     * @returns This element
     */
    ElementBase.prototype.setTransform = function (transform) {
        this.transform = transform;
        return this;
    };
    /**
     * Retrieves number of points in element
     * @returns Number of points
     */
    ElementBase.prototype.pointCount = function () {
        throw new Error(error_messages_1.ErrorMessages.NotImplemented);
    };
    /**
     * Gets value of point at given index
     * @param index - Point index
     * @param depth - Point depth (simple or complex)
     * @returns Point at index
     */
    ElementBase.prototype.getPointAt = function (index, depth) {
        throw new Error(error_messages_1.ErrorMessages.NotImplemented);
    };
    /**
     * Sets value of point at given index
     * @param index - Point index
     * @param value - New point value
     * @param depth - Point depth (simple or complex)
     */
    ElementBase.prototype.setPointAt = function (index, value, depth) {
        throw new Error(error_messages_1.ErrorMessages.NotImplemented);
    };
    /**
     * Adds element to the designated parent model.
     * @param model - Parent model
     * @returns This element
     */
    ElementBase.prototype.addTo = function (model) {
        model.add(this);
        return this;
    };
    return ElementBase;
}());
exports.ElementBase = ElementBase;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var element_base_1 = __webpack_require__(3);
var element_factory_1 = __webpack_require__(57);
var fill_factory_1 = __webpack_require__(8);
var resource_factory_1 = __webpack_require__(18);
var resource_manager_1 = __webpack_require__(62);
var color_1 = __webpack_require__(10);
var error_messages_1 = __webpack_require__(0);
var model_event_1 = __webpack_require__(65);
var point_1 = __webpack_require__(1);
var scaling_info_1 = __webpack_require__(47);
var size_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(5);
/**
 * Container for rendered drawing elements and their referenced resource collection
 */
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model() {
        var _this = _super.call(this, 'model') || this;
        /**
         * Event fired when controller is attached to model
         */
        _this.controllerAttached = new model_event_1.ModelEvent();
        /**
         * Event fired when controller is detached from model
         */
        _this.controllerDetached = new model_event_1.ModelEvent();
        /**
         * Ordered array of element to be rendered. Elements are rendered using the 'painters model' with
         * elements rendered in the order they exist in the element array.
         */
        _this.elements = [];
        /**
         * Collection of shared resources referenced by contained elements
         */
        _this.resources = [];
        _this.lastTime = 0;
        _this.basePath = '/';
        _this.displayFPS = false;
        _this.resourceManager = new resource_manager_1.ResourceManager(_this);
        // Enable for debugging
        // this.resourceManager.listenerEvent.add(this.listen);
        _this.listen = _this.listen.bind(_this);
        _this.setBasePath = _this.setBasePath.bind(_this);
        _this.setModelPath = _this.setModelPath.bind(_this);
        _this.add = _this.add.bind(_this);
        _this.remove = _this.remove.bind(_this);
        _this.createCanvas = _this.createCanvas.bind(_this);
        _this.assignCanvas = _this.assignCanvas.bind(_this);
        _this.prepareResources = _this.prepareResources.bind(_this);
        _this.setElementStroke = _this.setElementStroke.bind(_this);
        _this.setRenderTransform = _this.setRenderTransform.bind(_this);
        _this.getFillScale = _this.getFillScale.bind(_this);
        _this.firstActiveElementAt = _this.firstActiveElementAt.bind(_this);
        _this.elementsAt = _this.elementsAt.bind(_this);
        _this.elementWithId = _this.elementWithId.bind(_this);
        _this.renderToContext = _this.renderToContext.bind(_this);
        _this.strokeForElement = _this.strokeForElement.bind(_this);
        _this.calculateFPS = _this.calculateFPS.bind(_this);
        _this.formattedJSON = _this.formattedJSON.bind(_this);
        _this.rawJSON = _this.rawJSON.bind(_this);
        return _this;
    }
    /**
     * Parses JSON string into model object
     * @param json - JSON source string
     */
    Model.parse = function (json) {
        var o = JSON.parse(json);
        var model = new Model();
        model.parse(o);
        if (o.resources) {
            o.resources.forEach(function (value) {
                var res = resource_factory_1.ResourceFactory.create(value.type);
                if (res) {
                    res.parse(value);
                    model.resourceManager.add(res);
                }
            });
        }
        if (o.elements) {
            o.elements.forEach(function (value) {
                var element = element_factory_1.ElementFactory.create(value.type);
                if (element) {
                    element.parse(value);
                    model.add(element);
                }
            });
        }
        return model;
    };
    /**
     * Loads serialized model from specified path
     * @param basePath - Base path for model URI and resource references
     * @param uri - Base path relative path to serialized model
     * @param callback - Retrieval callback accepting deserialized Model instance
     */
    Model.load = function (basePath, uri, callback) {
        var modelPath;
        var modelFilePath;
        if (utility_1.Utility.endsWith(uri, '/')) {
            modelPath = basePath + uri;
            modelFilePath = modelPath + 'model.json';
        }
        else {
            modelPath = basePath + uri.substring(0, uri.lastIndexOf('/') + 1);
            modelFilePath = basePath + uri;
        }
        utility_1.Utility.getRemoteText(modelFilePath, function (json) {
            if (json) {
                var model = Model.parse(json);
                model.setBasePath(basePath);
                model.setModelPath(modelPath);
                if (callback) {
                    callback(model);
                }
            }
            else {
                callback(undefined);
            }
        });
    };
    /**
     * Model factory function
     * @param width - Model width
     * @param height - Model height
     * @returns New model instance
     */
    Model.create = function (width, height) {
        var model = new Model();
        model._size = new size_1.Size(width, height);
        return model;
    };
    /**
     * Debug resource listening function (optionally added as listener to resource manager)
     *
     * Example
     *  ```
     *  model.resourceManager.listenerEvent.add(model.listen);
     *  ```
     * @param rm - Resource manager
     * @param state - Resource state
     */
    Model.prototype.listen = function (rm, state) {
        console.log(state.numberLoaded + '/' + state.totalResources + ', ' + state.status + '(' + state.code + ')');
    };
    /**
     * Sets base path for relative pathed resources
     * @param basePath - Resources base path
     */
    Model.prototype.setBasePath = function (basePath) {
        this.basePath = basePath;
    };
    /**
     * Sets model path and optionally resource folder path
     * @param path - Model path
     * @param resourceFolder - Resource folder local path
     */
    Model.prototype.setModelPath = function (path, resourceFolder) {
        this.modelPath = path;
        if (!utility_1.Utility.endsWith(this.modelPath, '/')) {
            this.modelPath = this.modelPath + '/';
        }
        if (arguments.length !== 1) {
            this.resourceManager.localResourcePath = this.modelPath + 'r/';
        }
        else {
            this.resourceManager.localResourcePath = this.modelPath;
        }
    };
    /**
     * Adds an element to the end of the ordered elements array
     * @param el - Element to add
     * @returns New element index
     */
    Model.prototype.add = function (el) {
        if (this.elements.indexOf(el) !== -1) {
            throw new Error(error_messages_1.ErrorMessages.ElementAlreadyExists);
        }
        el.model = this;
        this.elements.push(el);
        return this.elements.length - 1;
    };
    /**
     * Adds an element to the beginning of the ordered elements array
     * @param el - Element to add
     * @returns New element index
     */
    Model.prototype.addBottom = function (el) {
        if (this.elements.indexOf(el) !== -1) {
            throw new Error(error_messages_1.ErrorMessages.ElementAlreadyExists);
        }
        el.model = this;
        this.elements.unshift(el);
        return 0;
    };
    /**
     * Removes an element from the elements array
     * @param el - Element to remove
     * @returns Index of removed element or -1 if not found
     */
    Model.prototype.remove = function (el) {
        var index = this.elements.indexOf(el);
        if (index !== -1) {
            el.model = undefined;
            this.elements.splice(index, 1);
        }
        return index;
    };
    /**
     * Creates canvas for rendering at specified scale
     * @param scale - Rendering scale factor. Default is 1.
     * @returns New canvas element
     */
    Model.prototype.createCanvas = function (scale) {
        var canvas = document.createElement('canvas');
        var s = 1;
        if (scale !== undefined && scale > 0) {
            s = scale;
        }
        if (this._size) {
            canvas.width = this._size.width * s;
            canvas.height = this._size.height * s;
        }
        this.canvas = canvas;
        return canvas;
    };
    /**
     * Assigns an existing canvas, resizing if necessary
     * @param canvas - Existing canvas element
     * @param scale - Rendering scale. Default is 1.
     */
    Model.prototype.assignCanvas = function (canvas, scale) {
        this.canvas = canvas;
        var s = 1;
        if (scale && scale > 0) {
            s = scale;
        }
        if (this._size) {
            this.canvas.width = this._size.width * s;
            this.canvas.height = this._size.height * s;
        }
    };
    /**
     * Gets reference counts for resource keys
     * @param localeId - Desired locale ID (e.g. en-US) or null for any locale
     */
    Model.prototype.getResourceKeyReferenceCounts = function (localeId) {
        var keys = {};
        var rm = this.resourceManager;
        var model = this;
        // Set locale
        rm.currentLocaleId = localeId;
        // Register resources for any model level fills
        if (model.fill) {
            if (typeof model.fill === 'string') {
                var modelFill = model.fill;
                if (modelFill.toLowerCase().substring(0, 6) === 'image(') {
                    var key = modelFill.substring(6, modelFill.length - 1);
                    if (key.indexOf(';') !== -1) {
                        var parts = key.split(';');
                        key = parts[1];
                    }
                    if (!keys[key]) {
                        keys[key] = 1;
                    }
                    else {
                        keys[key] += 1;
                    }
                }
                else if (modelFill.toLowerCase().substring(0, 6) === 'model(') {
                    var key = modelFill.substring(6, modelFill.length - 1);
                    if (key.indexOf(';') !== -1) {
                        var parts = key.split(';');
                        key = parts[1];
                    }
                    if (!keys[key]) {
                        keys[key] = 1;
                    }
                    else {
                        keys[key] += 1;
                    }
                }
            }
        }
        // Register resources from all elements
        var ml = model.elements.length;
        for (var i = 0; i < ml; i++) {
            var element = model.elements[i];
            if (element.getResourceKeys) {
                var elementKeys = element.getResourceKeys();
                for (var _i = 0, elementKeys_1 = elementKeys; _i < elementKeys_1.length; _i++) {
                    var elementKey = elementKeys_1[_i];
                    if (!keys[elementKey]) {
                        keys[elementKey] = 1;
                    }
                    else {
                        keys[elementKey] += 1;
                    }
                }
            }
        }
        return keys;
    };
    /**
     * Load all resource for the specified, optional, locale ID and
     * call callback upon completion
     * @param localeId - Desired locale ID (e.g. en-US) or null for any locale
     * @param callback - Completion callback with boolean success or failure result (result: boolean)
     */
    Model.prototype.prepareResources = function (localeId, callback) {
        var rm = this.resourceManager;
        var model = this;
        // Set locale
        rm.currentLocaleId = localeId;
        // Register resources for any model level fills
        if (model.fill) {
            if (typeof model.fill === 'string') {
                var modelFill = model.fill;
                if (modelFill.toLowerCase().substring(0, 6) === 'image(') {
                    var key = modelFill.substring(6, modelFill.length - 1);
                    if (key.indexOf(';') !== -1) {
                        var parts = key.split(';');
                        key = parts[1];
                    }
                    rm.register(key);
                }
                else if (modelFill.toLowerCase().substring(0, 6) === 'model(') {
                    var key = modelFill.substring(6, modelFill.length - 1);
                    if (key.indexOf(';') !== -1) {
                        var parts = key.split(';');
                        key = parts[1];
                    }
                    rm.register(key);
                }
            }
        }
        // Register resources from all elements
        var ml = model.elements.length;
        for (var i = 0; i < ml; i++) {
            var element = model.elements[i];
            if (element.registerResources) {
                element.registerResources(rm);
            }
        }
        // Load resources
        rm.load(callback);
    };
    /**
     * Sets rendering stroke style on canvas element for given element
     * @param c - Rendering context
     * @param el - Element being rendered
     * @returns True if stroke was applied for element
     */
    Model.prototype.setElementStroke = function (c, el) {
        var color;
        var stroke = this.strokeForElement(el);
        if (!stroke || stroke === 'no') {
            c.strokeStyle = 'rgba(0, 0, 0, 0)';
            return false;
        }
        if (stroke.indexOf(',') !== -1) {
            var parts = stroke.split(',');
            color = color_1.Color.parse(parts[0]);
            var width = parseFloat(parts[1]);
            c.lineWidth = width;
        }
        else {
            color = color_1.Color.parse(stroke);
            c.lineWidth = 1;
        }
        c.strokeStyle = color.toStyleString();
        c.globalAlpha = 1;
        return true;
    };
    /**
     * Sets rendering transform on canvas element for given element
     * @param c - Rendering context
     * @param t - Element transform property
     * @param origin - Reference point for transform
     */
    Model.prototype.setRenderTransform = function (c, t, origin) {
        if (t.length > 6 && t.substring(0, 6).toLowerCase() === 'scale(') {
            var command = t.substring(6, t.length - 1);
            var refX = origin.x;
            var refY = origin.y;
            if (command.indexOf('(') !== -1) {
                var centerString = command.substring(command.indexOf('(') + 1, command.length - 1);
                command = command.substring(0, command.indexOf('('));
                var center = point_1.Point.parse(centerString);
                refX += center.x;
                refY += center.y;
                c.translate(origin.x + center.x, origin.y + center.y);
            }
            else {
                c.translate(origin.x, origin.y);
            }
            if (command.indexOf(',') !== -1) {
                var parts = command.split(',');
                c.scale(parseFloat(parts[0]), parseFloat(parts[1]));
            }
            else {
                var scale = parseFloat(command);
                c.scale(scale, scale);
            }
            c.translate(-refX, -refY);
        }
        else if (t.length > 7 && t.substring(0, 7).toLowerCase() === 'rotate(') {
            var command = t.substring(7, t.length - 1);
            var refX = origin.x;
            var refY = origin.y;
            if (command.indexOf('(') !== -1) {
                var centerString = command.substring(command.indexOf('(') + 1, command.length - 1);
                command = command.substring(0, command.indexOf('('));
                var center = point_1.Point.parse(centerString);
                refX += center.x;
                refY += center.y;
                c.translate(origin.x + center.x, origin.y + center.y);
            }
            else {
                c.translate(origin.x, origin.y);
            }
            var angle = Math.PI / 180 * parseFloat(command);
            c.rotate(angle);
            c.translate(-refX, -refY);
        }
        else if (t.length > 10 && t.substring(0, 10).toLowerCase() === 'translate(') {
            var command = t.substring(10, t.length - 1);
            var parts = command.split(',');
            c.translate(parseFloat(parts[0]), parseFloat(parts[1]));
        }
        else if (t.length > 5 && t.substring(0, 5).toLowerCase() === 'skew(') {
            var command = t.substring(5, t.length - 1);
            var refX = origin.x;
            var refY = origin.y;
            if (command.indexOf('(') !== -1) {
                var centerString = command.substring(command.indexOf('(') + 1, command.length - 1);
                command = command.substring(0, command.indexOf('('));
                var center = point_1.Point.parse(centerString);
                refX += center.x;
                refY += center.y;
                c.translate(origin.x + center.x, origin.y + center.y);
            }
            else {
                c.translate(origin.x, origin.y);
            }
            var parts = command.split(',');
            var skewX = Math.PI / 180 * parseFloat(parts[0]);
            var skewY = Math.PI / 180 * parseFloat(parts[1]);
            c.transform(1, skewY, skewX, 1, 0, 0);
            c.translate(-refX, -refY);
        }
        else if (t.length > 7 && t.substring(0, 7).toLowerCase() === 'matrix(') {
            var command = t.substring(7, t.length - 1);
            var refX = origin.x;
            var refY = origin.y;
            if (command.indexOf('(') !== -1) {
                var centerString = command.substring(command.indexOf('(') + 1, command.length - 1);
                command = command.substring(0, command.indexOf('('));
                var center = point_1.Point.parse(centerString);
                refX += center.x;
                refY += center.y;
                c.translate(origin.x + center.x, origin.y + center.y);
            }
            else {
                c.translate(origin.x, origin.y);
            }
            var parts = command.split(',');
            c.transform(parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]), parseFloat(parts[4]), parseFloat(parts[5]));
            c.translate(-refX, -refY);
        }
    };
    /**
     * Retrieves  scaling factor for fill
     * @param el - Element rendered
     * @returns Fill scaling info
     */
    Model.prototype.getFillScale = function (el) {
        var result = new scaling_info_1.ScalingInfo();
        result.rx = 1.0;
        result.ry = 1.0;
        if (el.fillScale) {
            result.rx = el.fillScale;
            result.ry = el.fillScale;
        }
        return result;
    };
    /**
     * Returns topmost element at given coordinate or null if none found
     * @param c - Rendering context
     * @param tx - X coordinate
     * @param ty - Y coordinate
     * @returns Topmost element at coordinate or null if none found
     */
    Model.prototype.firstActiveElementAt = function (c, tx, ty) {
        var count = this.elements.length;
        for (var i = count - 1; i >= 0; i--) {
            var el = this.elements[i];
            if (el.interactive && el.hitTest(c, tx, ty)) {
                return el;
            }
        }
        return undefined;
    };
    /**
     * Returns all elements at given coordinate or empty [] if none found
     * @param c - Rendering context
     * @param tx - X coordinate
     * @param ty - Y coordinate
     * @returns Array of elements at coordinate
     */
    Model.prototype.elementsAt = function (c, tx, ty) {
        var els = [];
        this.elements.forEach(function (el) {
            if (el.interactive && el.hitTest(c, tx, ty)) {
                els.push(el);
            }
        });
        return els;
    };
    /**
     * Returns element with given ID or null if not found
     * @param id - Element ID
     * @returns First element with given ID or undefined if not found
     */
    Model.prototype.elementWithId = function (id) {
        var count = this.elements.length;
        for (var i = 0; i < count; i++) {
            var el = this.elements[i];
            if (el.id === id) {
                return el;
            }
        }
        return undefined;
    };
    /**
     * Renders model to provided 2d canvas rendering context at specified scale
     * @param c - Rendering context
     * @param scale - Rendering scale. Default is 1.
     */
    Model.prototype.renderToContext = function (c, scale) {
        if (!this._size) {
            throw new Error('Size is undefined.');
        }
        var location = this._location;
        if (!location) {
            location = new point_1.Point(0, 0);
        }
        var w = this._size.width;
        var h = this._size.height;
        if (scale) {
            w *= scale;
            h *= scale;
        }
        // If transformed
        c.save();
        c.beginPath();
        c.rect(0, 0, w, h);
        c.clip();
        if (this.transform) {
            this.setRenderTransform(c, this.transform, location);
        }
        // Fill
        if (fill_factory_1.FillFactory.setElementFill(c, this)) {
            if (this.fillOffsetX || this.fillOffsetY) {
                var fillOffsetX = this.fillOffsetX || 0;
                var fillOffsetY = this.fillOffsetY || 0;
                c.translate(fillOffsetX, fillOffsetY);
                c.fillRect(-fillOffsetX, -fillOffsetY, w, h);
                c.translate(-fillOffsetX, -fillOffsetY);
            }
            else {
                c.fillRect(0, 0, w, h);
            }
        }
        // Render elements
        c.globalAlpha = 1.0;
        var el = this.elements.length;
        for (var i = 0; i < el; i++) {
            this.elements[i].draw(c);
        }
        // Stroke
        if (this.setElementStroke(c, this)) {
            c.strokeRect(0, 0, this._size.width, this._size.height);
        }
        c.restore();
    };
    /**
     * Returns stroke for given element with inheritance
     * @param el - Element
     * @returns Element stroke
     */
    Model.prototype.strokeForElement = function (el) {
        var compare = el;
        while (compare) {
            if (compare.stroke) {
                return compare.stroke;
            }
            compare = compare.parent;
        }
        return undefined;
    };
    /**
     * Calculates frame rate in frames/second based on time since last frame
     * @returns Frame rate in frames / second
     */
    Model.prototype.calculateFPS = function () {
        var now = +new Date();
        var fps = 1000 / (now - this.lastTime);
        this.lastTime = now;
        return fps;
    };
    /**
     * Clones this model to a new instance
     * @returns Cloned model instance
     */
    Model.prototype.clone = function () {
        if (!this._size) {
            throw new Error('Size is undefined.');
        }
        var m = Model.create(this._size.width, this._size.height);
        _super.prototype.cloneTo.call(this, m);
        if (this.resourceManager && this.resources && this.resources.length > 0) {
            m.resources = [];
            this.resources.forEach(function (r) {
                m.resources.push(r.clone());
            });
        }
        if (this.elements && this.elements.length > 0) {
            m.elements = [];
            this.elements.forEach(function (e) {
                var clone = e.clone();
                clone.model = m;
                m.elements.push(clone);
            });
        }
        return m;
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    Model.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.resources && this.resources.length > 0) {
            o.resources = [];
            this.resources.forEach(function (r) {
                o.resources.push(r.serialize());
            });
        }
        if (this.elements && this.elements.length > 0) {
            o.elements = [];
            this.elements.forEach(function (e) {
                o.elements.push(e.serialize());
            });
        }
        return o;
    };
    /**
     * Serializes model to formatted JSON string
     */
    Model.prototype.formattedJSON = function () {
        var o = this.serialize();
        return JSON.stringify(o, null, ' ');
    };
    /**
     * Serializes model to raw JSON string
     */
    Model.prototype.rawJSON = function () {
        var o = this.serialize();
        return JSON.stringify(o);
    };
    return Model;
}(element_base_1.ElementBase));
exports.Model = Model;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Exposes shared utility methods
 */
var Utility = /** @class */ (function () {
    function Utility() {
    }
    /**
     * Retrieves text context via async ajax call
     * @param url - URL to be retrieved
     * @param callback - Result callback (result:string)
     * @returns void
     */
    Utility.getRemoteText = function (url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onreadystatechange = function (status) {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    callback(request.responseText);
                }
                else {
                    callback(undefined);
                }
            }
        };
        request.onabort = function () {
            console.log('Request Aborted: ' + url);
            callback(undefined);
        };
        request.onerror = function () {
            console.log('Request Error: ' + url + '\r' + request.responseText);
            callback(undefined);
        };
        request.send(null);
    };
    /**
     * Determines if a string ends with a different string
     * @param str - String to be evaluated
     * @param suffix - Suffix to be evaluated
     * @returns True if string ends with suffix
     */
    Utility.endsWith = function (str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
    /**
     * Joins two path segments, ensuring they are separated by a single path separator character ('/')
     * @param path1 - First path segment
     * @param path2 - Second path segment
     * @returns Joined path segment
     */
    Utility.joinPaths = function (path1, path2) {
        if (!path1) {
            path1 = '';
        }
        if (path2.substring(0, 1) === '/') {
            path2 = path2.substring(1, path2.length);
        }
        if (Utility.endsWith(path1, '/')) {
            return path1 + path2;
        }
        return path1 + '/' + path2;
    };
    /**
     * Creates a new globally unique identifier (GUID)
     * @returns New guid represented as a string in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    Utility.guid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0;
            var v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    return Utility;
}());
exports.Utility = Utility;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generic multicast event dispatcher
 */
var CommonEvent = /** @class */ (function () {
    function CommonEvent() {
        this.handlers = [];
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.hasListeners = this.hasListeners.bind(this);
        this.clear = this.clear.bind(this);
        this.trigger = this.trigger.bind(this);
    }
    CommonEvent.prototype.add = function (handler) {
        this.handlers.push(handler);
    };
    CommonEvent.prototype.remove = function (handler) {
        var index = this.handlers.indexOf(handler);
        if (index > -1) {
            this.handlers.splice(index, 1);
        }
    };
    CommonEvent.prototype.hasListeners = function () {
        return this.handlers.length > 0;
    };
    CommonEvent.prototype.clear = function () {
        this.handlers.splice(0, this.handlers.length);
    };
    CommonEvent.prototype.trigger = function (data) {
        this.handlers.slice(0).forEach(function (h) { return h(data); });
    };
    return CommonEvent;
}());
exports.CommonEvent = CommonEvent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
/**
 * Represents a rectangular region in 2D space
 */
var Region = /** @class */ (function () {
    /**
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param width - Width
     * @param height - Height
     */
    function Region(x, y, width, height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._size = new size_1.Size(width, height);
        this._location = new point_1.Point(x, y);
        this.clone = this.clone.bind(this);
        this.containsPoint = this.containsPoint.bind(this);
        this.containsCoordinate = this.containsCoordinate.bind(this);
        this.containsRegion = this.containsRegion.bind(this);
        this.intersectsWith = this.intersectsWith.bind(this);
    }
    /**
     * Region factory function
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param width - Width
     * @param height - Height
     * @returns New region
     */
    Region.create = function (x, y, width, height) {
        return new Region(x, y, width, height);
    };
    /**
     * Clones this region into a new instance
     * @returns Cloned region
     */
    Region.prototype.clone = function () {
        return new Region(this._x, this._y, this._width, this._height);
    };
    Object.defineProperty(Region.prototype, "x", {
        /**
         * Returns X coordinate
         * @returns X coordinate
         */
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Region.prototype, "y", {
        /**
         * Returns Y coordinate
         * @returns Y coordinate
         */
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Region.prototype, "width", {
        /**
         * Returns width
         * @returns Width
         */
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Region.prototype, "height", {
        /**
         * Returns height
         * @returns Height
         */
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Region.prototype, "location", {
        /**
         * Returns location
         * @returns Location
         */
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Region.prototype, "size", {
        /**
         * Returns size
         * @returns Size
         */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines if this region contains a given point
     * @param point - Point of interest
     * @returns True if point is in this region
     */
    Region.prototype.containsPoint = function (point) {
        if (point.x >= this.x &&
            point.x <= this.x + this.width &&
            point.y >= this.y &&
            point.y <= this.y + this.height) {
            return true;
        }
        return false;
    };
    /**
     * Determines if this region contains a coordinate
     * @param x - X coordinate
     * @param y - Y coordinate
     * @returns True if coordinate is in this region
     */
    Region.prototype.containsCoordinate = function (x, y) {
        if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
            return true;
        }
        return false;
    };
    /**
     * Determines if this region intersects with a another region
     * @param region - Region of interest
     * @returns True if region of interest intersects with this region
     */
    Region.prototype.intersectsWith = function (region) {
        var x1 = this.x;
        var x2 = this.x + this.width;
        var y1 = this.y;
        var y2 = this.y + this.height;
        var x3 = region.x;
        var x4 = region.x + region.width;
        var y3 = region.y;
        var y4 = region.y + region.height;
        if (x1 < x4 && x2 > x3 && y1 < y4 && y2 > y3) {
            return true;
        }
        return false;
    };
    /**
     * Determines if this region completely contains another region
     * @param region - Region of interest
     * @returns True if this region completely contains the region of interest
     */
    Region.prototype.containsRegion = function (region) {
        var x1 = this.x;
        var x2 = this.x + this.width;
        var y1 = this.y;
        var y2 = this.y + this.height;
        var x3 = region.x;
        var x4 = region.x + region.width;
        var y3 = region.y;
        var y4 = region.y + region.height;
        if (x3 >= x1 && x4 <= x2 && y3 >= y1 && y4 <= y2) {
            return true;
        }
        return false;
    };
    return Region;
}());
exports.Region = Region;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(10);
var error_messages_1 = __webpack_require__(0);
var model_1 = __webpack_require__(4);
var point_1 = __webpack_require__(1);
var linear_gradient_fill_1 = __webpack_require__(27);
var radial_gradient_fill_1 = __webpack_require__(28);
/**
 * Element fill creation methods
 */
var FillFactory = /** @class */ (function () {
    function FillFactory() {
    }
    /**
     * Returns fill for given element with inheritance
     * @param el - Element
     * @returns Element stroke
     */
    FillFactory.fillForElement = function (el) {
        var compare = el;
        while (compare) {
            if (compare.fill) {
                return compare.fill;
            }
            compare = compare.parent;
        }
        return undefined;
    };
    /**
     * Sets rendering fill style on canvas element for given element
     * @param c - Rendering context
     * @param el - Element being rendered
     * @returns True if fill was applied for element
     */
    FillFactory.setElementFill = function (c, el) {
        var model = el.model;
        if (!model && el instanceof model_1.Model) {
            model = el;
        }
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var fill = FillFactory.fillForElement(el);
        if (!fill || (typeof fill === 'string' && fill === 'no')) {
            c.fillStyle = 'rgba(0,0,0,0)';
            return false;
        }
        if (fill instanceof linear_gradient_fill_1.LinearGradientFill) {
            var lgr = fill;
            var start = point_1.Point.parse(lgr.start);
            var end = point_1.Point.parse(lgr.end);
            var linearGradient = c.createLinearGradient(start.x, start.y, end.x, end.y);
            for (var _i = 0, _a = lgr.stops; _i < _a.length; _i++) {
                var stop_1 = _a[_i];
                linearGradient.addColorStop(stop_1.offset, color_1.Color.parse(stop_1.color).toStyleString());
            }
            c.fillStyle = linearGradient;
            return true;
        }
        if (fill instanceof radial_gradient_fill_1.RadialGradientFill) {
            var rgr = fill;
            var focus_1 = point_1.Point.parse(rgr.focus);
            var center = point_1.Point.parse(rgr.center);
            var radialGradient = c.createRadialGradient(focus_1.x, focus_1.y, 0, center.x, center.y, Math.max(rgr.radiusX, rgr.radiusY));
            for (var _b = 0, _c = rgr.stops; _b < _c.length; _b++) {
                var stop_2 = _c[_b];
                radialGradient.addColorStop(stop_2.offset, color_1.Color.parse(stop_2.color).toStyleString());
            }
            c.fillStyle = radialGradient;
            return true;
        }
        if (typeof fill === 'string') {
            if (fill.toLowerCase().substring(0, 6) === 'image(') {
                var key = fill.substring(6, fill.length - 1);
                if (key.indexOf(';') !== -1) {
                    var parts = key.split(';');
                    var opacity = parseFloat(parts[0]);
                    c.globalAlpha = opacity;
                    key = parts[1];
                }
                var res = model.resourceManager.get(key);
                if (!res) {
                    c.fillStyle = color_1.Color.Magenta.toStyleString();
                    throw new Error(error_messages_1.ErrorMessages.ImageUndefined + ': ' + key);
                }
                var scaling = model.getFillScale(el);
                var pattern = void 0;
                if (!res.image) {
                    throw new Error(error_messages_1.ErrorMessages.ImageUndefined);
                }
                if (scaling.rx === 1 && scaling.ry === 1) {
                    pattern = c.createPattern(res.image, 'repeat');
                }
                else {
                    var offscreen = document.createElement('canvas');
                    offscreen.width = res.image.width * scaling.rx;
                    offscreen.height = res.image.height * scaling.ry;
                    var c2 = offscreen.getContext('2d');
                    if (c2 !== null) {
                        c2.scale(scaling.rx, scaling.ry);
                        c2.drawImage(res.image, 0, 0);
                    }
                    pattern = c.createPattern(offscreen, 'repeat');
                }
                if (pattern != null) {
                    c.fillStyle = pattern;
                    return true;
                }
                else {
                    throw new Error(error_messages_1.ErrorMessages.ErrorCreatingCanvasPattern);
                }
            }
            if (fill.toLowerCase().substring(0, 6) === 'model(') {
                var key = fill.substring(6, fill.length - 1);
                if (key.indexOf(';') !== -1) {
                    var parts = key.split(';');
                    var opacity = parseFloat(parts[0]);
                    c.globalAlpha = opacity;
                    key = parts[1];
                }
                var res = model.resourceManager.get(key);
                if (!res) {
                    c.fillStyle = color_1.Color.Magenta.toStyleString();
                    throw new Error(error_messages_1.ErrorMessages.ModelResourceUndefined + ': ' + key);
                }
                var innerModel = res.model;
                if (innerModel === undefined) {
                    throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
                }
                var size = innerModel.getSize();
                if (!size) {
                    throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
                }
                var offscreen = document.createElement('canvas');
                var scaling = model.getFillScale(el);
                if (scaling.rx === 1 && scaling.ry === 1) {
                    offscreen.width = size.width;
                    offscreen.height = size.height;
                }
                else {
                    offscreen.width = size.width * scaling.rx;
                    offscreen.height = size.height * scaling.ry;
                }
                var c2 = offscreen.getContext('2d');
                if (c2 !== null) {
                    if (scaling.rx !== 1 || scaling.ry !== 1) {
                        c2.scale(scaling.rx, scaling.ry);
                    }
                    innerModel.renderToContext(c2);
                }
                var pattern = c.createPattern(offscreen, 'repeat');
                if (pattern !== null) {
                    c.fillStyle = pattern;
                    return true;
                }
                else {
                    throw new Error(error_messages_1.ErrorMessages.ErrorCreatingCanvasPattern);
                }
            }
            c.fillStyle = color_1.Color.parse(fill).toStyleString();
            return true;
        }
        return false;
    };
    return FillFactory;
}());
exports.FillFactory = FillFactory;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for design surface tools
 */
var DesignTool = /** @class */ (function () {
    function DesignTool() {
        this.isCreating = false;
        this.cancel = this.cancel.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.opacity = 255;
        this.fillScale = 1;
        this.fillOffsetX = 0;
        this.fillOffsetY = 0;
    }
    DesignTool.prototype.setFill = function (fill) {
        if (typeof fill === 'string') {
            this.fill = fill;
        }
        else if (fill !== undefined) {
            this.fill = fill.clone();
        }
    };
    return DesignTool;
}());
exports.DesignTool = DesignTool;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var named_color_1 = __webpack_require__(56);
/**
 * Represents a 32-bit RGBA color
 */
var Color = /** @class */ (function () {
    /**
     * Creates a new color
     * @param a - Alpha component
     * @param r - Red component
     * @param g - Green component
     * @param b - Blue component
     */
    function Color(a, r, g, b) {
        this.a = a;
        this.r = r;
        this.g = g;
        this.b = b;
        this.clone = this.clone.bind(this);
        this.equals = this.equals.bind(this);
        this.equalsHue = this.equalsHue.bind(this);
        this.hexPart = this.hexPart.bind(this);
        this.toHexString = this.toHexString.bind(this);
        this.toStyleString = this.toStyleString.bind(this);
        this.toString = this.toString.bind(this);
        this.isNamedColor = this.isNamedColor.bind(this);
    }
    /**
     * Color factory function
     * @param a - Alpha component (0-255)
     * @param r - Red component (0-255)
     * @param g - Green component (0-255)
     * @param b - Blue component (0-255)
     * @returns New color
     */
    Color.create = function (a, r, g, b) {
        return new Color(a, r, g, b);
    };
    /**
     * Parses a string representation of a color into a color instance,
     * handling known color names and hex formatted color strings
     * @param color - String representation of color
     * @returns Parsed color instance
     */
    Color.parse = function (color) {
        var a;
        var r;
        var g;
        var b;
        // Parse hex prefixed color
        if (color.charAt(0) === '#') {
            switch (color.length) {
                // Six digits
                case 7:
                    r = parseInt(color.substring(1, 3), 16);
                    g = parseInt(color.substring(3, 5), 16);
                    b = parseInt(color.substring(5, 7), 16);
                    return new Color(255, r, g, b);
                // Eight digits - with alpha
                case 9:
                    a = parseInt(color.substring(1, 3), 16);
                    r = parseInt(color.substring(3, 5), 16);
                    g = parseInt(color.substring(5, 7), 16);
                    b = parseInt(color.substring(7, 9), 16);
                    return new Color(a, r, g, b);
                default:
                    throw new Error(error_messages_1.ErrorMessages.InvalidColorString + ': ' + color);
            }
        }
        var evalString = color.toLowerCase();
        var alpha = 1;
        if (color.indexOf(';') !== -1) {
            var colorParts = evalString.split(';');
            evalString = colorParts[1];
            alpha = parseFloat(colorParts[0]);
            if (alpha > 1) {
                alpha = 1;
            }
            else if (alpha < 0) {
                alpha = 0;
            }
        }
        // Lookup known color
        if (evalString === 'transparent') {
            return Color.Transparent;
        }
        for (var _i = 0, _a = Color.NamedColors; _i < _a.length; _i++) {
            var namedColor = _a[_i];
            if (namedColor.name.toLowerCase() === evalString) {
                if (alpha === 255) {
                    return namedColor.color;
                }
                else {
                    return new Color(alpha * 255, namedColor.color.r, namedColor.color.g, namedColor.color.b);
                }
            }
        }
        return Color.Transparent;
    };
    /**
     * Returns a string representation of this color, returning known color names for
     * color values that equate to known color values or hex formatted string otherwise
     * @returns String representation of color
     */
    Color.prototype.toString = function () {
        // Check for transparent
        if (this.a === 0) {
            return 'Transparent';
        }
        // Check for known color
        for (var _i = 0, _a = Color.NamedColors; _i < _a.length; _i++) {
            var namedColor = _a[_i];
            if (this.equalsHue(namedColor.color)) {
                if (this.a === 255) {
                    return namedColor.name;
                }
                else {
                    return this.a / 255 + ';' + namedColor.name;
                }
            }
        }
        // Not known color, return hex string
        return this.toHexString();
    };
    /**
     * Returns a # prefixed hex representation of this color
     * @returns Six or eight digit (alpha <> 255) hex prefixed color string
     */
    Color.prototype.toHexString = function () {
        if (this.a === 255) {
            return '#' + this.hexPart(this.r) + this.hexPart(this.g) + this.hexPart(this.b);
        }
        return '#' + this.hexPart(this.a) + this.hexPart(this.r) + this.hexPart(this.g) + this.hexPart(this.b);
    };
    /**
     * Returns an rgb(r,g,b) or rgba(r,g,b,a) string representation of color
     * @returns rgb() or rgba() (alpha <> 255) string representation.
     */
    Color.prototype.toStyleString = function () {
        if (this.a === 255) {
            return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
        return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a / 255 + ')';
    };
    /**
     * Compares this color to another color for equality
     * @param that - Color of interest
     * @returns True if color of interest equals this
     */
    Color.prototype.equals = function (that) {
        return that !== null && this.a === that.a && this.r === that.r && this.g === that.g && this.b === that.b;
    };
    /**
     * Compares this color to another color for hue equality
     * @param that - Color of interest
     * @returns True if color of interest equals this without regard to alpha
     */
    Color.prototype.equalsHue = function (that) {
        return this.r === that.r && this.g === that.g && this.b === that.b;
    };
    /**
     * Determines if this color is a named color hue
     * @returns True if this is a named color hue
     */
    Color.prototype.isNamedColor = function () {
        for (var _i = 0, _a = Color.NamedColors; _i < _a.length; _i++) {
            var namedColor = _a[_i];
            if (this.equalsHue(namedColor.color)) {
                return true;
            }
        }
        return false;
    };
    Color.prototype.clone = function () {
        return new Color(this.a, this.r, this.g, this.b);
    };
    /**
     * Returns 0-255 encoded as two character hex string
     * @param n - 0-255 color component
     * @returns Two character hex string
     */
    Color.prototype.hexPart = function (n) {
        if (n < 16) {
            return '0' + n.toString(16);
        }
        return n.toString(16);
    };
    Color.Transparent = new Color(0, 255, 255, 255);
    Color.AliceBlue = new Color(255, 240, 248, 255);
    Color.AntiqueWhite = new Color(255, 250, 235, 215);
    Color.Aqua = new Color(255, 0, 255, 255);
    Color.Aquamarine = new Color(255, 127, 255, 212);
    Color.Azure = new Color(255, 240, 255, 255);
    Color.Beige = new Color(255, 245, 245, 220);
    Color.Bisque = new Color(255, 255, 228, 196);
    Color.Black = new Color(255, 0, 0, 0);
    Color.BlanchedAlmond = new Color(255, 255, 235, 205);
    Color.Blue = new Color(255, 0, 0, 255);
    Color.BlueViolet = new Color(255, 138, 43, 226);
    Color.Brown = new Color(255, 165, 42, 42);
    Color.BurlyWood = new Color(255, 222, 184, 135);
    Color.CadetBlue = new Color(255, 95, 158, 160);
    Color.Chartreuse = new Color(255, 127, 255, 0);
    Color.Chocolate = new Color(255, 210, 105, 30);
    Color.Coral = new Color(255, 255, 127, 80);
    Color.CornflowerBlue = new Color(255, 100, 149, 237);
    Color.Cornsilk = new Color(255, 255, 248, 220);
    Color.Crimson = new Color(255, 220, 20, 60);
    Color.Cyan = new Color(255, 0, 255, 255);
    Color.DarkBlue = new Color(255, 0, 0, 139);
    Color.DarkCyan = new Color(255, 0, 139, 139);
    Color.DarkGoldenrod = new Color(255, 184, 134, 11);
    Color.DarkGray = new Color(255, 169, 169, 169);
    Color.DarkGreen = new Color(255, 0, 100, 0);
    Color.DarkKhaki = new Color(255, 189, 183, 107);
    Color.DarkMagenta = new Color(255, 139, 0, 139);
    Color.DarkOliveGreen = new Color(255, 85, 107, 47);
    Color.DarkOrange = new Color(255, 255, 140, 0);
    Color.DarkOrchid = new Color(255, 153, 50, 204);
    Color.DarkRed = new Color(255, 139, 0, 0);
    Color.DarkSalmon = new Color(255, 233, 150, 122);
    Color.DarkSeaGreen = new Color(255, 143, 188, 139);
    Color.DarkSlateBlue = new Color(255, 72, 61, 139);
    Color.DarkSlateGray = new Color(255, 47, 79, 79);
    Color.DarkTurquoise = new Color(255, 0, 206, 209);
    Color.DarkViolet = new Color(255, 148, 0, 211);
    Color.DeepPink = new Color(255, 255, 20, 147);
    Color.DeepSkyBlue = new Color(255, 0, 191, 255);
    Color.DimGray = new Color(255, 105, 105, 105);
    Color.DodgerBlue = new Color(255, 30, 144, 255);
    Color.Firebrick = new Color(255, 178, 34, 34);
    Color.FloralWhite = new Color(255, 255, 250, 240);
    Color.ForestGreen = new Color(255, 34, 139, 34);
    Color.Fuchsia = new Color(255, 255, 0, 255);
    Color.Gainsboro = new Color(255, 220, 220, 220);
    Color.GhostWhite = new Color(255, 248, 248, 255);
    Color.Gold = new Color(255, 255, 215, 0);
    Color.Goldenrod = new Color(255, 218, 165, 32);
    Color.Gray = new Color(255, 128, 128, 128);
    Color.Green = new Color(255, 0, 128, 0);
    Color.GreenYellow = new Color(255, 173, 255, 47);
    Color.Honeydew = new Color(255, 240, 255, 240);
    Color.HotPink = new Color(255, 255, 105, 180);
    Color.IndianRed = new Color(255, 205, 92, 92);
    Color.Indigo = new Color(255, 75, 0, 130);
    Color.Ivory = new Color(255, 255, 255, 240);
    Color.Khaki = new Color(255, 240, 230, 140);
    Color.Lavender = new Color(255, 230, 230, 250);
    Color.LavenderBlush = new Color(255, 255, 240, 245);
    Color.LawnGreen = new Color(255, 124, 252, 0);
    Color.LemonChiffon = new Color(255, 255, 250, 205);
    Color.LightBlue = new Color(255, 173, 216, 230);
    Color.LightCoral = new Color(255, 240, 128, 128);
    Color.LightCyan = new Color(255, 224, 255, 255);
    Color.LightGoldenrodYellow = new Color(255, 250, 250, 210);
    Color.LightGray = new Color(255, 211, 211, 211);
    Color.LightGreen = new Color(255, 144, 238, 144);
    Color.LightPink = new Color(255, 255, 182, 193);
    Color.LightSalmon = new Color(255, 255, 160, 122);
    Color.LightSeaGreen = new Color(255, 32, 178, 170);
    Color.LightSkyBlue = new Color(255, 135, 206, 250);
    Color.LightSlateGray = new Color(255, 119, 136, 153);
    Color.LightSteelBlue = new Color(255, 176, 196, 222);
    Color.LightYellow = new Color(255, 255, 255, 224);
    Color.Lime = new Color(255, 0, 255, 0);
    Color.LimeGreen = new Color(255, 50, 205, 50);
    Color.Linen = new Color(255, 250, 240, 230);
    Color.Magenta = new Color(255, 255, 0, 255);
    Color.Maroon = new Color(255, 128, 0, 0);
    Color.MediumAquamarine = new Color(255, 102, 205, 170);
    Color.MediumBlue = new Color(255, 0, 0, 205);
    Color.MediumOrchid = new Color(255, 186, 85, 211);
    Color.MediumPurple = new Color(255, 147, 112, 219);
    Color.MediumSeaGreen = new Color(255, 60, 179, 113);
    Color.MediumSlateBlue = new Color(255, 123, 104, 238);
    Color.MediumSpringGreen = new Color(255, 0, 250, 154);
    Color.MediumTurquoise = new Color(255, 72, 209, 204);
    Color.MediumVioletRed = new Color(255, 199, 21, 133);
    Color.MidnightBlue = new Color(255, 25, 25, 112);
    Color.MintCream = new Color(255, 245, 255, 250);
    Color.MistyRose = new Color(255, 255, 228, 225);
    Color.Moccasin = new Color(255, 255, 228, 181);
    Color.NavajoWhite = new Color(255, 255, 222, 173);
    Color.Navy = new Color(255, 0, 0, 128);
    Color.OldLace = new Color(255, 253, 245, 230);
    Color.Olive = new Color(255, 128, 128, 0);
    Color.OliveDrab = new Color(255, 107, 142, 35);
    Color.Orange = new Color(255, 255, 165, 0);
    Color.OrangeRed = new Color(255, 255, 69, 0);
    Color.Orchid = new Color(255, 218, 112, 214);
    Color.PaleGoldenrod = new Color(255, 238, 232, 170);
    Color.PaleGreen = new Color(255, 152, 251, 152);
    Color.PaleTurquoise = new Color(255, 175, 238, 238);
    Color.PaleVioletRed = new Color(255, 219, 112, 147);
    Color.PapayaWhip = new Color(255, 255, 239, 213);
    Color.PeachPuff = new Color(255, 255, 218, 185);
    Color.Peru = new Color(255, 205, 133, 63);
    Color.Pink = new Color(255, 255, 192, 203);
    Color.Plum = new Color(255, 221, 160, 221);
    Color.PowderBlue = new Color(255, 176, 224, 230);
    Color.Purple = new Color(255, 128, 0, 128);
    Color.Red = new Color(255, 255, 0, 0);
    Color.RosyBrown = new Color(255, 188, 143, 143);
    Color.RoyalBlue = new Color(255, 65, 105, 225);
    Color.SaddleBrown = new Color(255, 139, 69, 19);
    Color.Salmon = new Color(255, 250, 128, 114);
    Color.SandyBrown = new Color(255, 244, 164, 96);
    Color.SeaGreen = new Color(255, 46, 139, 87);
    Color.SeaShell = new Color(255, 255, 245, 238);
    Color.Sienna = new Color(255, 160, 82, 45);
    Color.Silver = new Color(255, 192, 192, 192);
    Color.SkyBlue = new Color(255, 135, 206, 235);
    Color.SlateBlue = new Color(255, 106, 90, 205);
    Color.SlateGray = new Color(255, 112, 128, 144);
    Color.Snow = new Color(255, 255, 250, 250);
    Color.SpringGreen = new Color(255, 0, 255, 127);
    Color.SteelBlue = new Color(255, 70, 130, 180);
    Color.Tan = new Color(255, 210, 180, 140);
    Color.Teal = new Color(255, 0, 128, 128);
    Color.Thistle = new Color(255, 216, 191, 216);
    Color.Tomato = new Color(255, 255, 99, 71);
    Color.Turquoise = new Color(255, 64, 224, 208);
    Color.Violet = new Color(255, 238, 130, 238);
    Color.Wheat = new Color(255, 245, 222, 179);
    Color.White = new Color(255, 255, 255, 255);
    Color.WhiteSmoke = new Color(255, 245, 245, 245);
    Color.Yellow = new Color(255, 255, 255, 0);
    Color.YellowGreen = new Color(255, 154, 205, 50);
    /**
     * Array of predefined named colors
     */
    Color.NamedColors = [];
    return Color;
}());
exports.Color = Color;
Color.NamedColors.push(new named_color_1.NamedColor('Transparent', Color.Transparent));
Color.NamedColors.push(new named_color_1.NamedColor('AliceBlue', Color.AliceBlue));
Color.NamedColors.push(new named_color_1.NamedColor('AntiqueWhite', Color.AntiqueWhite));
Color.NamedColors.push(new named_color_1.NamedColor('Aqua', Color.Aqua));
Color.NamedColors.push(new named_color_1.NamedColor('Aquamarine', Color.Aquamarine));
Color.NamedColors.push(new named_color_1.NamedColor('Azure', Color.Azure));
Color.NamedColors.push(new named_color_1.NamedColor('Beige', Color.Beige));
Color.NamedColors.push(new named_color_1.NamedColor('Bisque', Color.Bisque));
Color.NamedColors.push(new named_color_1.NamedColor('Black', Color.Black));
Color.NamedColors.push(new named_color_1.NamedColor('BlanchedAlmond', Color.BlanchedAlmond));
Color.NamedColors.push(new named_color_1.NamedColor('Blue', Color.Blue));
Color.NamedColors.push(new named_color_1.NamedColor('BlueViolet', Color.BlueViolet));
Color.NamedColors.push(new named_color_1.NamedColor('Brown', Color.Brown));
Color.NamedColors.push(new named_color_1.NamedColor('BurlyWood', Color.BurlyWood));
Color.NamedColors.push(new named_color_1.NamedColor('CadetBlue', Color.CadetBlue));
Color.NamedColors.push(new named_color_1.NamedColor('Chartreuse', Color.Chartreuse));
Color.NamedColors.push(new named_color_1.NamedColor('Chocolate', Color.Chocolate));
Color.NamedColors.push(new named_color_1.NamedColor('Coral', Color.Coral));
Color.NamedColors.push(new named_color_1.NamedColor('CornflowerBlue', Color.CornflowerBlue));
Color.NamedColors.push(new named_color_1.NamedColor('Cornsilk', Color.Cornsilk));
Color.NamedColors.push(new named_color_1.NamedColor('Crimson', Color.Crimson));
Color.NamedColors.push(new named_color_1.NamedColor('Cyan', Color.Cyan));
Color.NamedColors.push(new named_color_1.NamedColor('DarkBlue', Color.DarkBlue));
Color.NamedColors.push(new named_color_1.NamedColor('DarkCyan', Color.DarkCyan));
Color.NamedColors.push(new named_color_1.NamedColor('DarkGoldenrod', Color.DarkGoldenrod));
Color.NamedColors.push(new named_color_1.NamedColor('DarkGray', Color.DarkGray));
Color.NamedColors.push(new named_color_1.NamedColor('DarkGreen', Color.DarkGreen));
Color.NamedColors.push(new named_color_1.NamedColor('DarkKhaki', Color.DarkKhaki));
Color.NamedColors.push(new named_color_1.NamedColor('DarkMagenta', Color.DarkMagenta));
Color.NamedColors.push(new named_color_1.NamedColor('DarkOliveGreen', Color.DarkOliveGreen));
Color.NamedColors.push(new named_color_1.NamedColor('DarkOrange', Color.DarkOrange));
Color.NamedColors.push(new named_color_1.NamedColor('DarkOrchid', Color.DarkOrchid));
Color.NamedColors.push(new named_color_1.NamedColor('DarkRed', Color.DarkRed));
Color.NamedColors.push(new named_color_1.NamedColor('DarkSalmon', Color.DarkSalmon));
Color.NamedColors.push(new named_color_1.NamedColor('DarkSeaGreen', Color.DarkSeaGreen));
Color.NamedColors.push(new named_color_1.NamedColor('DarkSlateBlue', Color.DarkSlateBlue));
Color.NamedColors.push(new named_color_1.NamedColor('DarkSlateGray', Color.DarkSlateGray));
Color.NamedColors.push(new named_color_1.NamedColor('DarkTurquoise', Color.DarkTurquoise));
Color.NamedColors.push(new named_color_1.NamedColor('DarkViolet', Color.DarkViolet));
Color.NamedColors.push(new named_color_1.NamedColor('DeepPink', Color.DeepPink));
Color.NamedColors.push(new named_color_1.NamedColor('DeepSkyBlue', Color.DeepSkyBlue));
Color.NamedColors.push(new named_color_1.NamedColor('DimGray', Color.DimGray));
Color.NamedColors.push(new named_color_1.NamedColor('DodgerBlue', Color.DodgerBlue));
Color.NamedColors.push(new named_color_1.NamedColor('Firebrick', Color.Firebrick));
Color.NamedColors.push(new named_color_1.NamedColor('FloralWhite', Color.FloralWhite));
Color.NamedColors.push(new named_color_1.NamedColor('ForestGreen', Color.ForestGreen));
Color.NamedColors.push(new named_color_1.NamedColor('Fuchsia', Color.Fuchsia));
Color.NamedColors.push(new named_color_1.NamedColor('Gainsboro', Color.Gainsboro));
Color.NamedColors.push(new named_color_1.NamedColor('GhostWhite', Color.GhostWhite));
Color.NamedColors.push(new named_color_1.NamedColor('Gold', Color.Gold));
Color.NamedColors.push(new named_color_1.NamedColor('Goldenrod', Color.Goldenrod));
Color.NamedColors.push(new named_color_1.NamedColor('Gray', Color.Gray));
Color.NamedColors.push(new named_color_1.NamedColor('Green', Color.Green));
Color.NamedColors.push(new named_color_1.NamedColor('GreenYellow', Color.GreenYellow));
Color.NamedColors.push(new named_color_1.NamedColor('Honeydew', Color.Honeydew));
Color.NamedColors.push(new named_color_1.NamedColor('HotPink', Color.HotPink));
Color.NamedColors.push(new named_color_1.NamedColor('IndianRed', Color.IndianRed));
Color.NamedColors.push(new named_color_1.NamedColor('Indigo', Color.Indigo));
Color.NamedColors.push(new named_color_1.NamedColor('Ivory', Color.Ivory));
Color.NamedColors.push(new named_color_1.NamedColor('Khaki', Color.Khaki));
Color.NamedColors.push(new named_color_1.NamedColor('Lavender', Color.Lavender));
Color.NamedColors.push(new named_color_1.NamedColor('LavenderBlush', Color.LavenderBlush));
Color.NamedColors.push(new named_color_1.NamedColor('LawnGreen', Color.LawnGreen));
Color.NamedColors.push(new named_color_1.NamedColor('LemonChiffon', Color.LemonChiffon));
Color.NamedColors.push(new named_color_1.NamedColor('LightBlue', Color.LightBlue));
Color.NamedColors.push(new named_color_1.NamedColor('LightCoral', Color.LightCoral));
Color.NamedColors.push(new named_color_1.NamedColor('LightCyan', Color.LightCyan));
Color.NamedColors.push(new named_color_1.NamedColor('LightGoldenrodYellow', Color.LightGoldenrodYellow));
Color.NamedColors.push(new named_color_1.NamedColor('LightGray', Color.LightGray));
Color.NamedColors.push(new named_color_1.NamedColor('LightGreen', Color.LightGreen));
Color.NamedColors.push(new named_color_1.NamedColor('LightPink', Color.LightPink));
Color.NamedColors.push(new named_color_1.NamedColor('LightSalmon', Color.LightSalmon));
Color.NamedColors.push(new named_color_1.NamedColor('LightSeaGreen', Color.LightSeaGreen));
Color.NamedColors.push(new named_color_1.NamedColor('LightSkyBlue', Color.LightSkyBlue));
Color.NamedColors.push(new named_color_1.NamedColor('LightSlateGray', Color.LightSlateGray));
Color.NamedColors.push(new named_color_1.NamedColor('LightSteelBlue', Color.LightSteelBlue));
Color.NamedColors.push(new named_color_1.NamedColor('LightYellow', Color.LightYellow));
Color.NamedColors.push(new named_color_1.NamedColor('Lime', Color.Lime));
Color.NamedColors.push(new named_color_1.NamedColor('LimeGreen', Color.LimeGreen));
Color.NamedColors.push(new named_color_1.NamedColor('Linen', Color.Linen));
Color.NamedColors.push(new named_color_1.NamedColor('Magenta', Color.Magenta));
Color.NamedColors.push(new named_color_1.NamedColor('Maroon', Color.Maroon));
Color.NamedColors.push(new named_color_1.NamedColor('MediumAquamarine', Color.MediumAquamarine));
Color.NamedColors.push(new named_color_1.NamedColor('MediumBlue', Color.MediumBlue));
Color.NamedColors.push(new named_color_1.NamedColor('MediumOrchid', Color.MediumOrchid));
Color.NamedColors.push(new named_color_1.NamedColor('MediumPurple', Color.MediumPurple));
Color.NamedColors.push(new named_color_1.NamedColor('MediumSeaGreen', Color.MediumSeaGreen));
Color.NamedColors.push(new named_color_1.NamedColor('MediumSlateBlue', Color.MediumSlateBlue));
Color.NamedColors.push(new named_color_1.NamedColor('MediumSpringGreen', Color.MediumSpringGreen));
Color.NamedColors.push(new named_color_1.NamedColor('MediumTurquoise', Color.MediumTurquoise));
Color.NamedColors.push(new named_color_1.NamedColor('MediumVioletRed', Color.MediumVioletRed));
Color.NamedColors.push(new named_color_1.NamedColor('MidnightBlue', Color.MidnightBlue));
Color.NamedColors.push(new named_color_1.NamedColor('MintCream', Color.MintCream));
Color.NamedColors.push(new named_color_1.NamedColor('MistyRose', Color.MistyRose));
Color.NamedColors.push(new named_color_1.NamedColor('Moccasin', Color.Moccasin));
Color.NamedColors.push(new named_color_1.NamedColor('NavajoWhite', Color.NavajoWhite));
Color.NamedColors.push(new named_color_1.NamedColor('Navy', Color.Navy));
Color.NamedColors.push(new named_color_1.NamedColor('OldLace', Color.OldLace));
Color.NamedColors.push(new named_color_1.NamedColor('Olive', Color.Olive));
Color.NamedColors.push(new named_color_1.NamedColor('OliveDrab', Color.OliveDrab));
Color.NamedColors.push(new named_color_1.NamedColor('Orange', Color.Orange));
Color.NamedColors.push(new named_color_1.NamedColor('OrangeRed', Color.OrangeRed));
Color.NamedColors.push(new named_color_1.NamedColor('Orchid', Color.Orchid));
Color.NamedColors.push(new named_color_1.NamedColor('PaleGoldenrod', Color.PaleGoldenrod));
Color.NamedColors.push(new named_color_1.NamedColor('PaleGreen', Color.PaleGreen));
Color.NamedColors.push(new named_color_1.NamedColor('PaleTurquoise', Color.PaleTurquoise));
Color.NamedColors.push(new named_color_1.NamedColor('PaleVioletRed', Color.PaleVioletRed));
Color.NamedColors.push(new named_color_1.NamedColor('PapayaWhip', Color.PapayaWhip));
Color.NamedColors.push(new named_color_1.NamedColor('PeachPuff', Color.PeachPuff));
Color.NamedColors.push(new named_color_1.NamedColor('Peru', Color.Peru));
Color.NamedColors.push(new named_color_1.NamedColor('Pink', Color.Pink));
Color.NamedColors.push(new named_color_1.NamedColor('Plum', Color.Plum));
Color.NamedColors.push(new named_color_1.NamedColor('PowderBlue', Color.PowderBlue));
Color.NamedColors.push(new named_color_1.NamedColor('Purple', Color.Purple));
Color.NamedColors.push(new named_color_1.NamedColor('Red', Color.Red));
Color.NamedColors.push(new named_color_1.NamedColor('RosyBrown', Color.RosyBrown));
Color.NamedColors.push(new named_color_1.NamedColor('RoyalBlue', Color.RoyalBlue));
Color.NamedColors.push(new named_color_1.NamedColor('SaddleBrown', Color.SaddleBrown));
Color.NamedColors.push(new named_color_1.NamedColor('Salmon', Color.Salmon));
Color.NamedColors.push(new named_color_1.NamedColor('SandyBrown', Color.SandyBrown));
Color.NamedColors.push(new named_color_1.NamedColor('SeaGreen', Color.SeaGreen));
Color.NamedColors.push(new named_color_1.NamedColor('SeaShell', Color.SeaShell));
Color.NamedColors.push(new named_color_1.NamedColor('Sienna', Color.Sienna));
Color.NamedColors.push(new named_color_1.NamedColor('Silver', Color.Silver));
Color.NamedColors.push(new named_color_1.NamedColor('SkyBlue', Color.SkyBlue));
Color.NamedColors.push(new named_color_1.NamedColor('SlateBlue', Color.SlateBlue));
Color.NamedColors.push(new named_color_1.NamedColor('SlateGray', Color.SlateGray));
Color.NamedColors.push(new named_color_1.NamedColor('Snow', Color.Snow));
Color.NamedColors.push(new named_color_1.NamedColor('SpringGreen', Color.SpringGreen));
Color.NamedColors.push(new named_color_1.NamedColor('SteelBlue', Color.SteelBlue));
Color.NamedColors.push(new named_color_1.NamedColor('Tan', Color.Tan));
Color.NamedColors.push(new named_color_1.NamedColor('Teal', Color.Teal));
Color.NamedColors.push(new named_color_1.NamedColor('Thistle', Color.Thistle));
Color.NamedColors.push(new named_color_1.NamedColor('Tomato', Color.Tomato));
Color.NamedColors.push(new named_color_1.NamedColor('Turquoise', Color.Turquoise));
Color.NamedColors.push(new named_color_1.NamedColor('Violet', Color.Violet));
Color.NamedColors.push(new named_color_1.NamedColor('Wheat', Color.Wheat));
Color.NamedColors.push(new named_color_1.NamedColor('White', Color.White));
Color.NamedColors.push(new named_color_1.NamedColor('WhiteSmoke', Color.WhiteSmoke));
Color.NamedColors.push(new named_color_1.NamedColor('Yellow', Color.Yellow));
Color.NamedColors.push(new named_color_1.NamedColor('YellowGreen', Color.Yellow));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var fill_factory_1 = __webpack_require__(8);
var element_base_1 = __webpack_require__(3);
/**
 * Renders stroked and/or filled rectangle
 */
var RectangleElement = /** @class */ (function (_super) {
    __extends(RectangleElement, _super);
    function RectangleElement() {
        return _super.call(this, 'rectangle') || this;
    }
    /**
     * Rectangle element factory function
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param width - Width
     * @param height - Height
     * @returns New rectangle element
     */
    RectangleElement.create = function (x, y, width, height) {
        var e = new RectangleElement();
        if (x !== undefined && y !== undefined && width !== undefined && height !== undefined) {
            e._location = new point_1.Point(x, y);
            e._size = new size_1.Size(width, height);
        }
        return e;
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source element
     */
    RectangleElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (!this._location) {
            this._location = new point_1.Point(0, 0);
        }
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    RectangleElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        return o;
    };
    /**
     * Clones this rectangle element to a new instance
     * @returns Cloned rectangle instance
     */
    RectangleElement.prototype.clone = function () {
        var e = RectangleElement.create();
        _super.prototype.cloneTo.call(this, e);
        return e;
    };
    /**
     * Render rectangle element to canvas context
     * @param c - Rendering context
     */
    RectangleElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var x = bounds.location.x;
        var y = bounds.location.y;
        var w = bounds.size.width;
        var h = bounds.size.height;
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, bounds.location);
        }
        if (fill_factory_1.FillFactory.setElementFill(c, this)) {
            if (this.fillOffsetX || this.fillOffsetY) {
                var fillOffsetX = this.fillOffsetX || 0;
                var fillOffsetY = this.fillOffsetY || 0;
                c.translate(x + fillOffsetX, y + fillOffsetY);
                c.fillRect(-fillOffsetX, -fillOffsetY, w, h);
                c.translate(-(x + fillOffsetX), -(y + fillOffsetY));
            }
            else {
                c.translate(x, y);
                c.fillRect(0, 0, w, h);
                c.translate(-x, -y);
            }
        }
        if (model.setElementStroke(c, this)) {
            c.strokeRect(x, y, w, h);
        }
        c.restore();
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    RectangleElement.prototype.canStroke = function () {
        return true;
    };
    /**
     * Can element be filled
     * @returns Can fill
     */
    RectangleElement.prototype.canFill = function () {
        return true;
    };
    return RectangleElement;
}(element_base_1.ElementBase));
exports.RectangleElement = RectangleElement;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var surface_element_1 = __webpack_require__(37);
/**
 * Base class for layered surface elements
 */
var SurfaceLayer = /** @class */ (function (_super) {
    __extends(SurfaceLayer, _super);
    /**
     * @param id - Item id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     */
    function SurfaceLayer(id, left, top, width, height) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        _this.addToSurface = _this.addToSurface.bind(_this);
        _this.prepare = _this.prepare.bind(_this);
        _this.destroy = _this.destroy.bind(_this);
        _this.onload = _this.onload.bind(_this);
        _this.onunload = _this.onunload.bind(_this);
        _this.setScale = _this.setScale.bind(_this);
        _this.setOpacity = _this.setOpacity.bind(_this);
        _this.setTranslateX = _this.setTranslateX.bind(_this);
        _this.setTranslateY = _this.setTranslateY.bind(_this);
        _this.isPrepared = false;
        _this.opacity = 1;
        _this.translateX = 0;
        _this.translateY = 0;
        return _this;
    }
    /**
     * Sets rendering scale
     */
    SurfaceLayer.prototype.setScale = function (scale) {
        return this;
    };
    /**
     * Sets rendering opacity
     */
    SurfaceLayer.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        return this;
    };
    /**
     * Sets X translation
     */
    SurfaceLayer.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        return this;
    };
    /**
     * Sets Y translation
     */
    SurfaceLayer.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        return this;
    };
    return SurfaceLayer;
}(surface_element_1.SurfaceElement));
exports.SurfaceLayer = SurfaceLayer;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
/**
 * Base class for pane transitions
 */
var PaneTransition = /** @class */ (function () {
    function PaneTransition(pane, target, callback) {
        this.start = this.start.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.bind = this.bind.bind(this);
        this.pane = pane;
        this.target = target;
        this.callback = callback;
    }
    PaneTransition.prototype.onStart = function () {
        if (!this.pane || !this.target) {
            return;
        }
        if (!this.pane.surface) {
            throw new Error(error_messages_1.ErrorMessages.PaneSurfaceIsUndefined);
        }
        this.pane.childSurface.resourceListenerEvent.clear();
        if (this.pane.element) {
            this.pane.element.style.overflow = 'hidden';
        }
        this.pane.childSurface = this.target;
        this.target.scale = this.pane.surface.scale;
        this.target.isChild = true;
        this.pane.isPrepared = false;
    };
    PaneTransition.prototype.onComplete = function () {
        var self = this;
        if (!self.pane || !self.target) {
            return;
        }
        if (self.callback) {
            self.callback(self.pane);
        }
        self.pane.isPrepared = true;
        self.pane.setHostDivScrolling();
        self.target.onload();
        self.pane = undefined;
        self.callback = undefined;
        self.target = undefined;
    };
    PaneTransition.prototype.bind = function (callback, onBottom) {
        if (!this.pane || !this.target) {
            return;
        }
        var surface = this.target;
        var hostDiv = this.pane.element;
        if (!hostDiv) {
            throw new Error(error_messages_1.ErrorMessages.HostElementUndefined);
        }
        if (surface.controller) {
            surface.onErrorInternal(error_messages_1.ErrorMessages.SurfaceIsAlreadyBound);
            return;
        }
        surface.hostDiv = hostDiv;
        surface.createDiv(onBottom);
        if (surface.model) {
            surface.initializeController();
            if (callback) {
                callback(surface);
            }
        }
        else {
            surface.createModel(function () {
                if (surface.model) {
                    surface.initializeController();
                    if (callback) {
                        callback(surface);
                    }
                }
            });
        }
    };
    return PaneTransition;
}());
exports.PaneTransition = PaneTransition;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var element_command_1 = __webpack_require__(39);
var error_messages_1 = __webpack_require__(0);
/**
 * Image transition rendering functions
 */
var TransitionRenderer = /** @class */ (function () {
    function TransitionRenderer() {
    }
    TransitionRenderer.transitionSprite = function (controller, sprite, sourceFrame, targetFrame, transition) {
        var size = sprite.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if (!sprite.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!sprite.frames) {
            return;
        }
        if (!sprite.c2) {
            sprite.c2 = document.createElement('canvas');
            sprite.c2.width = size.width;
            sprite.c2.height = size.height;
        }
        if (!sprite.c1) {
            sprite.c1 = document.createElement('canvas');
            sprite.c1.width = size.width;
            sprite.c1.height = size.height;
        }
        if (sprite.c1index === undefined || sprite.c1index !== sourceFrame) {
            var c = sprite.c1.getContext('2d');
            var f = sprite.frames[sourceFrame];
            var r = sprite.model.resourceManager.get(f.source);
            if (c && r.image) {
                c.clearRect(0, 0, size.width, size.height);
                c.drawImage(r.image, f.x, f.y, f.width, f.height, 0, 0, size.width, size.height);
            }
            sprite.c1index = sourceFrame;
        }
        if (sprite.c2index !== undefined || sprite.c2index !== targetFrame) {
            var c = sprite.c2.getContext('2d');
            var f = sprite.frames[targetFrame];
            var r = sprite.model.resourceManager.get(f.source);
            if (c && r.image) {
                c.clearRect(0, 0, size.width, size.height);
                c.drawImage(r.image, f.x, f.y, f.width, f.height, 0, 0, size.width, size.height);
            }
            sprite.c2index = targetFrame;
        }
        sprite.transition = TransitionRenderer.getRenderFunction(transition);
        // sprite.transitionOffset = spriteState.offset;
        // Animate on timer
        if (sprite.timerHandle) {
            clearInterval(sprite.timerHandle);
        }
        var offset = 0;
        sprite.timerHandle = setInterval(function () {
            offset += 0.075;
            if (offset >= 1.0) {
                if (sprite.timerHandle !== undefined) {
                    clearInterval(sprite.timerHandle);
                    sprite.timerHandle = undefined;
                }
                sprite.frameIndex = targetFrame;
                sprite.transition = undefined;
                sprite.transitionOffset = undefined;
                sprite.c1index = undefined;
                sprite.c2index = undefined;
                sprite.c2 = undefined;
                sprite.c1 = undefined;
                controller.draw();
            }
            else {
                sprite.transitionOffset = TransitionRenderer.getEasingFunction('easeInOutCubic')(offset);
                controller.draw();
            }
        }, 15);
    };
    TransitionRenderer.pushFrameTransition = function (c, el, command, trigger, parameters) {
        if (!el.frameStack) {
            el.frameStack = [];
        }
        el.frameStack.push(el.frameIndex);
        var ec = element_command_1.ElementCommand.parse(command);
        var sourceFrame = el.frameIndex;
        var targetFrame = parseInt(ec.parameter, 10);
        TransitionRenderer.transitionSprite(c, el, sourceFrame, targetFrame, 'fade');
    };
    TransitionRenderer.popFrameTransition = function (c, el, command, trigger, parameters) {
        if (!el.frameStack) {
            return;
        }
        var sourceFrame = el.frameIndex;
        var targetFrame = sourceFrame;
        if (el.frameStack.length > 0) {
            var frame = el.frameStack.pop();
            if (frame) {
                targetFrame = frame;
            }
        }
        if (el.frameStack.length === 0) {
            el.frameStack = undefined;
        }
        TransitionRenderer.transitionSprite(c, el, sourceFrame, targetFrame, 'fade');
    };
    TransitionRenderer.spriteIncrementHandler = function (c, el, command, trigger, parameters) {
        var sprite = el;
        var time = parameters.elapsedTime;
        var spriteState = sprite.getStateForTime(time);
        if (!spriteState) {
            return;
        }
        if (sprite.frameIndex !== spriteState.frame1) {
            sprite.frameIndex = spriteState.frame1;
            c.invalidate();
        }
    };
    TransitionRenderer.renderNone = function (context, c1, c2, offset, left, top, width, height) {
        if (c1 && left !== undefined && top !== undefined && width !== undefined && height !== undefined) {
            context.drawImage(c1, left, top, width, height);
        }
    };
    TransitionRenderer.renderFade = function (context, c1, c2, offset, left, top, width, height) {
        context.globalAlpha = 1.0;
        context.drawImage(c1, left, top, width, height);
        context.globalAlpha = offset;
        context.drawImage(c2, left, top, width, height);
    };
    TransitionRenderer.renderPushLeft = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        context.drawImage(c2, left + width - offsetX, top);
        context.drawImage(c1, left - offsetX, top);
    };
    TransitionRenderer.renderPushRight = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        context.drawImage(c2, left - width + offsetX, top);
        context.drawImage(c1, left + offsetX, top);
    };
    TransitionRenderer.renderPushUp = function (context, c1, c2, offset, left, top, width, height) {
        var offsetY = offset * height;
        context.drawImage(c2, left, top + height - offsetY);
        context.drawImage(c1, left, top - offsetY);
    };
    TransitionRenderer.renderPushDown = function (context, c1, c2, offset, left, top, width, height) {
        var offsetY = offset * height;
        context.drawImage(c2, left, top - height + offsetY);
        context.drawImage(c1, left, top + offsetY);
    };
    TransitionRenderer.renderWipeLeft = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        context.drawImage(c1, left, top);
        if (offsetX >= 1) {
            context.drawImage(c2, width - offsetX, 0, offsetX, height, left + width - offsetX, top, offsetX, height);
        }
    };
    TransitionRenderer.renderWipeRight = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        context.drawImage(c1, left, top);
        if (offsetX >= 1) {
            context.drawImage(c2, 0, 0, offsetX, height, left, top, offsetX, height);
        }
    };
    TransitionRenderer.renderWipeUp = function (context, c1, c2, offset, left, top, width, height) {
        var offsetY = offset * height;
        context.drawImage(c1, left, top);
        if (offsetY >= 1) {
            context.drawImage(c2, 0, height - offsetY, width, offsetY, left, top + height - offsetY, width, offsetY);
        }
    };
    TransitionRenderer.renderWipeDown = function (context, c1, c2, offset, left, top, width, height) {
        var offsetY = offset * height;
        context.drawImage(c1, left, top);
        if (offsetY >= 1) {
            context.drawImage(c2, 0, 0, width, offsetY, left, top, width, offsetY);
        }
    };
    TransitionRenderer.renderSlideLeft = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        context.drawImage(c1, left, top);
        context.drawImage(c2, left + width - offsetX, top);
    };
    TransitionRenderer.renderSlideRight = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        context.drawImage(c1, left, top);
        context.drawImage(c2, left - width + offsetX, top);
    };
    TransitionRenderer.renderSlideUp = function (context, c1, c2, offset, left, top, width, height) {
        var offsetY = offset * height;
        context.drawImage(c1, left, top);
        context.drawImage(c2, left, top + height - offsetY);
    };
    TransitionRenderer.renderSlideDown = function (context, c1, c2, offset, left, top, width, height) {
        var offsetY = offset * height;
        context.drawImage(c1, left, top);
        context.drawImage(c2, left, top - height + offsetY);
    };
    TransitionRenderer.renderSlideLeftDown = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        var offsetY = offset * height;
        context.drawImage(c1, left, top);
        context.drawImage(c2, left + width - offsetX, top - height + offsetY);
    };
    TransitionRenderer.renderSlideRightDown = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        var offsetY = offset * height;
        context.drawImage(c1, left, top);
        context.drawImage(c2, left - width + offsetX, top - height + offsetY);
    };
    TransitionRenderer.renderSlideLeftUp = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        var offsetY = offset * height;
        context.drawImage(c1, left, top);
        context.drawImage(c2, left + width - offsetX, top + height - offsetY);
    };
    TransitionRenderer.renderSlideRightUp = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        var offsetY = offset * height;
        context.drawImage(c1, left, top);
        context.drawImage(c2, left - width + offsetX, top + height - offsetY);
    };
    TransitionRenderer.renderRevealLeft = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        context.drawImage(c2, left, top);
        context.drawImage(c1, left - offsetX, top);
    };
    TransitionRenderer.renderRevealRight = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        context.drawImage(c2, left, top);
        context.drawImage(c1, left + offsetX, top);
    };
    TransitionRenderer.renderRevealUp = function (context, c1, c2, offset, left, top, width, height) {
        var offsetY = offset * height;
        context.drawImage(c2, left, top);
        context.drawImage(c1, left, top - offsetY);
    };
    TransitionRenderer.renderRevealDown = function (context, c1, c2, offset, left, top, width, height) {
        var offsetY = offset * height;
        context.drawImage(c2, left, top);
        context.drawImage(c1, left, top + offsetY);
    };
    TransitionRenderer.renderRevealLeftDown = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        var offsetY = offset * height;
        context.drawImage(c2, left, top);
        context.drawImage(c1, left - offsetX, top + offsetY);
    };
    TransitionRenderer.renderRevealRightDown = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        var offsetY = offset * height;
        context.drawImage(c2, left, top);
        context.drawImage(c1, left + offsetX, top + offsetY);
    };
    TransitionRenderer.renderRevealLeftUp = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        var offsetY = offset * height;
        context.drawImage(c2, left, top);
        context.drawImage(c1, left - offsetX, top - offsetY);
    };
    TransitionRenderer.renderRevealRightUp = function (context, c1, c2, offset, left, top, width, height) {
        var offsetX = offset * width;
        var offsetY = offset * height;
        context.drawImage(c2, left, top);
        context.drawImage(c1, left + offsetX, top - offsetY);
    };
    TransitionRenderer.renderEllipticalOut = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c1, left, top);
        context.beginPath();
        var w = Math.round(width * offset);
        var h = Math.round(height * offset);
        var rw = w * 1.414;
        var rh = h * 1.414;
        var cx = left + width / 2;
        var cy = top + height / 2;
        var x;
        var y;
        var ox;
        var oy;
        var xe;
        var ye;
        var xm;
        var ym;
        var kappa = 0.5522848;
        x = cx - rw / 2;
        y = cy - rh / 2;
        ox = rw / 2 * kappa; // control point offset horizontal
        oy = rh / 2 * kappa; // control point offset vertical
        xe = x + rw; // x-end
        ye = y + rh; // y-end
        xm = x + rw / 2; // x-middle
        ym = y + rh / 2; // y-middle
        context.moveTo(x, ym);
        context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        context.clip();
        context.drawImage(c2, left, top);
    };
    TransitionRenderer.renderEllipticalIn = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c2, left, top);
        context.beginPath();
        var w = Math.round(width * (1.0 - offset));
        var h = Math.round(height * (1.0 - offset));
        var rw = w * 1.414;
        var rh = h * 1.414;
        var cx = left + width / 2;
        var cy = top + height / 2;
        var x;
        var y;
        var ox;
        var oy;
        var xe;
        var ye;
        var xm;
        var ym;
        var kappa = 0.5522848;
        x = cx - rw / 2;
        y = cy - rh / 2;
        ox = rw / 2 * kappa; // control point offset horizontal
        oy = rh / 2 * kappa; // control point offset vertical
        xe = x + rw; // x-end
        ye = y + rh; // y-end
        xm = x + rw / 2; // x-middle
        ym = y + rh / 2; // y-middle
        context.moveTo(x, ym);
        context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        context.clip();
        context.drawImage(c1, left, top);
    };
    TransitionRenderer.renderRectangularIn = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c2, left, top);
        context.beginPath();
        var rw = width / 2.0 * (1.0 - offset);
        var rh = height / 2.0 * (1.0 - offset);
        context.moveTo(left + width / 2 - rw, top + height / 2 - rh);
        context.lineTo(left + width / 2 + rw, top + height / 2 - rh);
        context.lineTo(left + width / 2 + rw, top + height / 2 + rh);
        context.lineTo(left + width / 2 - rw, top + height / 2 + rh);
        context.clip();
        context.drawImage(c1, left, top);
    };
    TransitionRenderer.renderRectangularOut = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c1, left, top);
        context.beginPath();
        var rw = width / 2.0 * offset;
        var rh = height / 2.0 * offset;
        context.moveTo(left + width / 2 - rw, top + height / 2 - rh);
        context.lineTo(left + width / 2 + rw, top + height / 2 - rh);
        context.lineTo(left + width / 2 + rw, top + height / 2 + rh);
        context.lineTo(left + width / 2 - rw, top + height / 2 + rh);
        context.clip();
        context.drawImage(c2, left, top);
    };
    TransitionRenderer.renderGrid = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c1, left, top);
        context.beginPath();
        var hdiv = 8;
        var vdiv = 6;
        var rw = width / (hdiv * 2) * offset;
        var rh = height / (vdiv * 2) * offset;
        var cx = width / hdiv;
        var cy = height / vdiv;
        var i;
        var j;
        var x;
        var y;
        for (j = 0; j < vdiv; j++) {
            for (i = 0; i < hdiv; i++) {
                x = left + i * cx + cx / 2;
                y = top + j * cy + cy / 2;
                context.moveTo(x - rw, y - rh);
                context.lineTo(x + rw, y - rh);
                context.lineTo(x + rw, y + rh);
                context.lineTo(x - rw, y + rh);
            }
        }
        context.clip();
        context.drawImage(c2, left, top);
    };
    TransitionRenderer.renderExpandHorizontal = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c1, left, top);
        var destinationWidth = width * offset;
        if (destinationWidth > 0) {
            context.drawImage(c2, left + (width - destinationWidth) / 2, top, destinationWidth, height);
        }
    };
    TransitionRenderer.renderExpandVertical = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c1, left, top);
        var destinationHeight = height * offset;
        if (destinationHeight > 0) {
            context.drawImage(c2, left, top + (height - destinationHeight) / 2, width, destinationHeight);
        }
    };
    TransitionRenderer.renderZoomIn = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c1, left, top);
        var destinationWidth = width * offset;
        var destinationHeight = height * offset;
        if (destinationHeight > 0) {
            context.drawImage(c2, left + (width - destinationWidth) / 2, top + (height - destinationHeight) / 2, destinationWidth, destinationHeight);
        }
    };
    TransitionRenderer.renderZoomOut = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c2, left, top);
        var destinationWidth = width * (1 - offset);
        var destinationHeight = height * (1 - offset);
        if (destinationHeight > 0) {
            context.drawImage(c1, left + (width - destinationWidth) / 2, top + (height - destinationHeight) / 2, destinationWidth, destinationHeight);
        }
    };
    TransitionRenderer.renderZoomRotateIn = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c1, left, top);
        var destinationWidth = width * offset;
        var destinationHeight = height * offset;
        var angle = offset * Math.PI * 2;
        if (destinationHeight > 0) {
            context.translate(left + width / 2, top + height / 2);
            context.rotate(angle);
            context.translate(-(left + width / 2), -(top + height / 2));
            context.drawImage(c2, left + (width - destinationWidth) / 2, top + (height - destinationHeight) / 2, destinationWidth, destinationHeight);
        }
    };
    TransitionRenderer.renderZoomRotateOut = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c2, left, top);
        var destinationWidth = width * (1 - offset);
        var destinationHeight = height * (1 - offset);
        var angle = (1 - offset) * Math.PI * 2;
        if (destinationHeight > 0) {
            context.translate(left + width / 2, top + height / 2);
            context.rotate(angle);
            context.translate(-(left + width / 2), -(top + height / 2));
            context.drawImage(c1, left + (width - destinationWidth) / 2, top + (height - destinationHeight) / 2, destinationWidth, destinationHeight);
        }
    };
    TransitionRenderer.renderRadar = function (context, c1, c2, offset, left, top, width, height) {
        context.drawImage(c1, left, top);
        context.beginPath();
        context.moveTo(left + width / 2, top + height / 2);
        var angle = 0;
        var x1;
        var y1;
        for (angle = 0; angle <= Math.PI * 2; angle += 0.001) {
            x1 = left + Math.cos(angle * offset) * width;
            y1 = top + Math.sin(angle * offset) * height;
            context.lineTo(x1 + width / 2, y1 + height / 2);
        }
        context.closePath();
        context.clip();
        context.drawImage(c2, left, top);
    };
    //
    // Easing functions
    //
    // No easing, no acceleration
    TransitionRenderer.easeLinear = function (t) {
        return t;
    };
    // Accelaration from zero velocity
    TransitionRenderer.easeInQuad = function (t) {
        return t * t;
    };
    // Deceleration to zero velocity
    TransitionRenderer.easeOutQuad = function (t) {
        return t * (2 - t);
    };
    // Acceleration until halfway, then Deceleration
    TransitionRenderer.easeInOutQuad = function (t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };
    // Acceleration from zero velocity
    TransitionRenderer.easeInCubic = function (t) {
        return t * t * t;
    };
    // Deceleration to zero velocity
    TransitionRenderer.easeOutCubic = function (t) {
        return --t * t * t + 1;
    };
    // Acceleration until halfway, then deceleration
    TransitionRenderer.easeInOutCubic = function (t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    // Acceleration from zero velocity
    TransitionRenderer.easeInQuart = function (t) {
        return t * t * t * t;
    };
    // Deceleration to zero velocity
    TransitionRenderer.easeOutQuart = function (t) {
        return 1 - --t * t * t * t;
    };
    // Acceleration until halfway, then deceleration
    TransitionRenderer.easeInOutQuart = function (t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    };
    // Acceleration from zero velocity
    TransitionRenderer.easeInQuint = function (t) {
        return t * t * t * t * t;
    };
    // Deceleration to zero velocity
    TransitionRenderer.easeOutQuint = function (t) {
        return 1 + --t * t * t * t * t;
    };
    // Acceleration until halfway, then deceleration
    TransitionRenderer.easeInOutQuint = function (t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    };
    TransitionRenderer.getRenderFunction = function (name) {
        if (!name) {
            return this.renderNone;
        }
        for (var _i = 0, _a = TransitionRenderer.renderFunctions; _i < _a.length; _i++) {
            var renderFunction = _a[_i];
            if (renderFunction.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                return renderFunction.render;
            }
        }
        return this.renderNone;
    };
    TransitionRenderer.getEasingFunction = function (name) {
        for (var _i = 0, _a = TransitionRenderer.easingFunctions; _i < _a.length; _i++) {
            var easingFunction = _a[_i];
            if (easingFunction.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                return easingFunction.ease;
            }
        }
        return TransitionRenderer.easeLinear;
    };
    TransitionRenderer.renderTransition = function (name, context, c1, c2, offset, left, top, width, height) {
        var renderFunction = TransitionRenderer.getRenderFunction(name);
        renderFunction(context, c1, c2, offset, left, top, width, height);
    };
    //
    // Command Implementations
    //
    TransitionRenderer.spriteTransitionHandler = function (controller, element, command, trigger, parameters) {
        var sprite = element;
        if (!sprite) {
            return;
        }
        var time = parameters.elapsedTime;
        var spriteState = sprite.getStateForTime(time);
        if (!spriteState) {
            return;
        }
        // If no transition
        if (!spriteState.transition) {
            if (sprite.transition || sprite.frameIndex !== spriteState.frame1) {
                sprite.frameIndex = spriteState.frame1;
                sprite.transition = undefined;
                sprite.transitionOffset = undefined;
                sprite.c1index = undefined;
                sprite.c2index = undefined;
                sprite.c2 = undefined;
                sprite.c1 = undefined;
                controller.invalidate();
                if (sprite.onAdvance && controller.commandHandler) {
                    controller.commandHandler.onElementCommandFired(controller, element, sprite.onAdvance, trigger, parameters);
                }
            }
        }
        else {
            // Transition active
            var size = sprite.getSize();
            if (!size || !sprite.frames || !sprite.model) {
                return;
            }
            if (!sprite.c2) {
                sprite.c2 = document.createElement('canvas');
                sprite.c2.width = size.width;
                sprite.c2.height = size.height;
            }
            if (!sprite.c1) {
                sprite.c1 = document.createElement('canvas');
                sprite.c1.width = size.width;
                sprite.c1.height = size.height;
            }
            if (sprite.c1index === undefined || sprite.c1index !== spriteState.frame1) {
                var c = sprite.c1.getContext('2d');
                if (!c) {
                    return;
                }
                var f = sprite.frames[spriteState.frame1];
                var r = sprite.model.resourceManager.get(f.source);
                if (!r || !r.image) {
                    return;
                }
                c.clearRect(0, 0, size.width, size.height);
                c.drawImage(r.image, f.x, f.y, f.width, f.height, 0, 0, size.width, size.height);
                sprite.c1index = spriteState.frame1;
            }
            if (sprite.c2index === undefined || sprite.c2index !== spriteState.frame2) {
                var c = sprite.c2.getContext('2d');
                if (!c) {
                    return;
                }
                var f = sprite.frames[spriteState.frame2];
                var r = sprite.model.resourceManager.get(f.source);
                c.clearRect(0, 0, size.width, size.height);
                if (!r || !r.image) {
                    return;
                }
                c.drawImage(r.image, f.x, f.y, f.width, f.height, 0, 0, size.width, size.height);
                sprite.c2index = spriteState.frame2;
            }
            sprite.transition = TransitionRenderer.getRenderFunction(spriteState.transition);
            // sprite.transitionOffset = spriteState.offset;
            sprite.transitionOffset = TransitionRenderer.getEasingFunction('easeInOutCubic')(spriteState.offset);
            controller.invalidate();
        }
    };
    TransitionRenderer.PUSH_FRAME_TRANSITION = 'pushFrameTransition';
    TransitionRenderer.POP_FRAME_TRANSITION = 'popFrameTransition';
    TransitionRenderer.SPRITE_INCREMENT = 'spriteIncrement';
    TransitionRenderer.SPRITE_TRANSITION = 'spriteTransition';
    TransitionRenderer.renderFunctions = [
        { name: 'none', render: TransitionRenderer.renderNone },
        { name: 'fade', render: TransitionRenderer.renderFade },
        { name: 'pushLeft', render: TransitionRenderer.renderPushLeft },
        { name: 'pushRight', render: TransitionRenderer.renderPushRight },
        { name: 'pushUp', render: TransitionRenderer.renderPushUp },
        { name: 'pushDown', render: TransitionRenderer.renderPushDown },
        { name: 'wipeLeft', render: TransitionRenderer.renderWipeLeft },
        { name: 'wipeRight', render: TransitionRenderer.renderWipeRight },
        { name: 'wipeUp', render: TransitionRenderer.renderWipeUp },
        { name: 'wipeDown', render: TransitionRenderer.renderWipeDown },
        { name: 'slideLeft', render: TransitionRenderer.renderSlideLeft },
        { name: 'slideRight', render: TransitionRenderer.renderSlideRight },
        { name: 'slideUp', render: TransitionRenderer.renderSlideUp },
        { name: 'slideDown', render: TransitionRenderer.renderSlideDown },
        { name: 'slideLeftDown', render: TransitionRenderer.renderSlideLeftDown },
        { name: 'slideRightDown', render: TransitionRenderer.renderSlideRightDown },
        { name: 'slideLeftUp', render: TransitionRenderer.renderSlideLeftUp },
        { name: 'slideRightUp', render: TransitionRenderer.renderSlideRightUp },
        { name: 'revealLeft', render: TransitionRenderer.renderRevealLeft },
        { name: 'revealRight', render: TransitionRenderer.renderRevealRight },
        { name: 'revealUp', render: TransitionRenderer.renderRevealUp },
        { name: 'revealDown', render: TransitionRenderer.renderRevealDown },
        { name: 'revealLeftDown', render: TransitionRenderer.renderRevealLeftDown },
        { name: 'revealRightDown', render: TransitionRenderer.renderRevealRightDown },
        { name: 'revealLeftUp', render: TransitionRenderer.renderRevealLeftUp },
        { name: 'revealRightUp', render: TransitionRenderer.renderRevealRightUp },
        { name: 'ellipticalIn', render: TransitionRenderer.renderEllipticalIn },
        { name: 'ellipticalOut', render: TransitionRenderer.renderEllipticalOut },
        { name: 'rectangularIn', render: TransitionRenderer.renderRectangularIn },
        { name: 'rectangularOut', render: TransitionRenderer.renderRectangularOut },
        { name: 'grid', render: TransitionRenderer.renderGrid },
        { name: 'expandHorizontal', render: TransitionRenderer.renderExpandHorizontal },
        { name: 'expandVertical', render: TransitionRenderer.renderExpandVertical },
        { name: 'zoomIn', render: TransitionRenderer.renderZoomIn },
        { name: 'zoomOut', render: TransitionRenderer.renderZoomOut },
        { name: 'zoomRotateIn', render: TransitionRenderer.renderZoomRotateIn },
        { name: 'zoomRotateOut', render: TransitionRenderer.renderZoomRotateOut },
        { name: 'radar', render: TransitionRenderer.renderRadar }
    ];
    TransitionRenderer.easingFunctions = [
        { name: 'easeLinear', ease: TransitionRenderer.easeLinear },
        { name: 'easeInQuad', ease: TransitionRenderer.easeInQuad },
        { name: 'easeOutQuad', ease: TransitionRenderer.easeOutQuad },
        { name: 'easeInOutQuad', ease: TransitionRenderer.easeInOutQuad },
        { name: 'easeInCubic', ease: TransitionRenderer.easeInCubic },
        { name: 'easeOutCubic', ease: TransitionRenderer.easeOutCubic },
        { name: 'easeInOutCubic', ease: TransitionRenderer.easeInOutCubic },
        { name: 'easeInQuart', ease: TransitionRenderer.easeInQuart },
        { name: 'easeOutQuart', ease: TransitionRenderer.easeOutQuart },
        { name: 'easeInOutQuart', ease: TransitionRenderer.easeInOutQuart },
        { name: 'easeInQuint', ease: TransitionRenderer.easeInQuint },
        { name: 'easeOutQuint', ease: TransitionRenderer.easeOutQuint },
        { name: 'easeInOutQuint', ease: TransitionRenderer.easeInOutQuint }
    ];
    return TransitionRenderer;
}());
exports.TransitionRenderer = TransitionRenderer;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var region_1 = __webpack_require__(7);
var element_base_1 = __webpack_require__(3);
var invalid_index_exception_1 = __webpack_require__(21);
/**
 * Renders a strokable line segment
 */
var LineElement = /** @class */ (function (_super) {
    __extends(LineElement, _super);
    /**
     * Constructs a line element
     */
    function LineElement() {
        var _this = _super.call(this, 'line') || this;
        _this.getP1 = _this.getP1.bind(_this);
        _this.setP1 = _this.setP1.bind(_this);
        _this.getP2 = _this.getP2.bind(_this);
        _this.setP2 = _this.setP2.bind(_this);
        return _this;
    }
    /**
     * Line element factory function
     * @param x1 - Point 1 X coordinate
     * @param y1 - Point 1 Y coordinate
     * @param x2 - Point 2 X coordinate
     * @param y2 - Point 2 Y coordinate
     * @returns New line element
     */
    LineElement.create = function (x1, y1, x2, y2) {
        var e = new LineElement();
        if (x1 !== undefined && x2 !== undefined && y1 !== undefined && y2 !== undefined) {
            e._p1 = new point_1.Point(x1, y1);
            e._p2 = new point_1.Point(x2, y2);
        }
        return e;
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source element
     */
    LineElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.p1) {
            this._p1 = point_1.Point.parse(o.p1);
        }
        if (o.p2) {
            this._p2 = point_1.Point.parse(o.p2);
        }
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    LineElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.p1) {
            o.p1 = this.p1.toString();
        }
        if (this.p2) {
            o.p2 = this.p2.toString();
        }
        return o;
    };
    /**
     * Clones this line element to a new instance
     * @returns Cloned line instance
     */
    LineElement.prototype.clone = function () {
        var e = LineElement.create();
        _super.prototype.cloneTo.call(this, e);
        e.p1 = this.p1;
        e.p2 = this.p2;
        return e;
    };
    Object.defineProperty(LineElement.prototype, "p1", {
        /**
         * Point 1 get accessor as string
         * @returns Point 1 as string
         */
        get: function () {
            if (!this._p1) {
                return undefined;
            }
            else {
                return this._p1.toString();
            }
        },
        /**
         * Point 1 set accessor as string
         * @param newValue New point value as string
         */
        set: function (newValue) {
            if (!newValue) {
                this._p1 = undefined;
            }
            else {
                this._p1 = point_1.Point.parse(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Point 1 get accessor as Point
     * @returns Point 1 as point object
     */
    LineElement.prototype.getP1 = function () {
        return this._p1;
    };
    /**
     * Point 1 set accessor as string or Point
     * @param pointSource - String or point object point source
     */
    LineElement.prototype.setP1 = function (pointSource) {
        this._p1 = point_1.Point.parse(pointSource);
        return this;
    };
    Object.defineProperty(LineElement.prototype, "p2", {
        /**
         * Point 2 get accessor as string
         * @returns Point 2 as string
         */
        get: function () {
            if (!this._p2) {
                return undefined;
            }
            else {
                return this._p2.toString();
            }
        },
        /**
         * Point 2 set accessor as string
         * @param newValue - New point value as string
         */
        set: function (newValue) {
            if (!newValue) {
                this._p2 = undefined;
            }
            else {
                this._p2 = point_1.Point.parse(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Point 2 get accessor as Point
     * @returns Point 2 as point object
     */
    LineElement.prototype.getP2 = function () {
        return this._p2;
    };
    /**
     * Point 2 set accessor as string or Point
     * @param pointSource - String or point object point source
     */
    LineElement.prototype.setP2 = function (pointSource) {
        this._p2 = point_1.Point.parse(pointSource);
        return this;
    };
    /**
     * Render line element to canvas context
     * @param c - Rendering context
     */
    LineElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this._p1 || !this._p2) {
            throw new Error(error_messages_1.ErrorMessages.PointsAreInvalid);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, this._p1);
        }
        c.beginPath();
        c.moveTo(this._p1.x, this._p1.y);
        c.lineTo(this._p2.x, this._p2.y);
        if (model.setElementStroke(c, this)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Hit test line.  Return true if point is on or near to line element
     * @param c - Rendering context
     * @param tx - X coordinate of point
     * @param ty - Y coordinate of point
     * @returns True if point on line element
     */
    LineElement.prototype.hitTest = function (c, tx, ty) {
        if (!this._p1 || !this._p2) {
            throw new Error(error_messages_1.ErrorMessages.PointsAreInvalid);
        }
        var distance;
        var dxline = this._p2.x - this._p1.x;
        var dyline = this._p2.y - this._p1.y;
        var tolerance = 2;
        var dx1 = this._p1.x - tx;
        var dy1 = this._p1.y - ty;
        if ((dxline > 0 && dx1 > 0) || (dyline < 0 && dy1 < 0) || (dxline < 0 && dx1 < 0) || (dyline > 0 && dy1 > 0)) {
            distance = Math.sqrt(dx1 * dx1 + dy1 * dy1);
            if (distance <= tolerance) {
                return true;
            }
            return false;
        }
        var dx2 = this._p2.x - tx;
        var dy2 = this._p2.y - ty;
        if ((dxline > 0 && dx2 < 0) || (dyline < 0 && dy2 > 0) || (dxline < 0 && dx2 > 0) || (dyline > 0 && dy2 < 0)) {
            distance = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (distance <= tolerance) {
                return true;
            }
            return false;
        }
        tolerance *= Math.sqrt(dxline * dxline + dyline * dyline);
        var diff = dy1 * dx2 - dy2 * dx1;
        if (diff >= -tolerance && diff <= tolerance) {
            return true;
        }
        return false;
    };
    /**
     * Returns string description of line
     * @returns Description
     */
    LineElement.prototype.toString = function () {
        if (!this.type || !this._p1 || !this._p2) {
            return _super.prototype.toString.call(this);
        }
        return this.type + ' - (' + this._p1.x + ',' + this._p1.y + ')-(' + this._p2.x + ',' + this._p2.y + ')';
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    LineElement.prototype.canStroke = function () {
        return true;
    };
    /**
     * Lines are movable
     * @returns True - Lines can be moved
     */
    LineElement.prototype.canMove = function () {
        return true;
    };
    /**
     * Lines cannot be sized using mouse since end points are each editable
     * @returns False - Lines cannot be sized
     */
    LineElement.prototype.canResize = function () {
        return false;
    };
    /**
     * Lines can be nudged with the keyboard
     * @returns True
     */
    LineElement.prototype.canNudge = function () {
        return true;
    };
    /**
     * Lines support individual point movement
     * @returns True
     */
    LineElement.prototype.canMovePoint = function () {
        return true;
    };
    /**
     * Lines don't support point editing mode since they are always in point editing mode
     * @returns False
     */
    LineElement.prototype.canEditPoints = function () {
        return false;
    };
    /**
     * Scales line by given horizontal and vertical scaling factors
     * @param scaleX - Horizontal scaling factor
     * @param scaleY - Vertical scaling factor
     * @returns This line element
     */
    LineElement.prototype.scale = function (scaleX, scaleY) {
        if (!this._p1 || !this._p2) {
            return this;
        }
        var bx = this._p1.x;
        var by = this._p1.y;
        if (this._p2.x < this._p1.x) {
            bx = this._p2.x;
        }
        if (this._p2.y < this._p1.y) {
            by = this._p2.y;
        }
        this._p1 = point_1.Point.scale(this._p1, scaleX, scaleY, bx, by);
        this._p2 = point_1.Point.scale(this._p2, scaleX, scaleY, bx, by);
        return this;
    };
    /**
     * Nudges size of this line element by the given X and Y offsets
     * @param offsetX - X size offset
     * @param offsetY - Y size offset
     * @returns This line element
     */
    LineElement.prototype.nudgeSize = function (offsetX, offsetY) {
        if (!this._p1 || !this._p2) {
            return this;
        }
        var b = this.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newWidth = b.width + offsetX;
        if (newWidth < 1) {
            newWidth = 1;
        }
        var newHeight = b.height + offsetY;
        if (newHeight < 1) {
            newHeight = 1;
        }
        this.scale(newWidth / b.width, newHeight / b.height);
        return this;
    };
    /**
     * Moves this line element by the given X and Y offsets
     * @param offsetX - X size offset
     * @param offsetY - Y size offset
     * @returns This line element
     */
    LineElement.prototype.translate = function (offsetX, offsetY) {
        if (!this._p1 || !this._p2) {
            return this;
        }
        this._p1 = point_1.Point.translate(this._p1, offsetX, offsetY);
        this._p2 = point_1.Point.translate(this._p2, offsetX, offsetY);
        return this;
    };
    /**
     * Moves line
     * @param pointSource - New location
     * @returns This line
     */
    LineElement.prototype.setLocation = function (pointSource) {
        if (!this._p1 || !this._p2) {
            return this;
        }
        var b = this.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var pt;
        if (typeof pointSource === 'string') {
            pt = point_1.Point.parse(pointSource);
        }
        else {
            pt = new point_1.Point(pointSource.x, pointSource.y);
        }
        var deltaX = pt.x - b.x;
        var deltaY = pt.y - b.y;
        this.translate(deltaX, deltaY);
        return this;
    };
    /**
     * Returns rectangular bounding region
     * @returns Line bounding region
     */
    LineElement.prototype.getBounds = function () {
        var x;
        var y;
        var width;
        var height;
        if (!this._p1 || !this._p2) {
            return undefined;
        }
        if (this._p1.x < this._p2.x) {
            x = this._p1.x;
            width = this._p2.x - x;
        }
        else {
            x = this._p2.x;
            width = this._p1.x - x;
        }
        if (this._p1.y < this._p2.y) {
            y = this._p1.y;
            height = this._p2.y - y;
        }
        else {
            y = this._p2.y;
            height = this._p1.y - y;
        }
        return new region_1.Region(x, y, width, height);
    };
    /**
     * Returns line point count
     * @returns Two (2) points
     */
    LineElement.prototype.pointCount = function () {
        return 2;
    };
    /**
     * Returns point at a given index (0 or 1)
     * @param index - Point index (0 or 1)
     * @param depth - Not applicable
     * @returns Requested point
     */
    LineElement.prototype.getPointAt = function (index, depth) {
        if (index === 0 && this._p1) {
            return this._p1;
        }
        if (index === 1 && this._p2) {
            return this._p2;
        }
        throw new invalid_index_exception_1.InvalidIndexException(index);
    };
    /**
     * Sets point at a given index (0 or 1)
     * @param index - Point index (0 or 1)
     * @param value - New point value
     * @param depth - Not applicable
     */
    LineElement.prototype.setPointAt = function (index, value, depth) {
        if (index === 0) {
            this._p1 = new point_1.Point(value.x, value.y);
            return this;
        }
        else if (index === 1) {
            this._p2 = new point_1.Point(value.x, value.y);
            return this;
        }
        else {
            throw new invalid_index_exception_1.InvalidIndexException(index);
        }
    };
    return LineElement;
}(element_base_1.ElementBase));
exports.LineElement = LineElement;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes depth context for point container point references
 */
var PointDepth;
(function (PointDepth) {
    /**
     * Simple - Top level points
     */
    PointDepth[PointDepth["Simple"] = 1] = "Simple";
    /**
     * Full - Edit all points
     */
    PointDepth[PointDepth["Full"] = 2] = "Full";
})(PointDepth = exports.PointDepth || (exports.PointDepth = {}));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var element_base_1 = __webpack_require__(3);
var sprite_frame_1 = __webpack_require__(22);
var sprite_state_1 = __webpack_require__(60);
/**
 * Renders one or more image frames from full or partial bitmap image source
 */
var SpriteElement = /** @class */ (function (_super) {
    __extends(SpriteElement, _super);
    function SpriteElement() {
        var _this = _super.call(this, 'sprite') || this;
        _this.createSheetFrames = _this.createSheetFrames.bind(_this);
        _this.computeTimeline = _this.computeTimeline.bind(_this);
        _this.getStateForTime = _this.getStateForTime.bind(_this);
        _this.getTimeForFrame = _this.getTimeForFrame.bind(_this);
        _this.frames = [];
        _this.frameIndex = 0;
        _this.loop = true;
        return _this;
    }
    /**
     * Sprite element factory function
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param width - Width
     * @param height - Height
     * @returns New sprite element
     */
    SpriteElement.create = function (x, y, width, height) {
        var e = new SpriteElement();
        if (x !== undefined && y !== undefined && width !== undefined && height !== undefined) {
            e._location = new point_1.Point(x, y);
            e._size = new size_1.Size(width, height);
        }
        return e;
    };
    SpriteElement.cloneFrames = function (frames) {
        var cloned = [];
        for (var _i = 0, frames_1 = frames; _i < frames_1.length; _i++) {
            var frame = frames_1[_i];
            cloned.push(sprite_frame_1.SpriteFrame.clone(frame));
        }
        return cloned;
    };
    /**
     * Copies properies of another element instance to this instance
     * @param o - Source element
     */
    SpriteElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.frames) {
            this.frames = o.frames;
        }
        if (!this.location) {
            this._location = new point_1.Point(0, 0);
        }
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    SpriteElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.frames) {
            o.frames = JSON.parse(JSON.stringify(this.frames));
        }
        return o;
    };
    /**
     * Clones this element to a new instance
     * @returns Cloned sprite element instance
     */
    SpriteElement.prototype.clone = function () {
        var e = SpriteElement.create();
        _super.prototype.cloneTo.call(this, e);
        if (this.frames) {
            e.frames = this.frames;
        }
        return e;
    };
    /**
     * Register image sources for all frames with resource manager
     * @param rm - Resource manager
     */
    SpriteElement.prototype.registerResources = function (rm) {
        _super.prototype.registerResources.call(this, rm);
        if (this.frames) {
            var fl = this.frames.length;
            for (var i = 0; i < fl; i++) {
                rm.register(this.frames[i].source);
            }
        }
    };
    /**
     * Returns list of referenced resource keys
     */
    SpriteElement.prototype.getResourceKeys = function () {
        var keys = _super.prototype.getResourceKeys.call(this);
        if (this.frames) {
            var fl = this.frames.length;
            for (var i = 0; i < fl; i++) {
                keys.push(this.frames[i].source);
            }
        }
        return keys;
    };
    /**
     * Render sprite element to canvas context
     * @param c - Rendering context
     */
    SpriteElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model || !this.frames) {
            return;
        }
        var bounds = this.getBounds();
        if (!bounds) {
            return;
        }
        // If transition renderer in place, then render transition using prepared c1 and c2 canvases
        if (this.transition) {
            c.save();
            if (this.transform) {
                model.setRenderTransform(c, this.transform, bounds.location);
            }
            c.beginPath();
            c.rect(bounds.location.x, bounds.location.y, bounds.size.width, bounds.size.height);
            c.clip();
            this.transition(c, this.c1, this.c2, this.transitionOffset, bounds.location.x, bounds.location.y, bounds.size.width, bounds.size.height);
            c.restore();
        }
        else {
            // Render static frame
            var frame = this.frames[this.frameIndex];
            var res = model.resourceManager.get(frame.source);
            if (!res.image) {
                return;
            }
            c.save();
            if (this.transform) {
                model.setRenderTransform(c, this.transform, bounds.location);
            }
            if (frame.opacity && frame.opacity > 0 && frame.opacity < 1.0) {
                var o = c.globalAlpha;
                c.globalAlpha = frame.opacity;
                c.drawImage(res.image, frame.x, frame.y, frame.width, frame.height, bounds.location.x, bounds.location.y, bounds.size.width, bounds.size.height);
                c.globalAlpha = o;
            }
            else {
                c.drawImage(res.image, frame.x, frame.y, frame.width, frame.height, bounds.location.x, bounds.location.y, bounds.size.width, bounds.size.height);
            }
            c.restore();
        }
    };
    /**
     * Add sprite frames from a sprite sheet image containing one or more frame
     * images in a grid array
     * @param source - Bitmap resource key for source image
     * @param sheetWidth - Source image width
     * @param sheetHeight - Source image height
     * @param spriteWidth - Sprite frame width
     * @param spriteHeight - Sprite frame height
     * @param frameCount - Number of frames
     * @param duration - Duration for each frame
     * @param transition - Transition for each frame
     * @param transitionDuration - Transition duration for each frame
     * @param opacity - Optional opacity for each frame in the range (0-1). Default 1.
     */
    SpriteElement.prototype.createSheetFrames = function (source, sheetWidth, sheetHeight, spriteWidth, spriteHeight, frameCount, duration, transition, transitionDuration, opacity) {
        var index = 0;
        this.frames = [];
        for (var y = 0; y < sheetHeight; y += spriteHeight) {
            for (var x = 0; x < sheetWidth; x += spriteWidth) {
                this.frames.push(new sprite_frame_1.SpriteFrame(source, x, y, spriteWidth, spriteHeight, duration, transition, transitionDuration, opacity));
                index++;
                if (index === frameCount) {
                    return;
                }
            }
        }
    };
    /**
     * Computes total timeline length from duration and transition duration
     * of all frames and sets result into timelineLength property
     */
    SpriteElement.prototype.computeTimeline = function () {
        var total = 0;
        if (!this.frames) {
            return;
        }
        var fl = this.frames.length;
        for (var i = 0; i < fl; i++) {
            var frame = this.frames[i];
            if (frame.transition && frame.transitionDuration) {
                total += frame.duration + frame.transitionDuration;
            }
            else {
                total += frame.duration;
            }
        }
        this.timelineLength = total;
    };
    /**
     * Determines whether or not a transition or static frame should be
     * rendered based on a given timeline offset
     * @param targetTime - Timeline offset
     * @returns Sprite state for time offset
     */
    SpriteElement.prototype.getStateForTime = function (targetTime) {
        if (!this.frames) {
            return undefined;
        }
        var fl = this.frames.length;
        var time = 0.0;
        var baseTime = 0.0;
        // Compute timeline length if not already done
        if (!this.timelineLength) {
            this.computeTimeline();
        }
        if (!this.timelineLength) {
            return;
        }
        // If not looping and past end time, return end frame
        if (!this.loop) {
            if (targetTime > this.timelineLength) {
                return new sprite_state_1.SpriteState(undefined, 1.0, fl - 1, fl - 1);
            }
        }
        // Loop time
        if (this.loop) {
            if (targetTime >= this.timelineLength) {
                targetTime = targetTime % this.timelineLength;
            }
        }
        // Walk the frames until we hit the target time
        while (true) {
            for (var i = 0; i < fl; i++) {
                var index = i;
                var nextIndex = i + 1;
                if (nextIndex >= fl) {
                    nextIndex = 0;
                }
                var frame = this.frames[index];
                var nextFrame = this.frames[nextIndex];
                if (targetTime <= baseTime + time + frame.duration) {
                    return new sprite_state_1.SpriteState(undefined, 1.0 - (baseTime + time + frame.duration - targetTime) / frame.duration, index, nextIndex);
                }
                if (nextFrame.transitionDuration &&
                    targetTime <= baseTime + time + frame.duration + nextFrame.transitionDuration) {
                    var timeOffset = baseTime + time + frame.duration + nextFrame.transitionDuration - targetTime;
                    var offset = 1.0 - timeOffset / nextFrame.transitionDuration;
                    return new sprite_state_1.SpriteState(nextFrame.transition, offset, index, nextIndex);
                }
                if (nextFrame.transitionDuration) {
                    time += nextFrame.transitionDuration;
                }
                time += frame.duration;
            }
            // Increment base time in case target time exceeds total time line length
            baseTime += time;
            time = 0;
        }
    };
    /**
     * Returns the timeline time offset for the start of a given frame
     * @param targetFrame - Frame index
     * @returns Timeline time offset in seconds
     */
    SpriteElement.prototype.getTimeForFrame = function (targetFrame) {
        if (!this.frames) {
            return undefined;
        }
        var fl = this.frames.length;
        var time = 0.0;
        // Bounds check
        if (targetFrame > fl || targetFrame < 0) {
            throw new Error(error_messages_1.ErrorMessages.InvalidFrameIndex);
        }
        // Compute timeline length if not already done
        if (!this.timelineLength) {
            this.computeTimeline();
        }
        // Walk the frames until we hit the target frame, adding up the time
        for (var i = 0; i < targetFrame; i++) {
            var nextIndex = i + 1;
            if (nextIndex >= fl) {
                nextIndex = 0;
            }
            var frame = this.frames[i];
            var nextFrame = this.frames[nextIndex];
            time += frame.duration;
            if (nextFrame.transitionDuration) {
                time += nextFrame.transitionDuration;
            }
        }
        return time;
    };
    return SpriteElement;
}(element_base_1.ElementBase));
exports.SpriteElement = SpriteElement;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resource_creator_registration_1 = __webpack_require__(61);
/**
 * Resource creation factory
 */
var ResourceFactory = /** @class */ (function () {
    function ResourceFactory() {
    }
    /**
     * Registers a resource creator
     * @param name - Resource type tag
     * @param creator - Resource creation function
     */
    ResourceFactory.registerCreator = function (name, creator) {
        ResourceFactory.ResourceCreators.push(new resource_creator_registration_1.ResourceCreatorRegistration(name, creator));
    };
    /**
     * Creates a new registered resource instance given a type tag
     * @param name - Resource type tag
     * @returns New resource
     */
    ResourceFactory.create = function (name) {
        for (var _i = 0, _a = ResourceFactory.ResourceCreators; _i < _a.length; _i++) {
            var rc = _a[_i];
            if (rc.name === name) {
                return rc.creator.create();
            }
        }
        return undefined;
    };
    /**
     * Array of resource creators
     */
    ResourceFactory.ResourceCreators = [];
    return ResourceFactory;
}());
exports.ResourceFactory = ResourceFactory;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var size_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(5);
var resource_1 = __webpack_require__(36);
var resource_factory_1 = __webpack_require__(18);
/**
 * Bitmap image resource
 */
var BitmapResource = /** @class */ (function (_super) {
    __extends(BitmapResource, _super);
    function BitmapResource() {
        return _super.call(this, 'bitmap') || this;
    }
    /**
     * Bitmap resource factory function
     * @param key - Resource key
     * @param uriOrImage - Resource URI or existing image object
     * @param locale - Optional resource local (e.g. en-US)
     */
    BitmapResource.create = function (key, uriOrImage, locale) {
        var br = new BitmapResource();
        if (arguments.length >= 2) {
            br.key = key;
            if (typeof uriOrImage === 'string') {
                br.uri = uriOrImage;
            }
            else {
                br.image = uriOrImage;
            }
        }
        if (locale) {
            br.locale = locale;
        }
        return br;
    };
    /**
     * Clones this resource to a new instance
     * @returns Cloned bitmap resource
     */
    BitmapResource.prototype.clone = function () {
        var o;
        if (!this.key) {
            throw new Error(error_messages_1.ErrorMessages.ResourceKeyIsUndefined);
        }
        if (!this.image && !this.uri) {
            throw new Error(error_messages_1.ErrorMessages.BitmapResourceSourceIsUndefined);
        }
        if (this.image) {
            o = BitmapResource.create(this.key, this.image, this.locale);
        }
        else if (this.uri) {
            o = BitmapResource.create(this.key, this.uri, this.locale);
        }
        if (o) {
            _super.prototype.cloneTo.call(this, o);
            if (this.size) {
                o.size = this.size;
            }
        }
        else {
            throw new Error(error_messages_1.ErrorMessages.ResourceIsInvalid);
        }
        return o;
    };
    /**
     * Copies properties of another bitmap resource
     * @param o - Source bitmap resource
     */
    BitmapResource.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.size) {
            this.size = size_1.Size.parse(o.size);
        }
    };
    /**
     * Serializes resource to a new instance
     * @returns Serialized resource instance
     */
    BitmapResource.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.size) {
            o.size = this.size.toString();
        }
        return o;
    };
    /**
     * Retrieves image resource
     * @param url - Image URL
     * @param callback - Retrieval callback (result: boolean)
     */
    BitmapResource.prototype.load = function (url, callback) {
        var image = new Image();
        this.image = image;
        image.src = url;
        image.onload = function (e) {
            if (callback) {
                callback(true);
            }
        };
        image.onabort = function (e) {
            if (callback) {
                callback(false);
            }
        };
        image.onerror = function (e) {
            if (callback) {
                callback(false);
            }
        };
    };
    BitmapResource.prototype.initialize = function () {
        var self = this;
        if (!self.resourceManager) {
            throw new Error(error_messages_1.ErrorMessages.ResourceManagerIsUndefined);
        }
        // If embedded image, just unregister
        if (self.image) {
            self.resourceManager.unregister(self, true);
        }
        else {
            // Image Resource Assumed
            var imagePath = self.uri;
            if (!imagePath) {
                throw new Error('Image path is undefined.');
            }
            var imagePathLowered = imagePath.toLowerCase();
            // Local (Server) Image
            if (imagePath.charAt(0) === ':') {
                var url = imagePath.substring(1, imagePath.length);
                self.load(url, function (success) {
                    if (self.resourceManager) {
                        self.resourceManager.unregister(self, success);
                    }
                });
            }
            else if (imagePath.charAt(0) === '/') {
                // Shared Image
                if (self.resourceManager && self.resourceManager.model) {
                    self.load(utility_1.Utility.joinPaths(self.resourceManager.model.basePath, imagePath), function (success) {
                        if (self.resourceManager) {
                            self.resourceManager.unregister(self, success);
                        }
                    });
                }
            }
            else if (imagePathLowered.indexOf('http://') === 0 || imagePathLowered.indexOf('https://') === 0) {
                // Remote / External Image (http:// or https://)
                self.load(imagePath, function (success) {
                    if (self.resourceManager) {
                        self.resourceManager.unregister(self, success);
                    }
                });
            }
            else {
                // Embedded Image
                if (self.resourceManager && self.resourceManager.localResourcePath) {
                    self.load(utility_1.Utility.joinPaths(self.resourceManager.localResourcePath, imagePath), function (success) {
                        if (self.resourceManager) {
                            self.resourceManager.unregister(self, success);
                        }
                    });
                }
            }
        }
    };
    return BitmapResource;
}(resource_1.Resource));
exports.BitmapResource = BitmapResource;
/* Register type creator */
resource_factory_1.ResourceFactory.registerCreator('bitmap', BitmapResource);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specifies pane transition direction
 */
var PaneTransitionDirection;
(function (PaneTransitionDirection) {
    PaneTransitionDirection[PaneTransitionDirection["Left"] = 0] = "Left";
    PaneTransitionDirection[PaneTransitionDirection["Right"] = 1] = "Right";
    PaneTransitionDirection[PaneTransitionDirection["Up"] = 2] = "Up";
    PaneTransitionDirection[PaneTransitionDirection["Down"] = 3] = "Down";
    PaneTransitionDirection[PaneTransitionDirection["LeftUp"] = 4] = "LeftUp";
    PaneTransitionDirection[PaneTransitionDirection["RightUp"] = 5] = "RightUp";
    PaneTransitionDirection[PaneTransitionDirection["LeftDown"] = 6] = "LeftDown";
    PaneTransitionDirection[PaneTransitionDirection["RightDown"] = 7] = "RightDown";
    PaneTransitionDirection[PaneTransitionDirection["In"] = 8] = "In";
    PaneTransitionDirection[PaneTransitionDirection["Out"] = 9] = "Out";
    PaneTransitionDirection[PaneTransitionDirection["InX"] = 10] = "InX";
    PaneTransitionDirection[PaneTransitionDirection["InY"] = 11] = "InY";
    PaneTransitionDirection[PaneTransitionDirection["OutX"] = 12] = "OutX";
    PaneTransitionDirection[PaneTransitionDirection["OutY"] = 13] = "OutY";
})(PaneTransitionDirection = exports.PaneTransitionDirection || (exports.PaneTransitionDirection = {}));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
/**
 * Encapsulates invalid point index exception
 */
var InvalidIndexException = /** @class */ (function (_super) {
    __extends(InvalidIndexException, _super);
    function InvalidIndexException(index) {
        return _super.call(this, error_messages_1.ErrorMessages.InvalidPointIndex + index) || this;
    }
    return InvalidIndexException;
}(Error));
exports.InvalidIndexException = InvalidIndexException;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents sprite element frame
 */
var SpriteFrame = /** @class */ (function () {
    /**
     * @param source - Bitmap resource key
     * @param x - Bitmap resource image region X coordinate
     * @param y - Bitmap resource image region Y coordinate
     * @param width - Bitmap resource image region Width
     * @param height - Bitmap resource image region Height
     * @param duration - Frame duration in seconds
     * @param transition - Frame visual transition
     * @param transitionDuration - Frame transition duration
     * @param opacity - Optional frame opacity in the range of 0-1
     */
    function SpriteFrame(source, x, y, width, height, duration, transition, transitionDuration, opacity) {
        /**
         * Frame opacity in the range of 0-1
         */
        this.opacity = 1;
        this.source = source;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.duration = duration;
        this.transition = transition;
        this.transitionDuration = transitionDuration;
        if (opacity !== undefined) {
            this.opacity = opacity;
        }
    }
    /**
     * Clones a sprite frame
     * @param source SpriteFrame to clone
     */
    SpriteFrame.clone = function (source) {
        var clone = new SpriteFrame(source.source, source.x, source.y, source.width, source.height, source.duration, source.transition, source.transitionDuration, source.opacity);
        return clone;
    };
    /**
     * Sprite Frame factory function
     * @param source - Bitmap resource key
     * @param x - Bitmap resource image region X coordinate
     * @param y - Bitmap resource image region Y coordinate
     * @param width - Bitmap resource image region Width
     * @param height - Bitmap resource image region Height
     * @param duration - Frame duration in seconds
     * @param transition - To frame visual transition
     * @param transitionDuration - To frame transition duration
     * @param opacity - Frame opacity in the range of 0-1
     */
    SpriteFrame.create = function (source, x, y, width, height, duration, transition, transitionDuration, opacity) {
        return new SpriteFrame(source, x, y, width, height, duration, transition, transitionDuration, opacity);
    };
    return SpriteFrame;
}());
exports.SpriteFrame = SpriteFrame;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var fill_factory_1 = __webpack_require__(8);
var element_base_1 = __webpack_require__(3);
/**
 * Renders a stroked and filled text element
 */
var TextElement = /** @class */ (function (_super) {
    __extends(TextElement, _super);
    function TextElement() {
        var _this = _super.call(this, 'text') || this;
        _this.setText = _this.setText.bind(_this);
        _this.setSource = _this.setSource.bind(_this);
        _this.setTypeface = _this.setTypeface.bind(_this);
        _this.setTypesize = _this.setTypesize.bind(_this);
        _this.setTypestyle = _this.setTypestyle.bind(_this);
        _this.setAlignment = _this.setAlignment.bind(_this);
        _this.getLines = _this.getLines.bind(_this);
        return _this;
    }
    /**
     * Text element factory function
     * @param text - Text string or text resource key to render
     * @param x - Text block x coordinate
     * @param y - Text block y coordinate
     * @param width - Text block width
     * @param height - Text block height
     * @returns New text element
     */
    TextElement.create = function (text, x, y, width, height) {
        var e = new TextElement();
        if (!text) {
            return e;
        }
        if (typeof text === 'string') {
            e.text = text;
        }
        else {
            e.source = text.key;
        }
        if (x !== undefined && y !== undefined) {
            e._location = new point_1.Point(x, y);
        }
        if (width !== undefined && height !== undefined) {
            e._size = new size_1.Size(width, height);
        }
        return e;
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source object
     */
    TextElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.text) {
            this.text = o.text;
        }
        if (o.source) {
            this.source = o.source;
        }
        if (o.typeface) {
            this.typeface = o.typeface;
        }
        if (o.typesize) {
            this.typesize = o.typesize;
        }
        if (o.typestyle) {
            this.typestyle = o.typestyle;
        }
        if (o.alignment) {
            this.alignment = o.alignment;
        }
        if (!this.location) {
            this._location = new point_1.Point(0, 0);
        }
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    TextElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.text) {
            o.text = this.text;
        }
        if (this.source) {
            o.source = this.source;
        }
        if (this.typeface) {
            o.typeface = this.typeface;
        }
        if (this.typesize) {
            o.typesize = this.typesize;
        }
        if (this.typestyle) {
            o.typestyle = this.typestyle;
        }
        if (this.alignment) {
            o.alignment = this.alignment;
        }
        return o;
    };
    /**
     * Clones this text element to a new instance
     * @returns Cloned text element
     */
    TextElement.prototype.clone = function () {
        var e = TextElement.create();
        _super.prototype.cloneTo.call(this, e);
        if (this.text) {
            e.text = this.text;
        }
        if (this.source) {
            e.source = this.source;
        }
        if (this.typeface) {
            e.typeface = this.typeface;
        }
        if (this.typesize) {
            e.typesize = this.typesize;
        }
        if (this.typestyle) {
            e.typestyle = this.typestyle;
        }
        if (this.alignment) {
            e.alignment = this.alignment;
        }
        return e;
    };
    /**
     * Registers referenced resources with resource manager
     * @param rm - Resource manager
     */
    TextElement.prototype.registerResources = function (rm) {
        _super.prototype.registerResources.call(this, rm);
        if (this.source) {
            rm.register(this.source);
        }
    };
    /**
     * Returns list of referenced resource keys
     */
    TextElement.prototype.getResourceKeys = function () {
        var keys = _super.prototype.getResourceKeys.call(this);
        if (this.source) {
            keys.push(this.source);
        }
        return keys;
    };
    /**
     * Render text element to canvas context
     * @param c - Rendering context
     */
    TextElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, new point_1.Point(bounds.location.x, bounds.location.y));
        }
        c.beginPath();
        c.rect(bounds.location.x, bounds.location.y, bounds.size.width + 10, bounds.size.height);
        c.clip();
        var font = '';
        var fontSize = '10.0';
        if (this.typestyle && this.typestyle.length > 0) {
            var parts = this.typestyle.split(',');
            for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                var part = parts_1[_i];
                font += part;
                font += ' ';
            }
        }
        if (this.typesize) {
            fontSize = String(this.typesize);
            font += this.typesize + 'px ';
        }
        if (this.typeface) {
            var parts = this.typeface.split(',');
            for (var _a = 0, parts_2 = parts; _a < parts_2.length; _a++) {
                var part = parts_2[_a];
                font += part;
                font += ' ';
            }
        }
        else {
            font += 'sans-serif';
        }
        c.font = font;
        var valign = 'top';
        var halign = 'left';
        if (this.alignment) {
            var parts = this.alignment.split(',');
            for (var _b = 0, parts_3 = parts; _b < parts_3.length; _b++) {
                var part = parts_3[_b];
                if (part.toLowerCase() === 'start') {
                    c.textAlign = 'start';
                    halign = 'left';
                }
                else if (part.toLowerCase() === 'end') {
                    c.textAlign = 'end';
                    halign = 'right';
                }
                else if (part.toLowerCase() === 'left') {
                    c.textAlign = 'left';
                    halign = 'left';
                }
                else if (part.toLowerCase() === 'right') {
                    c.textAlign = 'right';
                    halign = 'right';
                }
                else if (part.toLowerCase() === 'center') {
                    c.textAlign = 'center';
                    halign = 'center';
                }
                else if (part.toLowerCase() === 'top') {
                    valign = 'top';
                }
                else if (part.toLowerCase() === 'bottom') {
                    valign = 'bottom';
                }
                else if (part.toLowerCase() === 'middle') {
                    valign = 'middle';
                }
            }
        }
        // Resolve text content
        var text;
        if (this.source) {
            var res = model.resourceManager.get(this.source);
            if (res) {
                text = res.text;
            }
        }
        if (!text) {
            text = this.text;
        }
        if (!text) {
            return;
        }
        // Get lines of text
        var lines = this.getLines(c, text, bounds.size.width);
        // Compute total height of text
        var lineHeight = parseFloat(fontSize);
        var totalHeight = lineHeight * lines.length;
        var x;
        var y;
        if (fill_factory_1.FillFactory.setElementFill(c, this)) {
            var loc = bounds.location;
            // Iterate lines and fill text
            x = bounds.location.x;
            if (halign === 'right') {
                x += bounds.size.width;
            }
            else if (halign === 'center') {
                x += bounds.size.width / 2;
            }
            y = bounds.location.y;
            c.textBaseline = 'top';
            if (valign === 'middle') {
                y = bounds.location.y + bounds.size.height / 2 - totalHeight / 2;
            }
            else if (valign === 'bottom') {
                y = bounds.location.y + bounds.size.height - totalHeight;
            }
            for (var _c = 0, lines_1 = lines; _c < lines_1.length; _c++) {
                var line = lines_1[_c];
                if (this.fillOffsetX || this.fillOffsetY) {
                    var fillOffsetX = this.fillOffsetX || 0;
                    var fillOffsetY = this.fillOffsetY || 0;
                    c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                    c.fillText(line, -fillOffsetX + x - loc.x, -fillOffsetY + y - loc.y);
                    c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
                }
                else {
                    c.translate(loc.x, loc.y);
                    c.fillText(line, x - loc.x, y - loc.y);
                    c.translate(-loc.x, -loc.y);
                }
                y += lineHeight;
            }
        }
        if (model.setElementStroke(c, this)) {
            // Iterate lines and stroke text
            x = bounds.location.x;
            if (halign === 'right') {
                x += bounds.size.width;
            }
            else if (halign === 'center') {
                x += bounds.size.width / 2;
            }
            y = bounds.location.y;
            c.textBaseline = 'top';
            if (valign === 'middle') {
                y = bounds.location.y + bounds.size.height / 2 - totalHeight / 2;
            }
            else if (valign === 'bottom') {
                y = bounds.location.y + bounds.size.height - totalHeight;
            }
            for (var _d = 0, lines_2 = lines; _d < lines_2.length; _d++) {
                var line = lines_2[_d];
                c.strokeText(line, x, y);
                y += lineHeight;
            }
        }
        c.restore();
    };
    /**
     * Text set accessor.  Clears source property when set.
     * @param text - Text string to render
     * @returns This text element
     */
    TextElement.prototype.setText = function (text) {
        this.text = text;
        this.source = undefined;
        return this;
    };
    /**
     * Source set accessor. Clears text property when set.
     * @param source - Text resource key
     * @returns This text element
     */
    TextElement.prototype.setSource = function (source) {
        this.source = source;
        this.text = undefined;
        return this;
    };
    /**
     * Typeface set accessor
     * @param typeface - Font typeface
     * @returns This text element
     */
    TextElement.prototype.setTypeface = function (typeface) {
        this.typeface = typeface;
        return this;
    };
    /**
     * Typeface set accessor
     * @param typesize - Font type size in pixels
     * @returns This text element
     */
    TextElement.prototype.setTypesize = function (typesize) {
        this.typesize = typesize;
        return this;
    };
    /**
     * Typestyle set accessor
     * @param typestyle - Font typestyle
     * @returns This text element
     */
    TextElement.prototype.setTypestyle = function (typestyle) {
        this.typestyle = typestyle;
        return this;
    };
    /**
     * Alignment set accessor
     * @param alignment - Text block alignment directives
     * @returns This text element
     */
    TextElement.prototype.setAlignment = function (alignment) {
        this.alignment = alignment;
        return this;
    };
    /**
     * Splits text to render into lines that will fit into specified
     * element width
     * @param c - Rendering context
     * @param text - Text to render
     * @param lineWidth - Text block width
     * @returns Split text lines
     */
    TextElement.prototype.getLines = function (c, text, lineWidth) {
        var splitLines = text.split('\n');
        var lines = [];
        for (var _i = 0, splitLines_1 = splitLines; _i < splitLines_1.length; _i++) {
            var line = splitLines_1[_i];
            var words = line.split(' ');
            if (words.length === 1) {
                lines.push(words[0]);
                continue;
            }
            var lastLine = words[0];
            var measure = 0;
            var wl = words.length;
            for (var i = 1; i < wl; i++) {
                var word = words[i];
                measure = c.measureText(lastLine + word).width;
                if (measure < lineWidth) {
                    lastLine += ' ' + word;
                }
                else {
                    lines.push(lastLine);
                    lastLine = word;
                }
                if (i === words.length - 1) {
                    lines.push(lastLine);
                    break;
                }
            }
        }
        return lines;
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    TextElement.prototype.canStroke = function () {
        return true;
    };
    /**
     * Can element be filled
     * @returns Can fill
     */
    TextElement.prototype.canFill = function () {
        return true;
    };
    return TextElement;
}(element_base_1.ElementBase));
exports.TextElement = TextElement;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a mouse event for event handling
 */
var MouseEventArgs = /** @class */ (function () {
    /**
     * @param event - DOM event or simulated event args
     */
    function MouseEventArgs(event) {
        this.event = event;
    }
    return MouseEventArgs;
}());
exports.MouseEventArgs = MouseEventArgs;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var model_element_1 = __webpack_require__(30);
/**
 * Extends ModelElement class to add Component property
 */
var ComponentElement = /** @class */ (function (_super) {
    __extends(ComponentElement, _super);
    /**
     * @param source - Model element ID used as resource key in parent model
     * @param left - Element X coordinate
     * @param top - Element Y coordinate
     * @param width - Element width
     * @param height - Element height
     */
    function ComponentElement(source, left, top, width, height) {
        var _this = _super.call(this) || this;
        /**
         * True if component accepts drag/drop
         */
        _this.acceptsDrag = false;
        _this.source = source;
        _this.setSize(new size_1.Size(width, height));
        _this.setLocation(new point_1.Point(left, top));
        return _this;
    }
    return ComponentElement;
}(model_element_1.ModelElement));
exports.ComponentElement = ComponentElement;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_event_trigger_1 = __webpack_require__(53);
var element_command_1 = __webpack_require__(39);
var element_command_handler_registration_1 = __webpack_require__(54);
var ElementCommandHandler = /** @class */ (function () {
    function ElementCommandHandler() {
        this.registrations = [];
        this.attachController = this.attachController.bind(this);
        this.elementMouseEntered = this.elementMouseEntered.bind(this);
        this.elementMouseLeft = this.elementMouseLeft.bind(this);
        this.elementMouseDown = this.elementMouseDown.bind(this);
        this.elementMouseUp = this.elementMouseUp.bind(this);
        this.elementClicked = this.elementClicked.bind(this);
        this.callElementTimers = this.callElementTimers.bind(this);
        this.timer = this.timer.bind(this);
        this.onElementCommandFired = this.onElementCommandFired.bind(this);
    }
    ElementCommandHandler.pushFill = function (c, el, command, trigger, parameters) {
        if (!el.fillStack) {
            el.fillStack = [];
        }
        if (el.fill) {
            el.fillStack.push(el.fill);
        }
        else {
            el.fillStack.push('');
        }
        var ec = element_command_1.ElementCommand.parse(command);
        el.setFill(ec.parameter);
        c.draw();
    };
    ElementCommandHandler.popFill = function (c, el, command, trigger, parameters) {
        if (!el.fillStack) {
            return;
        }
        if (el.fillStack.length > 0) {
            el.fill = el.fillStack.pop();
        }
        if (el.fillStack.length === 0) {
            el.fillStack = undefined;
        }
        c.draw();
    };
    ElementCommandHandler.pushStroke = function (c, el, command, trigger, parameters) {
        if (!el.strokeStack) {
            el.strokeStack = [];
        }
        if (el.stroke) {
            el.strokeStack.push(el.stroke);
        }
        else {
            el.strokeStack.push('');
        }
        var ec = element_command_1.ElementCommand.parse(command);
        el.stroke = ec.parameter;
        c.draw();
    };
    ElementCommandHandler.popStroke = function (c, el, command, trigger, parameters) {
        if (!el.strokeStack) {
            return;
        }
        if (el.strokeStack.length > 0) {
            el.stroke = el.strokeStack.pop();
        }
        if (el.strokeStack.length === 0) {
            el.strokeStack = undefined;
        }
        c.draw();
    };
    ElementCommandHandler.pushFrame = function (c, element, command, trigger, parameters) {
        var el = element;
        if (!el.frameStack) {
            el.frameStack = [];
        }
        el.frameStack.push(el.frameIndex);
        var ec = element_command_1.ElementCommand.parse(command);
        el.frameIndex = parseInt(ec.parameter, 10);
        c.draw();
    };
    ElementCommandHandler.popFrame = function (c, element, command, trigger, parameters) {
        var el = element;
        if (!el.frameStack) {
            return;
        }
        if (el.frameStack.length > 0) {
            var index = el.frameStack.pop();
            if (index !== undefined) {
                el.frameIndex = index;
            }
        }
        if (el.frameStack.length === 0) {
            el.frameStack = undefined;
        }
        c.draw();
    };
    ElementCommandHandler.prototype.attachController = function (controller) {
        controller.commandHandler = this;
        controller.mouseEnteredElement.add(this.elementMouseEntered);
        controller.mouseLeftElement.add(this.elementMouseLeft);
        controller.mouseDownElement.add(this.elementMouseDown);
        controller.mouseUpElement.add(this.elementMouseUp);
        controller.elementClicked.add(this.elementClicked);
        controller.timer.add(this.timer);
    };
    ElementCommandHandler.prototype.elementMouseEntered = function (c, el) {
        if (c.commandHandler && el.mouseEnter) {
            c.commandHandler.onElementCommandFired(c, el, el.mouseEnter, command_event_trigger_1.CommandEventTrigger.MouseEnter, null);
        }
    };
    ElementCommandHandler.prototype.elementMouseLeft = function (c, el) {
        if (c.commandHandler && el.mouseLeave) {
            c.commandHandler.onElementCommandFired(c, el, el.mouseLeave, command_event_trigger_1.CommandEventTrigger.MouseLeave, null);
        }
    };
    ElementCommandHandler.prototype.elementMouseDown = function (c, el) {
        if (c.commandHandler && el.mouseDown) {
            c.commandHandler.onElementCommandFired(c, el, el.mouseDown, command_event_trigger_1.CommandEventTrigger.MouseDown, null);
        }
    };
    ElementCommandHandler.prototype.elementMouseUp = function (c, el) {
        if (c.commandHandler && el.mouseUp) {
            c.commandHandler.onElementCommandFired(c, el, el.mouseUp, command_event_trigger_1.CommandEventTrigger.MouseUp, null);
        }
    };
    ElementCommandHandler.prototype.elementClicked = function (c, el) {
        if (c.commandHandler && el.click) {
            c.commandHandler.onElementCommandFired(c, el, el.click, command_event_trigger_1.CommandEventTrigger.Click, null);
        }
    };
    ElementCommandHandler.prototype.callElementTimers = function (m, controller, params) {
        for (var _i = 0, _a = m.elements; _i < _a.length; _i++) {
            var e = _a[_i];
            if (controller.commandHandler && e.timer) {
                controller.commandHandler.onElementCommandFired(controller, e, e.timer, command_event_trigger_1.CommandEventTrigger.Timer, params);
            }
            if (e.type === 'model') {
                var innerModel = void 0;
                var modelElement = e;
                if (!modelElement.sourceModel && modelElement.source) {
                    var res = m.resourceManager.get(modelElement.source);
                    if (res && res.model) {
                        innerModel = res.model;
                    }
                }
                else {
                    innerModel = modelElement.sourceModel;
                }
                if (innerModel) {
                    this.callElementTimers(innerModel, controller, params);
                }
            }
        }
        for (var _b = 0, _c = m.resources; _b < _c.length; _b++) {
            var r = _c[_b];
            if (r.type === 'model') {
                var mr = r;
                if (mr.model) {
                    this.callElementTimers(mr.model, controller, params);
                }
            }
        }
    };
    ElementCommandHandler.prototype.timer = function (controller, params) {
        var m = controller.model;
        if (m) {
            this.callElementTimers(m, controller, params);
        }
    };
    ElementCommandHandler.prototype.onElementCommandFired = function (controller, el, command, trigger, parameters) {
        var ec = element_command_1.ElementCommand.parse(command);
        var reg = this.getRegistration(ec.name);
        if (!reg) {
            return false;
        }
        reg.handler(controller, el, command, trigger, parameters);
        return true;
    };
    ElementCommandHandler.prototype.getRegistration = function (command) {
        for (var _i = 0, _a = this.registrations; _i < _a.length; _i++) {
            var reg = _a[_i];
            if (reg.command === command) {
                return reg;
            }
        }
        return undefined;
    };
    ElementCommandHandler.prototype.addHandler = function (command, handler) {
        var found = this.getRegistration(command);
        if (!found) {
            this.registrations.push(new element_command_handler_registration_1.ElementCommandHandlerRegistration(command, handler));
        }
        else {
            found.handler = handler;
        }
    };
    ElementCommandHandler.prototype.removeHandler = function (command) {
        var found = this.getRegistration(command);
        if (found) {
            this.registrations.splice(this.registrations.indexOf(found), 1);
        }
    };
    ElementCommandHandler.prototype.clearHandlers = function () {
        this.registrations = [];
    };
    ElementCommandHandler.PUSH_FILL = 'pushFill';
    ElementCommandHandler.POP_FILL = 'popFill';
    ElementCommandHandler.PUSH_STROKE = 'pushStroke';
    ElementCommandHandler.POP_STROKE = 'popStroke';
    ElementCommandHandler.PUSH_FRAME = 'pushFrame';
    ElementCommandHandler.POP_FRAME = 'popFrame';
    return ElementCommandHandler;
}());
exports.ElementCommandHandler = ElementCommandHandler;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gradient_fill_stop_1 = __webpack_require__(43);
/**
 * Describes  a linear gradient fill
 */
var LinearGradientFill = /** @class */ (function () {
    /**
     * @param start - Start point serialized as a string
     * @param end - End point serialized as a string
     */
    function LinearGradientFill(start, end) {
        this.addFillStop = this.addFillStop.bind(this);
        this.start = start;
        this.end = end;
        this.stops = [];
        this.type = 'linearGradient';
    }
    /**
     * Linear gradient factory function
     * @param start - Start point serialized as a string
     * @param end - End point serialized as a string
     * @returns New linear gradient fill
     */
    LinearGradientFill.create = function (start, end) {
        return new LinearGradientFill(start, end);
    };
    LinearGradientFill.prototype.clone = function () {
        var lgr = new LinearGradientFill(this.start, this.end);
        for (var _i = 0, _a = this.stops; _i < _a.length; _i++) {
            var stop_1 = _a[_i];
            lgr.addFillStop(stop_1.color, stop_1.offset);
        }
        return lgr;
    };
    /**
     * Adds a fill stop to the gradient fill stops array
     * @param color - Fill stop color
     * @param offset - Fill stop offset
     */
    LinearGradientFill.prototype.addFillStop = function (color, offset) {
        this.stops.push(new gradient_fill_stop_1.GradientFillStop(color, offset));
    };
    return LinearGradientFill;
}());
exports.LinearGradientFill = LinearGradientFill;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gradient_fill_stop_1 = __webpack_require__(43);
/**
 * Describes a radial gradient fill
 */
var RadialGradientFill = /** @class */ (function () {
    /**
     * @param center - Gradient center point serialized as string
     * @param focus - Gradient focal point serialized as string
     * @param radiusX - Horizontal radius
     * @param radiuxY - Vertical radius
     */
    function RadialGradientFill(center, focus, radiusX, radiusY) {
        this.addFillStop = this.addFillStop.bind(this);
        this.center = center;
        this.focus = focus;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.stops = [];
        this.type = 'radialGradient';
    }
    /**
     * Radial gradient factory function
     * @param center - Gradient center point serialized as string
     * @param focus - Gradient focal point serialized as string
     * @param radiusX - Horizontal radius
     * @param radiusY - Vertical radius
     * @returns New radial gradient fill
     */
    RadialGradientFill.create = function (center, focus, radiusX, radiusY) {
        return new RadialGradientFill(center, focus, radiusX, radiusY);
    };
    /**
     * Adds a fill stop to the gradient fill stops array
     * @param color - Fill stop color
     * @param offset - Fill stop offset
     */
    RadialGradientFill.prototype.addFillStop = function (color, offset) {
        this.stops.push(new gradient_fill_stop_1.GradientFillStop(color, offset));
    };
    RadialGradientFill.prototype.clone = function () {
        var rgf = new RadialGradientFill(this.center, this.focus, this.radiusX, this.radiusY);
        for (var _i = 0, _a = this.stops; _i < _a.length; _i++) {
            var stop_1 = _a[_i];
            rgf.addFillStop(stop_1.color, stop_1.offset);
        }
        return rgf;
    };
    return RadialGradientFill;
}());
exports.RadialGradientFill = RadialGradientFill;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var element_base_1 = __webpack_require__(3);
/**
 * Renders a bitmap based image element
 */
var ImageElement = /** @class */ (function (_super) {
    __extends(ImageElement, _super);
    function ImageElement() {
        var _this = _super.call(this, 'image') || this;
        _this.setOpacity = _this.setOpacity.bind(_this);
        _this.opacity = 1.0;
        return _this;
    }
    /**
     * Image element factory function
     * @param source - Bitmap resource key or bitmap resource
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param width - Width
     * @param height - Height
     * @returns New image element
     */
    ImageElement.create = function (source, x, y, width, height) {
        var e = new ImageElement();
        if (source) {
            if (typeof source === 'string') {
                e.source = source;
            }
            else {
                e.source = source.key;
            }
            if (x !== undefined && y !== undefined) {
                e._location = new point_1.Point(x, y);
            }
            if (width !== undefined && height !== undefined) {
                e._size = new size_1.Size(width, height);
            }
        }
        return e;
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source element
     */
    ImageElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.source) {
            this.source = o.source;
        }
        if (o.opacity !== undefined) {
            this.opacity = o.opacity;
        }
        if (!this._location) {
            this._location = new point_1.Point(0, 0);
        }
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    ImageElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.source) {
            o.source = this.source;
        }
        if (this.opacity !== undefined && this.opacity !== 1) {
            o.opacity = this.opacity;
        }
        if (this._location) {
            o.location = this._location.toString();
        }
        return o;
    };
    /**
     * Clones this image element to a new instance
     * @returns Cloned image instance
     */
    ImageElement.prototype.clone = function () {
        var e = ImageElement.create();
        _super.prototype.cloneTo.call(this, e);
        if (this.source) {
            e.source = this.source;
        }
        if (this.opacity !== undefined) {
            e.opacity = this.opacity;
        }
        return e;
    };
    /**
     * Register image source with resource manager
     * @param rm - Resource manager
     */
    ImageElement.prototype.registerResources = function (rm) {
        _super.prototype.registerResources.call(this, rm);
        if (this.source) {
            rm.register(this.source);
        }
    };
    /**
     * Returns list of referenced resource keys
     */
    ImageElement.prototype.getResourceKeys = function () {
        var keys = _super.prototype.getResourceKeys.call(this);
        if (this.source) {
            keys.push(this.source);
        }
        return keys;
    };
    /**
     * Render image element to canvas context
     * @param c - Rendering context
     */
    ImageElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (this._location === undefined) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        if (this._size === undefined) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if (this.source === undefined) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        var res = model.resourceManager.get(this.source);
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, this._location);
        }
        if (this.opacity !== undefined && this.opacity > 0 && this.opacity < 1.0) {
            var o = c.globalAlpha;
            c.globalAlpha = this.opacity;
            if (res.image) {
                c.drawImage(res.image, this._location.x, this._location.y, this._size.width, this._size.height);
            }
            c.globalAlpha = o;
        }
        else if (res.image !== undefined) {
            try {
                c.drawImage(res.image, this._location.x, this._location.y, this._size.width, this._size.height);
            }
            catch (ignore) {
                console.log('Error rendering image in ImageElement.draw.');
            }
        }
        if (model.setElementStroke(c, this)) {
            c.strokeRect(this._location.x, this._location.y, this._size.width, this._size.height);
        }
        c.restore();
    };
    /**
     * Set image opacity
     * @param opacity - Image opacity in the range of 0-1
     * @returns This element
     */
    ImageElement.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        return this;
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    ImageElement.prototype.canStroke = function () {
        return true;
    };
    return ImageElement;
}(element_base_1.ElementBase));
exports.ImageElement = ImageElement;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var element_base_1 = __webpack_require__(3);
/**
 * Renders embedded or externally referenced model
 */
var ModelElement = /** @class */ (function (_super) {
    __extends(ModelElement, _super);
    function ModelElement() {
        var _this = _super.call(this, 'model') || this;
        _this.setOpacity = _this.setOpacity.bind(_this);
        _this.opacity = 1;
        return _this;
    }
    /**
     * Model element factory function
     * @param source - Model resource key or model resource to render
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param width - Width
     * @param height - Height
     * @returns New model element
     */
    ModelElement.create = function (source, x, y, width, height) {
        var e = new ModelElement();
        if (source !== undefined) {
            if (typeof source === 'string') {
                e.source = source;
            }
            else {
                e.source = source.key;
            }
            if (x !== undefined && y !== undefined) {
                e._location = new point_1.Point(x, y);
            }
            if (width !== undefined && height !== undefined) {
                e._size = new size_1.Size(width, height);
            }
        }
        return e;
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source object
     */
    ModelElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.source) {
            this.source = o.source;
        }
        if (o.opacity !== undefined) {
            this.opacity = o.opacity;
        }
        if (!this._location) {
            this._location = new point_1.Point(0, 0);
        }
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    ModelElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.source) {
            o.source = this.source;
        }
        if (this.opacity !== undefined && this.opacity !== 1) {
            o.opacity = this.opacity;
        }
        return o;
    };
    /**
     * Clones this model element to a new instance
     * @returns Cloned model element
     */
    ModelElement.prototype.clone = function () {
        var e = ModelElement.create();
        _super.prototype.cloneTo.call(this, e);
        if (this.source) {
            e.source = this.source;
        }
        if (this.opacity !== undefined) {
            e.opacity = this.opacity;
        }
        return e;
    };
    /**
     * Sets rendering opacity in the range of 0-1
     * @param opacity - Rendering opacity
     */
    ModelElement.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        return this;
    };
    /**
     * Registers referenced resources with resource manager
     * @param rm - Resource manager
     */
    ModelElement.prototype.registerResources = function (rm) {
        _super.prototype.registerResources.call(this, rm);
        if (this.source) {
            rm.register(this.source);
        }
    };
    /**
     * Returns list of referenced resource keys
     */
    ModelElement.prototype.getResourceKeys = function () {
        var keys = _super.prototype.getResourceKeys.call(this);
        if (this.source) {
            keys.push(this.source);
        }
        return keys;
    };
    /**
     * Render model element to canvas context
     * @param c - Rendering context
     */
    ModelElement.prototype.draw = function (c) {
        var model = this.model;
        var innerModel;
        innerModel = undefined;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this._location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        if (!this.sourceModel && this.source) {
            var res = model.resourceManager.get(this.source);
            innerModel = res.model;
        }
        else if (this.sourceModel) {
            innerModel = this.sourceModel;
        }
        if (!innerModel) {
            throw new Error("Model resource " + this.source + " could not be loaded.");
        }
        var x = this._location.x;
        var y = this._location.y;
        var w = 0;
        var h = 0;
        var rx = 1;
        var ry = 1;
        var size = innerModel.getSize();
        if (this._size && !this._size.equals(size_1.Size.Empty)) {
            w = this._size.width;
            h = this._size.height;
        }
        else if (size) {
            w = size.width;
            h = size.height;
        }
        if (size) {
            rx = w / size.width;
            ry = h / size.height;
        }
        // Clip to bounds
        /*
        c.save();
        c.rect(x, y, w, h);
        c.stroke();
        c.clip();
        */
        // If not full opacity, then render to intermediate canvas
        if (this.opacity !== undefined && this.opacity > 0 && this.opacity < 1.0) {
            var offscreen = document.createElement('canvas');
            offscreen.width = w;
            offscreen.height = h;
            var c2 = offscreen.getContext('2d');
            if (c2) {
                c2.scale(rx, ry);
                innerModel.renderToContext(c2);
            }
            c.save();
            c.globalAlpha = this.opacity;
            if (this.transform) {
                model.setRenderTransform(c, this.transform, new point_1.Point(x, y));
            }
            c.drawImage(offscreen, x, y);
            c.restore();
        }
        else {
            c.save();
            if (this.transform) {
                model.setRenderTransform(c, this.transform, new point_1.Point(x, y));
            }
            c.save();
            c.translate(x, y);
            if (rx !== 1 || ry !== 1) {
                c.scale(rx, ry);
            }
            innerModel.renderToContext(c);
            c.restore();
            c.restore();
        }
        // Restore from clip
        // c.restore();
    };
    return ModelElement;
}(element_base_1.ElementBase));
exports.ModelElement = ModelElement;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Polygon fill winding mode enumeration
 */
var WindingMode;
(function (WindingMode) {
    /**
     * Non-zero winding mode
     */
    WindingMode[WindingMode["NonZero"] = 1] = "NonZero";
    /**
     * Even/odd (alternate) winding mode
     */
    WindingMode[WindingMode["EvenOdd"] = 2] = "EvenOdd";
})(WindingMode = exports.WindingMode || (exports.WindingMode = {}));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var region_1 = __webpack_require__(7);
var size_1 = __webpack_require__(2);
var element_base_1 = __webpack_require__(3);
var invalid_index_exception_1 = __webpack_require__(21);
/**
 * Renders connected, stroked line segments between three or more points
 */
var PolylineElement = /** @class */ (function (_super) {
    __extends(PolylineElement, _super);
    function PolylineElement() {
        var _this = _super.call(this, 'polyline') || this;
        /**
         * True when in point editing mode
         */
        _this.editPoints = false;
        /**
         * True to smooth points
         */
        _this.smoothPoints = false;
        _this.addPoint = _this.addPoint.bind(_this);
        _this.getPoints = _this.getPoints.bind(_this);
        _this.setPoints = _this.setPoints.bind(_this);
        return _this;
    }
    /**
     * Polyline element factory function
     * @returns New polyline
     */
    PolylineElement.create = function () {
        var e = new PolylineElement();
        return e;
    };
    Object.defineProperty(PolylineElement.prototype, "points", {
        /**
         * Points get accessor as string. Serializes point array into string.
         * @returns Serialized point array
         */
        get: function () {
            if (!this._points) {
                return undefined;
            }
            else {
                var result = '';
                var isFirst = true;
                for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
                    var p = _a[_i];
                    if (isFirst) {
                        isFirst = false;
                    }
                    else {
                        result += ' ';
                    }
                    result += p.toString();
                }
                return result;
            }
        },
        /**
         * Points set accessor as string.  Parses serialized string of points.
         * @param pointString - Serialized point array
         */
        set: function (pointString) {
            if (!pointString) {
                this._points = undefined;
            }
            else {
                this._points = [];
                var parts = pointString.split(' ');
                for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                    var part = parts_1[_i];
                    this._points.push(point_1.Point.parse(part));
                }
            }
            this.bounds = undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets point array as either serialized points string or Point array.
     * @param pointsSource - Point source as either string of Point array
     * @return This polyline element
     */
    PolylineElement.prototype.setPoints = function (pointsSource) {
        if (typeof pointsSource === 'string') {
            this.points = pointsSource;
        }
        else {
            this._points = pointsSource.slice(0);
        }
        this.bounds = undefined;
        return this;
    };
    /**
     * Gets point array
     * @return Copy of internal points array
     */
    PolylineElement.prototype.getPoints = function () {
        if (this._points) {
            return this._points.slice(0);
        }
        else {
            return undefined;
        }
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source object
     */
    PolylineElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.points) {
            this.points = o.points;
        }
        if (o.smoothPoints) {
            this.smoothPoints = o.smoothPoints;
        }
        this.bounds = undefined;
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    PolylineElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        o.size = undefined;
        o.location = undefined;
        if (this.points) {
            o.points = this.points;
        }
        if (this.smoothPoints) {
            o.smoothPoints = this.smoothPoints;
        }
        return o;
    };
    /**
     * Clones this polyline element to a new instance
     * @returns Cloned polyline instance
     */
    PolylineElement.prototype.clone = function () {
        var e = PolylineElement.create();
        _super.prototype.cloneTo.call(this, e);
        if (this.points) {
            e.points = this.points;
        }
        if (this.smoothPoints) {
            e.smoothPoints = this.smoothPoints;
        }
        return e;
    };
    /**
     * Render polyline to canvas context
     * @param c - Rendering context
     */
    PolylineElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this._points) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, bounds.location);
        }
        c.beginPath();
        if (this.smoothPoints) {
            c.moveTo(this._points[0].x, this._points[0].y);
            var i = void 0;
            for (i = 1; i < this._points.length - 2; i++) {
                var xc = (this._points[i].x + this._points[i + 1].x) / 2;
                var yc = (this._points[i].y + this._points[i + 1].y) / 2;
                c.quadraticCurveTo(this._points[i].x, this._points[i].y, xc, yc);
            }
            c.lineCap = 'round';
            c.lineTo(this._points[i + 1].x, this._points[i + 1].y);
            // c.quadraticCurveTo(this._points[i].x, this._points[i].y, this._points[i+1].x, this._points[i+1].y);
        }
        else {
            c.moveTo(this._points[0].x, this._points[0].y);
            var pl = this._points.length;
            for (var i = 1; i < pl; i++) {
                var p = this._points[i];
                c.lineTo(p.x, p.y);
            }
        }
        if (model.setElementStroke(c, this)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Hit test polyline.  Return true if point is on polyline
     * @param c - Rendering context
     * @param tx - X coordinate of point
     * @param ty - Y coordinate of point
     * @returns True if point is on polyline
     */
    PolylineElement.prototype.hitTest = function (c, tx, ty) {
        var hit = false;
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this._points) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        c.save();
        if (this.transform) {
            this.model.setRenderTransform(c, this.transform, bounds.location);
        }
        c.beginPath();
        if (this.smoothPoints) {
            c.moveTo(this._points[0].x, this._points[0].y);
            var i = void 0;
            for (i = 1; i < this._points.length - 2; i++) {
                var xc = (this._points[i].x + this._points[i + 1].x) / 2;
                var yc = (this._points[i].y + this._points[i + 1].y) / 2;
                c.quadraticCurveTo(this._points[i].x, this._points[i].y, xc, yc);
            }
            c.quadraticCurveTo(this._points[i].x, this._points[i].y, this._points[i + 1].x, this._points[i + 1].y);
        }
        else {
            c.moveTo(this._points[0].x, this._points[0].y);
            var pl = this._points.length;
            for (var i = 1; i < pl; i++) {
                c.lineTo(this._points[i].x, this._points[i].y);
            }
        }
        hit = c.isPointInPath(tx, ty);
        c.restore();
        return hit;
    };
    /**
     * Returns string description of polyline
     * @returns Description
     */
    PolylineElement.prototype.toString = function () {
        if (this._points) {
            return this.type + ' -  ' + this._points.length + ' Points';
        }
        else {
            return this.type + ' -  0 Points';
        }
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    PolylineElement.prototype.canStroke = function () {
        return true;
    };
    /**
     * Polylines can be moved using mouse
     * @returns True
     */
    PolylineElement.prototype.canMove = function () {
        return true;
    };
    /**
     * Polylines can be sized unless in point editing mode
     * @returns True unless in point editing mode
     */
    PolylineElement.prototype.canResize = function () {
        if (this.editPoints) {
            return false;
        }
        return true;
    };
    /**
     * Polylines can be nudged with the keyboard
     * @returns True
     */
    PolylineElement.prototype.canNudge = function () {
        return true;
    };
    /**
     * Polylines support individual point movement when in point editing mode
     * @returns True if in point editing mode
     */
    PolylineElement.prototype.canMovePoint = function () {
        if (this.editPoints) {
            return true;
        }
        return false;
    };
    /**
     * Polylines support point editing mode
     * @returns True
     */
    PolylineElement.prototype.canEditPoints = function () {
        return true;
    };
    /**
     * Nudges size of polylinw by a given width and height offset
     * @param offsetX - X offset
     * @param offsetY - Y offset
     * @returns This polyline
     */
    PolylineElement.prototype.nudgeSize = function (offsetX, offsetY) {
        if (!this._points) {
            return this;
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newWidth = bounds.width + offsetX;
        if (newWidth < 1) {
            newWidth = 1;
        }
        var newHeight = bounds.height + offsetY;
        if (newHeight < 1) {
            newHeight = 1;
        }
        if (this.aspectLocked) {
            if (offsetX === 0) {
                this.scale(newHeight / bounds.height, newHeight / bounds.height);
            }
            else {
                this.scale(newWidth / bounds.width, newWidth / bounds.width);
            }
        }
        else {
            this.scale(newWidth / bounds.width, newHeight / bounds.height);
        }
        this.bounds = undefined;
        return this;
    };
    /**
     * Scales polyline points by given horizontal and vertical scaling factors
     * @param scaleX - Horizontal scaling factor
     * @param scaleY - Vertical scaling factor
     * @returns This polyline element
     */
    PolylineElement.prototype.scale = function (scaleX, scaleY) {
        if (!this._points) {
            return this;
        }
        var newPoints = [];
        var pl = this._points.length;
        var location = this.getLocation();
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            newPoints.push(point_1.Point.scale(point, scaleX, scaleY, location.x, location.y));
        }
        this._points = newPoints;
        this.bounds = undefined;
        return this;
    };
    /**
     * Moves this polyline element by the given X and Y offsets
     * @param offsetX - X size offset
     * @param offsetY - Y size offset
     * @returns This polyline
     */
    PolylineElement.prototype.translate = function (offsetX, offsetY) {
        if (!this._points) {
            return this;
        }
        var newPoints = [];
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            newPoints.push(point_1.Point.translate(point, offsetX, offsetY));
        }
        this._points = newPoints;
        this.bounds = undefined;
        return this;
    };
    /**
     * Computes (if undefined) and returns rectangular bounding region
     * @returns Polyline bounding region
     */
    PolylineElement.prototype.getBounds = function () {
        if (this.bounds) {
            return this.bounds;
        }
        if (!this._points) {
            return undefined;
        }
        var minX;
        var minY;
        var maxX;
        var maxY;
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var p = _a[_i];
            if (!minX) {
                minX = p.x;
            }
            else if (p.x < minX) {
                minX = p.x;
            }
            if (!minY) {
                minY = p.y;
            }
            else if (p.y < minY) {
                minY = p.y;
            }
            if (!maxX) {
                maxX = p.x;
            }
            else if (p.x > maxX) {
                maxX = p.x;
            }
            if (!maxY) {
                maxY = p.y;
            }
            else if (p.y > maxY) {
                maxY = p.y;
            }
        }
        if (minX !== undefined && minY !== undefined && maxX !== undefined && maxY !== undefined) {
            this.bounds = new region_1.Region(minX, minY, maxX - minX, maxY - minY);
            this._location = new point_1.Point(minX, minY);
            this._size = new size_1.Size(this.bounds.width, this.bounds.height);
            return this.bounds;
        }
        return undefined;
    };
    /**
     * Moves polyline
     * @param pointSource - New location
     * @returns This polyline
     */
    PolylineElement.prototype.setLocation = function (pointSource) {
        if (!this._points) {
            return this;
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var pt;
        if (typeof pointSource === 'string') {
            pt = point_1.Point.parse(pointSource);
        }
        else {
            pt = new point_1.Point(pointSource.x, pointSource.y);
        }
        var deltaX = pt.x - bounds.x;
        var deltaY = pt.y - bounds.y;
        this.translate(deltaX, deltaY);
        return this;
    };
    /**
     * Resizes polyline
     * @param size - New size
     * @returns This polyline
     */
    PolylineElement.prototype.setSize = function (sizeSource) {
        var size = size_1.Size.parse(sizeSource);
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var scaleX = size.width / bounds.width;
        var scaleY = size.height / bounds.height;
        this.scale(scaleX, scaleY);
        return this;
    };
    /**
     * Returns number of points in polyline
     * @returns Number of points
     */
    PolylineElement.prototype.pointCount = function () {
        if (this._points) {
            return this._points.length;
        }
        return 0;
    };
    /**
     * Returns point at a given index (0 to # points - 1)
     * @param index - Point index (0 to # points - 1)
     * @param depth - Not applicable
     * @returns Requested point
     */
    PolylineElement.prototype.getPointAt = function (index, depth) {
        if (!this._points) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        if (index >= 0 && index < this._points.length) {
            return this._points[index];
        }
        throw new invalid_index_exception_1.InvalidIndexException(index);
    };
    /**
     * Sets point at a given index (0 to # points - 1)
     * @param index - Point index (0 to # points - 1)
     * @param value - New point value
     * @param depth - Not applicable to this element
     */
    PolylineElement.prototype.setPointAt = function (index, value, depth) {
        if (!this._points) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        if (index >= 0 && index < this._points.length) {
            this._points[index] = value;
            this.bounds = undefined;
            return this;
        }
        throw new invalid_index_exception_1.InvalidIndexException(index);
    };
    /**
     * Adds a new point to this polyline
     * @param point - New point
     * @returns This polyline
     */
    PolylineElement.prototype.addPoint = function (point) {
        if (!this._points) {
            this._points = [];
        }
        this._points.push(point);
        this.bounds = undefined;
        return this;
    };
    return PolylineElement;
}(element_base_1.ElementBase));
exports.PolylineElement = PolylineElement;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var element_creation_props_1 = __webpack_require__(71);
var rectangle_element_1 = __webpack_require__(11);
var upload_completion_props_1 = __webpack_require__(72);
var upload_progress_props_1 = __webpack_require__(73);
var component_event_1 = __webpack_require__(49);
var component_props_1 = __webpack_require__(34);
/**
 * Element component template
 */
var Component = /** @class */ (function () {
    /**
     * @param name - Component name
     * @param props - Component properties
     */
    function Component(name, props) {
        /**
         * True if component accepts file drag and drop
         */
        this.acceptsDrag = false;
        /**
         * Initialized flag.  True after initialization
         */
        this.initialized = false;
        /**
         * Component element selection event
         */
        this.select = new component_event_1.ComponentEvent();
        /**
         * Component element deselection event
         */
        this.deselect = new component_event_1.ComponentEvent();
        /**
         * Component element drag enter event
         */
        this.dragEnter = new component_event_1.ComponentEvent();
        /**
         * Component element drag leave event
         */
        this.dragLeave = new component_event_1.ComponentEvent();
        /**
         * Component element size event
         */
        this.size = new component_event_1.ComponentEvent();
        /**
         * Component element upload start event
         */
        this.uploadStart = new component_event_1.ComponentEvent();
        /**
         * Component element upload complete event
         */
        this.uploadComplete = new component_event_1.ComponentEvent();
        /**
         * Component element upload progress event
         */
        this.uploadProgress = new component_event_1.ComponentEvent();
        this.CreateElement = this.CreateElement.bind(this);
        this.GetFillImage = this.GetFillImage.bind(this);
        this.onSize = this.onSize.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onDeselect = this.onDeselect.bind(this);
        this.onUploadStart = this.onUploadStart.bind(this);
        this.onUploadComplete = this.onUploadComplete.bind(this);
        this.onComponentUploadProgress = this.onComponentUploadProgress.bind(this);
        this.name = name;
        if (props.fill) {
            this.fill = props.fill;
        }
        if (props.stroke) {
            this.stroke = props.stroke;
        }
        if (props.selectedFill) {
            this.selectedFill = props.selectedFill;
        }
        if (props.selectedStroke) {
            this.selectedStroke = props.selectedStroke;
        }
        if (props.acceptsDrag) {
            this.acceptsDrag = props.acceptsDrag;
            if (props.fileExtensions) {
                this.fileExtensions = props.fileExtensions;
            }
            else {
                this.fileExtensions = ['*'];
            }
        }
        else {
            this.acceptsDrag = false;
        }
        if (props.initialize) {
            this.initialize = props.initialize;
        }
        this.initialized = props.initialized;
        if (props.create != null) {
            this.create = props.create;
        }
        if (props.setCreationFill) {
            this.setCreationFill = props.setCreationFill;
        }
        if (props.getFillImage) {
            this.getFillImage = props.getFillImage;
        }
        if (props.select.hasListeners()) {
            props.select.copyTo(this.select);
        }
        else {
            this.select.add(Component.defaultSelect);
        }
        if (props.deselect.hasListeners()) {
            props.deselect.copyTo(this.deselect);
        }
        else {
            this.deselect.add(Component.defaultDeselect);
        }
        if (props.dragEnter.hasListeners()) {
            props.dragEnter.copyTo(this.dragEnter);
        }
        else {
            this.dragEnter.add(Component.defaultDragEnter);
        }
        if (props.dragLeave.hasListeners()) {
            props.dragLeave.copyTo(this.dragLeave);
        }
        else {
            this.dragLeave.add(Component.defaultDragLeave);
        }
        if (props.size.hasListeners()) {
            props.size.copyTo(this.size);
        }
        if (props.uploadStart.hasListeners()) {
            props.uploadStart.copyTo(this.uploadStart);
        }
        if (props.uploadComplete.hasListeners()) {
            props.uploadComplete.copyTo(this.uploadComplete);
        }
        if (props.uploadProgress.hasListeners()) {
            props.uploadProgress.copyTo(this.uploadProgress);
        }
    }
    /**
     * Default component element selection handler
     * @param component - Component
     * @param el - Component element
     */
    Component.defaultSelect = function (component, el) {
        return;
    };
    /**
     * Default component element deselection handler
     * @param component - Component
     * @param el - Component element
     */
    Component.defaultDeselect = function (component, el) {
        return;
    };
    /**
     * Default component element drag enter handler
     * @param component - Component
     * @param args - Element drag args
     */
    Component.defaultDragEnter = function (component, args) {
        var el = args.element;
        if (!el.model) {
            return;
        }
        if (!el.id) {
            throw new Error(error_messages_1.ErrorMessages.ElementIdUndefined);
        }
        var mr = el.model.resourceManager.get(el.id);
        var model = mr.model;
        if (!model) {
            return;
        }
        var size = model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        model.setStroke(undefined);
        var dragRect = model.elementWithId('dragrect');
        if (!dragRect) {
            dragRect = rectangle_element_1.RectangleElement.create(0, 0, size.width, size.height)
                .setStroke('#88ff0000,9')
                .setFill('#88ffd700')
                .addTo(model);
            dragRect.id = 'dragrect';
        }
    };
    /**
     * Default component element drag leave handler
     * @param component - Component
     * @param args - Element drag args
     */
    Component.defaultDragLeave = function (component, args) {
        var el = args.element;
        if (!el.model || !el.id) {
            return;
        }
        var mr = el.model.resourceManager.get(el.id);
        var model = mr.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        model.setStroke('Black');
        var dragRect = model.elementWithId('dragrect');
        if (dragRect) {
            model.remove(dragRect);
        }
    };
    /**
     * Creates a component element
     * @param model - Target model for new component element
     * @param id - New element id
     * @param left - X coordinate
     * @param top - Y coordinate
     * @param width - Width
     * @param height - Height
     * @param props - Extra element properties
     */
    Component.prototype.CreateElement = function (model, id, left, top, width, height, props) {
        var el = null;
        if (this.create) {
            el = this.create(new element_creation_props_1.ElementCreationProps(model, id, left, top, width, height, props));
        }
        else {
            var elProps = new element_creation_props_1.ElementCreationProps(model, id, left, top, width, height, props);
            var componentProps = new component_props_1.ComponentProps();
            el = componentProps.defaultCreate(elProps);
            model.add(el);
        }
        el.id = id;
        if (this.acceptsDrag) {
            el.acceptsDrag = true;
        }
        el.component = this;
        if (props) {
            el.props = props;
        }
        return el;
    };
    /**
     * Fill image provider function
     * @param callback - Image provider callback function (image: HTMLImageElement)
     */
    Component.prototype.GetFillImage = function (callback) {
        if (this.getFillImage) {
            this.getFillImage(callback);
        }
    };
    /**
     * Triggers component element size handler
     * @param props - Element size props
     */
    Component.prototype.onSize = function (props) {
        this.size.trigger(this, props);
    };
    /**
     * Triggers component element selection handler
     * @param el - Element being selected
     */
    Component.prototype.onSelect = function (el) {
        this.select.trigger(this, el);
    };
    /**
     * Triggers component element deselection handler
     * @param el - Element being deselected
     */
    Component.prototype.onDeselect = function (el) {
        this.deselect.trigger(this, el);
    };
    /**
     * Triggers component element upload start handler
     * @param el - Element with upload starting
     */
    Component.prototype.onUploadStart = function (el) {
        this.uploadStart.trigger(this, el);
    };
    /**
     * Triggers component element upload completion handler
     * @param el - Element with upload completed
     * @param success - Upload completion status
     */
    Component.prototype.onUploadComplete = function (el, success) {
        if (this.uploadComplete.hasListeners()) {
            this.uploadComplete.trigger(this, new upload_completion_props_1.UploadCompletionProps(el, success));
        }
    };
    /**
     * Triggers component element upload progress handler
     * @param el - Element with upload progressing
     * @param percent - Percent of upload complete
     */
    Component.prototype.onComponentUploadProgress = function (el, percent) {
        if (this.uploadProgress.hasListeners()) {
            this.uploadProgress.trigger(this, new upload_progress_props_1.UploadProgressProps(el, percent));
        }
    };
    return Component;
}());
exports.Component = Component;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(4);
var model_resource_1 = __webpack_require__(35);
var component_element_1 = __webpack_require__(25);
var component_event_1 = __webpack_require__(49);
/**
 * Describes element component creation properties
 */
var ComponentProps = /** @class */ (function () {
    function ComponentProps() {
        /**
         * True if component accepts file drag and drop
         */
        this.acceptsDrag = false;
        /**
         * Initialized flag.  True after initialization
         */
        this.initialized = false;
        /**
         * Component element selection event
         */
        this.select = new component_event_1.ComponentEvent();
        /**
         * Component element deselection event
         */
        this.deselect = new component_event_1.ComponentEvent();
        /**
         * Component element drag enter event
         */
        this.dragEnter = new component_event_1.ComponentEvent();
        /**
         * Component element drag leave event
         */
        this.dragLeave = new component_event_1.ComponentEvent();
        /**
         * Component element size event
         */
        this.size = new component_event_1.ComponentEvent();
        /**
         * Component element upload start event
         */
        this.uploadStart = new component_event_1.ComponentEvent();
        /**
         * Component element upload complete event
         */
        this.uploadComplete = new component_event_1.ComponentEvent();
        /**
         * Component element upload progress event
         */
        this.uploadProgress = new component_event_1.ComponentEvent();
        this.defaultCreate = this.defaultCreate.bind(this);
        this.defaultResize = this.defaultResize.bind(this);
        this.defaultSelect = this.defaultSelect.bind(this);
        this.defaultDeselect = this.defaultDeselect.bind(this);
    }
    /**
     * Default element creation function for elements with simple properties
     * @param props - Element creation props
     * @returns New component element
     */
    ComponentProps.prototype.defaultCreate = function (props) {
        var m = model_1.Model.create(props.width, props.height);
        if (this.stroke !== undefined) {
            m.stroke = this.stroke;
        }
        else {
            m.stroke = ComponentProps.standardStroke;
        }
        if (this.fill !== undefined) {
            m.fill = this.fill;
        }
        else {
            m.fill = ComponentProps.standardFill;
        }
        model_resource_1.ModelResource.create(props.id, m).addTo(props.model);
        var el = new component_element_1.ComponentElement(props.id, props.left, props.top, props.width, props.height);
        props.model.add(el);
        return el;
    };
    /**
     * Default element resizing function for elements with simple properties
     * @param component - Component
     * @param props - Element resizing properties
     */
    ComponentProps.prototype.defaultResize = function (c, props) {
        if (!props.element || !props.element.model || !props.element.id) {
            return;
        }
        var res = props.element.model.resourceManager.get(props.element.id);
        if (res.model) {
            res.model.setSize(props.size);
        }
    };
    ComponentProps.prototype.defaultSelect = function (c, el) {
        if (!el.model || !el.id) {
            return;
        }
        var resource = el.model.resourceManager.get(el.id);
        var model = resource.model;
        if (!model) {
            return;
        }
        if (c.selectedFill) {
            model.fill = c.selectedFill;
        }
        if (c.selectedStroke) {
            model.stroke = c.selectedStroke;
        }
    };
    ComponentProps.prototype.defaultDeselect = function (c, el) {
        if (!el.model || !el.id) {
            return;
        }
        var resource = el.model.resourceManager.get(el.id);
        var model = resource.model;
        if (!model) {
            return;
        }
        model.fill = c.fill;
        model.stroke = c.stroke;
    };
    /**
     * Standard element creation fill (default - Half transparent Gold #7fffd700)
     */
    ComponentProps.standardFill = '#7fffd700';
    /**
     * Standard element creation stroke (default - Solid Red)
     */
    ComponentProps.standardStroke = 'Red';
    return ComponentProps;
}());
exports.ComponentProps = ComponentProps;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var model_1 = __webpack_require__(4);
var size_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(5);
var resource_1 = __webpack_require__(36);
var resource_factory_1 = __webpack_require__(18);
/**
 * Embedded or externally referenced model resource
 */
var ModelResource = /** @class */ (function (_super) {
    __extends(ModelResource, _super);
    function ModelResource() {
        return _super.call(this, 'model') || this;
    }
    /**
     * Creates model resource from string model URI (referenced) or exising model object (embedded)
     * @param key - Resource key
     * @param uriOrModel - Model URI or existing model object
     * @param locale - Optional resource locale ID (e.g. en-US)
     * @returns New model resource
     */
    ModelResource.create = function (key, uriOrModel, locale) {
        var r = new ModelResource();
        if (arguments.length >= 2) {
            r.key = key;
            if (typeof uriOrModel === 'string') {
                r.uri = uriOrModel;
            }
            else {
                r.model = uriOrModel.clone();
            }
        }
        if (locale) {
            r.locale = locale;
        }
        return r;
    };
    /**
     * Clones this resource to a new instance
     * @returns Cloned model resource
     */
    ModelResource.prototype.clone = function () {
        var o;
        if (!this.key) {
            throw new Error(error_messages_1.ErrorMessages.ResourceKeyIsUndefined);
        }
        if (this.model) {
            o = ModelResource.create(this.key, this.model, this.locale);
        }
        else if (this.uri) {
            o = ModelResource.create(this.key, this.uri, this.locale);
        }
        if (!o) {
            throw new Error(error_messages_1.ErrorMessages.ResourceIsInvalid);
        }
        _super.prototype.cloneTo.call(this, o);
        if (this.size) {
            o.size = this.size;
        }
        return o;
    };
    /**
     * Copies properties of another model resource
     * @param o - Source model resource
     */
    ModelResource.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.model) {
            this.model = model_1.Model.parse(JSON.stringify(o.model));
        }
        if (o.size) {
            this.size = size_1.Size.parse(o.size);
        }
    };
    /**
     * Serializes resource to a new instance
     * @returns Serialized resource instance
     */
    ModelResource.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.model && !this.uri) {
            o.model = JSON.parse(JSON.stringify(this.model.serialize()));
        }
        if (this.size) {
            o.size = this.size.toString();
        }
        return o;
    };
    /**
     * Retrieves model resource from an http(s) source
     * @param url - Model source URL
     * @param callback - Retrieval callback (result: boolean)
     */
    ModelResource.prototype.load = function (url, callback) {
        var res = this;
        if (!res.resourceManager) {
            throw new Error(error_messages_1.ErrorMessages.ResourceManagerIsUndefined);
        }
        if (!res.resourceManager.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!res.resourceManager.model.basePath) {
            throw new Error(error_messages_1.ErrorMessages.ModelBasePathUndefined);
        }
        var basePath = res.resourceManager.model.basePath;
        var relUrl = url.substring(basePath.length, url.length);
        model_1.Model.load(basePath, relUrl, function (model) {
            if (model && res.resourceManager) {
                res.model = model;
                res.model.prepareResources(res.resourceManager.currentLocaleId, function () {
                    callback(true);
                });
            }
            else {
                callback(false);
            }
        });
    };
    ModelResource.prototype.initialize = function () {
        var self = this;
        if (!self.resourceManager) {
            throw new Error(error_messages_1.ErrorMessages.ResourceManagerIsUndefined);
        }
        // If embedded model, no need to retrieve, but init resources
        if (this.model && self.resourceManager.model) {
            this.model.basePath = self.resourceManager.model.basePath;
            this.model.prepareResources(self.resourceManager.currentLocaleId, function (success) {
                if (self.resourceManager) {
                    self.resourceManager.unregister(self, success);
                }
            });
        }
        else {
            // Get model source URI
            var modelPath = this.uri;
            if (!modelPath) {
                throw new Error(error_messages_1.ErrorMessages.ModelPathUndefined);
            }
            // Local (Server) Model
            if (modelPath.charAt(0) === ':') {
                var url = modelPath.substring(1, modelPath.length);
                this.load(url, function (success) {
                    if (self.resourceManager) {
                        self.resourceManager.unregister(self, success);
                    }
                });
            }
            else if (modelPath.charAt(0) === '/') {
                // Shared model resource relative to model base path
                if (self.resourceManager && self.resourceManager.model && self.resourceManager.model.basePath) {
                    this.load(utility_1.Utility.joinPaths(self.resourceManager.model.basePath, modelPath), function (success) {
                        if (self.resourceManager) {
                            self.resourceManager.unregister(self, success);
                        }
                    });
                }
            }
            else {
                // Embedded model resource
                if (self.resourceManager && self.resourceManager.localResourcePath) {
                    self.load(utility_1.Utility.joinPaths(self.resourceManager.localResourcePath, modelPath), function (success) {
                        if (self.resourceManager) {
                            self.resourceManager.unregister(self, success);
                        }
                    });
                }
            }
        }
    };
    return ModelResource;
}(resource_1.Resource));
exports.ModelResource = ModelResource;
/* Register type creator */
resource_factory_1.ResourceFactory.registerCreator('model', ModelResource);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var resource_factory_1 = __webpack_require__(18);
/**
 * Base class for model resources
 */
var Resource = /** @class */ (function () {
    /**
     * Resource base class
     */
    function Resource(type) {
        /**
         * True if registered for retrieval
         */
        this.registered = false;
        /**
         * True if downloaded and available
         */
        this.available = false;
        /**
         * True if error during retrieval
         */
        this.error = false;
        this.type = type;
        this.clone = this.clone.bind(this);
        this.cloneTo = this.cloneTo.bind(this);
        this.parse = this.parse.bind(this);
        this.serialize = this.serialize.bind(this);
        this.load = this.load.bind(this);
        this.matchesFull = this.matchesFull.bind(this);
        this.matchesGeneric = this.matchesGeneric.bind(this);
        this.matchesKey = this.matchesKey.bind(this);
        this.matchesLanguage = this.matchesLanguage.bind(this);
    }
    /**
     * Clones this resource to a new instance
     * @returns Cloned resource instance
     */
    Resource.prototype.clone = function () {
        var o = resource_factory_1.ResourceFactory.create(this.type);
        if (!o) {
            throw new Error(error_messages_1.ErrorMessages.InvalidResourceType + ': ' + this.type);
        }
        this.cloneTo(o);
        return o;
    };
    /**
     * Clones properties of this resource to another resource
     * @param o - Target resource for property copy
     */
    Resource.prototype.cloneTo = function (o) {
        if (this.type) {
            o.type = this.type;
        }
        if (this.key) {
            o.key = this.key;
        }
        if (this.locale) {
            o.locale = this.locale;
        }
        if (this.uri) {
            o.uri = this.uri;
        }
    };
    /**
     * Clones properties from another resource to this resource
     * @param o - Source resource for property copy
     */
    Resource.prototype.parse = function (o) {
        if (o.key) {
            this.key = o.key;
        }
        if (o.locale) {
            this.locale = o.locale;
        }
        if (o.uri) {
            this.uri = o.uri;
        }
    };
    /**
     * Clones serializable properties from this resource to a new resource
     * @returns Serialized resource instance
     */
    Resource.prototype.serialize = function () {
        var o = {};
        o.type = this.type;
        if (this.key) {
            o.key = this.key;
        }
        if (this.locale) {
            o.locale = this.locale;
        }
        if (this.uri) {
            o.uri = this.uri;
        }
        return o;
    };
    /**
     * Retrieves a resource from an http(s) source
     * @param url - Resource source URL
     * @param callback - Retrieval callback (result: boolean)
     */
    Resource.prototype.load = function (url, callback) {
        if (callback) {
            callback(true);
        }
    };
    /**
     * Determines if this resource fully matches a request for a desired localized
     * resource including key and locale (e.g. en-US)
     * @param key - Resource key
     * @param locale - Desired resource locale identifier
     * @returns True if both key and locale id match
     */
    Resource.prototype.matchesFull = function (key, locale) {
        if (!this.key) {
            return false;
        }
        if (this.key.toLowerCase() !== key.toLowerCase()) {
            return false;
        }
        if (this.locale && locale) {
            return this.locale.toLowerCase() === locale.toLowerCase();
        }
        return false;
    };
    /**
     * Determines if this resource matches a request for a desired localized
     * resource including key and language part of locale ID (e.g. en part of en-US)
     * @param key - Resource key
     * @param language - Desired resource locale identifier
     * @returns True if both key and language of requested locale match
     */
    Resource.prototype.matchesLanguage = function (key, language) {
        if (!this.key) {
            return false;
        }
        if (this.key.toLowerCase() !== key.toLowerCase()) {
            return false;
        }
        if (this.locale && language) {
            return this.locale.toLowerCase().slice(0, language.length + 1) === language.toLowerCase() + '-';
        }
        return false;
    };
    /**
     * Determines if this resource matches a request for a desired
     * resource key and is a generic resource without a locale designation
     * @param key - Resource key
     * @returns True if key matches resource request and resource is generic
     */
    Resource.prototype.matchesGeneric = function (key) {
        if (!this.key) {
            return false;
        }
        if (this.key.toLowerCase() !== key.toLowerCase()) {
            return false;
        }
        if (!this.locale || this.locale === null) {
            return true;
        }
        return false;
    };
    /**
     * Determines if this resource matches a request for a desired
     * resource key regardless of requested locale or resource locale
     * @param key - Resource key
     * @returns True if key matches resource request
     */
    Resource.prototype.matchesKey = function (key) {
        if (!this.key) {
            return false;
        }
        return this.key.toLowerCase() === key.toLowerCase();
    };
    Resource.prototype.addTo = function (model) {
        model.resourceManager.merge(this);
        return this;
    };
    return Resource;
}());
exports.Resource = Resource;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(5);
/**
 * Base class for surface elements
 */
var SurfaceElement = /** @class */ (function () {
    /**
     * @param id - Item id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     */
    function SurfaceElement(id, left, top, width, height) {
        if (id) {
            this.id = id;
        }
        else {
            this.id = utility_1.Utility.guid();
        }
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }
    /**
     * Adds item to surface model
     * @param model - Surface model
     */
    SurfaceElement.prototype.addToModel = function (model) {
        return undefined;
    };
    return SurfaceElement;
}());
exports.SurfaceElement = SurfaceElement;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes current state of surface element
 */
var SurfaceElementStates = /** @class */ (function () {
    function SurfaceElementStates() {
    }
    SurfaceElementStates.NORMAL = 'normal';
    SurfaceElementStates.SELECTED = 'selected';
    SurfaceElementStates.HIGHLIGHTED = 'highlighted';
    SurfaceElementStates.DISABLED = 'disabled';
    return SurfaceElementStates;
}());
exports.SurfaceElementStates = SurfaceElementStates;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementCommand = /** @class */ (function () {
    /**
     * Describes an element command and optional parameter
     * @param name - Command name
     * @param parameter - Command parameter
     */
    function ElementCommand(name, parameter) {
        this.name = name;
        this.parameter = parameter;
    }
    /**
     * Parses string into element command
     * @param commandString - Command string
     * @returns Parsed element command
     */
    ElementCommand.parse = function (commandString) {
        if (commandString.indexOf('(') !== -1) {
            var commandName = commandString.substring(0, commandString.indexOf('('));
            var commandParameter = commandString.substring(commandString.indexOf('(') + 1, commandString.length - 1);
            return new ElementCommand(commandName, commandParameter);
        }
        return new ElementCommand(commandString, '');
    };
    return ElementCommand;
}());
exports.ElementCommand = ElementCommand;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerEvent = /** @class */ (function () {
    function ControllerEvent() {
        this.handlers = [];
    }
    ControllerEvent.prototype.add = function (handler) {
        this.handlers.push(handler);
    };
    ControllerEvent.prototype.remove = function (handler) {
        var index = this.handlers.indexOf(handler);
        if (index > -1) {
            this.handlers.splice(index, 1);
        }
    };
    ControllerEvent.prototype.hasListeners = function () {
        return this.handlers.length > 0;
    };
    ControllerEvent.prototype.clear = function () {
        this.handlers.splice(0, this.handlers.length);
    };
    ControllerEvent.prototype.trigger = function (c, data) {
        this.handlers.slice(0).forEach(function (h) { return h(c, data); });
    };
    return ControllerEvent;
}());
exports.ControllerEvent = ControllerEvent;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates a location in event parameters
 */
var LocationArgs = /** @class */ (function () {
    /**
     * @param location - Location
     */
    function LocationArgs(location) {
        this.location = location;
    }
    return LocationArgs;
}());
exports.LocationArgs = LocationArgs;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Centralized logging support
 */
var Logging = /** @class */ (function () {
    function Logging() {
    }
    Logging.add = function (handler) {
        Logging.handlers.push(handler);
    };
    Logging.remove = function (handler) {
        var index = Logging.handlers.indexOf(handler);
        if (index > -1) {
            Logging.handlers.splice(index, 1);
        }
    };
    Logging.hasListeners = function () {
        return Logging.handlers.length > 0;
    };
    Logging.clear = function () {
        Logging.handlers.splice(0, Logging.handlers.length);
    };
    Logging.log = function (message) {
        if (Logging.enabled && Logging.hasListeners) {
            for (var _i = 0, _a = Logging.handlers; _i < _a.length; _i++) {
                var handler = _a[_i];
                handler(message);
            }
            console.log(message);
        }
    };
    Logging.enabled = false;
    Logging.handlers = [];
    return Logging;
}());
exports.Logging = Logging;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a radial or linear gradient color fill stop
 */
var GradientFillStop = /** @class */ (function () {
    /**
     * @param color - Stop color represented as a string
     * @param offset - Stop offset in the range of 0 to 1
     */
    function GradientFillStop(color, offset) {
        this.color = color;
        this.offset = offset;
    }
    /**
     * Clones gradient stop collection
     * @param stops Stops to clone
     */
    GradientFillStop.cloneStops = function (stops) {
        var cloned = [];
        for (var _i = 0, stops_1 = stops; _i < stops_1.length; _i++) {
            var stop_1 = stops_1[_i];
            cloned.push(stop_1.clone());
        }
        return cloned;
    };
    /**
     * Fill stop factory function
     * @param color - Stop color represented as a string
     * @param offset - Stop offset in the range of 0 to 1
     * @returns New fill stop
     */
    GradientFillStop.create = function (color, offset) {
        return new GradientFillStop(color, offset);
    };
    GradientFillStop.prototype.clone = function () {
        var stop = new GradientFillStop(this.color, this.offset);
        return stop;
    };
    return GradientFillStop;
}());
exports.GradientFillStop = GradientFillStop;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var region_1 = __webpack_require__(7);
var fill_factory_1 = __webpack_require__(8);
var element_base_1 = __webpack_require__(3);
/**
 * Renders stroked and/or filled ellipse element
 */
var EllipseElement = /** @class */ (function (_super) {
    __extends(EllipseElement, _super);
    function EllipseElement() {
        var _this = _super.call(this, 'ellipse') || this;
        _this.getCenter = _this.getCenter.bind(_this);
        _this.setCenter = _this.setCenter.bind(_this);
        return _this;
    }
    /**
     * Ellipse element factory function
     * @param x - Center point x coordinate
     * @param y - Center point y coordinate
     * @param rx - Horizontal radius
     * @param ry - Vertical radius
     * @returns New ellipse element
     */
    EllipseElement.create = function (x, y, rx, ry) {
        var e = new EllipseElement();
        if (x !== undefined && y !== undefined && rx !== undefined && ry !== undefined) {
            e._center = new point_1.Point(x, y);
            e.radiusX = rx;
            e.radiusY = ry;
        }
        else if (x !== undefined && y !== undefined && rx !== undefined) {
            e._center = new point_1.Point(x, y);
            e.radiusX = rx;
            e.radiusY = rx;
        }
        return e;
    };
    Object.defineProperty(EllipseElement.prototype, "center", {
        /**
         * Center point get accessor as string
         */
        get: function () {
            if (!this._center) {
                return undefined;
            }
            else {
                return this._center.toString();
            }
        },
        /**
         * Center point set accessor as string
         * @param newValue - New center point as string
         */
        set: function (newValue) {
            if (!newValue) {
                this._center = undefined;
            }
            else {
                this._center = point_1.Point.parse(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Center point get accessor as Point
     * @returns Center point
     */
    EllipseElement.prototype.getCenter = function () {
        return this._center;
    };
    /**
     * Center point set accessor as string or Point
     * @param pointSource - Center point as string or Point
     */
    EllipseElement.prototype.setCenter = function (pointSource) {
        if (pointSource) {
            this._center = point_1.Point.parse(pointSource);
        }
        else {
            this._center = undefined;
        }
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source object
     */
    EllipseElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.center) {
            this._center = point_1.Point.parse(o.center);
        }
        if (o.radiusX !== undefined) {
            this.radiusX = o.radiusX;
        }
        if (o.radiusY !== undefined) {
            this.radiusY = o.radiusY;
        }
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    EllipseElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this._center) {
            o.center = this._center.toString();
        }
        if (this.radiusX !== undefined) {
            o.radiusX = this.radiusX;
        }
        if (this.radiusY !== undefined) {
            o.radiusY = this.radiusY;
        }
        return o;
    };
    /**
     * Clones this ellipse element to a new instance
     * @returns Cloned ellipse element
     */
    EllipseElement.prototype.clone = function () {
        var e = EllipseElement.create();
        _super.prototype.cloneTo.call(this, e);
        if (this._center) {
            e.center = this._center.toString();
        }
        if (this.radiusX !== undefined) {
            e.radiusX = this.radiusX;
        }
        if (this.radiusY !== undefined) {
            e.radiusY = this.radiusY;
        }
        return e;
    };
    /**
     * Render ellipse element to canvas context
     * @param c - Rendering context
     */
    EllipseElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (this._center === undefined || this.radiusX === undefined || this.radiusY === undefined) {
            throw new Error(error_messages_1.ErrorMessages.PointsAreInvalid);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, new point_1.Point(this._center.x - this.radiusX, this._center.y - this.radiusY));
        }
        var scaleY = this.radiusY / this.radiusX;
        c.save();
        c.beginPath();
        c.translate(this._center.x, this._center.y);
        c.scale(1.0, scaleY);
        c.arc(0, 0, this.radiusX, 0, Math.PI * 2, false);
        c.closePath();
        c.restore();
        if (fill_factory_1.FillFactory.setElementFill(c, this)) {
            var loc = this.getLocation();
            if (loc) {
                if (this.fillOffsetX || this.fillOffsetY) {
                    var fillOffsetX = this.fillOffsetX || 0;
                    var fillOffsetY = this.fillOffsetY || 0;
                    c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                    c.fill();
                    c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
                }
                else {
                    c.translate(loc.x, loc.y);
                    c.fill();
                    c.translate(-loc.x, -loc.y);
                }
            }
        }
        if (model.setElementStroke(c, this)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Hit test ellipse element.  Return true if point is within ellipse interior
     * @param c - Rendering context
     * @param tx - X coordinate of point
     * @param ty - Y coordinate of point
     * @returns True if point is within ellipse
     */
    EllipseElement.prototype.hitTest = function (c, tx, ty) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (this._center === undefined || this.radiusX === undefined || this.radiusY === undefined) {
            throw new Error(error_messages_1.ErrorMessages.PointsAreInvalid);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, new point_1.Point(this._center.x - this.radiusX, this._center.y - this.radiusY));
        }
        var scaleY = this.radiusY / this.radiusX;
        c.save();
        c.beginPath();
        c.translate(this._center.x, this._center.y);
        c.scale(1.0, scaleY);
        c.arc(0, 0, this.radiusX, 0, Math.PI * 2, false);
        c.closePath();
        var hit = c.isPointInPath(tx, ty);
        c.restore();
        c.restore();
        return hit;
    };
    /**
     * Returns string description of ellipse element
     * @returns Description
     */
    EllipseElement.prototype.toString = function () {
        if (this._center === undefined || this.radiusX === undefined || this.radiusX === undefined) {
            throw new Error(error_messages_1.ErrorMessages.PointsAreInvalid);
        }
        return (this.type +
            ' - c(' +
            this._center.x +
            ',' +
            this._center.y +
            '), rx:' +
            this.radiusX +
            ', ry:' +
            this.radiusY);
    };
    /**
     * Nudges size of ellipse element by a given width and height offset
     * @param offsetX - Width adjustment
     * @param offsetY - Height adjustment
     * @returns This ellipse element
     */
    EllipseElement.prototype.nudgeSize = function (offsetX, offsetY) {
        if (!this.radiusX || !this.radiusY) {
            return this;
        }
        var newRadiusX = this.radiusX + offsetX / 2;
        if (newRadiusX < 0) {
            newRadiusX = 0;
        }
        var newRadiusY = this.radiusY + offsetY / 2;
        if (newRadiusY < 0) {
            newRadiusY = 0;
        }
        this.radiusX = newRadiusX;
        this.radiusY = newRadiusY;
        return this;
    };
    /**
     * Scales ellipse element by given horizontal and vertical scaling factors
     * @param scaleX - Horizontal scaling factor
     * @param scaleY - Vertical scaling factor
     * @returns This ellipse element
     */
    EllipseElement.prototype.scale = function (scaleX, scaleY) {
        if (this.radiusX === undefined || this.radiusY === undefined || this._center === undefined) {
            throw new Error(error_messages_1.ErrorMessages.PointsAreInvalid);
        }
        this.radiusX *= scaleX;
        this.radiusY *= scaleY;
        this._center = point_1.Point.scale(this._center, scaleX, scaleY);
        return this;
    };
    /**
     * Moves this ellipse element by the given X and Y offsets
     * @param offsetX - X size offset
     * @param offsetY - Y size offset
     * @returns This ellipse element
     */
    EllipseElement.prototype.translate = function (offsetX, offsetY) {
        if (!this._center) {
            return this;
        }
        this._center = point_1.Point.translate(this._center, offsetX, offsetY);
        return this;
    };
    /**
     * Return rectangular bounding region
     * @returns Ellipse element bounding region
     */
    EllipseElement.prototype.getBounds = function () {
        if (!this.radiusX || !this.radiusY || !this._center) {
            return undefined;
        }
        var x = this._center.x - this.radiusX;
        var y = this._center.y - this.radiusY;
        return new region_1.Region(x, y, this.radiusX * 2, this.radiusY * 2);
    };
    /**
     * Moves ellipse element
     * @param point - New location
     * @returns This ellipse element
     */
    EllipseElement.prototype.setLocation = function (point) {
        if (this.radiusX !== undefined && this.radiusY !== undefined) {
            this._center = new point_1.Point(point.x + this.radiusX, point.y + this.radiusY);
        }
        return this;
    };
    /**
     * Resizes ellipse element
     * @param size - New size
     * @returns This ellipse element
     */
    EllipseElement.prototype.setSize = function (size) {
        if (this.radiusX === undefined || this.radiusY === undefined || this._center === undefined) {
            throw new Error(error_messages_1.ErrorMessages.PointsAreInvalid);
        }
        var x = this._center.x - this.radiusX;
        var y = this._center.y - this.radiusY;
        this.radiusX = size.width / 2;
        this.radiusY = size.height / 2;
        this._center = new point_1.Point(x + this.radiusX, y + this.radiusY);
        return this;
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    EllipseElement.prototype.canStroke = function () {
        return true;
    };
    /**
     * Can element be filled
     * @returns Can fill
     */
    EllipseElement.prototype.canFill = function () {
        return true;
    };
    return EllipseElement;
}(element_base_1.ElementBase));
exports.EllipseElement = EllipseElement;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var region_1 = __webpack_require__(7);
var size_1 = __webpack_require__(2);
var winding_mode_1 = __webpack_require__(31);
var fill_factory_1 = __webpack_require__(8);
var element_base_1 = __webpack_require__(3);
var invalid_index_exception_1 = __webpack_require__(21);
/**
 * Renders connected, stroked and/or filled line segments between three or more points
 */
var PolygonElement = /** @class */ (function (_super) {
    __extends(PolygonElement, _super);
    function PolygonElement() {
        var _this = _super.call(this, 'polygon') || this;
        /**
         * True when in point editing mode
         */
        _this.editPoints = false;
        _this.addPoint = _this.addPoint.bind(_this);
        _this.getPoints = _this.getPoints.bind(_this);
        _this.setPoints = _this.setPoints.bind(_this);
        _this.setWinding = _this.setWinding.bind(_this);
        return _this;
    }
    /**
     * Polygon element factory function
     * @returns New polygon
     */
    PolygonElement.create = function () {
        var e = new PolygonElement();
        return e;
    };
    Object.defineProperty(PolygonElement.prototype, "points", {
        /**
         * Points get accessor as string. Serializes point array into string.
         * @returns Serialized point array
         */
        get: function () {
            if (!this._points) {
                return undefined;
            }
            else {
                var result = '';
                var isFirst = true;
                for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
                    var p = _a[_i];
                    if (isFirst) {
                        isFirst = false;
                    }
                    else {
                        result += ' ';
                    }
                    result += p.toString();
                }
                return result;
            }
        },
        /**
         * Points set accessor as string.  Parses serialized string of points.
         * @param pointString - Serialized point array
         */
        set: function (pointString) {
            if (!pointString) {
                this._points = undefined;
            }
            else {
                this._points = [];
                var parts = pointString.split(' ');
                for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                    var part = parts_1[_i];
                    this._points.push(point_1.Point.parse(part));
                }
            }
            this.bounds = undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets point array as either serialized points string or Point array.
     * @param pointsSource - Point source as either string of Point array
     * @return This polygon element
     */
    PolygonElement.prototype.setPoints = function (pointsSource) {
        if (typeof pointsSource === 'string') {
            this.points = pointsSource;
        }
        else {
            this._points = pointsSource.slice(0);
        }
        this.bounds = undefined;
        return this;
    };
    /**
     * Gets point array
     * @return Copy of internal points array
     */
    PolygonElement.prototype.getPoints = function () {
        if (this._points) {
            return this._points.slice(0);
        }
        else {
            return undefined;
        }
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source object
     */
    PolygonElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.points) {
            this.points = o.points;
        }
        if (o.winding) {
            this.winding = o.winding;
        }
        this.bounds = undefined;
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    PolygonElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        o.size = undefined;
        o.location = undefined;
        if (this.points) {
            o.points = this.points;
        }
        if (this.winding && this.winding === winding_mode_1.WindingMode.EvenOdd) {
            o.winding = this.winding;
        }
        return o;
    };
    /**
     * Clones this polygon element to a new instance
     * @returns Cloned polygon instance
     */
    PolygonElement.prototype.clone = function () {
        var e = PolygonElement.create();
        _super.prototype.cloneTo.call(this, e);
        if (this.points) {
            e.points = this.points;
        }
        if (this.winding) {
            e.winding = this.winding;
        }
        return e;
    };
    /**
     * Render polygon to canvas context
     * @param c - Rendering context
     */
    PolygonElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this._points) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, bounds.location);
        }
        c.beginPath();
        c.moveTo(this._points[0].x, this._points[0].y);
        var pl = this._points.length;
        for (var i = 1; i < pl; i++) {
            var p = this._points[i];
            c.lineTo(p.x, p.y);
        }
        c.closePath();
        if (fill_factory_1.FillFactory.setElementFill(c, this)) {
            var loc = bounds.location;
            if (this.fillOffsetX || this.fillOffsetY) {
                var fillOffsetX = this.fillOffsetX || 0;
                var fillOffsetY = this.fillOffsetY || 0;
                c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                if (this._winding && this._winding === winding_mode_1.WindingMode.EvenOdd) {
                    c.fill('evenodd');
                }
                else {
                    c.fill('nonzero');
                }
                c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
            }
            else {
                c.translate(loc.x, loc.y);
                if (this._winding && this._winding === winding_mode_1.WindingMode.EvenOdd) {
                    c.fill('evenodd');
                }
                else {
                    c.fill('nonzero');
                }
                c.translate(-loc.x, -loc.y);
            }
        }
        if (model.setElementStroke(c, this)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Hit test polygon.  Return true if point is within polygon interior
     * @param c - Rendering context
     * @param tx - X coordinate of point
     * @param ty - Y coordinate of point
     * @returns True if point is within polygon
     */
    PolygonElement.prototype.hitTest = function (c, tx, ty) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this._points) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, bounds.location);
        }
        c.beginPath();
        c.moveTo(this._points[0].x, this._points[0].y);
        var pl = this._points.length;
        for (var i = 1; i < pl; i++) {
            c.lineTo(this._points[i].x, this._points[i].y);
        }
        c.closePath();
        var hit;
        if (this._winding && this._winding === winding_mode_1.WindingMode.EvenOdd) {
            hit = c.isPointInPath(tx, ty, 'evenodd');
        }
        else {
            hit = c.isPointInPath(tx, ty, 'nonzero');
        }
        c.restore();
        return hit;
    };
    /**
     * Returns string description of polygon
     * @returns Description
     */
    PolygonElement.prototype.toString = function () {
        if (this._points) {
            return this.type + ' -  ' + this._points.length + ' Points';
        }
        else {
            return this.type + ' -  0 Points';
        }
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    PolygonElement.prototype.canStroke = function () {
        return true;
    };
    /**
     * Can element be filled
     * @returns Can fill
     */
    PolygonElement.prototype.canFill = function () {
        return true;
    };
    /**
     * Polygons can be moved using mouse
     * @returns True
     */
    PolygonElement.prototype.canMove = function () {
        return true;
    };
    /**
     * Polygons can be sized unless in point editing mode
     * @returns True unless in point editing mode
     */
    PolygonElement.prototype.canResize = function () {
        if (this.editPoints) {
            return false;
        }
        return true;
    };
    /**
     * Polygons can be nudged with the keyboard
     * @returns True
     */
    PolygonElement.prototype.canNudge = function () {
        return true;
    };
    /**
     * Polygons support individual point movement when in point editing mode
     * @returns True if in point editing mode
     */
    PolygonElement.prototype.canMovePoint = function () {
        if (this.editPoints) {
            return true;
        }
        return false;
    };
    /**
     * Polygons support point editing mode
     * @returns True
     */
    PolygonElement.prototype.canEditPoints = function () {
        return true;
    };
    /**
     * Nudges size of polygon by a given width and height offset
     * @param offsetX - X offset
     * @param offsetY - Y offset
     * @returns This polygon
     */
    PolygonElement.prototype.nudgeSize = function (offsetX, offsetY) {
        if (!this._points) {
            return this;
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newWidth = bounds.width + offsetX;
        if (newWidth < 1) {
            newWidth = 1;
        }
        var newHeight = bounds.height + offsetY;
        if (newHeight < 1) {
            newHeight = 1;
        }
        if (this.aspectLocked) {
            if (offsetX === 0) {
                this.scale(newHeight / bounds.height, newHeight / bounds.height);
            }
            else {
                this.scale(newWidth / bounds.width, newWidth / bounds.width);
            }
        }
        else {
            this.scale(newWidth / bounds.width, newHeight / bounds.height);
        }
        this.bounds = undefined;
        return this;
    };
    /**
     * Scales polygon points by given horizontal and vertical scaling factors
     * @param scaleX - Horizontal scaling factor
     * @param scaleY - Vertical scaling factor
     * @returns This polygon element
     */
    PolygonElement.prototype.scale = function (scaleX, scaleY) {
        if (!this._points) {
            return this;
        }
        var newPoints = [];
        var location = this.getLocation();
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            newPoints.push(point_1.Point.scale(point, scaleX, scaleY, location.x, location.y));
        }
        this._points = newPoints;
        this.bounds = undefined;
        return this;
    };
    /**
     * Moves this polygon element by the given X and Y offsets
     * @param offsetX - X size offset
     * @param offsetY - Y size offset
     * @returns This polygon
     */
    PolygonElement.prototype.translate = function (offsetX, offsetY) {
        if (!this._points) {
            return this;
        }
        var newPoints = [];
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            newPoints.push(point_1.Point.translate(point, offsetX, offsetY));
        }
        this._points = newPoints;
        this.bounds = undefined;
        return this;
    };
    /**
     * Computes (if undefined) and returns rectangular bounding region
     * @returns Polygon bounding region
     */
    PolygonElement.prototype.getBounds = function () {
        if (this.bounds) {
            return this.bounds;
        }
        if (!this._points) {
            return undefined;
        }
        var minX;
        var minY;
        var maxX;
        var maxY;
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var p = _a[_i];
            if (!minX) {
                minX = p.x;
            }
            else if (p.x < minX) {
                minX = p.x;
            }
            if (!minY) {
                minY = p.y;
            }
            else if (p.y < minY) {
                minY = p.y;
            }
            if (!maxX) {
                maxX = p.x;
            }
            else if (p.x > maxX) {
                maxX = p.x;
            }
            if (!maxY) {
                maxY = p.y;
            }
            else if (p.y > maxY) {
                maxY = p.y;
            }
        }
        if (minX !== undefined && minY !== undefined && maxX !== undefined && maxY !== undefined) {
            this.bounds = new region_1.Region(minX, minY, maxX - minX, maxY - minY);
            this._location = new point_1.Point(minX, minY);
            this._size = new size_1.Size(this.bounds.width, this.bounds.height);
            return this.bounds;
        }
        return undefined;
    };
    /**
     * Moves polygon
     * @param pointSource - New location
     * @returns This polygon
     */
    PolygonElement.prototype.setLocation = function (pointSource) {
        if (!this._points) {
            return this;
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var pt;
        if (typeof pointSource === 'string') {
            pt = point_1.Point.parse(pointSource);
        }
        else {
            pt = new point_1.Point(pointSource.x, pointSource.y);
        }
        var deltaX = pt.x - bounds.x;
        var deltaY = pt.y - bounds.y;
        this.translate(deltaX, deltaY);
        return this;
    };
    /**
     * Resizes polygon
     * @param size - New size
     * @returns This polygon
     */
    PolygonElement.prototype.setSize = function (sizeSource) {
        var size = size_1.Size.parse(sizeSource);
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var scaleX = size.width / bounds.width;
        var scaleY = size.height / bounds.height;
        this.scale(scaleX, scaleY);
        return this;
    };
    /**
     * Returns number of points in polygon
     * @returns Number of points
     */
    PolygonElement.prototype.pointCount = function () {
        if (this._points) {
            return this._points.length;
        }
        return 0;
    };
    /**
     * Returns point at a given index (0 to # points - 1)
     * @param index - Point index (0 to # points - 1)
     * @param depth - Not applicable
     * @returns Requested point
     */
    PolygonElement.prototype.getPointAt = function (index, depth) {
        if (!this._points) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        if (index >= 0 && index < this._points.length) {
            return this._points[index];
        }
        throw new invalid_index_exception_1.InvalidIndexException(index);
    };
    /**
     * Sets point at a given index (0 to # points - 1)
     * @param index - Point index (0 to # points - 1)
     * @param value - New point value
     * @param depth - Not applicable to this element
     * @returns This polygon
     */
    PolygonElement.prototype.setPointAt = function (index, value, depth) {
        if (!this._points) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        if (index >= 0 && index < this._points.length) {
            this._points[index] = value;
            this.bounds = undefined;
            return this;
        }
        throw new invalid_index_exception_1.InvalidIndexException(index);
    };
    /**
     * Adds a new point to this polygon
     * @param point - New point
     * @returns This polygon
     */
    PolygonElement.prototype.addPoint = function (point) {
        if (!this._points) {
            this._points = [];
        }
        this._points.push(point);
        this.bounds = undefined;
        return this;
    };
    Object.defineProperty(PolygonElement.prototype, "winding", {
        /**
         * Winding mode get accessor
         * @returns Fill winding mode
         */
        get: function () {
            return this._winding;
        },
        /**
         * Winding mode set accessor
         * @param newValue - New fill winding mode
         */
        set: function (newValue) {
            this._winding = newValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets fill winding mode
     * @param winding - Fill winding mode
     * @returns This polygon
     */
    PolygonElement.prototype.setWinding = function (winding) {
        this._winding = winding;
        return this;
    };
    return PolygonElement;
}(element_base_1.ElementBase));
exports.PolygonElement = PolygonElement;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Resource manager event
 */
var ResourceManagerEvent = /** @class */ (function () {
    function ResourceManagerEvent() {
        this.listeners = [];
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.clear = this.clear.bind(this);
        this.trigger = this.trigger.bind(this);
        this.hasListeners = this.hasListeners.bind(this);
    }
    /**
     * Add a new event listener
     * @param listener - Resource manager event listener (resourceManager: ResourceManager, data?: T)
     */
    ResourceManagerEvent.prototype.add = function (listener) {
        this.listeners.push(listener);
    };
    /**
     * Removes an event listener
     * @param listener - Resource manager event listener (resourceManager: ResourceManager, data?: T)
     */
    ResourceManagerEvent.prototype.remove = function (listener) {
        var index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    };
    /**
     * Clears all event listeners
     */
    ResourceManagerEvent.prototype.clear = function () {
        this.listeners = [];
    };
    /**
     * Triggers event and calls listeners
     * @param rm - Resource manager
     * @param data - Event data
     */
    ResourceManagerEvent.prototype.trigger = function (rm, data) {
        this.listeners.slice(0).forEach(function (h) { return h(rm, data); });
    };
    /**
     * Returns true if any registered listeners
     * @returns True if any registered listeners
     */
    ResourceManagerEvent.prototype.hasListeners = function () {
        return this.listeners.length > 0;
    };
    return ResourceManagerEvent;
}());
exports.ResourceManagerEvent = ResourceManagerEvent;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents horizontal(rx) and vertical (ry) scaling factors
 */
var ScalingInfo = /** @class */ (function () {
    function ScalingInfo() {
        this.rx = 1;
        this.ry = 1;
    }
    return ScalingInfo;
}());
exports.ScalingInfo = ScalingInfo;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a DOM point related event
 */
var PointEventParameters = /** @class */ (function () {
    /**
     * @param event - Source DOM event
     * @param point - Model scale adjusted point at which event occurred
     */
    function PointEventParameters(event, point) {
        if (event instanceof Event) {
            this.event = event;
        }
        if (point !== undefined) {
            this.point = point;
        }
    }
    return PointEventParameters;
}());
exports.PointEventParameters = PointEventParameters;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Component related event
 */
var ComponentEvent = /** @class */ (function () {
    function ComponentEvent() {
        this.listeners = [];
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.clear = this.clear.bind(this);
        this.trigger = this.trigger.bind(this);
        this.hasListeners = this.hasListeners.bind(this);
        this.copyTo = this.copyTo.bind(this);
    }
    /**
     * Adds a component event listener
     * @param listener - Listener function (c: Component, data: T)
     */
    ComponentEvent.prototype.add = function (listener) {
        this.listeners.push(listener);
    };
    /**
     * Removes a component event listener
     * @param listener - Listener function to remove (c: Component, data: T)
     */
    ComponentEvent.prototype.remove = function (listener) {
        var index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    };
    /**
     * Clears all listeners
     */
    ComponentEvent.prototype.clear = function () {
        this.listeners.splice(0, this.listeners.length);
    };
    /**
     * Triggers event
     * @param c - Component firing event
     * @param data - Event data
     */
    ComponentEvent.prototype.trigger = function (c, data) {
        this.listeners.slice(0).forEach(function (h) { return h(c, data); });
    };
    /**
     * Returns true if any listeners attached
     * @returns True if any listeners attached to event
     */
    ComponentEvent.prototype.hasListeners = function () {
        if (!this.listeners || this.listeners.length === 0) {
            return false;
        }
        return true;
    };
    /**
     * Copies listeners of this event to another event
     * @param other - Target component event
     */
    ComponentEvent.prototype.copyTo = function (other) {
        this.listeners.forEach(function (h) {
            other.add(h);
        });
    };
    return ComponentEvent;
}());
exports.ComponentEvent = ComponentEvent;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var model_1 = __webpack_require__(4);
var size_1 = __webpack_require__(2);
var rectangle_element_1 = __webpack_require__(11);
var bitmap_resource_1 = __webpack_require__(19);
var model_resource_1 = __webpack_require__(35);
var component_element_1 = __webpack_require__(25);
var component_1 = __webpack_require__(33);
var component_props_1 = __webpack_require__(34);
/**
 * Encapsulates image based component creation properties
 */
var ImageBasedComponentProps = /** @class */ (function (_super) {
    __extends(ImageBasedComponentProps, _super);
    function ImageBasedComponentProps() {
        var _this = _super.call(this) || this;
        _this.onCreate = _this.onCreate.bind(_this);
        _this.onInitialize = _this.onInitialize.bind(_this);
        _this.onSetCreationFill = _this.onSetCreationFill.bind(_this);
        _this.onGetFillImage = _this.onGetFillImage.bind(_this);
        _this.onSize = _this.onSize.bind(_this);
        _this.imageTag = 'push-button';
        _this.size.add(_this.onSize);
        _this.initialize = _this.onInitialize;
        _this.create = _this.onCreate;
        _this.setCreationFill = _this.onSetCreationFill;
        _this.getFillImage = _this.onGetFillImage;
        return _this;
    }
    ImageBasedComponentProps.prototype.onCreate = function (props) {
        var m = model_1.Model.create(props.width, props.height);
        bitmap_resource_1.BitmapResource.create('navigate', component_1.Component.baseImagePath + this.imageTag + '.png').addTo(m);
        m.stroke = 'Black';
        var rect = rectangle_element_1.RectangleElement.create(0, 0, props.width, props.height)
            .setFill('image(0.75;' + this.imageTag + ')')
            .addTo(m);
        rect.id = 'r';
        model_resource_1.ModelResource.create(props.id, m).addTo(props.model);
        var el = new component_element_1.ComponentElement(props.id, props.left, props.top, props.width, props.height);
        props.model.add(el);
        return el;
    };
    ImageBasedComponentProps.prototype.onInitialize = function (callback) {
        var self = this;
        var image = new Image();
        image.onload = function (e) {
            self.fillImage = image;
            if (callback) {
                callback(true);
            }
        };
        image.onerror = function (e) {
            self.fillImage = undefined;
            if (callback) {
                callback(false);
            }
        };
        if (component_1.Component.baseImagePath.substr(0, 1) === ':') {
            image.src = component_1.Component.baseImagePath.substr(1) + this.imageTag + '.png';
        }
        else {
            image.src = component_1.Component.baseImagePath + this.imageTag + '.png';
        }
    };
    ImageBasedComponentProps.prototype.onSetCreationFill = function (c) {
        if (this.fillImage) {
            var pattern = c.createPattern(this.fillImage, 'repeat');
            if (pattern) {
                c.fillStyle = pattern;
            }
        }
    };
    ImageBasedComponentProps.prototype.onGetFillImage = function (callback) {
        if (this.fillImage) {
            if (callback) {
                callback(this.fillImage);
            }
        }
        else {
            var image_1 = new Image();
            image_1.onload = function (e) {
                if (callback) {
                    callback(image_1);
                }
            };
            if (component_1.Component.baseImagePath.substr(0, 1) === ':') {
                image_1.src = component_1.Component.baseImagePath.substr(1) + this.imageTag + '.png';
            }
            else {
                image_1.src = component_1.Component.baseImagePath + this.imageTag + '.png';
            }
        }
    };
    ImageBasedComponentProps.prototype.onSize = function (c, props) {
        var el = props.element;
        if (!el.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!el.id) {
            throw new Error(error_messages_1.ErrorMessages.ElementIdUndefined);
        }
        var size = props.size;
        var res = el.model.resourceManager.get(el.id);
        if (!res.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        res.model.setSize(size);
        var r = res.model.elementWithId('r');
        if (r) {
            r.setSize(size_1.Size.create(size.width, size.height));
        }
    };
    return ImageBasedComponentProps;
}(component_props_1.ComponentProps));
exports.ImageBasedComponentProps = ImageBasedComponentProps;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var view_controller_1 = __webpack_require__(52);
/**
 * Extends ViewController to add surface property
 */
var SurfaceViewController = /** @class */ (function (_super) {
    __extends(SurfaceViewController, _super);
    function SurfaceViewController() {
        return _super.call(this) || this;
    }
    return SurfaceViewController;
}(view_controller_1.ViewController));
exports.SurfaceViewController = SurfaceViewController;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var controller_event_1 = __webpack_require__(40);
var error_messages_1 = __webpack_require__(0);
var logging_1 = __webpack_require__(42);
var mouse_event_args_1 = __webpack_require__(24);
var mouse_position_info_1 = __webpack_require__(67);
var point_1 = __webpack_require__(1);
var point_event_parameters_1 = __webpack_require__(48);
var timer_parameters_1 = __webpack_require__(69);
var view_renderer_1 = __webpack_require__(97);
var log = logging_1.Logging.log;
/**
 * Manages rendering and interaction with rendered model content
 */
var ViewController = /** @class */ (function () {
    function ViewController() {
        /** Initialize animation timer function */
        // Animation.initialize();
        /**
         * Fired when model is updated
         */
        this.modelUpdated = new controller_event_1.ControllerEvent();
        /**
         * Fired when enabled state is changed
         */
        this.enabledChanged = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse enters view
         */
        this.mouseEnteredView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse leaves view
         */
        this.mouseLeftView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is pressed over view. Captures mouse activity.
         */
        this.mouseDownView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is released and mouse is captured.
         */
        this.mouseUpView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is moved over view
         */
        this.mouseMovedView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse enters element bounds
         */
        this.mouseEnteredElement = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse leaves element bounds
         */
        this.mouseLeftElement = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is pressed over element
         */
        this.mouseDownElement = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is released over element
         */
        this.mouseUpElement = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is pressed and released over an element
         */
        this.elementClicked = new controller_event_1.ControllerEvent();
        /**
         * Period animation event timer fired when timer is enabled
         */
        this.timer = new controller_event_1.ControllerEvent();
        /**
         * True when mouse is over view
         */
        this.isMouseOver = false;
        /**
         * True when mouse is down and captured over view
         */
        this.isMouseDown = false;
        /**
         * Rendering origin X offset
         */
        this.offsetX = 0;
        /**
         * Rendering origin y offset
         */
        this.offsetY = 0;
        /**
         * Rendering scale
         */
        this.scale = 1;
        /**
         * Click cancelled flag
         */
        this.clickCancelled = false;
        /**
         * Cancel action flag
         */
        this.cancelAction = false;
        /**
         * Set internally when view should be redrawn
         */
        this.needsRedraw = false;
        /**
         * Animation timer enabled flag
         */
        this.timerEnabled = false;
        this.setModel = this.setModel.bind(this);
        this.setEnabled = this.setEnabled.bind(this);
        this.getCanvas = this.getCanvas.bind(this);
        this.drawIfNeeded = this.drawIfNeeded.bind(this);
        this.createCanvas = this.createCanvas.bind(this);
        this.detach = this.detach.bind(this);
        this.windowToCanvas = this.windowToCanvas.bind(this);
        this.windowMouseUp = this.windowMouseUp.bind(this);
        this.windowMouseMove = this.windowMouseMove.bind(this);
        this.onCanvasMouseEnter = this.onCanvasMouseEnter.bind(this);
        this.onCanvasMouseLeave = this.onCanvasMouseLeave.bind(this);
        this.onCanvasMouseDown = this.onCanvasMouseDown.bind(this);
        this.onCanvasMouseUp = this.onCanvasMouseUp.bind(this);
        this.onCanvasMouseMove = this.onCanvasMouseMove.bind(this);
        this.setMouseDownElement = this.setMouseDownElement.bind(this);
        this.setMouseOverElement = this.setMouseOverElement.bind(this);
        this.setScale = this.setScale.bind(this);
        this.onModelUpdated = this.onModelUpdated.bind(this);
        this.draw = this.draw.bind(this);
        this.calculateFPS = this.calculateFPS.bind(this);
        this.invalidate = this.invalidate.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.elapsedTime = this.elapsedTime.bind(this);
        this.timerPhase = this.timerPhase.bind(this);
        this.bindTarget = this.bindTarget.bind(this);
        this.enabled = true;
        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.lastDeltaX = -1;
        this.lastDeltaY = -1;
        this.eventDelay = 0;
        this.timerParameters = new timer_parameters_1.TimerParameters(0, 0);
    }
    /**
     * Create a new view controller and canvas and bind to host DIV element
     * @param hostDiv - Host div element
     * @param model - Drawing model
     * @param scale - Rendering scale
     * @returns New view controller
     */
    ViewController.initializeTarget = function (hostDiv, model, scale) {
        log('Initializing view controller target');
        if (!hostDiv) {
            throw new Error(error_messages_1.ErrorMessages.HostElementUndefined);
        }
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var viewScale = scale === undefined ? 1 : scale;
        hostDiv.innerHTML = '';
        var controller = new ViewController();
        controller.setScale(viewScale);
        controller.setModel(model);
        var canvas = controller.getCanvas();
        hostDiv.appendChild(canvas);
        hostDiv.style.width = size.width * viewScale + 'px';
        hostDiv.style.height = size.height * viewScale + 'px';
        controller.draw();
        model.controllerAttached.trigger(model, controller);
        return controller;
    };
    /**
     * Sets controller model
     * @param model - Drawing model
     */
    ViewController.prototype.setModel = function (model) {
        if (model === this.model) {
            return;
        }
        if (this.model) {
            this.model.controllerDetached.trigger(this.model, this);
        }
        log('Setting view controller model');
        this.model = model;
        this.currentX = undefined;
        this.currentY = undefined;
        this.isMouseDown = false;
        this.mouseDownPosition = undefined;
        this.mouseOverElement = undefined;
        this.pressedElement = undefined;
        this.lastDeltaX = -1;
        this.lastDeltaY = -1;
        this.offsetX = 0;
        this.offsetY = 0;
        if (!this.canvas) {
            this.createCanvas();
        }
        else if (this.model) {
            var size = this.model.getSize();
            if (!size) {
                throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
            }
            this.canvas.width = size.width * this.scale;
            this.canvas.height = size.height * this.scale;
            var element = this.canvas.parentElement;
            if (element) {
                element.style.width = size.width * this.scale + 'px';
                element.style.height = size.height * this.scale + 'px';
            }
        }
        if (this.model.elements !== undefined && this.model.elements.length > 0) {
            this.model.elements.forEach(function (element) {
                if (element.interactive === undefined) {
                    element.interactive = true;
                }
            });
        }
        this.draw();
        model.controllerAttached.trigger(model, this);
    };
    /**
     * Sets enabled state with optional disabled state overlay fill
     * @param enabled - User interactivity enabled state
     * @param disabledFill - Optional disabled state fill as string
     */
    ViewController.prototype.setEnabled = function (enabled, disabledFill) {
        if (enabled === this.enabled) {
            return;
        }
        this.enabled = enabled;
        if (arguments.length > 1) {
            this.disabledFill = disabledFill;
        }
        if (!enabled) {
            if (this.isMouseDown) {
                this.cancelAction = true;
                if (this.lastClientX && this.lastClientY) {
                    this.onCanvasMouseUp(new mouse_position_info_1.MousePositionInfo(this.lastClientX, this.lastClientY));
                }
            }
        }
        this.draw();
        this.enabledChanged.trigger(this, enabled);
    };
    /**
     * Creates if necessary and returns canvas element
     */
    ViewController.prototype.getCanvas = function () {
        if (!this.canvas) {
            this.createCanvas();
        }
        if (!this.canvas) {
            throw new Error(error_messages_1.ErrorMessages.CanvasIsUndefined);
        }
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        this.canvas.width = size.width * this.scale;
        this.canvas.height = size.height * this.scale;
        return this.canvas;
    };
    /**
     * Renders to canvas if needed and clears redraw flag
     */
    ViewController.prototype.drawIfNeeded = function () {
        if (this.needsRedraw) {
            this.draw();
            this.needsRedraw = false;
        }
    };
    /**
     * Creates canvas for model at current scale and attached event handlers
     */
    ViewController.prototype.createCanvas = function () {
        log('Creating canvas and attaching event handlers');
        var self = this;
        if (!self.model) {
            return;
        }
        var size = self.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var canvas = document.createElement('canvas');
        canvas.width = size.width * self.scale;
        canvas.height = size.height * self.scale;
        canvas.addEventListener('mouseenter', self.onCanvasMouseEnter);
        canvas.addEventListener('mouseleave', self.onCanvasMouseLeave);
        canvas.addEventListener('mousedown', self.onCanvasMouseDown);
        canvas.addEventListener('mousemove', self.onCanvasMouseMove);
        self.canvas = canvas;
        self.renderer = new view_renderer_1.ViewRenderer(self);
    };
    /**
     * Detaches and destroys current canvas
     */
    ViewController.prototype.detach = function () {
        this.stopTimer();
        if (this.model) {
            this.model.controllerDetached.trigger(this.model, this);
            this.model.controllerDetached.clear();
            this.model.controllerAttached.clear();
        }
        if (!this.canvas) {
            return;
        }
        log('Detaching event handlers and destroying canvas');
        this.canvas.removeEventListener('mouseenter', this.onCanvasMouseEnter);
        this.canvas.removeEventListener('mouseleave', this.onCanvasMouseLeave);
        this.canvas.removeEventListener('mousedown', this.onCanvasMouseDown);
        this.canvas.removeEventListener('mousemove', this.onCanvasMouseMove);
        var element = this.canvas.parentElement;
        if (element) {
            element.removeChild(this.canvas);
        }
        this.mouseEnteredView.clear();
        this.mouseLeftView.clear();
        this.mouseDownView.clear();
        this.mouseUpView.clear();
        this.mouseMovedView.clear();
        this.elementClicked.clear();
        this.mouseDownElement.clear();
        this.mouseEnteredElement.clear();
        this.mouseLeftElement.clear();
        this.mouseUpElement.clear();
        this.modelUpdated.clear();
        this.enabledChanged.clear();
        if (this.timer) {
            this.timer.clear();
        }
        this.canvas = undefined;
    };
    /**
     * Translates raw window coordinates to model coordinates
     * compensating for current scale and origin offset
     * @param x - Raw x coordinate
     * @param y - Raw y coordinate
     */
    ViewController.prototype.windowToCanvas = function (x, y) {
        if (!this.canvas || !this.model) {
            return new point_1.Point(x, y);
        }
        var bounds = this.canvas.getBoundingClientRect();
        var size = this.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var x1;
        var y1;
        x1 = x - Math.round(bounds.left);
        y1 = y - Math.round(bounds.top);
        if (this.canvas.width !== bounds.width) {
            x1 *= this.canvas.width / bounds.width;
        }
        if (this.canvas.height !== bounds.height) {
            y1 *= this.canvas.height / bounds.height;
        }
        if (this.scale !== 1) {
            x1 /= this.scale;
            y1 /= this.scale;
        }
        if (this.isMouseOver) {
            if (x1 < 0) {
                x1 = 0;
            }
            if (x1 > size.width - 1) {
                x1 = size.width - 1;
            }
            if (y1 < 0) {
                y1 = 0;
            }
            if (y1 > size.height - 1) {
                y1 = size.height - 1;
            }
        }
        x1 = x1 + this.offsetX;
        y1 = y1 + this.offsetY;
        return new point_1.Point(x1, y1);
    };
    /**
     * Handles captured mouse up event
     * @param e - Window mouse up event
     */
    ViewController.prototype.windowMouseUp = function (e) {
        var captured = ViewController.captured;
        if (captured) {
            log("Window mouse up " + e.clientX + ":" + e.clientY);
            // const canvas = captured.canvas;
            captured.onCanvasMouseUp(e);
            captured.drawIfNeeded();
            window.removeEventListener('mouseup', captured.windowMouseUp, true);
            window.removeEventListener('mousemove', captured.windowMouseMove, true);
            ViewController.captured = undefined;
        }
    };
    /**
     * Handles captured mouse move event
     * @param e - Window mouse up event
     */
    ViewController.prototype.windowMouseMove = function (e) {
        var captured = ViewController.captured;
        if (captured) {
            log("Window mouse move " + e.clientX + ":" + e.clientY);
            e.preventDefault();
            e.stopPropagation();
            captured.onCanvasMouseMove(e);
            captured.drawIfNeeded();
        }
    };
    /**
     * Handles canvas mouse enter event
     * @param e - DOM event
     */
    ViewController.prototype.onCanvasMouseEnter = function (e) {
        log("Canvas mouse enter");
        this.isMouseOver = true;
        if (!this.enabled) {
            return;
        }
        if (this.mouseEnteredView.hasListeners) {
            this.mouseEnteredView.trigger(this, new mouse_event_args_1.MouseEventArgs(e));
        }
        this.drawIfNeeded();
    };
    /**
     * Handles canvas mouse leave event
     * @param e - DOM event
     */
    ViewController.prototype.onCanvasMouseLeave = function (e) {
        log('Canvas mouse leave');
        this.isMouseOver = false;
        if (!this.enabled) {
            return;
        }
        if (this.mouseLeftView.hasListeners) {
            this.mouseLeftView.trigger(this, new mouse_event_args_1.MouseEventArgs(e));
        }
        this.drawIfNeeded();
    };
    /**
     * Handles canvas mouse down event
     * @param e - Mouse event
     */
    ViewController.prototype.onCanvasMouseDown = function (e) {
        var self = this;
        log("Canvas mouse down " + e.clientX + ":" + e.clientY);
        ViewController.captured = self;
        window.addEventListener('mouseup', self.windowMouseUp, true);
        window.addEventListener('mousemove', self.windowMouseMove, true);
        if (!self.enabled) {
            return;
        }
        if (!self.canvas) {
            return;
        }
        if (!self.model) {
            return;
        }
        self.lastClientX = e.clientX;
        self.lastClientY = e.clientY;
        var p = self.windowToCanvas(e.clientX, e.clientY);
        var context = self.canvas.getContext('2d');
        if (!context) {
            throw new Error(error_messages_1.ErrorMessages.CanvasContextIsNull);
        }
        self.currentX = p.x;
        self.currentY = p.y;
        self.mouseDownPosition = point_1.Point.create(p.x, p.y);
        self.isMouseDown = true;
        self.mouseDownView.trigger(self, new point_event_parameters_1.PointEventParameters(e, self.mouseDownPosition));
        var activeElement = self.model.firstActiveElementAt(context, p.x, p.y);
        self.clickCancelled = false;
        if (self.eventDelay > 0) {
            self.pendingMouseDownElement = activeElement;
            if (self.eventTimer) {
                clearTimeout(self.eventTimer);
                self.eventTimer = undefined;
            }
            self.eventTimer = setTimeout(function () {
                if (!self.clickCancelled) {
                    self.setMouseDownElement(self.pendingMouseDownElement);
                }
            }, self.eventDelay);
        }
        else {
            self.setMouseDownElement(activeElement);
        }
        self.drawIfNeeded();
    };
    /**
     * Handles canvas mouse move event
     * @param e - Mouse event
     */
    ViewController.prototype.onCanvasMouseMove = function (e) {
        log("Canvas mouse move " + e.clientX + ":" + e.clientY);
        if (!this.enabled) {
            return;
        }
        if (!this.lastClientX) {
            return;
        }
        if (!this.model) {
            return;
        }
        var deltaX = this.lastClientX - e.clientX;
        if (Math.abs(deltaX) > 8) {
            this.clickCancelled = true;
        }
        var p = this.windowToCanvas(e.clientX, e.clientY);
        if (p.x === this.currentX && this.currentY === p.y) {
            return;
        }
        this.currentX = p.x;
        this.currentY = p.y;
        this.mouseMovedView.trigger(this, new point_event_parameters_1.PointEventParameters(e, p));
        if (!this.canvas) {
            return;
        }
        var context = this.canvas.getContext('2d');
        if (!context) {
            throw new Error(error_messages_1.ErrorMessages.CanvasContextIsNull);
        }
        var activeElement = this.model.firstActiveElementAt(context, p.x, p.y);
        this.setMouseOverElement(activeElement);
    };
    /**
     * Handles canvas mouse up
     * @param e - Mouse event info
     */
    ViewController.prototype.onCanvasMouseUp = function (e) {
        log("Canvas mouse up " + e.clientX + ":" + e.clientY);
        ViewController.captured = undefined;
        window.removeEventListener('mouseup', this.windowMouseUp, true);
        window.removeEventListener('mousemove', this.windowMouseMove, true);
        if (!this.enabled) {
            return;
        }
        if (!this.isMouseDown) {
            return;
        }
        this.lastClientX = e.clientX;
        this.lastClientY = e.clientY;
        var p = this.windowToCanvas(e.clientX, e.clientY);
        this.currentX = p.x;
        this.currentY = p.y;
        this.isMouseDown = false;
        this.mouseUpView.trigger(this, new point_event_parameters_1.PointEventParameters(e, p));
        if (this.pressedElement) {
            var el = this.pressedElement;
            this.mouseUpElement.trigger(this, el);
            if (!this.clickCancelled) {
                if (el === this.mouseOverElement) {
                    this.elementClicked.trigger(this, el);
                }
            }
            this.pressedElement = undefined;
        }
        else if (this.pendingMouseDownElement && !this.clickCancelled) {
            this.setMouseOverElement(this.pendingMouseDownElement);
            this.setMouseDownElement(this.pendingMouseDownElement);
            this.mouseUpElement.trigger(this, this.pendingMouseDownElement);
            this.elementClicked.trigger(this, this.pendingMouseDownElement);
            this.pendingMouseDownElement = undefined;
        }
        this.drawIfNeeded();
    };
    /**
     * Sets current mouse down element
     * @param el - Mouse down element
     */
    ViewController.prototype.setMouseDownElement = function (el) {
        if (el) {
            this.setMouseOverElement(el);
        }
        if (el !== this.pressedElement) {
            if (this.pressedElement) {
                this.mouseUpElement.trigger(this, this.pressedElement);
            }
            this.pressedElement = el;
            if (el) {
                this.mouseDownElement.trigger(this, el);
            }
        }
    };
    /**
     * Sets current mouse over element
     * @param el -Mouse over element
     */
    ViewController.prototype.setMouseOverElement = function (el) {
        if (el !== this.mouseOverElement) {
            if (this.mouseOverElement) {
                this.mouseLeftElement.trigger(this, this.mouseOverElement);
            }
            this.mouseOverElement = el;
            if (el) {
                this.mouseEnteredElement.trigger(this, el);
            }
        }
        if (this.canvas) {
            if (this.mouseOverElement) {
                this.canvas.style.cursor = 'pointer';
            }
            else {
                this.canvas.style.cursor = 'default';
            }
        }
    };
    /**
     * Sets rendering scale.  Recreates or sizes target canvas.
     * @param Render scale
     */
    ViewController.prototype.setScale = function (scale) {
        if (scale === this.scale) {
            return;
        }
        this.scale = scale;
        if (!this.model) {
            return;
        }
        if (!this.canvas) {
            return;
        }
        var size = this.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if (this.canvas) {
            this.canvas.width = size.width * scale;
            this.canvas.height = size.height * scale;
        }
        else {
            this.createCanvas();
        }
        var hostDiv = this.canvas.parentElement;
        if (hostDiv) {
            hostDiv.style.width = size.width * scale + 'px';
            hostDiv.style.height = size.height * scale + 'px';
        }
        this.draw();
    };
    /**
     * Called when model is updated. Sets redraw flag and triggers
     * model updated event
     */
    ViewController.prototype.onModelUpdated = function () {
        if (!this.model) {
            return;
        }
        this.modelUpdated.trigger(this, this.model);
        this.invalidate();
    };
    /**
     * Renders model to canvas and clears redraw flag
     */
    ViewController.prototype.draw = function () {
        if (!this.canvas) {
            return;
        }
        if (!this.model) {
            return;
        }
        var context = this.canvas.getContext('2d');
        if (!context) {
            throw new Error(error_messages_1.ErrorMessages.CanvasContextIsNull);
        }
        this.model.context = context;
        var size = this.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var w = size.width;
        var h = size.height;
        // Clear context
        if (this.scale !== 1.0) {
            context.clearRect(0, 0, w * this.scale, h * this.scale);
        }
        else {
            context.clearRect(0, 0, w, h);
        }
        // Offset for scroll
        context.save();
        context.translate(-this.offsetX * this.scale, -this.offsetY * this.scale);
        // Render model
        if (!this.renderer) {
            throw new Error(error_messages_1.ErrorMessages.RendererIsUndefined);
        }
        this.renderer.renderToContext(context, this.scale);
        // Restore from offset
        context.restore();
        // If displaying frame rate
        if (this.model.displayFPS) {
            context.fillStyle = 'cornflowerblue';
            context.font = '16px monospace';
            context.fillText(this.calculateFPS().toFixed() + ' fps', 20, 20);
        }
        // Clear redraw flag
        this.needsRedraw = false;
    };
    /**
     * Begins direct rendering
     */
    ViewController.prototype.beginDraw = function () {
        if (!this.canvas) {
            throw new Error(error_messages_1.ErrorMessages.CanvasIsUndefined);
        }
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var context = this.canvas.getContext('2d');
        if (!context) {
            throw new Error(error_messages_1.ErrorMessages.CanvasContextIsNull);
        }
        this.model.context = context;
        var w = size.width;
        var h = size.height;
        // Clear context
        if (this.scale !== 1.0) {
            context.clearRect(0, 0, w * this.scale, h * this.scale);
        }
        else {
            context.clearRect(0, 0, w, h);
        }
        // Offset for scroll
        context.save();
        context.translate(-this.offsetX * this.scale, -this.offsetY * this.scale);
        // Render model
        if (!this.renderer) {
            throw new Error(error_messages_1.ErrorMessages.RendererIsUndefined);
        }
        this.renderer.renderToContext(context, this.scale);
        return context;
    };
    /**
     * Ends direct rendering
     */
    ViewController.prototype.endDraw = function (context) {
        // Render model
        // this.renderer.renderToContext(context, this.scale);
        // Restore from offset
        context.restore();
        // Clear redraw flag
        this.needsRedraw = false;
    };
    /**
     * Calculates frame rate based on elapsed time since last frame
     */
    ViewController.prototype.calculateFPS = function () {
        var now = +new Date();
        var fps = 0;
        if (this.lastFrameTime !== undefined) {
            fps = 1000 / (now - this.lastFrameTime);
        }
        this.lastFrameTime = now;
        return fps;
    };
    /**
     * Sets redraw flag to induce draw on next draw cycle
     */
    ViewController.prototype.invalidate = function () {
        this.needsRedraw = true;
    };
    /**
     * Starts animation timer to induce period tick events
     * @param offset - Timer start offset
     */
    ViewController.prototype.startTimer = function (offset) {
        if (offset === void 0) { offset = 0; }
        this.startTime = +new Date();
        if (offset) {
            this.startTime += offset * 1000;
        }
        this.lastTick = 0.0;
        if (this.timerEnabled) {
            return;
        }
        this.timerEnabled = true;
        var controller = this;
        this.timerHandle = window.requestAnimationFrame(controller.tick);
    };
    /**
     * Pauses animation timer
     */
    ViewController.prototype.pauseTimer = function () {
        if (!this.timerEnabled) {
            return;
        }
        this.pauseTime = +new Date();
        this.timerEnabled = false;
        if (this.timerHandle !== undefined) {
            window.cancelAnimationFrame(this.timerHandle);
            this.timerHandle = undefined;
        }
    };
    /**
     * Resumes animation timer at time paused
     */
    ViewController.prototype.resumeTimer = function () {
        if (this.timerEnabled) {
            return;
        }
        var controller = this;
        var now = +new Date();
        if (this.pauseTime !== undefined && controller.startTime !== undefined) {
            var elapsed = now - this.pauseTime;
            controller.startTime += elapsed;
        }
        else {
            controller.startTime = now;
        }
        controller.pauseTime = undefined;
        controller.timerEnabled = true;
        this.timerHandle = window.requestAnimationFrame(controller.tick);
    };
    /**
     * Stops animation timer
     */
    ViewController.prototype.stopTimer = function () {
        if (!this.timerEnabled) {
            return;
        }
        this.timerEnabled = false;
        if (this.timerHandle !== undefined) {
            window.cancelAnimationFrame(this.timerHandle);
            this.timerHandle = undefined;
        }
    };
    /**
     * Animation timer callback. Called by system animation frame timer and induces tick event when timer is enabled.
     */
    ViewController.prototype.tick = function () {
        var controller = this;
        if (controller.timerEnabled) {
            this.timerParameters.elapsedTime = controller.elapsedTime();
            if (controller.lastTick !== undefined) {
                this.timerParameters.tickDelta = this.timerParameters.elapsedTime - controller.lastTick;
            }
            else {
                this.timerParameters.tickDelta = 0;
            }
            controller.lastTick = this.timerParameters.elapsedTime;
            controller.timer.trigger(controller, this.timerParameters);
            controller.drawIfNeeded();
            this.timerHandle = window.requestAnimationFrame(controller.tick);
        }
        else {
            this.timerHandle = undefined;
        }
    };
    /**
     * Computes animation timer elapsed time
     */
    ViewController.prototype.elapsedTime = function () {
        var now = +new Date();
        if (this.startTime !== undefined) {
            return (now - this.startTime) / 1000.0;
        }
        else {
            return 0;
        }
    };
    /**
     * Binds existing controller to host DIV element
     * @param hostDiv - Hosting div element
     * @returns This view controller
     */
    ViewController.prototype.bindTarget = function (hostDiv) {
        if (!hostDiv) {
            throw new Error(error_messages_1.ErrorMessages.HostElementUndefined);
        }
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        hostDiv.innerHTML = '';
        var canvas = this.getCanvas();
        hostDiv.appendChild(canvas);
        hostDiv.style.width = size.width * this.scale + 'px';
        hostDiv.style.height = size.height * this.scale + 'px';
        this.draw();
        this.model.controllerAttached.trigger(this.model, this);
        return this;
    };
    /**
     * Computes floating point modulus (remainder) of two number
     * @param a - Numerator
     * @param b - Denominator
     * @returns Floating point remainder
     */
    ViewController.prototype.fmod = function (a, b) {
        return Number((a - Math.floor(a / b) * b).toPrecision(8));
    };
    /**
     * Computes periodic timer phase angle based on timer offset and frequency
     * @param frequency - Timer frequency in cycles per second
     * @returns Timer phase angle in radians
     */
    ViewController.prototype.timerPhase = function (frequency) {
        var elapsed = this.elapsedTime();
        var period = 1.0 / frequency;
        var partial = this.fmod(elapsed, period) / period;
        var phase = partial * 2.0 * Math.PI;
        return phase;
    };
    return ViewController;
}());
exports.ViewController = ViewController;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommandEventTrigger = /** @class */ (function () {
    function CommandEventTrigger() {
    }
    CommandEventTrigger.None = 'none';
    CommandEventTrigger.MouseEnter = 'mouseEnter';
    CommandEventTrigger.MouseLeave = 'mouseLeave';
    CommandEventTrigger.MouseDown = 'mouseDown';
    CommandEventTrigger.MouseUp = 'mouseUp';
    CommandEventTrigger.Click = 'click';
    CommandEventTrigger.Timer = 'timer';
    return CommandEventTrigger;
}());
exports.CommandEventTrigger = CommandEventTrigger;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementCommandHandlerRegistration = /** @class */ (function () {
    function ElementCommandHandlerRegistration(command, handler) {
        this.command = command;
        this.handler = handler;
    }
    return ElementCommandHandlerRegistration;
}());
exports.ElementCommandHandlerRegistration = ElementCommandHandlerRegistration;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerEventArgs = /** @class */ (function () {
    /**
     * @param event - DOM event
     */
    function ControllerEventArgs(event) {
        this.event = event;
    }
    return ControllerEventArgs;
}());
exports.ControllerEventArgs = ControllerEventArgs;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes a color with a well-known name
 */
var NamedColor = /** @class */ (function () {
    function NamedColor(name, color) {
        this.name = name;
        this.color = color;
    }
    return NamedColor;
}());
exports.NamedColor = NamedColor;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var element_creator_registration_1 = __webpack_require__(58);
var ellipse_element_1 = __webpack_require__(44);
var image_element_1 = __webpack_require__(29);
var line_element_1 = __webpack_require__(15);
var model_element_1 = __webpack_require__(30);
var path_element_1 = __webpack_require__(59);
var polygon_element_1 = __webpack_require__(45);
var polyline_element_1 = __webpack_require__(32);
var rectangle_element_1 = __webpack_require__(11);
var sprite_element_1 = __webpack_require__(17);
var text_element_1 = __webpack_require__(23);
/**
 * Central element creator registry
 */
var ElementFactory = /** @class */ (function () {
    function ElementFactory() {
    }
    /**
     * Register a new element creator
     * @param name - Name
     * @param creator - Element creator
     */
    ElementFactory.registerCreator = function (name, creator) {
        ElementFactory.ElementCreators.push(new element_creator_registration_1.ElementCreatorRegistration(name, creator));
    };
    /**
     * Create a new element given its type tag
     * @param name - Element type tag
     * @returns New element
     */
    ElementFactory.create = function (name) {
        for (var _i = 0, _a = ElementFactory.ElementCreators; _i < _a.length; _i++) {
            var creatorRegistration = _a[_i];
            if (creatorRegistration.name === name) {
                return creatorRegistration.creator.create();
            }
        }
        return undefined;
    };
    /**
     * Element creators
     */
    ElementFactory.ElementCreators = [];
    return ElementFactory;
}());
exports.ElementFactory = ElementFactory;
/* Register element creators */
ElementFactory.registerCreator('image', image_element_1.ImageElement);
ElementFactory.registerCreator('sprite', sprite_element_1.SpriteElement);
ElementFactory.registerCreator('rectangle', rectangle_element_1.RectangleElement);
ElementFactory.registerCreator('line', line_element_1.LineElement);
ElementFactory.registerCreator('polyline', polyline_element_1.PolylineElement);
ElementFactory.registerCreator('polygon', polygon_element_1.PolygonElement);
ElementFactory.registerCreator('path', path_element_1.PathElement);
ElementFactory.registerCreator('ellipse', ellipse_element_1.EllipseElement);
ElementFactory.registerCreator('text', text_element_1.TextElement);
ElementFactory.registerCreator('model', model_element_1.ModelElement);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates named element creation method
 */
var ElementCreatorRegistration = /** @class */ (function () {
    /**
     * Element creator registration
     * @param name - Element type tag
     * @param creator - Element creator
     */
    function ElementCreatorRegistration(name, creator) {
        this.name = name;
        this.creator = creator;
        this.name = name;
        this.creator = creator;
    }
    return ElementCreatorRegistration;
}());
exports.ElementCreatorRegistration = ElementCreatorRegistration;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var point_depth_1 = __webpack_require__(16);
var region_1 = __webpack_require__(7);
var size_1 = __webpack_require__(2);
var winding_mode_1 = __webpack_require__(31);
var fill_factory_1 = __webpack_require__(8);
var element_base_1 = __webpack_require__(3);
var invalid_index_exception_1 = __webpack_require__(21);
/**
 * Renders series of stroked and/or filled drawing commands
 */
var PathElement = /** @class */ (function (_super) {
    __extends(PathElement, _super);
    function PathElement() {
        var _this = _super.call(this, 'path') || this;
        /**
         * True when in point editing mode
         */
        _this.editPoints = false;
        _this.add = _this.add.bind(_this);
        _this.getCommands = _this.getCommands.bind(_this);
        _this.setWinding = _this.setWinding.bind(_this);
        _this.setCommands = _this.setCommands.bind(_this);
        return _this;
    }
    /**
     * Path element factory function
     * @returns New path element
     */
    PathElement.create = function () {
        var e = new PathElement();
        return e;
    };
    Object.defineProperty(PathElement.prototype, "commands", {
        /**
         * Commands get accessor as string. Serializes command array into string.
         * @returns Serialized command array
         */
        get: function () {
            if (!this._commands) {
                return undefined;
            }
            else {
                return this._commands.join(' ');
            }
        },
        /**
         * Commands set accessor as string.  Parses serialized string of commands.
         * @param commandString - Serialized command array
         */
        set: function (commandString) {
            if (commandString) {
                this._commands = commandString.split(' ');
            }
            else {
                this._commands = undefined;
            }
            this.bounds = undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets commands as serialized command string
     * @param commandString - Serialized command string
     * @returns This path element
     */
    PathElement.prototype.setCommands = function (commandString) {
        this.commands = commandString;
        this.bounds = undefined;
        return this;
    };
    /**
     * Commands get access as command string []
     * @returns Drawing command array
     */
    PathElement.prototype.getCommands = function () {
        return this._commands;
    };
    /**
     * Copies properties of another object to this instance
     * @param o - Source object
     */
    PathElement.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.commands) {
            var commandString = o.commands;
            this._commands = commandString.split(' ');
        }
        if (o.winding) {
            this.winding = o.winding;
        }
        this.bounds = undefined;
    };
    /**
     * Serializes persistent properties to new object instance
     * @returns Serialized element
     */
    PathElement.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        o.size = undefined;
        o.location = undefined;
        if (this._commands) {
            o.commands = this._commands.join(' ');
        }
        if (this.winding && this.winding === winding_mode_1.WindingMode.EvenOdd) {
            o.winding = this.winding;
        }
        return o;
    };
    /**
     * Clones this path element to a new instance
     * @returns Cloned path element
     */
    PathElement.prototype.clone = function () {
        var e = PathElement.create();
        _super.prototype.cloneTo.call(this, e);
        if (this._commands && this._commands.length > 0) {
            e.commands = this._commands.join(' ');
        }
        e.winding = this.winding;
        return e;
    };
    /**
     * Render path element to canvas context
     * @param c - Rendering context
     */
    PathElement.prototype.draw = function (c) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this._commands) {
            throw new Error(error_messages_1.ErrorMessages.NoCommandsAreDefined);
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, bounds.location);
        }
        c.beginPath();
        for (var _i = 0, _a = this._commands; _i < _a.length; _i++) {
            var command = _a[_i];
            if (command.charAt(0) === 'm') {
                var point = point_1.Point.parse(command.substring(1, command.length));
                c.moveTo(point.x, point.y);
            }
            else if (command.charAt(0) === 'l') {
                var point = point_1.Point.parse(command.substring(1, command.length));
                c.lineTo(point.x, point.y);
            }
            else if (command.charAt(0) === 'c') {
                var parts = command.substring(1, command.length).split(',');
                c.bezierCurveTo(parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]), parseFloat(parts[4]), parseFloat(parts[5]));
            }
            else if (command.charAt(0) === 'z') {
                c.closePath();
            }
        }
        if (fill_factory_1.FillFactory.setElementFill(c, this)) {
            var loc = bounds.location;
            if (this.fillOffsetX || this.fillOffsetY) {
                var fillOffsetX = this.fillOffsetX || 0;
                var fillOffsetY = this.fillOffsetY || 0;
                c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                if (this._winding && this._winding === winding_mode_1.WindingMode.EvenOdd) {
                    c.fill('evenodd');
                }
                else {
                    c.fill('nonzero');
                }
                c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
            }
            else {
                c.translate(loc.x, loc.y);
                if (this._winding && this._winding === winding_mode_1.WindingMode.EvenOdd) {
                    c.fill('evenodd');
                }
                else {
                    c.fill('nonzero');
                }
                c.translate(-loc.x, -loc.y);
            }
        }
        if (model.setElementStroke(c, this)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Hit test path element.  Return true if point is within path element interior
     * @param c - Rendering context
     * @param tx - X coordinate of point
     * @param ty - Y coordinate of point
     * @returns True if point is within path element interior
     */
    PathElement.prototype.hitTest = function (c, tx, ty) {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this._commands) {
            return false;
        }
        var bounds = this.getBounds();
        if (!bounds) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        c.save();
        if (this.transform) {
            model.setRenderTransform(c, this.transform, bounds.location);
        }
        c.beginPath();
        for (var _i = 0, _a = this._commands; _i < _a.length; _i++) {
            var command = _a[_i];
            if (command.charAt(0) === 'm') {
                var point = point_1.Point.parse(command.substring(1, command.length));
                c.moveTo(point.x, point.y);
            }
            else if (command.charAt(0) === 'l') {
                var point = point_1.Point.parse(command.substring(1, command.length));
                c.lineTo(point.x, point.y);
            }
            else if (command.charAt(0) === 'c') {
                var parts = command.substring(1, command.length).split(',');
                c.bezierCurveTo(parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]), parseFloat(parts[4]), parseFloat(parts[5]));
            }
            else if (command.charAt(0) === 'z') {
                c.closePath();
            }
        }
        var hit;
        if (this._winding && this._winding === winding_mode_1.WindingMode.EvenOdd) {
            hit = c.isPointInPath(tx, ty, 'evenodd');
        }
        else {
            hit = c.isPointInPath(tx, ty, 'nonzero');
        }
        c.restore();
        return hit;
    };
    /**
     * Returns string description of path element
     * @returns Description
     */
    PathElement.prototype.toString = function () {
        if (this._commands) {
            return this.type + ' -  ' + this._commands.length + ' Commands';
        }
        else {
            return this.type + ' -  0 Commands';
        }
    };
    /**
     * Can element be stroked
     * @returns Can stroke
     */
    PathElement.prototype.canStroke = function () {
        return true;
    };
    /**
     * Can element be filled
     * @returns Can fill
     */
    PathElement.prototype.canFill = function () {
        return true;
    };
    /**
     * Path elements can be moved using mouse
     * @returns True
     */
    PathElement.prototype.canMove = function () {
        return true;
    };
    /**
     * Path elements can be sized unless in point editing mode
     * @returns True unless in point editing mode
     */
    PathElement.prototype.canResize = function () {
        if (this.editPoints) {
            return false;
        }
        return true;
    };
    /**
     * Path elements can be nudged with the keyboard
     * @returns True
     */
    PathElement.prototype.canNudge = function () {
        return true;
    };
    /**
     * Path elements support individual point movement when in point editing mode
     * @returns True if in point editing mode
     */
    PathElement.prototype.canMovePoint = function () {
        if (this.editPoints) {
            return true;
        }
        return false;
    };
    /**
     * Path elements support point editing mode
     * @returns True
     */
    PathElement.prototype.canEditPoints = function () {
        return true;
    };
    /**
     * Nudges size of path element by a given width and height offset
     * @param offsetX - Width adjustment
     * @param offsetY - Height adjustment
     * @returns This path element
     */
    PathElement.prototype.nudgeSize = function (offsetX, offsetY) {
        if (!this._commands) {
            return this;
        }
        var b = this.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newWidth = b.width + offsetX;
        if (newWidth < 1) {
            newWidth = 1;
        }
        var newHeight = b.height + offsetY;
        if (newHeight < 1) {
            newHeight = 1;
        }
        if (this.aspectLocked) {
            if (offsetX === 0) {
                this.scale(newHeight / b.height, newHeight / b.height);
            }
            else {
                this.scale(newWidth / b.width, newWidth / b.width);
            }
        }
        else {
            this.scale(newWidth / b.width, newHeight / b.height);
        }
        this.bounds = undefined;
        return this;
    };
    /**
     * Scales path element command points by given horizontal and vertical scaling factors
     * @param scaleX - Horizontal scaling factor
     * @param scaleY - Vertical scaling factor
     * @returns This path element
     */
    PathElement.prototype.scale = function (scaleX, scaleY) {
        if (!this._commands) {
            return this;
        }
        var location = this.getLocation();
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        var newCommands = [];
        for (var _i = 0, _a = this._commands; _i < _a.length; _i++) {
            var command = _a[_i];
            if (command.charAt(0) === 'm') {
                newCommands.push('m' +
                    point_1.Point.scale(point_1.Point.parse(command.substring(1, command.length)), scaleX, scaleY, location.x, location.y).toString());
            }
            else if (command.charAt(0) === 'l') {
                newCommands.push('l' +
                    point_1.Point.scale(point_1.Point.parse(command.substring(1, command.length)), scaleX, scaleY, location.x, location.y).toString());
            }
            else if (command.charAt(0) === 'c') {
                var parts = command.substring(1, command.length).split(',');
                var cp1 = point_1.Point.scale(new point_1.Point(parseFloat(parts[0]), parseFloat(parts[1])), scaleX, scaleY, location.x, location.y);
                var cp2 = point_1.Point.scale(new point_1.Point(parseFloat(parts[2]), parseFloat(parts[3])), scaleX, scaleY, location.x, location.y);
                var endPoint = point_1.Point.scale(new point_1.Point(parseFloat(parts[4]), parseFloat(parts[5])), scaleX, scaleY, location.x, location.y);
                newCommands.push('c' + cp1.toString() + ',' + cp2.toString() + ',' + endPoint.toString());
            }
        }
        this._commands = newCommands;
        this.bounds = undefined;
        return this;
    };
    /**
     * Moves this path element by the given X and Y offsets
     * @param offsetX - X size offset
     * @param offsetY - Y size offset
     * @returns This path element
     */
    PathElement.prototype.translate = function (offsetX, offsetY) {
        if (!this._commands) {
            return this;
        }
        var newCommands = [];
        for (var _i = 0, _a = this._commands; _i < _a.length; _i++) {
            var command = _a[_i];
            if (command.charAt(0) === 'm') {
                newCommands.push('m' +
                    point_1.Point.translate(point_1.Point.parse(command.substring(1, command.length)), offsetX, offsetY).toString());
            }
            else if (command.charAt(0) === 'l') {
                newCommands.push('l' +
                    point_1.Point.translate(point_1.Point.parse(command.substring(1, command.length)), offsetX, offsetY).toString());
            }
            else if (command.charAt(0) === 'c') {
                var parts = command.substring(1, command.length).split(',');
                var cp1 = point_1.Point.translate(new point_1.Point(parseFloat(parts[0]), parseFloat(parts[1])), offsetX, offsetY);
                var cp2 = point_1.Point.translate(new point_1.Point(parseFloat(parts[2]), parseFloat(parts[3])), offsetX, offsetY);
                var endPoint = point_1.Point.translate(new point_1.Point(parseFloat(parts[4]), parseFloat(parts[5])), offsetX, offsetY);
                newCommands.push('c' + cp1.toString() + ',' + cp2.toString() + ',' + endPoint.toString());
            }
        }
        this._commands = newCommands;
        this.bounds = undefined;
        return this;
    };
    /**
     * Computes (if undefined) and returns rectangular bounding region
     * @returns Path element bounding region
     */
    PathElement.prototype.getBounds = function () {
        if (this.bounds) {
            return this.bounds;
        }
        if (!this._commands) {
            return undefined;
        }
        var minX;
        var minY;
        var maxX;
        var maxY;
        for (var _i = 0, _a = this._commands; _i < _a.length; _i++) {
            var command = _a[_i];
            var p = void 0;
            if (command.charAt(0) === 'm') {
                p = point_1.Point.parse(command.substring(1, command.length));
            }
            else if (command.charAt(0) === 'l') {
                p = point_1.Point.parse(command.substring(1, command.length));
            }
            else if (command.charAt(0) === 'c') {
                var parts = command.substring(1, command.length).split(',');
                p = new point_1.Point(parseFloat(parts[4]), parseFloat(parts[5]));
            }
            if (p) {
                if (!minX) {
                    minX = p.x;
                }
                else if (p.x < minX) {
                    minX = p.x;
                }
                if (!minY) {
                    minY = p.y;
                }
                else if (p.y < minY) {
                    minY = p.y;
                }
                if (!maxX) {
                    maxX = p.x;
                }
                else if (p.x > maxX) {
                    maxX = p.x;
                }
                if (!maxY) {
                    maxY = p.y;
                }
                else if (p.y > maxY) {
                    maxY = p.y;
                }
            }
        }
        if (minX !== undefined && minY !== undefined && maxX !== undefined && maxY !== undefined) {
            this.bounds = new region_1.Region(minX, minY, maxX - minX, maxY - minY);
            this._location = new point_1.Point(minX, minY);
            this._size = new size_1.Size(this.bounds.width, this.bounds.height);
            return this.bounds;
        }
        return undefined;
    };
    /**
     * Moves path element
     * @param pointSource - New location
     * @returns This path element
     */
    PathElement.prototype.setLocation = function (pointSource) {
        if (!this._commands) {
            return this;
        }
        var b = this.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var pt;
        if (typeof pointSource === 'string') {
            pt = point_1.Point.parse(pointSource);
        }
        else {
            pt = new point_1.Point(pointSource.x, pointSource.y);
        }
        var deltaX = pt.x - b.x;
        var deltaY = pt.y - b.y;
        this.translate(deltaX, deltaY);
        return this;
    };
    /**
     * Resizes path element
     * @param size - New size
     * @returns This path element
     */
    PathElement.prototype.setSize = function (sizeSource) {
        var size = size_1.Size.parse(sizeSource);
        var b = this.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var scaleX = size.width / b.width;
        var scaleY = size.height / b.height;
        this.scale(scaleX, scaleY);
        return this;
    };
    /**
     * Returns number of points in path element
     * @returns Number of points
     */
    PathElement.prototype.pointCount = function () {
        var pointCount = 0;
        if (this._commands) {
            for (var _i = 0, _a = this._commands; _i < _a.length; _i++) {
                var command = _a[_i];
                if (command.charAt(0) === 'm') {
                    pointCount++;
                }
                else if (command.charAt(0) === 'l') {
                    pointCount++;
                }
                else if (command.charAt(0) === 'c') {
                    pointCount += 3;
                }
            }
        }
        return pointCount;
    };
    /**
     * Returns point at a given index (0 to # points - 1)
     * @param index - Point index (0 to # points - 1)
     * @param depth - Point depth
     * @returns Requested point
     */
    PathElement.prototype.getPointAt = function (index, depth) {
        var current = -1;
        if (!this._commands) {
            throw new invalid_index_exception_1.InvalidIndexException(index);
        }
        for (var _i = 0, _a = this._commands; _i < _a.length; _i++) {
            var command = _a[_i];
            if (command.charAt(0) === 'm') {
                current++;
                if (current === index) {
                    return point_1.Point.parse(command.substring(1, command.length));
                }
            }
            else if (command.charAt(0) === 'l') {
                current++;
                if (current === index) {
                    return point_1.Point.parse(command.substring(1, command.length));
                }
            }
            else if (command.charAt(0) === 'c') {
                var parts = command.substring(1, command.length).split(',');
                var cp1 = new point_1.Point(parseFloat(parts[0]), parseFloat(parts[1]));
                var cp2 = new point_1.Point(parseFloat(parts[2]), parseFloat(parts[3]));
                var endPoint = new point_1.Point(parseFloat(parts[4]), parseFloat(parts[5]));
                current++;
                if (current === index) {
                    return endPoint;
                }
                if (depth === point_depth_1.PointDepth.Full) {
                    current++;
                    if (current === index) {
                        return cp1;
                    }
                    current++;
                    if (current === index) {
                        return cp2;
                    }
                }
            }
        }
        throw new invalid_index_exception_1.InvalidIndexException(index);
    };
    /**
     * Sets point at a given index (0 to # points - 1)
     * @param index - Point index (0 to # points - 1)
     * @param value - New point value
     * @param depth - Not applicable to this element
     */
    PathElement.prototype.setPointAt = function (index, value, depth) {
        var current = -1;
        if (!this._commands) {
            throw new Error(error_messages_1.ErrorMessages.NoCommandsAreDefined);
        }
        var cl = this._commands.length;
        for (var i = 0; i < cl; i++) {
            var command = this._commands[i];
            if (command.charAt(0) === 'm') {
                current++;
                if (current === index) {
                    this._commands[i] = 'm' + value.toString();
                    this.bounds = undefined;
                    return this;
                }
            }
            else if (command.charAt(0) === 'l') {
                current++;
                if (current === index) {
                    this._commands[i] = 'l' + value.toString();
                    this.bounds = undefined;
                    return this;
                }
            }
            else if (command.charAt(0) === 'c') {
                var parts = command.substring(1, command.length).split(',');
                var cp1 = new point_1.Point(parseFloat(parts[0]), parseFloat(parts[1]));
                var cp2 = new point_1.Point(parseFloat(parts[2]), parseFloat(parts[3]));
                var endPoint = new point_1.Point(parseFloat(parts[4]), parseFloat(parts[5]));
                current++;
                if (current === index) {
                    endPoint = value;
                    this._commands[i] = 'c' + cp1.toString() + ',' + cp2.toString() + ',' + endPoint.toString();
                    this.bounds = undefined;
                    return this;
                }
                if (depth === point_depth_1.PointDepth.Full) {
                    current++;
                    if (current === index) {
                        cp1 = value;
                        this._commands[i] = 'c' + cp1.toString() + ',' + cp2.toString() + ',' + endPoint.toString();
                        this.bounds = undefined;
                        return this;
                    }
                    current++;
                    if (current === index) {
                        cp2 = value;
                        this._commands[i] = 'c' + cp1.toString() + ',' + cp2.toString() + ',' + endPoint.toString();
                        this.bounds = undefined;
                        return this;
                    }
                }
            }
        }
        throw new invalid_index_exception_1.InvalidIndexException(index);
    };
    /**
     * Adds a new command to this path element
     * @param command - New drawing command
     * @returns This path element
     */
    PathElement.prototype.add = function (command) {
        if (!this._commands) {
            this._commands = [];
        }
        this._commands.push(command);
        this.bounds = undefined;
        return this;
    };
    Object.defineProperty(PathElement.prototype, "winding", {
        /**
         * Winding mode get accessor
         * @returns Fill winding mode
         */
        get: function () {
            return this._winding;
        },
        /**
         * Winding mode set accessor
         * @param newValue - New fill winding mode
         */
        set: function (newValue) {
            this._winding = newValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets fill winding mode
     * @param winding - Fill winding mode
     * @returns This path element
     */
    PathElement.prototype.setWinding = function (winding) {
        this._winding = winding;
        return this;
    };
    return PathElement;
}(element_base_1.ElementBase));
exports.PathElement = PathElement;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the transition state of a sprite element
 */
var SpriteState = /** @class */ (function () {
    /**
     * @param transition - Visual transition
     * @param offset - Offset into transition in the range of 0-1
     * @param frame1 - Source frame index
     * @param frame2 - Target frame index
     */
    function SpriteState(transition, offset, frame1, frame2) {
        this.transition = transition;
        this.offset = offset;
        this.frame1 = frame1;
        this.frame2 = frame2;
    }
    return SpriteState;
}());
exports.SpriteState = SpriteState;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Resource creator registration
 */
var ResourceCreatorRegistration = /** @class */ (function () {
    /**
     * @param name - Resource type name
     * @param creator - Resource creation function
     */
    function ResourceCreatorRegistration(name, creator) {
        this.name = name;
        this.creator = creator;
        this.name = name;
        this.creator = creator;
    }
    return ResourceCreatorRegistration;
}());
exports.ResourceCreatorRegistration = ResourceCreatorRegistration;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var resource_loader_state_1 = __webpack_require__(63);
var resource_manager_event_1 = __webpack_require__(46);
var resource_state_1 = __webpack_require__(64);
/**
 * Manages model resource loading and resolution
 */
var ResourceManager = /** @class */ (function () {
    /**
     * @param model - Model with resources to manage
     */
    function ResourceManager(model) {
        /**
         * Array of resources not yet downloaded
         */
        this.pendingResources = [];
        /**
         * Registered manager event listeners
         */
        this.listenerEvent = new resource_manager_event_1.ResourceManagerEvent();
        /**
         * Load completion callback - Multi event listener
         */
        this.loadCompleted = new resource_manager_event_1.ResourceManagerEvent();
        /**
         * Resource loading failed flag
         */
        this.resourceFailed = false;
        this.add = this.add.bind(this);
        this.merge = this.merge.bind(this);
        this.findBestResource = this.findBestResource.bind(this);
        this.get = this.get.bind(this);
        this.register = this.register.bind(this);
        this.unregister = this.unregister.bind(this);
        this.oncomplete = this.oncomplete.bind(this);
        this.load = this.load.bind(this);
        this.loadNext = this.loadNext.bind(this);
        this.pendingResourceCount = 0;
        this.totalResourceCount = 0;
        this.numberLoaded = 0;
        this.model = model;
    }
    /**
     * Adds a resource to managed resources
     * @param res - Resource to add
     */
    ResourceManager.prototype.add = function (res) {
        res.resourceManager = this;
        if (this.model) {
            this.model.resources.push(res);
        }
    };
    /**
     * Merges (adds or updates) a managed resource
     * @param res - Resource to merge
     */
    ResourceManager.prototype.merge = function (res) {
        var replaced;
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelPathUndefined);
        }
        if (res.locale) {
            this.model.resources.forEach(function (existing) {
                if (existing.key === res.key) {
                    if (existing.locale && existing.locale === res.locale) {
                        replaced = existing;
                        replaced.uri = res.uri;
                    }
                }
            });
        }
        else {
            this.model.resources.forEach(function (existing) {
                if (existing.key === res.key) {
                    if (!existing.locale) {
                        replaced = existing;
                        replaced.uri = res.uri;
                    }
                }
            });
        }
        if (!replaced) {
            res.resourceManager = this;
            this.model.resources.push(res);
        }
    };
    /**
     * Returns to closest matching localized resource for a
     * given key using fallback rules
     * @param key - Resource key
     * @param locale - Desired resource locale (e.g. en-US)
     * @returns Best available resource
     */
    ResourceManager.prototype.findBestResource = function (key, locale) {
        var language;
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        // Try to find exact locale match if locale was specified
        if (locale && locale.length > 0) {
            for (var _i = 0, _a = this.model.resources; _i < _a.length; _i++) {
                var compare = _a[_i];
                if (compare.matchesFull(key, locale)) {
                    return compare;
                }
            }
        }
        // If locale was specified
        if (locale && locale.length > 0) {
            // Return generic locale match if available
            if (locale.indexOf('-') !== -1) {
                language = locale.substring(0, locale.indexOf('-'));
                for (var _b = 0, _c = this.model.resources; _b < _c.length; _b++) {
                    var compare = _c[_b];
                    if (compare.matchesFull(key, language)) {
                        return compare;
                    }
                }
            }
            // Return other language variant if available
            if (locale.indexOf('-') !== -1) {
                language = locale.substring(0, locale.indexOf('-'));
                for (var _d = 0, _e = this.model.resources; _d < _e.length; _d++) {
                    var compare = _e[_d];
                    if (compare.matchesLanguage(key, language)) {
                        return compare;
                    }
                }
            }
            // If generic locale requested, return any matching specific locale
            if (locale.indexOf('-') === -1 && language) {
                for (var _f = 0, _g = this.model.resources; _f < _g.length; _f++) {
                    var compare = _g[_f];
                    if (compare.matchesLanguage(key, language)) {
                        return compare;
                    }
                }
            }
        }
        // Return unspecified locale id if available
        for (var _h = 0, _j = this.model.resources; _h < _j.length; _h++) {
            var compare = _j[_h];
            if (compare.matchesGeneric(key)) {
                return compare;
            }
        }
        // Return anything matching key
        for (var _k = 0, _l = this.model.resources; _k < _l.length; _k++) {
            var compare = _l[_k];
            if (compare.matchesKey(key)) {
                return compare;
            }
        }
        return undefined;
    };
    /**
     * Returns to closest matching localized resource for a
     * given key using fallback rules
     * @param key - Resource key
     * @param localeID - Desired resource locale (e.g. en-US)
     * @returns Best available resource
     */
    ResourceManager.prototype.get = function (key, localeId) {
        var locale;
        if (!localeId) {
            locale = this.currentLocaleId;
        }
        else {
            locale = localeId;
        }
        return this.findBestResource(key, locale);
    };
    /**
     * Registers best available resource for download
     * @param key - Resource key
     */
    ResourceManager.prototype.register = function (key) {
        var res = this.get(key, this.currentLocaleId);
        if (res) {
            if (!res.resourceManager) {
                res.resourceManager = this;
            }
            if (res.type === 'text' && !res.uri) {
                return;
            }
            if (!res.registered) {
                res.registered = true;
                if (!this.pendingResources) {
                    this.pendingResources = [];
                }
                this.pendingResources.push(res);
                this.pendingResourceCount++;
                this.totalResourceCount++;
            }
        }
    };
    /**
     * Unregisters a downloaded resource
     * @param res - Resource downloaded
     * @param success - True if resource downloaded successfully
     */
    ResourceManager.prototype.unregister = function (res, success) {
        // Remove resource from registered resources
        var state;
        if (!this.pendingResources) {
            return;
        }
        var pl = this.pendingResources.length;
        for (var i = 0; i < pl; i++) {
            if (this.pendingResources[i] === res) {
                this.pendingResources.splice(i, 1);
                res.registered = false;
                this.pendingResourceCount--;
                if (success) {
                    res.available = true;
                    this.numberLoaded++;
                }
                else {
                    res.error = true;
                    this.resourceFailed = true;
                }
                break;
            }
        }
        // Notify any event listeners
        if (this.listenerEvent.hasListeners()) {
            if (success) {
                state = new resource_state_1.ResourceState(this.numberLoaded, this.totalResourceCount, resource_loader_state_1.ResourceLoaderState.ResourceComplete, res.uri || res.key || '');
                this.listenerEvent.trigger(this, state);
            }
            else {
                state = new resource_state_1.ResourceState(this.numberLoaded, this.totalResourceCount, resource_loader_state_1.ResourceLoaderState.ResourceFailed, res.uri || res.key || '');
                this.listenerEvent.trigger(this, state);
            }
        }
        // If all done, call oncomplete
        if (this.pendingResourceCount === 0) {
            this.oncomplete(this.resourceFailed ? false : true);
            return;
        }
        // Load next resource if not done
        this.loadNext();
    };
    /**
     * Notify listeners and completion callbacks
     * @param success - Success or failure indication
     */
    ResourceManager.prototype.oncomplete = function (success) {
        var state;
        if (success) {
            state = new resource_state_1.ResourceState(this.numberLoaded, this.totalResourceCount, resource_loader_state_1.ResourceLoaderState.Idle, 'All Resources Loaded.');
        }
        else {
            state = new resource_state_1.ResourceState(this.numberLoaded, this.totalResourceCount, resource_loader_state_1.ResourceLoaderState.Idle, 'One or More Resources Failed To Load.');
        }
        this.listenerEvent.trigger(this, state);
        this.loadCompleted.trigger(this, success);
        if (this.completionCallback) {
            this.completionCallback(success);
        }
    };
    /**
     * Loads all resource registered for download
     * @param callback - Success or failure completion callback (result: boolean)
     */
    ResourceManager.prototype.load = function (callback) {
        var rm = this;
        rm.resourceFailed = false;
        rm.completionCallback = callback;
        if (rm.pendingResourceCount === 0) {
            rm.oncomplete(true);
            return;
        }
        if (this.listenerEvent.hasListeners()) {
            var state = new resource_state_1.ResourceState(rm.numberLoaded, rm.totalResourceCount, resource_loader_state_1.ResourceLoaderState.Loading, 'Starting Resource Load');
            this.listenerEvent.trigger(this, state);
        }
        rm.loadNext();
    };
    /**
     * Request next registered resource
     */
    ResourceManager.prototype.loadNext = function () {
        var state;
        var self = this;
        if (!self.pendingResources) {
            this.oncomplete(this.resourceFailed ? false : true);
            return;
        }
        if (self.pendingResourceCount === 0) {
            this.oncomplete(this.resourceFailed ? false : true);
            return;
        }
        // Get remaining pending resources
        var toLoad = [];
        self.pendingResourceCount = 0;
        for (var _i = 0, _a = self.pendingResources; _i < _a.length; _i++) {
            var pendingResource = _a[_i];
            if (!pendingResource.available) {
                toLoad.push(pendingResource);
                self.pendingResourceCount++;
            }
        }
        // If no pending resource, notify completion
        if (self.pendingResourceCount === 0) {
            self.oncomplete(true);
            return;
        }
        // Get next resource to load
        var resourceToLoad = toLoad[0];
        // Notify listeners of request
        if (self.listenerEvent.hasListeners()) {
            state = new resource_state_1.ResourceState(self.numberLoaded, self.totalResourceCount, resource_loader_state_1.ResourceLoaderState.ResourceStart, resourceToLoad.uri || resourceToLoad.key || '');
            self.listenerEvent.trigger(self, state);
        }
        // Initialize resource
        resourceToLoad.initialize();
    };
    return ResourceManager;
}());
exports.ResourceManager = ResourceManager;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes resource loading state
 */
var ResourceLoaderState;
(function (ResourceLoaderState) {
    /**
     * Loader is idle
     */
    ResourceLoaderState[ResourceLoaderState["Idle"] = 1] = "Idle";
    /**
     * Resource loading in progress
     */
    ResourceLoaderState[ResourceLoaderState["Loading"] = 2] = "Loading";
    /**
     * Start loading resource
     */
    ResourceLoaderState[ResourceLoaderState["ResourceStart"] = 3] = "ResourceStart";
    /**
     * Resource load completed successfully
     */
    ResourceLoaderState[ResourceLoaderState["ResourceComplete"] = 4] = "ResourceComplete";
    /**
     * Resource load failed
     */
    ResourceLoaderState[ResourceLoaderState["ResourceFailed"] = 5] = "ResourceFailed";
})(ResourceLoaderState = exports.ResourceLoaderState || (exports.ResourceLoaderState = {}));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicates state of loaded resources
 */
var ResourceState = /** @class */ (function () {
    /**
     * @param numberLoaded - Number of resources loaded
     * @param totalResources - Total number of resource to load
     * @param code - Resource loader state enumeration
     * @param status - Status string
     */
    function ResourceState(numberLoaded, totalResources, code, status) {
        this.numberLoaded = numberLoaded;
        this.totalResources = totalResources;
        this.code = code;
        this.status = status;
        this.toString = this.toString.bind(this);
    }
    /**
     * Describes resource state as string
     * @returns Description
     */
    ResourceState.prototype.toString = function () {
        return '[' + this.numberLoaded + '/' + this.totalResources + '] ' + this.code + '-' + this.status;
    };
    return ResourceState;
}());
exports.ResourceState = ResourceState;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generic, multicast model related event dispatcher
 */
var ModelEvent = /** @class */ (function () {
    function ModelEvent() {
        this.listeners = [];
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.clear = this.clear.bind(this);
        this.trigger = this.trigger.bind(this);
    }
    /**
     * Add a listener
     * @param listener - Listener function (c: Model, data?: T)
     */
    ModelEvent.prototype.add = function (listener) {
        this.listeners.push(listener);
    };
    /**
     * Removes a listener
     * @param listener - Listener function (c: Model, data?: T)
     */
    ModelEvent.prototype.remove = function (listener) {
        var index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    };
    /**
     * Clears listeners
     */
    ModelEvent.prototype.clear = function () {
        this.listeners = [];
    };
    /**
     * Trigger event
     *  @param model - Event model
     *  @param Event data
     */
    ModelEvent.prototype.trigger = function (model, data) {
        this.listeners.slice(0).forEach(function (h) { return h(model, data); });
    };
    return ModelEvent;
}());
exports.ModelEvent = ModelEvent;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mouse_event_args_1 = __webpack_require__(24);
/**
 * Represents a mouse location in event handlers
 */
var MouseLocationArgs = /** @class */ (function (_super) {
    __extends(MouseLocationArgs, _super);
    /**
     * @param event - Mouse event or simulated event args
     * @param location - Location
     */
    function MouseLocationArgs(event, location) {
        var _this = _super.call(this, event) || this;
        _this.location = location;
        return _this;
    }
    return MouseLocationArgs;
}(mouse_event_args_1.MouseEventArgs));
exports.MouseLocationArgs = MouseLocationArgs;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the raw source point at which a DOM event occurred
 */
var MousePositionInfo = /** @class */ (function () {
    /**
     * @param clientX - Raw x coordinate
     * @param clientY - Raw y coordinate
     */
    function MousePositionInfo(clientX, clientY) {
        this.clientX = clientX;
        this.clientY = clientY;
    }
    return MousePositionInfo;
}());
exports.MousePositionInfo = MousePositionInfo;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a size in event handlers
 */
var SizeArgs = /** @class */ (function () {
    /**
     * Describes a size
     * @param size - Size
     */
    function SizeArgs(size) {
        this.size = size;
    }
    return SizeArgs;
}());
exports.SizeArgs = SizeArgs;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates the callback parameters for timer methods
 */
var TimerParameters = /** @class */ (function () {
    /**
     * @param elapsedTime - Total elapsed time in seconds
     * @param tickDelta - Time since last callback event in seconds
     */
    function TimerParameters(elapsedTime, tickDelta) {
        this.elapsedTime = elapsedTime;
        this.tickDelta = tickDelta;
    }
    return TimerParameters;
}());
exports.TimerParameters = TimerParameters;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var location_args_1 = __webpack_require__(41);
/**
 * Describes a view drag event
 */
var ViewDragArgs = /** @class */ (function (_super) {
    __extends(ViewDragArgs, _super);
    /**
     * @param event - Mouse drag event
     * @param location - Location
     */
    function ViewDragArgs(event, location) {
        var _this = _super.call(this, location) || this;
        _this.event = event;
        return _this;
    }
    return ViewDragArgs;
}(location_args_1.LocationArgs));
exports.ViewDragArgs = ViewDragArgs;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates properties for element creation
 */
var ElementCreationProps = /** @class */ (function () {
    /**
     * @param model - Model to which element should be added
     * @param id - Element id
     * @param left - X coordinate
     * @param top - Y coordinate
     * @param width - Width
     * @param height - Height
     * @param props - Extra properties object
     */
    function ElementCreationProps(model, id, left, top, width, height, props) {
        this.model = model;
        this.id = id;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.props = props;
    }
    return ElementCreationProps;
}());
exports.ElementCreationProps = ElementCreationProps;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes file upload completion results
 */
var UploadCompletionProps = /** @class */ (function () {
    /**
     * @param element - Element associated with upload
     * @param success - Boolean completion result
     */
    function UploadCompletionProps(element, success) {
        this.element = element;
        this.success = success;
    }
    return UploadCompletionProps;
}());
exports.UploadCompletionProps = UploadCompletionProps;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes file upload progress
 */
var UploadProgressProps = /** @class */ (function () {
    /**
     * @param element - Element associated with upload
     * @param percent - Percent of upload completed
     */
    function UploadProgressProps(element, percent) {
        this.element = element;
        this.percent = percent;
    }
    return UploadProgressProps;
}());
exports.UploadProgressProps = UploadProgressProps;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = __webpack_require__(33);
/**
 * Central design component registry
 */
var ComponentRegistry = /** @class */ (function () {
    function ComponentRegistry() {
    }
    /**
     * Registers a component type
     * @param name - Component type name
     * @param props - Component template props
     */
    ComponentRegistry.registerComponent = function (name, props) {
        ComponentRegistry.unregisterComponent(name);
        var component = new component_1.Component(name, props);
        ComponentRegistry.components.push(component);
    };
    /**
     * Unregisters a component type
     * @param name - Component type name
     */
    ComponentRegistry.unregisterComponent = function (name) {
        var index = ComponentRegistry.getComponentIndex(name);
        if (index !== -1) {
            ComponentRegistry.components.splice(index, 1);
        }
    };
    /**
     * Retrieves index of registered component name or -1 if not found
     * @param name - Component type name
     * @returns Component index or -1 if not found
     */
    ComponentRegistry.getComponentIndex = function (name) {
        for (var i = 0; i < ComponentRegistry.components.length; i++) {
            if (ComponentRegistry.components[i].name === name) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Retrieves component by type name
     * @param name - Component type name
     * @returns Component or undefined if not found
     */
    ComponentRegistry.getComponent = function (name) {
        var index = ComponentRegistry.getComponentIndex(name);
        if (index !== -1) {
            return ComponentRegistry.components[index];
        }
        return undefined;
    };
    /**
     * Determines if component type name is registered
     * @param name - Component type name
     * @returns True if component type name is registered
     */
    ComponentRegistry.isComponentRegistered = function (name) {
        return ComponentRegistry.getComponentIndex(name) !== -1;
    };
    /**
     * Creates element of a component type
     * @param model - Target model for element
     * @param type - Component type name
     * @param id - New element ID
     * @param left - X coordinate
     * @param top - Y coordinate
     * @param width - Width
     * @param height - Height
     * @param props - Extra element properties
     */
    ComponentRegistry.createComponentElement = function (model, type, id, left, top, width, height, props) {
        var component = ComponentRegistry.getComponent(type);
        if (!component) {
            throw new Error("Component type " + type + " not registered.");
        }
        var el = component.CreateElement(model, id, left, top, width, height, props);
        return el;
    };
    /**
     * Calls fill image retrieval function to retrieve fill image
     * @param type - Component type name
     * @param callback - Image callback function (image: HTMLImageElement)
     */
    ComponentRegistry.getComponentFillImage = function (type, callback) {
        var component = ComponentRegistry.getComponent(type);
        if (!component) {
            throw new Error("Component type " + type + " not registered.");
        }
        component.GetFillImage(callback);
    };
    ComponentRegistry.initializeAll = function (callback) {
        ComponentRegistry.initializeAllCallback = callback;
        var _loop_1 = function (component) {
            if (!component.initialized && component.initialize) {
                component.initialize(function (success) {
                    if (success) {
                        component.initialized = true;
                        ComponentRegistry.initializeAll(ComponentRegistry.initializeAllCallback);
                    }
                    else {
                        if (ComponentRegistry.initializeAllCallback) {
                            ComponentRegistry.initializeAllCallback(false);
                            ComponentRegistry.initializeAllCallback = undefined;
                        }
                    }
                });
                return { value: void 0 };
            }
        };
        for (var _i = 0, _a = ComponentRegistry.components; _i < _a.length; _i++) {
            var component = _a[_i];
            var state_1 = _loop_1(component);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        if (ComponentRegistry.initializeAllCallback) {
            ComponentRegistry.initializeAllCallback(true);
            ComponentRegistry.initializeAllCallback = undefined;
        }
    };
    /**
     * Registered component array
     */
    ComponentRegistry.components = [];
    return ComponentRegistry;
}());
exports.ComponentRegistry = ComponentRegistry;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(4);
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var rectangle_element_1 = __webpack_require__(11);
var bitmap_resource_1 = __webpack_require__(19);
var model_resource_1 = __webpack_require__(35);
var component_1 = __webpack_require__(33);
var component_element_1 = __webpack_require__(25);
var image_based_component_props_1 = __webpack_require__(50);
var progress_rectangle_1 = __webpack_require__(76);
/**
 * Extends [[ImageBasedComponentProps]] to describe a component supporting uploadable attachments
 */
var UploadComponentProps = /** @class */ (function (_super) {
    __extends(UploadComponentProps, _super);
    function UploadComponentProps() {
        var _this = _super.call(this) || this;
        _this.fileExtensions = ['*'];
        _this.onCreate = _this.onCreate.bind(_this);
        _this.onSize = _this.onSize.bind(_this);
        _this.onUploadStart = _this.onUploadStart.bind(_this);
        _this.onUploadProgress = _this.onUploadProgress.bind(_this);
        _this.onUploadComplete = _this.onUploadComplete.bind(_this);
        _this.imageTag = 'upload';
        _this.acceptsDrag = true;
        _this.size.add(_this.onSize);
        _this.uploadStart.add(_this.onUploadStart);
        _this.uploadProgress.add(_this.onUploadProgress);
        _this.uploadComplete.add(_this.onUploadComplete);
        _this.initialize = _this.onInitialize;
        _this.create = _this.onCreate;
        _this.setCreationFill = _this.onSetCreationFill;
        _this.getFillImage = _this.onGetFillImage;
        return _this;
    }
    /**
     * Handles component element creation
     */
    UploadComponentProps.prototype.onCreate = function (props) {
        var m = model_1.Model.create(props.width, props.height);
        bitmap_resource_1.BitmapResource.create(this.imageTag, component_1.Component.baseImagePath + this.imageTag + '.png').addTo(m);
        m.stroke = 'Black';
        // m.fill = '#c0ffffff';
        var rect = rectangle_element_1.RectangleElement.create(0, 0, props.width, props.height)
            .setFill('image(0.75;' + this.imageTag + ')')
            .addTo(m);
        rect.id = 'r';
        // Upload indicator
        var upframe = rectangle_element_1.RectangleElement.create(0, props.height - 8, props.width, 8)
            .setFill('#00000000')
            .setStroke('#00000000')
            .addTo(m);
        upframe.id = 'upframe';
        var upind = new progress_rectangle_1.ProgressRectangle();
        upind
            .setLocation(point_1.Point.create(0, props.height - 8))
            .setSize(size_1.Size.create(0, 8))
            .setFill('#00000000')
            .setStroke('#00000000')
            .addTo(m);
        upind.id = 'upind';
        upind.percent = 0;
        model_resource_1.ModelResource.create(props.id, m).addTo(props.model);
        var el = new component_element_1.ComponentElement(props.id, props.left, props.top, props.width, props.height);
        props.model.add(el);
        return el;
    };
    UploadComponentProps.prototype.onSize = function (c, props) {
        var el = props.element;
        if (!el.model) {
            throw new Error('Model is undefined.');
        }
        if (!el.id) {
            throw new Error('Element ID is undefined.');
        }
        var size = props.size;
        var res = el.model.resourceManager.get(el.id);
        if (!res.model) {
            throw new Error('Model is undefined.');
        }
        res.model.setSize(size);
        var r = res.model.elementWithId('r');
        if (r) {
            r.setSize(size_1.Size.create(size.width, size.height));
        }
        var upframe = res.model.elementWithId('upframe');
        if (upframe) {
            upframe.setSize(size_1.Size.create(size.width, 8));
            upframe.setLocation(point_1.Point.create(0, size.height - 8));
        }
        var upind = res.model.elementWithId('upind');
        upind.setSize(size_1.Size.create(size.width * upind.percent, 8));
        upind.setLocation(point_1.Point.create(0, size.height - 8));
    };
    UploadComponentProps.prototype.onUploadStart = function (c, el) {
        if (!el.model) {
            throw new Error('Model is undefined.');
        }
        if (!el.id) {
            throw new Error('Element ID is undefined.');
        }
        var res = el.model.resourceManager.get(el.id);
        if (!res.model) {
            throw new Error('Model is undefined.');
        }
        var upframe = res.model.elementWithId('upframe');
        if (upframe) {
            upframe.setStroke('Black').setFill('#80000080');
        }
        var upind = res.model.elementWithId('upind');
        upind.setSize(size_1.Size.create(0, 8));
        upind.setFill('#ffff00');
    };
    UploadComponentProps.prototype.onUploadComplete = function (c, props) {
        var el = props.element;
        if (!el.model) {
            throw new Error('Model is undefined.');
        }
        if (!el.id) {
            throw new Error('Element ID is undefined.');
        }
        var res = el.model.resourceManager.get(el.id);
        if (!res.model) {
            throw new Error('Model is undefined.');
        }
        var upframe = res.model.elementWithId('upframe');
        if (upframe) {
            upframe.setStroke('#00000000').setFill('#00000000');
        }
        var upind = res.model.elementWithId('upind');
        if (upind) {
            upind.setSize(size_1.Size.create(0, 8));
            upind.setFill('#00000000');
        }
    };
    UploadComponentProps.prototype.onUploadProgress = function (c, props) {
        var el = props.element;
        if (!el.model || !el.id) {
            throw new Error('Model is undefined.');
        }
        var res = el.model.resourceManager.get(el.id);
        if (!res.model) {
            throw new Error('Model is undefined.');
        }
        var upind = res.model.elementWithId('upind');
        var upframe = res.model.elementWithId('upframe');
        upind.percent = props.percent / 100;
        if (upframe) {
            var frameSize = upframe.getSize();
            if (frameSize) {
                upind.setSize(size_1.Size.create(frameSize.width * upind.percent, 8));
            }
        }
    };
    return UploadComponentProps;
}(image_based_component_props_1.ImageBasedComponentProps));
exports.UploadComponentProps = UploadComponentProps;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_element_1 = __webpack_require__(11);
/**
 * Extends [[RectangleElement]] to describe progress bar progress
 */
var ProgressRectangle = /** @class */ (function (_super) {
    __extends(ProgressRectangle, _super);
    function ProgressRectangle() {
        var _this = _super.call(this) || this;
        _this.percent = 0;
        return _this;
    }
    return ProgressRectangle;
}(rectangle_element_1.RectangleElement));
exports.ProgressRectangle = ProgressRectangle;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates element drag event arguments
 */
var ElementDragArgs = /** @class */ (function () {
    /**
     * Describes an element drag event
     * @param element - Model element
     * @param event - Mouse drag event
     */
    function ElementDragArgs(element, event) {
        this.element = element;
        this.event = event;
    }
    return ElementDragArgs;
}());
exports.ElementDragArgs = ElementDragArgs;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var location_args_1 = __webpack_require__(41);
/**
 * Describes a temporary element location
 */
var ElementLocationArgs = /** @class */ (function (_super) {
    __extends(ElementLocationArgs, _super);
    /**
     * Constructs an element location args
     * @param element - Model element
     * @param location - Location
     */
    function ElementLocationArgs(element, location) {
        var _this = _super.call(this, location) || this;
        _this.element = element;
        return _this;
    }
    return ElementLocationArgs;
}(location_args_1.LocationArgs));
exports.ElementLocationArgs = ElementLocationArgs;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var size_args_1 = __webpack_require__(68);
/**
 * Describes a temporary element size
 */
var ElementSizeArgs = /** @class */ (function (_super) {
    __extends(ElementSizeArgs, _super);
    /**
     * Describes an element size
     * @param element - Model element
     * @param size - Size
     */
    function ElementSizeArgs(element, size) {
        var _this = _super.call(this, size) || this;
        _this.element = element;
        return _this;
    }
    return ElementSizeArgs;
}(size_args_1.SizeArgs));
exports.ElementSizeArgs = ElementSizeArgs;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates element sizing event arguments
 */
var ElementSizeProps = /** @class */ (function () {
    /**
     * Constructs an element size props
     * @param element - Element being sized
     * @param size - New element size
     */
    function ElementSizeProps(element, size) {
        this.element = element;
        this.size = size;
    }
    return ElementSizeProps;
}());
exports.ElementSizeProps = ElementSizeProps;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the tentative location of an element during a move operation
 */
var MoveLocation = /** @class */ (function () {
    /**
     * @param element - Element being sized
     * @param location - Tentative location of element
     */
    function MoveLocation(element, location) {
        this.element = element;
        this.location = location;
    }
    return MoveLocation;
}());
exports.MoveLocation = MoveLocation;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the tentative size of an element during a resizing operation
 */
var ResizeSize = /** @class */ (function () {
    /**
     * @param element - Element being sized
     * @param size - Tentative size of element
     */
    function ResizeSize(element, size) {
        this.element = element;
        this.size = size;
    }
    return ResizeSize;
}());
exports.ResizeSize = ResizeSize;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var point_depth_1 = __webpack_require__(16);
var size_1 = __webpack_require__(2);
var winding_mode_1 = __webpack_require__(31);
var fill_factory_1 = __webpack_require__(8);
/**
 * Renders elements for interactive manipulation
 */
var DesignRenderer = /** @class */ (function () {
    /**
     * Renders model elements for design controller
     * @param controller - Design controller
     */
    function DesignRenderer(controller) {
        this.renderToContext = this.renderToContext.bind(this);
        this.renderElement = this.renderElement.bind(this);
        this.renderImageElement = this.renderImageElement.bind(this);
        this.renderSpriteElement = this.renderSpriteElement.bind(this);
        this.renderRectangleElement = this.renderRectangleElement.bind(this);
        this.renderLineElement = this.renderLineElement.bind(this);
        this.renderPolylineElement = this.renderPolylineElement.bind(this);
        this.renderPolygonElement = this.renderPolygonElement.bind(this);
        this.renderPathElement = this.renderPathElement.bind(this);
        this.renderEllipseElement = this.renderEllipseElement.bind(this);
        this.renderTextElement = this.renderTextElement.bind(this);
        this.renderModelElement = this.renderModelElement.bind(this);
        this.controller = controller;
    }
    /**
     * Renders model elements at designated scale to canvas 2d context
     * @param c - Rendering context
     * @param scale - Rendering scale
     */
    DesignRenderer.prototype.renderToContext = function (c, scale) {
        var model = this.controller.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var b = model.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var w = b.size.width;
        var h = b.size.height;
        c.save();
        if (arguments.length > 1 && scale !== 1) {
            c.scale(scale, scale);
        }
        // If transformed
        if (model.transform) {
            model.setRenderTransform(c, model.transform, b.location);
        }
        // Fill
        if (fill_factory_1.FillFactory.setElementFill(c, model)) {
            if (model.fillOffsetX || model.fillOffsetY) {
                var fillOffsetX = model.fillOffsetX || 0;
                var fillOffsetY = model.fillOffsetY || 0;
                c.translate(fillOffsetX, fillOffsetY);
                c.fillRect(-fillOffsetX, -fillOffsetY, w, h);
                c.translate(-fillOffsetX, -fillOffsetY);
            }
            else {
                c.fillRect(0, 0, w, h);
            }
        }
        // Render elements
        c.globalAlpha = 1.0;
        for (var _i = 0, _a = model.elements; _i < _a.length; _i++) {
            var el = _a[_i];
            this.renderElement(c, el);
        }
        // Stroke
        if (model.setElementStroke(c, model)) {
            c.strokeRect(0, 0, w, h);
        }
        c.restore();
    };
    /**
     * Renders a model element to canvas 2d context
     * @param c - Rendering context
     * @param el - Element to render
     */
    DesignRenderer.prototype.renderElement = function (c, el) {
        if (el.type === 'image') {
            this.renderImageElement.apply(this, [c, el]);
        }
        else if (el.type === 'sprite') {
            this.renderSpriteElement.apply(this, [c, el]);
        }
        else if (el.type === 'rectangle') {
            this.renderRectangleElement.apply(this, [c, el]);
        }
        else if (el.type === 'line') {
            this.renderLineElement.apply(this, [c, el]);
        }
        else if (el.type === 'polyline') {
            this.renderPolylineElement.apply(this, [c, el]);
        }
        else if (el.type === 'polygon') {
            this.renderPolygonElement.apply(this, [c, el]);
        }
        else if (el.type === 'path') {
            this.renderPathElement.apply(this, [c, el]);
        }
        else if (el.type === 'ellipse') {
            this.renderEllipseElement.apply(this, [c, el]);
        }
        else if (el.type === 'model') {
            this.renderModelElement.apply(this, [c, el]);
        }
        else if (el.type === 'text') {
            this.renderTextElement.apply(this, [c, el]);
        }
    };
    /**
     * Renders an imag eelement to canvas 2d context
     * @param c - Rendering context
     * @param image - Image element to render
     */
    DesignRenderer.prototype.renderImageElement = function (c, image) {
        var model = image.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!image.source) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        var resource = model.resourceManager.get(image.source);
        if (!resource.image) {
            throw new Error(error_messages_1.ErrorMessages.ImageUndefined);
        }
        var location = image.getLocation();
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        var size = image.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(image)) {
            location = this.controller.getElementMoveLocation(image);
            size = this.controller.getElementResizeSize(image);
        }
        c.save();
        if (image.transform) {
            model.setRenderTransform(c, image.transform, location);
        }
        if (image.opacity !== undefined && image.opacity > 0 && image.opacity < 1.0) {
            var o = c.globalAlpha;
            c.globalAlpha = image.opacity;
            c.drawImage(resource.image, location.x, location.y, size.width, size.height);
            c.globalAlpha = o;
        }
        else if (resource.image) {
            try {
                c.drawImage(resource.image, location.x, location.y, size.width, size.height);
            }
            catch (ignore) {
                throw new Error(error_messages_1.ErrorMessages.CanvasDrawImageError + ':' + ignore);
            }
        }
        if (model.setElementStroke(c, image)) {
            c.strokeRect(location.x, location.y, size.width, size.height);
        }
        c.restore();
    };
    /**
     * Renders a sprite element to canvas 2d context
     * @param c - Rendering context
     * @param sprite - Sprite element to render
     */
    DesignRenderer.prototype.renderSpriteElement = function (c, sprite) {
        var model = sprite.model;
        if (!sprite.frames) {
            return;
        }
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var frame = sprite.frames[sprite.frameIndex];
        var resource = model.resourceManager.get(frame.source);
        if (!resource.image) {
            throw new Error(error_messages_1.ErrorMessages.ImageUndefined);
        }
        var location = sprite.getLocation();
        var size = sprite.getSize();
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(sprite)) {
            location = this.controller.getElementMoveLocation(sprite);
            size = this.controller.getElementResizeSize(sprite);
        }
        c.save();
        if (sprite.transform) {
            model.setRenderTransform(c, sprite.transform, location);
        }
        if (frame.opacity !== undefined && frame.opacity > 0 && frame.opacity < 1.0) {
            var o = c.globalAlpha;
            c.globalAlpha = frame.opacity;
            c.drawImage(resource.image, frame.x, frame.y, frame.width, frame.height, location.x, location.y, size.width, size.height);
            c.globalAlpha = o;
        }
        else {
            c.drawImage(resource.image, frame.x, frame.y, frame.width, frame.height, location.x, location.y, size.width, size.height);
        }
        c.restore();
    };
    /**
     * Renders a rectangle element to canvas 2d context
     * @param c - Rendering context
     * @param rectangle - Rectangle element to render
     */
    DesignRenderer.prototype.renderRectangleElement = function (c, rectangle) {
        var model = rectangle.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var location = rectangle.getLocation();
        var size = rectangle.getSize();
        if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(rectangle)) {
            location = this.controller.getElementMoveLocation(rectangle);
            size = this.controller.getElementResizeSize(rectangle);
        }
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var x = location.x;
        var y = location.y;
        var w = size.width;
        var h = size.height;
        c.save();
        if (rectangle.transform) {
            model.setRenderTransform(c, rectangle.transform, location);
        }
        if (fill_factory_1.FillFactory.setElementFill(c, rectangle)) {
            var loc = rectangle.getLocation();
            if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(rectangle)) {
                loc = this.controller.getElementMoveLocation(rectangle);
            }
            if (!loc) {
                throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
            }
            if (rectangle.fillOffsetX || rectangle.fillOffsetY) {
                var fillOffsetX = rectangle.fillOffsetX || 0;
                var fillOffsetY = rectangle.fillOffsetY || 0;
                c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                c.fillRect(-fillOffsetX, -fillOffsetY, w, h);
                c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
            }
            else {
                c.translate(loc.x, loc.y);
                c.fillRect(0, 0, w, h);
                c.translate(-loc.x, -loc.y);
            }
        }
        if (model.setElementStroke(c, rectangle)) {
            c.strokeRect(x, y, w, h);
        }
        c.restore();
    };
    /**
     * Renders a line element to canvas 2d context
     * @param c - Rendering context
     * @param line - Line element to render
     */
    DesignRenderer.prototype.renderLineElement = function (c, line) {
        var model = line.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var p1x;
        var p2x;
        var p1y;
        var p2y;
        var offsetX = 0;
        var offsetY = 0;
        var b = line.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var p1 = line.getP1();
        var p2 = line.getP2();
        if (!p1 || !p2) {
            throw new Error(error_messages_1.ErrorMessages.NoPointsAreDefined);
        }
        var location = b.location;
        if (this.controller.isMoving && this.controller.isSelected(line)) {
            location = this.controller.getElementMoveLocation(line);
            offsetX = location.x - b.x;
            offsetY = location.y - b.y;
        }
        if (this.controller.isMovingPoint && this.controller.isSelected(line) && this.controller.movingPointLocation) {
            if (this.controller.movingPointIndex === 0) {
                p1x = this.controller.movingPointLocation.x;
                p1y = this.controller.movingPointLocation.y;
                p2x = p2.x;
                p2y = p2.y;
            }
            else if (this.controller.movingPointIndex === 1) {
                p1x = p1.x;
                p1y = p1.y;
                p2x = this.controller.movingPointLocation.x;
                p2y = this.controller.movingPointLocation.y;
            }
            else {
                p1x = p1.x;
                p2x = p2.x;
                p1y = p1.y;
                p2y = p2.y;
            }
        }
        else {
            p1x = p1.x;
            p2x = p2.x;
            p1y = p1.y;
            p2y = p2.y;
        }
        c.save();
        if (line.transform) {
            model.setRenderTransform(c, line.transform, new point_1.Point(p1x, p1y));
        }
        c.beginPath();
        c.moveTo(p1x + offsetX, p1y + offsetY);
        c.lineTo(p2x + offsetX, p2y + offsetY);
        if (model.setElementStroke(c, line)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Renders a polyline element to canvas 2d context
     * @param c - Rendering context
     * @param polyline - Polyline element to render
     */
    DesignRenderer.prototype.renderPolylineElement = function (c, polyline) {
        var model = polyline.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var movingPointIndex;
        var movingPointLocation;
        var offsetX = 0;
        var offsetY = 0;
        var scaleX = 1;
        var scaleY = 1;
        var b = polyline.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var location = b.location;
        var size = b.size;
        var scaled;
        if (this.controller.isMoving && this.controller.isSelected(polyline)) {
            location = this.controller.getElementMoveLocation(polyline);
            offsetX = location.x - b.x;
            offsetY = location.y - b.y;
        }
        if (this.controller.isResizing && this.controller.isSelected(polyline)) {
            location = this.controller.getElementMoveLocation(polyline);
            size = this.controller.getElementResizeSize(polyline);
            offsetX = location.x - b.x;
            offsetY = location.y - b.y;
            scaleX = size.width / b.width;
            scaleY = size.height / b.height;
        }
        if (this.controller.isMovingPoint && this.controller.isSelected(polyline)) {
            movingPointIndex = this.controller.movingPointIndex;
            movingPointLocation = this.controller.movingPointLocation;
        }
        c.save();
        if (polyline.transform) {
            model.setRenderTransform(c, polyline.transform, b.location);
        }
        c.beginPath();
        if (movingPointIndex === 0 && movingPointLocation) {
            c.moveTo(movingPointLocation.x, movingPointLocation.y);
        }
        else {
            scaled = point_1.Point.scale(polyline.getPointAt(0), scaleX, scaleY, b.x, b.y);
            scaled = point_1.Point.translate(scaled, offsetX, offsetY);
            c.moveTo(scaled.x, scaled.y);
        }
        var l = polyline.pointCount();
        var i;
        var scaled2;
        if (polyline.smoothPoints) {
            for (i = 1; i < l - 2; i++) {
                if (i === movingPointIndex && movingPointLocation) {
                    scaled2 = point_1.Point.scale(polyline.getPointAt(i + 1), scaleX, scaleY, b.x, b.y);
                    scaled2 = point_1.Point.translate(scaled2, offsetX, offsetY);
                    var xc = (movingPointLocation.x + scaled2.x) / 2;
                    var yc = (movingPointLocation.y + scaled2.y) / 2;
                    c.quadraticCurveTo(movingPointLocation.x, movingPointLocation.y, xc, yc);
                }
                else {
                    scaled = point_1.Point.scale(polyline.getPointAt(i), scaleX, scaleY, b.x, b.y);
                    scaled = point_1.Point.translate(scaled, offsetX, offsetY);
                    scaled2 = point_1.Point.scale(polyline.getPointAt(i + 1), scaleX, scaleY, b.x, b.y);
                    scaled2 = point_1.Point.translate(scaled2, offsetX, offsetY);
                    var xc = (scaled.x + scaled2.x) / 2;
                    var yc = (scaled.y + scaled2.y) / 2;
                    c.quadraticCurveTo(scaled.x, scaled.y, xc, yc);
                }
            }
            c.lineCap = 'round';
            if (i === movingPointIndex && movingPointLocation) {
                scaled2 = point_1.Point.scale(movingPointLocation, scaleX, scaleY, b.x, b.y);
                scaled2 = point_1.Point.translate(scaled2, offsetX, offsetY);
                c.lineTo(scaled2.x, scaled2.y);
                // c.quadraticCurveTo(movingPointLocation.x, movingPointLocation.y, scaled2.x, scaled2.y);
            }
            else {
                scaled2 = point_1.Point.scale(polyline.getPointAt(i + 1), scaleX, scaleY, b.x, b.y);
                scaled2 = point_1.Point.translate(scaled2, offsetX, offsetY);
                c.lineTo(scaled2.x, scaled2.y);
            }
        }
        else {
            for (i = 1; i < l; i++) {
                if (i === movingPointIndex && movingPointLocation) {
                    c.lineTo(movingPointLocation.x + offsetX, movingPointLocation.y + offsetY);
                }
                else {
                    scaled = point_1.Point.scale(polyline.getPointAt(i), scaleX, scaleY, b.x, b.y);
                    scaled = point_1.Point.translate(scaled, offsetX, offsetY);
                    c.lineTo(scaled.x, scaled.y);
                }
            }
        }
        if (model.setElementStroke(c, polyline)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Renders a polygon element to canvas 2d context
     * @param c - Rendering context
     * @param polygon - Polygon element to render
     */
    DesignRenderer.prototype.renderPolygonElement = function (c, polygon) {
        var model = polygon.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var movingPointIndex = null;
        var movingPointLocation = null;
        var offsetX = 0;
        var offsetY = 0;
        var scaleX = 1;
        var scaleY = 1;
        var b = polygon.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var location = b.location;
        var size = b.size;
        var scaled;
        if (this.controller.isMoving && this.controller.isSelected(polygon)) {
            location = this.controller.getElementMoveLocation(polygon);
            offsetX = location.x - b.x;
            offsetY = location.y - b.y;
        }
        if (this.controller.isResizing && this.controller.isSelected(polygon)) {
            location = this.controller.getElementMoveLocation(polygon);
            size = this.controller.getElementResizeSize(polygon);
            offsetX = location.x - b.x;
            offsetY = location.y - b.y;
            scaleX = size.width / b.width;
            scaleY = size.height / b.height;
        }
        if (this.controller.isMovingPoint && this.controller.isSelected(polygon)) {
            movingPointIndex = this.controller.movingPointIndex;
            movingPointLocation = this.controller.movingPointLocation;
        }
        c.save();
        if (polygon.transform) {
            model.setRenderTransform(c, polygon.transform, b.location);
        }
        c.beginPath();
        if (movingPointIndex === 0 && movingPointLocation) {
            c.moveTo(movingPointLocation.x, movingPointLocation.y);
        }
        else {
            scaled = point_1.Point.scale(polygon.getPointAt(0), scaleX, scaleY, b.x, b.y);
            scaled = point_1.Point.translate(scaled, offsetX, offsetY);
            c.moveTo(scaled.x, scaled.y);
        }
        var l = polygon.pointCount();
        var i;
        for (i = 1; i < l; i++) {
            if (i === movingPointIndex && movingPointLocation) {
                c.lineTo(movingPointLocation.x, movingPointLocation.y);
            }
            else {
                scaled = point_1.Point.scale(polygon.getPointAt(i), scaleX, scaleY, b.x, b.y);
                scaled = point_1.Point.translate(scaled, offsetX, offsetY);
                c.lineTo(scaled.x, scaled.y);
            }
        }
        c.closePath();
        if (fill_factory_1.FillFactory.setElementFill(c, polygon)) {
            var loc = polygon.getLocation();
            if (!loc) {
                throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
            }
            if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(polygon)) {
                loc = this.controller.getElementMoveLocation(polygon);
            }
            if (polygon.fillOffsetX || polygon.fillOffsetY) {
                var fillOffsetX = polygon.fillOffsetX || 0;
                var fillOffsetY = polygon.fillOffsetY || 0;
                c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                if (polygon.winding && polygon.winding === winding_mode_1.WindingMode.EvenOdd) {
                    c.fill('evenodd');
                }
                else {
                    c.fill('nonzero');
                }
                c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
            }
            else {
                c.translate(loc.x, loc.y);
                if (polygon.winding && polygon.winding === winding_mode_1.WindingMode.EvenOdd) {
                    c.fill('evenodd');
                }
                else {
                    c.fill('nonzero');
                }
                c.translate(-loc.x, -loc.y);
            }
        }
        if (model.setElementStroke(c, polygon)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Renders a path element to canvas 2d context
     * @param c - Rendering context
     * @param pathElement - Path element to render
     */
    DesignRenderer.prototype.renderPathElement = function (c, pathElement) {
        var model = pathElement.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var movingPointIndex;
        var movingPointLocation;
        var depth;
        var current = -1;
        var offsetX = 0;
        var offsetY = 0;
        var scaleX = 1;
        var scaleY = 1;
        var b = pathElement.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var location = b.location;
        var size = b.size;
        if (this.controller.isMoving && this.controller.isSelected(pathElement)) {
            location = this.controller.getElementMoveLocation(pathElement);
            offsetX = location.x - b.x;
            offsetY = location.y - b.y;
        }
        if (this.controller.isResizing && this.controller.isSelected(pathElement)) {
            location = this.controller.getElementMoveLocation(pathElement);
            size = this.controller.getElementResizeSize(pathElement);
            offsetX = location.x - b.x;
            offsetY = location.y - b.y;
            scaleX = size.width / b.width;
            scaleY = size.height / b.height;
        }
        if (this.controller.isMovingPoint && this.controller.isSelected(pathElement)) {
            movingPointIndex = this.controller.movingPointIndex;
            movingPointLocation = this.controller.movingPointLocation;
            if (this.controller.selectedElementCount() === 1) {
                depth = point_depth_1.PointDepth.Full;
            }
            else {
                depth = point_depth_1.PointDepth.Simple;
            }
        }
        c.save();
        if (pathElement.transform) {
            model.setRenderTransform(c, pathElement.transform, b.location);
        }
        c.beginPath();
        var commands = pathElement.getCommands();
        if (commands) {
            for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
                var command = commands_1[_i];
                if (command.charAt(0) === 'm') {
                    current++;
                    if (current === movingPointIndex && movingPointLocation) {
                        c.moveTo(movingPointLocation.x + offsetX, movingPointLocation.y + offsetY);
                    }
                    else {
                        var point = point_1.Point.parse(command.substring(1, command.length));
                        point = point_1.Point.scale(point, scaleX, scaleY, b.x, b.y);
                        point = point_1.Point.translate(point, offsetX, offsetY);
                        c.moveTo(point.x, point.y);
                    }
                }
                else if (command.charAt(0) === 'l') {
                    current++;
                    if (current === movingPointIndex && movingPointLocation) {
                        c.lineTo(movingPointLocation.x + offsetX, movingPointLocation.y + offsetY);
                    }
                    else {
                        var point = point_1.Point.parse(command.substring(1, command.length));
                        point = point_1.Point.scale(point, scaleX, scaleY, b.x, b.y);
                        point = point_1.Point.translate(point, offsetX, offsetY);
                        c.lineTo(point.x, point.y);
                    }
                }
                else if (command.charAt(0) === 'c') {
                    var parts = command.substring(1, command.length).split(',');
                    var cp1 = new point_1.Point(parseFloat(parts[0]), parseFloat(parts[1]));
                    cp1 = point_1.Point.scale(cp1, scaleX, scaleY, b.x, b.y);
                    cp1 = point_1.Point.translate(cp1, offsetX, offsetY);
                    var cp2 = new point_1.Point(parseFloat(parts[2]), parseFloat(parts[3]));
                    cp2 = point_1.Point.scale(cp2, scaleX, scaleY, b.x, b.y);
                    cp2 = point_1.Point.translate(cp2, offsetX, offsetY);
                    var endPoint = new point_1.Point(parseFloat(parts[4]), parseFloat(parts[5]));
                    endPoint = point_1.Point.scale(endPoint, scaleX, scaleY, b.x, b.y);
                    endPoint = point_1.Point.translate(endPoint, offsetX, offsetY);
                    current++;
                    if (movingPointLocation) {
                        if (current === movingPointIndex) {
                            endPoint = movingPointLocation;
                        }
                        if (depth === point_depth_1.PointDepth.Full) {
                            current++;
                            if (current === movingPointIndex) {
                                cp1 = movingPointLocation;
                            }
                            current++;
                            if (current === movingPointIndex) {
                                cp2 = movingPointLocation;
                            }
                        }
                    }
                    c.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, endPoint.x, endPoint.y);
                }
                else if (command.charAt(0) === 'z') {
                    c.closePath();
                }
            }
        }
        if (fill_factory_1.FillFactory.setElementFill(c, pathElement)) {
            var loc = pathElement.getLocation();
            if (loc) {
                if ((this.controller.isMoving || this.controller.isResizing) &&
                    this.controller.isSelected(pathElement)) {
                    loc = this.controller.getElementMoveLocation(pathElement);
                }
                if (pathElement.fillOffsetX || pathElement.fillOffsetY) {
                    var fillOffsetX = pathElement.fillOffsetX || 0;
                    var fillOffsetY = pathElement.fillOffsetY || 0;
                    c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                    if (pathElement.winding && pathElement.winding === winding_mode_1.WindingMode.EvenOdd) {
                        c.fill('evenodd');
                    }
                    else {
                        c.fill('nonzero');
                    }
                    c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
                }
                else {
                    c.translate(loc.x, loc.y);
                    if (pathElement.winding && pathElement.winding === winding_mode_1.WindingMode.EvenOdd) {
                        c.fill('evenodd');
                    }
                    else {
                        c.fill('nonzero');
                    }
                    c.translate(-loc.x, -loc.y);
                }
            }
        }
        if (model.setElementStroke(c, pathElement)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Renders an ellipe element to canvas 2d context
     * @param c - Rendering context
     * @param ellipse - Ellipse element to render
     */
    DesignRenderer.prototype.renderEllipseElement = function (c, ellipse) {
        var model = ellipse.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var center = ellipse.getCenter();
        var radiusX = ellipse.radiusX;
        var radiusY = ellipse.radiusY;
        if (!radiusX || !radiusY || !center) {
            throw new Error(error_messages_1.ErrorMessages.PointsAreInvalid);
        }
        if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(ellipse)) {
            var location_1 = this.controller.getElementMoveLocation(ellipse);
            var size = this.controller.getElementResizeSize(ellipse);
            center = new point_1.Point(location_1.x + size.width / 2, location_1.y + size.height / 2);
            radiusX = size.width / 2;
            radiusY = size.height / 2;
        }
        c.save();
        if (ellipse.transform) {
            var b = ellipse.getBounds();
            if (b) {
                model.setRenderTransform(c, ellipse.transform, new point_1.Point(b.x, b.y));
            }
        }
        var scaleY = radiusY / radiusX;
        c.save();
        c.beginPath();
        c.translate(center.x, center.y);
        c.scale(1.0, scaleY);
        c.arc(0, 0, radiusX, 0, Math.PI * 2, false);
        c.closePath();
        c.restore();
        if (fill_factory_1.FillFactory.setElementFill(c, ellipse)) {
            var loc = ellipse.getLocation();
            if (loc) {
                if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(ellipse)) {
                    loc = this.controller.getElementMoveLocation(ellipse);
                }
                if (ellipse.fillOffsetX || ellipse.fillOffsetY) {
                    var fillOffsetX = ellipse.fillOffsetX || 0;
                    var fillOffsetY = ellipse.fillOffsetY || 0;
                    c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                    c.fill();
                    c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
                }
                else {
                    c.translate(loc.x, loc.y);
                    c.fill();
                    c.translate(-loc.x, -loc.y);
                }
            }
        }
        if (model.setElementStroke(c, ellipse)) {
            c.stroke();
        }
        c.restore();
    };
    /**
     * Renders a text element to canvas 2d context
     * @param c - Rendering context
     * @param rectangle - Text element to render
     */
    DesignRenderer.prototype.renderTextElement = function (c, textElement) {
        var model = textElement.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var location = textElement.getLocation();
        var size = textElement.getSize();
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(textElement)) {
            location = this.controller.getElementMoveLocation(textElement);
            size = this.controller.getElementResizeSize(textElement);
        }
        c.save();
        if (textElement.transform) {
            model.setRenderTransform(c, textElement.transform, new point_1.Point(location.x, location.y));
        }
        c.beginPath();
        c.rect(location.x, location.y, size.width + 10, size.height);
        c.clip();
        var font = '';
        var fontSize = 10.0;
        var parts;
        if (textElement.typestyle) {
            parts = textElement.typestyle.split(',');
            for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                var part = parts_1[_i];
                font += part;
                font += ' ';
            }
        }
        if (textElement.typesize) {
            fontSize = textElement.typesize;
            font += textElement.typesize + 'px ';
        }
        if (textElement.typeface) {
            parts = textElement.typeface.split(',');
            for (var _a = 0, parts_2 = parts; _a < parts_2.length; _a++) {
                var part = parts_2[_a];
                font += part;
                font += ' ';
            }
        }
        else {
            font += 'sans-serif';
        }
        c.font = font;
        var valign = 'top';
        var halign = 'left';
        if (textElement.alignment) {
            parts = textElement.alignment.split(',');
            for (var _b = 0, parts_3 = parts; _b < parts_3.length; _b++) {
                var part = parts_3[_b];
                if (part.toLowerCase() === 'start') {
                    c.textAlign = 'start';
                    halign = 'left';
                }
                else if (part.toLowerCase() === 'end') {
                    c.textAlign = 'end';
                    halign = 'right';
                }
                else if (part.toLowerCase() === 'left') {
                    c.textAlign = 'left';
                    halign = 'left';
                }
                else if (part.toLowerCase() === 'right') {
                    c.textAlign = 'right';
                    halign = 'right';
                }
                else if (part.toLowerCase() === 'center') {
                    c.textAlign = 'center';
                    halign = 'center';
                }
                else if (part.toLowerCase() === 'top') {
                    valign = 'top';
                }
                else if (part.toLowerCase() === 'bottom') {
                    valign = 'bottom';
                }
                else if (part.toLowerCase() === 'middle') {
                    valign = 'middle';
                }
            }
        }
        // Resolve content
        var text;
        if (textElement.source) {
            var resource = model.resourceManager.get(textElement.source);
            if (resource) {
                text = resource.text;
            }
        }
        if (!text) {
            text = textElement.text;
        }
        if (!text) {
            return;
        }
        // Get lines of content
        var lines = textElement.getLines(c, text, size.width);
        // Compute total height of content
        var lineHeight = fontSize;
        var totalHeight = lineHeight * lines.length;
        var x;
        var y;
        if (fill_factory_1.FillFactory.setElementFill(c, textElement)) {
            var loc = textElement.getLocation();
            if (loc) {
                if ((this.controller.isMoving || this.controller.isResizing) &&
                    this.controller.isSelected(textElement)) {
                    loc = this.controller.getElementMoveLocation(textElement);
                }
                // Iterate lines and fill text
                x = location.x;
                if (halign === 'right') {
                    x += size.width;
                }
                else if (halign === 'center') {
                    x += size.width / 2;
                }
                y = location.y;
                c.textBaseline = 'top';
                if (valign === 'middle') {
                    y = location.y + size.height / 2 - totalHeight / 2;
                }
                else if (valign === 'bottom') {
                    y = location.y + size.height - totalHeight;
                }
                for (var _c = 0, lines_1 = lines; _c < lines_1.length; _c++) {
                    var line = lines_1[_c];
                    if (textElement.fillOffsetX || textElement.fillOffsetY) {
                        var fillOffsetX = textElement.fillOffsetX || 0;
                        var fillOffsetY = textElement.fillOffsetY || 0;
                        c.translate(loc.x + fillOffsetX, loc.y + fillOffsetY);
                        c.fillText(line, -fillOffsetX + x - loc.x, -fillOffsetY + y - loc.y);
                        c.translate(-(loc.x + fillOffsetX), -(loc.y + fillOffsetY));
                    }
                    else {
                        c.translate(loc.x, loc.y);
                        c.fillText(line, x - loc.x, y - loc.y);
                        c.translate(-loc.x, -loc.y);
                    }
                    y += lineHeight;
                }
            }
        }
        if (model.setElementStroke(c, textElement)) {
            // Iterate lines and stroke text
            x = location.x;
            if (halign === 'right') {
                x += size.width;
            }
            else if (halign === 'center') {
                x += size.width / 2;
            }
            y = location.y;
            if (valign === 'middle') {
                y = location.y + size.height / 2 - totalHeight / 2;
            }
            else if (valign === 'bottom') {
                y = location.y + size.height - totalHeight;
            }
            for (var _d = 0, lines_2 = lines; _d < lines_2.length; _d++) {
                var line = lines_2[_d];
                c.strokeText(line, x, y);
                y += lineHeight;
            }
        }
        c.restore();
    };
    /**
     * Renders a model element to canvas 2d context
     * @param c - Rendering context
     * @param modelElement - Model element to render
     */
    DesignRenderer.prototype.renderModelElement = function (c, modelElement) {
        var model = modelElement.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var location = modelElement.getLocation();
        var size = modelElement.getSize();
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.LocationUndefined);
        }
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if ((this.controller.isMoving || this.controller.isResizing) && this.controller.isSelected(modelElement)) {
            location = this.controller.getElementMoveLocation(modelElement);
            size = this.controller.getElementResizeSize(modelElement);
        }
        if (!modelElement.source) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        var resource = model.resourceManager.get(modelElement.source);
        var innerModel = resource.model;
        if (!innerModel) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var x = location.x;
        var y = location.y;
        var w = 0;
        var h = 0;
        var rx = 1;
        var ry = 1;
        if (size && size !== size_1.Size.Empty) {
            w = size.width;
            h = size.height;
        }
        else if (innerModel.size) {
            size = innerModel.getSize();
            if (size) {
                w = size.width;
                h = size.height;
            }
        }
        if (innerModel.size) {
            size = innerModel.getSize();
            if (size) {
                rx = w / size.width;
                ry = h / size.height;
            }
        }
        // Clip to bounds
        /*
        c.save();
        c.rect(x, y, w, h);
        c.stroke();
        c.clip();
        */
        // If not full opacity, then render to intermediate canvas
        if (modelElement.opacity !== undefined && modelElement.opacity > 0 && modelElement.opacity < 1.0) {
            var offscreen = document.createElement('canvas');
            offscreen.width = w;
            offscreen.height = h;
            var c2 = offscreen.getContext('2d');
            if (c2) {
                c2.scale(rx, ry);
                innerModel.renderToContext(c2);
            }
            c.save();
            c.globalAlpha = modelElement.opacity;
            if (modelElement.transform) {
                model.setRenderTransform(c, modelElement.transform, new point_1.Point(x, y));
            }
            c.drawImage(offscreen, x, y);
            c.restore();
        }
        else {
            c.save();
            if (modelElement.transform) {
                model.setRenderTransform(c, modelElement.transform, new point_1.Point(x, y));
            }
            c.save();
            c.translate(x, y);
            if (rx !== 1 || ry !== 1) {
                c.scale(rx, ry);
            }
            // innerModel.renderer = this;
            innerModel.renderToContext(c);
            c.restore();
            c.restore();
        }
        // Restore clip
        // c.restore();
    };
    return DesignRenderer;
}());
exports.DesignRenderer = DesignRenderer;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Specifies design mode surface reference grid style
 */
var GridType;
(function (GridType) {
    /**
     * No grid
     */
    GridType[GridType["None"] = 0] = "None";
    /**
     * Dot grid
     */
    GridType[GridType["Dots"] = 1] = "Dots";
    /**
     * Line grid
     */
    GridType[GridType["Lines"] = 2] = "Lines";
})(GridType = exports.GridType || (exports.GridType = {}));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var point_depth_1 = __webpack_require__(16);
var size_1 = __webpack_require__(2);
var handle_1 = __webpack_require__(86);
/**
 * Creates design mode manipulation handles for supported elements
 */
var HandleFactory = /** @class */ (function () {
    function HandleFactory() {
    }
    /**
     * Creates array of handles for element
     * @param el - Element
     * @param c - Design controller
     * @param scale - Controller rendering scale
     * @returns Array of handles for element
     */
    HandleFactory.handlesForElement = function (el, c, scale) {
        if (el.type === 'path') {
            if (el.editPoints) {
                return HandleFactory.pathShapeHandles(el, c, scale);
            }
            return HandleFactory.rectangularElementHandles(el, c, scale);
        }
        if (el.type === 'polyline' || el.type === 'polygon') {
            if (el.editPoints) {
                return HandleFactory.pointContainerHandles(el, c, scale);
            }
            return HandleFactory.rectangularElementHandles(el, c, scale);
        }
        if (el.type === 'line') {
            return HandleFactory.pointContainerHandles(el, c, scale);
        }
        // image, sprite, rectangle, ellipse, model, text elements
        return HandleFactory.rectangularElementHandles(el, c, scale);
    };
    /**
     * Creates handles for rectangular elements
     * @param el - Rectangular element
     * @param c - Design controller
     * @param scale - Controller rendering scale
     * @returns Array of handles for element
     */
    HandleFactory.rectangularElementHandles = function (el, c, scale) {
        var handles = [];
        var moveLocation;
        var resizeSize;
        var b = el.getBounds();
        if (!b) {
            return handles;
        }
        var location = b.location;
        var size = b.size;
        if (c.isMoving) {
            if (c.isSelected(el) && el.canMove()) {
                moveLocation = c.getElementMoveLocation(el);
                location = new point_1.Point(moveLocation.x, moveLocation.y);
            }
        }
        else if (c.isResizing) {
            if (c.isSelected(el) && el.canResize()) {
                moveLocation = c.getElementMoveLocation(el);
                location = new point_1.Point(moveLocation.x, moveLocation.y);
                resizeSize = c.getElementResizeSize(el);
                size = new size_1.Size(resizeSize.width, resizeSize.height);
            }
        }
        // Top Left
        var topLeft = new handle_1.Handle(location.x, location.y, el, c);
        topLeft.scale = scale;
        topLeft.handleId = 'topLeft';
        topLeft.handleMoved = handle_1.Handle.sizeRectangleLeftTop;
        topLeft.canMoveHorizontal = true;
        topLeft.canMoveVertical = true;
        topLeft.cursor = 'nw-resize';
        topLeft.region = topLeft.getBounds();
        handles.push(topLeft);
        // Top center
        var topCenter = new handle_1.Handle(location.x + size.width / 2, location.y, el, c);
        topCenter.scale = scale;
        topCenter.handleId = 'topCenter';
        topCenter.handleMoved = handle_1.Handle.sizeRectangleTopCenter;
        topCenter.canMoveHorizontal = false;
        topCenter.canMoveVertical = true;
        topCenter.region = topCenter.getBounds();
        // topCenter.barRegion = elise.region(location.x, location.y, size.width / 4, scale);
        topCenter.cursor = 'n-resize';
        handles.push(topCenter);
        // Top right
        var topRight = new handle_1.Handle(location.x + size.width, location.y, el, c);
        topRight.scale = scale;
        topRight.handleId = 'topRight';
        topRight.handleMoved = handle_1.Handle.sizeRectangleRightTop;
        topRight.canMoveHorizontal = true;
        topRight.canMoveVertical = true;
        topRight.region = topRight.getBounds();
        topRight.cursor = 'ne-resize';
        handles.push(topRight);
        // Middle right
        var middleRight = new handle_1.Handle(location.x + size.width, location.y + size.height / 2, el, c);
        middleRight.scale = scale;
        middleRight.handleId = 'middleRight';
        middleRight.handleMoved = handle_1.Handle.sizeRectangleRightMiddle;
        middleRight.canMoveHorizontal = true;
        middleRight.canMoveVertical = false;
        middleRight.region = middleRight.getBounds();
        // middleRight.barRegion = elise.region(location.x + size.width, location.y, 4 / scale, size.height);
        middleRight.cursor = 'e-resize';
        handles.push(middleRight);
        // Bottom right
        var bottomRight = new handle_1.Handle(location.x + size.width, location.y + size.height, el, c);
        bottomRight.scale = scale;
        bottomRight.handleId = 'bottomRight';
        bottomRight.handleMoved = handle_1.Handle.sizeRectangleRightBottom;
        bottomRight.canMoveHorizontal = true;
        bottomRight.canMoveVertical = true;
        bottomRight.region = bottomRight.getBounds();
        bottomRight.cursor = 'se-resize';
        handles.push(bottomRight);
        // Bottom center
        var bottomCenter = new handle_1.Handle(location.x + size.width / 2, location.y + size.height, el, c);
        bottomCenter.scale = scale;
        bottomCenter.handleId = 'bottomCenter';
        bottomCenter.handleMoved = handle_1.Handle.sizeRectangleBottomCenter;
        bottomCenter.canMoveHorizontal = false;
        bottomCenter.canMoveVertical = true;
        bottomCenter.region = bottomCenter.getBounds();
        // bottomCenter.barRegion = elise.region(location.x, location.y + size.height, size.width, 4 / scale);
        bottomCenter.cursor = 's-resize';
        handles.push(bottomCenter);
        // Left bottom
        var bottomLeft = new handle_1.Handle(location.x, location.y + size.height, el, c);
        bottomLeft.scale = scale;
        bottomLeft.handleId = 'bottomLeft';
        bottomLeft.handleMoved = handle_1.Handle.sizeRectangleLeftBottom;
        bottomLeft.canMoveHorizontal = true;
        bottomLeft.canMoveVertical = true;
        bottomLeft.region = bottomLeft.getBounds();
        bottomLeft.cursor = 'sw-resize';
        handles.push(bottomLeft);
        // Middle left
        var middleLeft = new handle_1.Handle(location.x, location.y + size.height / 2, el, c);
        middleLeft.scale = scale;
        middleLeft.handleId = 'middleLeft';
        middleLeft.handleMoved = handle_1.Handle.sizeRectangleLeftMiddle;
        middleLeft.canMoveHorizontal = true;
        middleLeft.canMoveVertical = false;
        middleLeft.region = middleLeft.getBounds();
        // middleLeft.barRegion = elise.region(location.x, location.y, 4 / scale, size.height);
        middleLeft.cursor = 'w-resize';
        handles.push(middleLeft);
        // Connect handles
        topLeft.connectedHandles = [topRight, bottomLeft];
        bottomRight.connectedHandles = [bottomLeft, topRight];
        return handles;
    };
    /**
     * Creates handles for path elements
     * @param el - Path element
     * @param c - Design controller
     * @param scale - Controller rendering scale
     * @returns Array of handles for element
     */
    HandleFactory.pathShapeHandles = function (el, c, scale) {
        var handles = [];
        var movingPointIndex = -1;
        var offsetX = 0;
        var offsetY = 0;
        if (c.isMoving) {
            var offset = c.getElementMoveLocation(el);
            var b = el.getBounds();
            if (!b) {
                return handles;
            }
            offsetX = offset.x - b.x;
            offsetY = offset.y - b.y;
        }
        if (c.isMovingPoint && c.movingPointIndex !== undefined) {
            movingPointIndex = c.movingPointIndex;
        }
        var depth = point_depth_1.PointDepth.Simple;
        if (c.selectedElementCount() === 1) {
            depth = point_depth_1.PointDepth.Full;
        }
        var handleIndex = -1;
        var handlePoint = point_1.Point.Origin;
        var previous;
        var commands = el.getCommands();
        if (commands) {
            for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
                var command = commands_1[_i];
                var createHandle = true;
                var connectToPrevious = true;
                if (command.charAt(0) === 'm') {
                    handleIndex++;
                    handlePoint = point_1.Point.parse(command.substring(1, command.length));
                }
                else if (command.charAt(0) === 'l') {
                    handleIndex++;
                    handlePoint = point_1.Point.parse(command.substring(1, command.length));
                }
                else if (command.charAt(0) === 'c') {
                    var parts = command.substring(1, command.length).split(',');
                    var cp1 = new point_1.Point(parseFloat(parts[0]), parseFloat(parts[1]));
                    var cp2 = new point_1.Point(parseFloat(parts[2]), parseFloat(parts[3]));
                    var endPoint = new point_1.Point(parseFloat(parts[4]), parseFloat(parts[5]));
                    handleIndex++;
                    handlePoint = endPoint;
                    if (depth === point_depth_1.PointDepth.Full) {
                        if (handleIndex === movingPointIndex && c.movingPointLocation) {
                            handlePoint = c.movingPointLocation;
                        }
                        // End point
                        var hend = new handle_1.Handle(handlePoint.x + offsetX, handlePoint.y + offsetY, el, c);
                        hend.scale = scale;
                        hend.handleIndex = handleIndex;
                        hend.handleMoved = handle_1.Handle.movePointContainerPoint;
                        hend.canMoveHorizontal = true;
                        hend.canMoveVertical = true;
                        hend.region = hend.getBounds();
                        hend.cursor = 'move';
                        handles.push(hend);
                        if (connectToPrevious && previous) {
                            hend.connectedHandles = [previous];
                        }
                        previous = hend;
                        // Control point 1
                        handleIndex++;
                        handlePoint = cp1;
                        if (handleIndex === movingPointIndex && c.movingPointLocation) {
                            handlePoint = c.movingPointLocation;
                        }
                        var hcp1 = new handle_1.Handle(handlePoint.x + offsetX, handlePoint.y + offsetY, el, c);
                        hcp1.scale = scale;
                        hcp1.handleIndex = handleIndex;
                        hcp1.shape = 'circle';
                        hcp1.handleMoved = handle_1.Handle.movePointContainerPoint;
                        hcp1.canMoveHorizontal = true;
                        hcp1.canMoveVertical = true;
                        hcp1.region = hcp1.getBounds();
                        hcp1.cursor = 'move';
                        handles.push(hcp1);
                        hcp1.connectedHandles = [previous];
                        // Control point2
                        handleIndex++;
                        handlePoint = cp2;
                        if (handleIndex === movingPointIndex && c.movingPointLocation) {
                            handlePoint = c.movingPointLocation;
                        }
                        var hcp2 = new handle_1.Handle(handlePoint.x + offsetX, handlePoint.y + offsetY, el, c);
                        hcp2.scale = scale;
                        hcp2.handleIndex = handleIndex;
                        hcp2.shape = 'circle';
                        hcp2.handleMoved = handle_1.Handle.movePointContainerPoint;
                        hcp2.canMoveHorizontal = true;
                        hcp2.canMoveVertical = true;
                        hcp2.region = hcp2.getBounds();
                        hcp2.cursor = 'move';
                        handles.push(hcp2);
                        hcp2.connectedHandles = [previous];
                        createHandle = false;
                    }
                }
                else {
                    createHandle = false;
                    previous = undefined;
                }
                if (handleIndex === movingPointIndex && c.movingPointLocation) {
                    handlePoint = c.movingPointLocation;
                }
                if (createHandle) {
                    var h = new handle_1.Handle(handlePoint.x + offsetX, handlePoint.y + offsetY, el, c);
                    h.scale = scale;
                    h.handleIndex = handleIndex;
                    h.handleMoved = handle_1.Handle.movePointContainerPoint;
                    h.canMoveHorizontal = true;
                    h.canMoveVertical = true;
                    h.region = h.getBounds();
                    h.cursor = 'move';
                    handles.push(h);
                    if (connectToPrevious && previous) {
                        h.connectedHandles = [previous];
                    }
                    previous = h;
                }
            }
        }
        return handles;
    };
    /**
     * Creates handles for line, polyline and polygon elements (i.e. Point containers)
     * @param el - Element
     * @param c - Design controller
     * @param scale - Controller rendering scale
     * @returns Array of handles for element
     */
    HandleFactory.pointContainerHandles = function (el, c, scale) {
        var handles = [];
        var movingPointIndex;
        if (c.isMovingPoint && c.movingPointIndex !== undefined) {
            movingPointIndex = c.movingPointIndex;
        }
        var offsetX = 0;
        var offsetY = 0;
        if (c.isMoving) {
            var offset = c.getElementMoveLocation(el);
            var b = el.getBounds();
            if (!b) {
                return handles;
            }
            offsetX = offset.x - b.x;
            offsetY = offset.y - b.y;
        }
        var previous;
        var l = el.pointCount();
        for (var i = 0; i < l; i++) {
            var p = el.getPointAt(i);
            if (i === movingPointIndex && c.movingPointLocation) {
                p = c.movingPointLocation;
            }
            var h = new handle_1.Handle(p.x + offsetX, p.y + offsetY, el, c);
            h.scale = scale;
            h.handleIndex = i;
            h.handleMoved = handle_1.Handle.movePointContainerPoint;
            h.canMoveHorizontal = true;
            h.canMoveVertical = true;
            h.region = h.getBounds();
            h.cursor = 'move';
            handles.push(h);
            if (i !== 0 && previous) {
                h.connectedHandles = [previous];
            }
            previous = h;
        }
        // If polygon, connect last to first
        if (el.type === 'polygon') {
            handles[handles.length - 1].connectedHandles.push(handles[0]);
        }
        return handles;
    };
    return HandleFactory;
}());
exports.HandleFactory = HandleFactory;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var point_1 = __webpack_require__(1);
var point_depth_1 = __webpack_require__(16);
var region_1 = __webpack_require__(7);
var size_1 = __webpack_require__(2);
/**
 * Design mode element manipulation handle
 */
var Handle = /** @class */ (function () {
    /**
     * Represents an element design control handle
     * @param x - X coordinate
     * @param y - Y coordinate
     */
    function Handle(x, y, element, controller) {
        /**
         * Handles connected to this handle
         */
        this.connectedHandles = [];
        this.getBounds = this.getBounds.bind(this);
        this.draw = this.draw.bind(this);
        this.x = x;
        this.y = y;
        this.element = element;
        this.controller = controller;
        this.canMoveHorizontal = true;
        this.canMoveVertical = true;
        this.cursor = 'crosshair';
        this.scale = 1.0;
    }
    /**
     * Handles movement of left middle rectangular sizing handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.sizeRectangleLeftMiddle = function (h, args) {
        var el = h.element;
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newX = b.x + args.deltaX;
        var newWidth = b.width - args.deltaX;
        var newHeight = b.height;
        if (newWidth < h.controller.minElementSize.width || newHeight < h.controller.minElementSize.height) {
            return;
        }
        if (h.controller.snapToGrid) {
            var snappedX = h.controller.getNearestSnapX(newX);
            if (snappedX !== newX) {
                if (newWidth + newX - snappedX >= h.controller.minElementSize.width) {
                    newWidth += newX - snappedX;
                    newX = snappedX;
                }
            }
        }
        if (el.aspectLocked || h.controller.lockAspect) {
            var aspect = b.width / b.height;
            newHeight = newWidth / aspect;
        }
        var moveLocation = new point_1.Point(newX, b.y);
        var resizeSize = new size_1.Size(Math.max(newWidth, h.controller.minElementSize.width), Math.max(newHeight, h.controller.minElementSize.height));
        h.controller.setElementMoveLocation(el, moveLocation, resizeSize);
        h.controller.setElementResizeSize(el, resizeSize, moveLocation);
        h.controller.invalidate();
    };
    /**
     * Handles movement of left bottom rectangular sizing handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.sizeRectangleLeftBottom = function (h, args) {
        var el = h.element;
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        if (!el) {
            throw new Error(error_messages_1.ErrorMessages.ElementUndefined);
        }
        if (!el.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var newX = b.x + args.deltaX;
        var newWidth = b.width - args.deltaX;
        var newHeight = b.height + args.deltaY;
        if (newWidth < h.controller.minElementSize.width || newHeight < h.controller.minElementSize.height) {
            return;
        }
        if (newX < 0) {
            newX = 0;
        }
        var size = el.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if (b.y + newHeight > size.height) {
            newHeight = size.height - b.y;
        }
        if (h.controller.snapToGrid) {
            var snappedX = h.controller.getNearestSnapX(newX);
            if (snappedX !== newX) {
                if (newWidth + newX - snappedX >= h.controller.minElementSize.width) {
                    newWidth += newX - snappedX;
                    newX = snappedX;
                }
            }
            var newY = b.y + b.height + args.deltaY;
            var snappedY = h.controller.getNearestSnapY(newY);
            if (snappedY !== newY) {
                if (newHeight + newY - snappedY >= h.controller.minElementSize.height) {
                    newHeight -= newY - snappedY;
                }
            }
        }
        if (el.aspectLocked || h.controller.lockAspect) {
            var aspect = b.width / b.height;
            newHeight = newWidth / aspect;
        }
        var moveLocation = new point_1.Point(newX, b.y);
        var resizeSize = new size_1.Size(Math.max(newWidth, h.controller.minElementSize.width), Math.max(newHeight, h.controller.minElementSize.height));
        h.controller.setElementMoveLocation(el, moveLocation, resizeSize);
        h.controller.setElementResizeSize(el, resizeSize, moveLocation);
        h.controller.invalidate();
    };
    /**
     * Handles movement of bottom center rectangular sizing handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.sizeRectangleBottomCenter = function (h, args) {
        var el = h.element;
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newHeight = b.height + args.deltaY;
        var newWidth = b.width;
        if (newWidth < h.controller.minElementSize.width || newHeight < h.controller.minElementSize.height) {
            return;
        }
        if (h.controller.snapToGrid) {
            var newY = b.y + b.height + args.deltaY;
            var snappedY = h.controller.getNearestSnapY(newY);
            if (snappedY !== newY) {
                if (newHeight + newY - snappedY >= h.controller.minElementSize.height) {
                    newHeight -= newY - snappedY;
                }
            }
        }
        if (el.aspectLocked || h.controller.lockAspect) {
            var aspect = b.width / b.height;
            newWidth = newHeight * aspect;
        }
        var resizeSize = new size_1.Size(Math.max(newWidth, h.controller.minElementSize.width), Math.max(newHeight, h.controller.minElementSize.height));
        h.controller.setElementResizeSize(el, resizeSize);
        h.controller.invalidate();
    };
    /**
     * Handles movement of right middle rectangular sizing handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.sizeRectangleRightMiddle = function (h, args) {
        var el = h.element;
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newWidth = b.width + args.deltaX;
        var newHeight = b.height;
        if (newWidth < h.controller.minElementSize.width || newHeight < h.controller.minElementSize.height) {
            return;
        }
        if (h.controller.snapToGrid) {
            var newX = b.x + b.width + args.deltaX;
            var snappedX = h.controller.getNearestSnapX(newX);
            if (snappedX !== newX) {
                if (newWidth + newX - snappedX >= h.controller.minElementSize.width) {
                    newWidth -= newX - snappedX;
                }
            }
        }
        if (el.aspectLocked || h.controller.lockAspect) {
            var aspect = b.width / b.height;
            newHeight = newWidth / aspect;
        }
        var resizeSize = new size_1.Size(Math.max(newWidth, h.controller.minElementSize.width), Math.max(newHeight, h.controller.minElementSize.height));
        h.controller.setElementResizeSize(el, resizeSize);
        h.controller.invalidate();
    };
    /**
     * Handles movement of right bottom rectangular sizing handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.sizeRectangleRightBottom = function (h, args) {
        var el = h.element;
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newWidth = b.width + args.deltaX;
        var newHeight = b.height + args.deltaY;
        if (newWidth < h.controller.minElementSize.width || newHeight < h.controller.minElementSize.height) {
            return;
        }
        if (h.controller.snapToGrid) {
            var newX = b.x + b.width + args.deltaX;
            var snappedX = h.controller.getNearestSnapX(newX);
            if (snappedX !== newX) {
                if (newWidth + newX - snappedX >= h.controller.minElementSize.width) {
                    newWidth -= newX - snappedX;
                }
            }
            var newY = b.y + b.height + args.deltaY;
            var snappedY = h.controller.getNearestSnapY(newY);
            if (snappedY !== newY) {
                if (newHeight + newY - snappedY >= h.controller.minElementSize.height) {
                    newHeight -= newY - snappedY;
                }
            }
        }
        if (el.aspectLocked || h.controller.lockAspect) {
            var aspect = b.width / b.height;
            newHeight = newWidth / aspect;
        }
        var resizeSize = new size_1.Size(Math.max(newWidth, h.controller.minElementSize.width), Math.max(newHeight, h.controller.minElementSize.height));
        h.controller.setElementResizeSize(el, resizeSize);
        h.controller.invalidate();
    };
    /**
     * Handles movement of right top rectangular sizing handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.sizeRectangleRightTop = function (h, args) {
        var el = h.element;
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newY = b.y + args.deltaY;
        var newWidth = b.width + args.deltaX;
        var newHeight = b.height - args.deltaY;
        if (newWidth < h.controller.minElementSize.width || newHeight < h.controller.minElementSize.height) {
            return;
        }
        if (h.controller.snapToGrid) {
            var newX = b.x + b.width + args.deltaX;
            var snappedX = h.controller.getNearestSnapX(newX);
            if (snappedX !== newX) {
                if (newWidth + newX - snappedX >= h.controller.minElementSize.width) {
                    newWidth -= newX - snappedX;
                }
            }
            var snappedY = h.controller.getNearestSnapY(newY);
            if (snappedY !== newY) {
                if (newHeight + newY - snappedY >= h.controller.minElementSize.height) {
                    newHeight += newY - snappedY;
                    newY = snappedY;
                }
            }
        }
        if (el.aspectLocked || h.controller.lockAspect) {
            var aspect = b.width / b.height;
            var adjustedHeight = newWidth / aspect;
            newY -= adjustedHeight - newHeight;
            newHeight = adjustedHeight;
        }
        var moveLocation = new point_1.Point(b.x, newY);
        var resizeSize = new size_1.Size(Math.max(newWidth, h.controller.minElementSize.width), Math.max(newHeight, h.controller.minElementSize.height));
        h.controller.setElementMoveLocation(el, moveLocation, resizeSize);
        h.controller.setElementResizeSize(el, resizeSize, moveLocation);
        h.controller.invalidate();
    };
    /**
     * Handles movement of top center rectangular sizing handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.sizeRectangleTopCenter = function (h, args) {
        var el = h.element;
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newY = b.y + args.deltaY;
        var newHeight = b.height - args.deltaY;
        var newWidth = b.width;
        if (newWidth < h.controller.minElementSize.width || newHeight < h.controller.minElementSize.height) {
            return;
        }
        if (h.controller.snapToGrid) {
            var snappedY = h.controller.getNearestSnapY(newY);
            if (snappedY !== newY) {
                if (newHeight + newY - snappedY >= h.controller.minElementSize.height) {
                    newHeight += newY - snappedY;
                    newY = snappedY;
                }
            }
        }
        if (el.aspectLocked || h.controller.lockAspect) {
            var aspect = b.width / b.height;
            newWidth = newHeight * aspect;
        }
        var moveLocation = new point_1.Point(b.x, newY);
        var resizeSize = new size_1.Size(Math.max(newWidth, h.controller.minElementSize.width), Math.max(newHeight, h.controller.minElementSize.height));
        h.controller.setElementMoveLocation(el, moveLocation, resizeSize);
        h.controller.setElementResizeSize(el, resizeSize, moveLocation);
        h.controller.invalidate();
    };
    /**
     * Handles movement of left top rectangular sizing handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.sizeRectangleLeftTop = function (h, args) {
        var el = h.element;
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newX = b.x + args.deltaX;
        var newY = b.y + args.deltaY;
        var newWidth = b.width - args.deltaX;
        var newHeight = b.height - args.deltaY;
        if (newWidth < h.controller.minElementSize.width || newHeight < h.controller.minElementSize.height) {
            return;
        }
        if (h.controller.snapToGrid) {
            var snappedX = h.controller.getNearestSnapX(newX);
            if (snappedX !== newX) {
                if (newWidth + newX - snappedX >= h.controller.minElementSize.width) {
                    newWidth += newX - snappedX;
                    newX = snappedX;
                }
            }
            var snappedY = h.controller.getNearestSnapY(newY);
            if (snappedY !== newY) {
                if (newHeight + newY - snappedY >= h.controller.minElementSize.height) {
                    newHeight += newY - snappedY;
                    newY = snappedY;
                }
            }
        }
        if (el.aspectLocked || h.controller.lockAspect) {
            var aspect = b.width / b.height;
            var adjustedHeight = newWidth / aspect;
            newY -= adjustedHeight - newHeight;
            newHeight = adjustedHeight;
        }
        var moveLocation = new point_1.Point(newX, newY);
        var resizeSize = new size_1.Size(Math.max(newWidth, h.controller.minElementSize.width), Math.max(newHeight, h.controller.minElementSize.height));
        h.controller.setElementMoveLocation(el, moveLocation, resizeSize);
        h.controller.setElementResizeSize(el, resizeSize, moveLocation);
        h.controller.invalidate();
    };
    /**
     * Handles movement of point container point handle
     * @param h - Handle being moved
     * @param args - Handle movement info
     */
    Handle.movePointContainerPoint = function (h, args) {
        var el = h.element;
        var pointIndex = h.handleIndex;
        if (pointIndex === undefined) {
            return;
        }
        var depth = point_depth_1.PointDepth.Simple;
        if (h.controller.selectedElementCount() === 1) {
            depth = point_depth_1.PointDepth.Full;
        }
        var p = el.getPointAt(pointIndex, depth);
        var newX = p.x + args.deltaX;
        var newY = p.y + args.deltaY;
        if (h.controller.snapToGrid) {
            newX = h.controller.getNearestSnapX(newX);
            newY = h.controller.getNearestSnapY(newY);
        }
        h.controller.movingPointLocation = new point_1.Point(newX, newY);
        var dc = h.controller;
        dc.clearElementMoveLocations();
        dc.clearElementResizeSizes();
        el.clearBounds();
        h.controller.invalidate();
    };
    /**
     * Returns handle bounding region
     */
    Handle.prototype.getBounds = function () {
        var width = Handle.Size.width;
        var height = Handle.Size.height;
        if (this.scale && this.scale !== 0) {
            height /= this.scale;
            width /= this.scale;
        }
        return new region_1.Region(this.x - width / 2, this.y - height / 2, width, height);
    };
    /**
     * Renders handle to 2D canvas context
     * @param c - Rendering context
     */
    Handle.prototype.draw = function (c) {
        var b = this.region;
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        // Circle
        if (this.shape === 'circle') {
            c.beginPath();
            c.arc(b.x + b.width / 2, b.y + b.height / 2, b.width / 2, 0, 2 * Math.PI, false);
            c.fillStyle = 'black';
            c.fill();
            c.strokeStyle = 'white';
            c.lineWidth = 0.5 / this.scale;
            c.stroke();
        }
        else {
            // Rectangle
            c.fillStyle = 'white';
            c.fillRect(b.x, b.y, b.width, b.height);
            c.strokeStyle = 'black';
            c.lineWidth = 0.5 / this.scale;
            c.strokeRect(b.x, b.y, b.width, b.height);
        }
    };
    /**
     * Handle size
     */
    Handle.Size = new size_1.Size(7, 7);
    return Handle;
}());
exports.Handle = Handle;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(10);
var model_1 = __webpack_require__(4);
var scaling_info_1 = __webpack_require__(47);
var linear_gradient_fill_1 = __webpack_require__(27);
var radial_gradient_fill_1 = __webpack_require__(28);
/**
 * Describes element fill
 */
var FillInfo = /** @class */ (function () {
    function FillInfo(fillType) {
        this.type = fillType;
    }
    FillInfo.getNoFillInfo = function () {
        var fillInfo = new FillInfo('none');
        return fillInfo;
    };
    FillInfo.getColorFillInfo = function (fillColor, fillOpacity) {
        var fillInfo = new FillInfo('color');
        fillInfo.color = fillColor;
        fillInfo.opacity = fillOpacity;
        return fillInfo;
    };
    FillInfo.getImageFillInfo = function (fillSource, fillOpacity, fillScale) {
        var fillInfo = new FillInfo('image');
        fillInfo.source = fillSource;
        fillInfo.opacity = fillOpacity;
        fillInfo.scale = fillScale;
        return fillInfo;
    };
    FillInfo.getModelFillInfo = function (fillSource, fillOpacity, fillScale) {
        var fillInfo = new FillInfo('model');
        fillInfo.source = fillSource;
        fillInfo.opacity = fillOpacity;
        fillInfo.scale = fillScale;
        return fillInfo;
    };
    FillInfo.getLinearGradientFillInfo = function (start, end, stops) {
        var fillInfo = new FillInfo('linear');
        fillInfo.start = start;
        fillInfo.end = end;
        fillInfo.fillStops = stops.slice();
        return fillInfo;
    };
    FillInfo.getRadialGradientFillInfo = function (center, focus, radiusX, radiusY, stops) {
        var fillInfo = new FillInfo('radial');
        fillInfo.center = center;
        fillInfo.focus = focus;
        fillInfo.radiusX = radiusX;
        fillInfo.radiusY = radiusY;
        fillInfo.fillStops = stops.slice();
        return fillInfo;
    };
    FillInfo.getFillInfo = function (el) {
        if (el.fill) {
            var fill = el.fill;
            if (fill instanceof linear_gradient_fill_1.LinearGradientFill) {
                return FillInfo.getLinearGradientFillInfo(fill.start, fill.end, fill.stops);
            }
            else if (fill instanceof radial_gradient_fill_1.RadialGradientFill) {
                return FillInfo.getRadialGradientFillInfo(fill.center, fill.focus, fill.radiusX, fill.radiusY, fill.stops);
            }
            else if (typeof fill === 'string') {
                if (fill.toLowerCase().substring(0, 6) === 'image(') {
                    var key = fill.substring(6, fill.length - 1);
                    var opacity = 1;
                    if (key.indexOf(';') !== -1) {
                        var parts = key.split(';');
                        opacity = parseFloat(parts[0]);
                        key = parts[1];
                    }
                    var scaling = new scaling_info_1.ScalingInfo();
                    if (el.model) {
                        scaling = el.model.getFillScale(el);
                    }
                    else if (el instanceof model_1.Model) {
                        scaling = el.getFillScale(el);
                    }
                    var fillScale = 1.0;
                    if (scaling.rx !== 1) {
                        fillScale = scaling.rx;
                    }
                    else if (scaling.ry !== 1) {
                        fillScale = scaling.ry;
                    }
                    return FillInfo.getImageFillInfo(key, opacity * 255.0, fillScale);
                }
                else if (fill.toLowerCase().substring(0, 6) === 'model(') {
                    var key = fill.substring(6, fill.length - 1);
                    var opacity = 1;
                    if (key.indexOf(';') !== -1) {
                        var parts = key.split(';');
                        opacity = parseFloat(parts[0]);
                        key = parts[1];
                    }
                    var scaling = new scaling_info_1.ScalingInfo();
                    if (el.model) {
                        scaling = el.model.getFillScale(el);
                    }
                    else if (el instanceof model_1.Model) {
                        scaling = el.getFillScale(el);
                    }
                    var fillScale = 1.0;
                    if (scaling.rx !== 1) {
                        fillScale = scaling.rx;
                    }
                    else if (scaling.ry !== 1) {
                        fillScale = scaling.ry;
                    }
                    return FillInfo.getModelFillInfo(key, opacity * 255.0, fillScale);
                }
                else {
                    var color = color_1.Color.parse(fill);
                    var opacity = 255;
                    if (color.a !== 255) {
                        opacity = color.a;
                        color.a = 255;
                    }
                    return FillInfo.getColorFillInfo(color.toHexString(), opacity);
                }
            }
        }
        else {
            return FillInfo.getNoFillInfo();
        }
    };
    return FillInfo;
}());
exports.FillInfo = FillInfo;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var transitions_1 = __webpack_require__(14);
var pane_transition_1 = __webpack_require__(13);
/**
 * Fade pane transition
 */
var PaneTransitionFade = /** @class */ (function (_super) {
    __extends(PaneTransitionFade, _super);
    function PaneTransitionFade(pane, target, callback, duration) {
        var _this = _super.call(this, pane, target, callback) || this;
        _this.tick = _this.tick.bind(_this);
        _this.duration = duration;
        return _this;
    }
    PaneTransitionFade.prototype.start = function () {
        var self = this;
        if (!self.pane || !self.target) {
            return;
        }
        self.source = self.pane.childSurface;
        self.onStart();
        self.target.setOpacity(0);
        self.bind(function (surface) {
            // Save start time after preparation
            self.startTime = performance.now();
            // Fade in
            self.timer = setInterval(self.tick, 15);
        }, false);
    };
    PaneTransitionFade.prototype.tick = function () {
        if (!this.target) {
            return;
        }
        // Get elapsed time since start
        if (!this.startTime) {
            throw new Error(error_messages_1.ErrorMessages.StartTimeIsUndefined);
        }
        if (!this.source) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        var elapsed = performance.now() - this.startTime;
        // Map elapsed time to offset
        var offset = elapsed / (this.duration * 1000);
        if (offset >= 1 || isNaN(offset)) {
            this.target.setOpacity(1);
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = undefined;
            }
            this.source.unbind();
            this.onComplete();
        }
        else {
            // Apply easing
            offset = transitions_1.TransitionRenderer.easeInOutCubic(offset);
            this.target.setOpacity(offset);
            this.source.setOpacity(1 - offset);
        }
    };
    return PaneTransitionFade;
}(pane_transition_1.PaneTransition));
exports.PaneTransitionFade = PaneTransitionFade;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pane_transition_1 = __webpack_require__(13);
/**
 * Dummy (No) Pane Transition
 */
var PaneTransitionNone = /** @class */ (function (_super) {
    __extends(PaneTransitionNone, _super);
    function PaneTransitionNone(pane, target, callback) {
        return _super.call(this, pane, target, callback) || this;
    }
    PaneTransitionNone.prototype.start = function () {
        var self = this;
        if (!self.pane) {
            return;
        }
        var source = self.pane.childSurface;
        self.onStart();
        self.bind(function (surface) {
            source.unbind();
            self.onComplete();
        }, false);
    };
    return PaneTransitionNone;
}(pane_transition_1.PaneTransition));
exports.PaneTransitionNone = PaneTransitionNone;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var transitions_1 = __webpack_require__(14);
var pane_transition_1 = __webpack_require__(13);
var pane_transition_direction_1 = __webpack_require__(20);
/**
 * Push pane transition
 */
var PaneTransitionPush = /** @class */ (function (_super) {
    __extends(PaneTransitionPush, _super);
    function PaneTransitionPush(pane, target, callback, duration, direction) {
        var _this = _super.call(this, pane, target, callback) || this;
        _this.tick = _this.tick.bind(_this);
        _this.duration = duration;
        _this.direction = direction;
        return _this;
    }
    PaneTransitionPush.prototype.start = function () {
        var self = this;
        if (!self.pane || !self.target) {
            return;
        }
        self.source = self.pane.childSurface;
        self.onStart();
        switch (self.direction) {
            case pane_transition_direction_1.PaneTransitionDirection.Left:
                self.target.setTranslateX(self.pane.width);
                break;
            case pane_transition_direction_1.PaneTransitionDirection.Right:
                self.target.setTranslateX(-self.target.width);
                break;
            case pane_transition_direction_1.PaneTransitionDirection.Up:
                self.target.setTranslateY(self.pane.height);
                break;
            case pane_transition_direction_1.PaneTransitionDirection.Down:
                self.target.setTranslateY(-self.target.height);
                break;
        }
        self.bind(function (surface) {
            // Save start time after preparation
            self.startTime = performance.now();
            // Fade in
            self.timer = setInterval(self.tick, 15);
        }, false);
    };
    PaneTransitionPush.prototype.tick = function () {
        if (!this.pane || !this.target) {
            return;
        }
        // Get elapsed time since start
        var elapsed = 0;
        if (!this.source) {
            return;
        }
        if (this.startTime) {
            elapsed = performance.now() - this.startTime;
        }
        // Map elapsed time to offset
        var offset = elapsed / (this.duration * 1000);
        if (offset >= 1 || isNaN(offset)) {
            this.target.setTranslateX(0);
            this.target.setTranslateY(0);
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = undefined;
            }
            this.source.unbind();
            this.onComplete();
        }
        else {
            // Apply easing
            offset = transitions_1.TransitionRenderer.easeInOutCubic(offset);
            switch (this.direction) {
                case pane_transition_direction_1.PaneTransitionDirection.Left:
                    {
                        var offsetX = offset * this.pane.width;
                        this.target.setTranslateX(this.pane.width - offsetX);
                        this.source.setTranslateX(-offsetX);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Right:
                    {
                        var offsetX = offset * this.target.width;
                        this.target.setTranslateX(-this.target.width + offsetX);
                        this.source.setTranslateX(offsetX);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Up:
                    {
                        var offsetY = offset * this.pane.height;
                        this.target.setTranslateY(this.pane.height - offsetY);
                        this.source.setTranslateY(-offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Down:
                    {
                        var offsetY = offset * this.target.height;
                        this.target.setTranslateY(-this.target.height + offsetY);
                        this.source.setTranslateY(offsetY);
                    }
                    break;
            }
        }
    };
    return PaneTransitionPush;
}(pane_transition_1.PaneTransition));
exports.PaneTransitionPush = PaneTransitionPush;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var transitions_1 = __webpack_require__(14);
var pane_transition_1 = __webpack_require__(13);
var pane_transition_direction_1 = __webpack_require__(20);
/**
 * Reveal pane transition
 */
var PaneTransitionReveal = /** @class */ (function (_super) {
    __extends(PaneTransitionReveal, _super);
    function PaneTransitionReveal(pane, target, callback, duration, direction) {
        var _this = _super.call(this, pane, target, callback) || this;
        _this.tick = _this.tick.bind(_this);
        _this.duration = duration;
        _this.direction = direction;
        return _this;
    }
    PaneTransitionReveal.prototype.start = function () {
        var self = this;
        if (!self.pane) {
            return;
        }
        self.source = self.pane.childSurface;
        self.onStart();
        self.bind(function (surface) {
            // Save start time after preparation
            self.startTime = performance.now();
            // Fade in
            self.timer = setInterval(self.tick, 15);
        }, true);
    };
    PaneTransitionReveal.prototype.tick = function () {
        if (!this.pane) {
            return;
        }
        if (!this.startTime) {
            throw new Error(error_messages_1.ErrorMessages.StartTimeIsUndefined);
        }
        if (!this.source) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        // Get elapsed time since start
        var elapsed = performance.now() - this.startTime;
        // Map elapsed time to offset
        var offset = elapsed / (this.duration * 1000);
        if (offset >= 1 || isNaN(offset)) {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = undefined;
            }
            this.source.unbind();
            this.onComplete();
        }
        else {
            // Apply easing
            offset = transitions_1.TransitionRenderer.easeInOutCubic(offset);
            switch (this.direction) {
                case pane_transition_direction_1.PaneTransitionDirection.Left:
                    {
                        var offsetX = Math.floor(offset * this.source.width);
                        this.source.setTranslateX(-offsetX);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.LeftUp:
                    {
                        var offsetX = Math.floor(offset * this.source.width);
                        var offsetY = Math.floor(offset * this.source.height);
                        this.source.setTranslateX(-offsetX);
                        this.source.setTranslateY(-offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.LeftDown:
                    {
                        var offsetX = Math.floor(offset * this.source.width);
                        var offsetY = Math.floor(offset * this.source.height);
                        this.source.setTranslateX(-offsetX);
                        this.source.setTranslateY(offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Right:
                    {
                        var offsetX = Math.floor(offset * this.pane.width);
                        this.source.setTranslateX(offsetX);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.RightUp:
                    {
                        var offsetX = Math.floor(offset * this.pane.width);
                        var offsetY = Math.floor(offset * this.source.height);
                        this.source.setTranslateX(offsetX);
                        this.source.setTranslateY(-offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.RightDown:
                    {
                        var offsetX = Math.floor(offset * this.pane.width);
                        var offsetY = Math.floor(offset * this.source.height);
                        this.source.setTranslateX(offsetX);
                        this.source.setTranslateY(offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Up:
                    {
                        var offsetY = Math.floor(offset * this.source.height);
                        this.source.setTranslateY(-offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Down:
                    {
                        var offsetY = Math.floor(offset * this.source.height);
                        this.source.setTranslateY(offsetY);
                    }
                    break;
            }
        }
    };
    return PaneTransitionReveal;
}(pane_transition_1.PaneTransition));
exports.PaneTransitionReveal = PaneTransitionReveal;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var transitions_1 = __webpack_require__(14);
var pane_transition_1 = __webpack_require__(13);
var pane_transition_direction_1 = __webpack_require__(20);
/**
 * Slide pane transition
 */
var PaneTransitionSlide = /** @class */ (function (_super) {
    __extends(PaneTransitionSlide, _super);
    function PaneTransitionSlide(pane, target, callback, duration, direction) {
        var _this = _super.call(this, pane, target, callback) || this;
        _this.tick = _this.tick.bind(_this);
        _this.duration = duration;
        _this.direction = direction;
        return _this;
    }
    PaneTransitionSlide.prototype.start = function () {
        var self = this;
        if (!self.pane || !self.target) {
            return;
        }
        self.source = self.pane.childSurface;
        self.onStart();
        self.bind(function (surface) {
            if (!self.pane || !self.target) {
                return;
            }
            if (!self.source) {
                throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
            }
            switch (self.direction) {
                case pane_transition_direction_1.PaneTransitionDirection.Left:
                    {
                        self.target.setTranslateX(self.pane.width);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.LeftUp:
                    {
                        self.target.setTranslateX(self.pane.width);
                        self.target.setTranslateY(self.pane.height);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.LeftDown:
                    {
                        self.target.setTranslateX(self.pane.width);
                        self.target.setTranslateY(-self.target.height);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Right:
                    {
                        self.target.setTranslateX(-self.source.width);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.RightUp:
                    {
                        self.target.setTranslateX(-self.source.width);
                        self.target.setTranslateY(self.pane.height);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.RightDown:
                    {
                        self.target.setTranslateX(-self.source.width);
                        self.target.setTranslateY(-self.source.height);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Up:
                    {
                        self.target.setTranslateY(self.pane.height);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Down:
                    {
                        self.target.setTranslateY(-self.source.height);
                    }
                    break;
            }
            // Save start time after preparation
            self.startTime = performance.now();
            // Fade in
            self.timer = setInterval(self.tick, 15);
        }, false);
    };
    PaneTransitionSlide.prototype.tick = function () {
        if (!this.pane || !this.target) {
            return;
        }
        // Get elapsed time since start
        if (!this.startTime) {
            throw new Error(error_messages_1.ErrorMessages.StartTimeIsUndefined);
        }
        if (!this.source) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        var elapsed = performance.now() - this.startTime;
        // Map elapsed time to offset
        var offset = elapsed / (this.duration * 1000);
        if (offset >= 1 || isNaN(offset)) {
            this.target.setTranslateX(0);
            this.target.setTranslateY(0);
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = undefined;
            }
            this.source.unbind();
            this.onComplete();
        }
        else {
            // Apply easing
            offset = transitions_1.TransitionRenderer.easeInOutCubic(offset);
            switch (this.direction) {
                case pane_transition_direction_1.PaneTransitionDirection.Left:
                    {
                        var offsetX = Math.floor(offset * this.pane.width);
                        this.target.setTranslateX(this.pane.width - offsetX);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.LeftUp:
                    {
                        var offsetX = Math.floor(offset * this.pane.width);
                        var offsetY = Math.floor(offset * this.pane.height);
                        this.target.setTranslateX(this.pane.width - offsetX);
                        this.target.setTranslateY(this.pane.height - offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.LeftDown:
                    {
                        var offsetX = Math.floor(offset * this.pane.width);
                        var offsetY = Math.floor(offset * this.target.height);
                        this.target.setTranslateX(this.pane.width - offsetX);
                        this.target.setTranslateY(offsetY - this.target.height);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Right:
                    {
                        var offsetX = Math.floor(offset * this.source.width);
                        this.target.setTranslateX(offsetX - this.source.width);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.RightUp:
                    {
                        var offsetX = Math.floor(offset * this.source.width);
                        var offsetY = Math.floor(offset * this.pane.height);
                        this.target.setTranslateX(offsetX - this.source.width);
                        this.target.setTranslateY(this.pane.height - offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.RightDown:
                    {
                        var offsetX = Math.floor(offset * this.source.width);
                        var offsetY = Math.floor(offset * this.target.height);
                        this.target.setTranslateX(offsetX - this.source.width);
                        this.target.setTranslateY(offsetY - this.target.height);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Up:
                    {
                        var offsetY = Math.floor(offset * this.pane.height);
                        this.target.setTranslateY(this.pane.height - offsetY);
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Down:
                    {
                        var offsetY = Math.floor(offset * this.target.height);
                        this.target.setTranslateY(offsetY - this.target.height);
                    }
                    break;
            }
        }
    };
    return PaneTransitionSlide;
}(pane_transition_1.PaneTransition));
exports.PaneTransitionSlide = PaneTransitionSlide;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var transitions_1 = __webpack_require__(14);
var pane_transition_1 = __webpack_require__(13);
var pane_transition_direction_1 = __webpack_require__(20);
/**
 * Wipe pane transition
 */
var PaneTransitionWipe = /** @class */ (function (_super) {
    __extends(PaneTransitionWipe, _super);
    function PaneTransitionWipe(pane, target, callback, duration, direction) {
        var _this = _super.call(this, pane, target, callback) || this;
        _this.tick = _this.tick.bind(_this);
        _this.duration = duration;
        _this.direction = direction;
        return _this;
    }
    PaneTransitionWipe.prototype.start = function () {
        var self = this;
        if (!self.pane) {
            return;
        }
        self.source = self.pane.childSurface;
        self.onStart();
        var onBottom = true;
        switch (this.direction) {
            case pane_transition_direction_1.PaneTransitionDirection.Out:
            case pane_transition_direction_1.PaneTransitionDirection.OutX:
            case pane_transition_direction_1.PaneTransitionDirection.OutY:
                onBottom = false;
                break;
        }
        self.bind(function (surface) {
            if (!self.pane || !self.target) {
                return;
            }
            if (!self.pane.surface) {
                throw new Error(error_messages_1.ErrorMessages.PaneSurfaceIsUndefined);
            }
            if (!self.target.div) {
                throw new Error(error_messages_1.ErrorMessages.HostElementUndefined);
            }
            var scale = self.pane.surface.scale;
            switch (self.direction) {
                case pane_transition_direction_1.PaneTransitionDirection.Out:
                    {
                        var halfX = self.pane.width * scale / 2;
                        var halfY = self.pane.height * scale / 2;
                        self.target.div.style.clip =
                            'rect(' + halfY + 'px, ' + halfX + 'px, ' + halfY + 'px, ' + halfX + 'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.OutX:
                    {
                        var halfX = self.pane.width * scale / 2;
                        self.target.div.style.clip =
                            'rect(' + 0 + 'px, ' + halfX + 'px, ' + self.pane.height * scale + 'px, ' + halfX + 'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.OutY:
                    {
                        var halfY = self.pane.height * scale / 2;
                        self.target.div.style.clip =
                            'rect(' + halfY + 'px, ' + self.pane.width * scale + 'px, ' + halfY + 'px, ' + 0 + 'px)';
                    }
                    break;
            }
            // Save start time after preparation
            self.startTime = performance.now();
            // Fade in
            self.timer = setInterval(self.tick, 15);
        }, onBottom);
    };
    PaneTransitionWipe.prototype.tick = function () {
        if (!this.pane || !this.target) {
            return;
        }
        if (!this.startTime || !this.source) {
            return;
        }
        if (!this.source.div) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        if (!this.target.div) {
            throw new Error(error_messages_1.ErrorMessages.TargetIsUndefined);
        }
        if (!this.pane.surface) {
            throw new Error(error_messages_1.ErrorMessages.PaneSurfaceIsUndefined);
        }
        // Get elapsed time since start
        var elapsed = performance.now() - this.startTime;
        // Map elapsed time to offset
        var offset = elapsed / (this.duration * 1000);
        if (offset >= 1 || isNaN(offset)) {
            switch (this.direction) {
                case pane_transition_direction_1.PaneTransitionDirection.Out:
                case pane_transition_direction_1.PaneTransitionDirection.OutX:
                case pane_transition_direction_1.PaneTransitionDirection.OutY:
                    this.target.div.style.clip = '';
                    break;
                default:
                    this.source.div.style.clip = '';
                    break;
            }
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = undefined;
            }
            this.source.unbind();
            this.onComplete();
        }
        else {
            // Apply easing
            offset = transitions_1.TransitionRenderer.easeInOutCubic(offset);
            var scale = this.pane.surface.scale;
            switch (this.direction) {
                case pane_transition_direction_1.PaneTransitionDirection.Left:
                    {
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale);
                        this.source.div.style.clip =
                            'rect(' +
                                0 +
                                'px, ' +
                                (this.pane.width * scale - offsetX) +
                                'px, ' +
                                this.pane.height * scale +
                                'px, ' +
                                0 +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.LeftUp:
                    {
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale);
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale);
                        this.source.div.style.clip =
                            'rect(' +
                                0 +
                                'px, ' +
                                (this.pane.width * scale - offsetX) +
                                'px, ' +
                                (this.pane.height * scale - offsetY) +
                                'px, ' +
                                0 +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.LeftDown:
                    {
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale);
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale);
                        this.source.div.style.clip =
                            'rect(' +
                                offsetY +
                                'px, ' +
                                (this.pane.width * scale - offsetX) +
                                'px, ' +
                                this.pane.height * scale +
                                'px, ' +
                                0 +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Right:
                    {
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale);
                        this.source.div.style.clip =
                            'rect(' +
                                0 +
                                'px, ' +
                                this.pane.width * scale +
                                'px, ' +
                                this.pane.height * scale +
                                'px, ' +
                                offsetX +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.RightUp:
                    {
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale);
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale);
                        this.source.div.style.clip =
                            'rect(' +
                                0 +
                                'px, ' +
                                this.pane.width * scale +
                                'px, ' +
                                (this.pane.height * scale - offsetY) +
                                'px, ' +
                                offsetX +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.RightDown:
                    {
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale);
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale);
                        this.source.div.style.clip =
                            'rect(' +
                                offsetY +
                                'px, ' +
                                this.pane.width * scale +
                                'px, ' +
                                this.pane.height * scale +
                                'px, ' +
                                offsetX +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Up:
                    {
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale);
                        this.source.div.style.clip =
                            'rect(' +
                                0 +
                                'px, ' +
                                this.pane.width * scale +
                                'px, ' +
                                (this.pane.height * scale - offsetY) +
                                'px, ' +
                                0 +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Down:
                    {
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale);
                        this.source.div.style.clip =
                            'rect(' +
                                offsetY +
                                'px, ' +
                                this.pane.width * scale +
                                'px, ' +
                                this.pane.height * scale +
                                'px, ' +
                                0 +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.Out:
                    {
                        var halfX = this.pane.width * scale / 2;
                        var halfY = this.pane.height * scale / 2;
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale / 2);
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale / 2);
                        this.target.div.style.clip =
                            'rect(' +
                                (halfY - offsetY) +
                                'px, ' +
                                (halfX + offsetX) +
                                'px, ' +
                                (halfY + offsetY) +
                                'px, ' +
                                (halfX - offsetX) +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.OutX:
                    {
                        var halfX = this.pane.width * scale / 2;
                        var height = this.pane.height * scale;
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale / 2);
                        this.target.div.style.clip =
                            'rect(' +
                                0 +
                                'px, ' +
                                (halfX + offsetX) +
                                'px, ' +
                                height +
                                'px, ' +
                                (halfX - offsetX) +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.OutY:
                    {
                        var width = this.pane.width * scale;
                        var halfY = this.pane.height * scale / 2;
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale / 2);
                        this.target.div.style.clip =
                            'rect(' +
                                (halfY - offsetY) +
                                'px, ' +
                                width +
                                'px, ' +
                                (halfY + offsetY) +
                                'px, ' +
                                0 +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.In:
                    {
                        var width = this.pane.width * scale;
                        var height = this.pane.height * scale;
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale / 2);
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale / 2);
                        this.source.div.style.clip =
                            'rect(' +
                                offsetY +
                                'px, ' +
                                (width - offsetX) +
                                'px, ' +
                                (height - offsetY) +
                                'px, ' +
                                offsetX +
                                'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.InX:
                    {
                        var width = this.pane.width * scale;
                        var height = this.pane.height * scale;
                        var offsetX = Math.floor(offset * this.pane.width * this.pane.surface.scale / 2);
                        this.source.div.style.clip =
                            'rect(' + 0 + 'px, ' + (width - offsetX) + 'px, ' + height + 'px, ' + offsetX + 'px)';
                    }
                    break;
                case pane_transition_direction_1.PaneTransitionDirection.InY:
                    {
                        var width = this.pane.width * scale;
                        var height = this.pane.height * scale;
                        var offsetY = Math.floor(offset * this.pane.height * this.pane.surface.scale / 2);
                        this.source.div.style.clip =
                            'rect(' + offsetY + 'px, ' + width + 'px, ' + (height - offsetY) + 'px, ' + 0 + 'px)';
                    }
                    break;
            }
        }
    };
    return PaneTransitionWipe;
}(pane_transition_1.PaneTransition));
exports.PaneTransitionWipe = PaneTransitionWipe;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_event_1 = __webpack_require__(6);
var error_messages_1 = __webpack_require__(0);
var sprite_element_1 = __webpack_require__(17);
var sprite_frame_1 = __webpack_require__(22);
var surface_element_1 = __webpack_require__(37);
var surface_element_states_1 = __webpack_require__(38);
/**
 * Renders a multistate image button derived from surface images
 */
var SurfaceButtonElement = /** @class */ (function (_super) {
    __extends(SurfaceButtonElement, _super);
    /**
     * @param id - Item id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param clickListener - Click event listener
     */
    function SurfaceButtonElement(id, left, top, width, height, clickListener) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        /**
         * Click event (button: SurfaceButton)
         */
        _this.clicked = new common_event_1.CommonEvent();
        _this.setEnabled = _this.setEnabled.bind(_this);
        _this.addToModel = _this.addToModel.bind(_this);
        _this.onClicked = _this.onClicked.bind(_this);
        _this.normalIndex = 0;
        _this.selectedIndex = 0;
        _this.highlightedIndex = 0;
        _this.disabledIndex = 0;
        _this.isEnabled = true;
        _this.isSelected = false;
        _this.isToggle = false;
        if (clickListener) {
            _this.clicked.add(clickListener);
        }
        return _this;
    }
    /**
     * Renders a multistate image button derived from surface page images
     * @param id - Item id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param clickListener - Click event listener
     */
    SurfaceButtonElement.create = function (id, left, top, width, height, clickListener) {
        return new SurfaceButtonElement(id, left, top, width, height, clickListener);
    };
    /**
     * Renders a multistate image button derived from surface page images
     * @param id - Item id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param clickListener - Click event listener
     */
    SurfaceButtonElement.createCheckbox = function (id, left, top, width, height, clickListener) {
        var button = new SurfaceButtonElement(id, left, top, width, height, clickListener);
        button.isToggle = true;
        return button;
    };
    /**
     * Renders a multistate image button derived from surface page images
     * @param id - Item id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param clickListener - Click event listener
     */
    SurfaceButtonElement.createRadioButton = function (groupId, id, left, top, width, height, clickListener) {
        var button = new SurfaceButtonElement(id, left, top, width, height, clickListener);
        button.groupId = groupId;
        button.isToggle = true;
        return button;
    };
    SurfaceButtonElement.prototype.addTo = function (surface) {
        surface.elements.push(this);
        return this;
    };
    SurfaceButtonElement.prototype.setEnabled = function (isEnabled) {
        if (isEnabled === this.isEnabled) {
            return;
        }
        this.isEnabled = isEnabled;
        if (this.spriteElement && this.surface && this.surface.controller) {
            if (!this.isEnabled) {
                this.spriteElement.frameIndex = this.disabledIndex;
                this.spriteElement.setInteractive(false);
            }
            else {
                if (this.isSelected && this.isToggle) {
                    this.spriteElement.frameIndex = this.selectedIndex;
                }
                else {
                    this.spriteElement.frameIndex = this.normalIndex;
                }
                this.spriteElement.setInteractive(true);
            }
            this.surface.controller.draw();
        }
    };
    /**
     * Adds button to surface model
     * @returns New button
     */
    SurfaceButtonElement.prototype.addToModel = function (model) {
        var surface = this.surface;
        if (!surface) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceIsUndefined);
        }
        // If no normal image, throw error
        if (!surface.normalImageSource) {
            throw new Error(error_messages_1.ErrorMessages.NormalImageSourceUndefined);
        }
        var sprite = sprite_element_1.SpriteElement.create(this.left, this.top, this.width, this.height);
        sprite.id = this.id;
        this.spriteElement = sprite;
        sprite.frames = [];
        sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.NORMAL, this.left, this.top, this.width, this.height, 0, 'none', 0));
        if (surface.selectedImageSource) {
            sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.SELECTED, this.left, this.top, this.width, this.height, 0, 'none', 0));
            this.selectedIndex = sprite.frames.length - 1;
        }
        if (surface.highlightedImageSource) {
            sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.HIGHLIGHTED, this.left, this.top, this.width, this.height, 0, 'none', 0));
            this.highlightedIndex = sprite.frames.length - 1;
            if (!surface.selectedImageSource) {
                this.selectedIndex = this.highlightedIndex;
            }
        }
        if (surface.disabledImageSource) {
            sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.DISABLED, this.left, this.top, this.width, this.height, 0, 'none', 0));
            this.disabledIndex = sprite.frames.length - 1;
        }
        if (this.highlightedIndex !== this.normalIndex) {
            sprite.mouseDown = 'pushFrame(' + this.highlightedIndex + ')';
            sprite.mouseUp = 'popFrame()';
        }
        else if (this.selectedIndex !== this.normalIndex) {
            sprite.mouseDown = 'pushFrame(' + this.selectedIndex + ')';
            sprite.mouseUp = 'popFrame()';
        }
        sprite.click = SurfaceButtonElement.BUTTON_CLICK;
        if (!this.isEnabled) {
            sprite.frameIndex = this.disabledIndex;
        }
        else {
            if (this.isSelected && this.isToggle) {
                sprite.frameIndex = this.selectedIndex;
            }
            sprite.setInteractive(true);
        }
        model.add(sprite);
        return sprite;
    };
    /**
     * Click handler called from lower level event handlers
     */
    SurfaceButtonElement.prototype.onClicked = function () {
        var self = this;
        if (!self.surface) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceIsUndefined);
        }
        if (self.isToggle) {
            if (self.groupId !== null) {
                if (!self.isSelected) {
                    self.surface.elements.forEach(function (sel) {
                        if (sel instanceof SurfaceButtonElement && sel.spriteElement) {
                            if (sel.id === self.id) {
                                sel.isSelected = true;
                                sel.spriteElement.frameIndex = sel.selectedIndex;
                            }
                            else if (self.groupId === sel.groupId) {
                                sel.isSelected = false;
                                if (sel.isEnabled) {
                                    sel.spriteElement.frameIndex = sel.normalIndex;
                                }
                                else {
                                    sel.spriteElement.frameIndex = sel.disabledIndex;
                                }
                            }
                        }
                    });
                }
                else {
                    self.surface.elements.forEach(function (sel) {
                        if (sel instanceof SurfaceButtonElement && sel.spriteElement) {
                            if (self.groupId === sel.groupId) {
                                sel.isSelected = false;
                                sel.spriteElement.frameIndex = sel.normalIndex;
                            }
                        }
                    });
                }
            }
            else if (self.spriteElement) {
                if (!self.isSelected) {
                    self.isSelected = true;
                    self.spriteElement.frameIndex = self.selectedIndex;
                }
                else {
                    self.isSelected = false;
                    self.spriteElement.frameIndex = self.normalIndex;
                }
            }
        }
        if (self.clicked.hasListeners()) {
            self.clicked.trigger(self);
        }
        if (self.surface.controller) {
            self.surface.controller.draw();
        }
    };
    SurfaceButtonElement.BUTTON_CLICK = 'buttonClick';
    return SurfaceButtonElement;
}(surface_element_1.SurfaceElement));
exports.SurfaceButtonElement = SurfaceButtonElement;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_event_1 = __webpack_require__(6);
var rectangle_element_1 = __webpack_require__(11);
var text_element_1 = __webpack_require__(23);
var surface_element_1 = __webpack_require__(37);
/**
 * Renders styled text with an optional background fill and border stroke
 */
var SurfaceTextElement = /** @class */ (function (_super) {
    __extends(SurfaceTextElement, _super);
    /**
     * @param id - Item id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param content - Rendered text content
     * @param clickListener - Click event listener
     */
    function SurfaceTextElement(id, left, top, width, height, content, clickListener) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        /**
         * Click event
         */
        _this.clicked = new common_event_1.CommonEvent();
        _this.onClicked = _this.onClicked.bind(_this);
        _this.addToModel = _this.addToModel.bind(_this);
        _this.color = 'Black';
        _this.textAlignment = 'left,top';
        _this.typeFace = 'sans-serif';
        _this.typeSize = 10;
        _this.typeStyle = '';
        _this.padding = 0;
        _this.content = content;
        if (clickListener) {
            _this.clicked.add(clickListener);
        }
        return _this;
    }
    /**
     * Creates a text item
     * @param id - Item id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param content - Rendered text content
     * @param clickListener - Click event listener
     * @returns New text item
     */
    SurfaceTextElement.create = function (id, left, top, width, height, content, clickListener) {
        return new SurfaceTextElement(id, left, top, width, height, content, clickListener);
    };
    /**
     * Creates and adds a text item to target surface
     * @param surface - Target surface for text element
     * @returns This text element
     */
    SurfaceTextElement.prototype.addTo = function (surface) {
        surface.elements.push(this);
        return this;
    };
    /**
     * Adds item to surface model
     * @param model - Surface model
     * @returns New text item
     */
    SurfaceTextElement.prototype.addToModel = function (model) {
        if (this.background || this.border) {
            var rect = rectangle_element_1.RectangleElement.create(this.left, this.top, this.width, this.height);
            if (this.background) {
                rect.setFill(this.background);
            }
            if (this.border) {
                rect.setStroke(this.border);
            }
            rect.interactive = false;
            model.add(rect);
        }
        var text = text_element_1.TextElement.create(this.content, this.left + this.padding, this.top + this.padding, this.width - this.padding * 2, this.height - this.padding * 2);
        text.setFill(this.color);
        text.alignment = this.textAlignment;
        text.typeface = this.typeFace;
        text.typesize = this.typeSize;
        text.typestyle = this.typeStyle;
        text.id = this.id;
        this.textElement = text;
        text.click = SurfaceTextElement.TEXT_CLICK;
        text.setInteractive(true);
        model.add(text);
        return text;
    };
    /**
     * Click handler called from lower level event handlers
     */
    SurfaceTextElement.prototype.onClicked = function () {
        this.clicked.trigger(this);
    };
    SurfaceTextElement.TEXT_CLICK = 'textClick';
    return SurfaceTextElement;
}(surface_element_1.SurfaceElement));
exports.SurfaceTextElement = SurfaceTextElement;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_event_1 = __webpack_require__(6);
var error_messages_1 = __webpack_require__(0);
var surface_layer_1 = __webpack_require__(12);
/**
 * Renders a video into an HTML video element
 */
var SurfaceVideoLayer = /** @class */ (function (_super) {
    __extends(SurfaceVideoLayer, _super);
    /**
     * @param id - Video id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param source - Video source URL
     */
    function SurfaceVideoLayer(id, left, top, width, height, source) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        /**
         * True when surface has been loaded
         */
        _this.isLoaded = false;
        /**
         * Video started event (video: Video)
         */
        _this.started = new common_event_1.CommonEvent();
        /**
         * Video stopped event (video: Video)
         */
        _this.stopped = new common_event_1.CommonEvent();
        _this.loop = false;
        _this.autoPlay = false;
        _this.nativeControls = true;
        _this.canPlay = false;
        _this.source = source;
        return _this;
    }
    /**
     * Renders a video into an HTML video element
     * @param id - Video id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param source - Video source URL
     */
    SurfaceVideoLayer.create = function (id, left, top, width, height, source) {
        var video = new SurfaceVideoLayer(id, left, top, width, height, source);
        return video;
    };
    /**
     * Adds video to parent surface
     * @param surface - Parent surface
     */
    SurfaceVideoLayer.prototype.addToSurface = function (surface) {
        this.surface = surface;
        // If no source
        if (!this.source) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        // Create video element
        var video = document.createElement('video');
        video.setAttribute('id', this.id + '_video');
        video.style.position = 'absolute';
        video.style.left = this.translateX + this.left * surface.scale + 'px';
        video.style.top = this.translateY + this.top * surface.scale + 'px';
        video.style.width = this.width * surface.scale + 'px';
        video.style.height = this.height * surface.scale + 'px';
        video.style.opacity = (this.surface.opacity * this.opacity).toString();
        this.element = video;
    };
    /**
     * Sets video source and attaches callback for video ready to play
     * @param callback - Completion callback (success: boolean)
     */
    SurfaceVideoLayer.prototype.prepare = function (callback) {
        var self = this;
        var video = self.element;
        if (!self.surface) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceIsUndefined);
        }
        if (!self.surface.div) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceDivIsUndefined);
        }
        if (!self.element) {
            throw new Error(error_messages_1.ErrorMessages.ElementUndefined);
        }
        if (!video) {
            throw new Error(error_messages_1.ErrorMessages.VideoIsUndefined);
        }
        if (self.loop) {
            video.setAttributeNode(document.createAttribute('loop'));
        }
        if (self.nativeControls) {
            video.setAttributeNode(document.createAttribute('controls'));
        }
        self.surface.div.appendChild(video);
        self.element.src = self.source;
        video.oncanplay = function () {
            self.canPlay = true;
            if (self.isLoaded && self.autoPlay) {
                video.play();
            }
            video.oncanplay = null;
        };
        self.isPrepared = true;
        if (callback) {
            callback(true);
        }
    };
    /**
     * Unloads video and destroys visual elements
     */
    SurfaceVideoLayer.prototype.destroy = function () {
        if (this.element && this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
            this.element = undefined;
        }
        this.surface = undefined;
    };
    /**
     * Onload initialization
     */
    SurfaceVideoLayer.prototype.onload = function () {
        var video = this.element;
        this.isLoaded = true;
        if (video && this.canPlay && this.autoPlay) {
            video.currentTime = 0;
            video.play();
        }
    };
    /**
     * Onunload teardown
     */
    SurfaceVideoLayer.prototype.onunload = function () {
        if (this.element) {
            var video = this.element;
            video.pause();
        }
    };
    /**
     * Sets rendering scale
     */
    SurfaceVideoLayer.prototype.setScale = function (scale) {
        if (!this.element) {
            return this;
        }
        var layer = this.element;
        layer.style.left = this.translateX + this.left * scale + 'px';
        layer.style.top = this.translateY + this.top * scale + 'px';
        layer.style.width = this.width * scale + 'px';
        layer.style.height = this.height * scale + 'px';
        return this;
    };
    /**
     * Sets rendering opacity
     */
    SurfaceVideoLayer.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        if (this.element && this.surface) {
            this.element.style.opacity = (this.surface.opacity * this.opacity).toString();
        }
        return this;
    };
    /**
     * Sets X translation
     */
    SurfaceVideoLayer.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        if (this.element && this.surface) {
            this.element.style.left = (this.translateX + this.left) * this.surface.scale + 'px';
        }
        return this;
    };
    /**
     * Sets Y translation
     */
    SurfaceVideoLayer.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        if (this.element && this.surface) {
            this.element.style.top = (this.translateY + this.top) * this.surface.scale + 'px';
        }
        return this;
    };
    SurfaceVideoLayer.prototype.addTo = function (surface) {
        surface.layers.push(this);
        return this;
    };
    return SurfaceVideoLayer;
}(surface_layer_1.SurfaceLayer));
exports.SurfaceVideoLayer = SurfaceVideoLayer;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var region_1 = __webpack_require__(7);
var fill_factory_1 = __webpack_require__(8);
/**
 * Renders model content for viewing
 */
var ViewRenderer = /** @class */ (function () {
    /**
     * @param controller - Associated view controller
     */
    function ViewRenderer(controller) {
        this.controller = controller;
    }
    /**
     * Renders controller model to provided 2d canvas context at specified scale
     * @param c - Rendering context
     * @param scale - Optional rendering scale. Default is 1.
     */
    ViewRenderer.prototype.renderToContext = function (c, scale) {
        var model = this.controller.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var w = size.width;
        var h = size.height;
        // Begin rendering context and render base model
        this.beginRender(c, scale);
        // Render elements
        var modelBounds = new region_1.Region(this.controller.offsetX, this.controller.offsetY, w, h);
        for (var _i = 0, _a = model.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (this.shouldRender(element, modelBounds)) {
                element.draw(c);
            }
        }
        // End rendering context
        this.endRender(c);
    };
    ViewRenderer.prototype.beginRender = function (c, scale) {
        var model = this.controller.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        // Save context state
        c.save();
        if (arguments.length > 1 && scale !== undefined && scale !== 1) {
            c.scale(scale, scale);
        }
        // If transformed
        if (model.transform !== undefined) {
            var location_1 = model.getLocation();
            if (location_1) {
                model.setRenderTransform(c, model.transform, location_1);
            }
        }
        // Fill
        if (fill_factory_1.FillFactory.setElementFill(c, model)) {
            var w = size.width;
            var h = size.height;
            c.fillRect(0, 0, w, h);
        }
    };
    ViewRenderer.prototype.renderElement = function (c, el) {
        el.draw(c);
    };
    ViewRenderer.prototype.endRender = function (c) {
        var model = this.controller.model;
        // Stroke
        if (model && model.setElementStroke(c, model)) {
            var size = model.getSize();
            if (size) {
                var w = size.width;
                var h = size.height;
                c.strokeRect(0, 0, w, h);
            }
        }
        // Restore context state
        c.restore();
    };
    /**
     * Determines if element intersect rendering region and should be rendered or is out of bounds
     * @param el - Rendered element
     * @param bounds - Rendering region
     * @returns True if element should be rendered
     */
    ViewRenderer.prototype.shouldRender = function (el, bounds) {
        // If no transform, check bounds
        if (!el.transform) {
            var b = el.getBounds();
            if (b) {
                return b.intersectsWith(bounds);
            }
            return false;
        }
        else {
            // If transform, always render
            // TODO - Compute transformed bounds
            return true;
        }
    };
    return ViewRenderer;
}());
exports.ViewRenderer = ViewRenderer;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(5);
/**
 * Represents a frame in a timed animation
 */
var SurfaceAnimationFrame = /** @class */ (function () {
    /**
     * @param id - Item id
     * @param left - Source bitmap crop x coordinate
     * @param top - Source bitmap crop y coordinate
     * @param width - Source bitmap crop width
     * @param height - Source bitmap crop height
     * @param source - Bitmap source
     * @param duration - Frame duration in seconds
     * @param transition - Frame "to" transition
     * @param transitionDuration - Transition duration in seconds
     * @param pauseFrame - Pause frame until tapped
     */
    function SurfaceAnimationFrame(id, left, top, width, height, source, duration, transition, transitionDuration, pauseFrame) {
        if (id) {
            this.id = id;
        }
        else {
            this.id = utility_1.Utility.guid();
        }
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.source = source;
        this.duration = duration;
        this.transition = transition;
        this.transitionDuration = transitionDuration;
        this.pauseFrame = pauseFrame;
    }
    return SurfaceAnimationFrame;
}());
exports.SurfaceAnimationFrame = SurfaceAnimationFrame;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var surface_view_controller_1 = __webpack_require__(51);
/**
 * Extends SurfaceViewController to add animation property
 */
var SurfaceAnimationViewController = /** @class */ (function (_super) {
    __extends(SurfaceAnimationViewController, _super);
    function SurfaceAnimationViewController() {
        return _super.call(this) || this;
    }
    return SurfaceAnimationViewController;
}(surface_view_controller_1.SurfaceViewController));
exports.SurfaceAnimationViewController = SurfaceAnimationViewController;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var sprite_element_1 = __webpack_require__(17);
/**
 * Extends [[SpriteElement]] to add strip item groupId and itemId properties
 */
var SurfaceRadioItemSpriteElement = /** @class */ (function (_super) {
    __extends(SurfaceRadioItemSpriteElement, _super);
    /**
     * @param groupId - Radio item group id
     * @param itemId - Radio item id
     * @param left - Radio item x coordinate
     * @param top - Radio item y coordinate
     * @param width - Radio item width
     * @param height - Radio item height
     */
    function SurfaceRadioItemSpriteElement(groupId, itemId, left, top, width, height) {
        var _this = _super.call(this) || this;
        _this.setSize(new size_1.Size(width, height));
        _this.setLocation(new point_1.Point(left, top));
        _this.groupId = groupId;
        _this.itemId = itemId;
        return _this;
    }
    return SurfaceRadioItemSpriteElement;
}(sprite_element_1.SpriteElement));
exports.SurfaceRadioItemSpriteElement = SurfaceRadioItemSpriteElement;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var text_element_1 = __webpack_require__(23);
/**
 * Extends [[TextElement]] to add strip item groupId and itemId properties
 */
var SurfaceRadioItemTextElement = /** @class */ (function (_super) {
    __extends(SurfaceRadioItemTextElement, _super);
    /**
     * @param groupId - Radio item group id
     * @param itemId - Radio item id
     * @param text - Radio item text
     * @param left - Radio item x coordinate
     * @param top - Radio item y coordinate
     * @param width - Radio item width
     * @param height - Radio item height
     */
    function SurfaceRadioItemTextElement(groupId, itemId, text, left, top, width, height) {
        var _this = _super.call(this) || this;
        _this.setSize(new size_1.Size(width, height));
        _this.setLocation(new point_1.Point(left, top));
        _this.groupId = groupId;
        _this.itemId = itemId;
        _this.text = text;
        return _this;
    }
    return SurfaceRadioItemTextElement;
}(text_element_1.TextElement));
exports.SurfaceRadioItemTextElement = SurfaceRadioItemTextElement;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(5);
/**
 * Represents an item in a radio strip
 */
var SurfaceRadioStripItem = /** @class */ (function () {
    /**
     * @param id - Strip item id
     * @param text - Strip item text
     */
    function SurfaceRadioStripItem(id, text) {
        if (id) {
            this.id = id;
        }
        else {
            this.id = utility_1.Utility.guid();
        }
        this.text = text;
        this.isSelected = false;
    }
    return SurfaceRadioStripItem;
}());
exports.SurfaceRadioStripItem = SurfaceRadioStripItem;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains arguments for radio strip selection event
 */
var SurfaceRadioStripSelectionArgs = /** @class */ (function () {
    /**
     * @param strip - Radio strip
     * @param item - Radio strip item
     */
    function SurfaceRadioStripSelectionArgs(strip, item) {
        this.strip = strip;
        this.item = item;
    }
    return SurfaceRadioStripSelectionArgs;
}());
exports.SurfaceRadioStripSelectionArgs = SurfaceRadioStripSelectionArgs;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var view_controller_1 = __webpack_require__(52);
/**
 * Extends [[ViewController]] to add radio strip properties
 */
var SurfaceRadioStripViewController = /** @class */ (function (_super) {
    __extends(SurfaceRadioStripViewController, _super);
    function SurfaceRadioStripViewController() {
        return _super.call(this) || this;
    }
    return SurfaceRadioStripViewController;
}(view_controller_1.ViewController));
exports.SurfaceRadioStripViewController = SurfaceRadioStripViewController;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a 2D affine transformation matrix
 */
var Matrix2D = /** @class */ (function () {
    /**
     * Constructs a new matrix
     */
    function Matrix2D(m11, m12, m21, m22, offsetX, offsetY) {
        this.m11 = m11;
        this.m12 = m12;
        this.m21 = m21;
        this.m22 = m22;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.cloneFrom = this.cloneFrom.bind(this);
        this.translate = this.translate.bind(this);
        this.scale = this.scale.bind(this);
        this.rotate = this.rotate.bind(this);
    }
    /**
     * Matrix factory method
     * @returns New matrix
     */
    Matrix2D.create = function (m11, m12, m21, m22, offsetX, offsetY) {
        return new Matrix2D(m11, m12, m21, m22, offsetX, offsetY);
    };
    /**
     * Multiplies two matrices
     * @param a - Matrix A
     * @param b - Matrix B
     * @returns Matrix A x B
     */
    Matrix2D.multiply = function (a, b) {
        var r = new Matrix2D(1, 0, 0, 1, 0, 0);
        r.m11 = a.m11 * b.m11 + a.m12 * b.m21;
        r.m12 = a.m11 * b.m12 + a.m12 * b.m22;
        r.m21 = a.m21 * b.m11 + a.m22 * b.m21;
        r.m22 = a.m21 * b.m12 + a.m22 * b.m22;
        r.offsetX = a.offsetX * b.m11 + a.offsetY * b.m21 + b.offsetX;
        r.offsetY = a.offsetX * b.m12 + a.offsetY * b.m22 + b.offsetY;
        return r;
    };
    /**
     * Clones values from another matrix into this matrix
     * @param that - Matrix to clone into this
     * @returns This matrix
     */
    Matrix2D.prototype.cloneFrom = function (that) {
        this.m11 = that.m11;
        this.m12 = that.m12;
        this.m21 = that.m21;
        this.m22 = that.m22;
        this.offsetX = that.offsetX;
        this.offsetY = that.offsetY;
        return this;
    };
    /**
     * Translates this matrix by a given amount
     * @param tx - X translation
     * @param ty - Y translation
     * @returns This matrix
     */
    Matrix2D.prototype.translate = function (tx, ty) {
        var r = new Matrix2D(1, 0, 0, 1, tx, ty);
        this.cloneFrom(Matrix2D.multiply(r, this));
        return this;
    };
    /**
     * Scales this matrix by given x and y scaling factors
     * @param sx - X scaling factor
     * @param sy - Y scaling factor
     * @returns This matrix
     */
    Matrix2D.prototype.scale = function (sx, sy) {
        var r = new Matrix2D(sx, 0, 0, sy, 0, 0);
        this.cloneFrom(Matrix2D.multiply(r, this));
        return this;
    };
    /**
     * Rotates this matrix by a given angle
     * @param angle - Angle of rotation
     * @returns This matrix
     */
    Matrix2D.prototype.rotate = function (angle) {
        var r = new Matrix2D(Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0);
        this.cloneFrom(Matrix2D.multiply(r, this));
        return this;
    };
    Matrix2D.IDENTITY = new Matrix2D(1, 0, 0, 1, 0, 0);
    return Matrix2D;
}());
exports.Matrix2D = Matrix2D;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(10);
/**
 * Describes the outline stroke for strokable elements
 */
var StrokeInfo = /** @class */ (function () {
    function StrokeInfo(strokeType, strokeColor, strokeOpacity, strokeWidth) {
        this.strokeType = strokeType;
        this.strokeColor = strokeColor;
        this.strokeOpacity = strokeOpacity;
        this.strokeWidth = strokeWidth;
    }
    StrokeInfo.getStrokeInfo = function (el) {
        var color;
        var width = 1;
        var opacity = 255;
        if (el.stroke) {
            var stroke = el.stroke;
            if (stroke.indexOf(',') !== -1) {
                var parts = stroke.split(',');
                color = color_1.Color.parse(parts[0]);
                width = parseFloat(parts[1]);
            }
            else {
                color = color_1.Color.parse(stroke);
            }
            if (color.a !== 255) {
                opacity = color.a;
                color.a = 255;
            }
            return new StrokeInfo('color', color.toHexString(), opacity, width);
        }
        else {
            return new StrokeInfo('none');
        }
    };
    return StrokeInfo;
}());
exports.StrokeInfo = StrokeInfo;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(10);
var component_props_1 = __webpack_require__(34);
/**
 * Encapsulates generic component creation properties
 */
var GenericComponentProps = /** @class */ (function (_super) {
    __extends(GenericComponentProps, _super);
    function GenericComponentProps() {
        var _this = _super.call(this) || this;
        _this.onSetCreationFill = _this.onSetCreationFill.bind(_this);
        _this.fill = '#C000ff00'; // Mostly translucent green
        _this.stroke = 'Black';
        _this.selectedFill = '#8000ff00'; // Less translucent green
        _this.selectedStroke = 'Gold,5';
        _this.initialized = true;
        _this.create = _this.defaultCreate;
        _this.size.add(_this.defaultResize);
        _this.select.add(_this.defaultSelect);
        _this.deselect.add(_this.defaultDeselect);
        _this.setCreationFill = _this.onSetCreationFill;
        return _this;
    }
    GenericComponentProps.prototype.onSetCreationFill = function (c) {
        var color = color_1.Color.parse(this.selectedFill);
        c.fillStyle = color.toStyleString();
    };
    return GenericComponentProps;
}(component_props_1.ComponentProps));
exports.GenericComponentProps = GenericComponentProps;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var upload_component_props_1 = __webpack_require__(75);
/**
 * Encapsulates HTML component creation properties
 */
var HtmlComponentProps = /** @class */ (function (_super) {
    __extends(HtmlComponentProps, _super);
    function HtmlComponentProps() {
        var _this = _super.call(this) || this;
        _this.imageTag = 'html';
        _this.fileExtensions = ['zip'];
        return _this;
    }
    return HtmlComponentProps;
}(upload_component_props_1.UploadComponentProps));
exports.HtmlComponentProps = HtmlComponentProps;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var image_based_component_props_1 = __webpack_require__(50);
/**
 * Encapsulates navigation component creation properties
 */
var NavigateComponentProps = /** @class */ (function (_super) {
    __extends(NavigateComponentProps, _super);
    function NavigateComponentProps() {
        var _this = _super.call(this) || this;
        _this.imageTag = 'navigate';
        return _this;
    }
    return NavigateComponentProps;
}(image_based_component_props_1.ImageBasedComponentProps));
exports.NavigateComponentProps = NavigateComponentProps;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var ellipse_element_1 = __webpack_require__(44);
var design_tool_1 = __webpack_require__(9);
/**
 * Ellipse creation design tool
 */
var EllipseTool = /** @class */ (function (_super) {
    __extends(EllipseTool, _super);
    function EllipseTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cancelled = false;
        return _this;
    }
    EllipseTool.prototype.mouseDown = function (args) {
        this.cancelled = false;
        this.point1 = point_1.Point.create(args.location.x, args.location.y);
        this.ellipse = ellipse_element_1.EllipseElement.create(args.location.x, args.location.y, 0, 0);
        this.ellipse.setStroke(this.stroke);
        this.ellipse.setFill(this.fill);
        if (this.fillScale !== 1) {
            this.ellipse.setFillScale(this.fillScale);
        }
        if (this.model) {
            this.ellipse.setInteractive(true).addTo(this.model);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = true;
    };
    EllipseTool.prototype.mouseMove = function (args) {
        if (this.cancelled) {
            return;
        }
        if (this.ellipse === undefined) {
            return;
        }
        if (this.point1 === undefined) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.ellipse.setLocation(this.point1);
        this.ellipse.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    EllipseTool.prototype.mouseUp = function (args) {
        if (this.cancelled) {
            return;
        }
        if (this.ellipse == null) {
            return;
        }
        if (this.point1 === undefined) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.ellipse.setLocation(this.point1);
        this.ellipse.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
        this.ellipse = undefined;
        this.isCreating = false;
    };
    EllipseTool.prototype.cancel = function () {
        this.cancelled = true;
        if (this.model && this.ellipse) {
            this.model.remove(this.ellipse);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.ellipse = undefined;
        this.isCreating = false;
    };
    return EllipseTool;
}(design_tool_1.DesignTool));
exports.EllipseTool = EllipseTool;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var image_element_1 = __webpack_require__(29);
var design_tool_1 = __webpack_require__(9);
/**
 * Image element creation tool
 */
var ImageElementTool = /** @class */ (function (_super) {
    __extends(ImageElementTool, _super);
    function ImageElementTool() {
        var _this = _super.call(this) || this;
        _this.cancelled = false;
        _this.setImageSource = _this.setImageSource.bind(_this);
        return _this;
    }
    ImageElementTool.prototype.mouseDown = function (args) {
        this.cancelled = false;
        this.point1 = point_1.Point.create(args.location.x, args.location.y);
        this.imageElement = image_element_1.ImageElement.create(this.source, args.location.x, args.location.y, 0, 0);
        if (this.opacity !== 255) {
            this.imageElement.setOpacity(this.opacity / 255.0);
        }
        if (this.stroke) {
            this.imageElement.setStroke(this.stroke);
        }
        if (this.model) {
            this.imageElement.setInteractive(true).addTo(this.model);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = true;
    };
    ImageElementTool.prototype.mouseMove = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.imageElement) {
            return;
        }
        if (!this.point1) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.imageElement.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    ImageElementTool.prototype.mouseUp = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.imageElement) {
            return;
        }
        if (!this.point1) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.imageElement.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
        this.imageElement = undefined;
        this.isCreating = false;
    };
    ImageElementTool.prototype.cancel = function () {
        this.cancelled = true;
        if (this.model && this.imageElement) {
            this.model.remove(this.imageElement);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.imageElement = undefined;
        this.isCreating = false;
    };
    ImageElementTool.prototype.setImageSource = function (source) {
        this.source = source;
        if (this.model) {
            var resource = this.model.resourceManager.get(this.source);
            if (resource && !resource.available) {
                this.model.resourceManager.register(this.source);
                this.model.resourceManager.load();
            }
        }
    };
    return ImageElementTool;
}(design_tool_1.DesignTool));
exports.ImageElementTool = ImageElementTool;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var line_element_1 = __webpack_require__(15);
var design_tool_1 = __webpack_require__(9);
/**
 * Line element creation tool
 */
var LineTool = /** @class */ (function (_super) {
    __extends(LineTool, _super);
    function LineTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cancelled = false;
        return _this;
    }
    LineTool.prototype.mouseDown = function (args) {
        this.cancelled = false;
        this.line = line_element_1.LineElement.create(args.location.x, args.location.y, args.location.x, args.location.y);
        this.line.setStroke(this.stroke);
        if (this.model) {
            this.line.setInteractive(true).addTo(this.model);
        }
        this.isCreating = true;
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    LineTool.prototype.mouseMove = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.line) {
            return;
        }
        this.line.setP2(args.location);
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    LineTool.prototype.mouseUp = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.line) {
            return;
        }
        this.line.setP2(args.location);
        if (this.controller) {
            this.controller.invalidate();
        }
        this.line = undefined;
        this.isCreating = false;
    };
    LineTool.prototype.cancel = function () {
        this.cancelled = true;
        if (this.model && this.line) {
            this.model.remove(this.line);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.line = undefined;
        this.isCreating = false;
    };
    return LineTool;
}(design_tool_1.DesignTool));
exports.LineTool = LineTool;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var model_element_1 = __webpack_require__(30);
var design_tool_1 = __webpack_require__(9);
/**
 * Model element creation tool
 */
var ModelElementTool = /** @class */ (function (_super) {
    __extends(ModelElementTool, _super);
    function ModelElementTool() {
        var _this = _super.call(this) || this;
        _this.cancelled = false;
        _this.setModelSource = _this.setModelSource.bind(_this);
        return _this;
    }
    ModelElementTool.prototype.mouseDown = function (args) {
        this.cancelled = false;
        this.point1 = point_1.Point.create(args.location.x, args.location.y);
        this.modelElement = model_element_1.ModelElement.create(this.source, args.location.x, args.location.y, 0, 0);
        if (this.opacity !== 255) {
            this.modelElement.setOpacity(this.opacity / 255.0);
        }
        if (this.stroke) {
            this.modelElement.setStroke(this.stroke);
        }
        if (this.model) {
            this.modelElement.setInteractive(true).addTo(this.model);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = true;
    };
    ModelElementTool.prototype.mouseMove = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.modelElement) {
            return;
        }
        if (!this.point1) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.modelElement.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    ModelElementTool.prototype.mouseUp = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.modelElement) {
            return;
        }
        if (!this.point1) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.modelElement.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
        this.modelElement = undefined;
        this.isCreating = false;
    };
    ModelElementTool.prototype.cancel = function () {
        this.cancelled = true;
        if (this.model && this.modelElement) {
            this.model.remove(this.modelElement);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.modelElement = undefined;
        this.isCreating = false;
    };
    ModelElementTool.prototype.setModelSource = function (source) {
        this.source = source;
        if (this.model) {
            var resource = this.model.resourceManager.get(this.source);
            if (resource && !resource.available) {
                this.model.resourceManager.register(this.source);
                this.model.resourceManager.load();
            }
        }
    };
    return ModelElementTool;
}(design_tool_1.DesignTool));
exports.ModelElementTool = ModelElementTool;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var line_element_1 = __webpack_require__(15);
var polyline_element_1 = __webpack_require__(32);
var design_tool_1 = __webpack_require__(9);
/**
 * Pen (polyline element) drawing tool
 */
var PenTool = /** @class */ (function (_super) {
    __extends(PenTool, _super);
    function PenTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PenTool.prototype.mouseDown = function (args) {
        if (!this.points || this.points.length === 0) {
            this.points = [];
            this.points.push(new point_1.Point(args.location.x, args.location.y));
            this.points.push(new point_1.Point(args.location.x, args.location.y));
            this.lastPoint = this.points[this.points.length - 1];
            this.line = line_element_1.LineElement.create(this.points[0].x, this.points[0].y, this.points[1].x, this.points[1].y);
            this.line.setStroke(this.stroke);
            if (this.model) {
                this.line.setInteractive(true).addTo(this.model);
            }
            this.isCreating = true;
        }
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    PenTool.prototype.mouseMove = function (args) {
        if (!this.line && !this.polyline) {
            return;
        }
        if (this.line) {
            this.line.setP2(args.location);
        }
        else if (this.lastPoint) {
            this.lastPoint.x = args.location.x;
            this.lastPoint.y = args.location.y;
        }
        if (this.points) {
            if (this.model && this.line) {
                this.model.remove(this.line);
                this.line = undefined;
                this.polyline = polyline_element_1.PolylineElement.create();
                this.polyline.smoothPoints = true;
                this.polyline.setStroke(this.stroke);
                this.polyline.setInteractive(true).addTo(this.model);
                this.lastPoint = new point_1.Point(args.location.x, args.location.y);
                for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
                    var pnt = _a[_i];
                    this.polyline.addPoint(pnt.clone());
                }
                var point = new point_1.Point(args.location.x, args.location.y);
                this.lastPoint = point;
                this.polyline.addPoint(this.lastPoint);
                this.points.push(point);
            }
            else if (this.polyline) {
                var point = new point_1.Point(args.location.x, args.location.y);
                this.points.push(point);
                this.lastPoint = point;
                this.polyline.addPoint(this.lastPoint);
            }
        }
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    PenTool.prototype.mouseUp = function (args) {
        this.line = undefined;
        this.polyline = undefined;
        this.points = undefined;
        this.lastPoint = undefined;
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = false;
    };
    PenTool.prototype.cancel = function () {
        if (this.model && this.line) {
            this.model.remove(this.line);
            this.line = undefined;
        }
        else if (this.polyline) {
            if (this.model && this.points) {
                this.points.splice(this.points.length - 1);
                if (this.points.length < 3) {
                    this.model.remove(this.polyline);
                }
                else {
                    this.polyline.setPoints(this.points);
                }
            }
        }
        this.line = undefined;
        this.polyline = undefined;
        this.points = undefined;
        this.lastPoint = undefined;
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = false;
    };
    return PenTool;
}(design_tool_1.DesignTool));
exports.PenTool = PenTool;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var line_element_1 = __webpack_require__(15);
var polygon_element_1 = __webpack_require__(45);
var design_tool_1 = __webpack_require__(9);
/**
 * Polygon element design creation tool
 */
var PolygonTool = /** @class */ (function (_super) {
    __extends(PolygonTool, _super);
    function PolygonTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolygonTool.prototype.mouseDown = function (args) {
        if (!this.points || this.points.length === 0) {
            this.points = [];
            this.points.push(new point_1.Point(args.location.x, args.location.y));
            this.points.push(new point_1.Point(args.location.x, args.location.y));
            this.lastPoint = this.points[this.points.length - 1];
            this.line = line_element_1.LineElement.create(this.points[0].x, this.points[0].y, this.points[1].x, this.points[1].y);
            this.line.setStroke(this.stroke);
            if (this.model) {
                this.line.setInteractive(true).addTo(this.model);
            }
            this.isCreating = true;
        }
        else {
            if (this.model && this.line) {
                this.model.remove(this.line);
                this.line = undefined;
                this.polygon = polygon_element_1.PolygonElement.create();
                this.polygon.setStroke(this.stroke);
                this.polygon.setFill(this.fill);
                if (this.fillScale !== 1) {
                    this.polygon.setFillScale(this.fillScale);
                }
                this.polygon.setInteractive(true).addTo(this.model);
                this.lastPoint = new point_1.Point(args.location.x, args.location.y);
                for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
                    var pnt = _a[_i];
                    this.polygon.addPoint(pnt);
                }
                var point = new point_1.Point(args.location.x, args.location.y);
                this.lastPoint = point;
                this.polygon.addPoint(this.lastPoint);
                this.points.push(point);
            }
            else if (this.polygon) {
                var point = new point_1.Point(args.location.x, args.location.y);
                this.points.push(point);
                this.lastPoint = point;
                this.polygon.addPoint(this.lastPoint);
            }
        }
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    PolygonTool.prototype.mouseMove = function (args) {
        if (!this.line && !this.polygon) {
            return;
        }
        if (this.line) {
            this.line.setP2(args.location);
        }
        else if (this.lastPoint) {
            this.lastPoint.x = args.location.x;
            this.lastPoint.y = args.location.y;
        }
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    PolygonTool.prototype.mouseUp = function (args) {
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    PolygonTool.prototype.cancel = function () {
        if (this.model && this.line) {
            this.model.remove(this.line);
            this.line = undefined;
        }
        else if (this.polygon && this.points && this.model) {
            this.points.splice(this.points.length - 1);
            if (this.points.length < 3) {
                this.model.remove(this.polygon);
            }
            else {
                this.polygon.setPoints(this.points);
            }
        }
        this.line = undefined;
        this.polygon = undefined;
        this.points = undefined;
        this.lastPoint = undefined;
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = false;
    };
    return PolygonTool;
}(design_tool_1.DesignTool));
exports.PolygonTool = PolygonTool;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var line_element_1 = __webpack_require__(15);
var polyline_element_1 = __webpack_require__(32);
var design_tool_1 = __webpack_require__(9);
/**
 * Polyline element design creation tool
 */
var PolylineTool = /** @class */ (function (_super) {
    __extends(PolylineTool, _super);
    function PolylineTool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolylineTool.prototype.mouseDown = function (args) {
        if (!this.points || this.points.length === 0) {
            this.points = [];
            this.points.push(new point_1.Point(args.location.x, args.location.y));
            this.points.push(new point_1.Point(args.location.x, args.location.y));
            this.lastPoint = this.points[this.points.length - 1];
            this.line = line_element_1.LineElement.create(this.points[0].x, this.points[0].y, this.points[1].x, this.points[1].y);
            this.line.setStroke(this.stroke);
            if (this.model) {
                this.line.setInteractive(true).addTo(this.model);
            }
            this.isCreating = true;
        }
        else {
            if (this.model && this.line) {
                this.model.remove(this.line);
                this.line = undefined;
                this.polyline = polyline_element_1.PolylineElement.create();
                this.polyline.setStroke(this.stroke);
                this.polyline.setInteractive(true).addTo(this.model);
                this.lastPoint = new point_1.Point(args.location.x, args.location.y);
                for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
                    var pnt = _a[_i];
                    this.polyline.addPoint(pnt.clone());
                }
                var point = new point_1.Point(args.location.x, args.location.y);
                this.lastPoint = point;
                this.polyline.addPoint(this.lastPoint);
                this.points.push(point);
            }
            else if (this.polyline) {
                var point = new point_1.Point(args.location.x, args.location.y);
                this.points.push(point);
                this.lastPoint = point;
                this.polyline.addPoint(this.lastPoint);
            }
        }
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    PolylineTool.prototype.mouseMove = function (args) {
        if (!this.line && !this.polyline) {
            return;
        }
        if (this.line) {
            this.line.setP2(args.location);
        }
        else if (this.lastPoint) {
            this.lastPoint.x = args.location.x;
            this.lastPoint.y = args.location.y;
        }
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    PolylineTool.prototype.mouseUp = function (args) {
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    PolylineTool.prototype.cancel = function () {
        if (this.model && this.line) {
            this.model.remove(this.line);
            this.line = undefined;
        }
        else if (this.polyline && this.points) {
            this.points.splice(this.points.length - 1);
            if (this.points.length < 3) {
                if (this.model) {
                    this.model.remove(this.polyline);
                }
            }
            else {
                this.polyline.setPoints(this.points);
            }
        }
        this.line = undefined;
        this.polyline = undefined;
        this.points = undefined;
        this.lastPoint = undefined;
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = false;
    };
    return PolylineTool;
}(design_tool_1.DesignTool));
exports.PolylineTool = PolylineTool;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var rectangle_element_1 = __webpack_require__(11);
var design_tool_1 = __webpack_require__(9);
/**
 * Rectangle element design creation tool
 */
var RectangleTool = /** @class */ (function (_super) {
    __extends(RectangleTool, _super);
    function RectangleTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cancelled = false;
        return _this;
    }
    RectangleTool.prototype.mouseDown = function (args) {
        this.cancelled = false;
        this.point1 = point_1.Point.create(args.location.x, args.location.y);
        this.rectangle = rectangle_element_1.RectangleElement.create(args.location.x, args.location.y, 0, 0);
        if (this.stroke) {
            this.rectangle.setStroke(this.stroke);
        }
        if (this.fill) {
            this.rectangle.setFill(this.fill);
        }
        if (this.fillScale !== 1) {
            this.rectangle.setFillScale(this.fillScale);
        }
        if (this.model) {
            this.rectangle.setInteractive(true).addTo(this.model);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = true;
    };
    RectangleTool.prototype.mouseMove = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.rectangle) {
            return;
        }
        if (!this.point1) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.rectangle.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    RectangleTool.prototype.mouseUp = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.rectangle) {
            return;
        }
        if (!this.point1) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.rectangle.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
        this.rectangle = undefined;
        this.isCreating = false;
    };
    RectangleTool.prototype.cancel = function () {
        this.cancelled = true;
        if (this.model && this.rectangle) {
            this.model.remove(this.rectangle);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.rectangle = undefined;
        this.isCreating = false;
    };
    return RectangleTool;
}(design_tool_1.DesignTool));
exports.RectangleTool = RectangleTool;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(1);
var size_1 = __webpack_require__(2);
var text_element_1 = __webpack_require__(23);
var design_tool_1 = __webpack_require__(9);
/**
 * Text element design creation tool
 */
var TextTool = /** @class */ (function (_super) {
    __extends(TextTool, _super);
    function TextTool() {
        var _this = _super.call(this) || this;
        _this.cancelled = false;
        _this.typesize = 10;
        return _this;
    }
    TextTool.prototype.mouseDown = function (args) {
        this.cancelled = false;
        this.point1 = point_1.Point.create(args.location.x, args.location.y);
        this.textElement = text_element_1.TextElement.create(this.text, args.location.x, args.location.y, 0, 0);
        if (this.stroke) {
            this.textElement.setStroke(this.stroke);
        }
        if (this.fill) {
            this.textElement.setFill(this.fill);
        }
        if (this.fillScale !== 1) {
            this.textElement.setFillScale(this.fillScale);
        }
        this.textElement.alignment = this.alignment;
        this.textElement.typeface = this.typeface;
        this.textElement.typestyle = this.typestyle;
        this.textElement.typesize = this.typesize;
        if (this.model) {
            this.textElement.setInteractive(true).addTo(this.model);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.isCreating = true;
    };
    TextTool.prototype.mouseMove = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.textElement) {
            return;
        }
        if (!this.point1) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.textElement.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
    };
    TextTool.prototype.mouseUp = function (args) {
        if (this.cancelled) {
            return;
        }
        if (!this.textElement) {
            return;
        }
        if (!this.point1) {
            return;
        }
        if (args.location.x < this.point1.x || args.location.y < this.point1.y) {
            return;
        }
        this.textElement.setSize(new size_1.Size(args.location.x - this.point1.x, args.location.y - this.point1.y));
        if (this.controller) {
            this.controller.invalidate();
        }
        this.textElement = undefined;
        this.isCreating = false;
    };
    TextTool.prototype.cancel = function () {
        this.cancelled = true;
        if (this.model && this.textElement) {
            this.model.remove(this.textElement);
        }
        if (this.controller) {
            this.controller.invalidate();
        }
        this.textElement = undefined;
        this.isCreating = false;
    };
    return TextTool;
}(design_tool_1.DesignTool));
exports.TextTool = TextTool;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var controller_event_1 = __webpack_require__(40);
var controller_event_args_1 = __webpack_require__(55);
var color_1 = __webpack_require__(10);
var error_messages_1 = __webpack_require__(0);
var logging_1 = __webpack_require__(42);
var mouse_event_args_1 = __webpack_require__(24);
var mouse_location_args_1 = __webpack_require__(66);
var point_1 = __webpack_require__(1);
var point_depth_1 = __webpack_require__(16);
var point_event_parameters_1 = __webpack_require__(48);
var region_1 = __webpack_require__(7);
var size_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(5);
var view_drag_args_1 = __webpack_require__(70);
var element_drag_args_1 = __webpack_require__(77);
var element_location_args_1 = __webpack_require__(78);
var element_size_args_1 = __webpack_require__(79);
var element_size_props_1 = __webpack_require__(80);
var move_location_1 = __webpack_require__(81);
var resize_size_1 = __webpack_require__(82);
var component_element_1 = __webpack_require__(25);
var component_registry_1 = __webpack_require__(74);
var design_renderer_1 = __webpack_require__(83);
var grid_type_1 = __webpack_require__(84);
var handle_factory_1 = __webpack_require__(85);
var log = logging_1.Logging.log;
var EPSILON = 2e-23;
/**
 * Design controller for interactive element creation
 */
var DesignController = /** @class */ (function () {
    /**
     * Manages rendering and interaction with rendered model content
     */
    function DesignController() {
        /**
         * Fired when model is updated
         */
        this.modelUpdated = new controller_event_1.ControllerEvent();
        /**
         * Fired when enabled state is changed
         */
        this.enabledChanged = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse enters view
         */
        this.mouseEnteredView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse leaves view
         */
        this.mouseLeftView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is pressed over view. Captures mouse activity.
         */
        this.mouseDownView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is released and mouse is captured.
         */
        this.mouseUpView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is moved over view
         */
        this.mouseMovedView = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse enters element bounds
         */
        this.mouseEnteredElement = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse leaves element bounds
         */
        this.mouseLeftElement = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is pressed over element
         */
        this.mouseDownElement = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is released over element
         */
        this.mouseUpElement = new controller_event_1.ControllerEvent();
        /**
         * Fired when mouse is pressed and released over an element
         */
        this.elementClicked = new controller_event_1.ControllerEvent();
        /**
         * Period animation event timer fired when timer is enabled
         */
        this.timer = new controller_event_1.ControllerEvent();
        /**
         * Fired when elements are selected or deselected
         */
        this.selectionChanged = new controller_event_1.ControllerEvent();
        /**
         * Fired when element is drag created
         */
        this.elementCreated = new controller_event_1.ControllerEvent();
        /**
         * Fired when an element is added to the model
         */
        this.elementAdded = new controller_event_1.ControllerEvent();
        /**
         * Fired when an element is removed from the model
         */
        this.elementRemoved = new controller_event_1.ControllerEvent();
        /**
         * Fired when a delete request is trigger
         */
        this.onDelete = new controller_event_1.ControllerEvent();
        /**
         * Fired when an element is being moved
         */
        this.elementMoving = new controller_event_1.ControllerEvent();
        /**
         * Fired when an element has been moved
         */
        this.elementMoved = new controller_event_1.ControllerEvent();
        /**
         * Fired when an element is being sized
         */
        this.elementSizing = new controller_event_1.ControllerEvent();
        /**
         * Fired when an element has been sized
         */
        this.elementSized = new controller_event_1.ControllerEvent();
        /**
         * Fired when a mouse drag has started over the view
         */
        this.viewDragEnter = new controller_event_1.ControllerEvent();
        /**
         * Fired while a mouse drag is occurring over the view
         */
        this.viewDragOver = new controller_event_1.ControllerEvent();
        /**
         * Fired when a mouse drag has left the view
         */
        this.viewDragLeave = new controller_event_1.ControllerEvent();
        /**
         * Fired when a mouse drop has occurred on the view
         */
        this.viewDrop = new controller_event_1.ControllerEvent();
        /**
         * Fired when a mouse drag has entered an element
         */
        this.elementDragEnter = new controller_event_1.ControllerEvent();
        /**
         * Fired when a mouse drag has left an element
         */
        this.elementDragLeave = new controller_event_1.ControllerEvent();
        /**
         * Fired when a mouse drop occurs on an element
         */
        this.elementDrop = new controller_event_1.ControllerEvent();
        /**
         * Fired when elements are reordered
         */
        this.elementsReordered = new controller_event_1.ControllerEvent();
        /**
         * Fired when IsDirty state changes
         */
        this.isDirtyChanged = new controller_event_1.ControllerEvent();
        /**
         * Selected element array
         */
        this.selectedElements = [];
        /**
         * Array of tentative sizes for elements being sized
         */
        this.elementResizeSizes = [];
        /**
         * Array of tentative locations for elements being sized or moved
         */
        this.elementMoveLocations = [];
        /**
         * Minimum size to which elements can be sized
         */
        this.minElementSize = new size_1.Size(4, 4);
        /**
         * Design surface grid type
         */
        this.gridType = grid_type_1.GridType.Lines;
        this.setModel = this.setModel.bind(this);
        this.setEnabled = this.setEnabled.bind(this);
        this.addElement = this.addElement.bind(this);
        this.removeElement = this.removeElement.bind(this);
        this.removeSelected = this.removeSelected.bind(this);
        this.addComponentElement = this.addComponentElement.bind(this);
        this.getCanvas = this.getCanvas.bind(this);
        this.drawIfNeeded = this.drawIfNeeded.bind(this);
        this.createCanvas = this.createCanvas.bind(this);
        this.detach = this.detach.bind(this);
        this.setScale = this.setScale.bind(this);
        this.windowToCanvas = this.windowToCanvas.bind(this);
        this.windowMouseUp = this.windowMouseUp.bind(this);
        this.windowMouseMove = this.windowMouseMove.bind(this);
        this.onCanvasMouseEnter = this.onCanvasMouseEnter.bind(this);
        this.onCanvasMouseLeave = this.onCanvasMouseLeave.bind(this);
        this.onCanvasMouseDown = this.onCanvasMouseDown.bind(this);
        this.onCanvasMouseMove = this.onCanvasMouseMove.bind(this);
        this.onCanvasMouseUp = this.onCanvasMouseUp.bind(this);
        this.onCanvasKeyDown = this.onCanvasKeyDown.bind(this);
        this.onCanvasDragEnter = this.onCanvasDragEnter.bind(this);
        this.onCanvasDragOver = this.onCanvasDragOver.bind(this);
        this.onCanvasDragLeave = this.onCanvasDragLeave.bind(this);
        this.onCanvasDrop = this.onCanvasDrop.bind(this);
        this.ensureInBounds = this.ensureInBounds.bind(this);
        this.setMouseDownElement = this.setMouseDownElement.bind(this);
        this.setMouseOverElement = this.setMouseOverElement.bind(this);
        this.setDragOverElement = this.setDragOverElement.bind(this);
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
        this.onElementAdded = this.onElementAdded.bind(this);
        this.onElementRemoved = this.onElementRemoved.bind(this);
        this.onModelUpdated = this.onModelUpdated.bind(this);
        this.onElementSizing = this.onElementSizing.bind(this);
        this.onElementSized = this.onElementSized.bind(this);
        this.setElementLocation = this.setElementLocation.bind(this);
        this.onElementMoved = this.onElementMoved.bind(this);
        this.renderGrid = this.renderGrid.bind(this);
        this.drawDashedLine = this.drawDashedLine.bind(this);
        this.getElementHandles = this.getElementHandles.bind(this);
        this.drawRubberBand = this.drawRubberBand.bind(this);
        this.drawHotspot = this.drawHotspot.bind(this);
        this.drawDashedHorizontalLine = this.drawDashedHorizontalLine.bind(this);
        this.drawDashedVerticalLine = this.drawDashedVerticalLine.bind(this);
        this.drawHorizontalLine = this.drawHorizontalLine.bind(this);
        this.drawVerticalLine = this.drawVerticalLine.bind(this);
        this.drawGuidewires = this.drawGuidewires.bind(this);
        this.draw = this.draw.bind(this);
        this.calculateFPS = this.calculateFPS.bind(this);
        this.invalidate = this.invalidate.bind(this);
        this.selectedElementCount = this.selectedElementCount.bind(this);
        this.selectedElement = this.selectedElement.bind(this);
        this.clearSelections = this.clearSelections.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.selectElement = this.selectElement.bind(this);
        this.deselectElement = this.deselectElement.bind(this);
        this.toggleSelected = this.toggleSelected.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.selectElements = this.selectElements.bind(this);
        this.onElementsReordered = this.onElementsReordered.bind(this);
        this.moveElementToBottom = this.moveElementToBottom.bind(this);
        this.moveElementToTop = this.moveElementToTop.bind(this);
        this.moveElementBackward = this.moveElementBackward.bind(this);
        this.moveElementForward = this.moveElementForward.bind(this);
        this.movableSelectedElementCount = this.movableSelectedElementCount.bind(this);
        this.resizeableSelectedElementCount = this.resizeableSelectedElementCount.bind(this);
        this.nudgeableSelectedElementCount = this.nudgeableSelectedElementCount.bind(this);
        this.clearElementResizeSizes = this.clearElementResizeSizes.bind(this);
        this.setElementResizeSize = this.setElementResizeSize.bind(this);
        this.getElementResizeSize = this.getElementResizeSize.bind(this);
        this.clearElementMoveLocations = this.clearElementMoveLocations.bind(this);
        this.setElementMoveLocation = this.setElementMoveLocation.bind(this);
        this.getElementMoveLocation = this.getElementMoveLocation.bind(this);
        this.nudgeSize = this.nudgeSize.bind(this);
        this.nudgeLocation = this.nudgeLocation.bind(this);
        this.setRubberBandActive = this.setRubberBandActive.bind(this);
        this.setRubberBandRegion = this.setRubberBandRegion.bind(this);
        this.setGridType = this.setGridType.bind(this);
        this.setGridSpacing = this.setGridSpacing.bind(this);
        this.setGridColor = this.setGridColor.bind(this);
        this.bindTarget = this.bindTarget.bind(this);
        this.enabled = true;
        this.scale = 1.0;
        this.lastDeltaX = -1;
        this.lastDeltaY = -1;
        this.isDirty = false;
        this.isMouseDown = false;
        this.isMoving = false;
        this.isResizing = false;
        this.isMovingPoint = false;
        this.isDragging = false;
        this.lastClientX = -1;
        this.lastClientY = -1;
        this.selecting = false;
        this.rubberBandActive = false;
        this.snapToGrid = false;
        this.gridSpacing = 8;
        this.lockAspect = false;
        this.constrainToBounds = true;
        this.gridColor = 'Black';
        this.cancelAction = false;
        this.selectionEnabled = true;
        this.needsRedraw = false;
        this.largeJump = 10;
    }
    /**
     * Determines if a location and size are within the bounds of a model
     * @param p - Point
     * @param s - Size
     * @param model - Model
     */
    DesignController.isInBounds = function (p, s, model) {
        if (p.x < 0 || p.y < 0) {
            return false;
        }
        var size = model.getSize();
        if (!size) {
            return false;
        }
        if (p.x + s.width > size.width) {
            return false;
        }
        if (p.y + s.height > size.height) {
            return false;
        }
        return true;
    };
    /**
     * Create a new view controller and canvas and bind to host DIV element
     * @param hostDiv - Host div element
     * @param model - Drawing model
     * @param scale - Rendering scale
     * @returns New design controller
     */
    DesignController.initializeTarget = function (hostDiv, model, scale) {
        log('Initializing view controller target');
        if (!hostDiv) {
            throw new Error(error_messages_1.ErrorMessages.HostElementUndefined);
        }
        hostDiv.innerHTML = '';
        if (!hostDiv.id) {
            hostDiv.id = utility_1.Utility.guid();
        }
        // Disable arrow/navigation keys to prevent scrolling
        // and allow handling in contained canvas
        var ar = [37, 38, 39, 40];
        // Change to use DOM 0 Style binding to prevent multiples
        hostDiv.onkeydown = function (e) {
            var key = e.which;
            ar.forEach(function (k) {
                if (k === key) {
                    e.preventDefault();
                    return false;
                }
            });
            return true;
        };
        var controller = new DesignController();
        var designScale = scale === undefined ? 1 : scale;
        controller.setScale(designScale);
        controller.setModel(model);
        var canvas = controller.getCanvas();
        if (canvas) {
            hostDiv.appendChild(canvas);
            canvas.setAttribute('id', hostDiv.id + '_canvas');
        }
        var size = model.getSize();
        if (size) {
            hostDiv.style.width = size.width * designScale + 'px';
            hostDiv.style.height = size.height * designScale + 'px';
        }
        controller.draw();
        model.controllerAttached.trigger(model, controller);
        return controller;
    };
    /**
     * Sets controller model
     */
    DesignController.prototype.setModel = function (model) {
        if (model === this.model) {
            return;
        }
        if (this.model) {
            this.model.controllerDetached.trigger(this.model, this);
        }
        log('Setting design controller model');
        this.model = model;
        this.currentX = undefined;
        this.currentY = undefined;
        this.currentWidth = undefined;
        this.currentHeight = undefined;
        this.isMouseDown = false;
        this.isMoving = false;
        this.isResizing = false;
        this.isMovingPoint = false;
        this.isDragging = false;
        this.mouseDownPosition = undefined;
        this.mouseOverElement = undefined;
        this.pressedElement = undefined;
        this.dragOverElement = undefined;
        this.lastDeltaX = -1;
        this.lastDeltaY = -1;
        this.selectedElements = [];
        this.selecting = false;
        this.sizeHandles = undefined;
        this.movingPointLocation = undefined;
        this.elementResizeSizes = [];
        this.elementMoveLocations = [];
        this.rubberBandActive = false;
        this.rubberBandRegion = undefined;
        if (!this.canvas) {
            this.createCanvas();
        }
        else {
            var size = model.getSize();
            if (!size) {
                throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
            }
            var width = size.width * this.scale;
            var height = size.height * this.scale;
            this.canvas.width = width;
            this.canvas.height = height;
            var element = this.canvas.parentElement;
            if (element) {
                element.style.width = width + 'px';
                element.style.height = height + 'px';
            }
        }
        if (this.model.elements) {
            this.model.elements.forEach(function (element) {
                if (element.interactive === undefined) {
                    element.interactive = true;
                }
            });
        }
    };
    /**
     * Sets enabled state with optional disabled state overlay fill
     * @param enabled - User interactivity enabled state
     * @param disabledFill - Optional disabled state fill as string
     */
    DesignController.prototype.setEnabled = function (enabled, disabledFill) {
        if (enabled === this.enabled) {
            return;
        }
        this.enabled = enabled;
        if (disabledFill !== undefined) {
            this.disabledFill = disabledFill;
        }
        if (!enabled) {
            if (this.isMouseDown) {
                this.cancelAction = true;
                this.onCanvasMouseUp({ clientX: this.lastClientX, clientY: this.lastClientY });
            }
            if (this.isDragging) {
                this.onCanvasDragLeave(undefined);
            }
        }
        this.draw();
        if (this.enabledChanged) {
            this.enabledChanged.trigger(this, this.enabled);
        }
    };
    DesignController.prototype.clearActiveTool = function () {
        if (this.activeTool) {
            this.activeTool.cancel();
            this.activeTool.controller = undefined;
            this.activeTool.model = undefined;
            this.activeTool = undefined;
        }
    };
    DesignController.prototype.setActiveTool = function (tool) {
        this.clearSelections();
        if (this.activeTool) {
            this.activeTool.cancel();
            this.activeTool.controller = undefined;
            this.activeTool.model = undefined;
        }
        tool.model = this.model;
        tool.controller = this;
        this.activeTool = tool;
    };
    /**
     * Adds an element to the model
     * @param el - Element to add
     */
    DesignController.prototype.addElement = function (el) {
        if (el.interactive === undefined) {
            el.interactive = true;
        }
        if (this.model) {
            this.model.add(el);
        }
        if (this.constrainToBounds) {
            this.ensureInBounds(el);
        }
        this.onElementAdded(el);
        this.onModelUpdated();
        this.drawIfNeeded();
    };
    /**
     * Removed an element from the model
     * @param el - Element to remove
     */
    DesignController.prototype.removeElement = function (el) {
        if (this.model) {
            var index = this.model.remove(el);
            if (index !== -1) {
                this.onElementRemoved(el);
                this.deselectElement(el);
                this.onModelUpdated();
                this.drawIfNeeded();
            }
        }
    };
    /**
     * Removes all selected elements
     */
    DesignController.prototype.removeSelected = function () {
        var self = this;
        var itemsRemoved = false;
        self.selectedElements.forEach(function (el) {
            if (self.model) {
                var index = self.model.remove(el);
                if (index !== -1) {
                    itemsRemoved = true;
                    self.onElementRemoved(el);
                }
            }
        });
        if (itemsRemoved) {
            self.selectedElements = [];
            self.onSelectionChanged();
            self.onModelUpdated();
            self.drawIfNeeded();
        }
    };
    /**
     * Adds a new component element to the model
     * @param type - Type of component element to add
     * @param id - New element id
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param width - Width
     * @param height - Height
     * @param props - Element creation props
     * @param callback - Element created callback (element: Elise.ElementBase)
     */
    DesignController.prototype.addComponentElement = function (type, id, x, y, width, height, props, callback) {
        var self = this;
        var component = component_registry_1.ComponentRegistry.getComponent(type);
        if (!component) {
            throw new Error(error_messages_1.ErrorMessages.ComponentTypeNotRegistered + ': ' + type);
        }
        if (self.model) {
            var el_1 = component.CreateElement(self.model, id, x, y, width, height, props);
            el_1.interactive = true;
            self.model.prepareResources(undefined, function (success) {
                if (success) {
                    self.onElementAdded(el_1);
                    self.onModelUpdated();
                    self.drawIfNeeded();
                    if (callback) {
                        callback(el_1);
                    }
                }
                else {
                    throw new Error(error_messages_1.ErrorMessages.ResourcesFailedToLoad);
                }
            });
        }
    };
    /**
     * Creates if necessary and returns canvas element
     */
    DesignController.prototype.getCanvas = function () {
        if (!this.canvas) {
            this.createCanvas();
        }
        return this.canvas;
    };
    /**
     * Renders to canvas if needed and clears redraw flag
     */
    DesignController.prototype.drawIfNeeded = function () {
        if (this.needsRedraw) {
            this.draw();
            this.needsRedraw = false;
        }
    };
    /**
     * Creates canvas for model at current scale and attached event handlers
     */
    DesignController.prototype.createCanvas = function () {
        log('Creating canvas and attaching event handlers');
        var self = this;
        if (!self.model) {
            return;
        }
        var size = self.model.getSize();
        if (!size) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var canvas = document.createElement('canvas');
        canvas.width = size.width * self.scale;
        canvas.height = size.height * self.scale;
        canvas.setAttribute('tabindex', '0');
        canvas.addEventListener('mouseenter', self.onCanvasMouseEnter);
        canvas.addEventListener('mouseleave', self.onCanvasMouseLeave);
        canvas.addEventListener('mousedown', self.onCanvasMouseDown);
        canvas.addEventListener('mousemove', self.onCanvasMouseMove);
        canvas.addEventListener('keydown', self.onCanvasKeyDown);
        canvas.addEventListener('dragenter', self.onCanvasDragEnter);
        canvas.addEventListener('dragleave', self.onCanvasDragLeave);
        canvas.addEventListener('drop', self.onCanvasDrop);
        self.canvas = canvas;
        self.renderer = new design_renderer_1.DesignRenderer(self);
    };
    /**
     * Detaches and destroys current canvas
     */
    DesignController.prototype.detach = function () {
        if (this.model) {
            this.model.controllerDetached.trigger(this.model, this);
            this.model.controllerDetached.clear();
            this.model.controllerAttached.clear();
        }
        if (!this.canvas) {
            return;
        }
        log('Detaching event handlers and destroying canvas');
        this.canvas.addEventListener('mouseenter', this.onCanvasMouseEnter);
        this.canvas.addEventListener('mouseleave', this.onCanvasMouseLeave);
        this.canvas.addEventListener('mousedown', this.onCanvasMouseDown);
        this.canvas.addEventListener('mousemove', this.onCanvasMouseMove);
        this.canvas.addEventListener('keydown', this.onCanvasKeyDown);
        this.canvas.addEventListener('dragenter', this.onCanvasDragEnter);
        this.canvas.addEventListener('dragleave', this.onCanvasDragLeave);
        this.canvas.addEventListener('drop', this.onCanvasDrop);
        var element = this.canvas.parentElement;
        if (element) {
            element.removeChild(this.canvas);
        }
        this.modelUpdated.clear();
        this.enabledChanged.clear();
        this.mouseEnteredView.clear();
        this.mouseLeftView.clear();
        this.mouseDownView.clear();
        this.mouseUpView.clear();
        this.mouseMovedView.clear();
        this.mouseEnteredElement.clear();
        this.mouseLeftElement.clear();
        this.mouseDownElement.clear();
        this.mouseUpElement.clear();
        this.elementClicked.clear();
        this.timer.clear();
        this.selectionChanged.clear();
        this.elementCreated.clear();
        this.elementAdded.clear();
        this.elementRemoved.clear();
        this.onDelete.clear();
        this.elementMoving.clear();
        this.elementMoved.clear();
        this.elementSizing.clear();
        this.elementSized.clear();
        this.viewDragEnter.clear();
        this.viewDragOver.clear();
        this.viewDragLeave.clear();
        this.viewDrop.clear();
        this.elementDragEnter.clear();
        this.elementDragLeave.clear();
        this.elementDrop.clear();
        this.elementsReordered.clear();
        this.isDirtyChanged.clear();
        this.canvas = undefined;
    };
    /**
     * Changes design surface rendering scale
     * @param scale - New rendering scale
     */
    DesignController.prototype.setScale = function (scale, force) {
        if (scale === this.scale && !force) {
            return;
        }
        this.scale = scale;
        if (this.canvas) {
            if (this.model) {
                var size = this.model.getSize();
                if (!size) {
                    throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
                }
                var width = size.width * scale;
                var height = size.height * scale;
                this.canvas.width = width;
                this.canvas.height = height;
                var element = this.canvas.parentElement;
                if (element) {
                    element.style.width = width + 'px';
                    element.style.height = height + 'px';
                }
                this.draw();
            }
        }
    };
    DesignController.prototype.getNearestSnapX = function (newX) {
        var diff = newX % this.gridSpacing;
        if (diff > EPSILON) {
            if (diff < this.gridSpacing / 2) {
                newX -= diff;
            }
            else {
                diff = this.gridSpacing - diff;
                newX += diff;
            }
            return newX;
        }
        else {
            return newX;
        }
    };
    DesignController.prototype.getNearestSnapY = function (newY) {
        var diff = newY % this.gridSpacing;
        if (diff > EPSILON) {
            if (diff < this.gridSpacing / 2) {
                newY -= diff;
            }
            else {
                diff = this.gridSpacing - diff;
                newY += diff;
            }
            return newY;
        }
        else {
            return newY;
        }
    };
    /**
     * Translates raw window coordinates to model coordinates
     * compensating for current scale and origin offset
     * @param x - Raw x coordinate
     * @param y - Raw y coordinate
     */
    DesignController.prototype.windowToCanvas = function (x, y) {
        if (!this.canvas) {
            return new point_1.Point(x, y);
        }
        var bounds = this.canvas.getBoundingClientRect();
        return new point_1.Point(Math.round((x - bounds.left * (this.canvas.width / bounds.width)) / this.scale), Math.round((y - bounds.top * (this.canvas.height / bounds.height)) / this.scale));
    };
    /**
     * Handles captured mouse up event
     * @param e - Window mouse up event
     */
    DesignController.prototype.windowMouseUp = function (e) {
        var captured = DesignController.captured;
        if (captured) {
            log("Window mouse up " + e.clientX + ":" + e.clientY);
            captured.onCanvasMouseUp(e);
            captured.drawIfNeeded();
            window.removeEventListener('mousedown', captured.windowMouseUp, true);
            window.removeEventListener('mousemove', captured.windowMouseMove, true);
            DesignController.captured = undefined;
        }
    };
    /**
     * Handles captured mouse move event
     * @param e - Window mouse up event
     */
    DesignController.prototype.windowMouseMove = function (e) {
        var captured = DesignController.captured;
        if (captured) {
            log("Window mouse move " + e.clientX + ":" + e.clientY);
            e.preventDefault();
            e.stopPropagation();
            captured.onCanvasMouseMove(e);
            captured.drawIfNeeded();
        }
    };
    /**
     * Handles canvas mouse enter event
     * @param e - DOM mouse event
     */
    DesignController.prototype.onCanvasMouseEnter = function (e) {
        log('Canvas mouse enter');
        if (!this.enabled) {
            return;
        }
        if (this.mouseEnteredView.hasListeners()) {
            this.mouseEnteredView.trigger(this, new mouse_event_args_1.MouseEventArgs(e));
        }
        this.drawIfNeeded();
    };
    /**
     * Handles canvas mouse leave event
     * @param e - DOM mouse event
     */
    DesignController.prototype.onCanvasMouseLeave = function (e) {
        log('Canvas mouse leave');
        if (!this.enabled) {
            return;
        }
        if (this.mouseLeftView.hasListeners()) {
            this.mouseLeftView.trigger(this, new mouse_event_args_1.MouseEventArgs(e));
        }
        this.drawIfNeeded();
    };
    /**
     * Handles canvas mouse down event
     * @param c - Design controller
     * @param e - Mouse event
     */
    DesignController.prototype.onCanvasMouseDown = function (e) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this.canvas) {
            return;
        }
        log("Canvas mouse down " + e.clientX + ":" + e.clientY);
        DesignController.captured = this;
        window.addEventListener('mouseup', this.windowMouseUp, true);
        window.addEventListener('mousemove', this.windowMouseMove, true);
        if (!this.enabled) {
            return;
        }
        var p = this.windowToCanvas(e.clientX, e.clientY);
        var context = this.canvas.getContext('2d');
        if (!context) {
            return;
        }
        // Set current location and empty width/height
        this.currentX = p.x;
        this.currentY = p.y;
        this.currentWidth = 0;
        this.currentHeight = 0;
        this.mouseDownPosition = new point_1.Point(p.x, p.y);
        this.isMouseDown = true;
        // Get button clicked (0 = Left)
        var button = e.button;
        // If we have an active tool
        if (this.activeTool) {
            // If it's creating and right button pressed, cancel and return
            if (this.activeTool.isCreating && button === 2) {
                this.activeTool.cancel();
                e.preventDefault();
                e.stopPropagation();
                this.isMouseDown = false;
                this.draw();
                return;
            }
            // If not right mouse button, pass to tool
            if (button !== 2) {
                this.activeTool.mouseDown(new mouse_location_args_1.MouseLocationArgs(e, new point_1.Point(p.x, p.y)));
            }
            // Fire mouse down event
            if (this.mouseDownView.hasListeners()) {
                this.mouseDownView.trigger(this, new point_event_parameters_1.PointEventParameters(e, new point_1.Point(p.x, p.y)));
            }
            return;
        }
        // Fire mouse down event
        if (this.mouseDownView.hasListeners()) {
            this.mouseDownView.trigger(this, new point_event_parameters_1.PointEventParameters(e, new point_1.Point(p.x, p.y)));
        }
        // Set active element if any at location
        var activeElement = this.model.firstActiveElementAt(context, p.x, p.y);
        this.setMouseDownElement(activeElement);
        // Clear cancel action flag
        this.cancelAction = false;
        // Left button
        if (button === 0 || button === 2) {
            var foundHandle = false;
            var selectedHandle_1;
            for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
                var el = _a[_i];
                var handles = this.getElementHandles(el);
                // If element is transformed, hit test against transformed rectangles
                if (el.transform) {
                    context.save();
                    var b = el.getBounds();
                    if (!b) {
                        continue;
                    }
                    var reference = new point_1.Point(b.x, b.y);
                    if (this.isMoving && el.canMove()) {
                        reference = this.getElementMoveLocation(el);
                    }
                    else if (this.isResizing && el.canResize()) {
                        reference = this.getElementMoveLocation(el);
                    }
                    this.model.setRenderTransform(context, el.transform, reference);
                    for (var _b = 0, handles_1 = handles; _b < handles_1.length; _b++) {
                        var h = handles_1[_b];
                        context.beginPath();
                        if (h.region) {
                            context.rect(h.region.x, h.region.y, h.region.width, h.region.height);
                        }
                        var hit = context.isPointInPath(p.x, p.y);
                        context.closePath();
                        if (hit) {
                            this.canvas.style.cursor = h.cursor;
                            foundHandle = true;
                            selectedHandle_1 = h;
                            break;
                        }
                    }
                    context.restore();
                }
                else {
                    // No element transform, so test handle regions
                    for (var _c = 0, handles_2 = handles; _c < handles_2.length; _c++) {
                        var h = handles_2[_c];
                        var hr = h.region;
                        if (!hr) {
                            continue;
                        }
                        var hit = hr.containsCoordinate(p.x, p.y);
                        if (!hit) {
                            if (h.barRegion && h.barRegion.containsCoordinate(p.x, p.y)) {
                                hit = true;
                            }
                        }
                        if (hit) {
                            this.canvas.style.cursor = h.cursor;
                            selectedHandle_1 = h;
                            foundHandle = true;
                            break;
                        }
                    }
                    if (foundHandle) {
                        break;
                    }
                }
            }
            // If handle found put in resizing mode
            if (foundHandle && button === 0 && selectedHandle_1) {
                // If multiple elements selected
                this.sizeHandles = [];
                if (this.resizeableSelectedElementCount() > 0) {
                    var self_1 = this;
                    this.selectedElements.forEach(function (selectedElement) {
                        if (selectedElement.canResize()) {
                            var elementHandles = self_1.getElementHandles(selectedElement);
                            elementHandles.forEach(function (handle) {
                                if (selectedHandle_1 && handle.handleId === selectedHandle_1.handleId) {
                                    if (!self_1.sizeHandles) {
                                        self_1.sizeHandles = [];
                                    }
                                    self_1.sizeHandles.push(handle);
                                }
                            }, self_1);
                        }
                    }, this);
                    this.isResizing = true;
                }
                else if (this.selectedElementCount() === 1) {
                    var el = this.selectedElements[0];
                    if (el.canMovePoint()) {
                        var pointIndex = selectedHandle_1.handleIndex;
                        if (pointIndex !== undefined) {
                            this.sizeHandles.push(selectedHandle_1);
                            this.isMovingPoint = true;
                            this.movingPointLocation = el.getPointAt(pointIndex, point_depth_1.PointDepth.Full);
                            this.movingPointIndex = pointIndex;
                        }
                    }
                }
                return;
            }
            // Select/deselect element
            if (this.selectionEnabled || e.ctrlKey || e.metaKey || button === 2) {
                var elementsAtPoint = this.model.elementsAt(context, p.x, p.y);
                if (elementsAtPoint && elementsAtPoint.length > 0) {
                    this.rubberBandActive = false;
                    this.canvas.style.cursor = 'pointer';
                    // If any elements under point are already selected, do nothing
                    var elementSelected = false;
                    for (var _d = 0, elementsAtPoint_1 = elementsAtPoint; _d < elementsAtPoint_1.length; _d++) {
                        var elementAtPoint = elementsAtPoint_1[_d];
                        if (this.isSelected(elementAtPoint)) {
                            elementSelected = true;
                            break;
                        }
                    }
                    // Select element
                    if (e.shiftKey) {
                        if (button === 0) {
                            this.toggleSelected(elementsAtPoint[elementsAtPoint.length - 1]);
                        }
                        else if (button === 2) {
                            this.selectElement(elementsAtPoint[elementsAtPoint.length - 1]);
                        }
                    }
                    else if (this.selectionEnabled && (e.ctrlKey || e.metaKey)) {
                        if (button === 0) {
                            this.toggleSelected(elementsAtPoint[elementsAtPoint.length - 1]);
                        }
                        else if (button === 2) {
                            this.selectElement(elementsAtPoint[elementsAtPoint.length - 1]);
                        }
                    }
                    else {
                        // Select current element and clear others
                        if (!elementSelected) {
                            this.clearSelections();
                            this.selectElement(elementsAtPoint[elementsAtPoint.length - 1]);
                        }
                        else {
                            // Toggle edit points mode
                            if (elementsAtPoint.length === 1) {
                                if (elementsAtPoint[0].canEditPoints()) {
                                    if (elementsAtPoint[0].editPoints) {
                                        elementsAtPoint[0].editPoints = false;
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    // Deselect all elements
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                        this.clearSelections();
                    }
                    // Enable rubber band
                    this.rubberBandRegion = new region_1.Region(p.x, p.y, 0, 0);
                    this.rubberBandActive = true;
                    if (this.selectionEnabled) {
                        this.selecting = true;
                    }
                    else {
                        if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                            this.selecting = false;
                        }
                        else {
                            this.selecting = true;
                        }
                    }
                    this.invalidate();
                }
            }
            else {
                // Enable rubber band
                this.clearSelections();
                this.rubberBandRegion = new region_1.Region(p.x, p.y, 0, 0);
                this.rubberBandActive = true;
                this.selecting = false;
                this.invalidate();
            }
            this.invalidate();
        }
        this.drawIfNeeded();
    };
    /**
     * Handles canvas mouse move event
     * @param this - Design controller
     * @param e - Mouse event
     */
    DesignController.prototype.onCanvasMouseMove = function (e) {
        if (!this.enabled) {
            return;
        }
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this.canvas) {
            return;
        }
        if (e.button === 2) {
            return;
        }
        this.lastClientX = e.clientX;
        this.lastClientY = e.clientY;
        var p = this.windowToCanvas(e.clientX, e.clientY);
        if (this.isMouseDown && this.currentX !== undefined && this.currentY !== undefined) {
            this.currentWidth = p.x - this.currentX;
            this.currentHeight = p.y - this.currentY;
        }
        else {
            this.currentX = p.x;
            this.currentY = p.y;
            this.currentWidth = 0;
            this.currentHeight = 0;
        }
        // Get distance moved
        var deltaX = 0;
        var deltaY = 0;
        if (this.mouseDownPosition) {
            var size = this.model.getSize();
            if (size) {
                deltaX = p.x - this.mouseDownPosition.x;
                if (this.mouseDownPosition.x + deltaX < 0) {
                    deltaX = -this.mouseDownPosition.x;
                    this.currentX = 0;
                    this.currentWidth = this.mouseDownPosition.x;
                }
                else if (this.mouseDownPosition.x + deltaX >= size.width) {
                    deltaX = size.width - this.mouseDownPosition.x;
                    this.currentX = size.width - 1;
                    this.currentWidth = deltaX;
                }
                deltaY = p.y - this.mouseDownPosition.y;
                if (this.mouseDownPosition.y + deltaY < 0) {
                    deltaY = -this.mouseDownPosition.y;
                    this.currentY = 0;
                    this.currentHeight = this.mouseDownPosition.y;
                }
                else if (this.mouseDownPosition.y + deltaY >= size.height) {
                    deltaY = size.height - this.mouseDownPosition.y;
                    this.currentY = size.height - 1;
                    this.currentHeight = deltaY;
                }
                if (deltaX === this.lastDeltaX && deltaY === this.lastDeltaY) {
                    return;
                }
            }
        }
        this.lastDeltaX = deltaX;
        this.lastDeltaY = deltaY;
        // Fire view mouse moved event
        if (this.mouseMovedView.hasListeners()) {
            this.mouseMovedView.trigger(this, new point_event_parameters_1.PointEventParameters(e, new point_1.Point(p.x, p.y)));
        }
        // If we have an active tool, then delegate and return
        if (this.activeTool) {
            this.activeTool.mouseMove(new mouse_location_args_1.MouseLocationArgs(e, new point_1.Point(p.x, p.y)));
            return;
        }
        // If resizing
        if (this.isResizing && this.sizeHandles && this.sizeHandles.length > 0) {
            this.sizeHandles.forEach(function (h) {
                if (h.handleMoved) {
                    h.handleMoved(h, { deltaX: Math.round(deltaX), deltaY: Math.round(deltaY) });
                }
            });
        }
        else if (this.isMoving) {
            // Ensure no moves will result in out of bounds
            var allOkay = true;
            if (this.constrainToBounds) {
                for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
                    var selectedElement = _a[_i];
                    if (selectedElement.canMove()) {
                        var b = selectedElement.getBounds();
                        if (!b) {
                            continue;
                        }
                        var moveLocation = new point_1.Point(Math.round(b.x + deltaX), Math.round(b.y + deltaY));
                        if (!DesignController.isInBounds(moveLocation, b.size, this.model)) {
                            allOkay = false;
                            break;
                        }
                    }
                }
            }
            if (allOkay) {
                for (var _b = 0, _c = this.selectedElements; _b < _c.length; _b++) {
                    var selectedElement = _c[_b];
                    if (selectedElement.canMove()) {
                        var b = selectedElement.getBounds();
                        if (b) {
                            var moveLocation = new point_1.Point(Math.round(b.x + deltaX), Math.round(b.y + deltaY));
                            this.setElementMoveLocation(selectedElement, moveLocation, b.size);
                            this.invalidate();
                        }
                    }
                }
            }
            else {
                // Determine maximum we can move and set new diffX/diffY
                var x1 = Number.POSITIVE_INFINITY;
                var x2 = Number.NEGATIVE_INFINITY;
                var y1 = Number.POSITIVE_INFINITY;
                var y2 = Number.NEGATIVE_INFINITY;
                for (var _d = 0, _e = this.selectedElements; _d < _e.length; _d++) {
                    var selectedElement = _e[_d];
                    if (selectedElement.canMove()) {
                        var b = selectedElement.getBounds();
                        if (b) {
                            if (b.x < x1) {
                                x1 = b.x;
                            }
                            if (b.x + b.width > x2) {
                                x2 = b.x + b.width;
                            }
                            if (b.y < y1) {
                                y1 = b.y;
                            }
                            if (b.y + b.height > y2) {
                                y2 = b.y + b.height;
                            }
                        }
                    }
                }
                var size = this.model.getSize();
                if (size) {
                    if (deltaX < 0 && x1 + deltaX < 0) {
                        deltaX = -x1;
                    }
                    else if (deltaX > 0 && x2 + deltaX > size.width) {
                        deltaX = size.width - x2;
                    }
                    if (deltaY < 0 && y1 + deltaY < 0) {
                        deltaY = -y1;
                    }
                    else if (deltaY > 0 && y2 + deltaY > size.height) {
                        deltaY = size.height - y2;
                    }
                }
                for (var _f = 0, _g = this.selectedElements; _f < _g.length; _f++) {
                    var selectedElement = _g[_f];
                    if (selectedElement.canMove()) {
                        var b = selectedElement.getBounds();
                        if (b) {
                            var moveLocation = new point_1.Point(Math.round(b.x + deltaX), Math.round(b.y + deltaY));
                            this.setElementMoveLocation(selectedElement, moveLocation, b.size);
                            this.invalidate();
                        }
                    }
                }
            }
        }
        else if (this.isMovingPoint && this.movingPointIndex !== undefined) {
            var pointHolder = this.selectedElements[0];
            var depth = point_depth_1.PointDepth.Simple;
            if (this.selectedElementCount() === 1) {
                depth = point_depth_1.PointDepth.Full;
            }
            var pointLocation = pointHolder.getPointAt(this.movingPointIndex, depth);
            var newLocation = void 0;
            if (this.snapToGrid) {
                newLocation = new point_1.Point(this.getNearestSnapX(pointLocation.x + deltaX), this.getNearestSnapY(pointLocation.y + deltaY));
            }
            else {
                newLocation = new point_1.Point(Math.round(pointLocation.x + deltaX), Math.round(pointLocation.y + deltaY));
            }
            this.movingPointLocation = newLocation;
            this.invalidate();
        }
        else if (this.isMouseDown) {
            if (!this.isMoving) {
                // Determine if any movable elements selected and if so, initiate move
                if (this.movableSelectedElementCount() > 0) {
                    if (deltaX * deltaX + deltaY * deltaY > 8) {
                        this.isMoving = true;
                        this.invalidate();
                    }
                }
            }
            // If rubber banding, update
            if (this.rubberBandActive && this.mouseDownPosition) {
                var left = Math.min(this.mouseDownPosition.x, this.mouseDownPosition.x + deltaX);
                var top_1 = Math.min(this.mouseDownPosition.y, this.mouseDownPosition.y + deltaY);
                var width = Math.abs(deltaX);
                var height = Math.abs(deltaY);
                // If snapping to grid
                if (this.snapToGrid) {
                    var snappedLeft = this.getNearestSnapX(this.mouseDownPosition.x);
                    left = snappedLeft;
                    var snappedTop = this.getNearestSnapY(this.mouseDownPosition.y);
                    top_1 = snappedTop;
                }
                if (left < 0) {
                    left = 0;
                }
                if (top_1 < 0) {
                    top_1 = 0;
                }
                var size = this.model.getSize();
                if (size) {
                    if (left + width > size.width) {
                        width = size.width - left;
                    }
                    if (top_1 + height > size.height) {
                        height = size.height - top_1;
                    }
                    this.rubberBandRegion = new region_1.Region(left, top_1, width, height);
                }
                this.invalidate();
                if (this.canvas) {
                    this.canvas.style.cursor = 'none';
                }
            }
        }
        else {
            // Determine if over handle
            var foundHandle = false;
            var sl = this.selectedElements.length;
            for (var si = 0; si < sl; si++) {
                var selectedElement = this.selectedElements[si];
                var handles = this.getElementHandles(selectedElement);
                // If element is transformed, hit test against transformed rectangles
                if (selectedElement.transform) {
                    var context = this.canvas.getContext('2d');
                    if (context) {
                        context.save();
                        var b = selectedElement.getBounds();
                        if (!b) {
                            continue;
                        }
                        var reference = new point_1.Point(b.x, b.y);
                        if (this.isMoving && selectedElement.canMove()) {
                            reference = this.getElementMoveLocation(selectedElement);
                        }
                        else if (this.isResizing && selectedElement.canResize()) {
                            reference = this.getElementMoveLocation(selectedElement);
                        }
                        this.model.setRenderTransform(context, selectedElement.transform, reference);
                        for (var _h = 0, handles_3 = handles; _h < handles_3.length; _h++) {
                            var h = handles_3[_h];
                            context.beginPath();
                            if (!h.region) {
                                return;
                            }
                            context.rect(h.region.x, h.region.y, h.region.width, h.region.height);
                            var hit = context.isPointInPath(p.x, p.y);
                            context.closePath();
                            if (hit) {
                                this.canvas.style.cursor = h.cursor;
                                foundHandle = true;
                                break;
                            }
                        }
                        context.restore();
                    }
                }
                else {
                    // No element transform, so test handle regions
                    for (var _j = 0, handles_4 = handles; _j < handles_4.length; _j++) {
                        var h = handles_4[_j];
                        if (!h.region) {
                            continue;
                        }
                        var hit = h.region.containsCoordinate(p.x, p.y);
                        if (hit) {
                            this.canvas.style.cursor = h.cursor;
                            foundHandle = true;
                            break;
                        }
                    }
                    if (foundHandle) {
                        break;
                    }
                }
            }
            if (!foundHandle) {
                var context = this.canvas.getContext('2d');
                if (context) {
                    var elementsAtPoint = this.model.elementsAt(context, p.x, p.y);
                    if (elementsAtPoint && elementsAtPoint.length > 0) {
                        if (e.ctrlKey || e.metaKey) {
                            this.canvas.style.cursor = 'pointer';
                        }
                        else if (this.selectionEnabled) {
                            this.canvas.style.cursor = 'pointer';
                        }
                        else {
                            this.canvas.style.cursor = 'crosshair';
                        }
                        var activeElement = elementsAtPoint[elementsAtPoint.length - 1];
                        this.setMouseOverElement(activeElement);
                    }
                    else {
                        this.canvas.style.cursor = 'crosshair';
                        this.setMouseOverElement(undefined);
                    }
                }
            }
        }
        this.drawIfNeeded();
    };
    /**
     * Handles canvas mouse up
     * @param this - Design controller
     * @param e - Mouse event info
     */
    DesignController.prototype.onCanvasMouseUp = function (e) {
        log("Canvas mouse up " + e.clientX + ":" + e.clientY);
        if (!this.enabled) {
            return;
        }
        if (!this.mouseDownPosition) {
            return;
        }
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this.canvas) {
            return;
        }
        var p = this.windowToCanvas(e.clientX, e.clientY);
        var deltaX = p.x - this.mouseDownPosition.x;
        var deltaY = p.y - this.mouseDownPosition.y;
        // Clear mouse down state and call any mouse up or click listeners
        this.isMouseDown = false;
        if (this.mouseUpView.hasListeners()) {
            this.mouseUpView.trigger(this, new point_event_parameters_1.PointEventParameters(e, new point_1.Point(p.x, p.y)));
        }
        // If we have an active tool, then delegate and return
        if (this.activeTool) {
            this.activeTool.mouseUp(new mouse_location_args_1.MouseLocationArgs(e, new point_1.Point(p.x, p.y)));
            return;
        }
        // Left button up
        var button = e.button;
        if (button === 0) {
            this.isMouseDown = false;
            // If rubber banding
            if (this.rubberBandActive && this.rubberBandRegion) {
                this.rubberBandActive = false;
                if (this.selecting) {
                    var itemsSelected = false;
                    for (var _i = 0, _a = this.model.elements; _i < _a.length; _i++) {
                        var el = _a[_i];
                        if (el.interactive) {
                            var b = el.getBounds();
                            if (!b) {
                                continue;
                            }
                            // If DX and DY are both negative, use full select
                            if (deltaX < 0 && deltaY < 0) {
                                if (this.rubberBandRegion.containsRegion(b)) {
                                    if (!this.isSelected(el)) {
                                        this.selectedElements.push(el);
                                        itemsSelected = true;
                                    }
                                }
                            }
                            else {
                                if (b.intersectsWith(this.rubberBandRegion)) {
                                    if (!this.isSelected(el)) {
                                        this.selectedElements.push(el);
                                        itemsSelected = true;
                                    }
                                }
                            }
                        }
                    }
                    if (itemsSelected) {
                        this.onSelectionChanged();
                    }
                    this.selecting = false;
                }
                else {
                    // If action not cancelled
                    if (!this.cancelAction) {
                        if (this.elementCreated.hasListeners() &&
                            this.rubberBandRegion.width >= this.minElementSize.width &&
                            this.rubberBandRegion.height >= this.minElementSize.height) {
                            this.elementCreated.trigger(this, this.rubberBandRegion);
                        }
                    }
                }
            }
            this.invalidate();
            // Exit if action cancelled
            if (this.cancelAction) {
                if (this.pressedElement) {
                    var el = this.pressedElement;
                    if (this.mouseUpElement.hasListeners()) {
                        this.mouseUpElement.trigger(this, el);
                    }
                    this.pressedElement = undefined;
                }
                if (this.isMoving) {
                    this.clearElementMoveLocations();
                    this.selectedElements.forEach(function (el) {
                        if (el instanceof component_element_1.ComponentElement && el.component) {
                            if (el.component.size.hasListeners()) {
                                var size = el.getSize();
                                if (size) {
                                    el.component.size.trigger(el.component, new element_size_props_1.ElementSizeProps(el, size));
                                }
                            }
                        }
                    });
                    this.isMoving = false;
                    this.invalidate();
                }
                else if (this.isResizing) {
                    this.clearElementMoveLocations();
                    this.clearElementResizeSizes();
                    this.selectedElements.forEach(function (el) {
                        if (el instanceof component_element_1.ComponentElement && el.component) {
                            if (el.component.size.hasListeners()) {
                                var size = el.getSize();
                                if (size) {
                                    el.component.size.trigger(el.component, new element_size_props_1.ElementSizeProps(el, size));
                                }
                            }
                        }
                    });
                    this.sizeHandles = undefined;
                    this.isResizing = false;
                    this.invalidate();
                    this.canvas.style.cursor = 'crosshair';
                }
                else if (this.isMovingPoint) {
                    this.clearElementMoveLocations();
                    this.clearElementResizeSizes();
                    this.selectedElements.forEach(function (el) {
                        el.clearBounds();
                    });
                    this.sizeHandles = undefined;
                    this.isMovingPoint = false;
                    this.movingPointLocation = undefined;
                    this.invalidate();
                    this.canvas.style.cursor = 'crosshair';
                }
                return;
            }
            // If elements were being moved, commit move
            if (this.isMoving) {
                for (var _b = 0, _c = this.selectedElements; _b < _c.length; _b++) {
                    var selectedElement = _c[_b];
                    if (selectedElement.canMove()) {
                        var moveLocation = this.getElementMoveLocation(selectedElement);
                        selectedElement.setLocation(new point_1.Point(Math.round(moveLocation.x), Math.round(moveLocation.y)));
                        var resizeSize = this.getElementResizeSize(selectedElement);
                        selectedElement.setSize(new size_1.Size(Math.round(resizeSize.width), Math.round(resizeSize.height)));
                        var bounds = selectedElement.getBounds();
                        if (bounds) {
                            this.onElementMoved(selectedElement, new point_1.Point(bounds.x, bounds.y));
                            this.onElementSized(selectedElement, new size_1.Size(bounds.width, bounds.height));
                        }
                        this.invalidate();
                    }
                }
                this.isMoving = false;
                this.invalidate();
            }
            else if (this.isResizing) {
                for (var _d = 0, _e = this.selectedElements; _d < _e.length; _d++) {
                    var selectedElement = _e[_d];
                    if (selectedElement.canResize()) {
                        var moveLocation = this.getElementMoveLocation(selectedElement);
                        selectedElement.setLocation(new point_1.Point(Math.round(moveLocation.x), Math.round(moveLocation.y)));
                        var resizeSize = this.getElementResizeSize(selectedElement);
                        selectedElement.setSize(new size_1.Size(Math.round(resizeSize.width), Math.round(resizeSize.height)));
                        var bounds = selectedElement.getBounds();
                        if (bounds) {
                            this.onElementMoved(selectedElement, new point_1.Point(bounds.x, bounds.y));
                            this.onElementSized(selectedElement, new size_1.Size(bounds.width, bounds.height));
                        }
                        this.invalidate();
                    }
                }
                this.sizeHandles = undefined;
                this.isResizing = false;
                this.invalidate();
                this.canvas.style.cursor = 'crosshair';
            }
            else if (this.isMovingPoint && this.movingPointIndex !== undefined && this.movingPointLocation) {
                var selectedElement = this.selectedElements[0];
                var moveLocation = this.movingPointLocation;
                var depth = point_depth_1.PointDepth.Simple;
                if (this.selectedElementCount() === 1) {
                    depth = point_depth_1.PointDepth.Full;
                }
                selectedElement.setPointAt(this.movingPointIndex, new point_1.Point(Math.round(moveLocation.x), Math.round(moveLocation.y)), depth);
                selectedElement.clearBounds();
                this.clearElementMoveLocations();
                this.clearElementResizeSizes();
                this.sizeHandles = undefined;
                this.isMovingPoint = false;
                this.movingPointLocation = undefined;
                this.invalidate();
                this.canvas.style.cursor = 'crosshair';
            }
        }
        if (this.pressedElement) {
            var el = this.pressedElement;
            if (this.mouseUpElement.hasListeners()) {
                this.mouseUpElement.trigger(this, el);
            }
            if (el === this.mouseOverElement) {
                if (this.elementClicked.hasListeners()) {
                    this.elementClicked.trigger(this, el);
                }
            }
            this.pressedElement = undefined;
        }
        this.drawIfNeeded();
    };
    /**
     * Handles canvas key down
     * @param this - Design controller
     * @param e - DOM Keyboard event
     */
    DesignController.prototype.onCanvasKeyDown = function (e) {
        if (!this.enabled) {
            return false;
        }
        switch (e.keyCode) {
            case 37: // Left Arrow
                if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
                    this.nudgeSize(-this.largeJump, 0);
                }
                else if (e.ctrlKey || e.metaKey) {
                    this.nudgeSize(-1, 0);
                }
                else if (e.shiftKey) {
                    this.nudgeLocation(-this.largeJump, 0);
                }
                else {
                    this.nudgeLocation(-1, 0);
                }
                return true;
            case 39: // Right Arrow
                if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
                    this.nudgeSize(this.largeJump, 0);
                }
                else if (e.ctrlKey || e.metaKey) {
                    this.nudgeSize(1, 0);
                }
                else if (e.shiftKey) {
                    this.nudgeLocation(this.largeJump, 0);
                }
                else {
                    this.nudgeLocation(1, 0);
                }
                return true;
            case 38: // Up Arrow
                if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
                    this.nudgeSize(0, -this.largeJump);
                }
                else if (e.ctrlKey || e.metaKey) {
                    this.nudgeSize(0, -1);
                }
                else if (e.shiftKey) {
                    this.nudgeLocation(0, -this.largeJump);
                }
                else {
                    this.nudgeLocation(0, -1);
                }
                return true;
            case 40: // Down Arrow
                if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
                    this.nudgeSize(0, this.largeJump);
                }
                else if (e.ctrlKey || e.metaKey) {
                    this.nudgeSize(0, 1);
                }
                else if (e.shiftKey) {
                    this.nudgeLocation(0, this.largeJump);
                }
                else {
                    this.nudgeLocation(0, 1);
                }
                return true;
            case 65: // 'A' key
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.selectAll();
                    return true;
                }
                return false;
            case 46: // Delete
            case 8: // Backspace
                e.preventDefault();
                if (this.onDelete.hasListeners()) {
                    this.onDelete.trigger(this, new controller_event_args_1.ControllerEventArgs(e));
                }
                else {
                    this.removeSelected();
                }
                return true;
            case 27: // ESC key
                if (this.activeTool) {
                    this.activeTool.cancel();
                }
                if (this.isMouseDown) {
                    this.cancelAction = true;
                    this.selecting = false;
                    this.onCanvasMouseUp({
                        button: 0,
                        clientX: this.lastClientX,
                        clientY: this.lastClientY
                    });
                    return true;
                }
                if (this.selectedElementCount() > 0) {
                    this.clearSelections();
                    return true;
                }
                return false;
            default:
                // console.log('Key Down Code: ' + e.keyCode);
                return false;
        }
    };
    /**
     * Fired when drag begins over canvas
     * @param this - Design controller
     * @param e - Mouse drag event
     */
    DesignController.prototype.onCanvasDragEnter = function (e) {
        log('Canvas drag enter');
        e.stopPropagation();
        e.preventDefault();
        if (!this.enabled) {
            return;
        }
        this.isDragging = true;
        if (this.viewDragEnter.hasListeners()) {
            this.viewDragEnter.trigger(this, new view_drag_args_1.ViewDragArgs(e, undefined));
        }
        this.drawIfNeeded();
    };
    /**
     * Fired while drag is occurring over canvas
     * @param this - Design controller
     * @param e - Mouse drag event
     */
    DesignController.prototype.onCanvasDragOver = function (e) {
        log("Canvas drag over " + e.clientX + ":" + e.clientY);
        e.stopPropagation();
        e.preventDefault();
        if (!this.enabled) {
            return;
        }
        if (!this.canvas) {
            return;
        }
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var p = this.windowToCanvas(e.clientX, e.clientY);
        // Fire view drag over event
        if (this.viewDragOver.hasListeners()) {
            var evt = {
                controller: this,
                event: e,
                location: new point_1.Point(p.x, p.y)
            };
            this.viewDragOver.trigger(this, evt);
        }
        // Determine if over element
        var context = this.canvas.getContext('2d');
        if (context) {
            var elementsAtPoint = this.model.elementsAt(context, p.x, p.y);
            if (elementsAtPoint && elementsAtPoint.length > 0) {
                var draggable = void 0;
                for (var i = elementsAtPoint.length - 1; i >= 0; i--) {
                    var activeElement = elementsAtPoint[i];
                    if (activeElement instanceof component_element_1.ComponentElement && activeElement.component) {
                        if (activeElement.component.acceptsDrag) {
                            draggable = activeElement;
                            break;
                        }
                    }
                }
                this.setDragOverElement(draggable, e);
            }
            else {
                this.setDragOverElement(undefined, e);
            }
        }
        this.drawIfNeeded();
    };
    /**
     * Fired when drag had ended over canvas
     * @param e - Mouse drag event
     */
    DesignController.prototype.onCanvasDragLeave = function (e) {
        log('Canvas drag leave');
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (!this.enabled) {
            return;
        }
        this.isDragging = false;
        this.setDragOverElement(undefined, e);
        if (this.viewDragLeave.hasListeners()) {
            this.viewDragLeave.trigger(this, new view_drag_args_1.ViewDragArgs(e, undefined));
        }
        this.drawIfNeeded();
    };
    /**
     * Fired while drop occurs on canvas
     * @param e - Mouse drag event
     */
    DesignController.prototype.onCanvasDrop = function (e) {
        log("Canvas drag over " + e.clientX + ":" + e.clientY);
        e.stopPropagation();
        e.preventDefault();
        if (!this.enabled) {
            return;
        }
        this.isDragging = false;
        var p = this.windowToCanvas(e.clientX, e.clientY);
        if (this.dragOverElement) {
            if (this.dragOverElement instanceof component_element_1.ComponentElement) {
                var ce = this.dragOverElement;
                if (ce.component && ce.component.dragLeave.hasListeners()) {
                    ce.component.dragLeave.trigger(ce.component, new element_drag_args_1.ElementDragArgs(this.dragOverElement, e));
                    this.invalidate();
                }
            }
            if (this.elementDrop.hasListeners()) {
                var evt = {
                    controller: this,
                    element: this.dragOverElement,
                    event: e
                };
                this.elementDrop.trigger(this, evt);
            }
        }
        else if (this.viewDrop.hasListeners()) {
            var evt = {
                controller: this,
                event: e,
                location: new point_1.Point(p.x, p.y)
            };
            this.viewDrop.trigger(this, evt);
        }
        this.drawIfNeeded();
    };
    /**
     * Coerces an element into the bounds of its model
     * @param el - Element
     */
    DesignController.prototype.ensureInBounds = function (el) {
        var model = this.model;
        if (!model) {
            return;
        }
        var modelSize = model.getSize();
        if (!modelSize) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var b = el.getBounds();
        if (!b) {
            return;
        }
        if (DesignController.isInBounds(b.location, b.size, model)) {
            return;
        }
        if (!el.canResize()) {
            return;
        }
        // If can't fit in bounds, scale down to fit
        if (b.size.width > modelSize.width || b.size.height > modelSize.height) {
            var aspect = 1.0;
            if (b.size.height !== 0) {
                aspect = b.size.width / b.size.height;
            }
            var newWidth = b.size.width;
            var newHeight = b.size.height;
            var fits = false;
            while (!fits) {
                newWidth--;
                if (aspect !== 0) {
                    newHeight = Math.round(newWidth / aspect);
                }
                fits = newWidth <= modelSize.width && newHeight <= modelSize.height;
            }
            el.setSize(new size_1.Size(newWidth, newHeight));
        }
        // If out of bounds, but big enough to fit, then put back in bounds
        b = el.getBounds();
        if (!b) {
            return;
        }
        var newX = b.location.x;
        var newY = b.location.y;
        if (b.size.width <= modelSize.width && b.size.height <= modelSize.height) {
            if (b.location.x < 0) {
                newX = 0;
            }
            if (b.location.x + b.size.width > modelSize.width) {
                newX = modelSize.width - b.size.width;
            }
            if (b.location.y < 0) {
                newY = 0;
            }
            if (b.location.y + b.size.height > modelSize.height) {
                newY = modelSize.height - b.size.height;
            }
            el.setLocation(new point_1.Point(newX, newY));
        }
    };
    /**
     * Sets current mouse down element
     * @param el - Mouse down element
     */
    DesignController.prototype.setMouseDownElement = function (el) {
        if (el) {
            this.setMouseOverElement(el);
        }
        if (el !== this.pressedElement) {
            if (this.pressedElement) {
                if (this.mouseUpElement.hasListeners()) {
                    this.mouseUpElement.trigger(this, this.pressedElement);
                }
            }
            this.pressedElement = el;
            if (el) {
                if (this.mouseDownElement.hasListeners()) {
                    this.mouseDownElement.trigger(this, el);
                }
            }
        }
    };
    /**
     * Sets current mouse over element
     * @param el - Mouse over element
     */
    DesignController.prototype.setMouseOverElement = function (el) {
        if (el !== this.mouseOverElement) {
            if (this.mouseOverElement) {
                if (this.mouseLeftElement.hasListeners()) {
                    this.mouseLeftElement.trigger(this, this.mouseOverElement);
                }
            }
            this.mouseOverElement = el;
            if (el) {
                if (this.mouseEnteredElement.hasListeners()) {
                    this.mouseEnteredElement.trigger(this, el);
                }
            }
        }
    };
    /**
     * Sets current drag over element
     * @param el - Drag over element
     */
    DesignController.prototype.setDragOverElement = function (el, evt) {
        if (el !== this.dragOverElement) {
            if (this.dragOverElement) {
                if (this.dragOverElement instanceof component_element_1.ComponentElement) {
                    var ce = this.dragOverElement;
                    if (ce.component) {
                        ce.component.dragLeave.trigger(ce.component, new element_drag_args_1.ElementDragArgs(this.dragOverElement, evt));
                    }
                }
                if (this.elementDragLeave.hasListeners()) {
                    this.elementDragLeave.trigger(this, new element_drag_args_1.ElementDragArgs(this.dragOverElement, evt));
                }
            }
            this.dragOverElement = el;
            if (el) {
                if (el instanceof component_element_1.ComponentElement && el.component) {
                    el.component.dragEnter.trigger(el.component, new element_drag_args_1.ElementDragArgs(el, evt));
                }
                if (this.elementDragEnter.hasListeners()) {
                    this.elementDragEnter.trigger(this, new element_drag_args_1.ElementDragArgs(el, evt));
                }
            }
            this.invalidate();
        }
    };
    /**
     * Called when selected elements are changed
     */
    DesignController.prototype.onSelectionChanged = function () {
        var self = this;
        var selected = [];
        if (!self.model) {
            return;
        }
        self.model.elements.forEach(function (el) {
            if (self.isSelected(el) && el.id) {
                selected.push(el.id);
                if (el instanceof component_element_1.ComponentElement && el.component) {
                    el.component.select.trigger(el.component, el);
                }
            }
            else if (el instanceof component_element_1.ComponentElement && el.component) {
                el.component.deselect.trigger(el.component, el);
            }
        });
        if (self.selectionChanged.hasListeners()) {
            self.selectionChanged.trigger(self, selected.length);
        }
        self.invalidate();
    };
    /**
     * Called when an element is added to the model
     * @param el - Element added
     */
    DesignController.prototype.onElementAdded = function (el) {
        this.elementAdded.trigger(this, el);
        this.invalidate();
    };
    /**
     * Called when an element is removed from the model
     * @param el - Element removed
     */
    DesignController.prototype.onElementRemoved = function (el) {
        if (el === this.mouseOverElement) {
            this.mouseOverElement = undefined;
        }
        if (el === this.pressedElement) {
            this.pressedElement = undefined;
        }
        if (el === this.dragOverElement) {
            this.dragOverElement = undefined;
        }
        this.elementRemoved.trigger(this, el);
        this.invalidate();
    };
    /**
     * Called when the model is updated
     * @param model - Model updated
     */
    DesignController.prototype.onModelUpdated = function () {
        if (this.model) {
            this.modelUpdated.trigger(this, this.model);
        }
        this.setIsDirty(true);
        this.invalidate();
    };
    /**
     * Called while an element is being resized
     * @param el - Element being sized
     * @param size - Tentative size
     */
    DesignController.prototype.onElementSizing = function (el, size) {
        if (el instanceof component_element_1.ComponentElement && el.component) {
            if (el.component.size.hasListeners()) {
                el.component.size.trigger(el.component, new element_size_args_1.ElementSizeArgs(el, size));
            }
        }
        if (this.elementSizing.hasListeners()) {
            this.elementSizing.trigger(this, new element_size_args_1.ElementSizeArgs(el, size));
        }
    };
    /**
     * Called while an element is being moved or sized
     * @param el - Element being moved or sized
     * @param location - Tentative location
     */
    DesignController.prototype.onElementMoving = function (el, location) {
        if (this.elementMoving.hasListeners()) {
            this.elementMoving.trigger(this, new element_location_args_1.ElementLocationArgs(el, location));
        }
    };
    /**
     * Called after and element has been resized
     * @param el - Resized element
     * @param size - New size
     */
    DesignController.prototype.onElementSized = function (el, size) {
        if (this.constrainToBounds) {
            this.ensureInBounds(el);
        }
        if (el instanceof component_element_1.ComponentElement && el.component) {
            if (el.component.size.hasListeners()) {
                var elsize = el.getSize();
                if (elsize) {
                    el.component.size.trigger(el.component, new element_size_args_1.ElementSizeArgs(el, elsize));
                }
            }
        }
        if (this.elementSized.hasListeners()) {
            this.elementSized.trigger(this, new element_size_args_1.ElementSizeArgs(el, size));
        }
        this.setIsDirty(true);
    };
    /**
     * Sets a new element location and size
     * @param el - Element to be moved
     * @param location - New location
     * @param size - New size
     */
    DesignController.prototype.setElementLocation = function (el, location, size) {
        el.setLocation(location);
        el.setSize(size);
        if (this.isSelected(el)) {
            this.setElementMoveLocation(el, location, size);
            this.setElementResizeSize(el, size, location);
        }
        var newlocation = el.getLocation();
        if (newlocation) {
            this.onElementMoved(el, newlocation);
        }
        var newSize = el.getSize();
        if (newSize) {
            this.onElementSized(el, newSize);
        }
        this.invalidate();
    };
    /**
     * Called when an element has been moved or sized
     * @param el - Element being moved or sized
     * @param location - New location
     */
    DesignController.prototype.onElementMoved = function (el, location) {
        if (this.constrainToBounds) {
            this.ensureInBounds(el);
        }
        if (this.elementMoved.hasListeners()) {
            this.elementMoved.trigger(this, new element_location_args_1.ElementLocationArgs(el, location));
        }
        this.setIsDirty(true);
    };
    /**
     * Renders design surface grid
     */
    DesignController.prototype.renderGrid = function () {
        return;
    };
    /**
     * Renders dashed line
     * @param c - Rendering context
     * @param x1 - Starting x coordinate
     * @param y1 - Starting y coordinate
     * @param x2 - Ending x coordinate
     * @param y2 - Ending x coordinate
     * @param dashLength - Dash length
     */
    DesignController.prototype.drawDashedLine = function (c, x1, y1, x2, y2, dashLength) {
        c.beginPath();
        dashLength = dashLength === undefined ? 5 : dashLength;
        var deltaX = x2 - x1;
        var deltaY = y2 - y1;
        var numDashes = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);
        for (var i = 0; i < numDashes; ++i) {
            c[i % 2 === 0 ? 'moveTo' : 'lineTo'](x1 + deltaX / numDashes * i, y1 + deltaY / numDashes * i);
        }
        c.stroke();
    };
    /**
     * Retrieves design handled for an element
     * @param el - Element
     * @returns Handle array
     */
    DesignController.prototype.getElementHandles = function (el) {
        var handles = handle_factory_1.HandleFactory.handlesForElement(el, this, this.scale);
        /*
        const hl = handles.length;
        for (let hi = 0; hi < hl; hi++) {
            const h = handles[hi];
            h.controller = this;
            h.element = el;
        }*/
        return handles;
    };
    /**
     * Renders current rubber band region
     * @param c - Rendering context
     */
    DesignController.prototype.drawRubberBand = function (c) {
        if (!this.selecting || !this.rubberBandRegion) {
            this.drawHotspot(c);
            return;
        }
        var x1 = this.rubberBandRegion.x;
        var x2 = this.rubberBandRegion.x + this.rubberBandRegion.width;
        var y1 = this.rubberBandRegion.y;
        var y2 = this.rubberBandRegion.y + this.rubberBandRegion.height;
        c.strokeStyle = 'black';
        c.lineWidth = 1.0 / this.scale;
        c.strokeRect(x1, y1, this.rubberBandRegion.width, this.rubberBandRegion.height);
        c.strokeStyle = 'white';
        this.drawDashedLine(c, x1, y1, x2, y1, 1);
        this.drawDashedLine(c, x2, y1, x2, y2, 1);
        this.drawDashedLine(c, x2, y2, x1, y2, 1);
        this.drawDashedLine(c, x1, y2, x1, y1, 1);
    };
    /**
     * Renders hotspot for rubber band region
     * @param c - Rendering context
     */
    DesignController.prototype.drawHotspot = function (c) {
        if (!this.rubberBandRegion) {
            return;
        }
        c.save();
        c.strokeStyle = 'red';
        c.lineWidth = 1.0 / this.scale;
        if (this.activeComponent && this.activeComponent.setCreationFill) {
            this.activeComponent.setCreationFill(c);
        }
        else if (this.fillImage) {
            var pattern = c.createPattern(this.fillImage, 'repeat');
            if (pattern) {
                c.fillStyle = pattern;
            }
        }
        else {
            c.fillStyle = 'rgba(255,215,0,1.0)';
        }
        c.globalAlpha = 0.5;
        c.fillRect(this.rubberBandRegion.x, this.rubberBandRegion.y, this.rubberBandRegion.width, this.rubberBandRegion.height);
        c.globalAlpha = 1.0;
        c.strokeRect(this.rubberBandRegion.x, this.rubberBandRegion.y, this.rubberBandRegion.width, this.rubberBandRegion.height);
        c.restore();
    };
    /**
     * Renders dashed horizontal line
     * @param c - Rendering context
     * @param y - Y coordinate
     */
    DesignController.prototype.drawDashedHorizontalLine = function (c, y) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (size) {
            this.drawDashedLine(c, 0, y, size.width, y, 1);
        }
    };
    /**
     * Renders dashed vertical line
     * @param c - Rendering context
     * @param x - X coordinate
     */
    DesignController.prototype.drawDashedVerticalLine = function (c, x) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (size) {
            this.drawDashedLine(c, x, 0, x, size.height, 1);
        }
    };
    /**
     * Renders horizontal line
     * @param c - Rendering context
     * @param y - Y coordinate
     */
    DesignController.prototype.drawHorizontalLine = function (c, y) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (!size) {
            return;
        }
        c.beginPath();
        c.moveTo(0, y);
        c.lineTo(size.width, y);
        c.stroke();
    };
    /**
     * Renders vertical line
     * @param c - Rendering context
     * @param x - X coordinate
     */
    DesignController.prototype.drawVerticalLine = function (c, x) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (!size) {
            return;
        }
        c.beginPath();
        c.moveTo(x, 0);
        c.lineTo(x, size.height);
        c.stroke();
    };
    /**
     * Renders design guide wires
     * @param c - Rendering context
     * @param x - X coordinate
     * @param y - Y coordinate
     */
    DesignController.prototype.drawGuidewires = function (c, x, y) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (!size) {
            return;
        }
        var _scale = this.scale;
        var lw = 1.0 / _scale;
        var dl = 2 / _scale;
        c.strokeStyle = 'rgba(0,0,0,0.65)';
        c.lineWidth = lw;
        this.drawHorizontalLine(c, y);
        this.drawVerticalLine(c, x);
        c.strokeStyle = 'rgba(255,255,255,0.8)';
        this.drawDashedLine(c, x, y, 0, y, dl);
        this.drawDashedLine(c, x, y, size.width, y, dl);
        this.drawDashedLine(c, x, y, x, 0, dl);
        this.drawDashedLine(c, x, y, x, size.height, dl);
        c.strokeStyle = 'rgba(0,0,0,0.6)';
        c.beginPath();
        c.arc(x, y, 6 / _scale, 0, Math.PI * 2);
        c.stroke();
        c.strokeStyle = 'rgba(255,255,255,0.75)';
        c.beginPath();
        c.arc(x, y, 5 / _scale, 0, Math.PI * 2);
        c.stroke();
        c.strokeStyle = 'rgba(0,0,0,0.6)';
        c.beginPath();
        c.arc(x, y, 4 / _scale, 0, Math.PI * 2);
        c.stroke();
        c.strokeStyle = 'rgba(0,0,0,0.9)';
        this.drawDashedLine(c, x - 1 / _scale, y, x - 4 / _scale, y, 2);
        this.drawDashedLine(c, x + 1 / _scale, y, x + 4 / _scale, y, 2);
        this.drawDashedLine(c, x, y - 1 / _scale, x, y - 4 / _scale, 2);
        this.drawDashedLine(c, x, y + 1 / _scale, x, y + 4 / _scale, 2);
    };
    /**
     * Renders model and design components
     */
    DesignController.prototype.draw = function () {
        if (!this.canvas) {
            return;
        }
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var size = this.model.getSize();
        if (!size) {
            return;
        }
        var context = this.canvas.getContext('2d');
        if (!context) {
            return;
        }
        if (!this.renderer) {
            return;
        }
        this.model.context = context;
        var w = size.width;
        var h = size.height;
        // Clear context
        if (this.scale !== 1.0) {
            context.clearRect(0, 0, w * this.scale, h * this.scale);
        }
        else {
            context.clearRect(0, 0, w, h);
        }
        if (this.scale !== 1.0) {
            w *= this.scale;
            h *= this.scale;
            context.save();
            context.scale(this.scale, this.scale);
        }
        // Render grid
        this.renderGrid();
        // Render model (already scaled above)
        this.renderer.renderToContext(context, 1.0);
        // Draw handles for selected elements
        for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
            var el = _a[_i];
            var b = el.getBounds();
            if (!b) {
                continue;
            }
            var reference = new point_1.Point(b.x, b.y);
            if (this.isMoving && el.canMove()) {
                reference = this.getElementMoveLocation(el);
            }
            else if (this.isResizing && el.canResize()) {
                reference = this.getElementMoveLocation(el);
            }
            // Apply element transform
            context.save();
            if (el.transform) {
                this.model.setRenderTransform(context, el.transform, reference);
            }
            // Get element handles
            var handles = this.getElementHandles(el);
            // Draw connector lines
            for (var _b = 0, handles_5 = handles; _b < handles_5.length; _b++) {
                var handle = handles_5[_b];
                if (handle.connectedHandles) {
                    for (var _c = 0, _d = handle.connectedHandles; _c < _d.length; _c++) {
                        var connected = _d[_c];
                        context.beginPath();
                        context.moveTo(handle.x, handle.y);
                        context.lineTo(connected.x, connected.y);
                        context.strokeStyle = 'white';
                        context.lineWidth = 1.0 / this.scale;
                        context.stroke();
                        context.strokeStyle = 'black';
                        this.drawDashedLine(context, handle.x, handle.y, connected.x, connected.y, 2);
                    }
                }
                handle.draw(context);
            }
            // Draw handles
            for (var _e = 0, handles_6 = handles; _e < handles_6.length; _e++) {
                var handle = handles_6[_e];
                handle.draw(context);
            }
            context.restore();
        }
        // Draw rubber band and guidewires
        if (this.enabled) {
            if (this.rubberBandActive) {
                this.drawRubberBand(context);
                // this.drawGuidewires(context, this.currentX + this.currentWidth, this.currentY + this.currentHeight);
            }
            else if (this.isMouseDown &&
                this.currentX &&
                this.currentY &&
                this.currentWidth &&
                this.currentHeight &&
                this.selectedElementCount() === 0) {
                this.drawGuidewires(context, this.currentX + this.currentWidth, this.currentY + this.currentHeight);
            }
            else if ((this.isResizing || this.isMoving) && this.selectedElementCount() === 1) {
                // If single item being resized, show sizing guides
                var el = this.selectedElements[0];
                var s = this.getElementResizeSize(el);
                var p = this.getElementMoveLocation(el);
                var transformed = false;
                // If element is transformed, apply transform to guide wires
                if (el.transform) {
                    context.save();
                    transformed = true;
                    var b = el.getBounds();
                    if (b) {
                        var reference = new point_1.Point(b.x, b.y);
                        if (this.isMoving && el.canMove()) {
                            reference = this.getElementMoveLocation(el);
                        }
                        else if (this.isResizing && el.canResize()) {
                            reference = this.getElementMoveLocation(el);
                        }
                        this.model.setRenderTransform(context, el.transform, reference);
                    }
                }
                context.strokeStyle = 'rgba(0,0,0,0.65)';
                context.lineWidth = 1.0 / this.scale;
                this.drawHorizontalLine(context, p.y);
                this.drawHorizontalLine(context, p.y + s.height);
                this.drawVerticalLine(context, p.x);
                this.drawVerticalLine(context, p.x + s.width);
                context.strokeStyle = 'rgba(255,255,255,0.8)';
                this.drawDashedHorizontalLine(context, p.y);
                this.drawDashedHorizontalLine(context, p.y + s.height);
                this.drawDashedVerticalLine(context, p.x);
                this.drawDashedVerticalLine(context, p.x + s.width);
                if (transformed) {
                    context.restore();
                }
            }
        }
        if (this.model.displayFPS) {
            context.fillStyle = 'cornflowerblue';
            context.font = '16px monospace';
            context.fillText(this.calculateFPS().toFixed() + ' fps', 20, 20);
        }
        // If disabled draw disabled fill
        if (!this.enabled && this.disabledFill) {
            context.fillStyle = color_1.Color.parse(this.disabledFill).toStyleString();
            context.fillRect(0, 0, size.width, size.height);
        }
        if (this.scale !== 1.0) {
            context.restore();
        }
        // Clear redraw flag
        this.needsRedraw = false;
    };
    /**
     * Calculates frame rate based on elapsed time since last frame
     */
    DesignController.prototype.calculateFPS = function () {
        var now = +new Date();
        var fps;
        if (this.lastFrameTime) {
            fps = 1000 / (now - this.lastFrameTime);
        }
        else {
            fps = 0;
        }
        this.lastFrameTime = now;
        return fps;
    };
    /**
     * Sets redraw flag to induce draw on next draw cycle
     */
    DesignController.prototype.invalidate = function () {
        this.needsRedraw = true;
    };
    /**
     * Retrieves selected element count
     * @returns Number of selected elements
     */
    DesignController.prototype.selectedElementCount = function () {
        return this.selectedElements.length;
    };
    /**
     * Retrieves selected element
     * @returns Selected element
     */
    DesignController.prototype.selectedElement = function () {
        if (this.selectedElements.length > 0) {
            return this.selectedElements[0];
        }
        return undefined;
    };
    /**
     * Clears selected elements
     */
    DesignController.prototype.clearSelections = function () {
        if (this.selectedElements.length > 0) {
            this.selectedElements.forEach(function (el) {
                if (el.canEditPoints()) {
                    el.editPoints = false;
                }
            });
            this.selectedElements = [];
            this.onSelectionChanged();
        }
    };
    /**
     * Returns true if an element is selected
     * @param el - Element
     * @returns True if element is selected
     */
    DesignController.prototype.isSelected = function (el) {
        var index = this.selectedElements.indexOf(el);
        if (index === -1) {
            return false;
        }
        return true;
    };
    /**
     * Selects an element
     * @param el - Element
     */
    DesignController.prototype.selectElement = function (el) {
        if (!this.isSelected(el)) {
            this.selectedElements.push(el);
            this.onSelectionChanged();
            return;
        }
    };
    /**
     * Deselects an element
     * @param el - Element
     */
    DesignController.prototype.deselectElement = function (el) {
        var index = this.selectedElements.indexOf(el);
        if (index !== -1) {
            this.selectedElements.splice(index, 1);
            if (el.canEditPoints()) {
                el.editPoints = false;
            }
            this.onSelectionChanged();
        }
    };
    /**
     * Toggles selected state of an element
     * @param el - Element
     */
    DesignController.prototype.toggleSelected = function (el) {
        var index = this.selectedElements.indexOf(el);
        if (index !== -1) {
            if (el.canEditPoints()) {
                if (!el.editPoints) {
                    el.editPoints = true;
                }
                else {
                    el.editPoints = false;
                    this.selectedElements.splice(index, 1);
                }
            }
            else {
                this.selectedElements.splice(index, 1);
            }
        }
        else {
            this.selectedElements.push(el);
        }
        this.onSelectionChanged();
    };
    /**
     * Selects all elements
     */
    DesignController.prototype.selectAll = function () {
        var c = this;
        c.selectedElements = [];
        if (c.model) {
            c.model.elements.forEach(function (el) {
                if (el.interactive) {
                    c.selectedElements.push(el);
                }
            });
        }
        this.onSelectionChanged();
    };
    /**
     * Selects an array of elements
     * @param elements - Elements to select
     */
    DesignController.prototype.selectElements = function (elements) {
        if (elements) {
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element = elements_1[_i];
                this.selectElement(element);
            }
        }
    };
    /**
     * Duplicates selected elements
     */
    DesignController.prototype.duplicateSelected = function () {
        var self = this;
        var newSelected = [];
        if (this.selectedElements.length > 0) {
            this.selectedElements.forEach(function (el) {
                var elc = el.clone();
                elc.setInteractive(true);
                if (self.model) {
                    self.model.add(elc);
                }
                newSelected.push(elc);
            });
            this.selectedElements = newSelected;
            this.onSelectionChanged();
        }
    };
    DesignController.prototype.onElementsReordered = function () {
        this.elementsReordered.trigger(this, this.selectedElements);
        this.setIsDirty(true);
    };
    DesignController.prototype.moveElementToBottom = function (el) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var index = this.model.elements.indexOf(el);
        if (index > 0) {
            this.model.elements.splice(index, 1);
            this.model.elements.splice(0, 0, el);
            this.onElementsReordered();
        }
    };
    DesignController.prototype.moveElementToTop = function (el) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var index = this.model.elements.indexOf(el);
        if (index < this.model.elements.length - 1) {
            this.model.elements.splice(index, 1);
            this.model.elements.splice(this.model.elements.length, 0, el);
            this.onElementsReordered();
        }
    };
    DesignController.prototype.moveElementBackward = function (el) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var index = this.model.elements.indexOf(el);
        if (index > 0) {
            this.model.elements.splice(index, 1);
            this.model.elements.splice(index - 1, 0, el);
            this.onElementsReordered();
        }
    };
    DesignController.prototype.moveElementForward = function (el) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var index = this.model.elements.indexOf(el);
        if (index < this.model.elements.length - 1) {
            this.model.elements.splice(index, 1);
            this.model.elements.splice(index + 1, 0, el);
            this.onElementsReordered();
        }
    };
    DesignController.prototype.setIsDirty = function (isDirty) {
        if (isDirty !== this.isDirty) {
            this.isDirty = isDirty;
            this.isDirtyChanged.trigger(this, isDirty);
        }
    };
    /**
     * Returns number of selected movable elements
     * @returns Number of selected movable elements
     */
    DesignController.prototype.movableSelectedElementCount = function () {
        var count = 0;
        for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.canMove()) {
                count++;
            }
        }
        return count;
    };
    /**
     * Returns number of selected resizable elements
     * @returns Number of selected resizable elements
     */
    DesignController.prototype.resizeableSelectedElementCount = function () {
        var count = 0;
        for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.canResize()) {
                count++;
            }
        }
        return count;
    };
    /**
     * Returns number of selected nudgeable elements
     * @returns Number of selected nudgeable elements
     */
    DesignController.prototype.nudgeableSelectedElementCount = function () {
        var count = 0;
        for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.canNudge()) {
                count++;
            }
        }
        return count;
    };
    /**
     * Clears all element resize sizes
     */
    DesignController.prototype.clearElementResizeSizes = function () {
        this.elementResizeSizes = [];
    };
    /**
     * Sets an element resize size
     * @param el - Element
     * @param size - Size
     * @param location - Optional location
     */
    DesignController.prototype.setElementResizeSize = function (el, size, location) {
        if (location === undefined) {
            var b = el.getBounds();
            if (b) {
                location = b.location;
            }
        }
        if (!location) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        var newWidth = size.width;
        var newHeight = size.height;
        if (!el.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var modelSize = el.model.getSize();
        if (!modelSize) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        if (this.constrainToBounds) {
            if (location.x + size.width > modelSize.width) {
                newWidth = modelSize.width - location.x;
            }
            if (location.y + size.height > modelSize.height) {
                newHeight = modelSize.height - location.y;
            }
        }
        var newSize = new size_1.Size(newWidth, newHeight);
        if (!this.constrainToBounds || DesignController.isInBounds(location, newSize, el.model)) {
            for (var _i = 0, _a = this.elementResizeSizes; _i < _a.length; _i++) {
                var resizeSize = _a[_i];
                if (resizeSize.element === el) {
                    resizeSize.size = newSize;
                    this.onElementSizing(el, newSize);
                    return;
                }
            }
            this.elementResizeSizes.push(new resize_size_1.ResizeSize(el, newSize));
            this.onElementSizing(el, newSize);
        }
    };
    /**
     * Gets an element resize size
     * @param el - Element
     * @returns Size
     */
    DesignController.prototype.getElementResizeSize = function (el) {
        for (var _i = 0, _a = this.elementResizeSizes; _i < _a.length; _i++) {
            var resizeSize = _a[_i];
            if (resizeSize.element === el) {
                return resizeSize.size;
            }
        }
        var b = el.getBounds();
        if (b) {
            return new size_1.Size(b.width, b.height);
        }
        throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
    };
    /**
     * Clears all element move locations
     */
    DesignController.prototype.clearElementMoveLocations = function () {
        this.elementMoveLocations = [];
    };
    /**
     * Sets an element move location
     * @param el - Element
     * @param location - Location
     * @param size - Size
     */
    DesignController.prototype.setElementMoveLocation = function (el, location, size) {
        if (!el.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var newSize = size;
        if (newSize === undefined) {
            newSize = el.getSize();
        }
        if (!newSize) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var modelSize = el.model.getSize();
        if (!modelSize) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        var newX = location.x;
        var newY = location.y;
        if (this.constrainToBounds) {
            if (newX < 0) {
                newX = 0;
            }
            else if (newX + newSize.width > modelSize.width) {
                newX = modelSize.width - newSize.width;
            }
            if (newY < 0) {
                newY = 0;
            }
            else if (newY + newSize.height > modelSize.height) {
                newY = modelSize.height - newSize.height;
            }
        }
        var newLocation = new point_1.Point(newX, newY);
        if (!this.constrainToBounds || DesignController.isInBounds(newLocation, newSize, el.model)) {
            for (var _i = 0, _a = this.elementMoveLocations; _i < _a.length; _i++) {
                var moveLocation = _a[_i];
                if (moveLocation.element === el) {
                    moveLocation.location = newLocation;
                    this.onElementMoving(el, newLocation);
                    return;
                }
            }
            this.elementMoveLocations.push(new move_location_1.MoveLocation(el, newLocation));
            this.onElementMoving(el, newLocation);
        }
    };
    /**
     * Gets an element move location
     * @param el - Element
     * @returns Location
     */
    DesignController.prototype.getElementMoveLocation = function (el) {
        for (var _i = 0, _a = this.elementMoveLocations; _i < _a.length; _i++) {
            var moveLocation = _a[_i];
            if (moveLocation.element === el) {
                return moveLocation.location;
            }
        }
        var b = el.getBounds();
        if (!b) {
            throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
        }
        return new point_1.Point(b.x, b.y);
    };
    /**
     * Nudges size of selected elements
     * @param offsetX - Nudge offset X
     * @param offsetY - Nudge offset Y
     */
    DesignController.prototype.nudgeSize = function (offsetX, offsetY) {
        // Validate that all can be nudged to new size
        for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.canNudge()) {
                var b = e.getBounds();
                if (!b) {
                    return;
                }
                var size = new size_1.Size(b.width + offsetX, b.height + offsetY);
                if (size.width <= 0 || size.height <= 0) {
                    return;
                }
                if (this.constrainToBounds && e.model && !DesignController.isInBounds(b.location, size, e.model)) {
                    return;
                }
            }
        }
        for (var _b = 0, _c = this.selectedElements; _b < _c.length; _b++) {
            var e = _c[_b];
            if (e.canNudge()) {
                e.nudgeSize(offsetX, offsetY);
                var size = e.getSize();
                if (size) {
                    this.onElementSized(e, size);
                    this.setElementResizeSize(e, size, e.getLocation());
                }
            }
        }
        this.onModelUpdated();
        this.drawIfNeeded();
    };
    /**
     * Nudges location of selected elements
     * @param offsetX - Nudge offset X
     * @param offsetY - Nudge offset Y
     */
    DesignController.prototype.nudgeLocation = function (offsetX, offsetY) {
        if (!this.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        var modelSize = this.model.getSize();
        if (!modelSize) {
            throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
        }
        // Validate that all can be nudged to new location
        var allGood = true;
        for (var _i = 0, _a = this.selectedElements; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.canNudge()) {
                var b = e.getBounds();
                if (!b) {
                    throw new Error(error_messages_1.ErrorMessages.BoundsAreUndefined);
                }
                var location_1 = new point_1.Point(b.x + offsetX, b.y + offsetY);
                if (this.constrainToBounds && e.model && !DesignController.isInBounds(location_1, b.size, e.model)) {
                    allGood = false;
                    break;
                }
            }
        }
        if (!allGood) {
            // Determine maximum we can move and set new offsetX/Y
            var x1 = Number.POSITIVE_INFINITY;
            var x2 = Number.NEGATIVE_INFINITY;
            var y1 = Number.POSITIVE_INFINITY;
            var y2 = Number.NEGATIVE_INFINITY;
            for (var _b = 0, _c = this.selectedElements; _b < _c.length; _b++) {
                var selectedElement = _c[_b];
                if (selectedElement.canNudge()) {
                    var b = selectedElement.getBounds();
                    if (!b) {
                        continue;
                    }
                    if (b.x < x1) {
                        x1 = b.x;
                    }
                    if (b.x + b.width > x2) {
                        x2 = b.x + b.width;
                    }
                    if (b.y < y1) {
                        y1 = b.y;
                    }
                    if (b.y + b.height > y2) {
                        y2 = b.y + b.height;
                    }
                }
            }
            if (offsetX < 0 && x1 + offsetX < 0) {
                offsetX = -x1;
            }
            else if (offsetX > 0 && x2 + offsetX > modelSize.width) {
                offsetX = modelSize.width - x2;
            }
            if (offsetY < 0 && y1 + offsetY < 0) {
                offsetY = -y1;
            }
            else if (offsetY > 0 && y2 + offsetY > modelSize.height) {
                offsetY = modelSize.height - y2;
            }
            for (var _d = 0, _e = this.selectedElements; _d < _e.length; _d++) {
                var selectedElement = _e[_d];
                if (selectedElement.canNudge()) {
                    selectedElement.translate(offsetX, offsetY);
                    var b = selectedElement.getBounds();
                    if (b) {
                        this.onElementMoved(selectedElement, b.location);
                    }
                }
            }
        }
        else {
            // All good move requested amount
            for (var _f = 0, _g = this.selectedElements; _f < _g.length; _f++) {
                var e = _g[_f];
                if (e.canNudge()) {
                    e.translate(offsetX, offsetY);
                    var b = e.getBounds();
                    if (b) {
                        this.onElementMoved(e, b.location);
                    }
                }
            }
        }
        this.onModelUpdated();
        this.drawIfNeeded();
    };
    /**
     * Sets rubber band active state
     * @param value - Rubber band state
     */
    DesignController.prototype.setRubberBandActive = function (value) {
        if (value !== this.rubberBandActive) {
            this.rubberBandActive = value;
            this.invalidate();
        }
    };
    /**
     * Sets rubber band region
     * @param value - Rubber band region
     */
    DesignController.prototype.setRubberBandRegion = function (value) {
        this.rubberBandRegion = value;
        this.invalidate();
    };
    /**
     * Sets design surface grid type
     * @param value - Rubber band state
     */
    DesignController.prototype.setGridType = function (value) {
        if (this.gridType !== value) {
            this.gridType = value;
            this.invalidate();
        }
    };
    /**
     * Sets design surface grid spacing
     * @param value - Grid spacing
     */
    DesignController.prototype.setGridSpacing = function (value) {
        if (this.gridSpacing !== value && value >= 1) {
            this.gridSpacing = value;
            this.invalidate();
        }
    };
    /**
     * Sets design surface grid color
     * @param value - Grid color
     */
    DesignController.prototype.setGridColor = function (value) {
        if (this.gridColor !== value) {
            this.gridColor = value;
            this.invalidate();
        }
    };
    /**
     * Binds existing controller to host DIV element
     * @param hostDiv - Hosting div element
     * @returns This design controller
     */
    DesignController.prototype.bindTarget = function (hostDiv) {
        if (!hostDiv) {
            throw new Error(error_messages_1.ErrorMessages.HostElementUndefined);
        }
        hostDiv.innerHTML = '';
        if (!hostDiv.id) {
            hostDiv.id = utility_1.Utility.guid();
        }
        // Disable arrow/navigation keys to prevent scrolling
        // and allow handling in contained canvas
        var ar = [37, 38, 39, 40];
        // Change to use DOM 0 Style binding to prevent multiples
        hostDiv.onkeydown = function (e) {
            var key = e.which;
            ar.forEach(function (k) {
                if (k === key) {
                    e.preventDefault();
                    return false;
                }
            });
            return true;
        };
        var canvas = this.getCanvas();
        if (canvas && this.model) {
            hostDiv.appendChild(canvas);
            canvas.setAttribute('id', hostDiv.id + '_canvas');
            var size = this.model.getSize();
            if (!size) {
                throw new Error(error_messages_1.ErrorMessages.SizeUndefined);
            }
            hostDiv.style.width = size.width * this.scale + 'px';
            hostDiv.style.height = size.height * this.scale + 'px';
            this.draw();
            this.model.controllerAttached.trigger(this.model, this);
        }
        return this;
    };
    return DesignController;
}());
exports.DesignController = DesignController;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describes design handle movement
 */
var HandleMovedArgs = /** @class */ (function () {
    /**
     * Represents movement of element handle
     * @param deltaX - x movement
     * @param deltaY - Y movement
     */
    function HandleMovedArgs(deltaX, deltaY) {
        this.deltaX = deltaX;
        this.deltaY = deltaY;
    }
    return HandleMovedArgs;
}());
exports.HandleMovedArgs = HandleMovedArgs;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mouse_event_args_1 = __webpack_require__(24);
/**
 * Encapsulates an element related mouse event
 */
var ElementMouseEventArgs = /** @class */ (function (_super) {
    __extends(ElementMouseEventArgs, _super);
    /**
     * Constructs an element mouse event args
     * @param event - DOM mouse event
     * @param element - Model element
     */
    function ElementMouseEventArgs(event, element) {
        var _this = _super.call(this, event) || this;
        _this.element = element;
        return _this;
    }
    return ElementMouseEventArgs;
}(mouse_event_args_1.MouseEventArgs));
exports.ElementMouseEventArgs = ElementMouseEventArgs;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var utility_1 = __webpack_require__(5);
var resource_1 = __webpack_require__(36);
var resource_factory_1 = __webpack_require__(18);
/**
 * String text resource
 */
var TextResource = /** @class */ (function (_super) {
    __extends(TextResource, _super);
    function TextResource() {
        return _super.call(this, 'text') || this;
    }
    /**
     * Text resource factory function
     * @returns New text resource
     */
    TextResource.create = function () {
        return new TextResource();
    };
    /**
     * Creates text resource from text string
     * @param key - Resource key
     * @param text - Resource text
     * @param locale - Optional resource locale ID (e.g. en-US)
     * @returns New text resource
     */
    TextResource.createFromText = function (key, text, locale) {
        var tr = new TextResource();
        if (arguments.length >= 2) {
            tr.key = key;
            tr.text = text;
        }
        if (arguments.length >= 3) {
            tr.locale = locale;
        }
        return tr;
    };
    /**
     * Creates text resource from http(s) source URI
     * @param key - Resource key
     * @param uri - Resource URI
     * @param locale - Optional resource locale ID (e.g. en-US)
     * @returns New text resource
     */
    TextResource.createFromUri = function (key, uri, locale) {
        var tr = new TextResource();
        if (arguments.length >= 2) {
            tr.key = key;
            tr.uri = uri;
        }
        if (arguments.length >= 3) {
            tr.locale = locale;
        }
        return tr;
    };
    /**
     * Clones this resource to a new instance
     * @returns Cloned text resource
     */
    TextResource.prototype.clone = function () {
        var o = new TextResource();
        _super.prototype.cloneTo.call(this, o);
        if (this.text) {
            o.text = this.text;
        }
        return o;
    };
    /**
     * Copies properties of another text resource
     * @param o - Source text resource
     */
    TextResource.prototype.parse = function (o) {
        _super.prototype.parse.call(this, o);
        if (o.text) {
            this.text = o.text;
        }
    };
    /**
     * Serializes resource to a new instance
     * @returns Serialized resource instance
     */
    TextResource.prototype.serialize = function () {
        var o = _super.prototype.serialize.call(this);
        if (this.text) {
            o.text = this.text;
        }
        return o;
    };
    /**
     * Retrieves text resource from an http(s) source
     * @param url - Text source URL
     * @param callback - Retrieval callback (result: boolean)
     */
    TextResource.prototype.load = function (url, callback) {
        var self = this;
        utility_1.Utility.getRemoteText(url, function (text) {
            if (text) {
                self.text = text;
                callback(true);
            }
            else {
                callback(false);
            }
        });
    };
    TextResource.prototype.initialize = function () {
        var self = this;
        if (!self.resourceManager) {
            throw new Error(error_messages_1.ErrorMessages.ResourceManagerIsUndefined);
        }
        // If embedded text, no need to retrieve file
        if (this.text) {
            self.resourceManager.unregister(self, true);
        }
        else {
            // Text Resource type
            var resourcePath = self.uri;
            if (!resourcePath) {
                throw new Error(error_messages_1.ErrorMessages.ResourceIsInvalid);
            }
            var resourcePathLowered = resourcePath.toLowerCase();
            // Local (Server) Image
            if (resourcePath.charAt(0) === ':') {
                var url = resourcePath.substring(1, resourcePath.length);
                self.load(url, function (success) {
                    if (self.resourceManager) {
                        self.resourceManager.unregister(self, success);
                    }
                });
            }
            else if (resourcePath.charAt(0) === '/') {
                // Shared Text Resource
                if (self.resourceManager.model && self.resourceManager.model.basePath) {
                    self.load(utility_1.Utility.joinPaths(self.resourceManager.model.basePath, resourcePath), function (success) {
                        if (self.resourceManager) {
                            self.resourceManager.unregister(self, success);
                        }
                    });
                }
            }
            else if (resourcePathLowered.indexOf('http://') === 0 || resourcePathLowered.indexOf('https://') === 0) {
                // Remote / External Image (http:// or https://)
                self.load(resourcePath, function (success) {
                    if (self.resourceManager) {
                        self.resourceManager.unregister(self, success);
                    }
                });
            }
            else {
                // Embedded Text Resource
                if (self.resourceManager.model && self.resourceManager.localResourcePath) {
                    self.load(utility_1.Utility.joinPaths(self.resourceManager.localResourcePath, resourcePath), function (success) {
                        if (self.resourceManager) {
                            self.resourceManager.unregister(self, success);
                        }
                    });
                }
            }
        }
    };
    return TextResource;
}(resource_1.Resource));
exports.TextResource = TextResource;
// Register type creator
resource_factory_1.ResourceFactory.registerCreator('text', TextResource);


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(10);
var common_event_1 = __webpack_require__(6);
var error_messages_1 = __webpack_require__(0);
var model_1 = __webpack_require__(4);
var fill_factory_1 = __webpack_require__(8);
var fill_info_1 = __webpack_require__(87);
/**
 * Implements gradual drawing of models with polygon elements
 */
var Sketcher = /** @class */ (function () {
    function Sketcher(model, scale) {
        if (scale === void 0) { scale = 1; }
        this.sketchDone = new common_event_1.CommonEvent();
        this.elementIndex = 0;
        this.elementCount = 0;
        this.passIndex = 0;
        this.scale = 1;
        this.addTo = this.addTo.bind(this);
        this.controllerAttached = this.controllerAttached.bind(this);
        this.controllerDetached = this.controllerDetached.bind(this);
        this.clampColor = this.clampColor.bind(this);
        this.drawNextElement = this.drawNextElement.bind(this);
        this.onModelSet = this.onModelSet.bind(this);
        if (model instanceof model_1.Model) {
            this.sourceModel = model;
        }
        else {
            this.modelUrl = model;
        }
        this.scale = scale;
        this.timerDelay = 20;
        this.strokeBatchSize = 128;
        this.repeat = true;
        this.fillDelay = 5000;
        this.fillBatchSize = 1024;
        this.repeatDelay = 10000;
        this.sketchColor = false;
        this.strokeOpacity = 128;
    }
    Sketcher.create = function (modelUrl, scale) {
        if (scale === void 0) { scale = 1; }
        return new Sketcher(modelUrl, scale);
    };
    Sketcher.prototype.addTo = function (model) {
        model.controllerAttached.add(this.controllerAttached);
        model.controllerDetached.add(this.controllerDetached);
        return this;
    };
    Sketcher.prototype.controllerAttached = function (drawModel, controller) {
        drawModel.controllerAttached.clear();
        this.drawModel = drawModel;
        this.controller = controller;
        var self = this;
        // If model not provided, load externally
        if (!self.sourceModel && this.modelUrl) {
            model_1.Model.load('', this.modelUrl, function (_sourceModel) {
                self.sourceModel = _sourceModel;
                self.onModelSet();
            });
        }
        else {
            self.onModelSet();
        }
    };
    Sketcher.prototype.onModelSet = function () {
        var self = this;
        // If we no longer have a canvas, abort
        if (!self.controller ||
            !self.controller.canvas ||
            !self.sourceModel ||
            !self.controller.model ||
            !self.controller.renderer) {
            return;
        }
        // Start rendering context
        var context = self.controller.canvas.getContext('2d');
        if (!context) {
            throw new Error(error_messages_1.ErrorMessages.CanvasContextIsNull);
        }
        self.context = context;
        self.controller.model.context = self.context;
        self.controller.renderer.beginRender(self.context, self.controller.scale);
        // Set up timer to add elements from source model to draw model
        self.elementCount = self.sourceModel.elements.length;
        self.elementIndex = 0;
        self.passIndex = 0;
        self.timerHandle = setTimeout(self.drawNextElement, self.timerDelay, self);
    };
    Sketcher.prototype.controllerDetached = function (drawModel, controller) {
        this.controller = undefined;
        drawModel.controllerDetached.clear();
        this.drawModel = undefined;
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = undefined;
        }
    };
    Sketcher.prototype.clampColor = function (value) {
        var rvalue = value;
        if (rvalue < 0) {
            rvalue = 0;
        }
        else if (rvalue > 255) {
            rvalue = 255;
        }
        return Math.floor(rvalue);
    };
    Sketcher.prototype.drawNextElement = function (sketcher) {
        this.timerHandle = undefined;
        if (!sketcher.controller ||
            !sketcher.controller.canvas ||
            !sketcher.drawModel ||
            !sketcher.controller.renderer ||
            !sketcher.context ||
            !sketcher.controller.model ||
            !sketcher.sourceModel) {
            return;
        }
        if (sketcher.elementIndex >= sketcher.elementCount || sketcher.elementIndex < 0) {
            if (sketcher.passIndex === 1) {
                if (sketcher.repeat) {
                    sketcher.drawModel.elements = [];
                    sketcher.passIndex = 0;
                    sketcher.elementIndex = 0;
                    sketcher.timerHandle = setTimeout(this.drawNextElement, sketcher.repeatDelay, sketcher);
                }
                else {
                    sketcher.controller.renderer.endRender(sketcher.context);
                    sketcher.context = undefined;
                    if (this.sketchDone.hasListeners()) {
                        this.sketchDone.trigger(true);
                    }
                }
            }
            else {
                sketcher.passIndex += 1;
                sketcher.elementIndex = 0;
                sketcher.timerHandle = setTimeout(this.drawNextElement, sketcher.fillDelay, sketcher);
            }
        }
        else {
            if (sketcher.passIndex === 0 && sketcher.elementIndex === 0) {
                var size = sketcher.controller.model.getSize();
                if (size !== undefined) {
                    var w = size.width;
                    var h = size.height;
                    if (fill_factory_1.FillFactory.setElementFill(sketcher.context, sketcher.controller.model)) {
                        sketcher.context.fillRect(0, 0, w, h);
                    }
                    else {
                        sketcher.context.clearRect(0, 0, w, h);
                    }
                }
            }
            var els = sketcher.sourceModel.elements;
            var batchSize = sketcher.passIndex === 0 ? this.strokeBatchSize : this.fillBatchSize;
            for (var i = 0; i < batchSize; i++) {
                // Get next element from source model
                var el = els[sketcher.elementIndex];
                var isFillable = el.type === 'path' || el.type === 'polygon';
                if (!el) {
                    return;
                }
                // If first pass, draw outline
                if (sketcher.passIndex === 0) {
                    var elc = el.clone();
                    if (isFillable) {
                        var fillInfo = fill_info_1.FillInfo.getFillInfo(el);
                        if (fillInfo && fillInfo.type === 'color' && fillInfo.color) {
                            var color = color_1.Color.parse(fillInfo.color);
                            elc.setFill('#FFFFFF');
                            if (this.sketchColor) {
                                var strokeColor = new color_1.Color(this.strokeOpacity, color.r, color.g, color.b);
                                elc.setStroke(strokeColor.toHexString());
                            }
                            else {
                                var grayColor = this.clampColor(0.21 * color.r + 0.72 * color.g + 0.07 * color.b);
                                var strokeColor = new color_1.Color(this.strokeOpacity, grayColor, grayColor, grayColor);
                                elc.setStroke(strokeColor.toHexString());
                            }
                        }
                    }
                    sketcher.drawModel.add(elc);
                    sketcher.controller.renderer.renderElement(sketcher.context, elc);
                }
                else {
                    // On second pass, replace fill and erase stroke
                    var elc = sketcher.drawModel.elements[sketcher.elementIndex];
                    if (isFillable) {
                        elc.setFill(el.fill);
                        elc.setStroke(undefined);
                    }
                    sketcher.controller.renderer.renderElement(sketcher.context, elc);
                }
                sketcher.elementIndex++;
                if (sketcher.elementIndex >= sketcher.elementCount || sketcher.elementIndex < 0) {
                    break;
                }
            }
            if (sketcher.controller) {
                sketcher.timerHandle = setTimeout(this.drawNextElement, sketcher.timerDelay, sketcher);
            }
        }
    };
    return Sketcher;
}());
exports.Sketcher = Sketcher;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var element_command_handler_1 = __webpack_require__(26);
var common_event_1 = __webpack_require__(6);
var error_messages_1 = __webpack_require__(0);
var model_1 = __webpack_require__(4);
var utility_1 = __webpack_require__(5);
var image_element_1 = __webpack_require__(29);
var bitmap_resource_1 = __webpack_require__(19);
var resource_manager_event_1 = __webpack_require__(46);
var surface_button_element_1 = __webpack_require__(94);
var surface_element_states_1 = __webpack_require__(38);
var surface_text_element_1 = __webpack_require__(95);
var surface_video_layer_1 = __webpack_require__(96);
var surface_view_controller_1 = __webpack_require__(51);
/**
 * Renders elements derived from surface images and layered media elements
 */
var Surface = /** @class */ (function () {
    /**
     * @param {number} width - Surface width
     * @param {number} height - Surface height
     * @param {string} id - Surface id
     * @param {number} scale - Rendering scale
     */
    function Surface(width, height, id, scale) {
        /**
         * Error event handler
         */
        this.error = new common_event_1.CommonEvent();
        /**
         * Base model layer elements
         */
        this.elements = [];
        /**
         * Base model layer elements
         */
        this.layers = [];
        /**
         * Loaded event called when all resources have been loaded or have failed
         */
        this.loaded = new common_event_1.CommonEvent();
        /**
         * Loaded event called after controller has been initialized
         */
        this.initialized = new common_event_1.CommonEvent();
        /**
         * Resource state listener
         */
        this.resourceListenerEvent = new resource_manager_event_1.ResourceManagerEvent();
        /**
         * True if child surface of another surface
         */
        this.isChild = false;
        this.width = width;
        this.height = height;
        if (id) {
            this.id = id;
        }
        else {
            this.id = utility_1.Utility.guid();
        }
        if (scale !== undefined && scale > 0) {
            this.scale = scale;
        }
        else {
            this.scale = 1.0;
        }
        this.opacity = 1;
        this.translateX = 0;
        this.translateY = 0;
        this.createDiv = this.createDiv.bind(this);
        this.initializeController = this.initializeController.bind(this);
        this.elementWithId = this.elementWithId.bind(this);
        this.layerWithId = this.layerWithId.bind(this);
        this.bind = this.bind.bind(this);
        this.unbind = this.unbind.bind(this);
        this.scaledValue = this.scaledValue.bind(this);
        this.createModel = this.createModel.bind(this);
        this.loadResources = this.loadResources.bind(this);
        this.onErrorInternal = this.onErrorInternal.bind(this);
        this.addResourceListener = this.addResourceListener.bind(this);
        this.setOpacity = this.setOpacity.bind(this);
        this.setTranslateX = this.setTranslateX.bind(this);
        this.setTranslateY = this.setTranslateY.bind(this);
        this.startVideos = this.startVideos.bind(this);
    }
    /**
     * Surface factory function
     * @param {number} width - Surface width
     * @param {number} height - Surface height
     * @param {string} id - Surface id
     * @param {number} scale - Rendering scale
     * @returns {Elise.Player.Surface} New surface
     */
    Surface.create = function (width, height, id, scale) {
        return new Surface(width, height, id, scale);
    };
    Surface.prototype.createDiv = function (onBottom) {
        if (!this.hostDiv) {
            throw new Error('Host div is undefined');
        }
        var div = document.createElement('div');
        div.id = this.id + '_div';
        this.div = div;
        if (this.isChild) {
            div.style.position = 'absolute';
            div.style.left = this.translateX * this.scale + 'px';
            div.style.top = this.translateY * this.scale + 'px';
        }
        else {
            div.style.position = 'relative';
        }
        div.style.opacity = this.opacity.toString();
        if (onBottom) {
            this.hostDiv.insertBefore(this.div, this.hostDiv.firstElementChild);
        }
        else {
            this.hostDiv.appendChild(this.div);
        }
    };
    /**
     * Initializes host HTML div, view controller and command handlers
     */
    Surface.prototype.initializeController = function () {
        var self = this;
        if (!self.model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!self.div) {
            throw new Error(error_messages_1.ErrorMessages.HostElementUndefined);
        }
        self.controller = new surface_view_controller_1.SurfaceViewController();
        self.controller.setModel(self.model);
        self.controller.setScale(self.scale);
        self.controller.bindTarget(self.div);
        self.controller.surface = self;
        var ech = new element_command_handler_1.ElementCommandHandler();
        ech.attachController(self.controller);
        ech.addHandler('pushFrame', element_command_handler_1.ElementCommandHandler.pushFrame);
        ech.addHandler('popFrame', element_command_handler_1.ElementCommandHandler.popFrame);
        // Bind command handler event handlers to element event trigger functions
        ech.addHandler(surface_button_element_1.SurfaceButtonElement.BUTTON_CLICK, function (controller, element, command, trigger, parameters) {
            var c = controller;
            if (!c.surface || !element || !element.id) {
                return;
            }
            var el = c.surface.elementWithId(element.id);
            if (!el) {
                return;
            }
            var button = el;
            button.onClicked();
        });
        ech.addHandler(surface_text_element_1.SurfaceTextElement.TEXT_CLICK, function (controller, element, command, trigger, parameters) {
            var c = controller;
            if (!c.surface || !element || !element.id) {
                return;
            }
            var el = c.surface.elementWithId(element.id);
            if (!el) {
                return;
            }
            var text = el;
            text.onClicked();
        });
        self.layers.forEach(function (layer) {
            if (layer.element && self.div) {
                self.div.appendChild(layer.element);
            }
        });
        self.initialized.trigger(self.controller);
    };
    /**
     * Returns first element found with given ID
     * @returns Element with given ID or undefined if not found
     */
    Surface.prototype.elementWithId = function (id) {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id === id) {
                return el;
            }
        }
        return undefined;
    };
    /**
     * Returns first layered element found with given ID
     * @returns Layered element with given ID or undefined if not found
     */
    Surface.prototype.layerWithId = function (id) {
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            if (layer.id === id) {
                return layer;
            }
        }
        return undefined;
    };
    /**
     * Creates internal model if necessary, binds to host element and calls completion callback
     * @param hostDiv - Hosting div element
     * @callback Completion callback (surface: Surface)
     */
    Surface.prototype.bind = function (hostDiv, callback, onBottom) {
        var self = this;
        if (self.controller) {
            self.onErrorInternal(error_messages_1.ErrorMessages.SurfaceIsAlreadyBound);
            return;
        }
        self.hostDiv = hostDiv;
        self.createDiv(onBottom);
        if (self.model) {
            self.initializeController();
            if (callback) {
                callback(self);
            }
        }
        else {
            self.createModel(function () {
                if (self.model) {
                    self.initializeController();
                    if (callback) {
                        callback(self);
                    }
                }
            });
        }
    };
    /**
     * Unbinds from and destroys host element
     */
    Surface.prototype.unbind = function () {
        if (!this.controller) {
            return;
        }
        if (this.hostDiv && this.div) {
            this.hostDiv.removeChild(this.div);
        }
        // Destroy layer elements
        this.layers.forEach(function (layer) {
            layer.destroy();
        });
        // Clear event handlers
        this.resourceListenerEvent.clear();
        this.controller.mouseEnteredElement.clear();
        this.controller.mouseLeftElement.clear();
        this.controller.mouseDownElement.clear();
        this.controller.mouseUpElement.clear();
        this.controller.elementClicked.clear();
        this.controller.commandHandler = undefined;
        this.controller.timer.clear();
        this.controller.detach();
        this.controller = undefined;
        this.div = undefined;
        this.hostDiv = undefined;
    };
    /**
     * Called after all resources have been loaded to initialize surface elements
     */
    Surface.prototype.onload = function () {
        // Call onload on all layer elements
        this.layers.forEach(function (layer) {
            layer.onload();
        });
    };
    /**
     * Called when surface is being unloaded to unload resources
     */
    Surface.prototype.onunload = function () {
        // Call onunload on all layer elements
        this.layers.forEach(function (layer) {
            layer.onunload();
        });
    };
    /**
     * Sets rendering scale
     */
    Surface.prototype.setScale = function (scale) {
        this.scale = scale;
        if (this.controller) {
            this.controller.setScale(this.scale);
        }
        this.layers.forEach(function (layer) {
            layer.setScale(scale);
        });
        return this;
    };
    /**
     * Sets rendering opacity
     */
    Surface.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        if (this.div) {
            this.div.style.opacity = this.opacity.toString();
        }
        this.layers.forEach(function (layer) {
            layer.setOpacity(opacity);
        });
        return this;
    };
    /**
     * Sets X translation
     */
    Surface.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        if (this.div) {
            this.div.style.left = this.translateX * this.scale + 'px';
        }
        return this;
    };
    /**
     * Sets Y translation
     */
    Surface.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        if (this.div) {
            this.div.style.top = this.translateY * this.scale + 'px';
        }
        return this;
    };
    /**
     * Returns a numeric value scaled by the current scale factor
     */
    Surface.prototype.scaledValue = function (value) {
        return value * this.scale;
    };
    /**
     * Creates internal drawing model and layered elements, loads resources and calls callback
     * @param callback - Completion event listener
     */
    Surface.prototype.createModel = function (callback) {
        var self = this;
        // Create model and attach resource listeners
        var model = model_1.Model.create(self.width, self.height);
        self.model = model;
        if (self.resourceListenerEvent.hasListeners()) {
            self.resourceListenerEvent.listeners.forEach(function (listener) {
                if (self.model) {
                    self.model.resourceManager.listenerEvent.add(listener);
                }
            });
        }
        // Set color if defined
        if (self.backgroundColor) {
            model.setFill(self.backgroundColor);
        }
        // Add defined image resources
        if (self.normalImageSource) {
            bitmap_resource_1.BitmapResource.create(surface_element_states_1.SurfaceElementStates.NORMAL, self.normalImageSource).addTo(model);
            image_element_1.ImageElement.create(surface_element_states_1.SurfaceElementStates.NORMAL, 0, 0, self.width, self.height).addTo(model);
        }
        if (self.selectedImageSource) {
            bitmap_resource_1.BitmapResource.create(surface_element_states_1.SurfaceElementStates.SELECTED, self.selectedImageSource).addTo(model);
        }
        if (self.highlightedImageSource) {
            bitmap_resource_1.BitmapResource.create(surface_element_states_1.SurfaceElementStates.HIGHLIGHTED, self.highlightedImageSource).addTo(model);
        }
        if (self.disabledImageSource) {
            bitmap_resource_1.BitmapResource.create(surface_element_states_1.SurfaceElementStates.DISABLED, self.disabledImageSource).addTo(model);
        }
        // Add base layer elements
        for (var _i = 0, _a = self.elements; _i < _a.length; _i++) {
            var el = _a[_i];
            el.surface = self;
            el.addToModel(model);
        }
        // Add layered elements
        for (var _b = 0, _c = self.layers; _b < _c.length; _b++) {
            var layer = _c[_b];
            layer.surface = self;
            layer.addToSurface(self);
        }
        // Set completion callback and load resources
        if (callback) {
            self.loaded.add(callback);
        }
        self.loadResources();
    };
    /**
     * Loads all required resources and calls completion callback
     */
    Surface.prototype.loadResources = function () {
        var self = this;
        // Find next unprepared layer
        for (var _i = 0, _a = self.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            if (!layer.isPrepared) {
                layer.prepare(function (success) {
                    self.loadResources();
                });
                return;
            }
        }
        // Prepare resources and return model
        if (self.model) {
            self.model.prepareResources(undefined, function (success) {
                if (success) {
                    self.loaded.trigger(true);
                }
                else {
                    self.onErrorInternal(error_messages_1.ErrorMessages.ResourcesFailedToLoad);
                    self.loaded.trigger(false);
                }
            });
        }
    };
    /**
     * Internal error handling/logging method
     * @param {string} message - Error message
     */
    Surface.prototype.onErrorInternal = function (message) {
        this.error.trigger(message);
    };
    /**
     * Simulates a button click
     */
    Surface.prototype.clickButton = function (buttonId) {
        var button = this.elementWithId(buttonId);
        if (button) {
            button.onClicked();
        }
    };
    Surface.prototype.startVideos = function () {
        this.layers.forEach(function (layer) {
            if (layer instanceof surface_video_layer_1.SurfaceVideoLayer) {
                if (layer.autoPlay && layer.element) {
                    layer.element.play();
                }
            }
        });
    };
    /**
     * Registers a resource listener
     * @param {function} listener - Resource listener function (rm: ResourceManager, state: ResourceState)
     */
    Surface.prototype.addResourceListener = function (listener) {
        this.resourceListenerEvent.add(listener);
        if (this.model) {
            this.model.resourceManager.listenerEvent.add(listener);
        }
    };
    return Surface;
}());
exports.Surface = Surface;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var element_command_handler_1 = __webpack_require__(26);
var common_event_1 = __webpack_require__(6);
var error_messages_1 = __webpack_require__(0);
var model_1 = __webpack_require__(4);
var sprite_element_1 = __webpack_require__(17);
var sprite_frame_1 = __webpack_require__(22);
var bitmap_resource_1 = __webpack_require__(19);
var transitions_1 = __webpack_require__(14);
var surface_animation_frame_1 = __webpack_require__(98);
var surface_animation_view_controller_1 = __webpack_require__(99);
var surface_layer_1 = __webpack_require__(12);
/**
 * Renders timed image frames with optional transitions
 */
var SurfaceAnimationLayer = /** @class */ (function (_super) {
    __extends(SurfaceAnimationLayer, _super);
    /**
     * @param id - Animation id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param loop - Loop animation
     * @param clickListener - Click event listener
     * @param initialIndex - Initial frame index
     * @param frameAdvancedListener - Frame advance event listener
     */
    function SurfaceAnimationLayer(id, left, top, width, height, loop, clickListener, initialIndex, frameAdvancedListener) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        /**
         * Clicked event
         */
        _this.clicked = new common_event_1.CommonEvent();
        /**
         * Frame advance event
         */
        _this.frameAdvanced = new common_event_1.CommonEvent();
        /**
         * Animation frame array
         */
        _this.frames = [];
        _this.addFrame = _this.addFrame.bind(_this);
        _this.setResourceListener = _this.setResourceListener.bind(_this);
        _this.pause = _this.pause.bind(_this);
        _this.onAnimationClick = _this.onAnimationClick.bind(_this);
        _this.onAnimationAdvance = _this.onAnimationAdvance.bind(_this);
        _this.frameIndex = 0;
        _this.isPaused = false;
        _this.isStopped = false;
        _this.rememberFrame = false;
        _this.loop = loop;
        if (clickListener) {
            _this.clicked.add(clickListener);
        }
        _this.initialIndex = initialIndex;
        if (frameAdvancedListener) {
            _this.frameAdvanced.add(frameAdvancedListener);
        }
        return _this;
    }
    /**
     * Renders timed image frames with optional transitions
     * @param id - Animation id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param loop - Loop animation
     * @param clickListener - Click event listener
     * @param initialIndex - Initial frame index
     * @param frameAdvancedListener - Frame advance event listener
     */
    SurfaceAnimationLayer.create = function (id, left, top, width, height, loop, clickListener, initialIndex, frameAdvancedListener) {
        var animation = new SurfaceAnimationLayer(id, left, top, width, height, loop, clickListener, initialIndex, frameAdvancedListener);
        return animation;
    };
    /**
     * Adds an animation frame
     * @param id - Animation frame id
     * @param source - Animation frame bitmap source
     * @param left - Source bitmap crop x coordinate
     * @param top - Source bitmap crop y coordinate
     * @param width - Source bitmap crop width
     * @param height - Source bitmap crop height
     * @param duration - Frame duration in seconds
     * @param transition - Frame "to" transition
     * @param transitionDuration - Transition duration in seconds
     * @param pauseFrame - Pause frame until tapped
     * @returns New animation frame
     */
    SurfaceAnimationLayer.prototype.addFrame = function (id, source, left, top, width, height, duration, transition, transitionDuration, pauseFrame) {
        var frame = new surface_animation_frame_1.SurfaceAnimationFrame(id, left, top, width, height, source, duration, transition, transitionDuration, pauseFrame);
        this.frames.push(frame);
        return frame;
    };
    /**
     * Registers a resource listener
     * @param listener - Animation resource listener (rm: Elise.ResourceManager, state: Elise.ResourceState)
     */
    SurfaceAnimationLayer.prototype.setResourceListener = function (listener) {
        if (this.model) {
            this.model.resourceManager.listenerEvent.add(listener);
        }
    };
    /**
     * Adds animation to parent surface
     */
    SurfaceAnimationLayer.prototype.addToSurface = function (surface) {
        this.surface = surface;
        // If no frames, throw error
        if (this.frames.length < 1) {
            throw new Error(error_messages_1.ErrorMessages.NoAnimationFramesAreDefined);
        }
        // Create model
        var model = model_1.Model.create(this.width, this.height);
        this.model = model;
        if (surface.resourceListenerEvent.hasListeners()) {
            surface.resourceListenerEvent.listeners.forEach(function (listener) {
                model.resourceManager.listenerEvent.add(listener);
            });
        }
        // Create bitmap resources for animation frames
        var registered = [];
        for (var _i = 0, _a = this.frames; _i < _a.length; _i++) {
            var frame = _a[_i];
            var source = frame.source;
            var found = false;
            for (var _b = 0, registered_1 = registered; _b < registered_1.length; _b++) {
                var item = registered_1[_b];
                if (item.toLowerCase() === source.toLowerCase()) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                var key = registered.length.toString();
                bitmap_resource_1.BitmapResource.create(key, frame.source).addTo(model);
                registered.push(frame.source);
            }
        }
        // Create sprite element
        var sprite = sprite_element_1.SpriteElement.create(0, 0, this.width, this.height);
        sprite.id = this.id;
        sprite.loop = this.loop;
        sprite.timer = transitions_1.TransitionRenderer.SPRITE_TRANSITION;
        sprite.click = SurfaceAnimationLayer.ANIMATION_CLICK;
        sprite.onAdvance = SurfaceAnimationLayer.ANIMATION_ADVANCE;
        sprite.frames = [];
        sprite.setInteractive(true);
        // Add frames
        for (var _c = 0, _d = this.frames; _c < _d.length; _c++) {
            var frame = _d[_c];
            var key = '';
            for (var j = 0; j < registered.length; j++) {
                if (registered[j].toLowerCase() === frame.source.toLowerCase()) {
                    key = j.toString();
                    break;
                }
            }
            sprite.frames.push(sprite_frame_1.SpriteFrame.create(key, frame.left, frame.top, frame.width, frame.height, frame.duration, frame.transition, frame.transitionDuration));
        }
        // Set non-default initial frame
        if (this.initialIndex) {
            sprite.frameIndex = this.initialIndex;
        }
        // Add sprite to model
        model.add(sprite);
        var controller = new surface_animation_view_controller_1.SurfaceAnimationViewController();
        this.controller = controller;
        this.controller.surface = this.surface;
        controller.animation = this;
        controller.setScale(surface.scale);
        controller.setModel(this.model);
        var canvas = controller.getCanvas();
        canvas.setAttribute('id', this.id + '_canvas');
        canvas.style.position = 'absolute';
        canvas.style.left = this.translateX + this.left * surface.scale + 'px';
        canvas.style.top = this.translateY + this.top * surface.scale + 'px';
        canvas.style.opacity = (this.surface.opacity * this.opacity).toString();
        this.element = canvas;
        this.sprite = sprite;
    };
    /**
     * Loads required resource and calls completion callback
     * @param callback - Completion callback (success: boolean)
     */
    SurfaceAnimationLayer.prototype.prepare = function (callback) {
        var self = this;
        // let parentElement = document.getElementById(self.surface.hostDivId);
        // parentElement.appendChild(self.element);
        if (!self.element) {
            throw new Error(error_messages_1.ErrorMessages.ElementUndefined);
        }
        if (!self.controller) {
            throw new Error(error_messages_1.ErrorMessages.ControllerIsUndefined);
        }
        if (!self.surface) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceIsUndefined);
        }
        if (!self.surface.div) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceDivIsUndefined);
        }
        self.surface.div.appendChild(self.element);
        // self.controller.surface = self.surface;
        var elementCommandHandler = new element_command_handler_1.ElementCommandHandler();
        elementCommandHandler.attachController(self.controller);
        elementCommandHandler.addHandler(transitions_1.TransitionRenderer.SPRITE_TRANSITION, transitions_1.TransitionRenderer.spriteTransitionHandler);
        elementCommandHandler.addHandler(SurfaceAnimationLayer.ANIMATION_CLICK, function (controller, element, command, trigger, parameters) {
            var animationController = controller;
            var animation = animationController.animation;
            if (animation) {
                animation.onAnimationClick();
            }
        });
        elementCommandHandler.addHandler(SurfaceAnimationLayer.ANIMATION_ADVANCE, function (controller, element, command, trigger, parameters) {
            var animationController = controller;
            var animation = animationController.animation;
            if (animation && animation.sprite) {
                animation.frameIndex = animation.sprite.frameIndex;
                animation.onAnimationAdvance();
            }
        });
        if (self.model) {
            self.model.prepareResources(undefined, function (success) {
                if (success) {
                    self.isPrepared = true;
                    if (self.controller) {
                        self.controller.draw();
                    }
                    if (callback) {
                        callback(true);
                    }
                }
                else {
                    if (self.surface) {
                        self.surface.onErrorInternal(error_messages_1.ErrorMessages.ResourcesFailedToLoad);
                    }
                    if (callback) {
                        callback(false);
                    }
                }
            });
        }
    };
    /**
     * Unloads animation and destroys visual elements
     */
    SurfaceAnimationLayer.prototype.destroy = function () {
        if (this.controller) {
            this.controller.detach();
        }
        if (this.element) {
            this.element = undefined;
        }
        this.surface = undefined;
    };
    /**
     * Pauses animation
     */
    SurfaceAnimationLayer.prototype.pause = function () {
        if (!this.controller || !this.sprite) {
            return;
        }
        if (this.isPaused) {
            this.controller.resumeTimer();
            this.isPaused = false;
        }
        else {
            // Only pause if not transitioning
            var spriteState = this.sprite.getStateForTime(this.controller.elapsedTime());
            if (!spriteState || !spriteState.transition) {
                this.controller.pauseTimer();
                this.isPaused = true;
            }
        }
    };
    /**
     * Onload initialization
     */
    SurfaceAnimationLayer.prototype.onload = function () {
        if (this.controller && this.sprite) {
            // If initial frame is specified, set starting time in the past
            // by an offset equal to the starting time for the frame
            if (this.initialIndex) {
                var startTime = this.sprite.getTimeForFrame(this.initialIndex);
                if (startTime) {
                    this.controller.startTimer(-startTime);
                }
                else {
                    this.controller.startTimer(0);
                }
            }
            else {
                this.controller.startTimer(0);
            }
        }
    };
    /**
     * Onunload teardown
     */
    SurfaceAnimationLayer.prototype.onunload = function () {
        if (this.controller) {
            this.controller.stopTimer();
        }
    };
    /**
     * Sets rendering scale
     */
    SurfaceAnimationLayer.prototype.setScale = function (scale) {
        if (this.controller) {
            this.controller.setScale(scale);
        }
        if (!this.element) {
            throw new Error(error_messages_1.ErrorMessages.ElementUndefined);
        }
        var layer = this.element;
        layer.style.left = this.translateX + this.left * scale + 'px';
        layer.style.top = this.translateY + this.top * scale + 'px';
        layer.style.width = this.width * scale + 'px';
        layer.style.height = this.height * scale + 'px';
        return this;
    };
    /**
     * Sets rendering opacity
     */
    SurfaceAnimationLayer.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        if (this.element && this.surface) {
            this.element.style.opacity = (this.surface.opacity * this.opacity).toString();
        }
        return this;
    };
    /**
     * Sets X translation
     */
    SurfaceAnimationLayer.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        if (this.element && this.surface) {
            this.element.style.left = (this.translateX + this.left) * this.surface.scale + 'px';
        }
        return this;
    };
    /**
     * Sets Y translation
     */
    SurfaceAnimationLayer.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        if (this.element && this.surface) {
            this.element.style.top = (this.translateY + this.top) * this.surface.scale + 'px';
        }
        return this;
    };
    SurfaceAnimationLayer.prototype.onAnimationClick = function () {
        this.clicked.trigger(this);
    };
    SurfaceAnimationLayer.prototype.onAnimationAdvance = function () {
        this.frameAdvanced.trigger(this);
    };
    SurfaceAnimationLayer.prototype.addTo = function (surface) {
        surface.layers.push(this);
        return this;
    };
    SurfaceAnimationLayer.ANIMATION_CLICK = 'animationClick';
    SurfaceAnimationLayer.ANIMATION_ADVANCE = 'animationAdvance';
    return SurfaceAnimationLayer;
}(surface_layer_1.SurfaceLayer));
exports.SurfaceAnimationLayer = SurfaceAnimationLayer;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_event_1 = __webpack_require__(6);
var surface_layer_1 = __webpack_require__(12);
/**
 * Hidden surface layer
 * Renders a transparent HTML div element for capturing click event
 */
var SurfaceHiddenLayer = /** @class */ (function (_super) {
    __extends(SurfaceHiddenLayer, _super);
    /**
     * @param id - Layer id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param clickListener - Click event listener
     */
    function SurfaceHiddenLayer(id, left, top, width, height, clickListener) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        /**
         * Clicked event
         */
        _this.clicked = new common_event_1.CommonEvent();
        if (clickListener) {
            _this.clicked.add(clickListener);
        }
        return _this;
    }
    /**
     * Creates a hidden div layer
     * @param id - Hidden layer id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param source - Image source URL
     * @param clickListener - Click event listener
     * @returns New hidden layer
     */
    SurfaceHiddenLayer.create = function (id, left, top, width, height, clickListener) {
        var layer = new SurfaceHiddenLayer(id, left, top, width, height, clickListener);
        return layer;
    };
    /**
     * Adds hidden layer to parent surface
     * @param surface - Parent surface
     */
    SurfaceHiddenLayer.prototype.addToSurface = function (surface) {
        this.surface = surface;
        // Create div element
        var hiddenLayer = document.createElement('div');
        hiddenLayer.setAttribute('id', this.id + '_div');
        hiddenLayer.style.position = 'absolute';
        hiddenLayer.style.left = this.translateX + this.left * surface.scale + 'px';
        hiddenLayer.style.top = this.translateY + this.top * surface.scale + 'px';
        hiddenLayer.style.width = this.width * surface.scale + 'px';
        hiddenLayer.style.height = this.height * surface.scale + 'px';
        this.element = hiddenLayer;
    };
    /**
     * Attaches click event handler
     * @param callback - Completion callback (success: boolean)
     */
    SurfaceHiddenLayer.prototype.prepare = function (callback) {
        var self = this;
        if (self.element && self.surface && self.surface.div) {
            self.surface.div.appendChild(self.element);
            self.element.onclick = function () {
                self.clicked.trigger(self);
            };
        }
        self.isPrepared = true;
        if (callback) {
            callback(true);
        }
    };
    /**
     * Unloads div element
     */
    SurfaceHiddenLayer.prototype.destroy = function () {
        if (this.element && this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
            this.element = undefined;
        }
        this.surface = undefined;
    };
    /**
     * Sets rendering scale
     */
    SurfaceHiddenLayer.prototype.setScale = function (scale) {
        if (!this.element || !scale) {
            return this;
        }
        var layer = this.element;
        layer.style.left = this.translateX + this.left * scale + 'px';
        layer.style.top = this.translateY + this.top * scale + 'px';
        layer.style.width = this.width * scale + 'px';
        layer.style.height = this.height * scale + 'px';
        return this;
    };
    /**
     * Sets X translation
     */
    SurfaceHiddenLayer.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        if (this.element && this.surface) {
            this.element.style.left = (this.translateX + this.left) * this.surface.scale + 'px';
        }
        return this;
    };
    /**
     * Sets Y translation
     */
    SurfaceHiddenLayer.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        if (this.element && this.surface) {
            this.element.style.top = (this.translateY + this.top) * this.surface.scale + 'px';
        }
        return this;
    };
    SurfaceHiddenLayer.prototype.addTo = function (surface) {
        surface.layers.push(this);
        return this;
    };
    SurfaceHiddenLayer.prototype.onload = function () { };
    SurfaceHiddenLayer.prototype.onunload = function () { };
    return SurfaceHiddenLayer;
}(surface_layer_1.SurfaceLayer));
exports.SurfaceHiddenLayer = SurfaceHiddenLayer;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var surface_layer_1 = __webpack_require__(12);
/**
 * Renders HTML content into an IFrame element
 */
var SurfaceHtmlLayer = /** @class */ (function (_super) {
    __extends(SurfaceHtmlLayer, _super);
    /**
     * @param id - HTML layer id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param source - HTML source URL
     */
    function SurfaceHtmlLayer(id, left, top, width, height, source) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        _this.scrolling = 'auto';
        _this.sandbox = true;
        _this.source = source;
        _this.scaleContent = true;
        return _this;
    }
    /**
     * Creates an HTML item
     * @param id - Hidden layer id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param source - HTML source URL
     * @returns New HTML layer
     */
    SurfaceHtmlLayer.create = function (id, left, top, width, height, source) {
        var layer = new SurfaceHtmlLayer(id, left, top, width, height, source);
        return layer;
    };
    /**
     * Adds HTML layer to parent surface
     * @param surface - Parent surface
     */
    SurfaceHtmlLayer.prototype.addToSurface = function (surface) {
        this.surface = surface;
        // If no source
        if (!this.source) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        // Create iFrame for content
        var iframe = document.createElement('iframe');
        iframe.setAttribute('id', this.id + '_iframe');
        if (this.sandbox) {
            iframe.setAttribute('sandbox', 'allow-forms allow-popups allow-same-origin allow-scripts');
        }
        iframe.style.position = 'absolute';
        iframe.style.left = this.translateX + this.left * surface.scale + 'px';
        iframe.style.top = this.translateY + this.top * surface.scale + 'px';
        if (this.scaleContent) {
            iframe.style.width = this.width + 'px';
            iframe.style.height = this.height + 'px';
        }
        else {
            iframe.style.width = this.width * surface.scale + 'px';
            iframe.style.height = this.height * surface.scale + 'px';
        }
        iframe.style.border = '0px';
        if (this.scaleContent) {
            iframe.style.transform = 'scale(' + surface.scale + ')';
            iframe.style.transformOrigin = '0 0';
        }
        iframe.style.opacity = (this.surface.opacity * this.opacity).toString();
        iframe.scrolling = this.scrolling;
        this.element = iframe;
    };
    /**
     * Sets HTML source and adds element to DOM
     * @param callback - Completion callback (success: boolean)
     */
    SurfaceHtmlLayer.prototype.prepare = function (callback) {
        if (!this.element) {
            throw new Error(error_messages_1.ErrorMessages.ElementUndefined);
        }
        if (!this.surface) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceIsUndefined);
        }
        if (!this.surface.div) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceDivIsUndefined);
        }
        this.surface.div.appendChild(this.element);
        this.element.src = this.source;
        this.isPrepared = true;
        if (callback) {
            callback(true);
        }
    };
    /**
     * Unloads HTML layer and destroys visual elements
     */
    SurfaceHtmlLayer.prototype.destroy = function () {
        if (this.element && this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
            this.element = undefined;
        }
        this.surface = undefined;
    };
    /**
     * Onload initialization. Sets IFrame source
     */
    SurfaceHtmlLayer.prototype.onload = function () {
        if (this.element) {
            this.element.src = this.source;
        }
    };
    /**
     * Onunload teardown
     */
    SurfaceHtmlLayer.prototype.onunload = function () {
        if (this.element) {
            this.element.src = 'about:blank';
        }
    };
    /**
     * Sets rendering scale
     */
    SurfaceHtmlLayer.prototype.setScale = function (scale) {
        if (!this.element || !scale) {
            return this;
        }
        var iframe = this.element;
        iframe.style.left = this.translateX + this.left * scale + 'px';
        iframe.style.top = this.translateY + this.top * scale + 'px';
        if (this.scaleContent) {
            iframe.style.width = this.width + 'px';
            iframe.style.height = this.height + 'px';
        }
        else {
            iframe.style.width = this.width * scale + 'px';
            iframe.style.height = this.height * scale + 'px';
        }
        iframe.style.border = '0px';
        if (this.scaleContent) {
            iframe.style.transform = 'scale(' + scale + ')';
            iframe.style.transformOrigin = '0 0';
        }
        return this;
    };
    /**
     * Sets rendering opacity
     */
    SurfaceHtmlLayer.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        if (this.element && this.surface) {
            this.element.style.opacity = (this.surface.opacity * this.opacity).toString();
        }
        return this;
    };
    /**
     * Sets X translation
     */
    SurfaceHtmlLayer.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        if (this.element && this.surface) {
            this.element.style.left = (this.translateX + this.left) * this.surface.scale + 'px';
        }
        return this;
    };
    /**
     * Sets Y translation
     */
    SurfaceHtmlLayer.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        if (this.element && this.surface) {
            this.element.style.top = (this.translateY + this.top) * this.surface.scale + 'px';
        }
        return this;
    };
    SurfaceHtmlLayer.prototype.addTo = function (surface) {
        surface.layers.push(this);
        return this;
    };
    return SurfaceHtmlLayer;
}(surface_layer_1.SurfaceLayer));
exports.SurfaceHtmlLayer = SurfaceHtmlLayer;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_event_1 = __webpack_require__(6);
var error_messages_1 = __webpack_require__(0);
var surface_layer_1 = __webpack_require__(12);
/**
 * Renders a bitmap image into an HTML image element
 */
var SurfaceImageLayer = /** @class */ (function (_super) {
    __extends(SurfaceImageLayer, _super);
    /**
     * @param id - Image layer id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param source - Image source URL
     * @param clickListener - Click event listener
     */
    function SurfaceImageLayer(id, left, top, width, height, source, clickListener) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        /**
         * Clicked event
         */
        _this.clicked = new common_event_1.CommonEvent();
        _this.source = source;
        if (clickListener) {
            _this.clicked.add(clickListener);
        }
        return _this;
    }
    /**
     * Creates an image layer
     * @param id - Image id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param source - Image source URL
     * @param clickListener - Click event listener
     * @returns New image layer
     */
    SurfaceImageLayer.create = function (id, left, top, width, height, source, clickListener) {
        var layer = new SurfaceImageLayer(id, left, top, width, height, source, clickListener);
        return layer;
    };
    /**
     * Adds image layer to parent surface
     * @param surface - Parent surface
     */
    SurfaceImageLayer.prototype.addToSurface = function (surface) {
        this.surface = surface;
        // If no source
        if (!this.source) {
            throw new Error(error_messages_1.ErrorMessages.SourceUndefined);
        }
        // Create Image element
        var imageLayer = document.createElement('img');
        imageLayer.setAttribute('id', this.id + '_image');
        imageLayer.style.position = 'absolute';
        imageLayer.style.left = this.translateX + this.left * surface.scale + 'px';
        imageLayer.style.top = this.translateY + this.top * surface.scale + 'px';
        imageLayer.style.width = this.width * surface.scale + 'px';
        imageLayer.style.height = this.height * surface.scale + 'px';
        imageLayer.style.opacity = (this.surface.opacity * this.opacity).toString();
        this.element = imageLayer;
    };
    /**
     * Sets image source and attaches click event handler
     * @param callback - Completion callback (success: boolean)
     */
    SurfaceImageLayer.prototype.prepare = function (callback) {
        var self = this;
        if (!self.element) {
            throw new Error(error_messages_1.ErrorMessages.ElementUndefined);
        }
        if (!self.surface) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceIsUndefined);
        }
        if (!self.surface.div) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceDivIsUndefined);
        }
        var imageLayer = self.element;
        self.surface.div.appendChild(self.element);
        self.element.src = self.source;
        imageLayer.onclick = function () {
            self.clicked.trigger(self);
        };
        self.isPrepared = true;
        if (callback) {
            callback(true);
        }
    };
    /**
     * Unloads image layer and destroys visual elements
     */
    SurfaceImageLayer.prototype.destroy = function () {
        if (this.element && this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
            this.element = undefined;
        }
        this.surface = undefined;
    };
    /**
     * Sets rendering scale
     */
    SurfaceImageLayer.prototype.setScale = function (scale) {
        if (!this.element || !scale) {
            return this;
        }
        var layer = this.element;
        layer.style.left = this.translateX + this.left * scale + 'px';
        layer.style.top = this.translateY + this.top * scale + 'px';
        layer.style.width = this.width * scale + 'px';
        layer.style.height = this.height * scale + 'px';
        return this;
    };
    /**
     * Sets rendering opacity
     */
    SurfaceImageLayer.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        if (this.element && this.surface) {
            this.element.style.opacity = (this.surface.opacity * this.opacity).toString();
        }
        return this;
    };
    /**
     * Sets X translation
     */
    SurfaceImageLayer.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        if (this.element && this.surface) {
            this.element.style.left = (this.translateX + this.left) * this.surface.scale + 'px';
        }
        return this;
    };
    /**
     * Sets Y translation
     */
    SurfaceImageLayer.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        if (this.element && this.surface) {
            this.element.style.top = (this.translateY + this.top) * this.surface.scale + 'px';
        }
        return this;
    };
    SurfaceImageLayer.prototype.addTo = function (surface) {
        surface.layers.push(this);
        return this;
    };
    SurfaceImageLayer.prototype.onload = function () { };
    SurfaceImageLayer.prototype.onunload = function () { };
    return SurfaceImageLayer;
}(surface_layer_1.SurfaceLayer));
exports.SurfaceImageLayer = SurfaceImageLayer;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_messages_1 = __webpack_require__(0);
var utility_1 = __webpack_require__(5);
var pane_transition_direction_1 = __webpack_require__(20);
var pane_transition_fade_1 = __webpack_require__(88);
var pane_transition_none_1 = __webpack_require__(89);
var pane_transition_push_1 = __webpack_require__(90);
var pane_transition_reveal_1 = __webpack_require__(91);
var pane_transition_slide_1 = __webpack_require__(92);
var pane_transition_wipe_1 = __webpack_require__(93);
var surface_layer_1 = __webpack_require__(12);
/**
 * Hosts a child surface in a parent surface layer
 */
var SurfacePane = /** @class */ (function (_super) {
    __extends(SurfacePane, _super);
    /**
     * @param id - Pane id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param childSurface - Hosted child surface
     */
    function SurfacePane(id, left, top, width, height, childSurface) {
        var _this = _super.call(this, id, left, top, width, height) || this;
        _this.replaceSurface = _this.replaceSurface.bind(_this);
        _this.setHostDivScrolling = _this.setHostDivScrolling.bind(_this);
        _this.childSurface = childSurface;
        _this.childSurface.isChild = true;
        return _this;
    }
    /**
     * Creates a surface pane layer
     * @param id - Pane layer id
     * @param left - Layout area x coordinate
     * @param top - Layout area y coordinate
     * @param width - Layout area width
     * @param height - Layout area height
     * @param surface - Pane surface
     * @returns New HTML layer
     */
    SurfacePane.create = function (id, left, top, width, height, surface) {
        var layer = new SurfacePane(id, left, top, width, height, surface);
        return layer;
    };
    // tslint:disable-next-line:no-empty
    SurfacePane.prototype.onload = function () { };
    // tslint:disable-next-line:no-empty
    SurfacePane.prototype.onunload = function () { };
    /**
     * Adds pane to parent surface
     */
    SurfacePane.prototype.addToSurface = function (surface) {
        this.surface = surface;
        // If no child surface, throw error
        if (!this.childSurface) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceDivIsUndefined);
        }
        // Create div to host child surface
        var hostDiv = document.createElement('div');
        var id = utility_1.Utility.guid() + '_div';
        hostDiv.setAttribute('id', id);
        hostDiv.style.position = 'absolute';
        hostDiv.style.left = this.translateX + this.left * surface.scale + 'px';
        hostDiv.style.top = this.translateY + this.top * surface.scale + 'px';
        hostDiv.style.width = this.width * surface.scale + 'px';
        hostDiv.style.height = this.height * surface.scale + 'px';
        hostDiv.style.opacity = (this.surface.opacity * this.opacity).toString();
        this.childSurface.scale = this.surface.scale;
        this.element = hostDiv;
        this.setHostDivScrolling();
    };
    /**
     * Prepares child surface resources and call completion callback
     */
    SurfacePane.prototype.prepare = function (callback) {
        var self = this;
        if (!self.element) {
            throw new Error(error_messages_1.ErrorMessages.ElementUndefined);
        }
        if (!self.surface) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceIsUndefined);
        }
        if (!self.surface.div) {
            throw new Error(error_messages_1.ErrorMessages.SurfaceDivIsUndefined);
        }
        self.surface.div.appendChild(self.element);
        if (self.surface.resourceListenerEvent.hasListeners()) {
            self.surface.resourceListenerEvent.listeners.forEach(function (listener) {
                self.childSurface.resourceListenerEvent.add(listener);
            });
        }
        self.childSurface.bind(self.element, function (surface) {
            self.isPrepared = true;
            callback(true);
        }, false);
    };
    SurfacePane.prototype.setHostDivScrolling = function () {
        var self = this;
        if (!self.element) {
            return;
        }
        var hostDiv = self.element;
        if (self.childSurface.width > self.width) {
            hostDiv.style.overflowX = 'scroll';
        }
        else {
            hostDiv.style.overflowX = 'hidden';
        }
        if (self.childSurface.height > self.height) {
            hostDiv.style.overflowY = 'scroll';
        }
        else {
            hostDiv.style.overflowY = 'hidden';
        }
    };
    /**
     * Swaps existing child surface with a new child surface, prepares its resources
     * and calls completion callback
     * @param newChild - New child surface
     * @param callback - Callback (pane: Pane)
     */
    SurfacePane.prototype.replaceSurface = function (newChild, callback, transition, duration) {
        if (transition !== undefined && duration !== undefined) {
            switch (transition.toLowerCase()) {
                case 'fade':
                    {
                        var t = new pane_transition_fade_1.PaneTransitionFade(this, newChild, callback, duration);
                        t.start();
                    }
                    break;
                case 'pushleft':
                    {
                        var t = new pane_transition_push_1.PaneTransitionPush(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Left);
                        t.start();
                    }
                    break;
                case 'pushright':
                    {
                        var t = new pane_transition_push_1.PaneTransitionPush(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Right);
                        t.start();
                    }
                    break;
                case 'pushup':
                    {
                        var t = new pane_transition_push_1.PaneTransitionPush(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Up);
                        t.start();
                    }
                    break;
                case 'pushdown':
                    {
                        var t = new pane_transition_push_1.PaneTransitionPush(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Down);
                        t.start();
                    }
                    break;
                case 'wipeleft':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Left);
                        t.start();
                    }
                    break;
                case 'wipeleftup':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.LeftUp);
                        t.start();
                    }
                    break;
                case 'wipeleftdown':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.LeftDown);
                        t.start();
                    }
                    break;
                case 'wiperight':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Right);
                        t.start();
                    }
                    break;
                case 'wiperightup':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.RightUp);
                        t.start();
                    }
                    break;
                case 'wiperightdown':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.RightDown);
                        t.start();
                    }
                    break;
                case 'wipeup':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Up);
                        t.start();
                    }
                    break;
                case 'wipedown':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Down);
                        t.start();
                    }
                    break;
                case 'wipein':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.In);
                        t.start();
                    }
                    break;
                case 'wipeinx':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.InX);
                        t.start();
                    }
                    break;
                case 'wipeiny':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.InY);
                        t.start();
                    }
                    break;
                case 'wipeout':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Out);
                        t.start();
                    }
                    break;
                case 'wipeoutx':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.OutX);
                        t.start();
                    }
                    break;
                case 'wipeouty':
                    {
                        var t = new pane_transition_wipe_1.PaneTransitionWipe(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.OutY);
                        t.start();
                    }
                    break;
                case 'revealleft':
                    {
                        var t = new pane_transition_reveal_1.PaneTransitionReveal(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Left);
                        t.start();
                    }
                    break;
                case 'revealleftup':
                    {
                        var t = new pane_transition_reveal_1.PaneTransitionReveal(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.LeftUp);
                        t.start();
                    }
                    break;
                case 'revealleftdown':
                    {
                        var t = new pane_transition_reveal_1.PaneTransitionReveal(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.LeftDown);
                        t.start();
                    }
                    break;
                case 'revealright':
                    {
                        var t = new pane_transition_reveal_1.PaneTransitionReveal(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Right);
                        t.start();
                    }
                    break;
                case 'revealrightup':
                    {
                        var t = new pane_transition_reveal_1.PaneTransitionReveal(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.RightUp);
                        t.start();
                    }
                    break;
                case 'revealrightdown':
                    {
                        var t = new pane_transition_reveal_1.PaneTransitionReveal(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.RightDown);
                        t.start();
                    }
                    break;
                case 'revealup':
                    {
                        var t = new pane_transition_reveal_1.PaneTransitionReveal(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Up);
                        t.start();
                    }
                    break;
                case 'revealdown':
                    {
                        var t = new pane_transition_reveal_1.PaneTransitionReveal(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Down);
                        t.start();
                    }
                    break;
                case 'slideleft':
                    {
                        var t = new pane_transition_slide_1.PaneTransitionSlide(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Left);
                        t.start();
                    }
                    break;
                case 'slideleftup':
                    {
                        var t = new pane_transition_slide_1.PaneTransitionSlide(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.LeftUp);
                        t.start();
                    }
                    break;
                case 'slideleftdown':
                    {
                        var t = new pane_transition_slide_1.PaneTransitionSlide(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.LeftDown);
                        t.start();
                    }
                    break;
                case 'slideright':
                    {
                        var t = new pane_transition_slide_1.PaneTransitionSlide(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Right);
                        t.start();
                    }
                    break;
                case 'sliderightup':
                    {
                        var t = new pane_transition_slide_1.PaneTransitionSlide(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.RightUp);
                        t.start();
                    }
                    break;
                case 'sliderightdown':
                    {
                        var t = new pane_transition_slide_1.PaneTransitionSlide(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.RightDown);
                        t.start();
                    }
                    break;
                case 'slideup':
                    {
                        var t = new pane_transition_slide_1.PaneTransitionSlide(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Up);
                        t.start();
                    }
                    break;
                case 'slidedown':
                    {
                        var t = new pane_transition_slide_1.PaneTransitionSlide(this, newChild, callback, duration, pane_transition_direction_1.PaneTransitionDirection.Down);
                        t.start();
                    }
                    break;
                default:
                    {
                        var t = new pane_transition_none_1.PaneTransitionNone(this, newChild, callback);
                        t.start();
                    }
                    break;
            }
        }
        else {
            var t = new pane_transition_none_1.PaneTransitionNone(this, newChild, callback);
            t.start();
        }
        /*
        let self = this;
        let oldChild = self.childSurface;
        oldChild.resourceListenerEvent.clear();
        self.childSurface = newChild;
        newChild.scale = self.surface.scale;
        newChild.isChild = true;
        self.childSurface.bind(self.element, function (model) {
            oldChild.unbind();
            self.isPrepared = true;
            self.setHostDivScrolling();
            if (callback) {
                callback(self);
            }
        });
        */
    };
    /**
     * Unloads child surface element
     */
    SurfacePane.prototype.destroy = function () {
        if (this.childSurface) {
            this.childSurface.unbind();
        }
        if (this.element && this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
            this.element = undefined;
        }
        this.surface = undefined;
    };
    /**
     * Sets rendering scale
     */
    SurfacePane.prototype.setScale = function (scale) {
        if (!this.element || !scale) {
            return this;
        }
        var hostDiv = this.element;
        hostDiv.style.left = this.translateX + this.left * scale + 'px';
        hostDiv.style.top = this.translateY + this.top * scale + 'px';
        hostDiv.style.width = this.width * scale + 'px';
        hostDiv.style.height = this.height * scale + 'px';
        if (this.childSurface) {
            this.childSurface.scale = scale;
        }
        return this;
    };
    /**
     * Sets rendering opacity
     */
    SurfacePane.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        if (this.element && this.surface) {
            this.element.style.opacity = (this.surface.opacity * this.opacity).toString();
        }
        return this;
    };
    /**
     * Sets X translation
     */
    SurfacePane.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        if (this.element && this.surface) {
            this.element.style.left = (this.translateX + this.left) * this.surface.scale + 'px';
        }
        return this;
    };
    /**
     * Sets Y translation
     */
    SurfacePane.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        if (this.element && this.surface) {
            this.element.style.top = (this.translateY + this.top) * this.surface.scale + 'px';
        }
        return this;
    };
    SurfacePane.prototype.addTo = function (surface) {
        surface.layers.push(this);
        return this;
    };
    return SurfacePane;
}(surface_layer_1.SurfaceLayer));
exports.SurfacePane = SurfacePane;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var element_command_handler_1 = __webpack_require__(26);
var common_event_1 = __webpack_require__(6);
var error_messages_1 = __webpack_require__(0);
var model_1 = __webpack_require__(4);
var sprite_element_1 = __webpack_require__(17);
var sprite_frame_1 = __webpack_require__(22);
var bitmap_resource_1 = __webpack_require__(19);
var surface_element_states_1 = __webpack_require__(38);
var surface_layer_1 = __webpack_require__(12);
var surface_radio_item_sprite_element_1 = __webpack_require__(100);
var surface_radio_item_text_element_1 = __webpack_require__(101);
var surface_radio_strip_item_1 = __webpack_require__(102);
var surface_radio_strip_selection_args_1 = __webpack_require__(103);
var surface_radio_strip_view_controller_1 = __webpack_require__(104);
/**
 * Orientation of radio strip
 */
var RadioStripOrientation;
(function (RadioStripOrientation) {
    RadioStripOrientation[RadioStripOrientation["Horizontal"] = 0] = "Horizontal";
    RadioStripOrientation[RadioStripOrientation["Vertical"] = 1] = "Vertical";
})(RadioStripOrientation = exports.RadioStripOrientation || (exports.RadioStripOrientation = {}));
/**
 * Scrollable list of radio button items derived from surface image templates
 */
var SurfaceRadioStrip = /** @class */ (function (_super) {
    __extends(SurfaceRadioStrip, _super);
    /**
     * @param id - Radio strip id
     * @param arealeft - Strip area x coordinate
     * @param areaTop - Strip area y coordinate
     * @param areaWidth - Strip area width
     * @param areaHeight - Strip area height
     * @param buttonLeft - Button template area x coordinate
     * @param buttonTop - Button template area y coordinate
     * @param buttonWidth - Button template area width
     * @param buttonHeight - Button template area height
     * @param itemSelectedListener - Item selected listener
     */
    function SurfaceRadioStrip(id, areaLeft, areaTop, areaWidth, areaHeight, buttonLeft, buttonTop, buttonWidth, buttonHeight, itemSelectedListener) {
        var _this = _super.call(this, id, areaLeft, areaTop, areaWidth, areaHeight) || this;
        /**
         * Strip orientation - Default = horizontal
         */
        _this.orientation = RadioStripOrientation.Horizontal;
        /**
         * Strip item selection event (strip: RadioStrip, item: RadioStripItem)
         */
        _this.itemSelected = new common_event_1.CommonEvent();
        /**
         * Array of radio strip items
         */
        _this.items = [];
        _this.addItem = _this.addItem.bind(_this);
        _this.removeItem = _this.removeItem.bind(_this);
        _this.itemWithId = _this.itemWithId.bind(_this);
        _this.selectItem = _this.selectItem.bind(_this);
        _this.selectedItemIndex = _this.selectedItemIndex.bind(_this);
        _this.scrollTo = _this.scrollTo.bind(_this);
        _this.refreshModel = _this.refreshModel.bind(_this);
        _this.stripDown = _this.stripDown.bind(_this);
        _this.stripMoved = _this.stripMoved.bind(_this);
        _this.setOffset = _this.setOffset.bind(_this);
        _this.moveStart = _this.moveStart.bind(_this);
        _this.moveEnd = _this.moveEnd.bind(_this);
        _this.moveBack = _this.moveBack.bind(_this);
        _this.moveForward = _this.moveForward.bind(_this);
        _this.onRadioButtonDown = _this.onRadioButtonDown.bind(_this);
        _this.onRadioButtonUp = _this.onRadioButtonUp.bind(_this);
        _this.onRadioButtonClicked = _this.onRadioButtonClicked.bind(_this);
        _this.normalIndex = 0;
        _this.selectedIndex = 0;
        _this.highlightedIndex = 0;
        _this.normalColor = 'Black';
        _this.highlightedColor = 'Black';
        _this.selectedColor = 'Black';
        _this.textAlignment = 'center,middle';
        _this.typeFace = 'sans-serif';
        _this.typeSize = 12;
        _this.typeStyle = '';
        _this.padding = 0;
        _this.buttonLeft = buttonLeft;
        _this.buttonTop = buttonTop;
        _this.buttonWidth = buttonWidth;
        _this.buttonHeight = buttonHeight;
        if (itemSelectedListener) {
            _this.itemSelected.add(itemSelectedListener);
        }
        return _this;
    }
    /**
     * Creates a radio button strip
     * @param id - Radio strip id
     * @param arealeft - Strip area x coordinate
     * @param areaTop - Strip area y coordinate
     * @param areaWidth - Strip area width
     * @param areaHeight - Strip area height
     * @param buttonLeft - Button template area x coordinate
     * @param buttonTop - Button template area y coordinate
     * @param buttonWidth - Button template area width
     * @param buttonHeight - Button template area height
     * @param itemSelectedListener - Item selected listener
     * @returns New radio strip layer
     */
    SurfaceRadioStrip.create = function (id, areaLeft, areaTop, areaWidth, areaHeight, buttonLeft, buttonTop, buttonWidth, buttonHeight, itemSelectedListener) {
        var layer = new SurfaceRadioStrip(id, areaLeft, areaTop, areaWidth, areaHeight, buttonLeft, buttonTop, buttonWidth, buttonHeight, itemSelectedListener);
        return layer;
    };
    /**
     * Adds a new strip item
     * @param id - Item id
     * @param text - Item text
     */
    SurfaceRadioStrip.prototype.addItem = function (id, text) {
        var item = new surface_radio_strip_item_1.SurfaceRadioStripItem(id, text);
        this.items.push(item);
        if (this.controller) {
            this.refreshModel();
        }
    };
    /**
     * Removes a strip item
     * @param id - Item id
     */
    SurfaceRadioStrip.prototype.removeItem = function (id) {
        var item = this.itemWithId(id);
        var index;
        if (item !== undefined) {
            index = this.items.indexOf(item);
            this.items.splice(index, 1);
            if (this.controller) {
                this.refreshModel();
            }
        }
    };
    /**
     * Retrieves a strip item by its id
     * @param id - Item id
     * @returns Radio strip item with id or undefined if not found
     */
    SurfaceRadioStrip.prototype.itemWithId = function (id) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                return item;
            }
        }
        return undefined;
    };
    /**
     * Selects a strip item by its id
     * @param id - Item id to select
     * @param inhibitEvent - True to inhibit select event
     */
    SurfaceRadioStrip.prototype.selectItem = function (id, inhibitEvent) {
        var self = this;
        var item = self.itemWithId(id);
        if (!item) {
            return;
        }
        if (!item.isSelected) {
            self.items.forEach(function (radioItem) {
                if (radioItem.id === item.id) {
                    radioItem.isSelected = true;
                    if (radioItem.spriteElement) {
                        radioItem.spriteElement.frameIndex = self.selectedIndex;
                    }
                    if (radioItem.textElement) {
                        radioItem.textElement.setFill(self.selectedColor);
                    }
                }
                else {
                    radioItem.isSelected = false;
                    if (radioItem.spriteElement) {
                        radioItem.spriteElement.frameIndex = self.normalIndex;
                    }
                    if (radioItem.textElement) {
                        radioItem.textElement.setFill(self.normalColor);
                    }
                }
            });
        }
        if (arguments.length === 1 || !inhibitEvent) {
            if (self.itemSelected.hasListeners()) {
                self.itemSelected.trigger(new surface_radio_strip_selection_args_1.SurfaceRadioStripSelectionArgs(self, item));
            }
        }
        if (self.controller) {
            self.controller.draw();
        }
    };
    /**
     * Retrieves index of selected item or -1 if no item selected
     * @returns Zero based index of selected item or -1 if no item selected
     */
    SurfaceRadioStrip.prototype.selectedItemIndex = function () {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].isSelected) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Scrolls strip to specified offset
     * @param offset - Target scroll offset
     */
    SurfaceRadioStrip.prototype.scrollTo = function (offset) {
        var self = this;
        var currentOffset;
        if (!self.controller) {
            return;
        }
        if (self.orientation === RadioStripOrientation.Horizontal) {
            currentOffset = self.controller.offsetX;
        }
        else {
            currentOffset = self.controller.offsetY;
        }
        if (currentOffset === offset) {
            return;
        }
        if (offset < 0) {
            offset = 0;
        }
        if (self.maxOffset !== undefined && offset > self.maxOffset) {
            offset = self.maxOffset;
        }
        var increment = (offset - currentOffset) / 15;
        if (self.scrollTimer) {
            clearInterval(self.scrollTimer);
        }
        self.scrollTimer = setInterval(function () {
            if (!self.controller) {
                return;
            }
            if (self.orientation === RadioStripOrientation.Horizontal) {
                self.controller.offsetX = self.controller.offsetX + increment;
                if (increment < 0 && self.controller.offsetX <= offset) {
                    self.controller.offsetX = offset;
                    if (self.scrollTimer) {
                        clearInterval(self.scrollTimer);
                        self.scrollTimer = undefined;
                    }
                }
                else if (increment > 0 && self.controller.offsetX >= offset) {
                    self.controller.offsetX = offset;
                    if (self.scrollTimer) {
                        clearInterval(self.scrollTimer);
                        self.scrollTimer = undefined;
                    }
                }
            }
            else {
                self.controller.offsetY = self.controller.offsetY + increment;
                if (increment < 0 && self.controller.offsetY <= offset) {
                    self.controller.offsetY = offset;
                    if (self.scrollTimer) {
                        clearInterval(self.scrollTimer);
                        self.scrollTimer = undefined;
                    }
                }
                else if (increment > 0 && self.controller.offsetY >= offset) {
                    self.controller.offsetY = offset;
                    if (self.scrollTimer) {
                        clearInterval(self.scrollTimer);
                        self.scrollTimer = undefined;
                    }
                }
            }
            self.controller.draw();
        }, 15);
    };
    /**
     * Ensures item with a given id is scrolled into view
     * @param id - Item id to ensure visible
     */
    SurfaceRadioStrip.prototype.ensureVisible = function (id) {
        var item = this.itemWithId(id);
        if (!item || !this.controller) {
            return;
        }
        var index = this.items.indexOf(item);
        if (this.orientation === RadioStripOrientation.Horizontal) {
            var buttonLeft = index * this.buttonWidth;
            var buttonRight = buttonLeft + this.buttonWidth;
            if (index < this.items.length - 1 && this.width >= this.buttonWidth * 2) {
                buttonRight += this.buttonWidth;
            }
            if (index > 0 && this.width >= this.buttonWidth * 3) {
                buttonLeft -= this.buttonWidth;
            }
            var offset = this.controller.offsetX;
            var viewPortLeft = offset;
            var viewPortRight = offset + this.width;
            if (buttonLeft >= viewPortLeft && buttonRight <= viewPortRight) {
                return;
            }
            if (buttonLeft < viewPortLeft) {
                offset = buttonLeft;
            }
            else if (buttonRight > viewPortRight) {
                offset = buttonRight - this.width;
            }
            this.scrollTo(offset);
        }
        else {
            var buttonTop = index * this.buttonHeight;
            var buttonBottom = buttonTop + this.buttonHeight;
            if (index < this.items.length - 1 && this.height >= this.buttonHeight * 2) {
                buttonBottom += this.buttonHeight;
            }
            if (index > 0 && this.height >= this.buttonHeight * 3) {
                buttonTop -= this.buttonHeight;
            }
            var offset = this.controller.offsetY;
            var viewPortTop = offset;
            var viewPortBottom = offset + this.height;
            if (buttonTop >= viewPortTop && buttonBottom <= viewPortBottom) {
                return;
            }
            if (buttonTop < viewPortTop) {
                offset = buttonTop;
            }
            else if (buttonBottom > viewPortBottom) {
                offset = buttonBottom - this.height;
            }
            this.scrollTo(offset);
        }
    };
    /**
     * Adds radio strip to parent surface
     * @param surface - Parent surface
     */
    SurfaceRadioStrip.prototype.addToSurface = function (surface) {
        this.surface = surface;
        // If no normal image, throw error
        if (!surface.normalImageSource) {
            throw new Error(error_messages_1.ErrorMessages.NormalImageSourceUndefined);
        }
        // Create model
        var model = model_1.Model.create(this.width, this.height);
        this.model = model;
        // Add defined image resources
        var frameCount = 0;
        if (surface.normalImageSource) {
            bitmap_resource_1.BitmapResource.create(surface_element_states_1.SurfaceElementStates.NORMAL, surface.normalImageSource).addTo(model);
            frameCount++;
        }
        if (surface.selectedImageSource) {
            this.selectedIndex = frameCount;
            frameCount++;
            bitmap_resource_1.BitmapResource.create(surface_element_states_1.SurfaceElementStates.SELECTED, surface.selectedImageSource).addTo(model);
        }
        if (surface.highlightedImageSource) {
            this.highlightedIndex = frameCount;
            if (this.selectedIndex === this.normalIndex) {
                this.selectedIndex = this.highlightedIndex;
            }
            frameCount++;
            bitmap_resource_1.BitmapResource.create(surface_element_states_1.SurfaceElementStates.HIGHLIGHTED, surface.highlightedImageSource).addTo(model);
        }
        // Add static image from background area
        var background = sprite_element_1.SpriteElement.create(0, 0, this.width, this.height);
        background.interactive = false;
        background.frames = [];
        background.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.NORMAL, this.left, this.top, this.width, this.height, 0, 'none', 0));
        if (surface.selectedImageSource) {
            background.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.SELECTED, this.left, this.top, this.width, this.height, 0, 'none', 0));
        }
        if (surface.highlightedImageSource) {
            background.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.HIGHLIGHTED, this.left, this.top, this.width, this.height, 0, 'none', 0));
        }
        model.add(background);
        // Add button items
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var sprite = void 0;
            if (this.orientation === RadioStripOrientation.Horizontal) {
                sprite = new surface_radio_item_sprite_element_1.SurfaceRadioItemSpriteElement(this.id, item.id, i * this.buttonWidth, 0, this.buttonWidth, this.buttonHeight);
            }
            else {
                sprite = new surface_radio_item_sprite_element_1.SurfaceRadioItemSpriteElement(this.id, item.id, 0, i * this.buttonHeight, this.buttonWidth, this.buttonHeight);
            }
            sprite.frames = [];
            sprite.id = item.id + '_sprite';
            item.spriteElement = sprite;
            sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.NORMAL, this.buttonLeft, this.buttonTop, this.buttonWidth, this.buttonHeight, 0, 'none', 0));
            if (surface.selectedImageSource) {
                sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.SELECTED, this.buttonLeft, this.buttonTop, this.buttonWidth, this.buttonHeight, 0, 'none', 0));
            }
            if (surface.highlightedImageSource) {
                sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.HIGHLIGHTED, this.buttonLeft, this.buttonTop, this.buttonWidth, this.buttonHeight, 0, 'none', 0));
            }
            if (this.highlightedIndex !== this.normalIndex) {
                sprite.mouseDown = 'radioButtonDown(' + this.highlightedIndex + ')';
                sprite.mouseUp = 'radioButtonUp()';
            }
            else if (this.selectedIndex !== this.normalIndex) {
                sprite.mouseDown = 'radioButtonDown(' + this.selectedIndex + ')';
                sprite.mouseUp = 'radioButtonUp()';
            }
            else {
                sprite.mouseDown = 'radioButtonDown(' + this.normalIndex + ')';
                sprite.mouseUp = 'radioButtonUp()';
            }
            sprite.click = 'radioButtonClick';
            sprite.interactive = true;
            model.add(sprite);
            var text = void 0;
            if (this.orientation === RadioStripOrientation.Horizontal) {
                text = new surface_radio_item_text_element_1.SurfaceRadioItemTextElement(this.id, item.id, item.text, i * this.buttonWidth, 0, this.buttonWidth, this.buttonHeight).setFill(this.normalColor);
            }
            else {
                text = new surface_radio_item_text_element_1.SurfaceRadioItemTextElement(this.id, item.id, item.text, 0, i * this.buttonHeight, this.buttonWidth, this.buttonHeight).setFill(this.normalColor);
            }
            text.id = item.id + '_text';
            text.alignment = this.textAlignment;
            text.typeface = this.typeFace;
            text.typestyle = this.typeStyle;
            text.typesize = this.typeSize;
            text.interactive = false;
            item.textElement = text;
            model.add(text);
        }
        var controller = new surface_radio_strip_view_controller_1.SurfaceRadioStripViewController();
        controller.eventDelay = 150;
        controller.mouseDownView.add(this.stripDown);
        controller.mouseMovedView.add(this.stripMoved);
        this.controller = controller;
        controller.strip = this;
        controller.setScale(surface.scale);
        controller.setModel(this.model);
        var canvas = controller.getCanvas();
        canvas.setAttribute('id', this.id + '_canvas');
        canvas.style.position = 'absolute';
        canvas.style.left = this.translateX + this.left * surface.scale + 'px';
        canvas.style.top = this.translateY + this.top * surface.scale + 'px';
        canvas.style.opacity = (this.surface.opacity * this.opacity).toString();
        var maxOffset;
        if (this.orientation === RadioStripOrientation.Horizontal) {
            maxOffset = this.items.length * this.buttonWidth - this.width;
        }
        else {
            maxOffset = this.items.length * this.buttonHeight - this.height;
        }
        if (maxOffset < 0) {
            maxOffset = 0;
        }
        this.maxOffset = maxOffset;
        this.element = canvas;
    };
    /**
     * Refreshes the drawing model for updated items
     */
    SurfaceRadioStrip.prototype.refreshModel = function () {
        var model = this.model;
        if (!model) {
            throw new Error(error_messages_1.ErrorMessages.ModelUndefined);
        }
        if (!this.controller) {
            throw new Error(error_messages_1.ErrorMessages.ControllerIsUndefined);
        }
        var surface = this.surface;
        if (!surface) {
            return;
        }
        // Remove elements for items
        for (var _i = 0, _a = model.elements; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el instanceof surface_radio_item_sprite_element_1.SurfaceRadioItemSpriteElement || el instanceof surface_radio_item_text_element_1.SurfaceRadioItemTextElement) {
                if (el.itemId) {
                    model.remove(el);
                }
            }
        }
        // Add button items
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var sprite = void 0;
            if (this.orientation === RadioStripOrientation.Horizontal) {
                sprite = new surface_radio_item_sprite_element_1.SurfaceRadioItemSpriteElement(this.id, item.id, i * this.buttonWidth, 0, this.buttonWidth, this.buttonHeight);
            }
            else {
                sprite = new surface_radio_item_sprite_element_1.SurfaceRadioItemSpriteElement(this.id, item.id, 0, i * this.buttonHeight, this.buttonWidth, this.buttonHeight);
            }
            item.spriteElement = sprite;
            sprite.interactive = true;
            sprite.id = item.id + '_sprite';
            sprite.groupId = this.id;
            sprite.itemId = item.id;
            sprite.frames = [];
            sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.NORMAL, this.buttonLeft, this.buttonTop, this.buttonWidth, this.buttonHeight, 0, 'none', 0));
            if (surface.selectedImageSource) {
                sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.SELECTED, this.buttonLeft, this.buttonTop, this.buttonWidth, this.buttonHeight, 0, 'none', 0));
            }
            if (surface.highlightedImageSource) {
                sprite.frames.push(sprite_frame_1.SpriteFrame.create(surface_element_states_1.SurfaceElementStates.HIGHLIGHTED, this.buttonLeft, this.buttonTop, this.buttonWidth, this.buttonHeight, 0, 'none', 0));
            }
            if (this.highlightedIndex !== this.normalIndex) {
                sprite.mouseDown = 'radioButtonDown(' + this.highlightedIndex + ')';
                sprite.mouseUp = 'radioButtonUp()';
            }
            else if (this.selectedIndex !== this.normalIndex) {
                sprite.mouseDown = 'radioButtonDown(' + this.selectedIndex + ')';
                sprite.mouseUp = 'radioButtonUp()';
            }
            else {
                sprite.mouseDown = 'radioButtonDown(' + this.normalIndex + ')';
                sprite.mouseUp = 'radioButtonUp()';
            }
            sprite.click = 'radioButtonClick';
            sprite.interactive = true;
            model.add(sprite);
            var text = void 0;
            if (this.orientation === RadioStripOrientation.Horizontal) {
                text = new surface_radio_item_text_element_1.SurfaceRadioItemTextElement(this.id, item.id, item.text, i * this.buttonWidth, 0, this.buttonWidth, this.buttonHeight);
            }
            else {
                text = new surface_radio_item_text_element_1.SurfaceRadioItemTextElement(this.id, item.id, item.text, 0, i * this.buttonHeight, this.buttonWidth, this.buttonHeight);
            }
            text.setFill(this.normalColor);
            item.textElement = text;
            text.interactive = false;
            text.id = item.id + '_text';
            text.itemId = item.id;
            text.alignment = this.textAlignment;
            text.typeface = this.typeFace;
            text.typesize = this.typeSize;
            model.add(text);
        }
        var maxOffset;
        if (this.orientation === RadioStripOrientation.Horizontal) {
            maxOffset = this.items.length * this.buttonWidth - this.width;
        }
        else {
            maxOffset = this.items.length * this.buttonHeight - this.height;
        }
        if (maxOffset < 0) {
            maxOffset = 0;
        }
        this.maxOffset = maxOffset;
        if (this.orientation === RadioStripOrientation.Horizontal) {
            if (this.controller.offsetX > this.maxOffset) {
                this.controller.offsetX = this.maxOffset;
            }
        }
        else {
            if (this.controller.offsetY > this.maxOffset) {
                this.controller.offsetY = this.maxOffset;
            }
        }
        this.controller.draw();
    };
    /**
     * Handles radio strip mouse down event
     * @param c - Strip view controller
     * @param args - Strip mouse down point info
     */
    SurfaceRadioStrip.prototype.stripDown = function (controller, args) {
        var c = controller;
        if (!c.strip || !args.point) {
            return;
        }
        if (c.strip.orientation === RadioStripOrientation.Horizontal) {
            c.strip.downOffset = c.offsetX;
            c.strip.downPosition = args.point.x;
        }
        else {
            c.strip.downOffset = c.offsetY;
            c.strip.downPosition = args.point.y;
        }
    };
    /**
     * Handles radio strip mouse move event
     * @param c - Strip view controller
     * @param args - Strip mouse move point info
     */
    SurfaceRadioStrip.prototype.stripMoved = function (controller, args) {
        var c = controller;
        if (!c.strip || !args.point || !c.strip.downPosition || !c.strip.downOffset || !c.strip.maxOffset) {
            return;
        }
        if (c.isMouseDown) {
            if (c.strip.orientation === RadioStripOrientation.Horizontal) {
                var deltaX = args.point.x - c.strip.downPosition;
                deltaX /= c.scale;
                var offset = c.strip.downOffset - deltaX;
                if (offset < 0) {
                    c.strip.scrollTo(0);
                }
                else if (offset <= c.strip.maxOffset) {
                    c.strip.scrollTo(offset);
                }
            }
            else {
                var deltaY = args.point.y - c.strip.downPosition;
                deltaY /= c.scale;
                var offset = c.strip.downOffset - deltaY;
                if (offset < 0) {
                    c.strip.scrollTo(0);
                }
                else if (offset <= c.strip.maxOffset) {
                    c.strip.scrollTo(offset);
                }
            }
        }
    };
    /**
     * Sets scroll offset
     * @param offset - Scroll offset
     */
    SurfaceRadioStrip.prototype.setOffset = function (offset) {
        if (!this.controller || !this.controller.offsetX || !this.maxOffset) {
            return;
        }
        if (this.orientation === RadioStripOrientation.Horizontal) {
            if (offset === this.controller.offsetX) {
                return;
            }
            if (offset > this.maxOffset) {
                this.controller.offsetX = this.maxOffset;
            }
            else if (offset >= 0) {
                this.controller.offsetX = offset;
            }
        }
        else {
            if (offset === this.controller.offsetY) {
                return;
            }
            if (offset > this.maxOffset) {
                this.controller.offsetY = this.maxOffset;
            }
            else if (offset >= 0) {
                this.controller.offsetY = offset;
            }
        }
        this.controller.draw();
    };
    /**
     * Scrolls to start
     */
    SurfaceRadioStrip.prototype.moveStart = function () {
        this.scrollTo(0);
    };
    /**
     * Scrolls to end
     */
    SurfaceRadioStrip.prototype.moveEnd = function () {
        if (this.maxOffset) {
            this.scrollTo(this.maxOffset);
        }
    };
    /**
     * Scrolls toward the beginning by one item
     */
    SurfaceRadioStrip.prototype.moveBack = function () {
        if (!this.controller) {
            return;
        }
        if (this.orientation === RadioStripOrientation.Horizontal) {
            var offset = this.controller.offsetX;
            this.scrollTo(offset - this.buttonWidth);
        }
        else {
            var offset = this.controller.offsetY;
            this.scrollTo(offset - this.buttonHeight);
        }
    };
    /**
     * Scrolls toward the end by one item
     */
    SurfaceRadioStrip.prototype.moveForward = function () {
        if (!this.controller) {
            return;
        }
        if (this.orientation === RadioStripOrientation.Horizontal) {
            var offset = this.controller.offsetX;
            this.scrollTo(offset + this.buttonWidth);
        }
        else {
            var offset = this.controller.offsetY;
            this.scrollTo(offset + this.buttonHeight);
        }
    };
    /**
     * Loads required resource and calls completion callback
     * @param callback - Completion callback (success: boolean)
     */
    SurfaceRadioStrip.prototype.prepare = function (callback) {
        var self = this;
        if (!self.controller || !self.element || !self.surface || !self.surface.div) {
            return;
        }
        // let parentElement = document.getElementById(self.surface.hostDivId);
        // parentElement.appendChild(self.element);
        self.surface.div.appendChild(self.element);
        self.controller.surface = self.surface;
        var commandHandler = new element_command_handler_1.ElementCommandHandler();
        commandHandler.attachController(self.controller);
        commandHandler.addHandler(SurfaceRadioStrip.RADIO_BUTTON_CLICK, function (controller, element, command, trigger, parameters) {
            var radioStripController = controller;
            var radioStrip = radioStripController.strip;
            var radioStripSpriteElement = element;
            if (radioStrip) {
                radioStrip.onRadioButtonClicked(radioStripSpriteElement.itemId);
            }
        });
        commandHandler.addHandler(SurfaceRadioStrip.RADIO_BUTTON_DOWN, function (controller, element, command, trigger, parameters) {
            var radioStripController = controller;
            var radioStrip = radioStripController.strip;
            var radioStripSpriteElement = element;
            if (radioStrip) {
                radioStrip.onRadioButtonDown(radioStripSpriteElement.itemId);
            }
        });
        commandHandler.addHandler(SurfaceRadioStrip.RADIO_BUTTON_UP, function (controller, element, command, trigger, parameters) {
            var radioStripController = controller;
            var radioStrip = radioStripController.strip;
            var radioStripSpriteElement = element;
            if (radioStrip) {
                radioStrip.onRadioButtonUp(radioStripSpriteElement.itemId);
            }
        });
        if (!self.model) {
            return;
        }
        if (self.surface.resourceListenerEvent.hasListeners()) {
            self.surface.resourceListenerEvent.listeners.forEach(function (listener) {
                if (!self.model) {
                    return;
                }
                self.model.resourceManager.listenerEvent.add(listener);
            });
        }
        self.model.prepareResources(undefined, function (success) {
            if (!self.surface) {
                throw new Error(error_messages_1.ErrorMessages.SurfaceIsUndefined);
            }
            if (success) {
                self.isPrepared = true;
                if (self.controller) {
                    self.controller.draw();
                }
                if (callback) {
                    callback(true);
                }
            }
            else {
                self.surface.onErrorInternal(error_messages_1.ErrorMessages.ResourcesFailedToLoad);
                if (callback) {
                    callback(false);
                }
            }
        });
    };
    /**
     * Detaches surface and destroys visual elements
     */
    SurfaceRadioStrip.prototype.destroy = function () {
        if (this.controller) {
            this.controller.detach();
        }
        if (this.element) {
            this.element = undefined;
        }
        this.surface = undefined;
    };
    /**
     * Onload initialization
     */
    SurfaceRadioStrip.prototype.onload = function () {
        return;
    };
    /**
     * Onunload teardown
     */
    SurfaceRadioStrip.prototype.onunload = function () {
        return;
    };
    /**
     * Sets rendering scale
     */
    SurfaceRadioStrip.prototype.setScale = function (scale) {
        if (this.controller) {
            this.controller.setScale(scale);
        }
        if (!this.element) {
            return this;
        }
        var canvas = this.element;
        canvas.style.left = this.translateX + this.left * scale + 'px';
        canvas.style.top = this.translateY + this.top * scale + 'px';
        canvas.style.width = this.width * scale + 'px';
        canvas.style.height = this.height * scale + 'px';
        return this;
    };
    /**
     * Sets rendering opacity
     */
    SurfaceRadioStrip.prototype.setOpacity = function (opacity) {
        this.opacity = opacity;
        if (this.element && this.surface) {
            this.element.style.opacity = (this.surface.opacity * this.opacity).toString();
        }
        return this;
    };
    /**
     * Sets X translation
     */
    SurfaceRadioStrip.prototype.setTranslateX = function (translateX) {
        this.translateX = translateX;
        if (this.element && this.surface) {
            this.element.style.left = (this.translateX + this.left) * this.surface.scale + 'px';
        }
        return this;
    };
    /**
     * Sets Y translation
     */
    SurfaceRadioStrip.prototype.setTranslateY = function (translateY) {
        this.translateY = translateY;
        if (this.element && this.surface) {
            this.element.style.top = (this.translateY + this.top) * this.surface.scale + 'px';
        }
        return this;
    };
    SurfaceRadioStrip.prototype.onRadioButtonDown = function (itemId) {
        var item = this.itemWithId(itemId);
        if (!item || !this.controller) {
            return;
        }
        if (item.textElement) {
            item.textElement.setFill(this.highlightedColor);
        }
        var element = item.spriteElement;
        if (!element) {
            return;
        }
        if (!element.frameStack) {
            element.frameStack = [];
        }
        element.frameStack.push(element.frameIndex);
        element.frameIndex = this.highlightedIndex;
        this.controller.draw();
    };
    SurfaceRadioStrip.prototype.onRadioButtonUp = function (itemId) {
        var item = this.itemWithId(itemId);
        if (!item || !this.controller) {
            return;
        }
        if (item.textElement) {
            if (item.isSelected) {
                item.textElement.setFill(this.selectedColor);
            }
            else {
                item.textElement.setFill(this.normalColor);
            }
        }
        var element = item.spriteElement;
        if (!element) {
            return;
        }
        if (element.frameStack) {
            if (element.frameStack.length > 0) {
                var index = element.frameStack.pop();
                if (index !== undefined) {
                    element.frameIndex = index;
                }
            }
            if (element.frameStack.length === 0) {
                element.frameStack = undefined;
            }
        }
        this.controller.draw();
    };
    SurfaceRadioStrip.prototype.onRadioButtonClicked = function (itemId) {
        var item = this.itemWithId(itemId);
        var self = this;
        if (!item || !self.controller) {
            return;
        }
        if (!item.isSelected) {
            self.items.forEach(function (radioItem) {
                if (radioItem.id === item.id) {
                    radioItem.isSelected = true;
                    if (radioItem.spriteElement) {
                        radioItem.spriteElement.frameIndex = self.selectedIndex;
                    }
                    if (radioItem.textElement) {
                        radioItem.textElement.setFill(self.selectedColor);
                    }
                }
                else {
                    radioItem.isSelected = false;
                    if (radioItem.spriteElement) {
                        radioItem.spriteElement.frameIndex = self.normalIndex;
                    }
                    if (radioItem.textElement) {
                        radioItem.textElement.setFill(self.normalColor);
                    }
                }
            });
        }
        if (self.itemSelected.hasListeners()) {
            self.itemSelected.trigger(new surface_radio_strip_selection_args_1.SurfaceRadioStripSelectionArgs(self, item));
        }
        self.controller.draw();
        self.ensureVisible(itemId);
    };
    SurfaceRadioStrip.prototype.addTo = function (surface) {
        surface.layers.push(this);
        return this;
    };
    SurfaceRadioStrip.RADIO_BUTTON_DOWN = 'radioButtonDown';
    SurfaceRadioStrip.RADIO_BUTTON_UP = 'radioButtonUp';
    SurfaceRadioStrip.RADIO_BUTTON_CLICK = 'radioButtonClick';
    return SurfaceRadioStrip;
}(surface_layer_1.SurfaceLayer));
exports.SurfaceRadioStrip = SurfaceRadioStrip;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var command_event_trigger_1 = __webpack_require__(53);
var element_command_1 = __webpack_require__(39);
var element_command_handler_1 = __webpack_require__(26);
var element_command_handler_registration_1 = __webpack_require__(54);
var controller_event_1 = __webpack_require__(40);
var controller_event_args_1 = __webpack_require__(55);
var color_1 = __webpack_require__(10);
var common_event_1 = __webpack_require__(6);
var error_messages_1 = __webpack_require__(0);
var location_args_1 = __webpack_require__(41);
var logging_1 = __webpack_require__(42);
var matrix_2d_1 = __webpack_require__(105);
var model_1 = __webpack_require__(4);
var model_event_1 = __webpack_require__(65);
var mouse_event_args_1 = __webpack_require__(24);
var mouse_location_args_1 = __webpack_require__(66);
var mouse_position_info_1 = __webpack_require__(67);
var named_color_1 = __webpack_require__(56);
var point_1 = __webpack_require__(1);
var point_depth_1 = __webpack_require__(16);
var point_event_parameters_1 = __webpack_require__(48);
var region_1 = __webpack_require__(7);
var scaling_info_1 = __webpack_require__(47);
var size_1 = __webpack_require__(2);
var size_args_1 = __webpack_require__(68);
var stroke_info_1 = __webpack_require__(106);
var timer_parameters_1 = __webpack_require__(69);
var utility_1 = __webpack_require__(5);
var view_drag_args_1 = __webpack_require__(70);
var winding_mode_1 = __webpack_require__(31);
var component_1 = __webpack_require__(33);
var component_element_1 = __webpack_require__(25);
var component_event_1 = __webpack_require__(49);
var component_props_1 = __webpack_require__(34);
var component_registry_1 = __webpack_require__(74);
var generic_component_props_1 = __webpack_require__(107);
var html_component_props_1 = __webpack_require__(108);
var image_based_component_props_1 = __webpack_require__(50);
var navigate_component_props_1 = __webpack_require__(109);
var progress_rectangle_1 = __webpack_require__(76);
var upload_component_props_1 = __webpack_require__(75);
var design_tool_1 = __webpack_require__(9);
var ellipse_tool_1 = __webpack_require__(110);
var image_element_tool_1 = __webpack_require__(111);
var line_tool_1 = __webpack_require__(112);
var model_element_tool_1 = __webpack_require__(113);
var pen_tool_1 = __webpack_require__(114);
var polygon_tool_1 = __webpack_require__(115);
var polyline_tool_1 = __webpack_require__(116);
var rectangle_tool_1 = __webpack_require__(117);
var text_tool_1 = __webpack_require__(118);
var design_controller_1 = __webpack_require__(119);
var design_renderer_1 = __webpack_require__(83);
var grid_type_1 = __webpack_require__(84);
var handle_1 = __webpack_require__(86);
var handle_factory_1 = __webpack_require__(85);
var handle_moved_args_1 = __webpack_require__(120);
var element_base_1 = __webpack_require__(3);
var element_creation_props_1 = __webpack_require__(71);
var element_creator_registration_1 = __webpack_require__(58);
var element_drag_args_1 = __webpack_require__(77);
var element_factory_1 = __webpack_require__(57);
var element_location_args_1 = __webpack_require__(78);
var element_mouse_event_args_1 = __webpack_require__(121);
var element_size_args_1 = __webpack_require__(79);
var element_size_props_1 = __webpack_require__(80);
var ellipse_element_1 = __webpack_require__(44);
var image_element_1 = __webpack_require__(29);
var invalid_index_exception_1 = __webpack_require__(21);
var line_element_1 = __webpack_require__(15);
var model_element_1 = __webpack_require__(30);
var move_location_1 = __webpack_require__(81);
var path_element_1 = __webpack_require__(59);
var polygon_element_1 = __webpack_require__(45);
var polyline_element_1 = __webpack_require__(32);
var rectangle_element_1 = __webpack_require__(11);
var resize_size_1 = __webpack_require__(82);
var sprite_element_1 = __webpack_require__(17);
var sprite_frame_1 = __webpack_require__(22);
var sprite_state_1 = __webpack_require__(60);
var text_element_1 = __webpack_require__(23);
var upload_completion_props_1 = __webpack_require__(72);
var upload_progress_props_1 = __webpack_require__(73);
var fill_factory_1 = __webpack_require__(8);
var fill_info_1 = __webpack_require__(87);
var gradient_fill_stop_1 = __webpack_require__(43);
var linear_gradient_fill_1 = __webpack_require__(27);
var radial_gradient_fill_1 = __webpack_require__(28);
var bitmap_resource_1 = __webpack_require__(19);
var model_resource_1 = __webpack_require__(35);
var resource_1 = __webpack_require__(36);
var resource_creator_registration_1 = __webpack_require__(61);
var resource_factory_1 = __webpack_require__(18);
var resource_loader_state_1 = __webpack_require__(63);
var resource_manager_1 = __webpack_require__(62);
var resource_manager_event_1 = __webpack_require__(46);
var resource_state_1 = __webpack_require__(64);
var text_resource_1 = __webpack_require__(122);
var sketcher_1 = __webpack_require__(123);
var pane_transition_1 = __webpack_require__(13);
var pane_transition_direction_1 = __webpack_require__(20);
var pane_transition_fade_1 = __webpack_require__(88);
var pane_transition_none_1 = __webpack_require__(89);
var pane_transition_push_1 = __webpack_require__(90);
var pane_transition_reveal_1 = __webpack_require__(91);
var pane_transition_slide_1 = __webpack_require__(92);
var pane_transition_wipe_1 = __webpack_require__(93);
var surface_1 = __webpack_require__(124);
var surface_animation_frame_1 = __webpack_require__(98);
var surface_animation_layer_1 = __webpack_require__(125);
var surface_animation_view_controller_1 = __webpack_require__(99);
var surface_button_element_1 = __webpack_require__(94);
var surface_element_1 = __webpack_require__(37);
var surface_element_states_1 = __webpack_require__(38);
var surface_hidden_layer_1 = __webpack_require__(126);
var surface_html_layer_1 = __webpack_require__(127);
var surface_image_layer_1 = __webpack_require__(128);
var surface_layer_1 = __webpack_require__(12);
var surface_pane_1 = __webpack_require__(129);
var surface_radio_item_sprite_element_1 = __webpack_require__(100);
var surface_radio_item_text_element_1 = __webpack_require__(101);
var surface_radio_strip_1 = __webpack_require__(130);
var surface_radio_strip_item_1 = __webpack_require__(102);
var surface_radio_strip_selection_args_1 = __webpack_require__(103);
var surface_radio_strip_view_controller_1 = __webpack_require__(104);
var surface_text_element_1 = __webpack_require__(95);
var surface_video_layer_1 = __webpack_require__(96);
var surface_view_controller_1 = __webpack_require__(51);
var transitions_1 = __webpack_require__(14);
var view_controller_1 = __webpack_require__(52);
var view_renderer_1 = __webpack_require__(97);
// Exports
var command_event_trigger_2 = __webpack_require__(53);
exports.CommandEventTrigger = command_event_trigger_2.CommandEventTrigger;
var element_command_2 = __webpack_require__(39);
exports.ElementCommand = element_command_2.ElementCommand;
var element_command_handler_2 = __webpack_require__(26);
exports.ElementCommandHandler = element_command_handler_2.ElementCommandHandler;
var element_command_handler_registration_2 = __webpack_require__(54);
exports.ElementCommandHandlerRegistration = element_command_handler_registration_2.ElementCommandHandlerRegistration;
var controller_event_2 = __webpack_require__(40);
exports.ControllerEvent = controller_event_2.ControllerEvent;
var controller_event_args_2 = __webpack_require__(55);
exports.ControllerEventArgs = controller_event_args_2.ControllerEventArgs;
var color_2 = __webpack_require__(10);
exports.Color = color_2.Color;
var common_event_2 = __webpack_require__(6);
exports.CommonEvent = common_event_2.CommonEvent;
var error_messages_2 = __webpack_require__(0);
exports.ErrorMessages = error_messages_2.ErrorMessages;
var location_args_2 = __webpack_require__(41);
exports.LocationArgs = location_args_2.LocationArgs;
var logging_2 = __webpack_require__(42);
exports.Logging = logging_2.Logging;
var matrix_2d_2 = __webpack_require__(105);
exports.Matrix2D = matrix_2d_2.Matrix2D;
var model_2 = __webpack_require__(4);
exports.Model = model_2.Model;
var model_event_2 = __webpack_require__(65);
exports.ModelEvent = model_event_2.ModelEvent;
var mouse_event_args_2 = __webpack_require__(24);
exports.MouseEventArgs = mouse_event_args_2.MouseEventArgs;
var mouse_location_args_2 = __webpack_require__(66);
exports.MouseLocationArgs = mouse_location_args_2.MouseLocationArgs;
var mouse_position_info_2 = __webpack_require__(67);
exports.MousePositionInfo = mouse_position_info_2.MousePositionInfo;
var named_color_2 = __webpack_require__(56);
exports.NamedColor = named_color_2.NamedColor;
var point_2 = __webpack_require__(1);
exports.Point = point_2.Point;
var point_depth_2 = __webpack_require__(16);
exports.PointDepth = point_depth_2.PointDepth;
var point_event_parameters_2 = __webpack_require__(48);
exports.PointEventParameters = point_event_parameters_2.PointEventParameters;
var region_2 = __webpack_require__(7);
exports.Region = region_2.Region;
var scaling_info_2 = __webpack_require__(47);
exports.ScalingInfo = scaling_info_2.ScalingInfo;
var size_2 = __webpack_require__(2);
exports.Size = size_2.Size;
var size_args_2 = __webpack_require__(68);
exports.SizeArgs = size_args_2.SizeArgs;
var stroke_info_2 = __webpack_require__(106);
exports.StrokeInfo = stroke_info_2.StrokeInfo;
var timer_parameters_2 = __webpack_require__(69);
exports.TimerParameters = timer_parameters_2.TimerParameters;
var utility_2 = __webpack_require__(5);
exports.Utility = utility_2.Utility;
var view_drag_args_2 = __webpack_require__(70);
exports.ViewDragArgs = view_drag_args_2.ViewDragArgs;
var winding_mode_2 = __webpack_require__(31);
exports.WindingMode = winding_mode_2.WindingMode;
var component_2 = __webpack_require__(33);
exports.Component = component_2.Component;
var component_element_2 = __webpack_require__(25);
exports.ComponentElement = component_element_2.ComponentElement;
var component_event_2 = __webpack_require__(49);
exports.ComponentEvent = component_event_2.ComponentEvent;
var component_props_2 = __webpack_require__(34);
exports.ComponentProps = component_props_2.ComponentProps;
var component_registry_2 = __webpack_require__(74);
exports.ComponentRegistry = component_registry_2.ComponentRegistry;
var generic_component_props_2 = __webpack_require__(107);
exports.GenericComponentProps = generic_component_props_2.GenericComponentProps;
var html_component_props_2 = __webpack_require__(108);
exports.HtmlComponentProps = html_component_props_2.HtmlComponentProps;
var image_based_component_props_2 = __webpack_require__(50);
exports.ImageBasedComponentProps = image_based_component_props_2.ImageBasedComponentProps;
var navigate_component_props_2 = __webpack_require__(109);
exports.NavigateComponentProps = navigate_component_props_2.NavigateComponentProps;
var progress_rectangle_2 = __webpack_require__(76);
exports.ProgressRectangle = progress_rectangle_2.ProgressRectangle;
var upload_component_props_2 = __webpack_require__(75);
exports.UploadComponentProps = upload_component_props_2.UploadComponentProps;
var design_tool_2 = __webpack_require__(9);
exports.DesignTool = design_tool_2.DesignTool;
var ellipse_tool_2 = __webpack_require__(110);
exports.EllipseTool = ellipse_tool_2.EllipseTool;
var image_element_tool_2 = __webpack_require__(111);
exports.ImageElementTool = image_element_tool_2.ImageElementTool;
var line_tool_2 = __webpack_require__(112);
exports.LineTool = line_tool_2.LineTool;
var model_element_tool_2 = __webpack_require__(113);
exports.ModelElementTool = model_element_tool_2.ModelElementTool;
var pen_tool_2 = __webpack_require__(114);
exports.PenTool = pen_tool_2.PenTool;
var polygon_tool_2 = __webpack_require__(115);
exports.PolygonTool = polygon_tool_2.PolygonTool;
var polyline_tool_2 = __webpack_require__(116);
exports.PolylineTool = polyline_tool_2.PolylineTool;
var rectangle_tool_2 = __webpack_require__(117);
exports.RectangleTool = rectangle_tool_2.RectangleTool;
var text_tool_2 = __webpack_require__(118);
exports.TextTool = text_tool_2.TextTool;
var design_controller_2 = __webpack_require__(119);
exports.DesignController = design_controller_2.DesignController;
var design_renderer_2 = __webpack_require__(83);
exports.DesignRenderer = design_renderer_2.DesignRenderer;
var grid_type_2 = __webpack_require__(84);
exports.GridType = grid_type_2.GridType;
var handle_2 = __webpack_require__(86);
exports.Handle = handle_2.Handle;
var handle_factory_2 = __webpack_require__(85);
exports.HandleFactory = handle_factory_2.HandleFactory;
var handle_moved_args_2 = __webpack_require__(120);
exports.HandleMovedArgs = handle_moved_args_2.HandleMovedArgs;
var element_base_2 = __webpack_require__(3);
exports.ElementBase = element_base_2.ElementBase;
var element_creation_props_2 = __webpack_require__(71);
exports.ElementCreationProps = element_creation_props_2.ElementCreationProps;
var element_creator_registration_2 = __webpack_require__(58);
exports.ElementCreatorRegistration = element_creator_registration_2.ElementCreatorRegistration;
var element_drag_args_2 = __webpack_require__(77);
exports.ElementDragArgs = element_drag_args_2.ElementDragArgs;
var element_factory_2 = __webpack_require__(57);
exports.ElementFactory = element_factory_2.ElementFactory;
var element_location_args_2 = __webpack_require__(78);
exports.ElementLocationArgs = element_location_args_2.ElementLocationArgs;
var element_mouse_event_args_2 = __webpack_require__(121);
exports.ElementMouseEventArgs = element_mouse_event_args_2.ElementMouseEventArgs;
var element_size_args_2 = __webpack_require__(79);
exports.ElementSizeArgs = element_size_args_2.ElementSizeArgs;
var element_size_props_2 = __webpack_require__(80);
exports.ElementSizeProps = element_size_props_2.ElementSizeProps;
var ellipse_element_2 = __webpack_require__(44);
exports.EllipseElement = ellipse_element_2.EllipseElement;
var image_element_2 = __webpack_require__(29);
exports.ImageElement = image_element_2.ImageElement;
var invalid_index_exception_2 = __webpack_require__(21);
exports.InvalidIndexException = invalid_index_exception_2.InvalidIndexException;
var line_element_2 = __webpack_require__(15);
exports.LineElement = line_element_2.LineElement;
var model_element_2 = __webpack_require__(30);
exports.ModelElement = model_element_2.ModelElement;
var move_location_2 = __webpack_require__(81);
exports.MoveLocation = move_location_2.MoveLocation;
var path_element_2 = __webpack_require__(59);
exports.PathElement = path_element_2.PathElement;
var polygon_element_2 = __webpack_require__(45);
exports.PolygonElement = polygon_element_2.PolygonElement;
var polyline_element_2 = __webpack_require__(32);
exports.PolylineElement = polyline_element_2.PolylineElement;
var rectangle_element_2 = __webpack_require__(11);
exports.RectangleElement = rectangle_element_2.RectangleElement;
var resize_size_2 = __webpack_require__(82);
exports.ResizeSize = resize_size_2.ResizeSize;
var sprite_element_2 = __webpack_require__(17);
exports.SpriteElement = sprite_element_2.SpriteElement;
var sprite_frame_2 = __webpack_require__(22);
exports.SpriteFrame = sprite_frame_2.SpriteFrame;
var sprite_state_2 = __webpack_require__(60);
exports.SpriteState = sprite_state_2.SpriteState;
var text_element_2 = __webpack_require__(23);
exports.TextElement = text_element_2.TextElement;
var upload_completion_props_2 = __webpack_require__(72);
exports.UploadCompletionProps = upload_completion_props_2.UploadCompletionProps;
var upload_progress_props_2 = __webpack_require__(73);
exports.UploadProgressProps = upload_progress_props_2.UploadProgressProps;
var fill_factory_2 = __webpack_require__(8);
exports.FillFactory = fill_factory_2.FillFactory;
var fill_info_2 = __webpack_require__(87);
exports.FillInfo = fill_info_2.FillInfo;
var gradient_fill_stop_2 = __webpack_require__(43);
exports.GradientFillStop = gradient_fill_stop_2.GradientFillStop;
var linear_gradient_fill_2 = __webpack_require__(27);
exports.LinearGradientFill = linear_gradient_fill_2.LinearGradientFill;
var radial_gradient_fill_2 = __webpack_require__(28);
exports.RadialGradientFill = radial_gradient_fill_2.RadialGradientFill;
var bitmap_resource_2 = __webpack_require__(19);
exports.BitmapResource = bitmap_resource_2.BitmapResource;
var model_resource_2 = __webpack_require__(35);
exports.ModelResource = model_resource_2.ModelResource;
var resource_2 = __webpack_require__(36);
exports.Resource = resource_2.Resource;
var resource_creator_registration_2 = __webpack_require__(61);
exports.ResourceCreatorRegistration = resource_creator_registration_2.ResourceCreatorRegistration;
var resource_factory_2 = __webpack_require__(18);
exports.ResourceFactory = resource_factory_2.ResourceFactory;
var resource_loader_state_2 = __webpack_require__(63);
exports.ResourceLoaderState = resource_loader_state_2.ResourceLoaderState;
var resource_manager_2 = __webpack_require__(62);
exports.ResourceManager = resource_manager_2.ResourceManager;
var resource_manager_event_2 = __webpack_require__(46);
exports.ResourceManagerEvent = resource_manager_event_2.ResourceManagerEvent;
var resource_state_2 = __webpack_require__(64);
exports.ResourceState = resource_state_2.ResourceState;
var text_resource_2 = __webpack_require__(122);
exports.TextResource = text_resource_2.TextResource;
var sketcher_2 = __webpack_require__(123);
exports.Sketcher = sketcher_2.Sketcher;
var pane_transition_2 = __webpack_require__(13);
exports.PaneTransition = pane_transition_2.PaneTransition;
var pane_transition_direction_2 = __webpack_require__(20);
exports.PaneTransitionDirection = pane_transition_direction_2.PaneTransitionDirection;
var pane_transition_fade_2 = __webpack_require__(88);
exports.PaneTransitionFade = pane_transition_fade_2.PaneTransitionFade;
var pane_transition_none_2 = __webpack_require__(89);
exports.PaneTransitionNone = pane_transition_none_2.PaneTransitionNone;
var pane_transition_push_2 = __webpack_require__(90);
exports.PaneTransitionPush = pane_transition_push_2.PaneTransitionPush;
var pane_transition_reveal_2 = __webpack_require__(91);
exports.PaneTransitionReveal = pane_transition_reveal_2.PaneTransitionReveal;
var pane_transition_slide_2 = __webpack_require__(92);
exports.PaneTransitionSlide = pane_transition_slide_2.PaneTransitionSlide;
var pane_transition_wipe_2 = __webpack_require__(93);
exports.PaneTransitionWipe = pane_transition_wipe_2.PaneTransitionWipe;
var surface_2 = __webpack_require__(124);
exports.Surface = surface_2.Surface;
var surface_animation_frame_2 = __webpack_require__(98);
exports.SurfaceAnimationFrame = surface_animation_frame_2.SurfaceAnimationFrame;
var surface_animation_layer_2 = __webpack_require__(125);
exports.SurfaceAnimationLayer = surface_animation_layer_2.SurfaceAnimationLayer;
var surface_animation_view_controller_2 = __webpack_require__(99);
exports.SurfaceAnimationViewController = surface_animation_view_controller_2.SurfaceAnimationViewController;
var surface_button_element_2 = __webpack_require__(94);
exports.SurfaceButtonElement = surface_button_element_2.SurfaceButtonElement;
var surface_element_2 = __webpack_require__(37);
exports.SurfaceElement = surface_element_2.SurfaceElement;
var surface_element_states_2 = __webpack_require__(38);
exports.SurfaceElementStates = surface_element_states_2.SurfaceElementStates;
var surface_hidden_layer_2 = __webpack_require__(126);
exports.SurfaceHiddenLayer = surface_hidden_layer_2.SurfaceHiddenLayer;
var surface_html_layer_2 = __webpack_require__(127);
exports.SurfaceHtmlLayer = surface_html_layer_2.SurfaceHtmlLayer;
var surface_image_layer_2 = __webpack_require__(128);
exports.SurfaceImageLayer = surface_image_layer_2.SurfaceImageLayer;
var surface_layer_2 = __webpack_require__(12);
exports.SurfaceLayer = surface_layer_2.SurfaceLayer;
var surface_pane_2 = __webpack_require__(129);
exports.SurfacePane = surface_pane_2.SurfacePane;
var surface_radio_item_sprite_element_2 = __webpack_require__(100);
exports.SurfaceRadioItemSpriteElement = surface_radio_item_sprite_element_2.SurfaceRadioItemSpriteElement;
var surface_radio_item_text_element_2 = __webpack_require__(101);
exports.SurfaceRadioItemTextElement = surface_radio_item_text_element_2.SurfaceRadioItemTextElement;
var surface_radio_strip_2 = __webpack_require__(130);
exports.SurfaceRadioStrip = surface_radio_strip_2.SurfaceRadioStrip;
var surface_radio_strip_item_2 = __webpack_require__(102);
exports.SurfaceRadioStripItem = surface_radio_strip_item_2.SurfaceRadioStripItem;
var surface_radio_strip_selection_args_2 = __webpack_require__(103);
exports.SurfaceRadioStripSelectionArgs = surface_radio_strip_selection_args_2.SurfaceRadioStripSelectionArgs;
var surface_radio_strip_view_controller_2 = __webpack_require__(104);
exports.SurfaceRadioStripViewController = surface_radio_strip_view_controller_2.SurfaceRadioStripViewController;
var surface_text_element_2 = __webpack_require__(95);
exports.SurfaceTextElement = surface_text_element_2.SurfaceTextElement;
var surface_video_layer_2 = __webpack_require__(96);
exports.SurfaceVideoLayer = surface_video_layer_2.SurfaceVideoLayer;
var surface_view_controller_2 = __webpack_require__(51);
exports.SurfaceViewController = surface_view_controller_2.SurfaceViewController;
var transitions_2 = __webpack_require__(14);
exports.TransitionRenderer = transitions_2.TransitionRenderer;
var view_controller_2 = __webpack_require__(52);
exports.ViewController = view_controller_2.ViewController;
var view_renderer_2 = __webpack_require__(97);
exports.ViewRenderer = view_renderer_2.ViewRenderer;
var bitmapResource = bitmap_resource_1.BitmapResource.create;
exports.bitmapResource = bitmapResource;
var color = color_1.Color.create;
exports.color = color;
var design = design_controller_1.DesignController.initializeTarget;
exports.design = design;
var ellipse = ellipse_element_1.EllipseElement.create;
exports.ellipse = ellipse;
var embeddedTextResource = text_resource_1.TextResource.createFromText;
exports.embeddedTextResource = embeddedTextResource;
var gradientFillStop = gradient_fill_stop_1.GradientFillStop.create;
exports.gradientFillStop = gradientFillStop;
var image = image_element_1.ImageElement.create;
exports.image = image;
var innerModel = model_element_1.ModelElement.create;
exports.innerModel = innerModel;
var line = line_element_1.LineElement.create;
exports.line = line;
var linearGradientFill = linear_gradient_fill_1.LinearGradientFill.create;
exports.linearGradientFill = linearGradientFill;
function log(output) {
    console.log(output);
}
exports.log = log;
var matrix2D = matrix_2d_1.Matrix2D.create;
exports.matrix2D = matrix2D;
var model = model_1.Model.create;
exports.model = model;
var modelResource = model_resource_1.ModelResource.create;
exports.modelResource = modelResource;
var newId = utility_1.Utility.guid;
exports.newId = newId;
var path = path_element_1.PathElement.create;
exports.path = path;
var point = point_1.Point.create;
exports.point = point;
var polygon = polygon_element_1.PolygonElement.create;
exports.polygon = polygon;
var polyline = polyline_element_1.PolylineElement.create;
exports.polyline = polyline;
var radialGradientFill = radial_gradient_fill_1.RadialGradientFill.create;
exports.radialGradientFill = radialGradientFill;
var rectangle = rectangle_element_1.RectangleElement.create;
exports.rectangle = rectangle;
var region = region_1.Region.create;
exports.region = region;
var size = size_1.Size.create;
exports.size = size;
var sketcher = sketcher_1.Sketcher.create;
exports.sketcher = sketcher;
var sprite = sprite_element_1.SpriteElement.create;
exports.sprite = sprite;
var spriteFrame = sprite_frame_1.SpriteFrame.create;
exports.spriteFrame = spriteFrame;
var text = text_element_1.TextElement.create;
exports.text = text;
var uriTextResource = text_resource_1.TextResource.createFromUri;
exports.uriTextResource = uriTextResource;
var view = view_controller_1.ViewController.initializeTarget;
exports.view = view;
exports.default = {
    BitmapResource: bitmap_resource_1.BitmapResource,
    Color: color_1.Color,
    CommandEventTrigger: command_event_trigger_1.CommandEventTrigger,
    CommonEvent: common_event_1.CommonEvent,
    Component: component_1.Component,
    ComponentElement: component_element_1.ComponentElement,
    ComponentEvent: component_event_1.ComponentEvent,
    ComponentProps: component_props_1.ComponentProps,
    ComponentRegistry: component_registry_1.ComponentRegistry,
    ControllerEvent: controller_event_1.ControllerEvent,
    ControllerEventArgs: controller_event_args_1.ControllerEventArgs,
    DesignController: design_controller_1.DesignController,
    DesignRenderer: design_renderer_1.DesignRenderer,
    DesignTool: design_tool_1.DesignTool,
    ElementBase: element_base_1.ElementBase,
    ElementCommand: element_command_1.ElementCommand,
    ElementCommandHandler: element_command_handler_1.ElementCommandHandler,
    ElementCommandHandlerRegistration: element_command_handler_registration_1.ElementCommandHandlerRegistration,
    ElementCreationProps: element_creation_props_1.ElementCreationProps,
    ElementCreatorRegistration: element_creator_registration_1.ElementCreatorRegistration,
    ElementDragArgs: element_drag_args_1.ElementDragArgs,
    ElementFactory: element_factory_1.ElementFactory,
    ElementLocationArgs: element_location_args_1.ElementLocationArgs,
    ElementMouseEventArgs: element_mouse_event_args_1.ElementMouseEventArgs,
    ElementSizeArgs: element_size_args_1.ElementSizeArgs,
    ElementSizeProps: element_size_props_1.ElementSizeProps,
    EllipseElement: ellipse_element_1.EllipseElement,
    EllipseTool: ellipse_tool_1.EllipseTool,
    ErrorMessages: error_messages_1.ErrorMessages,
    FillFactory: fill_factory_1.FillFactory,
    FillInfo: fill_info_1.FillInfo,
    GenericComponentProps: generic_component_props_1.GenericComponentProps,
    GradientFillStop: gradient_fill_stop_1.GradientFillStop,
    GridType: grid_type_1.GridType,
    Handle: handle_1.Handle,
    HandleFactory: handle_factory_1.HandleFactory,
    HandleMovedArgs: handle_moved_args_1.HandleMovedArgs,
    HtmlComponentProps: html_component_props_1.HtmlComponentProps,
    ImageBasedComponentProps: image_based_component_props_1.ImageBasedComponentProps,
    ImageElement: image_element_1.ImageElement,
    ImageElementTool: image_element_tool_1.ImageElementTool,
    InvalidIndexException: invalid_index_exception_1.InvalidIndexException,
    LineElement: line_element_1.LineElement,
    LineTool: line_tool_1.LineTool,
    LinearGradientFill: linear_gradient_fill_1.LinearGradientFill,
    LocationArgs: location_args_1.LocationArgs,
    Logging: logging_1.Logging,
    Matrix2D: matrix_2d_1.Matrix2D,
    Model: model_1.Model,
    ModelElement: model_element_1.ModelElement,
    ModelElementTool: model_element_tool_1.ModelElementTool,
    ModelEvent: model_event_1.ModelEvent,
    ModelResource: model_resource_1.ModelResource,
    MouseEventArgs: mouse_event_args_1.MouseEventArgs,
    MouseLocationArgs: mouse_location_args_1.MouseLocationArgs,
    MousePositionInfo: mouse_position_info_1.MousePositionInfo,
    MoveLocation: move_location_1.MoveLocation,
    NamedColor: named_color_1.NamedColor,
    NavigateComponentProps: navigate_component_props_1.NavigateComponentProps,
    PaneTransition: pane_transition_1.PaneTransition,
    PaneTransitionDirection: pane_transition_direction_1.PaneTransitionDirection,
    PaneTransitionFade: pane_transition_fade_1.PaneTransitionFade,
    PaneTransitionNone: pane_transition_none_1.PaneTransitionNone,
    PaneTransitionPush: pane_transition_push_1.PaneTransitionPush,
    PaneTransitionReveal: pane_transition_reveal_1.PaneTransitionReveal,
    PaneTransitionSlide: pane_transition_slide_1.PaneTransitionSlide,
    PaneTransitionWipe: pane_transition_wipe_1.PaneTransitionWipe,
    PathElement: path_element_1.PathElement,
    PenTool: pen_tool_1.PenTool,
    Point: point_1.Point,
    PointDepth: point_depth_1.PointDepth,
    PointEventParameters: point_event_parameters_1.PointEventParameters,
    PolygonElement: polygon_element_1.PolygonElement,
    PolygonTool: polygon_tool_1.PolygonTool,
    PolylineElement: polyline_element_1.PolylineElement,
    PolylineTool: polyline_tool_1.PolylineTool,
    ProgressRectangle: progress_rectangle_1.ProgressRectangle,
    RadialGradientFill: radial_gradient_fill_1.RadialGradientFill,
    RectangleElement: rectangle_element_1.RectangleElement,
    RectangleTool: rectangle_tool_1.RectangleTool,
    Region: region_1.Region,
    ResizeSize: resize_size_1.ResizeSize,
    Resource: resource_1.Resource,
    ResourceCreatorRegistration: resource_creator_registration_1.ResourceCreatorRegistration,
    ResourceFactory: resource_factory_1.ResourceFactory,
    ResourceLoaderState: resource_loader_state_1.ResourceLoaderState,
    ResourceManager: resource_manager_1.ResourceManager,
    ResourceManagerEvent: resource_manager_event_1.ResourceManagerEvent,
    ResourceState: resource_state_1.ResourceState,
    ScalingInfo: scaling_info_1.ScalingInfo,
    Size: size_1.Size,
    SizeArgs: size_args_1.SizeArgs,
    Sketcher: sketcher_1.Sketcher,
    SpriteElement: sprite_element_1.SpriteElement,
    SpriteFrame: sprite_frame_1.SpriteFrame,
    SpriteState: sprite_state_1.SpriteState,
    StrokeInfo: stroke_info_1.StrokeInfo,
    Surface: surface_1.Surface,
    SurfaceAnimationFrame: surface_animation_frame_1.SurfaceAnimationFrame,
    SurfaceAnimationLayer: surface_animation_layer_1.SurfaceAnimationLayer,
    SurfaceAnimationViewController: surface_animation_view_controller_1.SurfaceAnimationViewController,
    SurfaceButtonElement: surface_button_element_1.SurfaceButtonElement,
    SurfaceElement: surface_element_1.SurfaceElement,
    SurfaceElementStates: surface_element_states_1.SurfaceElementStates,
    SurfaceHiddenLayer: surface_hidden_layer_1.SurfaceHiddenLayer,
    SurfaceHtmlLayer: surface_html_layer_1.SurfaceHtmlLayer,
    SurfaceImageLayer: surface_image_layer_1.SurfaceImageLayer,
    SurfaceLayer: surface_layer_1.SurfaceLayer,
    SurfacePane: surface_pane_1.SurfacePane,
    SurfaceRadioItemSpriteElement: surface_radio_item_sprite_element_1.SurfaceRadioItemSpriteElement,
    SurfaceRadioItemTextElement: surface_radio_item_text_element_1.SurfaceRadioItemTextElement,
    SurfaceRadioStrip: surface_radio_strip_1.SurfaceRadioStrip,
    SurfaceRadioStripItem: surface_radio_strip_item_1.SurfaceRadioStripItem,
    SurfaceRadioStripSelectionArgs: surface_radio_strip_selection_args_1.SurfaceRadioStripSelectionArgs,
    SurfaceRadioStripViewController: surface_radio_strip_view_controller_1.SurfaceRadioStripViewController,
    SurfaceTextElement: surface_text_element_1.SurfaceTextElement,
    SurfaceVideoLayer: surface_video_layer_1.SurfaceVideoLayer,
    SurfaceViewController: surface_view_controller_1.SurfaceViewController,
    TextElement: text_element_1.TextElement,
    TextResource: text_resource_1.TextResource,
    TextTool: text_tool_1.TextTool,
    TimerParameters: timer_parameters_1.TimerParameters,
    TransitionRenderer: transitions_1.TransitionRenderer,
    UploadCompletionProps: upload_completion_props_1.UploadCompletionProps,
    UploadComponentProps: upload_component_props_1.UploadComponentProps,
    UploadProgressProps: upload_progress_props_1.UploadProgressProps,
    Utility: utility_1.Utility,
    ViewController: view_controller_1.ViewController,
    ViewDragArgs: view_drag_args_1.ViewDragArgs,
    ViewRenderer: view_renderer_1.ViewRenderer,
    WindingMode: winding_mode_1.WindingMode,
    bitmapResource: bitmapResource,
    color: color,
    design: design,
    ellipse: ellipse,
    embeddedTextResource: embeddedTextResource,
    gradientFillStop: gradientFillStop,
    image: image,
    innerModel: innerModel,
    line: line,
    linearGradientFill: linearGradientFill,
    log: log,
    matrix2D: matrix2D,
    model: model,
    modelResource: modelResource,
    newId: newId,
    path: path,
    point: point,
    polygon: polygon,
    polyline: polyline,
    radialGradientFill: radialGradientFill,
    rectangle: rectangle,
    region: region,
    requestAnimationFrame: false,
    size: size,
    sketcher: sketcher,
    sprite: sprite,
    spriteFrame: spriteFrame,
    text: text,
    uriTextResource: uriTextResource,
    view: view
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=elise-graphics.js.map