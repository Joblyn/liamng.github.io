const searchIcon = document.querySelector("#search-icon");
const item = document.getElementsByClassName("item");
const p = document.getElementById("p-search");
const items = document.querySelectorAll(".item");

const createSearchBar = () => {
    if (searchIcon.classList.contains("on")) {
        let inputVal = document.getElementById("searchinput").value;
        itemArray = [].slice.call(items);
        let result = [];
        for (let i = 0; i < itemArray.length; i++) {
            if (itemArray[i].innerHTML.indexOf(inputVal) !== -1) {
                result.push(itemArray[i])
                console.log(result)
            }
        }
        let content = document.getElementsByClassName("content");
        console.log(content);
        content.innerHTML = "";
        content.innerHTML = result;
        console.log(content);
    } else {
        let input = document.createElement("input");
        input.setAttribute('type', 'search');
        input.setAttribute('name', 'search');
        input.setAttribute('placeholder', "type here");
        input.setAttribute('id', 'searchinput');
        p.appendChild(input);
        searchIcon.classList.toggle("on");
    }
}

searchIcon.addEventListener('click', createSearchBar);

// const grabSearchValue = ()=>{
//     let inputVal=document.getElementById("searchInput").value;
//     return inputVal
// }

// const searchValue = ()=>{
//     if(searchIcon.className === "on"){
//     if(searchIcon.className == "on"){
//         grabSearchValue();
//         itemArray = [].slice.call(items);
//         // let result=[];
//         for(let i=0; i<itemArray.length; i++){}
//     }
//     $('#search').on('input', function(){
//         var text = $(this).val();
//         $('.item div').show();    
//         $('.item div:not(:contains(' + text + '))').hide();
//     });
//     }
// }
// searchIcon.addEventListener('click', searchValue);
// $('#search-icon').on('input', function(){
//     var text = $(this).val();
//     $('.item div').show();    
//     $('.item div:not(:contains(' + text + '))').hide();
// });