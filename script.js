
const btn=document.querySelector('.count');
btn.addEventListener('click',()=>{
   let count=prompt("Enter grid size(n*n)",64)
    createDiv(count)
    clicktostart()
})
function createDiv(count){
    const container=document.querySelector('.container')
    container.textContent='';
    let sqr=Math.sqrt(count);
        if(count>100)return alert('you entered greater than 100')
        if(count%sqr==0){
        let autofn= (count)=>{ let auto='';
            for(let i=0;i<count;i++){
            auto+=' auto '
            }
        return auto
        }
        container.style['grid-template-columns']=autofn(count)
        for(let i=1;i<=count;i++){
            for(let i=1;i<=count;i++){
                
                const div=document.createElement('div')
                div.classList.add('box')
                div.style.cssText='border:.01px solid grey; '
                container.appendChild(div)

                
            }
        }
   } 
}
function working(){
        const grids=document.querySelectorAll('.box')
            grids.forEach(grid=>{
               grid.addEventListener('mouseover',()=>{
            //    let value1=Math.floor(Math.random()*255);
            //    let value2=Math.floor(Math.random()*255);
            //    let value3=Math.floor(Math.random()*255);
            //    grid.style['background-color']=`rgb(${value1},${value2},${value3})`
            grid.style['background-color']='black';
               })
        })  
}
function clicktostart(){
    const grids=document.querySelectorAll('.box')
        grids.forEach(grid=>{
         grid.addEventListener('click',working)
    })
}

