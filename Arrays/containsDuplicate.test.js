const containsDuplicate = require("./containsDuplicate");

test("Returns false as the provided array does not have any duplicates", () =>{
    expect(containsDuplicate([1,2,3,4])).toBe(false)
})

test("Returns true as the provided array has duplicates", () =>{
    expect(containsDuplicate([1,2,3,1])).toBe(true)
});

test("Returns true as the provided array has duplicates", ()=> {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true)
})