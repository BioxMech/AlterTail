
//console.log(sessionStorage.getItem("email"));
var email = (sessionStorage.getItem("email"));
document.getElementById("email").innerHTML = email;

function show_profile()
{
    document.getElementById("profile").getAttributeNode("active").value = "active";
    document.getElementById("content").innerHTML = "";
    var str = ""
    str += `

            <div class = "col-lg-9 shadow bg-white rounded" style="padding: 30px">
            <div>
                <p style = "margin-bottom: 5px;">My Profile</p>
                <p style = "font-size: 15px; color: darkslategray;">Manage and protect your account</p>
            </div>
            <div class = "row">
                <div class = "col-lg-7">
                    <form>
                        <div class="form-group row">
                        <label for="username" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; max-width: 120px;">Username</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="username" placeholder="Jheat">
                        </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Address</label>
                            <div class="col-sm-9">
                                <button type="button" class="btn btn-link" style = "color: darkslategray;">Add Address</button>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Email</label>
                            <div class="col-sm-9">
                                <button type="button" class="btn btn-link" style = "color: darkslategray;">Add Email</button>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="num" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; padding-right: 0px; max-width: 120px;">Phone Number</label>
                            <div class="col-sm-9">
                            <input type="password" class="form-control" id="num" placeholder="*******54">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="gender" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Gender</label>
                            <div class="form-check form-check-inline" style="margin-left: 15px;">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male">
                                <label class="form-check-label" for="male" style = "font-size: 15px; color: darkslategray;">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female">
                                <label class="form-check-label" for="female" style = "font-size: 15px; color: darkslategray;">Female</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="other">
                                <label class="form-check-label" for="other" style = "font-size: 15px; color: darkslategray;">Other</label>
                            </div>
                        </div>   
                        <div>
                            <button type="button" class="btn btn-outline-secondary" style = "width: 70px; height: 40px; font-size: 15px;">Save</button>
                        </div>                 
                    </form>
                </div>
                    
                <div class="col-lg-4" style="margin-top: 20px; margin-left: 50px;">
                    <div class="card" style="width: 18rem; border: transparent; text-align: center;">
                        <div class="img-square-wrapper">
                            <img  id = "img1" class="" src="images/profile_image.jpg" alt="Card image cap">
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-outline-secondary" style = "width: 120px; height: 35px; font-size: 15px;">Select Image</button>
                            <p class="card-text" style = "font-size: 15px; color:gray; margin-top: 20px;">File size: maximum 1 MB</p>
                            <p class="card-text" style = "font-size: 15px; color: gray; margin-left: 12px;">File extension: JPEG, PNG</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `;
    document.getElementById("content").innerHTML = str;

}

function show_password()
{
    document.getElementById("password").getAttributeNode("active").value = "active";
    document.getElementById("content").innerHTML = "";
    var str = ""
    str += `

    <div class = "col-lg-9 shadow bg-white rounded" style="padding: 30px">
    <div>
        <p style = "margin-bottom: 5px;">Change Password</p>
        <p style = "font-size: 15px; color: darkslategray;">For your account's security, do not share your password with anyone else</p>
    </div>
    <div class = "row">
        <div class = "col-lg-12">
            <form>
                <div class="form-group row">
                <label for="username" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; max-width: 200px;">Current Password</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" id="current_pw" placeholder="">
                </div>
                </div>
                <div class="form-group row">
                <label for="username" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; max-width: 200px;">New Password</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" id="new_pw" placeholder="">
                </div>
                </div>
                <div class="form-group row">
                <label for="username" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; max-width: 200px;">Confirm Password</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" id="confirm_pw" placeholder="">
                </div>
                </div>
              
                <div>
                    <button type="button" class="btn btn-outline-secondary" style = "width: 70px; height: 40px; font-size: 15px;">Save</button>
                </div>                 
            </form>
        </div>
            
    </div>
</div>

    `;
    document.getElementById("content").innerHTML = str;


}


