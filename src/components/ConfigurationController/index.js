// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onToggleContent = () => {
        onToggleShowContent()
      }
      const onToggleLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onToggleRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-container">
          <h1 className="heading">Layout</h1>
          <div className="show-cont">
            <input
              type="checkbox"
              className="select"
              onClick={onToggleContent}
              id="checkbox"
            />
            <label className="label" htmlFor="checkbox">
              Content
            </label>
          </div>
          <div className="show-cont">
            <input
              type="checkbox"
              className="select"
              onClick={onToggleLeftNavbar}
              id="checkbox"
            />
            <label className="label" htmlFor="checkbox">
              Left Navbar
            </label>
          </div>
          <div className="show-cont">
            <input
              type="checkbox"
              className="select"
              onClick={onToggleRightNavbar}
              id="checkbox"
            />
            <label className="label" htmlFor="checkbox">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
