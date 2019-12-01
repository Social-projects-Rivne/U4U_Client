import React, { Component } from "react";
import cherkasy from "./../../../../img/cherkasy-region.jpg";
import chernihiv from "./../../../../img/chernihiv-region.jpg";
import chernivtsi from "./../../../../img/chernivtsi-region.jpg";
import crimea from "./../../../../img/crimea-region.jpg";
import dnipro from "./../../../../img/dnipro-region.jpg";
import donetsk from "./../../../../img/donetsk-region.jpg";
import ivanoFrankivsk from "./../../../../img/ivano-frankivsk-region.jpg";
import kharkiv from "./../../../../img/kharkiv-region.jpg";
import kherson from "./../../../../img/kherson-region.jpg";
import khmelnytsky from "./../../../../img/khmelnytsky-region.jpg";
import kropyvnytskyi from "./../../../../img/kropyvnytskyi-region.jpg";
import kyiv from "./../../../../img/kyiv-region.jpg";
import luhansk from "./../../../../img/luhansk-region.jpg";
import lutsk from "./../../../../img/lutsk-region.jpg";
import lviv from "./../../../../img/lviv-region.jpg";
import mykolayiv from "./../../../../img/mykolayiv-region.jpg";
import odesa from "./../../../../img/odesa-region.jpg";
import poltava from "./../../../../img/poltava-region.jpg";
import rivne from "./../../../../img/rivne-region.jpg";
import sumy from "./../../../../img/sumy-region.jpg";
import ternopil from "./../../../../img/ternopil-region.jpg";
import uzhgorod from "./../../../../img/uzhgorod-region.jpg";
import vinnytsya from "./../../../../img/vinnytsya-region.jpg";
import zaporizhzhya from "./../../../../img/zaporizhzhya-region.jpg";
import zhytomyr from "./../../../../img/zhytomyr-region.jpg";

