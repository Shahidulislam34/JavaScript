const myVar = document.querySelector("#age-submit-button");
myVar.addEventListener("click", ()=>{
    let age = document.querySelector("#age-input").value;
    try{
        if (age < 18) throw "To become voter, Your age must be above 18";
        console.log("Successfully You become a voter");
    }catch(err){
        console.log(err);
    }
});