function getProfile(isProfilePage=true) {

    document.getElementById("profile").getAttributeNode("active").value = "active";
    document.getElementById("content").innerHTML = "";
    //console.log(email);
    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    request.onreadystatechange = function() {

        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            
            // Convert responseText to JSON
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

            //console.log(records)

           for (profile of records) {
            var email = profile.email;
            var name = profile.fname;
            var gender = profile.gender;
            var username = profile.username;
            var password = profile.pw;
            var phone = profile.phone;
            var address = profile.street_address;
            var unit = profile.unit;
            var postalCode = profile.postalCode;
            var image_url = profile.image_url;
           }

           document.getElementById("name").innerHTML = name;
           //console.log(name);

            if (isProfilePage) {
                var str = ""
                var str1 =""
                str += `

                        <div class = "col-lg-9 shadow bg-white rounded" style="padding: 30px">
                        <div>
                            <p style = "margin-bottom: 5px;">My Profile</p>
                            <p style = "font-size: 15px; color: darkslategray;">Manage and protect your account</p>
                        </div>
                        <div class = "row">
                            <div class = "col-lg-7">
                                <form>
                                    <div class="form-group row">
                                    <label for="username" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; max-width: 120px;">Username</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="username" placeholder="" value =${name}>
                                    </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray; margin-right: 37px;">Address</label>
                                        <div class="col-sm-9">
                                        <input type="text" class="form-control" id="address" placeholder="" value = ${address}>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray; margin-right: 37px;">Email</label>
                                        <div class="col-sm-9">
                                        <input type="text" class="form-control" id="email" placeholder="" value = ${email}>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="num" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; padding-right: 0px; max-width: 120px;">Phone Number</label>
                                        <div class="col-sm-9">
                                        <input type="text" class="form-control" id="num" placeholder="" value = ${phone}>
                                        </div>
                                    </div>`;
                                    if(gender == 'Female')
                                    {
                                                            str1 += `
                                                            <div class="form-group row">
                                                                <label for="gender" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Gender</label>
                                                                <div class="form-check form-check-inline" style="margin-left: 15px;">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male">
                                                                    <label class="form-check-label" for="male" style = "font-size: 15px; color: darkslategray;">Male</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female" checked = "check">
                                                                    <label class="form-check-label" for="female" style = "font-size: 15px; color: darkslategray;">Female</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="other">
                                                                    <label class="form-check-label" for="other" style = "font-size: 15px; color: darkslategray;">Other</label>
                                                                </div>
                                                            </div>   
                                                            <div>
                                                                <button type="button" class="btn btn-outline-secondary" style = "width: 70px; height: 40px; font-size: 15px;">Save</button>
                                                            </div>                 
                                                        </form>
                                                    </div>
                                                        
                                                    <div class="col-lg-4" style="margin-top: 20px; margin-left: 50px;">
                                                        <div class="card" style="width: 18rem; border: transparent; text-align: center;">
                                                            <div class="img-square-wrapper">
                                                                <img  id = "img1" class="" src="images/profile_image.jpg" alt="Card image cap">
                                                            </div>
                                                            <div class="card-body">
                                                                <button type="button" class="btn btn-outline-secondary" style = "width: 120px; height: 35px; font-size: 15px;">Select Image</button>
                                                                <p class="card-text" style = "font-size: 15px; color:gray; margin-top: 20px;">File size: maximum 1 MB</p>
                                                                <p class="card-text" style = "font-size: 15px; color: gray; margin-left: 12px;">File extension: JPEG, PNG</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                        
                                        `;

                                    }

                                    else
                                    {
                                                            str1 += `
                                                            <div class="form-group row">
                                                                <label for="gender" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Gender</label>
                                                                <div class="form-check form-check-inline" style="margin-left: 15px;">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male" checked = "check">
                                                                    <label class="form-check-label" for="male" style = "font-size: 15px; color: darkslategray;">Male</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female">
                                                                    <label class="form-check-label" for="female" style = "font-size: 15px; color: darkslategray;">Female</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="other">
                                                                    <label class="form-check-label" for="other" style = "font-size: 15px; color: darkslategray;">Other</label>
                                                                </div>
                                                            </div>   
                                                            <div>
                                                                <button type="button" class="btn btn-outline-secondary" style = "width: 70px; height: 40px; font-size: 15px;">Save</button>
                                                            </div>                 
                                                        </form>
                                                    </div>
                                                        
                                                    <div class="col-lg-4" style="margin-top: 20px; margin-left: 50px;">
                                                        <div class="card" style="width: 18rem; border: transparent; text-align: center;">
                                                            <div class="img-square-wrapper">
                                                                <img  id = "img1" class="" src="images/profile_image.jpg" alt="Card image cap">
                                                            </div>
                                                            <div class="card-body">
                                                                <button type="button" class="btn btn-outline-secondary" style = "width: 120px; height: 35px; font-size: 15px;">Select Image</button>
                                                                <p class="card-text" style = "font-size: 15px; color:gray; margin-top: 20px;">File size: maximum 1 MB</p>
                                                                <p class="card-text" style = "font-size: 15px; color: gray; margin-left: 12px;">File extension: JPEG, PNG</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                        
                                        `;
                                    }
                                    
                                   
                document.getElementById("content").innerHTML = str + str1;

            }
            // else {
            //     var registerProfile = document.getElementById("try");
        
            //     registerProfile.innerHTML = `
            //     <div class="dropdown">
            //         <a class="nav-link" href="profile.html" style="padding-bottom:unset;" 
            //         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ${username}&nbsp<img id="profileImage" src="images/profile_image.jpg" /></a>

            //         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //             <a class="dropdown-item" href="profile.html">My Profile</a>
            //             <a class="dropdown-item" href="#" onclick="signOut()">Sign Out</a>
            //         </div>
            //     </div>
            //     `;
            // }

            // document.getElementById("try").innerHTML = registerProfile;

        }

    }

    // Using the api to retrieve the user's profile details
    var url = "projectAPI/user/retrieveProfile.php?email=" + email;

    request.open("GET", url, true);

    request.send();

}


