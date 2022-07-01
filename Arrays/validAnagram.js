

/* 
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/
/******************************* */
//completed in 45 mins 19 seconds 
/******************************* */

/* NOTE ABOUT ANAGRAM 
* When having two strings a and b if b is anagram of a then it has to be equal to the length of a, it can neither be shorter nor longer than string a...
*/
const validAnagram = (s, t) => {
    let map = new Map()
    Array.from(s).forEach( (elem) => {
        if(map.get(elem)>=0) {
            let i = map.get(elem)
            i++
            map.set(elem,i)
        }
        else {
            map.set(elem,1)
        }
    })
    if(t.length< s.length) return false
    else if(t.length > s.length) return false
    else {
        Array.from(t).forEach( (elem) => {
            let count = map.get(elem) 
            if( count > 0 ){
                count--
                map.set(elem,count)
            } 
        })
    }
    for (const val of map.values()) {
        if( val>0) return false
    }
    return true
};


module.exports = validAnagram;