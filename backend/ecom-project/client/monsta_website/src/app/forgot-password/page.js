import React from 'react'
import './forgot-password.css'

export default function ForgotPassword() {
  return (
    <div>
      <div className="breadcrumbs_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <h3>Forgot Password</h3>
                <ul>
                  <li><a href="/">home</a></li>
                  <li>{'>'}</li>
                  <li>Forgot Password</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="forgot_password">
        <div className="container">
          <div className="row justify-center">
            <div className="col-md-6">
              <div className="forgot_card">
                <h2>Reset your password</h2>
                <p className="muted">Enter the email address associated with your account and we'll send a link to reset your password.</p>
                <form action="#" className="forgot_form">
                  <label htmlFor="email">Email address <span>*</span></label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" />
                  <div className="form_actions">
                    <button type="submit" className="btn primary">Send reset link</button>
                    <a className="back_to_login" href="/login-register">Back to login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
