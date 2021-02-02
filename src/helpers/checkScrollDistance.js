// uses a callback function to do something based on how much is was scrolled cb and 
// a second callback function cb2 to check if it was scrolled back on top
export const checkSCrollingDistance = (cb, refresh, cb2) => {
    // make sure a valig callback was provided
    if (!cb || typeof cb !== 'function') { return }

    // variables
    let isSCrolling, start, end, distance;

    // listening for scroll events
    window.addEventListener('scroll', (e) => {
        // set starting positon
        if (!start) {
            start = window.pageYOffset;
        }

        // clear out timeout throught the scroll
        window.clearTimeout(isSCrolling);

        // set a timeout to run after scrolling ends
        isSCrolling = setTimeout(() => {
            if (window.pageYOffset === 0) {
                cb2();
            }

            //calculate distanve
            end = window.pageYOffset;
            distance = end - start;

            // run the callback
            cb(distance, start, end);

            // reset calculations
            start = null;
            end = null;
            distance = null;

            // set refresh every 66 ms roughly refresh rate of computer screens
        }, refresh || 66)
    }, false)
}


// this function execute 2 cb based on where the scrolling position on Y is.
export const scrollPosition = (minimize, reset) => {
    let ok = true;

    window.addEventListener('scroll', (e) => {
        // console.log(e.path[1].scrollY)
        if (e.path[1].scrollY > 150 && ok) {
            minimize();
            ok = !ok
        }
        if (e.path[1].scrollY <= 150 && !ok) {
            reset();
            ok = !ok
        }
    })
}