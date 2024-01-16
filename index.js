const breakpoint = require("./breakpoints.json")

function ViewportCalculator(size, device) {
    if (typeof size !== "number" || !Number.isInteger(size)) {
        return console.error("The `size` value entered should be an integer.")
    } else if (breakpoint.hasOwnProperty(device) === false) {
        return console.error(
            "The entered value does not exist in all data tables. Try re-entering the correct value or adding a new value in the config."
        )
    } else if (breakpoint.hasOwnProperty(device)) {
        return (size / breakpoint[device]) * 100 + "vw"
    }
}

module.exports = ViewportCalculator
