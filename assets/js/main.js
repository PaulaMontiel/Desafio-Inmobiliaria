import { propiedadesJSON as propiedades} from './index.js';

const btn = document.getElementById('btnn')
const mytotal =document.getElementById('mytotal')
const  myprop = document.getElementById('myprop')


function evalContent(arr) {
  console.log(arr);
  let evaluated = false;
  for (let element of arr) {
    if (element != ''){
      evaluated = true;
    } else  {
      return false;
    }
  }
  return evaluated;
}
function createObject(element){
  let contentObject = '';
  if(element !=''){
    contentObject = `<div class="propiedades">
                      <div class="propiedad">
                        <div class="img" style="background-image: url(${element.src})">
                        </div>
                          <section>
                            <h5>${element.name}</h5>
                            <div class="d-flex justify-content-between">
                              <p>Cuartos:${element.rooms}</p>
                              <p>Metros:${element.m}</p>
                            </div>
                            <p class="my-3">${element.description}</p>
                            <button class="btn btn-info ">Ver más</button>
                          </section>
                      </div>
                    </div>`
  } 
  return  contentObject;
}
function justSearch(){
  const dorms = document.getElementById('dorms').value;
  const since = document.getElementById('since-m').value;
  const until = document.getElementById('until-m').value;
  let html = "";
    console.log(dorms);
  

  if (evalContent([dorms,since,until])){
    console.log("pasé");
    
    let suma = 0;
    for (let propiedad of propiedades){
      if((parseInt(since) <= propiedad.m) && (parseInt(until) >= propiedad.m) && (parseInt(dorms) == propiedad.rooms)){
        console.log(propiedad);
        
        html+= createObject(propiedad);
        suma = suma + 1 ;
      }
    }
    myprop.innerHTML=html;
    mytotal.innerHTML = suma;

  }else{
    alert('Please complete all required fields');
  }
}
btn.addEventListener("click", () =>{
  justSearch();
})