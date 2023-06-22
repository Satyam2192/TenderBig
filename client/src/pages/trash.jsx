import React, { useState } from "react";

const TenderCard = ({ title, deadline, location, referenceNo }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 border-[2px]">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-2">{title}</h2>

        <span className="bg-green-500 text-white font-bold py-1 px-2 rounded mr-2 mb-2 h-8 ml-3">
          Live
        </span>
      </div>
      <p className="text-gray-600 mb-4">Deadline: {deadline}</p>
      <p className="text-gray-600 mb-4">{location}</p>
      <p className="text-gray-600 mb-4">TOT Reference No.: {referenceNo}</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
        View Details
      </button>
    </div>
  );
};

const tenderData = [
  {
    title:
      "Rehabilitation of 15km Industrial Feeder (Sapele) 15km 33kv Sapele Feeder and 15km 33kv Warri Feeder",
    deadline: "28 Jun 2023",
    location: "Nigeria",
    referenceNo: "84449578",
  },
  {
    title: "Medical Equipment for Hospitals",
    deadline: "27 Jul 2023",
    location: "Albania",
    referenceNo: "84396044",
  },
];

const TenderListingPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedFundingAgency, setSelectedFundingAgency] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div className="mx-auto p-4 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="sm:col-span-2 md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">
            Online Tenders, Tenders Website, Bids & Tenders
          </h1>
          {tenderData
            .filter(
              (tender) =>selectedRegion === "" ||
                tender.location.includes(selectedRegion)
            )
            .filter(
              (tender) =>selectedCountry === "" ||
                tender.location.includes(selectedCountry)
            )
            .filter(
              (tender) =>selectedFundingAgency === "" ||
                tender.title.includes(selectedFundingAgency)
            )
            .filter(
              (tender) =>selectedProduct === "" || tender.title.includes(selectedProduct)
            )
            .map((tender, index) => (
              <TenderCard key={index} {...tender} />
            ))}
        </div>
        {/*   Dropdown fun cality should added here  */}
        <div className="sm:col-span-1 md:col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-lg font-bold mb-4">Tenders By Region</h2>
            <ul className="list-disc pl-6 mb-6">
              <li onClick={() => setSelectedRegion("Western Africa")}>Western Africa Tenders</li>
              <li onClick={() => setSelectedRegion("Central Africa")}>Central Africa Tenders</li>
              <li onClick={() => setSelectedRegion("Eastern Africa")}>Eastern Africa Tenders</li>
              <li onClick={() => setSelectedRegion("Northern Africa")}>Northern Africa Tenders</li>
              <li onClick={() => setSelectedRegion("Southern Africa")}>Southern Africa Tenders</li>
            </ul>

            <h2 className="text-lg font-bold mb-4">Tenders By Country</h2>
            <ul className="list-disc pl-6 mb-6">
              <li onClick={() => setSelectedCountry("Afghanistan")}>Afghanistan Tenders</li>
              <li onClick={() => setSelectedCountry("Algeria")}>Algeria Tenders</li>
              <li onClick={() => setSelectedCountry("Angola")}>Angola Tenders</li>
              <li onClick={() => setSelectedCountry("Argentina")}>Argentina Tenders</li>
              <li onClick={() => setSelectedCountry("Australia")}>Australia Tenders</li>
              <li onClick={() => setSelectedCountry("Azerbaijan")}>Azerbaijan Tenders</li>
              <li onClick={() => setSelectedCountry("Bahrain")}>Bahrain Tenders</li>
              <li onClick={() => setSelectedCountry("Bangladesh")}>Bangladesh Tenders</li>
              <li onClick={() => setSelectedCountry("Brazil")}>Brazil Tenders</li>
              <li onClick={() => setSelectedCountry("Cambodia")}>Cambodia Tenders</li>
            </ul>

            <h2 className="text-lg font-bold mb-4">
              Tenders By Funding Agency
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li onClick={() =>  setSelectedFundingAgency("Abu Dhabi Fund for Development (ADFD)")}>Abu Dhabi Fund for Development (ADFD) Tenders</li>
              <li onClick={() =>  setSelectedFundingAgency("Agence Francaise De Development (AFD)")}>Agence Francaise De Development (AFD) Tenders</li>
              <li onClick={() =>  setSelectedFundingAgency("Asian Development Bank (ADB)")}>Asian Development Bank (ADB) Tenders</li>                             
              <li onClick={() =>  setSelectedFundingAgency("Caribbean Development Bank (CDB)")}>Caribbean Development Bank (CDB) Tenders</li>                  
              <li onClick={() =>  setSelectedFundingAgency("European Commission")}>European Commission Tenders</li>         <></>                                       
              <li onClick={() =>  setSelectedFundingAgency("Inter-American Development Bank")}>Inter-American Development Bank Tenders</li>                    
              <li onClick={() =>  setSelectedFundingAgency("Islamic Development Bank (ISDB)")}>Islamic Development Bank (ISDB) Tenders</li>                            
              <li onClick={() =>  setSelectedFundingAgency("World Bank (WB)")}>World Bank (WB) Tenders</li>                                                              
              <li onClick={() =>  setSelectedFundingAgency("World Health Organization (WHO)")}>World Health Organization (WHO) Tenders</li>                      
            </ul>

            <h2 className="text-lg font-bold mb-4">
              Tenders By Geo-Political Region
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li onClick={() => setSelectedProduct("Arab World")}>Arab World Tenders</li>
              <li onClick={() => setSelectedProduct("ASEAN")}>ASEAN Tenders</li>
              <li onClick={() => setSelectedProduct("BRICS")}>BRICS Tenders</li>
              <li onClick={() => setSelectedProduct("EU")}>EU Tenders</li>
              <li onClick={() => setSelectedProduct("G20")}>G20 Tenders</li>
              <li onClick={() => setSelectedProduct("Gulf Countries")}>Gulf Countries Tenders</li>
              <li onClick={() => setSelectedProduct("Middle East")}>Middle East Tenders</li>
              <li onClick={() => setSelectedProduct("ENA")}>ENA Tenders</li>
              <li onClick={() => setSelectedProduct("AARC")}>AARC Tenders</li>
            </ul>

            <h2 className="text-lg font-bold mb-4">Tenders By Products</h2>
            <ul className="list-disc pl-6 mb-6">
              <li onClick={() => setSelectedProduct("Bank")}>Bank Tenders</li>
              <li onClick={() => setSelectedProduct("Cleaning")}>Cleaning Tenders</li>
              <li onClick={() => setSelectedProduct("Construction")}>Construction Tenders</li>
              <li onClick={() => setSelectedProduct("Defence")}>Defence Tenders</li>
              <li onClick={() => setSelectedProduct("Electrical")}>Electrical Tenders</li>
              <li onClick={() => setSelectedProduct("Security")}>Security Tenders</li>
              <li onClick={() => setSelectedProduct("Transport")}>Transport Tenders</li>
              <li onClick={() => setSelectedProduct("Airport")}>Airport Tenders</li>
              <li onClick={() => setSelectedProduct("CCTV")}>CCTV Tenders</li>
              <li onClick={() => setSelectedProduct("Education")}>Education Tenders</li>
              <li onClick={() => setSelectedProduct("Energy Audit")}>Energy Audit Tenders</li>
              <li onClick={() => setSelectedProduct("Healthcare")}>Healthcare Tenders</li>
              <li onClick={() => setSelectedProduct("HR Service")}>HR Service Tenders</li>
              <li onClick={() => setSelectedProduct("Insurance")}>Insurance Tenders</li>
              <li onClick={() => setSelectedProduct("IT")}>IT Tenders</li>
              <li onClick={() => setSelectedProduct("Medical")}>Medical Tenders</li>
              <li onClick={() => setSelectedProduct("Mining")}>Mining Tenders</li>
              <li onClick={() => setSelectedProduct("Oil And Gas")}>Oil And Gas Tenders</li>
              <li onClick={() => setSelectedProduct("Printing")}>Printing Tenders</li>
              <li onClick={() => setSelectedProduct("Solar")}>Solar Tenders</li>
              <li onClick={() => setSelectedProduct("Sports")}>Sports Tenders</li>
              <li onClick={() => setSelectedProduct("Telecom")}>Telecom Tenders</li>
              <li onClick={() => setSelectedProduct("Tourism")}>Tourism Tenders</li>
              <li onClick={() => setSelectedProduct("Training")}>Training Tenders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderListingPage;







