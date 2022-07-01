const validAnagram = require("./validAnagram")

var s = "rat", t = "car"
test("Should return true as t is an anagram of s" ,() => {
    expect(validAnagram("anagram", "nagaram")).toBe(true)
})

test("Should return false as 'car' is not an anagram of 'rat' ", () =>{
    expect(validAnagram("rat", "car")).toBe(false)
})