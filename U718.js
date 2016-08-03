var shout = function () {
    var message = "HEY YOU";
    alert(message);
};
shout();
alert(message);

/** In this script, the first message is ran and alerts as "HEY YOU".
 Whereas the alert message after the shout alerts as "ReferenceError: message is not defined".
