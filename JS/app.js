const $ = document;
let inputElem = $.getElementById('input-field');
let favColors = $.querySelectorAll('.color-box');
let btnSave = $.getElementById('btn-save');
let btnDelete = $.getElementById('btn-delete');
let todoDivWrapper = $.getElementById('listed');

function generateTodo() {
    // if(inputElem.value){}
    let todoDiv = $.createElement('div');
    todoDiv.className = "card shadow-sm rounded";
    todoDiv.style.backgroundColor=inputElem.style.backgroundColor;
    todoDiv.addEventListener('click',removeNote);

    let todoContent = $.createElement('p');
    todoContent.className = "card-text p-3";
    todoContent.textContent = inputElem.value;

    todoDiv.appendChild(todoContent);
    todoDivWrapper.appendChild(todoDiv);
    inputElem.value='';
    inputElem.style.backgroundColor='#fff';
}

function removeNote(e){
    e.target.parentElement.remove();
}

inputElem.addEventListener('keyup', (e) => {
    // let inputVal = e.target.value;
    // console.log(inputVal);
    e.keyCode ===13 && inputElem.value && generateTodo();
    
})

btnSave.addEventListener('click',()=>{inputElem.value && generateTodo()});
btnDelete.addEventListener('click',()=>{
    inputElem.value='';
    inputElem.style.backgroundColor="#fff";
})

favColors.forEach(item => {
    item.addEventListener('click',(e)=>{
        let color = e.target.style.backgroundColor;
        inputElem.style.backgroundColor=color;
    })
})