export default class MapContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      svg: null,
      loaded: false,
      count: 0
    }
  }

  componentDidUpdate() {
    if (this.state.count === 59 && !this.state.loaded) {
      this.setState({loaded: true});
      this.props.onImagesLoaded(true);
    }
  }

  componentDidMount() {
    if (!this.state.svg) this.loadSvg();
  }

  setCount() {
    this.setState({ count: this.state.count + 1 });
  };

  loadSvg = () => {
    setTimeout(() => {
      this.setState({svg: <svg version="1.1" id="svgMap" loading="lazy" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1200 800" style={{ enableBackground: 'new 0 0 1200 800' }} xmlSpace="preserve">
          <linearGradient id="gradient" x2="0" y2="1">
            <stop offset="0%" stopColor="blue" />
            <stop offset="100%" stopColor="yellow" />
          </linearGradient>
          <style type="text/css">
            {`.st0{fill:none;}`}
            {`.st1{fill:url(#crimea-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st2{fill:url(#cherkasy-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st3{fill:url(#chernihiv-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st4{fill:url(#chernivtsi-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st5{fill:url(#dnipro-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st6{fill:url(#donetsk-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st7{fill:url(#ivano-frankivsk-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st8{fill:url(#kharkiv-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st9{fill:url(#kherson-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st10{fill:url(#khmelnytsky-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st11{fill:url(#kyiv-region);}`}
            {`.st12{fill:url(#kyiv-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st13{fill:url(#kropyvnytskyi-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st14{fill:url(#luhansk-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st15{fill:url(#lviv-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st16{fill:url(#mykolayiv-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st17{fill:url(#odesa-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st18{fill:url(#poltava-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st19{fill:url(#rivne-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st20{fill:url(#sumy-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st21{fill:url(#ternopil-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st22{fill:url(#uzhgorod-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st23{fill:url(#vinnytsya-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st24{fill:url(#lutsk-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st25{fill:url(#zaporizhzhya-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
            {`.st26{fill:url(#zhytomyr-region);stroke:#000000;stroke-width:2;stroke-miterlimit:10;}`}
          </style>
          <pattern y="800" width="718" height="600" patternUnits="userSpaceOnUse" id="cherkasy-region" viewBox="218 -600 718 600" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="218" y="-600" className="st0" width="718" height="600" />
    
              <image style={{ overflow: 'visible' }} width="718" height="600" xlinkHref={cherkasy} loading="lazy" transform="matrix(0.3482 0 0 0.3482 718 -600)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="718" height="600" xlinkHref={cherkasy} loading="lazy" transform="matrix(0.3482 0 0 0.3482 0 -600)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="660" height="439" patternUnits="userSpaceOnUse" id="chernihiv-region" viewBox="351 -819 660 439" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="351" y="-819" className="st0" width="660" height="439" />
    
              <image style={{ overflow: 'visible' }} width="660" height="439" xlinkHref={chernihiv} loading="lazy" transform="matrix(1 0 0 1 660 -439)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="660" height="439" xlinkHref={chernihiv} loading="lazy" transform="matrix(1 0 0 1 0 -439)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="660" height="439" xlinkHref={chernihiv} loading="lazy" transform="matrix(1 0 0 1 660 -878)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="660" height="439" xlinkHref={chernihiv} loading="lazy" transform="matrix(1 0 0 1 0 -878)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="502.5" height="337.5" patternUnits="userSpaceOnUse" id="chernivtsi-region" viewBox="0 -369.9 502.5 337.5" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-369.9" className="st0" width="502.5" height="337.5" />
    
              <image style={{ overflow: 'visible' }} width="670" height="450" xlinkHref={chernivtsi} loading="lazy" transform="matrix(0.2985 0 0 0.2985 159 -134.3284)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="670" height="450" xlinkHref={chernivtsi} loading="lazy" transform="matrix(0.2985 0 0 0.2985 159 -471.8284)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="810" height="456" patternUnits="userSpaceOnUse" id="crimea-region" viewBox="206 -456 810 456" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="206" y="-456" className="st0" width="810" height="456" />
    
              <image style={{ overflow: 'visible' }} width="1080" height="608" xlinkHref={crimea} loading="lazy" transform="matrix(0.3704 0 0 0.3704 810 -225.1852)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="1080" height="608" xlinkHref={crimea} loading="lazy" transform="matrix(0.3704 0 0 0.3704 0 -225.1852)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="800" height="581" patternUnits="userSpaceOnUse" id="dnipro-region" viewBox="142 -581 800 581" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="142" y="-581" className="st0" width="800" height="581" />
    
              <image style={{ overflow: 'visible' }} width="800" height="581" xlinkHref={dnipro} loading="lazy" transform="matrix(0.5 0 0 0.5 800 -552)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="800" height="581" xlinkHref={dnipro} loading="lazy" transform="matrix(0.5 0 0 0.5 0 -552)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="900" height="675" patternUnits="userSpaceOnUse" id="donetsk-region" viewBox="100 -675 900 675" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="100" y="-675" className="st0" width="900" height="675" />
    
              <image style={{ overflow: 'visible' }} width="900" height="675" xlinkHref={donetsk} loading="lazy" transform="matrix(0.4444 0 0 0.4444 900 -473.5)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="900" height="675" xlinkHref={donetsk} loading="lazy" transform="matrix(0.4444 0 0 0.4444 0 -473.5)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="760" height="486" patternUnits="userSpaceOnUse" id="ivano-frankivsk-region" viewBox="28 -675 760 486" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="28" y="-675" className="st0" width="760" height="486" />
    
              <image style={{ overflow: 'visible' }} width="760" height="486" xlinkHref={ivanoFrankivsk} loading="lazy" transform="matrix(0.5263 0 0 0.5263 760 -255.7895)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="760" height="486" xlinkHref={ivanoFrankivsk} loading="lazy" transform="matrix(0.5263 0 0 0.5263 0 -255.7895)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="760" height="486" xlinkHref={ivanoFrankivsk} loading="lazy" transform="matrix(0.5263 0 0 0.5263 760 -741.7895)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="760" height="486" xlinkHref={ivanoFrankivsk} loading="lazy" transform="matrix(0.5263 0 0 0.5263 0 -741.7895)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="1200" height="803" patternUnits="userSpaceOnUse" id="kharkiv-region" viewBox="0 -803 1200 803" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-803" className="st0" width="1200" height="803" />
    
              <image style={{ overflow: 'visible' }} width="1200" height="803" xlinkHref={kharkiv} loading="lazy" transform="matrix(0.25 0 0 0.25 815 -602.25)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="800" height="533" patternUnits="userSpaceOnUse" id="kherson-region" viewBox="230 -533 800 533" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="230" y="-533" className="st0" width="800" height="533" />
    
              <image style={{ overflow: 'visible' }} width="800" height="533" xlinkHref={kherson} loading="lazy" transform="matrix(0.5 0 0 0.5 800 -308.75)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="800" height="533" xlinkHref={kherson} loading="lazy" transform="matrix(0.5 0 0 0.5 0 -308.75)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="800" height="600" patternUnits="userSpaceOnUse" id="khmelnytsky-region" viewBox="0 -810 800 600" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-810" className="st0" width="800" height="600" />
    
              <image style={{ overflow: 'visible' }} width="800" height="600" xlinkHref={khmelnytsky} loading="lazy" transform="matrix(0.375 0 0 0.375 187 -225)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="800" height="600" xlinkHref={khmelnytsky} loading="lazy" transform="matrix(0.375 0 0 0.375 187 -825)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="1275.8" height="851" patternUnits="userSpaceOnUse" id="kropyvnytskyi-region" viewBox="0 -851 1275.8 851" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-851" className="st0" width="1275.8" height="851" />
    
              <image style={{ overflow: 'visible' }} width="1772" height="1182" xlinkHref={kropyvnytskyi} loading="lazy" transform="matrix(0.1975 0 0 0.1975 494.92 -490.2525)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="600" height="446.3" patternUnits="userSpaceOnUse" id="kyiv-region" viewBox="237 -478.9 600 446.3" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="237" y="-478.9" className="st0" width="600" height="446.3" />
    
              <image style={{ overflow: 'visible' }} width="800" height="595" xlinkHref={kyiv} loading="lazy" transform="matrix(0.5 0 0 0.5 600 -297.5)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="800" height="595" xlinkHref={kyiv} loading="lazy" transform="matrix(0.5 0 0 0.5 0 -297.5)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="800" height="595" xlinkHref={kyiv} loading="lazy" transform="matrix(0.5 0 0 0.5 600 -743.75)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="800" height="595" xlinkHref={kyiv} loading="lazy" transform="matrix(0.5 0 0 0.5 0 -743.75)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="480" height="640" patternUnits="userSpaceOnUse" id="luhansk-region" viewBox="0 -640 480 640" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-640" className="st0" width="480" height="640" />
    
              <image style={{ overflow: 'visible' }} width="480" height="640" xlinkHref={luhansk} loading="lazy" transform="matrix(0.625 0 0 0.625 0 -563)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="400" height="266" patternUnits="userSpaceOnUse" id="lutsk-region" viewBox="0 -266 400 266" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-266" className="st0" width="400" height="266" />
    
              <image style={{ overflow: 'visible' }} width="800" height="532" id="lutsk_3_" xlinkHref={lutsk} loading="lazy" transform="matrix(0.5 0 0 0.5 9.574340e-06 -266)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="555" height="512.3" patternUnits="userSpaceOnUse" id="lviv-region" viewBox="28.5 -646 555 512.3" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="28.5" y="-646" className="st0" width="555" height="512.3" />
    
              <image style={{ overflow: 'visible' }} width="740" height="683" xlinkHref={lviv} loading="lazy" transform="matrix(0.5405 0 0 0.5405 555 -369.1892)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="740" height="683" xlinkHref={lviv} loading="lazy" transform="matrix(0.5405 0 0 0.5405 0 -369.1892)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="740" height="683" xlinkHref={lviv} loading="lazy" transform="matrix(0.5405 0 0 0.5405 555 -881.4392)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="740" height="683" xlinkHref={lviv} loading="lazy" transform="matrix(0.5405 0 0 0.5405 0 -881.4392)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="1140" height="870" patternUnits="userSpaceOnUse" id="mykolayiv-region" viewBox="0 -870 1140 870" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-870" className="st0" width="1140" height="870" />
    
              <image style={{ overflow: 'visible' }} width="1140" height="870" xlinkHref={mykolayiv} loading="lazy" transform="matrix(0.2632 0 0 0.2632 505 -406.4737)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="900" height="802" patternUnits="userSpaceOnUse" id="odesa-region" viewBox="0 -802 900 802" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-802" className="st0" width="900" height="802" />
    
              <image style={{ overflow: 'visible' }} width="900" height="401" xlinkHref={odesa} loading="lazy" transform="matrix(0.7778 0 0 0.7778 180 -381.9445)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="900" height="401" xlinkHref={odesa} loading="lazy" transform="matrix(0.7778 0 0 0.7778 180 -782.9445)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="768" height="576" patternUnits="userSpaceOnUse" id="poltava-region" viewBox="196 -794 768 576" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="196" y="-794" className="st0" width="768" height="576" />
    
              <image style={{ overflow: 'visible' }} width="1024" height="768" xlinkHref={poltava} loading="lazy" transform="matrix(0.3906 0 0 0.3906 768 -300)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="1024" height="768" xlinkHref={poltava} loading="lazy" transform="matrix(0.3906 0 0 0.3906 0 -300)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="1024" height="768" xlinkHref={poltava} loading="lazy" transform="matrix(0.3906 0 0 0.3906 768 -876)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="1024" height="768" xlinkHref={poltava} loading="lazy" transform="matrix(0.3906 0 0 0.3906 0 -876)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="329.1" height="247.1" patternUnits="userSpaceOnUse" id="rivne-region" viewBox="209 -422.6 329.1 247.1" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="209" y="-422.6" className="st0" width="329.1" height="247.1" />
    
              <image style={{ overflow: 'visible' }} width="1600" height="1201" xlinkHref={rivne} loading="lazy" transform="matrix(0.2057 0 0 0.2057 329.1429 -247.0629)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="1600" height="1201" xlinkHref={rivne} loading="lazy" transform="matrix(0.2057 0 0 0.2057 0 -247.0629)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="1600" height="1201" xlinkHref={rivne} loading="lazy" transform="matrix(0.2057 0 0 0.2057 329.1429 -494.1257)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="1600" height="1201" xlinkHref={rivne} loading="lazy" transform="matrix(0.2057 0 0 0.2057 0 -494.1257)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="640" height="479" patternUnits="userSpaceOnUse" id="sumy-region" viewBox="49 -479 640 479" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="49" y="-479" className="st0" width="640" height="479" />
    
              <image style={{ overflow: 'visible' }} width="640" height="479" xlinkHref={sumy} loading="lazy" transform="matrix(0.5469 0 0 0.5469 640 -338.4766)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="640" height="479" xlinkHref={sumy} loading="lazy" transform="matrix(0.5469 0 0 0.5469 0 -338.4766)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="620" height="403" patternUnits="userSpaceOnUse" id="ternopil-region" viewBox="0 -419 620 403" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-419" className="st0" width="620" height="403" />
    
              <image style={{ overflow: 'visible' }} width="620" height="403" xlinkHref={ternopil} loading="lazy" transform="matrix(0.4839 0 0 0.4839 71 -195)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="620" height="403" xlinkHref={ternopil} loading="lazy" transform="matrix(0.4839 0 0 0.4839 71 -598)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="700" height="441" patternUnits="userSpaceOnUse" id="uzhgorod-region" viewBox="80 -549.5 700 441" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="80" y="-549.5" className="st0" width="700" height="441" />
    
              <image style={{ overflow: 'visible' }} width="700" height="441" xlinkHref={uzhgorod} loading="lazy" transform="matrix(0.3571 0 0 0.3571 700 -157.5)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="700" height="441" xlinkHref={uzhgorod} loading="lazy" transform="matrix(0.3571 0 0 0.3571 0 -157.5)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="700" height="441" xlinkHref={uzhgorod} loading="lazy" transform="matrix(0.3571 0 0 0.3571 700 -598.5)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="700" height="441" xlinkHref={uzhgorod} loading="lazy" transform="matrix(0.3571 0 0 0.3571 0 -598.5)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="600" height="450" patternUnits="userSpaceOnUse" id="vinnytsya-region" viewBox="0 -578.5 600 450" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-578.5" className="st0" width="600" height="450" />
    
              <image style={{ overflow: 'visible' }} width="600" height="450" xlinkHref={vinnytsya} loading="lazy" transform="matrix(0.5 0 0 0.5 293 -225)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="600" height="450" xlinkHref={vinnytsya} loading="lazy" transform="matrix(0.5 0 0 0.5 293 -675)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="468.8" height="351.8" patternUnits="userSpaceOnUse" id="zaporizhzhya-region" viewBox="214.8 -351.8 468.8 351.8" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect x="214.8" y="-351.8" className="st0" width="468.8" height="351.8" />
    
              <image style={{ overflow: 'visible' }} width="625" height="469" xlinkHref={zaporizhzhya} loading="lazy" transform="matrix(0.75 0 0 0.75 468.75 -351.75)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="625" height="469" xlinkHref={zaporizhzhya} loading="lazy" transform="matrix(0.75 0 0 0.75 0 -351.75)">
              </image>
            </g>
          </pattern>
    
          <pattern y="800" width="800" height="543" patternUnits="userSpaceOnUse" id="zhytomyr-region" viewBox="0 -610.3 800 543" style={{ overflow: 'visible' }} onLoad={() => this.setCount()}>
            <g>
              <rect y="-610.3" className="st0" width="800" height="543" />
    
              <image style={{ overflow: 'visible' }} width="800" height="543" xlinkHref={zhytomyr} loading="lazy" transform="matrix(0.5 0 0 0.5 196 -271.5)">
              </image>
    
              <image style={{ overflow: 'visible' }} width="800" height="543" xlinkHref={zhytomyr} loading="lazy" transform="matrix(0.5 0 0 0.5 196 -814.5)">
              </image>
            </g>
          </pattern>
    
          {this.props.children}
    
          <image style={{ display: 'none', overflow: 'visible' }} width="800" height="532" id="lutsk" xlinkHref={lutsk} loading="lazy" transform="matrix(1 0 0 1 180.3 108.1)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="1600" height="1201" xlinkHref={rivne} loading="lazy" transform="matrix(0.2057 0 0 0.2057 325.6287 195.0186)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="800" height="543" xlinkHref={zhytomyr} loading="lazy" transform="matrix(1 0 0 1 137.3 132.6)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="800" height="595" xlinkHref={kyiv} loading="lazy" transform="matrix(0.75 0 0 0.75 294 171)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="660" height="439" xlinkHref={chernihiv} loading="lazy" transform="matrix(1 0 0 1 248 194)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="640" height="479" xlinkHref={sumy} loading="lazy" transform="matrix(1 0 0 1 460.4001 -86)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="718" height="600" xlinkHref={cherkasy} loading="lazy" transform="matrix(1 0 0 1 179 53)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="670" height="450" xlinkHref={chernivtsi} loading="lazy" transform="matrix(0.75 0 0 0.75 452 180)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="1080" height="608" xlinkHref={crimea} loading="lazy" transform="matrix(0.75 0 0 0.75 338 229)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="900" height="675" xlinkHref={donetsk} loading="lazy" transform="matrix(1 0 0 1 140.6002 37.3499)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="760" height="486" xlinkHref={ivanoFrankivsk} loading="lazy" transform="matrix(1 0 0 1 152 122)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="800" height="533" xlinkHref={kherson} loading="lazy" transform="matrix(1 0 0 1 163.1 114.8001)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="620" height="403" xlinkHref={ternopil} loading="lazy" transform="matrix(1 0 0 1 301 185)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="1024" height="768" xlinkHref={poltava} loading="lazy" transform="matrix(0.75 0 0 0.75 199 89)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="625" height="469" xlinkHref={zaporizhzhya} loading="lazy" transform="matrix(0.75 0 0 0.75 347 201)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="480" height="640" xlinkHref={luhansk} loading="lazy" transform="matrix(1 0 0 1 372 50)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="1140" height="870" xlinkHref={mykolayiv} loading="lazy" transform="matrix(1 0 0 1 8 -111)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="1772" height="1182" xlinkHref={kropyvnytskyi} loading="lazy" transform="matrix(0.72 0 0 0.72 29 -23)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="900" height="401" xlinkHref={odesa} loading="lazy" transform="matrix(1 0 0 1 115 118)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="740" height="683" xlinkHref={lviv} loading="lazy" transform="matrix(0.75 0 0 0.75 288 130)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="700" height="441" xlinkHref={uzhgorod} loading="lazy" transform="matrix(1 0 0 1 243 126)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="800" height="600" xlinkHref={khmelnytsky} loading="lazy" transform="matrix(1 0 0 1 206 92)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="600" height="450" xlinkHref={vinnytsya} loading="lazy" transform="matrix(1 0 0 1 280 201)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="800" height="581" xlinkHref={dnipro} loading="lazy" transform="matrix(1 0 0 1 257 92)">
          </image>
          <image style={{ display: 'none', overflow: 'visible' }} width="1200" height="803" xlinkHref={kharkiv} loading="lazy" transform="matrix(1 0 0 1 -27 9)">
          </image>
        </svg>

      });
    }, 400)
  };

  render() {

    return (
      this.state.svg ? this.state.svg : ""
    );
  }
}
