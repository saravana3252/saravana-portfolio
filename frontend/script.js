


function profile(){
    document.getElementById("profile").style.display="grid"
     document.getElementById("projects").style.display="none"
      document.getElementById("contact").style.display="none"
}

function projects(){
    document.getElementById("projects").style.display="grid"
     document.getElementById("profile").style.display="none"
      document.getElementById("contact").style.display="none"
}

function contact(){
    document.getElementById("contact").style.display="flex"
     document.getElementById("profile").style.display="none"
      document.getElementById("projects").style.display="none"
}

function toggleMenu(){
    document.getElementById("mobile").style.right="0"
}

function closeMenu(){
    document.getElementById("mobile").style.right="-500px"
}


function handleSubmit(event){
    event.preventDefault();
    let email = document.getElementById("email").value
    let subject =document.getElementById("subject").value
    let message = document.getElementById("message").value


    let formData = {
        email:email,
        subject:subject,
        message:message
    }

    Notiflix.Notify.init({
        success: {
          background: 'white',
          textColor:"green",
          fontWeight: 'bold',   
        }
    })
    fetch("https://saravana-portfolio-d44v.onrender.com/contact",{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=>response.json()).then((data)=>{
        Notiflix.Notify.success('Email sent!');
        document.getElementById("email").value=""
        document.getElementById("subject").value=""
        document.getElementById("message").value=""
    }).catch((err)=>{
        console.log(err)
    })
}