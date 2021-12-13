import React, {Component} from 'react'
import './Home.css'
import {ReactComponent as Motherboard} from '../../assets/images/motherboard.svg'
import {Navigate} from 'react-router'

// class MyMotherboard extends Motherboard {
//   constructor(props) {
//     super(props)
//     this.state = {
//       nagivate: false,
//     }
//   }

//   render() {
//     super.render()
//   }
// }
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {navSkills: false, navExternal: false, navMem: false}
  }
  render() {
    //navigate before rendering if any onClick pressed
    if (this.state.navSkills) {
      this.setState({navSkills: false})
      return <Navigate to="/home/skills" />
    }
    if (this.state.navExternal) {
      this.setState({navExternal: false})
      return <Navigate to="/home/external-links" />
    }
    if (this.state.navMem) {
      this.setState({navMem: false})
      return <Navigate to="/home/past" />
    }
    return (
      <div className="motherboard-container-style">
        {/* custom svg parts overlayed on original so onClick works */}
        <svg
          id="svgcopybox0"
          viewBox="0 0 921.80246 662.99997"
          className="mb-abs-style"
        >
          {/* IO with onclick and styling */}
          <g
            id="g3333"
            className="io-link-styles"
            transform="scale(3.4) rotate(90) translate(-30.8, -121.5)"
            onClick={() => this.setState({navExternal: true})}
          >
            <rect
              id="rect1729"
              className="rect-set-1-styles"
              transform="rotate(-90)"
              ry="0"
              height="19.643"
              width="12.143"
              y="298.03"
              x="-191.94"
            />
            <rect
              id="rect1731"
              className="rect-set-1-styles"
              transform="rotate(-90)"
              ry="0"
              height="19.643"
              width="12.143"
              y="298.29001"
              x="-177.67999"
            />
            <rect
              id="rect1733"
              className="rect-set-1-styles"
              transform="rotate(-90)"
              ry="0"
              height="18.128"
              width="17.066999"
              y="302.57999"
              x="-163.78999"
            />
            <rect
              id="rect1735"
              className="rect-set-1-styles"
              transform="rotate(-90)"
              ry="0"
              height="24.441"
              width="17.066999"
              y="299.79999"
              x="-142.19"
            />
            <g id="g1751" transform="rotate(-90,372.02,171.71)">
              <rect
                id="rect1737"
                className="rect-set-1-styles"
                ry="0"
                height="15.088"
                width="11.898"
                y="100.31"
                x="434.92001"
              />
              <g id="g1743" transform="translate(0.063135,-0.063135)">
                <path
                  id="path1739"
                  className="rect-set-2-styles"
                  connector-curvature="0"
                  d="m 439.26,106.51 v -4.6114 h -1.8335"
                />
                <path
                  id="path1741"
                  d="m 437.43,106.51 v -4.6114 h 1.8335"
                  className="rect-set-2-styles"
                  connector-curvature="0"
                />
              </g>
              <g id="g1749" transform="translate(5.0508,-0.12627)">
                <path
                  id="path1745"
                  d="m 439.26,106.51 v -4.6114 h -1.8335"
                  className="rect-set-2-styles"
                  connector-curvature="0"
                />
                <path
                  id="path1747"
                  className="rect-set-2-styles"
                  connector-curvature="0"
                  d="m 437.43,106.51 v -4.6114 h 1.8335"
                />
              </g>
            </g>
            <g id="g1767" transform="rotate(-90,379.54,179.23)">
              <rect
                id="rect1753"
                className="rect-set-1-styles"
                ry="0"
                height="15.088"
                width="11.898"
                y="100.31"
                x="434.92001"
              />
              <g id="g1759" transform="translate(0.063135,-0.063135)">
                <path
                  id="path1755"
                  d="m 439.26,106.51 v -4.6114 h -1.8335"
                  className="rect-set-2-styles"
                  connector-curvature="0"
                />
                <path
                  id="path1757"
                  className="rect-set-2-styles"
                  connector-curvature="0"
                  d="m 437.43,106.51 v -4.6114 h 1.8335"
                />
              </g>
              <g id="g1765" transform="translate(5.0508,-0.12627)">
                <path
                  id="path1761"
                  className="rect-set-2-styles"
                  connector-curvature="0"
                  d="m 439.26,106.51 v -4.6114 h -1.8335"
                />
                <path
                  id="path1763"
                  d="m 437.43,106.51 v -4.6114 h 1.8335"
                  className="rect-set-2-styles"
                  connector-curvature="0"
                />
              </g>
            </g>
            <rect
              id="rect1769"
              className="rect-set-3-styles"
              transform="rotate(-90)"
              height="11.964"
              width="9.0179005"
              y="299.64001"
              x="-95.873001"
            />
            <rect
              id="rect1771"
              className="rect-set-1-styles"
              transform="rotate(-90)"
              ry="0"
              height="17.834"
              width="13.853"
              y="299.70999"
              x="-69.695"
            />
            <rect
              id="rect1773"
              className="rect-set-1-styles"
              transform="rotate(-90)"
              ry="0"
              height="7.4768"
              width="7.7816"
              y="297.75"
              x="-83.623001"
            />
          </g>
          {/* Cpu with onclick and styling */}
          <g
            id="g3110"
            className="cpu-link-styles"
            transform="scale(3.4)"
            onClick={() => this.setState({navSkills: true})}
          >
            <rect
              id="rect3331"
              transform="rotate(-90)"
              opacity="0"
              height="40"
              width="40"
              y="444"
              x="-219.5"
            />
            <path
              id="path1775"
              d="m 179,-443 h 4.5 l 9.5,8.875 13.219,0.0937 8.625,-8.9688 h 5.0625 l 0.1875,-42.938 -5.3125,-0.0625 -5.0938,-3.0938 h -20.469 l -5.0938,3.0312 h -5.125 z m 5.2188,-5.0312 0.0108,-24.017 -3.0411,-2.2939 -0.0108,-5.0158 3.0411,-2.7042 h 31.188 l 1.8651,2.6465 0.01,5.4405 -1.6964,1.8114 -0.17857,24.133 z"
              nodetypes="ccccccccccccccccccccccccc"
              transform="rotate(90)"
              connector-curvature="0"
            />
          </g>
          {/* Ram with onclick and styling */}
          <g
            id="#g3331"
            transform="scale(3.2) rotate(90) translate(-285, -340)"
            className="ram-link-styles"
            onClick={() => this.setState({navMem: true})}
          >
            <rect
              id="rect1777"
              className="ram-blue-styles"
              transform="rotate(-90)"
              height="7.3235998"
              width="120.46"
              y="437.23001"
              x="-191.69"
            />
            <rect
              id="rect1779"
              className="ram-grey-styles"
              transform="rotate(-90)"
              height="1.0023"
              width="120.49"
              y="440.48999"
              x="-191.72"
            />
            <rect
              id="rect1781"
              className="ram-blue-styles"
              transform="rotate(-90)"
              height="7.3235998"
              width="120.46"
              y="455.29001"
              x="-191.69"
            />
            <rect
              id="rect1783"
              className="ram-grey-styles"
              transform="rotate(-90)"
              height="1.0023"
              width="120.49"
              y="458.54001"
              x="-191.72"
            />
            <rect
              id="rect1785"
              className="ram-white-styles"
              transform="rotate(-90)"
              height="7.3235998"
              width="120.46"
              y="446.45001"
              x="-191.69"
            />
            <rect
              id="rect1787"
              className="ram-grey-styles"
              transform="rotate(-90)"
              height="1.0023"
              width="120.49"
              y="449.70999"
              x="-191.72"
            />
            <rect
              id="rect1789"
              className="ram-white-styles"
              transform="rotate(-90)"
              height="7.3235998"
              width="120.46"
              y="464.66"
              x="-191.69"
            />
            <rect
              id="rect1791"
              className="ram-grey-styles"
              transform="rotate(-90)"
              height="1.0023"
              width="120.49"
              y="467.92001"
              x="-191.72"
            />
          </g>
        </svg>
        <Motherboard id="mb0" className="motherboard-image-style" />
      </div>
    )
  }
}

export default Home
