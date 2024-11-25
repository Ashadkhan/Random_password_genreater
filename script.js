const output_box= document.querySelector("#output-box")
const pass_range=document.querySelector("#pas-char")
let range_val=document.querySelector("#range-val")
const btn_gen=document.querySelector("#btn_gen")
let upper_case=document.querySelector("#uppercase")
let lower_case=document.querySelector("#lowercase")
let number=document.querySelector("#number")
let spcial_char=document.querySelector("#spacial-character")
pass_range.addEventListener("input",()=>{
    range_val.innerHTML=pass_range.value
})
let upperchar=()=>{
    if (upper_case.checked) {
        
        let char="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return char;
    }
    else
    {
        return "";
    }
}
let lowerchar=()=>{
    if (lower_case.checked) {
        
        let char="abcdefghijklmnopqrstuvwxyz"
        return char;
    }
    else
    {
        return "";
    }
}
let num=()=>{
    if (number.checked) {
        
        let char="0123456789"
        return char;
    }
    else
    {
        return "";
    }
}
let spchar=()=>{
    if (spcial_char.checked) {
        
        let char=`*-+./=-_)(&^%$#@!~<>/|\}{[]";:,`
        return char;
    }
    else
    {
        return "";
    }
}
btn_gen.addEventListener("click",()=>{
    let allchar=upperchar()+lowerchar()+num()+spchar()
    if (allchar==="") {
        alert("please select Atlist one character type to generate password")
    }
    output_box.value="";
    let char="";
    for(let i=0;i<pass_range.value;i++)
    {
        let random_num=Math.floor(Math.random()*allchar.length);
        char=char.concat(allchar[random_num]);
    }
    output_box.value=char;
})
console.log(range_val)