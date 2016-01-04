/*
 var programmer = new Programmer();
 programmer.learnNewLanguage(‘Clojure');
 programmer.isPragmatic() - true when she knows at least 3 languages, otherwise false
 hint: use this and .prototype

 tech programmer 3 languages from an array [“JS”, “Java”, “Clojure”] using forEach
 */
'use strict';

function createProgrammer (){
    var languages =[];
    return {
        learnNewLanguage: function(lang) {
            languages.push(lang);
        },
        isPragmatic: function() {
            return languages.length >= 3
        }
    };
};

var pro = createProgrammer();

console.log(pro.isPragmatic());

/*let Programmer = function {
 this.languages = [];
 };

 Programmer.prototype.learnNewLanguage = function(lang) {
 this.languages.push(lang);
 };

 Programmer.prototype.isPragmatic =function(){
 return this.languages.length > 2;
 };

 var pro = new Programmer ();
 */

['js', 'java', 'clojure' ].forEach(lang => pro.learnNewLanguage(lang));
console.log(pro.isPragmatic());
