export class AIMS {
    static pi = 3.14;

    static twoDees = {
        /**
         * @param b base of triangle
         * @param h height of triangle
         * @return area of triangle
         */
        triangleArea(b: number, h: number): number {
            return .5 * b * h 
        },



        /**
         * 
         * @param l length of rectangle
         * @param w width of rectangle
         * @return area of rectangle
        */
        rectangleArea(l: number, w: number): number {
            return l * w
        },



        /**
         * 
         * @param b1 base 1 of trapezoid
         * @param b2 base 2 of trapezoid
         * @param h height of trapeoid
         * @return area of trapezoid
         */
        trapezoidArea(b1: number, b2: number, h: number): number {
            //return (b1 + b2 / 2) * h
            return .5 * h * (b1 + b2)
        },


        /**
         * 
         * @param b base of parallelogram
         * @param h height of parallelogram
         * @return area of parallelogram
         */
        parallelogramArea(b:number, h: number): number{
            return b * h
        },
        

        /**
         * 
         * @param r radius of circle
         * @return area of circle
         */
        circleArea(r: number): number{
            return AIMS.pi * r **2
        }
    }
    
    static solids = {
        /**
         * 🍅
        * @param {number} r radius of the cone
        * @param {number} h height of the cone
        * @returns {number} volume of cone
         * 
        */
        coneVol(r: number, h: number): number {
            return AIMS.pi * r**2 * h/3;
        },
        /**
         * 🍅
        * @param {number} r radius of the cone
        * @param {number} l length of the cone
        * @returns {number} surface area of cone
         * 
        */
        coneSA(r: number, l: number): number {
            return AIMS.pi * r * l + AIMS.pi * r **2
        },


        
        /**
         * 🍅
        * @param {number} bL base length of the pyramid
        * @param {number} bW base width of the pyramid
        * @param {number} h height of the pyramid
        * @returns {number} volume of pyramid
         * 
        */
        pyramidVol(bL: number, bW: number, h: number): number {
            return (bL * bW * h) / 3
        },
        /**
         * 🍅
        * @param {number} B base length of the pyramid
        * @param {number} P permiter width of the pyramid
        * @param {number} sH slant height of the pyramid
        * @returns {number} surface area of pyramid
         * 
        */
        pyramidSA(B: number, P: number, sH: number): number {
            return B + .5 * P * sH
        },



        /**
         * 🍅
        * @param {number} r radius of the sphere
        * @returns {number} volume of sphere
         * 
        */
        sphereVol(r: number): number {
            return ((4/3) * AIMS.pi * r **3)
        },
        /**
         * 🍅
        * @param {number} r radius of the sphere
        * @returns {number} surface area of sphere
         * 
        */
        sphereSA(r: number): number {
            return 4 * AIMS.pi * r**2
        },




        /**
         * 🍅
        * @param {number} r radius of the cylinder
        * @param {number} height of cylinder
        * @returns {number} volume of cylinder
         * 
        */
        cylinderVol(r: number, h: number): number {
            return AIMS.pi * r**2 * h
        },
        /**
         * 🍅
        * @param {number} r radius of the cylinder
        * @param {number} h height of cylinder
        * @returns {number} surface area of cylinder
         *
        */
        cylinderSA(r: number, h: number): number {
            return (2 * AIMS.pi * r * h) + (2 * AIMS.pi * r ** 2) 
        },



       /**
         * 🍅
        * @param {number} B area of base of the prism
        * @param {number} h height of prism
        * @returns {number} volume of prism
         *
        */
        prismVol(B: number, h: number): number {
            return B * h
        },
        /**
         * 🍅
        * @param {number} B area of base of the prism
        * @param {number} P perimeter of the prism
        * @param {number} h height of prism
        * @returns {number} volume of prism
         * 
        */
        prismSA(B: number, P: number, h: number): number {
            return 2 * B + P + h
        }


        /*pyramid: {
            volume() {},
            surface() {}
        }*/
    }

    static pythagoreanTheorem = {
        triangle(c: number, b: number, a: number): number {
            c = Math.sqrt(b**2 + a**2) 
            return c
        }
    }

    static quadraticFormula = {
        minus(b: number, a: number, c: number): number {
            return -b - Math.sqrt(b**2 - 4 * a * c) /2*a
        },
        plus(b: number, a: number, c: number): number {
            return -b + Math.sqrt(b**2 - 4 * a * c) /2*a
        }
    }

    static coordinateGeometry ={
        distancePoints(x1: number, x2: number, y1: number, y2: number): number{
            return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
        },
        midPoints(x1: number, x2: number, y1: number, y2: number): number{
            return (x2 - x1 /2),(y2 - y1 /2)
        },
        slopePoints(x1: number, x2: number, y1: number, y2: number): number{
            return y2-y1/x2-x1
        }
    }
}
