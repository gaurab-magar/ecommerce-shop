import {Link} from "react-router-dom";
import './DropdownLogOut.css';
export const DropdownLogOut = () => {
  return (
    <div class="card border-0 bg-light dropdown-menu dropdown-menu-end position-absolute" style={{ bottom: '-80px', right: '0', zIndex: '100' }}>
        <div className="px-2">
            <ul class="list-unstyled">
                <li><Link class="px-2  d-inline py-1 dropdown-item bg-grey fw-semibold" to="/products">All eBooks</Link></li>
                <li><Link class="px-2  d-inline  py-1 dropdown-item bg-grey fw-semibold" to="/login">Login</Link></li>
                <li><Link class="px-2  d-inline py-1 dropdown-item bg-grey fw-semibold" to="/register">Register</Link></li>
            </ul>
        </div>
    </div>
  )
}
