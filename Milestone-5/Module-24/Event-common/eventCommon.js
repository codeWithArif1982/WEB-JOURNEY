function handleJustFunctionClick(){
    const clinkingMethod = document.getElementById('clicking-Method');
    clinkingMethod.innerText = "Set by using function";
}

document.getElementById('handle-event').addEventListener('click',function(){
    const clinkingMethod = document.getElementById('clicking-Method');
    clinkingMethod.innerText = "Set by using handler method";
})