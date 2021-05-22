import { useState } from "react"




function Navbar() {

    const state = useState()
    const [count, setCount] = useState(0)

    function dropNavDown() {
        let navBar = document.getElementById('navBar')
        let bars = document.getElementById('bars')
        let bar1 = document.getElementById('bar1')
        let bar2 = document.getElementById('bar2')
        let bar3 = document.getElementById('bar3')
        setCount(count + 1)
        var test = count;
        var lastone = +test.toString().split('').pop();

        if (lastone == 0 || lastone == 2 || lastone == 4 || lastone == 6 || lastone == 8) {
            bars.style.top = "17px"
            bar1.style.position = "absolute"
            bar3.style.position = "absolute"
            navBar.style.top = "45px"
            bar1.style.transform = "rotate(-45deg)";
            bar2.style.display = "none"
            bar3.style.transform = "rotate(45deg)";
        }
        else {

            bar3.style.transform = "rotate(0deg)";
            bar1.style.transform = "rotate(0deg)";
            navBar.style.top = "-140px"
            bars.style.top = "13px"
            setTimeout(() => {
                bar2.style.display = "block"
                bar1.style.position = "static"
                bar3.style.position = "absolute" 
            }, 100);
            
            setTimeout(() => { 
                bar1.style.position = "static"
                bar3.style.position = "absolute" 
            }, 120);
            
            setTimeout(() => { 
                bar3.style.position = "static" 
            }, 130);
        }



    }

    return (
        <>
            <div className="bars" id="bars" onClick={dropNavDown}   >
                <span className="bar" id="bar1"></span>
                <span className="bar" id="bar2"></span>
                <span className="bar" id="bar3"></span>
            </div>
            <section className="navSection">
                <div className="navElements logoFor--700">
                <i class="fa fa-superpowers fa-2x" aria-hidden="true"></i> 
                </div>
                <div className="navBar" id="navBar">
                    <a className="navElements" href="">Element1</a>
                    <a className="navElements" href="">Element2</a>
                    <a className="navElements" href="">Element3</a>
                    <div className="navElements logoFor-700">
                <i class="fa fa-superpowers fa-2x" aria-hidden="true"></i> 
                </div>
                    <a className="navElements" href="">Element4</a>
                    <a className="navElements" href="">Element5</a>
                    <a className="navElements" href="">Element6</a>
                </div>
            </section>
        </>
    )

}


export default Navbar;
