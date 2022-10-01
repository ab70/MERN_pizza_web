import React from 'react'

export default function Register() {
  return (
    <>
        <section class="container Register ">
    
    <div class="col-md-12 appointment ftco-animate">
        <h3 class="mb-3" style={{color: "#fac564"}}>Register</h3>
        <form action="/register" method="POST" class="appointment-form">
            <div class="d-md-flex">
                <div class="form-group">
                    <input type="text" name="username" class="form-control" placeholder="Name" onfocus="this.placeholder=''"
                        onblur="this.placeholder='Please enter your first name' " required/>
                </div>
            </div>
            <div class="d-me-flex">
                <div class="form-group">
                    <input type="email" name="email" class="form-control" placeholder="Email-address"
                        onfocus="this.placeholder=''" onblur="this.placeholder='Please enter your email address' "
                        required/>
                </div>
            </div>
            <div class="d-me-flex">
                <div class="form-group">
                    <input type="password" name="password" class="form-control" placeholder="password"
                        onfocus="this.placeholder=''" onblur="this.placeholder='Please enter your password' "
                        required/>
                </div>
            </div>
            <div class="form-group">
                <textarea name="address" id="" cols="30" rows="3" class="form-control" placeholder="Address"
                    onfocus="this.placeholder=''" onblur="this.placeholder='Please enter your address' "></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Send" class="btn btn-primary py-3 px-4"/>
            </div>
        </form>
    </div>
</section>

    </>
  )
}
