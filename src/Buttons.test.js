const Buttons = require("./Buttons")

// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Pierre Edouard"], ["Jean-Philippe", "Pierre Edouard", "Jean-Philippe"], ["Edmond", "Anas", "Edmond"]]
        inst = new Buttons.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})
