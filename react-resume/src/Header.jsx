const bullets = [];

export default function Header() {
  return (
    <div className="header">
      <h1 className="myname">Prashik Deshpande</h1>

      <p id="links">
        <a id="linkedin" href="https://www.linkedin.com/in/prashikdeshpande/">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i> Prashik Deshpande
        </a>
        |
        <a id="github" href="https://github.com/philomath242">
          <i className="fa fa-github" aria-hidden="true"></i> philomath242
        </a>
        |
        <a id="email" href="mailto:prashikdeshpande24@gmail.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          prashikdeshpande24@gmail.com
        </a>
        |
        <a id="mobile" href="callto:+919511728414">
          <i className="fa fa-phone" aria-hidden="true"></i> +91-9511728414
        </a>
      </p>
    </div>
  );
}
