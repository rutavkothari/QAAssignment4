var validnumber = false;
var validemail = false

function Validation() {

    var isValid = true;
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var Address = document.getElementById("Address");
    var City = document.getElementById("City");
    var PhoneNumber = document.getElementById("phoneNumber");
    var SellerEmail = document.getElementById("email");
    var VehicalMake = document.getElementById("vehicalMake");
    var Model = document.getElementById("model");
    var Year = document.getElementById("year");

    document.getElementById("firstNameMsg").innerHTML = "";
    if (firstName.value.length <= 1) {
        document.getElementById("firstNameMsg").innerHTML = "*Enter First Name";
        document.getElementById("firstNameMsg").style.color = "Red";
        isValid = false;
    }

    document.getElementById("lastNameMsg").innerHTML = "";
    if (lastName.value.length <= 1) {
        document.getElementById("lastNameMsg").innerHTML = "*Enter Last Name";
        document.getElementById("lastNameMsg").style.color = "Red";
        isValid = false;
    }

    document.getElementById("AddressMsg").innerHTML = "";
    if (Address.value.length <= 1) {
        document.getElementById("AddressMsg").innerHTML = "*Enter Address ";
        document.getElementById("AddressMsg").style.color = "Red";
        isValid = false;
    }

    document.getElementById("CityMsg").innerHTML = "";
    if (City.value.length <= 1) {
        document.getElementById("CityMsg").innerHTML = "*Enter City ";
        document.getElementById("CityMsg").style.color = "Red";
        isValid = false;
    }

    document.getElementById("PhoneNumberMsg").innerHTML = "";
    if (PhoneNumber.value.length < 10 || !validnumber) {
        document.getElementById("PhoneNumberMsg").innerHTML = "*Enter Phone Number ";
        document.getElementById("PhoneNumberMsg").style.color = "Red";
        isValid = false;
    }

    document.getElementById("EmailMsg").innerHTML = "";
    if (SellerEmail.value.length <= 1 || !validemail) {
        document.getElementById("EmailMsg").innerHTML = "*Enter Email ";
        document.getElementById("EmailMsg").style.color = "Red";
        isValid = false;
    }

    document.getElementById("VehicalMakeMsg").innerHTML = "";
    if (VehicalMake.value.length <= 1) {
        document.getElementById("VehicalMakeMsg").innerHTML = "*Enter Vehical Make ";
        document.getElementById("VehicalMakeMsg").style.color = "Red";
        isValid = false;
    }

    document.getElementById("ModelMsg").innerHTML = "";
    if (Model.value.length <= 1) {
        document.getElementById("ModelMsg").innerHTML = "*Enter Model";
        document.getElementById("ModelMsg").style.color = "Red";
        isValid = false;
    }

    document.getElementById("YearMsg").innerHTML = "";
    if (Year.value.length <= 1) {
        document.getElementById("YearMsg").innerHTML = "*Enter Year Make";
        document.getElementById("YearMsg").style.color = "Red";
        isValid = false;
    }

    if (isValid) {
        let data = { firstName: firstName.value, lastName: lastName.value, Address: Address.value, City: City.value, PhoneNumber: PhoneNumber.value, SellerEmail: SellerEmail.value, VehicalMake: VehicalMake.value, Model: Model.value, Year: Year.value };

        let dataArray = localStorage.getItem('sellerDetails') ? JSON.parse(localStorage.getItem('sellerDetails')) : [];
        localStorage.setItem('sellerDetails', JSON.stringify(dataArray));
        dataArray.push(data);
        localStorage.setItem('sellerDetails', JSON.stringify(dataArray));

    }

}

function SellerDisplay() {

    let storedValues = JSON.parse(localStorage.getItem('sellerDetails'));
    var details = '';
    var divSellerList = document.getElementById('SellerDisplay');
    if (storedValues.length > 0) {
        if (divSellerList) {

            for (let i = storedValues.length - 1; i >= 0; i--) {

                let sellerName = storedValues[i].firstName + ` (Phone Number: ` + storedValues[i].PhoneNumber + ` OR Email: ` + storedValues[i].SellerEmail + `)`;
                let address = storedValues[i].Address + `, ` + storedValues[i].City;
                let vehichleDetail = storedValues[i].VehicalMake + ` ` + storedValues[i].Model + ` ` + storedValues[i].Year;
                let link = `https://www.jdpower.com/Cars/` + storedValues[i].VehicalMake + `/` + storedValues[i].Model + `/` + storedValues[i].Year;

                details += `<div class="card text-white bg-info mb-3" style="margin: 10px;"> <div class="card-body"> <h5 class="card-title">` + vehichleDetail + `</h5> <h6 class="card-subtitle mb-2 text-muted">` + address + `</h6> <p class="card-text">` + sellerName + `</p> <a href="` + link + `" class="btn btn-info">` + link + `</a> </div> </div>`;
            }
            console.log(details);
            divSellerList.innerHTML = details;
        }
        else if (divSellerList) {
            divSellerList.innerHTML = `<h4 class="card-title productTitle" id="productTitle"> There are no Seller information availbale currently to display.</h4>`;
        }

    }



}

