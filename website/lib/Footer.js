const React = require('react');

class Footer extends React.Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <footer className="nav-footer" id="footer">
                <section className="copyright">
                    Copyright &copy; {currentYear} 大面坡方氏家族.
                </section>
            </footer>
        );
    }
}

module.exports = Footer;
