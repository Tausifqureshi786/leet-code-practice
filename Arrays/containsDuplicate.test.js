const containsDuplicate = require("./containsDuplicate");

test("Returns false as the provided array does not have any duplicates", () =>{
    expect(containsDuplicate([1,2,3,4])).toBe(false)
})