function SellerSearch() {

    let values = JSON.parse(localStorage.getItem('sellerDetails'));
    var SellerSearch = document.getElementById('SellerSearch');
    var details = "";
    var result = [];
    var DisplayResult = document.getElementById('searchSellerList');

    if (values && values.length > 0) {

        if (SellerSearch.value && SellerSearch.value.length > 0) {

            for (let index = values.length - 1; index >= 0; index--) {
                if (values.find(name => values[index].firstName.toLowerCase().trim() === SellerSearch.value.toLowerCase().trim() || values[index].VehicalMake.toLowerCase().trim() == SellerSearch.value.toLowerCase().trim() || values[index].Model.toLowerCase().trim() == SellerSearch.value.toLowerCase().trim() || values[index].Year.toLowerCase().trim() == SellerSearch.value.toLowerCase().trim()))
                    result.push(values[index]);
            }

            if (DisplayResult && result.length > 0) {
                for (let index = result.length - 1; index >= 0; index--) {

                    let sellerName = result[index].firstName + ` (Contact: ` + result[index].PhoneNumber + ` OR Email: ` + result[index].email + `)`;
                    let address = result[index].Address + `, ` + result[index].City;
                    let vehichleDetail = result[index].VehicalMake + ` ` + result[index].Model + ` ` + result[index].Year;
                    let link = `https://www.jdpower.com/Cars/` + result[index].VehicalMake + `/` + result[index].Model + `/` + result[index].Year;

                    details += `<div class="card" style="margin: 10px;"> <div class="card-body"> <h5 class="card-title">` + vehichleDetail + `</h5> <h6 class="card-subtitle mb-2 text-muted">` + address + `</h6> <p class="card-text">` + sellerName + `</p> <a href="` + link + `" class="btn btn-info">` + link + `</a> </div> </div>`;
                }
                DisplayResult.innerHTML = details;
            }
            else {
                DisplayResult.innerHTML = `<h6 class="card-title productTitle" id="productTitle"> No result found for '` + SellerSearch.value + `' </h6>`;
            }
        }
        else {
            DisplayResult.innerHTML = `<h6 class="card-title productTitle" id="productTitle"> Enter Vehicle Make OR Year OR Model OR Seller Name to search.</h6>`;
        }
    }
    else {
        DisplayResult.innerHTML = `<h6 class="card-title productTitle" id="productTitle"> No Sellers found on website. Please add sellers.</h6>`;
    }
    SellerSearch.value = "";


}


function ValidatePhone(number) {

    var error = document.getElementById('PhoneNumberMsg');
    var RegEx = /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;

    error.innerText = '';

    if (number.length < 12) {
        error.innerText = "Enterd number is not proper.";
        error.style.color = "red";
        validnumber = false;
        return false;
    }

    if ((number != "") && (!RegEx.test(number))) {

        error.innerText = "Please check the supported format";
        error.style.color = "red";
        validnumber = false;
        return false;
    }

    error.innerText = '';
    validnumber = true;
    return true;
}

function ValidateEmail(email) {

    var error = document.getElementById('EmailMsg');
    var RegEx = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

    error.innerText = '';

    if (!email) {
        error.innerText = "Please enter proper email address. (ex. test@gmail.com, test@gb.co.in)";
        error.style.color = "red";
        validemail = false;
        return false;
    }

    if ((email != "") && (!RegEx.test(email))) {

        error.innerText = "Please enter proper email address. (ex. jdpower@yahoo.com, jdp@jdp.org)";
        error.style.color = "red";
        validemail = false;
        return false;
    }

    error.innerText = '';
    validemail = true;
    return true;
}
