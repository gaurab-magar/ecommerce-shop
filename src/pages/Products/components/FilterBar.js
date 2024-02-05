import React from 'react'

export const FilterBar = ({setShow}) => {
  return (
    <div className="col-md-3 position-fixed top-0 bottom-0">
        <div className="card border-0 shadow">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="fw-bold text-center py-2 mb-0">Filters</h5>
                <span onClick={() => setShow(false)} className="close-icon">
                    <i className="fas fa-times"></i>
                </span>
            </div>
            <div className="card-body">
                <h4 className="fw-semi">Sort By:</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="sortBy" id="sortByLowToHigh" />
                    <label className="form-check-label" htmlFor="sortByLowToHigh">
                        Price - Low to High
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="sortBy" id="sortByHighToLow" />
                    <label className="form-check-label" htmlFor="sortByHighToLow">
                        Price - High to Low
                    </label>
                </div>
                <h4 className="fw-semi">Rating:</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="rating4StarsAbove" />
                    <label className="form-check-label" htmlFor="rating4StarsAbove">
                        4 Stars & Above
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="rating3StarsAbove" />
                    <label className="form-check-label" htmlFor="rating3StarsAbove">
                        3 Stars & Above
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="rating2StarsAbove" />
                    <label className="form-check-label" htmlFor="rating2StarsAbove">
                        2 Stars & Above
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="rating1StarAbove" />
                    <label className="form-check-label" htmlFor="rating1StarAbove">
                        1 Star & Above
                    </label>
                </div>
                <h4 className="fw-semi">Other Filters:</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="bestseller" id="bestSellerOnly" />
                    <label className="form-check-label" htmlFor="bestSellerOnly">
                        Best Seller only
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="instock" id="inStockOnly" />
                    <label className="form-check-label" htmlFor="inStockOnly">
                        InStock Only
                    </label>
                </div>

                <div className="text-center py-4">
                    <button className="btn btn-danger rounded-4">Clear Filters</button>
                </div>
            </div>
        </div>
  </div>
  )
}
