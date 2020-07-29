import React, { Component } from "react";
import SubHeader from "./subheader";
import GeoLocation from "./geoLocation";
import Feedback from "./feedback";
class HomeBody extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SubHeader
          index="0"
          imgsrc="https://source.unsplash.com/700x600/?website"
          title="Sell your products everywhere"
          text="Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
          authentic tumeric truffaut hexagon try-hard chambray."
        />

        <SubHeader
          index="1"
          imgsrc="https://source.unsplash.com/700x600/?business"
          title="Market and mangage your business"
          text="Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
          authentic tumeric truffaut hexagon try-hard chambray."
        />

        <SubHeader
          index="2"
          imgsrc="https://source.unsplash.com/700x600/?technology"
          title="Find customers at your location"
          text="Lorem Ipsum is sCopper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
          authentic tumeric truffaut hexagon try-hard chambray.imply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an "
        />
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
            <GeoLocation />
            <Feedback />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomeBody;