<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="68FYffUhAqoxoUUGHOsAT3rLSezKIRKOANByEL5p">
    <title>Contact | Joint Venture
</title>
    
    <link rel="stylesheet" href="https://www.tenderkings.com/public/frontend/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://www.tenderkings.com/public/frontend/css/font-awesome/css/font-awesome.min.css">
    <style>
    .image-aboutus-banner {
    background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(https://www.tenderkings.com/public/frontend/images/nationaltenders_about_us_banner.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    padding-top: 110px;
    padding-bottom: 110px;
}
</style>
    <link rel="stylesheet" href="https://www.tenderkings.com/public/frontend/css/style.css">
    
    <meta property="og:title" content="Contact | Joint Venture
"/>  
    <meta property="og:description" content="Tenders,Joint Venture,Auction Material,Projects,Tender Result,Chennal Partner,Tender Training"/> 
    <meta property="og:url" content="https://www.tenderkings.com" />   
    
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content="Contact | Joint Venture
"/>  
    <meta name="twitter:description" content="Tenders,Joint Venture,Auction Material,Projects,Tender Result,Chennal Partner,Tender Training"/> 
    <meta name="keywords" content="Tenders,Joint Venture,Auction Material,Projects,Tender Result,Chennal Partner,Tender Training" />   
    <meta name="category" content="Tenders,Joint Venture,Auction Material,Projects,Tender Result,Chennal Partner,Tender Training"/>
    <meta name="description" content="Tenders,Joint Venture,Auction Material,Projects,Tender Result,Chennal Partner,Tender Training"/>         
    <meta property="og:site_name" content="TenderKings"/>
    <meta name="author" content="TenderKings - tenderkings.com">      
    <meta name="robots" content="index, follow">  
     <link rel="shortcut icon" type="image/x-icon" href="https://www.tenderkings.com/public/frontend/images/favicon.ico">
       <style>
       .eventpopup{
           background-color:#A5010B;
           color:#fff;
           font-weight:bold;
       }
      #exampleModalCenter  .modal-body{ padding:0; } 
      #exampleModalCenter  .modal-title{ width:100%; text-align: center;font-weight: bold; } 
      #exampleModalCenter  .modal-footer{ background-color:#A5010B; }
       </style>
       
</head>
<body>

    <div class="main_div top_main">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                
                <p class="desktop_contact_info"><a href="#" class=""><i class="fa fa-phone"></i> Sales : 9672022299 | 9672442299 <i class="fa fa-phone"></i> Support : 9672042299 | 9672062299</a></p>
                
            </div>
            <div class="col-md-5 text-right">
                <p>
                    
                    <button type="button" class="btn btn-primary btn-rounded mobile_contact_info" data-container="body" data-toggle="popover" data-placement="bottom"><i class="fa fa-phone"></i></button>
                                                    <a href="https://www.tenderkings.com/login" class="btn btn-primary btn-rounded">Login</a>
                           
                                                             <a href="https://www.tenderkings.com/register" class="btn btn-primary btn-rounded">Free Registration</a> 
                                                        <a href="https://www.tenderkings.com/plan" class="btn btn-primary btn-rounded">PayNow</a>
                            <a href="https://www.tenderkings.com"><img src="https://www.tenderkings.com/public/frontend/images/ganesh.png" width="30"></a>
                                        </p>
            </div>
        </div>
    </div>
</div>


<nav class="navbar navbar-expand-md navbar-custom">
  	<a class="navbar-brand" href="https://www.tenderkings.com"><img src="https://www.tenderkings.com/public/frontend/images/logo.png" alt="LOGO" width="100"></a>
  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	<span class="navbar-toggler-icon"></span>
  	</button>

  	<div class="collapse navbar-collapse" id="navbarSupportedContent">
    	
    	
		    
            
            
		    <li class="nav-item">
		      	<a href="https://www.tenderkings.com/contact" class="nav-link">Contact</a>
		    </li>
		   
		</ul>
  	</div>
</nav>
	<div class="image-aboutus-banner">
   <div class="container">
    <div class="row">
        <div class="col-md-12">
         <h1 class="lg-text">Contact Us</h1>
         <p class="image-aboutus-para"></p>
       </div>
    </div>
    </div>
</div>

<div class="main_div">
    <div class="container">

        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="contact_form_box">
                    <form action="https://www.tenderkings.com/postcontact" method="post" class="contact_form">
                                                
                        <input type="hidden" name="_token" value="68FYffUhAqoxoUUGHOsAT3rLSezKIRKOANByEL5p">                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control" name="name" id="name" placeholder="Name"  value="">
                            </div>
                                                    </div>
                        
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-building"></i></span>
                                </div>
                                <input type="text" class="form-control" name="company_name" id="company_name" placeholder="Company Name"  value="">
                            </div>
                                                    </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-phone"></i></span>
                                </div>
                                <input type="text" class="form-control" name="mobile" id="mobile" placeholder="Mobile Number"  value="">
                            </div>
                                                    </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                </div>
                                <input type="text" class="form-control" name="email" id="email" placeholder="Email Address" value="">
                                 
                            </div>
                                                    </div>

                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-cog"></i></span>
                                </div>
                                <select class="form-control"  name="service" id="service">
                                    <option value="">Select Services</option>
                                    <option value="Tenders">Tenders</option>
                                    <option value="Joint Venture">Joint Venture</option>
                                    <option value="Tender Result">Tender Result</option>
                                    <option value="Auction (Material)">Auction (Material)</option>
                                    <option value="Projects">Projects</option>
                                    <option value="Chennal Partners">Chennal Partners</option>
                                    <option value="Tenders Training">Tenders Training</option>
                                </select>
                            </div>
                                                    </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary btn-rounded btn_form" class="btn">Quick Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</div>

    
<div class="main_div contact_location" id="services">
    <div class="container">
        <div class="row">
           <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="single-service">
                 <i class="fa fa-phone"></i>
                 <h4>Phone</h4>
                 <p>Sales : 9672022299 | 9672442299 <br> Support : 9672042299 | 9672062299</p>
              </div>
           </div>
           <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="single-service">
                 <i class="fa fa-map-marker"></i>
                 <h4>Address</h4>
                 <p>S-3, Vinayak Mahima Group building JDA Market, Amrapali Circle, Vaishali Nagar, Jaipur, 302021</p>
              </div>
           </div>
           <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="single-service">
                 <i class="fa fa-envelope"></i>
                 <h4>E-mail</h4>
                 <p>Info@tenderkings.com</p>
              </div>
           </div>
        </div>
    </div>
</div>

<div class="main_div py-0 social_media">  
    <div class="container">
        <div class="row py-4">
            <div class="col-md-6 col-lg-7">
                <h3 class="mb-0 white-text">Get connected with us on social networks!</h3>
            </div>
            <div class="col-md-6 col-lg-5 text-right">
                <a href="#"><i class="fa fa-facebook white-text mr-lg-4 fa-2x"> </i></a>
                <a href="#"><i class="fa fa-twitter white-text mr-lg-4 fa-2x"> </i></a>
                <a href="#"><i class="fa fa-google-plus white-text mr-lg-4 fa-2x"> </i></a>
                <a href="#"><i class="fa fa-linkedin white-text mr-lg-4 fa-2x"> </i></a>
                <a href="#"><i class="fa fa-instagram white-text mr-lg-4 fa-2x"> </i></a>
            </div>
        </div>
    </div>
</div>


	<div class="footer_main">
  		<div class="container">
  			<div class="row">
  				<div class="col-md-3 col-sm-6">
  					<h5>Our Other Pages</h5>
  					<ul class="">
  						<li><a href="https://www.tenderkings.com/about">About Us</a></li>
  						<li><a href="https://www.tenderkings.com/contact">Contact Us</a></li>
  						<li><a href="https://www.tenderkings.com/terms-and-conditions">Terms And Conditions</a></li>
  						<li><a href="https://www.tenderkings.com/privacy-policy">Privacy Policy</a></li>
  						
  					</ul>
  				</div>
  				<div class="col-md-3 col-sm-6">
  					<h5>CITYWISE TENDERS</h5>
  					<ul class="">
  						<li><a href="https://www.tenderkings.com/tenders">Tenders By City</a></li>
  						<li><a href="https://www.tenderkings.com/tenders">Ahmedabad Tenders</a></li>
  						<li><a href="https://www.tenderkings.com/tenders">Kolkata Tenders</a></li>
  						<li><a href="https://www.tenderkings.com/tenders">Mumbai Tenders</a></li>
  						<li><a href="https://www.tenderkings.com/tenders">Hyderabad Tenders</a></li>
  						<li><a href="https://www.tenderkings.com/tenders">Bangalore Tenders</a></li>
  					</ul>
  				</div>
  				<div class="col-md-3 col-sm-6">
  					<h5>SEARCH BY TENDERS</h5>
  					<ul class="">
  						<li><a href="https://www.tenderkings.com/tenders">Tenders By Keywords</a></li>
  						<li><a href="https://www.tenderkings.com/tenders">Tenders By State</a></li>
  						<li><a href="https://www.tenderkings.com/tenders">Tenders By City</a></li>
  						<li><a href="https://www.tenderkings.com/tenders">Tenders By Organization</a></li>
  					</ul>
  				</div>
  				<div class="col-md-3 col-sm-6">
  					<h5>CONTACT US</h5>
  					<ul class="footer_contact_details">
  						<li>
                <span class="info-icon"><i class="fa fa-building"></i></span>
                <span class="info-text">TenderKings</span>
              </li>
  						<li>
                <span class="info-icon"><i class="fa fa-map-marker"></i></span>
                <span class="info-text"> S-3, Vinayak Mahima Group building JDA Market, Amrapali Circle, Vaishali Nagar, Jaipur, 302021</span>
              </li>
  			  <li>
                <span class="info-icon"><i class="fa fa-phone"></i></span>
                <span class="info-text">Sales : 9672022299 | 9672442299<br>Support : 9672042299 | 9672062299</span>
              </li>
  			   <li>
                <span class="info-icon"><i class="fa fa-envelope"></i></span>
                <span class="info-text"><a href="mailto:info@tenderkings.com">info@tenderkings.com</a></span>
              </li>
              
              
  			  </ul>
  			  	
  					
  				</div>
  			</div>
  		</div>
  	</div>

  	<div class="footer_copyright_main">
  		<div class="container">
  			<div class="row">
  				<div class="col-md-12">
  					<p>&copy; 2015-2020 TENDERKINGS. ALL RIGHTS RESERVED | DEVELOPED BY <a href="https://tenderkings.com">TenderKings</a></p>
  				</div>
  			</div>
  		</div>
  	</div>
    

   
    


<button type="button" class="btn btn-primary btn_inquirypopup" data-toggle="modal" data-target="#inquiryPopup"><i class="fa fa-envelope fa-2x"></i></button>

<div class="modal fade" id="inquiryPopup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      
      <div class="modal-body contact_popup">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="row">
    		<div class="col-md-4 contact_popup_content">
    			<div class="contact-info">
    				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
    				<h2>Contact Us</h2>
    				<h4>We would love to hear from you !</h4>
    			</div>
    		</div>
    		<div class="col-md-8 contact_popup_form_main">
    			<div class="contact-form">
    			    <form method="post" action="javascript:void(0)" id="popup_inquiry_form">
    			     <div class="alert alert-success d-none" id="msg_div">
                          <span id="res_message"></span>
                     </div>
    				<div class="form-group">
    				    <label class="control-label" for="fname">Name:</label>
    				    <input type="text" class="form-control" id="pop_name" placeholder="" name="pop_name">
    				</div>
    				<div class="form-group">
    				    <label class="control-label" for="lname">Company Name:</label>
    					<input type="text" class="form-control" id="pop_cname" placeholder="" name="pop_cname">
    				</div>
    				<div class="form-group">
    				    <label class="control-label" for="email">Email Address:</label>
    					<input type="email" class="form-control" id="pop_email" placeholder="" name="pop_email">
    				    <span id="pop_email1"></span>
    				</div>
    				<div class="form-group">
    				    <label class="control-label" for="email">Mobile Number:</label>
    					<input type="email" class="form-control" id="pop_phone" placeholder="" name="pop_phone">
    					<span id="pop_phone1"></span>
    				</div>
    				<div class="form-group">
    				    <label class="control-label" for="comment">Looking For:</label>
    					<textarea class="form-control" rows="5" id="pop_lookingfor" name="pop_lookingfor"></textarea>
    				</div>
    				<div class="form-group">        
    				  <div class="">
    					<button type="submit" id="send_form" class="btn btn-default pop_up_button">Submit</button>
    					
    				  </div>
    				</div>
    				</form>
    			</div>
    		</div>
    	</div>
      </div>
    </div>
  </div>
</div>
    

    <script src="https://www.tenderkings.com/public/frontend/js/jquery.min.js"></script>
    <script src="https://www.tenderkings.com/public/frontend/js/popper.min.js" defer></script>
    <script src="https://www.tenderkings.com/public/frontend/js/bootstrap.min.js" defer></script>
    

    
    <script>
    //$(function(){  setTimeout(function(){ $('#exampleModalCenter').modal('show'); }, 3000); });
  
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover({
        title: '<h5 class="mb-0"><i class="fa fa-phone"></i> Contact Info</h5>',
        content: '<p><strong>Sales:</strong> 9672022299 | 9672442299</p><p><strong>Support:</strong> 9672042299 | 9672062299</p>',
        html: true
    });
    });
    $('body').on('click', '.pop_up_button', function (e) {
        e.preventDefault();
        var mobile_number = $('#pop_phone').val();
        var email = $('#pop_email').val();
        var err = new Array();
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var reg = /^[0-9]+$/;
        if (mobile_number == '') {
            $('#pop_phone1').text('Please enter mobile number');
            err.push(2);
        } else {
            if (!mobile_number.match(reg)) {
                $('#pop_phone1').text('Please enter mobile number only digits');
                err.push(2);
            } else if (mobile_number.length < 10) {
                $('#pop_phone1').text('please enter atleast 10 digit mobile number');
                err.push(2);
            } else {
                $('#pop_phone1').text('');
            }
        }
        if (email == '') {
            $('#pop_email1').text('Please enter email');
            err.push(2);
        } else {
            if (!filter.test(email)) {
                $('#pop_email1').text('Please enter valid email');
                err.push(2);
            } else {
                $('#pop_email1').text('');
            }
        }
        if (err.length > 0) {
            return false;
        } else {
=
        $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        });
        $('#send_form').html('Sending..');
        
           $.ajax({
               
              url: "https://www.tenderkings.com/popup_inquiry",
              method: 'post',
              data: $('#popup_inquiry_form').serialize(),
              success: function(response){
                 
                    $('#send_form').html('Submit');
                    $('#res_message').show();
                    $('#res_message').html(response.msg);
                    $('#msg_div').removeClass('d-none');
        
                    document.getElementById("popup_inquiry_form").reset(); 
                    setTimeout(function(){
                    $('#res_message').hide();
                    $('#msg_div').hide();
                    },10000);
                 
             }
               
           });
           
        }
    });    
    // load more 
