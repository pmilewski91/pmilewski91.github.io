const Subcategory= ({...prop}) => {
  let data = prop;
  let Click=()=>{
    ListSubcategoriesRenderUpdate(data.subcategory);
    $('#lastAddShow').hide();
  }
  return (
    <a style={{marginRight: 10 + 'px'}} onClick={Click} className="btn btn-default" href="#" role="button">{data.subcategory}</a>
  )
}

const Subcategories = ({...prop}) => {
  let data = prop;
  let Click=()=>{
    ListSubcategoriesRenderUpdate(data.subcategory);
  }
  return (
    <a style={{marginRight: 10 + 'px'}} onClick={Click} className="btn btn-default" href="#" role="button">{data.subcategory}</a>
  )
}
const SubcategoriesRender = ({...prop}) => {
  let data = prop;
  let subcategoriesLunch = ['Mięsa','Ryby','Owoce Morza','Zupy','Pierogi/Kluski','Inne Obiady'];
  let subcategoriesDessert = ['Lody','Ciasta','Ciasteczka','Inne Desery'];
  let subcategoriesSnack = ['Sałatki'];
  let subcategoriesArr = [];
  let id = 0;
  switch (data.category) {
    case 'lunch':
      for(let subcategory of subcategoriesLunch){
        subcategoriesArr.push(<Subcategories subcategory={subcategory} key={id}/>)
        id++;
      }
      break;
    case 'dessert':
      for(let subcategory of subcategoriesDessert){
        subcategoriesArr.push(<Subcategories subcategory={subcategory} key={id}/>)
        id++;
      }
      break;
    case 'snack':
      for(let subcategory of subcategoriesSnack){
        subcategoriesArr.push(<Subcategories subcategory={subcategory} key={id}/>)
        id++;
      }
      break;
    default:
  }

  return(
    <div>
      {subcategoriesArr.length!=0?<div><h3>Podkategorie:</h3>{subcategoriesArr}</div>:null}
    </div>
  )
}

function SubcategoriesRenderUpdate(category){
  ReactDOM.render(
    <SubcategoriesRender category={category} />, document.querySelector('#subcategories'));
}
