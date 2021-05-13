const Footer = () => (
    <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
            <p className="text-light">
                {'Developed by '}  
                <a href="https://github.com/pedrorebello" target="_blank" rel="noreferrer">
                    Pedro Rebello
                </a>
            </p>
            <p className="text-light">
                <small>
                    <strong>Semana Spring React</strong>
                    <br/>
                    {'Event by DevSuperior: '} 
                    <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">
                        @devsuperior.ig
                    </a>
                </small>
            </p>
        </div>
    </footer>
)

export default Footer;