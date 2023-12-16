import React from 'react';
import './usercontent.css';
import UserContent from './UserContent';
import './faq.css'
import './faq'
export default function UserContent1() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='main'>
          <UserContent></UserContent>
          <div className='right' style={{ color: 'black' }}><Faq/></div>
        </div>
      </div>
    </React.Fragment>
  );
}
const Faq=()=>{
  // userfunction
  function openclose()
{
    var faq = document.getElementsByClassName("faq-page");
var i;
var content=''
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
}
const para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam. Perspiciatis, porro!"
    return(
        <div>
        <h1 className="faq-heading">FAQ'S</h1>
        <section className="faq-container">
          <div className="faq-one">
            <h1 className="faq-page" onClick={openclose}>What happens when I update my email address (or mobile number)?</h1>
            <div className="faq-body">
              <p>
                {para}
              </p>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="faq-two">
            <h1 className="faq-page" onClick={openclose}>Does my Seller account get affected when I update my email address?</h1>
            <div className="faq-body">
              <p>
               {para}
              </p>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="faq-three">
            <h1 className="faq-page" onClick={openclose}>Does it improve the user experience of a website?</h1>
            <div className="faq-body">
              <p>
              {para}
              </p>
            </div>
          </div>
        </section>
      </div>
    )
}