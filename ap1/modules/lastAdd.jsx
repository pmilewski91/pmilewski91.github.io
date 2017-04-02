function lgNr(data){
  let lg_nr;
  switch (data) {
    case 4:
      return lg_nr = 3;
      break;
    case 3:
      return lg_nr = 4;
      break;
    case 2:
      return lg_nr = 6;
      break;
    case 1:
      return lg_nr = 12;
      break;
    default:
      return lg_nr = 3;
  }
}

function howManyF(data){
  let howMany;
    if(data.length < 4){
      return howMany = data.length-1;
    }else{
      return howMany = 3;
    }
}

const LastAdd = ({...prop}) => {
  let data = prop;
  let lg_nr = lgNr(data.howMany+1);
  let ang = 'ng-click="log()"';
  let Click = () => {
    DetailsRenderUpdate(categoryObj);
  }
  let categoryObj = data.category[data.category.length-data.id];
  return (
     <div className={"col-lg-"+lg_nr}>
        <a onClick={Click} href="#"><img className="img-responsive center-block lastadd" src={categoryObj.image} alt=""/>
      <h4 className="text-center">{categoryObj.title}</h4></a>
    </div>
  )
}
/* ----- Last All ----- */

const LastAllAdd = ({...prop}) => {
  let dataLastAdd = prop;
  let lg_nr = lgNr(data.howMany+1);
  let Click = () => {
    DetailsRenderUpdate(Obj);
  }
  let Obj = data[data.length-dataLastAdd.id];
  return (
     <div className={"col-lg-"+lg_nr}>
        <a onClick={Click} href="#"><img className="img-responsive center-block lastadd" src={Obj.image} alt=""/>
      <h4 className="text-center">{Obj.title}</h4></a>
    </div>
  )
}

const LastAllAddRender = () => {
  let arr = [];
  let howMany = 0;
  if(data.length !== 0){
    howMany = howManyF(data);
    for(let el=0; el <= howMany; el++){
      arr.push(<LastAllAdd howMany={howMany} id={el+1} key={el}/>)
    }
  }

return(data.length !== 0 ?
  <div>
    {arr}
  </div>:
  <h4 className="text-center">Brak dodanych przepisów</h4>
)}

/* ----- Last Lunchs ----- */

const LastAddLunchRender = () => {
  let lunch = [];
  if(data.length !== 0){
      for(let obj of data){
        if(obj.category == "lunch"){
        lunch.push(obj);
        }
      }
    }
  let arr = [];
  let howMany = 0;
  if(lunch.length !== 0){
    howMany = howManyF(lunch);
    for(let el=0; el <= howMany; el++){
      arr.push(<LastAdd category={lunch} howMany={howMany} id={el+1} key={el}/>)
    }
  }

return(lunch.length !== 0 ?
  <div>
    {arr}
  </div>:
  <h4 className="text-center">Brak dodanych obiadów</h4>
)}

/* ----- Last Desserts ----- */

const LastAddDessertRender = () => {
  let dessert = [];
  if(data.length !== 0){
      for(let obj of data){
        if(obj.category == "dessert"){
        dessert.push(obj);
        }
      }
    }
  let arr = [];
  let howMany = 0;
  if(dessert.length !== 0){
    howMany = howManyF(dessert);
    for(let el=0; el <= howMany; el++){
      arr.push(<LastAdd category={dessert} howMany={howMany} id={el+1} key={el}/>)
    }
  }
return(dessert.length !== 0 ?
  <div>
    {arr}
  </div>:
  <h4 className="text-center">Brak dodanych deserów</h4>
)}

/* ----- Last Breakfasts ----- */

const LastAddBreakfastRender = () => {
  let breakfast = [];
  if(data.length !== 0){
      for(let obj of data){
        if(obj.category == "breakfast"){
        breakfast.push(obj);
        }
      }
    }
  let arr = [];
  let howMany = 0;
  if(breakfast.length !== 0){
    howMany = howManyF(breakfast);
    for(let el=0; el <= howMany; el++){
      arr.push(<LastAdd category={breakfast} howMany={howMany} id={el+1} key={el}/>)
    }
  }
return(breakfast.length !== 0 ?
  <div>
    {arr}
  </div>:
  <h4 className="text-center">Brak dodanych śniadań</h4>
)}

/* ----- LastSnacks ----- */

const LastAddSnackRender = () => {
  let snack = [];
  if(data.length !== 0){
      for(let obj of data){
        if(obj.category == "snack"){
        snack.push(obj);
        }
      }
    }
  let arr = [];
  let howMany = 0;
  if(snack.length !== 0){
    howMany = howManyF(snack);
    for(let el=0; el <= howMany; el++){
      arr.push(<LastAdd category={snack} howMany={howMany} id={el+1} key={el}/>)
    }
  }
return(snack.length !== 0 ?
  <div>
    {arr}
  </div>:
  <h4 className="text-center">Brak dodanych przekąsek</h4>
)}

/* ----- LastPreserves ----- */

const LastAddPreserveRender = () => {
  let preserve = [];
  if(data.length !== 0){
      for(let obj of data){
        if(obj.category == "preserve"){
        preserve.push(obj);
        }
      }
    }
  let arr = [];
  let howMany = 0;
  if(preserve.length !== 0){
    howMany = howManyF(preserve);
    for(let el=0; el <= howMany; el++){
      arr.push(<LastAdd category={preserve} howMany={howMany} id={el+1} key={el}/>)
    }
  }
return(preserve.length !== 0 ?
  <div>
    {arr}
  </div>:
  <h4 className="text-center">Brak dodanych przetworów</h4>
)}

/* ----- Last Others ----- */

const LastAddOtherRender = () => {
  let other = [];
  if(data.length !== 0){
      for(let obj of data){
        if(obj.category == "other"){
        other.push(obj);
        }
      }
    }
  let arr = [];
  let howMany = 0;
  if(other.length !== 0){
    howMany = howManyF(other);
    for(let el=0; el <= howMany; el++){
      arr.push(<LastAdd category={other} howMany={howMany} id={el+1} key={el}/>)
    }
  }
return(other.length !== 0 ?
  <div>
    {arr}
  </div>:
  <h4 className="text-center">Brak dodanych innych przepisów</h4>
)}


function LastAllAddRenderUpdate(){
  ReactDOM.render(
    <LastAllAddRender />, document.querySelector('#lastAllAdd'));
}
function LastAddLunchRenderUpdate(){
  ReactDOM.render(
    <LastAddLunchRender />, document.querySelector('#lastAddLunch'));
}
function LastAddDessertRenderUpdate(){
  ReactDOM.render(
    <LastAddDessertRender />, document.querySelector('#lastAddDessert'));
}
function LastAddBreakfastRenderUpdate(){
  ReactDOM.render(
    <LastAddBreakfastRender />, document.querySelector('#lastAddBreakfast'));
}
function LastAddSnackRenderUpdate(){
  ReactDOM.render(
    <LastAddSnackRender />, document.querySelector('#lastAddSnack'));
}
function LastAddPreserveRenderUpdate(){
  ReactDOM.render(
    <LastAddPreserveRender />, document.querySelector('#LastAddPreserve'));
}
function LastAddOtherRenderUpdate(){
  ReactDOM.render(
    <LastAddOtherRender />, document.querySelector('#LastAddOther'));
}
LastAllAddRenderUpdate();
LastAddLunchRenderUpdate();
LastAddDessertRenderUpdate();
LastAddBreakfastRenderUpdate();
LastAddSnackRenderUpdate();
LastAddPreserveRenderUpdate();
LastAddOtherRenderUpdate();
