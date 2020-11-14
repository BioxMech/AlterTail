function generateSaaS() {
    var SuperSaaS_user_id = "";
    for (var i = 0; i < 3; i++) {
        var n = Math.floor((Math.random(1,9) * 10)).toString();
        SuperSaaS_user_id += n;
    }
    SuperSaaS_user_id += "fk";
    return SuperSaaS_user_id;
}

function CreateUser(email, fname,SuperSaaS_user_id) {
    var url = `https://www.supersaas.com/api/users/${SuperSaaS_user_id}.json?account=PetrasTYR&api_key=60Sdu0PWYumxHliWn1Uieg&user[name]=${email}&user[full_name]=${fname}`;
  

    axios.post(`${'https://cors-anywhere.herokuapp.com/'}${url}`,
    {
        headers: {
        "Access-Control-Allow-Headers": "x-requested-with, x-requested-by"
        }
    })
    .then((res) => {
        console.log("=========== DEBUG (success) ==========");
        console.log(res);
    })
    .catch((err) => {
        console.log("=========== DEBUG (error) ==========");
        console.log(err.response);
    })

  }

function loggedIn(isProfilePage=false) {

    // Signed in already
    if (sessionStorage.length != 0) {
        getProfileDetails(sessionStorage.getItem("email"), isProfilePage);
        createSaaS();
        console.log(sessionStorage.getItem("SaaSID"));
    }

    //  not yet signed in
    else { 
        // <form>
        //             <input type="text" class="searchBar" placeholder="Search Shop Names">
        //         </form>
        document.getElementById("change2").innerHTML = `    
            <li class="nav-item mt-1" >
                <!-- Replace me with Sign in or Profile -->
                <a href="" class="nav-link" style="padding-bottom:unset;" data-toggle="modal" id="registerSignin" data-target="#registerSigninModal">Register / Login</a>
            </li>
        `;
        var generatedSaaS = generateSaaS();
        console.log("First load " + generatedSaaS)
        document.getElementById("SuperSaaS_user_id").value = generatedSaaS;
    }
}

function createSaaS() {
    if (sessionStorage.getItem("SaaS") == "false") {
        console.log('======= DEBUG (SUCCESS) =====');
        CreateUser(sessionStorage.getItem("email"),sessionStorage.getItem("name"),sessionStorage.getItem("SaaSID"));
        sessionStorage.setItem("SaaS",true);
    }
    else {
        console.log("===== DEBUG (ERROR) =====")
    }
}

function getProfileDetails(email, isProfilePage) {

    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    request.onreadystatechange = function() {

        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            
            // Convert responseText to JSON
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

           for (profile of records) {
            var email = profile.email;
            var name = profile.fname;
            var SuperSaaS_user_id = profile.SuperSaaS_user_id;
            var gender = profile.gender;
            var username = profile.username;
            var password = profile.pw;
            var phone = profile.phone;
            var address = profile.street_address;
            var unit = profile.unit;
            var postalCode = profile.postalCode;
            // var image_url = profile.image_url;
           }

            if (isProfilePage) {
                document.getElementById("name").innerHTML = name;
                //console.log(name);
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
                                                                 <form>
                                                                    <button type="file" class="btn btn-outline-secondary" style = "width: 120px; height: 35px; font-size: 15px;">Select Image</button>
                                                                 </form>
                                                                     
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
                                                                 <form>
                                                                 <button type="file" class="btn btn-outline-secondary" style = "width: 120px; height: 35px; font-size: 15px;">Select Image</button>
                                                                 </form>
                                                                     
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
            
                
                document.getElementById("change").setAttribute("class", "nav-item mt-4 mr-1");
                document.getElementById("change2").innerHTML = `
                <li class="nav-item mt-1" >
                    <!-- Replace me with Sign in or Profile -->
                    <div class="dropdown">
                        <a class="nav-link" href="profile.html" style="padding-bottom:unset;" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ${name}&nbsp<img id="profileImage" src="images/profile_image.jpg" /></a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="profile.html">My Profile</a>
                            <a class="dropdown-item" href="cart.html">My Appointment</a>
                            <a class="dropdown-item" href="#" onclick="signOut()">Sign Out</a>
                        </div>
                    </div>
                </li>
                
                `;

                sessionStorage.setItem("SaaSID", SuperSaaS_user_id);
            

        }

    }

    // Using the api to retrieve the user's profile details
    var url = "projectAPI/user/retrieveProfile.php?email=" + email;

    request.open("GET", url, true);

    request.send();

}

