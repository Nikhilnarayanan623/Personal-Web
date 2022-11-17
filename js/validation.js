let gform = document.getElementById('gform')

var valName;
let valEmail;
let valPhone;
let valSubject;

//value to check
var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
var chekcPhone=/^\d{10}$/;                                       
var checkName = /\d+$/g;

//for span
let errorName = document.getElementById('error-name')
let errorEmail = document.getElementById('error-email')
let errorPhone = document.getElementById('error-phone')
let errorSubject = document.getElementById('error-subject')

let confirm = false;


gform.addEventListener('submit',(e)=>{
    console.log("form started")
    // get the value inside form
    valName =  document.forms.gform.name.value;
    valEmail =  document.forms.gform.email.value;
    valPhone =  document.forms.gform.phone.value;
    valSubject =  document.forms.gform.subject.value;
    
    
    //check values
    
    if(valName == "" || valName.lenght < 4 || valName.charAt(0) == " ") {
        errorName.style.display = "inline";
        errorName.innerText = "Enter Name Properly"
        document.getElementById('fname').style.backgroundColor = "rgb(150, 62, 62)"
        return
    }
    else{
        errorName.style.display = "none";
        document.getElementById('fname').style.backgroundColor = "green"
        console.log("at name")
    }
    //chekc mail
    console.log(email)
    if(valEmail == "" || !checkEmail.test(valEmail)){
        errorEmail.style.display = "inline";
        errorEmail.innerHTML = "Enter Email Properly"
        document.getElementById('email').style.backgroundColor = "rgb(150, 62, 62)"
        return
    }
    else{
        errorEmail.style.display = "none"
        document.getElementById('email').style.backgroundColor = "green"
        console.log("at email")
    }
    //check phone
    if(valPhone == "" || !chekcPhone.test(valPhone)){
        errorPhone.style.display = "inline";
        errorPhone.innerHTML = "Enter Phone Number Properly"
        document.getElementById('phone').style.backgroundColor = "rgb(150, 62, 62)"
        return
    }
    else{
        errorPhone.style.display = "none"
        document.getElementById('phone').style.backgroundColor = "green"
        console.log("at phone")
    }
    //check subject
    
    if( valSubject == "" || valSubject.length < 20){

        errorSubject.style.display = "inline";
        errorSubject.innerHTML = "Message Must Contain Atleast 20 Letters"
        document.getElementById('subject').style.backgroundColor = "rgb(150, 62, 62) "
        return
    }
    else{
        errorSubject.style.display = "none"
        document.getElementById('subject').style.backgroundColor = "green"
        console.log("at sub ")
    }
   
    
    //all complete then confirm
    confirm = true

})

$("#gform").submit((e)=>{
    e.preventDefault()

    console.log(confirm)

        if(confirm == true) {
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbz1tSxLEtHm3e70XTLLYm6DAnXUaO8q0ipbDFj5ABEv8x1zKYDKwBi5ll2mBTwqE7LV/exec",
                data:$("#gform").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    location.reload()
                    //window.location.href="https://google.com"
                    //remove all values in the form
                    document.forms.gform.name.value = "";
                    document.forms.gform.email.value = "";
                    document.forms.gform.phone.value = "";
                    document.forms.gform.subject.value = "";
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        }
        else{
            //alert("error")
        }
        
    
})