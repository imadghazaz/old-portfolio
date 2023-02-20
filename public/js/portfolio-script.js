const btns=document.querySelectorAll('.folio-btn-wrapper button')
const btnsContainer=document.querySelector('.folio-btn-wrapper')
const projects=document.querySelectorAll('.portfolio-container .grid .col-lg-4')
const grid=document.querySelector('.portfolio-container .grid')
let xButton;let popBackground;let btnRight;let btnLeft;let project;

btnsContainer.addEventListener('click',(e)=>{
    if(!e.target.dataset.filter)return
    if(e.target.dataset.filter==='all'){
        projects.forEach(project=>{
            project.classList.remove('hidden')
        })
        return
    }
    if(e.target.dataset)projects.forEach(project=>{
        if(project.classList.contains(e.target.dataset.filter)){
            project.classList.remove('hidden')
        }else project.classList.add('hidden')
    })
})
grid.addEventListener('click',e=>{
    project=e.target.closest('.col-lg-4');
    addPopUp(project)
    popFuct()

    btnLeft.addEventListener('click',()=>{
        project=project.previousElementSibling
        addPopUp(project)
        popFuct()
        closePopUp()
    })
    btnRight.addEventListener('click',()=>{
        project=project.nextElementSibling
        addPopUp(project)
        popFuct()
        closePopUp()
    })
})


function popFuct(){
    xButton=document.querySelector('.x-wrapper button')
    popBackground=document.querySelector('.popUp-wrapper')
    btnLeft=document.querySelector('.PopUp-container .left-icon i')
    btnRight=document.querySelector('.PopUp-container .right-icon i')
    
    xButton.addEventListener('click',closePopUp)
    popBackground.addEventListener('click',closePopUp)
    document.addEventListener('keydown',e=>{
        if(e.code==='Escape' || e.code==='Space'){
            closePopUp()
        }
    })
    document.body.classList.add('overflow')
}
function addPopUp(projects){
    if(!projects)return
    const project=projects.children[0]
    console.log(project);
    if(!project)return;
    const img=project.children[0].children[0];
    const title=project.children[1].children[0];
    const html=`
    <div class="pop-up">
        <div class="popUp-backgroud"></div>
        <div class="PopUp-container">
            <div class="popUp-wrapper">
                <div class="popup-contant-wrapper d-flex flex-row">
                    <div class="left-icon">
                        <i class="fa-solid fa-caret-left fa-8x "></i>
                    </div>
                    <div class="pop-up">
                        <div class="proj-img">
                            <div class="x-wrapper">
                                <button>x</button>
                            </div>
                            <img src="${img.getAttribute('src')}" alt="project">
                        </div>
                        <div class="popUp-title">
                            <h4 class="text-uppercase cl-white">${title.innerHTML}</h4>
                        </div>
                    </div>
                    <div class="right-icon">
                    <i class="fa-solid fa-caret-right fa-8x "></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    document.body.insertAdjacentHTML("afterbegin"
    ,html)
}
function closePopUp(){
    const popUp=document.querySelector('.pop-up')
    if(!popUp)return
    document.body.removeChild(popUp)
    document.body.classList.remove('overflow')
}