import React from 'react';
import './Category.css'
const CategoryPopular = () => {
        return (
            <div className="container">
                <h3>Popular Categories</h3>
                <div className="row">
                    <div className="col-md-4">
                            <div className="new-category-box category-box-icon">
                                <h3>Data Entry</h3>
                                <i className="fas fa-sticky-note fa-lg"/>
                            </div>
                            <div className="category-box-content">

                            </div>
                    </div>
                </div>
            </div>
        );
}

export default CategoryPopular;