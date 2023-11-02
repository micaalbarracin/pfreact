import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <Link to= '/'>
                Shimmer Bags
            </Link>

            <section>
                <Link to='/category/mochila'>Mochilas</Link>
                <Link to= '/category/cartera'>Carteras</Link>
                <Link to='/category/riñonera'>Riñoneras</Link>
            </section>
            <CartWidget/>
        </nav>
    )
}
export default Navbar