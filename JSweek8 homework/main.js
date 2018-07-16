// create a variable with the url(API endpoint)
// let endpoint = "https://api.github.com/orgs/HackYourFuture/repos";
let endpoint = "https://api.github.com/repos/HackYourFuture/";
let xhr;
let response;

// create a button and add an event listener to it
let searchButton= document.getElementById('searchBtn').addEventListener('click',displayData);

function displayData() {
    console.log('button clicked');
    // catch user input
    let userInput = document.getElementById('userInput');
    let searchValue = userInput.value;
    console.log(searchValue);
    response=`${endpoint}${searchValue}`
    console.log(response);
    // create XMLHttp Request
    xhr = new XMLHttpRequest();
    //open the request
    xhr.open('GET',response,true);
    // send it
    xhr.send();
    xhr.onreadystatechange = processRequest;
}

//process the request
function processRequest() {
    if (xhr.readyState == 4 && xhr.status ==200){
        console.log("OK")
        response=JSON.parse(xhr.responseText);
        console.log(response);
        document.getElementById("detailsDiv").innerHTML= xhr.responseText;
        document.getElementById("reposLinks").innerHTML= xhr.responseText;

    }

}

function creatReposLinks(params) {
    //creat a button for each repository and a link tothe web page

}

// question 6
// let endpoint ='https://api.github.com/repos/HackYourFuture/CommandLine';
// let response;
// let searchBtn=document.getElementById('search')
// .addEventListener('click', function myFunction(){
//   console.log('you clicked me')
//   let userInput = document.getElementById('user-input');
//    console.log(userInput);
//    xhr = new XMLHttpRequest();
//     let theUrl =  endPoint + usersInput;
//     console.log(theUrl);
//     xhr.open('GET', theUrl, true);
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState == 4 && xhr.status == 200){
//         console.log("ok");
//         response = JSON.parse(xhr.responseText);
//         console.log(response);
//         document.getElementById('data').innerHtml=xhr.response
//      }
//     }
    // })

