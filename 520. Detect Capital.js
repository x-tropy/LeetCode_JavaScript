/* Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

  All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital
if it has more than one letter, like "Google".
Otherwise, we define that this word doesn 't use capitals in a right way.
Example 1:
  Input: "USA"
Output: True
Example 2:
  Input: "FlaG"
Output: False
Note: The input will be a non - empty word consisting of uppercase and lowercase latin letters. */

/**
 * @param {string} word
 * @return {boolean}
 */
/* var detectCapitalUse = function(word) {
  if (word.length < 2) return true
  var firstCharCode = word.charCodeAt(0)
  if (firstCharCode <= 90) {
    for (var i = 1; i < word.length; i++) {
      if (word.charCodeAt(i) <= 90) continue
      else break
    }
    if (i == word.length) return true
    for (var i = 1; i < word.length; i++) {
      if (word.charCodeAt(i) >= 97) continue
      else break
    }
    if (i == word.length) return true
    return false
  } else {
    for (var i = 1; i < word.length; i++) {
      if (word.charCodeAt(i) >= 97) continue
      else break
    }
    if (i == word.length) return true
    return false
  }
}; */

var detectCapitalUse = function(word) {
  return !!word.match(/^([a-z]*|[A-Z][a-z]*|[A-Z]*)$/)
}

console.log(detectCapitalUse('asdfA'))