const Skiplinks = () => {
  return (
    <div>
      <div id="skip__links" role="complementary">
        <span>&nbsp;</span>
        {/* <!-- HACK FOR NVDA ISSUE --> */}
        <a className="skip__links__link" href="#navbar">
          Skip to navigation
        </a>
        <a className="skip__links__link" href="#mainContent">
          Skip to main content
        </a>
        <a className="skip__links__link" href="#site__footer">
          Skip to footer
        </a>
      </div>
    </div>
  )
}
export default Skiplinks
