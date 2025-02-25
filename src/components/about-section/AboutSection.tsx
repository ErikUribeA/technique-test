import Image from "next/image";
import './AboutSection.sass'
import Button from "../UI/button/button";

export default function AboutSection() {
    return (
        <section>
            <div className="top-part">
                <div>
                    <h2>
                        INTRODUCTION
                    </h2>
                    <div className="flex w-sceen justify-between items-center gap-4">
                        <h3>TO HYDRA VR</h3>
                        <Image src='/images/icon-long-arrow.png' alt="longArrow" width={228} height={100} />
                    </div>
                </div>
                <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>
            <div className="bottom-part">
                <Image src='/images/about-image.png' width={524} height={557} alt="about image" />
                <div className="about-part">
                    <h1>
                        <span>ABOUT</span>
                        HYDRA VR
                    </h1>
                    <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.</p>
                    <Button text="LET’S GET IN TOUCH" />
                </div>
            </div>
        </section>
    )
}