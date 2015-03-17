/**
 * Created by tudor on 13/03/15.
 */

var moonWalkers = [
    "Neil Armstrong",
    "Buzz Aldrin",
    "Pete Conrad",
    "Alan Bean",
    "Alan Shepard",
    "Edgar Mitchell",
    "David Scott",
    "James Irwin",
    "John Young",
    "Charles Duke",
    "Eugene Cernan",
    "Harrison Schmitt"
];

function alphabetizer(names) {
    var _names = names;
    for (var name in _names) {
        var fullName = _names[name].split(" ");
        _names[name] = fullName[1] + ", " + fullName[0];
    }

    return _names.sort();
}

console.log(alphabetizer(moonWalkers));