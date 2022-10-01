import React from 'react'

export default function Login() {
  return (
    <>
        <section className="container login ">
    <div className="col-md-12 appointment ftco-animate">
        <h3 className="mb-3" style={{color: "#fac564"}}>Login</h3>
        <form action="/login" method="POST" className="appointment-form">
            <div className="d-md-flex">
                
            </div>
            <div className="d-me-flex">
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Enter your email" 
                        onfocus="this.placeholder=''" onblur="this.placeholder='Please enter your email' "
                        required/>
                </div>
            </div>
            <div className="d-me-flex">
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Enter your password" 
                        onfocus="this.placeholder=''" onblur="this.placeholder='Please enter your passport' "
                        required/>
                </div>
            </div>
            
            <div className="form-group">
                <input type="submit"  className="btn btn-primary py-3 px-4"/>
            </div>
        </form>
    </div>
</section>
    
    </>
    
  )
}
