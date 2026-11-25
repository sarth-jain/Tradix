import React, { useState } from 'react';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pan: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Connect to POST /register once auth is implemented
        console.log("Form submitted:", formData);
        alert("Account creation coming soon!");
    };

    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5 justify-content-center">
                <div className="col-md-6">
                    <div className="text-center mb-4">
                        <img src="media/images/signup.png" alt="signup" style={{ width: "50%" }} />
                        <h4 className="mt-3">Open a free demat account</h4>
                        <p className="text-muted">Start investing in stocks, derivatives, mutual funds and more.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                placeholder="Enter your 10-digit mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">PAN Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pan"
                                placeholder="Enter your PAN (e.g. ABCDE1234F)"
                                value={formData.pan}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="d-grid mt-4">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Create Account
                            </button>
                        </div>

                        <p className="text-center text-muted mt-3" style={{ fontSize: "12px" }}>
                            By creating an account, you agree to our{" "}
                            <a href="#">Terms & Conditions</a> and{" "}
                            <a href="#">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;