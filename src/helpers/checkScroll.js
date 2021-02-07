// uses a callback function to do something based on how much is was scrolled cb and 
// a second callback function cb2 to check if it was scrolled back on top
export const checkSCrollingDistance = (refresh, cb, cb2) => {
    // make sure a valig callback was provided
    if (!cb || typeof cb !== 'function') { return }
    if (!cb2 || typeof cb2 !== 'function') { return }

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

export const checkScrollingUpDown = (refresh, down, up) => {
    // make sure a valig callback was provided
    if (!down || typeof down !== 'function') { return }
    if (!up || typeof up !== 'function') { return }

    // variables
    let isSCrolling, start, end, direction;

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
            //calculate distanve
            end = window.pageYOffset;
            direction = end - start;

            // run the callback
            if (direction > 0) {
                //going down
                down();
            }
            if (direction < 0) {
                //going up
                up();
            }

            // reset calculations
            start = null;
            end = null;
            direction = null;

            // set refresh every 66 ms roughly refresh rate of computer screens
        }, refresh || 66)
    }, false)
}


// this function execute 2 cb based on where the scrolling position on Y is.
export const scrollPosition = (distance, minimize, reset) => {

    const scrollFunction = () => {
        if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
            minimize();
        } else {
            reset();
        }
    }

    window.onscroll = function () { scrollFunction() }

}