function getShop(isProfilePage=true) {

    document.getElementById("content").innerHTML = "";
    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    request.onreadystatechange = function() {

        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            
            // Convert responseText to JSON
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

            console.log(response_json)

           for (shop of records) {
            var email = shop.email;
            var shop_name = shop.shop_name;
            var street_address = shop.street_address;
            var shop_summary = shop.shop_summary;
            var shop_description = shop.shop_description;
            var unit = shop.unit;
            var postalCode = shop.postalCode;
            var shop_category = shop.shop_category;
            var rating = shop.rating;
            var rating_num = shop.rating_num;
            var image_url = shop.image_url;
           }


             if (isProfilePage) {
                 var str = ""
                 var str1 =""
                 str += `

                       <div class = "col-lg-9 shadow bg-white rounded" style="padding: 30px">
                        <div>
                            <p style = "margin-bottom: 5px;">My Shop</p>
                            <p style = "font-size: 15px; color: darkslategray;">Manage your shop</p>
                        </div>
                        <div class = "row">
                            <div class = "col-lg-7">
                                <form>
                                    <div class="form-group row">
                                    <label for="username" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; max-width: 120px;">Username</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="username" placeholder="${shop_name}">
                                    </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Address</label>
                                        <div class="col-sm-9">
                                            <button type="button" class="btn btn-link" style = "color: darkslategray;">${street_address}</button>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Email</label>
                                        <div class="col-sm-9">
                                            <button type="button" class="btn btn-link" style = "color: darkslategray;">${email}</button>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="num" class="col-sm-3 col-form-label" style = "font-size: 15px; color: darkslategray; padding-right: 0px; max-width: 120px;">Phone Number</label>
                                        <div class="col-sm-9">
                                        <input type="password" class="form-control" id="num" placeholder="${shop_description}">
                                        </div>
                                    </div>`;
                                    if(shop_category == 'Alteration')
                                    {
                                                            str1 += `
                                                            <div class="form-group row">
                                                                <label for="gender" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Gender</label>
                                                                <div class="form-check form-check-inline" style="margin-left: 15px;">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male">
                                                                    <label class="form-check-label" for="male" style = "font-size: 15px; color: darkslategray;">Male</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female" checked = "check">
                                                                    <label class="form-check-label" for="female" style = "font-size: 15px; color: darkslategray;">Female</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="other">
                                                                    <label class="form-check-label" for="other" style = "font-size: 15px; color: darkslategray;">Other</label>
                                                                </div>
                                                            </div>   
                                                            <div>
                                                                <button type="button" class="btn btn-outline-secondary" style = "width: 70px; height: 40px; font-size: 15px;">Save</button>
                                                            </div>                 
                                                        </form>
                                                    </div>
                                                        
                                                    <div class="col-lg-4" style="margin-top: 20px; margin-left: 50px;">
                                                        <div class="card" style="width: 18rem; border: transparent; text-align: center;">
                                                            <div class="img-square-wrapper">
                                                                <img  id = "img1" class="" src="images/profile_image.jpg" alt="Card image cap">
                                                            </div>
                                                            <div class="card-body">
                                                                <button type="button" class="btn btn-outline-secondary" style = "width: 120px; height: 35px; font-size: 15px;">Select Image</button>
                                                                <p class="card-text" style = "font-size: 15px; color:gray; margin-top: 20px;">File size: maximum 1 MB</p>
                                                                <p class="card-text" style = "font-size: 15px; color: gray; margin-left: 12px;">File extension: JPEG, PNG</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                        
                                        `;

                                    }

                                    else
                                    {
                                                            str1 += `
                                                            <div class="form-group row">
                                                                <label for="gender" class="col-sm-2 col-form-label" style = "font-size: 15px; color: darkslategray;">Gender</label>
                                                                <div class="form-check form-check-inline" style="margin-left: 15px;">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male" checked = "check">
                                                                    <label class="form-check-label" for="male" style = "font-size: 15px; color: darkslategray;">Male</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female">
                                                                    <label class="form-check-label" for="female" style = "font-size: 15px; color: darkslategray;">Female</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="other">
                                                                    <label class="form-check-label" for="other" style = "font-size: 15px; color: darkslategray;">Other</label>
                                                                </div>
                                                            </div>   
                                                            <div>
                                                                <button type="button" class="btn btn-outline-secondary" style = "width: 70px; height: 40px; font-size: 15px;">Save</button>
                                                            </div>                 
                                                        </form>
                                                    </div>
                                                        
                                                    <div class="col-lg-4" style="margin-top: 20px; margin-left: 50px;">
                                                        <div class="card" style="width: 18rem; border: transparent; text-align: center;">
                                                            <div class="img-square-wrapper">
                                                                <img  id = "img1" class="" src="images/profile_image.jpg" alt="Card image cap">
                                                            </div>
                                                            <div class="card-body">
                                                                <button type="button" class="btn btn-outline-secondary" style = "width: 120px; height: 35px; font-size: 15px;">Select Image</button>
                                                                <p class="card-text" style = "font-size: 15px; color:gray; margin-top: 20px;">File size: maximum 1 MB</p>
                                                                <p class="card-text" style = "font-size: 15px; color: gray; margin-left: 12px;">File extension: JPEG, PNG</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                        
                                        `;
                                    }
                                    
                                   
                document.getElementById("content").innerHTML = str + str1;

            }
            // else {
            //     var registerProfile = document.getElementById("try");
        
            //     registerProfile.innerHTML = `
            //     <div class="dropdown">
            //         <a class="nav-link" href="profile.html" style="padding-bottom:unset;" 
            //         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ${username}&nbsp<img id="profileImage" src="images/profile_image.jpg" /></a>

            //         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //             <a class="dropdown-item" href="profile.html">My Profile</a>
            //             <a class="dropdown-item" href="#" onclick="signOut()">Sign Out</a>
            //         </div>
            //     </div>
            //     `;
            // }

            // document.getElementById("try").innerHTML = registerProfile;

        }

    }

    // Using the api to retrieve the user's profile details
    var url = "projectAPI/user/retrieveShop.php?email=" + email;

    request.open("GET", url, true);

    request.send();

}


