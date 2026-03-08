import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Buyproduct() {
    const { id } = useParams();

    const [sv, sf] = useState(null);
    const productdetail = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
            sf(d.data);
        });
    };
    useEffect((d) => {
        productdetail();
    }, [id]);
    if (!sv) return <p>Loading...</p>;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="card shadow mt-3">
                        <img src={sv.thumbnail} className="img-fluid" alt={sv.id} />
                         <div>
            <p className="fw-bold">Images</p>
            {sv.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${sv.id}-${idx}`}
                className="img-thumbnail me-2"
                style={{ width: "170px",float:'left' }}
              />
            ))}
          </div>
                    </div>
           
                </div>
                <div className="col-md-8">
                    <div className="card shadow p-3">
                        <p className="h3"> {sv.title}</p>
                        <hr />
                        <Link to="/Products" className="btn btn-success btn-sm" style={{ width: '100' }}>Back</Link>

                        <p>Description: {sv.description}</p>
                        <p>Category: {sv.category}</p>
                        <p className='h1'>Price: ${sv.price}</p>
                        <p>Discount: {sv.discountPercentage}%</p>
                        <p>Rating: {sv.rating}</p>
                        <p>Stock: {sv.stock}</p>
                        <p>Brand: {sv.brand}</p>
                        <p>SKU: {sv.sku}</p>
                        <p>Weight: {sv.weight}g</p>

                        <p>
                            Dimensions:{" "}
                            {sv.dimensions
                                ? `${sv.dimensions.width} × ${sv.dimensions.height} × ${sv.dimensions.depth}`
                                : "N/A"}
                        </p>

                        <p>Warranty: {sv.warrantyInformation}</p>
                        <p>Shipping: {sv.shippingInformation}</p>
                        <p>Availability: {sv.availabilityStatus}</p>

                        {/* Tags */}
                        <p>Tags: {sv.tags?.join(", ") ?? "No tags"}</p>
                        <div>
                            <p className="fw-bold">Reviews:</p>
                            {sv.reviews?.length > 0 ? (
                                sv.reviews.map((review, i) => (
                                    <div key={i}>
                                        <p>⭐ {review.rating} – {review.comment}</p>
                                        <small>
                                            by {review.reviewerName} ({review.reviewerEmail}) on{" "}
                                            {new Date(review.date).toLocaleDateString()}
                                        </small>
                                    </div>
                                ))
                            ) : (
                                <p>No reviews</p>
                            )}
                        </div>
                        <p>Return Policy: {sv.returnPolicy}</p>
                        <p>Minimum Order Qty: {sv.minimumOrderQuantity}</p>

                        {/* Meta safely */}
                        {sv.meta && (
                            <div>
                                <p className="fw-bold">Meta</p>
                                <p>Created At: {new Date(sv.meta.createdAt).toLocaleString()}</p>
                                <p>Updated At: {new Date(sv.meta.updatedAt).toLocaleString()}</p>
                                <p>Barcode: {sv.meta.barcode}</p>
                                <p>
                                    QR Code:{" "}
                                    <a href={sv.meta.qrCode} target="_blank" rel="noopener noreferrer">
                                        View
                                    </a>
                                </p>
                            </div>
                        )}
                        <div>
                            <p className="fw-bold">Images</p>
                            {sv.images?.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`${sv.id}-${idx}`}
                                    className="img-thumbnail me-2"
                                    style={{ width: "200px", float: 'left' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Buyproduct