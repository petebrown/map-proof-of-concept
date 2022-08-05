d3.select("#top-page").on('stepin', function(e) {
    d3.selectAll("#big_poop, #g-poops-Artboard_1-img, .g-map_architecture")
    .style("opacity", 0)
});

let interval = null;

scroller.setup({
    step: ".step",
    offset: 0.5,
    debug: false
})

.onStepEnter((response) => {
    // this log helps us keep track of where we are while we are building the scrolly
    console.log("step triggered: " + response.index);
    // a series of if statements to run different pieces of code for different steps
    if (response.index === 0) {
        // inside each step, let's provide instructions for everything that needs to happen
        d3.select("#g-poops-Artboard_1-img").transition().duration(2000).style("opacity", 1);
        d3.select("#big_poop").transition().duration(4000).style("opacity", 0);
        d3.selectAll(".g-map_architecture").transition().duration(4000).style("opacity", 0.5);
    } else if (response.index === 7) {
        if (interval) {
            clearInterval(interval)
        }

        d3.selectAll("path[id^='poop_']").style("opacity", 0)

        
    } else if (response.index === 8) {
        if (interval) {
            clearInterval(interval)
        }

        total_poops = d3.selectAll("path[id^='poop_']").size()
        console.log(total_poops + ' poops found')
        number = 0

        interval = setInterval(function() {
            if (number === total_poops) {
                return
            } else {            
                id_name = `#poop_${number}`
    
                d3.select(id_name).style("opacity", 1)
                console.log("Displayed " + id_name)
    
                d3.select('#shit_counter').text("Poop counter: " + number)
                
                number += 1
            }
        }, 200)
    } else if (response.index === 10) {
        if (interval) {
            clearInterval(interval)
        }

        d3.selectAll("path[id^='poop_']").transition().duration(1000).style("opacity", 0.8)
        d3.selectAll("path[id^='trash_']").style("opacity", 0)
        
    } else if (response.index === 12) {
        if (interval) {
            clearInterval(interval)
        }

        total_trash_cans = d3.selectAll("path[id^='trash_']").size()
        console.log(total_trash_cans + ' trash cans found')
        number = 1

        interval = setInterval(function() {
        if (number > total_trash_cans) {
            return
        } else {

        id_name = `#trash_${number}`
        
        d3.select(id_name).style("opacity", 1)

        d3.select('#trash_can_counter').text("Trash can counter: " + number)
        console.log('Displayed ' + id_name)

        number += 1
        }
    }, 200)
    } else if (response.index === 14) {
        d3.selectAll("path[id^='trash_']").transition().duration(1000).style("opacity", 1)
    }
});

// ORIGINAL SCRIPT
// 
// scroller.setup({
//     step: ".step",
//     offset: 0.5,
//     debug: false
// })
// // the function that fires every time a new step activates
// .onStepEnter((response) => {
//     // this log helps us keep track of where we are while we are building the scrolly
//     console.log("step triggered: " + response.index);
// });

// d3.select("#step-zero").on('stepin', function(e){
//     d3.select("#g-poops-Artboard_1-img").transition().duration(2000).style("opacity", 1);
//     d3.select("#big_poop").transition().duration(4000).style("opacity", 0);
//     d3.selectAll(".g-map_architecture").transition().duration(4000).style("opacity", 0.6);
//   });

// let interval = null;

// d3.selectAll("path[id^='poop_'], path[id^='trash_']").classed("hidden", true);

// d3.select("#step-eight").on('stepin', function(e){
//     if (interval) {
//         clearInterval(interval)
//     }

//     d3.selectAll("path[id^='poop_'], path[id^='trash_']").classed("hidden", true)
    
//     maxNumber = d3.selectAll("path[id^='poop_']").size()
//     console.log(maxNumber + ' poops found')
//     number = 0

//     interval = setInterval(function() {
//         if (number === maxNumber) {
//             return
//         } else {

//         id_name = `#poop_${number}`
        
//         d3.select(id_name).classed("hidden", false)
//         console.log("Displayed " + id_name)

//         d3.select('#shit_counter').text("Poop counter: " + number)

//         number += 1
//         }
//     }, 275)
// });

// d3.select("#step-twelve").on('stepin', function(e){
//     if (interval) {
//         clearInterval(interval)
//     }

//     d3.selectAll("path[id^='poop_']").classed("hidden", false)
//     d3.selectAll("path[id^='trash_']").classed("hidden", true)
    
//     maxNumber = d3.selectAll("path[id^='trash_']").size()
//     console.log(maxNumber + ' trash cans found')
//     number = 1

//     interval = setInterval(function() {
//         if (number > maxNumber) {
//             return
//         } else {

//         id_name = `#trash_${number}`
        
//         d3.select(id_name).classed("hidden", false)

//         d3.select('#trash_can_counter').text("Trash can counter: " + number)
//         console.log('Displayed ' + id_name)

//         number += 1
//         }
//     }, 275)
// });