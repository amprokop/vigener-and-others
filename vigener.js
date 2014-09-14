var _ = require('lodash');
var dictionary = require('mw-dictionary');

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// var letterFrequency = ['e','t','a','o','n'mISHD LFCMU GYPWB VKJXQ Z],

var vigener = {};

vigener.encode = function(key, message){

  var cipher = _.map(message.split(''), function(chr, index){
    return key[index % key.length];
  });

  var indCipher = _.map(cipher, function(chr){
    return _.indexOf(alphabet, chr);
  });

  var indMessage = _.map(message, function(chr){
    return _.indexOf(alphabet, chr);
  });

  var encoded = _.map(indMessage, function(n, index){
    var encodedIndex =  (n + indMessage[index]) % 26;

    return alphabet[encodedIndex];
  });
};


var decode = function(key, encodedMessage){

  var encodedMessageDigits = _.map(encodedMessage.split(''), function(chr, index){
    return _.indexOf(alphabet, chr);
  });

  var decodedMessage = _.map(encodedMessage, function(){

  })

};
