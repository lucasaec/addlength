/**
 * Created by lucaseac on 9/24/15.
 */
var addLength = function(data) {
    return _.map(data, function(string1) {
        return string1 + " " + string1.length;
    });
}
console.log(addLength(["apple", "pear"]) );
console.log(addLength(["you", "can", "win"]) );