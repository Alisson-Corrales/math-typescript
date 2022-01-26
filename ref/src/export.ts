/**
 * is a string holding the name jimmy
 * @type {string[]}
 */
const testing: string[] = ["jimmy"];

/**
 * Multiplies 2 numbers
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} the product of a*b
 */

export const mult = (a: number, b: number):number => {
    return a * b;
};

mult(7, 9)



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/**
 * Holds a bunch of math for shapess
 */
export class Areas {

    /**
     * @member {number} pi - holds 3.14
     */
    static pi = 3.14
    /**
     * 
     * @param {number} rad 
     * @returns {number} area of a circle 
     */
    static area(rad:number): number {
        return rad * Areas.pi **2
    }

    static circle = {
        /**
         * finds the area of a circle
         * @param {number} rad - radius of a circle
         * @returns {number} area of a circle
         */
        area(rad: number): number {
            return rad * Areas.pi ** 2
        },

        /**
         * finds the circumference of a circle
         * @param {number} rad - radius of a circle
         * @returns {number} circumference of a circle
         */
        circumference(rad: number): number {
            return 2 * Areas.pi * rad
        }
    }

    static triangle = {
        /**
         * 
         * @param {number} base = bottom of a triangle
         * @param {number} height  - distanfe from the bottom to the tip using a 90deg angle
         */
        area(base:number, height: number): number {
            return base*height / 2
        }
    }
}