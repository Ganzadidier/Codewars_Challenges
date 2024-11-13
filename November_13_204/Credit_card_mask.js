/*
Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct. However,
since someone could look over your shoulder,
you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
 */


// this is the first approach

function maskify(cc) {
    return cc.slice(-4).padStart(cc.length, '#');
}

console.log(maskify("100797620587"));

// this the second approach

function maskify1(cc) {

    let maskedStr=""

    if (cc.length<=4) return cc

    for (let i=0; i<cc.length-4; i++){

        maskedStr +="#"
    }

    return maskedStr + cc.substring(cc.length-4);

}

console.log(maskify1("123456789083038930"))



