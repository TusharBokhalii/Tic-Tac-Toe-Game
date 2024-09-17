let store = () =>{
    let FirstP = document.getElementById("A").value;
    let SecondP = document.getElementById("B").value;
            
    let array = [FirstP,SecondP];
    sessionStorage.setItem("stores",JSON.stringify(array))
} 