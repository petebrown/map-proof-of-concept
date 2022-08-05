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

        d3.selectAll("path[id^='poop_']").transition().duration(1000).style("opacity", 0)

        
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
        }, 250)
    } else if (response.index === 10) {
        if (interval) {
            clearInterval(interval)
        }

        d3.selectAll("path[id^='poop_']").transition().duration(1000).style("opacity", 0.8)
        d3.selectAll("path[id^='trash_']").transition().duration(1000).style("opacity", 0)
        
    } else if (response.index === 12) {
        if (interval) {
            clearInterval(interval)
        }

        d3.selectAll("path[id^='trash_']").transition().duration(2500).style("opacity", 1)

    } else if (response.index === 14) {
        d3.selectAll("path[id^='trash_']").transition().duration(1000).style("opacity", 1)
    }
});