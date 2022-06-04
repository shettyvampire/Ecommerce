import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-light bg-dark py-0">
            <div class="container py-0"><br />
                {/* <footer class="py-5 py-0"> */}
                    <div class="row py-0">
                        <div class="col-2 py-0">
                            <h5>About</h5>
                            <ul class="nav flex-column py-0">
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Contact us</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">About us</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Advertise</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Corporate Information</a></li>
                            </ul>
                        </div>

                        <div class="col-2">
                            <h5>Policy</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Return Policy</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Terms of use</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Security</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Privacy</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Sell on we5</a></li>
                            </ul>
                        </div>

                        <div class="col-2 py-0">
                            <h5>Social</h5>
                            <ul class="nav flex-column py-0">
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Twitter</a></li>
                                <li class="nav-item mb-2 py-0"><a href="#" class="nav-link p-0 text-muted">LinkedIn</a></li>
                                {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Youtube</a></li> */}
                            </ul>
                        </div>

                        <div class="col-4 offset-1 py-0">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div class="d-flex w-100 gap-2 py-0">
                                    <label for="newsletter1" class="visually-hidden py-0">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control py-0" placeholder="Email address"/>
                                        <button class="btn btn-primary py-0" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="container py-0 ">

                    <div class="d-flex justify-content-center py-4 my-4 border-top py-0 ">
                        <p> &copy; 2022 Company, Inc. All rights reserved.</p>
                        {/* <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li>
                        </ul> */}
                    </div>
                    </div>
                   
                {/* </footer> */}
            </div>
            </footer>
        </div>
    );
}

export default Footer;