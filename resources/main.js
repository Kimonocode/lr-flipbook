import {PageFlip} from 'page-flip';
import './styles.scss';

document.addEventListener('DOMContentLoaded', function() {

    const pageFlip = new PageFlip(
        document.getElementById("demoBookExample"),
        {
            width: 550, // base page width
            height: 733, // base page height

            size: "stretch",
            // set threshold values:
            minWidth: 315,
            maxWidth: 800,
            minHeight: 420,
            maxHeight: 800,

            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: false,
            mobileScrollSupport: false // disable content scrolling on mobile devices
        }
    );

    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    
    document.querySelector(".btn-prev").addEventListener("click", () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });
});
