const pDisplay = document.getElementsByClassName("output"),
    missedName = document.querySelector("#missed-name"),
    submitButton = document.getElementById("submit"),
    rosesArray = ["rose.glb","red-rose.gltf","blue-rose.gltf"],
    modelViewer = document.querySelector("model-viewer"),
    nameInput = localStorage.getItem("missed-name");

    console.log(modelViewer);

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const pickRandomRose = () =>{

    return  Math.floor(Math.random() * rosesArray.length);
     
 }


console.log(localStorage.getItem("missed-name"));

async function introduceUser() 
{


    localStorage.clear();


if(nameInput == null)
{

    for (let i=0; i < pDisplay.length; i++)
    {

        let pDisplayWords = pDisplay[i].getAttribute("data-words");
        console.log(pDisplayWords);

        // pDisplay[2].innerHTML = nameInput;
        for (let char = 0; char < pDisplayWords.length; char++)
        {
            await sleep(10)
            pDisplay[i].innerHTML += pDisplayWords.charAt(char);
        }
              
    }
}else
{

    const roseIndex = pickRandomRose();
    console.log(roseIndex);
    for (let i=0; i < pDisplay.length - 1; i++)
    {

        let pDisplayWords = pDisplay[i].getAttribute("data-words");
        console.log(pDisplayWords);

        // pDisplay[2].innerHTML = nameInput;
        for (let char = 0; char < pDisplayWords.length; char++)
        {
            await sleep(10)
            pDisplay[i].innerHTML += pDisplayWords.charAt(char);
        }
              pDisplay[2].innerHTML = nameInput;
              modelViewer.src = `dist/3d-assets/${rosesArray[roseIndex]}`
    }
}
     
}

submitButton.addEventListener("click", function()
{
    localStorage.setItem("missed-name", missedName.value)
    console.log(localStorage.getItem("missed-name"));

});

introduceUser();

// window.addEventListener("load", () => introduceUser());