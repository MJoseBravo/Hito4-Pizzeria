
const Navbar = () => {
    const total = 25000
    const token = true
    return (
        <nav className="opcion-navbar navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid barra-principal">
                <a className="navbar-brand" href="#">Pizzeria Mamma Mia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
                   <div className="navbar-nav barra-nav">
                        <a className="nav-link active" aria-current="page" href="#"><i className="fa-solid fa-pizza-slice"></i>Home</a>
                        <a className="nav-link" href="#">
                            {
                            token ? <div><i className="fa-solid fa-lock-open"></i>Profile</div> : null
                            }  
                        </a>
                        <a className="nav-link" href="#">
                            {
                            token ? <div><i className="fa-solid fa-lock"></i>Logout</div> : null
                            }
                        </a>
                        <a className="nav-link" href="#">
                            {
                            token ? null : <div><i className="fa-solid fa-key"></i>Login</div>
                            } 
                        </a>
                        <a className="nav-link" href="#">
                            {
                            token ? null : <div><i className="fa-solid fa-user"></i>Register</div>
                            }           
                        </a>
                   </div>
                   <div className="nav navbar-nav navbar-right boton-total">
                   <button className="btn btn-secondary" type="submit"><i className="fa-solid fa-cart-shopping"></i>Total: ${numberWithCommas(total)}</button>
                   </div>
                </div>
            </div>
        </nav>
    )
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default Navbar



