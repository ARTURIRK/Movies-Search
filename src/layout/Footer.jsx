function Footer(){
    return <footer className="page-footer cyan darken-2">
    <div className="footer-copyright cyan darken-2">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
}
export {Footer}