"use strict";
var input = document.querySelectorAll('textarea')[0],
    characterCount = document.querySelector('#characterCount'),
    wordCount = document.querySelector('#wordCount'),
    sentenceCount = document.querySelector('#sentenceCount'),
    paragraphCount = document.querySelector('#paragraphCount');
  
input.addEventListener('keyup', function() {
    console.clear();
    characterCount.innerHTML = input.value.length;
    var words = input.value.match(/\w+/gi);
    if (words) {
        wordCount.innerHTML = words.length;
    }
    else {
        wordCount.innerHTML = 0;
    }
 
    if (words) {
        var sentences = input.value.split(/[.!?]+\s|$/g);
        console.log(sentences);
        sentenceCount.innerHTML = sentences.length - 1;
    }
    else {
        sentenceCount.innerHTML = 0;
    }
 
    if (words) {
        var paragraphs = input.value.replace(/\n$/gm, '').split(/\n/);
        paragraphCount.innerHTML = paragraphs.length;
    }
    else {
        paragraphCount.innerHTML = 0;
    }
     
});
