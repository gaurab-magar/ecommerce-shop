import {Link} from  'react-router-dom';
export const Hero = () => {
  return (
    <section className="container-fluid p-3 bg-light">
        <div className="row d-flex justify-content-center">
            <div className="col-md-6 my-auto">
                <div className="">
                    <h1 className="fw-bold display-5 mb-3">The Ultimate eBook Store</h1>
                    <p className="fs-4 text-muted">Code Book is the world's most popular and authoritative<br></br>
                    source for computer science ebooks . Find rating and access<br>
                    </br> to the newest books digitally</p>
                    <Link to="/products">
                        <button type="button" className="btn btn-primary px-3 fw-bold py-2 rounded-3">Explore eBooks</button>
                    </Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className="img-container">
                    <img className="img-fluid rounded-4 w-100 h-100" src="https://source.unsplash.com/random/800x600" alt="Unsplash Image" />
                </div>
            </div>
        </div>
    </section>
  )
}
