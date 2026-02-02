function breakText() {


    var h2 = document.querySelector("#names h3")

    var h3Text = h3.textCont
    var splittedText = h3Text.split(" ")

    // forEch  Loop chalega jo sirf array par lagta hangingPunctuation: 

    var hafValue = splittedText.length/2
    var clutter = " "

    splittedText.forEach(function (elem, idx) {

        if (idx < hafValue) {
            clutter+= `<span class=s1>${elem}</span>`

        } else {
            clutter+= `<span class=s2>${elem}</span>`
        }

        // clutter=clutter + elem 
        //ya is trah se bhi likh skate hai isko






    })
    h3.innerHTML = clutter;




}
breakText()
gsap.from("h3 .s1",{
    y:50,
    duration:0.5,
    delay:0.5,
    stagger:0.20, // ye word ke text ko todata hai
    opacity: 0
})
gsap.from("h3 .s2",{
    y:50,
    duration:0.5,
    delay:0.5,
    stagger:-0.20, 
    opacity: 0
})




