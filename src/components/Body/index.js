// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="container">
          {showContent && (
            <div className="content-cont">
              <h1 className="heading">Content</h1>
              <p className="para">
                Lorem ispum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor icididunt ut labore et dolore magna aliqua. Ut
                anim ad minim veniam.
              </p>
            </div>
          )}
          {showLeftNavbar && (
            <div className="left-cont">
              <h1 className="heading">Left Navbar Menu</h1>
              <p className="para">Item 1</p>
              <p className="para">Item 2</p>
              <p className="para">Item 3</p>
              <p className="para">Item 4</p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-cont">
              <h1 className="heading">Right Navbar</h1>
              <div className="div">
                <p className="para">Ad 1</p>
              </div>
              <div className="div">
                <p className="para">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
