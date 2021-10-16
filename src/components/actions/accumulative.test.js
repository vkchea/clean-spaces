const accumulative = require("./accumulative")
// @ponicode
describe("accumulative.updateAcc", () => {
    test("0", () => {
        let callFunction = () => {
            accumulative.updateAcc("rgb(0.1,0.2,0.3)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            accumulative.updateAcc("red")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            accumulative.updateAcc("rgb(0,100,200)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            accumulative.updateAcc("#F00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            accumulative.updateAcc("hsl(10%,20%,40%)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            accumulative.updateAcc(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
