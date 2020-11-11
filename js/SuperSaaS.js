function CreateUser(email, full_name) {
    var request = new XMLHttpRequest;

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        } 
    }

    var url = `https://www.supersaas.com/api/users/567fk.json?account=PetrasTYR&checksum=6db6f68b2a7a4633d4e7ae0d068d0665&user[name]=${email}&user[password]=secret1&user[full_name]=${full_name}`;
    request.open('GET', url, true);
    request.send();
}