$(document).ready(function(){
	var maxLength = 250;
	
	$(".show-read-more").each(function(){
		var myStr = $(this).text();
		
		if($.trim(myStr).length > maxLength){
			var newStr = myStr.substring(0, maxLength);
			var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
			$(this).empty().html(newStr);
			$(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
			$(this).append('<span class="more-text">' + removedStr + '</span>');
		}
	});
	$(".read-more").click(function(){
		$(this).siblings(".more-text").contents().unwrap();
		$(this).remove();
	});
});

var slength = $("#search").length;
var alength = $("#advance_keyword").length;
if(slength == 1 || alength == 1){
=    $(function () {
        
        $.widget("app.autocomplete", $.ui.autocomplete, {
=            options: {
                highlightClass: "ui-state-highlight"
            },
            _renderItem: function (ul, item) {
=
                var re = new RegExp("(" + this.term + ")", "gi"),
                        cls = this.options.highlightClass,
                        template = "<span class='" + cls + "'>$1</span>",
                        label = item.label.replace(re, template),
                        $li = jQuery("<li/>").appendTo(ul);
=                jQuery("<a/>").attr("href", "#")
                        .html(label)
                        .appendTo($li);
                return $li;
            }
        });
        $("#search").autocomplete({
            //source: availableTags
            minLength: 3,
            source: function (request, response) {
                $.ajax({
                    url: "https:\/\/www.tenderkings.com\/getkeywordlist",
                    dataType: "json",
                    type: "POST",
                    data: {
                        "_token": "68FYffUhAqoxoUUGHOsAT3rLSezKIRKOANByEL5p",
                        keyword: request.term
                    },
                    success: function (data) {
                        response($.map(data, function (item) {
                            //alert(item.id);
                            return {
                                label: item.name,
                                value: item.name     // EDIT
                            }
                        }));
                    }
                });
            },
            select: function (event, ui) {
                $(this).val(ui.item.value);
                $("#searchform").submit();
            }
        });

=    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#advance_keyword" )
=      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 3,
        source: function( request, response ) {
=) );
            $.ajax({
                url: "https:\/\/www.tenderkings.com\/getkeywordlist",
                dataType: "json",
                type: "POST",
                data: {
                    "_token": "68FYffUhAqoxoUUGHOsAT3rLSezKIRKOANByEL5p",
                    keyword: extractLast(request.term)
                },
                success: function (data) {
                    response($.map(data, function (item) {
=                        return {
                            label: item.name,
                            value: item.name    
                        }
                    }));
                }
            });
        },
        focus: function() {
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          terms.pop();
          terms.push( ui.item.value );
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
    });
    
}  
    </script>
   
<script async src="https://www.googletagmanager.com/gtag/js?id=G-H0T3RFQP0H"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H0T3RFQP0H');
</script>

</body>
</html>