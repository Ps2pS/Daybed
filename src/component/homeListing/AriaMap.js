import React from "react";

export default function AriaMap() {

    return (
        <div className="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1200&amp;height=400&amp;hl=en&amp;q=noida&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    );
}
// const arry =[{ 
//     "stuff": {
//         "onetype": [
//             {"id":1,"name":"John Doe"},
//             {"id":2,"name":"Don Joeh"}
//         ],
//         "othertype": {"id":2,"company":"ACME"}
//     }, 
//     "otherstuff": {
//         "thing": [[1,42],[2,2]]
//      }
// }]

// const flatArray = arry.flat(Infinity);

// console.log("array = ", flatArray);