const entryPoint = require("./index")

test("Entry point", () => {
    const result = entryPoint()
    console.log("Result:", result)
    expect(result).toBeTruthy()
})
