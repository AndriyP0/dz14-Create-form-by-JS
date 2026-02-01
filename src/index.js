"use strict";
// ========= Create Elements =========
const body = document.body;
const form = document.createElement("form");

// ========= Div Elements =========
const divHeader = document.createElement("div");
divHeader.className = "header";

const divPersonalInfo = document.createElement("div");
divPersonalInfo.className = "personal-info";

const divFormElementRadioCheck = document.createElement("div");
divFormElementRadioCheck.className = "form-element-radio-cheсk";

const divFooter = document.createElement("div");
divFooter.className = "footer";

// personalnfo div elements 
const divPersonalInfo1 = document.createElement("div");
divPersonalInfo1.className = "form-element";
const divPersonalInfo2 = document.createElement("div");
divPersonalInfo2.className = "form-element";
const divPersonalInfo3 = document.createElement("div");
divPersonalInfo3.className = "form-element";
const divPersonalInfo4 = document.createElement("div");
divPersonalInfo4.className = "form-element";
const divPersonalInfo5 = document.createElement("div");
divPersonalInfo5.className = "form-element";
const divPersonalInfo6 = document.createElement("div");
divPersonalInfo6.className = "form-element";

// form-element-radio-chek div elements
const divFormElementRadio1 = document.createElement("div");
divFormElementRadio1.className = "form-element-radio";
const divFormElementRadio2 = document.createElement("div");
divFormElementRadio2.className = "form-element-radio";
const divFormElementRadio3 = document.createElement("div");
divFormElementRadio3.className = "form-element-radio";

// divFormElementRadio1 div element
const divFormElement1=document.createElement("div");
// divFormElementRadio2 div element
const divFormElement2=document.createElement("div");

// ========= Input Elements =========
// personal info inputs elements
const inputPersonalInfo1 = document.createElement("input");
inputPersonalInfo1.type = "text";
inputPersonalInfo1.placeholder = "First Name";
const inputPersonalInfo2 = document.createElement("input");
inputPersonalInfo2.type = "text";
inputPersonalInfo2.placeholder = "Last Name";
const inputPersonalInfo3 = document.createElement("input");
inputPersonalInfo3.type = "text";
inputPersonalInfo3.placeholder = "Display-name";
const inputPersonalInfo4 = document.createElement("input");
inputPersonalInfo4.type = "email";
inputPersonalInfo4.placeholder = "Email Address";
const inputPersonalInfo5 = document.createElement("input");
inputPersonalInfo5.type = "password";
inputPersonalInfo5.placeholder = "Password";
const inputPersonalInfo6 = document.createElement("input");
inputPersonalInfo6.type = "password";
inputPersonalInfo6.placeholder = "Password Confirmation";

// form-element radio check inputs elements
const inputFormElementRadio1 = document.createElement("input");
inputFormElementRadio1.id = "join-as1";
inputFormElementRadio1.type = "radio";
inputFormElementRadio1.name = "Join-as";
const labelFormElementRadio1 = document.createElement("label");
labelFormElementRadio1.textContent = "Join as a Buyer";
labelFormElementRadio1.htmlFor = inputFormElementRadio1.id;

const inputFormElementRadio2 = document.createElement("input");
inputFormElementRadio2.id = "join-as2";
inputFormElementRadio2.type = "radio";
inputFormElementRadio2.name = "Join-as";
const labelFormElementRadio2 = document.createElement("label");
labelFormElementRadio2.textContent = "Join As a Creative orMarketplace Seller";
labelFormElementRadio2.htmlFor = inputFormElementRadio2.id;

const inputFormElement3 = document.createElement("input");
inputFormElement3.id = "squadhelp";
inputFormElement3.type = "checkbox";
inputFormElement3.name = "squadhelp";

const labelFormElement3 = document.createElement("label");
labelFormElement3.textContent = "Allow Squadhelp to send marketing/promotional offers from time to time.";
labelFormElement3.htmlFor = inputFormElement3.id;

// ========= divFooter Button Element =========

const buttonfooter = document.createElement("button");
buttonfooter.type = "submit";
buttonfooter.textContent = "Create Account";

// ========= h1 Element =========
//h1 header element
const h1Header = document.createElement("h1");
h1Header.textContent = "create an account";

//========= Paragraph Element =========
// p header element
const pHeader = document.createElement("p");
pHeader.textContent = "We always keep your name and email address private.";

// p form element radio chek
const pFormElement1 = document.createElement("p");
pFormElement1.textContent = "I am looking for a Name,Logo or Tagline for my business, brend orproduct.";

const pFormElement2 = document.createElement("p");
pFormElement2.textContent = "I plan to submit name ideas. Logo designs or sell names in DomainMarketplace.";

// ========= Header Section =========
divHeader.append(h1Header, pHeader);

// ======== Personal Info Section =========
divPersonalInfo1.append(inputPersonalInfo1);
divPersonalInfo2.append(inputPersonalInfo2);
divPersonalInfo3.append(inputPersonalInfo3);
divPersonalInfo4.append(inputPersonalInfo4);
divPersonalInfo5.append(inputPersonalInfo5);
divPersonalInfo6.append(inputPersonalInfo6);

divPersonalInfo.append(
  divPersonalInfo1,
  divPersonalInfo2,
  divPersonalInfo3,
  divPersonalInfo4,
  divPersonalInfo5,
  divPersonalInfo6,
);
// ======= Form Element Radio Check Section ========
divFormElement1.append(inputFormElementRadio1, labelFormElementRadio1);
divFormElement2.append(inputFormElementRadio2, labelFormElementRadio2);

divFormElementRadio1.append(divFormElement1, pFormElement1);
divFormElementRadio2.append(divFormElement2, pFormElement2);
divFormElementRadio3.append(inputFormElement3, labelFormElement3);

divFormElementRadioCheck.append(
  divFormElementRadio1,
  divFormElementRadio2,
  divFormElementRadio3
);

// ======== Footer Section =========
divFooter.append(buttonfooter);
// =======Apeend all sections to form========
form.append(divHeader, divPersonalInfo, divFormElementRadioCheck, divFooter);
// body.append(form);
