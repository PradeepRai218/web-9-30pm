import React from 'react'

export default function ResetPassword() {
  return (
    <div>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-5 shadow-lg w-50" >
            <h2 className="text-center mb-4">Reset Password</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter new password" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Reset Password</button>
                <p className="text-center mt-3">
                    <a href="/login" className="text-decoration-none">Back to Login</a>
                </p>
            </form>
        </div>
    </div>
    </div>
  )
}
