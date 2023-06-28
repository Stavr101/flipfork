// Universal

/* set up observer */

// function Subject() {
//     this.observers = []; // observers
// }
//
// Subject.prototype = {
//
//     sub: function (observer) { //subscribe
//         this.observers.push(observer);
//         console.log('new sub', observer);
//     },
//
//     unsub: function (observer) { //unsubscribe
//         let index = this.observers.indexOf(observer);
//         if (index > -1) {
//             this.observers.splice(index, 1);
//             console.log('unsub', observer);
//         }
//     },
//
//     fire: function () { //fire observers
//         this.observers.forEach(function (observer) {
//             observer.call(window);
//         });
//     }
// };
//
// let subject = new Subject();
//
// function updateObservers() {
//     subject.fire();
// }

// only run in editor
// if (window.location.href.indexOf("post-new.php") > -1 || window.location.href.indexOf("post.php") > -1) {
//
//     // run only in editor
//
// } else { // run outside of the editor
//
//     // isMobile min
//
let mobileDevice = isMobile.apple.phone || isMobile.android.phone || isMobile.other.device || isMobile.android.device;
//
console.log(mobileDevice);
//     // insert after
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// }
if (window.gu_qs) {
    if (gu_qs.gucountry === 'pr') {
        gu_qs.gucountry    = 'us';
        //gu_qs.city = 'pr';
        gu_qs.gucurrency   = 'usd';
        window.gu_currency = 'usd';
        window.gu_country  = 'us';
    }
}

jQuery(function ($) {
    $(document).ready(function () {
        // gallery basic
        /*
        Check if is puerto rico
         */


        // other
    });
});
