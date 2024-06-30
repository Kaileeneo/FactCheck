EXPECTED OUTPUT: A webpage that takes any large or small string [text aria] string as an input & randomly says if it is a fact or cap.

CONDITIONS & INTERPRETITIONS:
    1. Any large or small string will be considered as an input. Hence, textaria will be used.
    2. The outcome of any string deemed as a fact or cap randomly has only two possibilities. 
        a. 0 - fact as in true
        b. 1 - cap as in false
    3. Hence, here Math.floor(Math.random() * 2) will be used for two values

WHAT WILL BE NEEDED?
    1. HTML
        a. An input with id = "opinion" taking the string as value
        b. Button with id & value as "Check"
        c. A paragraph tag with id as "answer" which outputs a string relative to the random number outcome
    2. JAVASCRIPT
        a. Variables: input, button, answer
        b. a function named factCheck()
    3. CSS
        a. just basic and cute CSS

BUGS:
  1. The value of string can't be retrieved no matter what I do.
  2. The "console.log(opinion)" always shows an empty string 
