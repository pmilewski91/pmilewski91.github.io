const Subcategory= ({...prop}) => {
  let data = prop;
  let Click=()=>{
    ListSubcategoriesRenderUpdate(data.subcategory);
  }
  return (
    <a style={{marginRight: 10 + 'px'}} onClick={Click} className="btn btn-default" href="#" role="button">{data.subcategory}</a>
  )
}

/*Search List*/

const ListSearch = ({...prop}) => {
  let data = prop;
  let componentsArr = [];
  let search = data.search[data.search.length-data.id];
  let searchObj = data.search[data.search.length-data.id];
  let id = 0;
  if(searchObj.subcategory!=undefined){
    for(let subcategory of searchObj.subcategory){
      componentsArr.push(<Subcategory subcategory={subcategory} key={id}/>)
      id++;
    }
  }
  return (
    <div style={{padding: 10 + 'px'}} className="clearfix">
      <img style={{paddingRight: 10 + 'px'}} className="img-responsive pull-left" src={searchObj.image} alt=""/>
      <div className="pull-left">
        <h4>{searchObj.title}</h4>
        <p>{searchObj.description}</p>
        {componentsArr}
      </div>
    </div>
  )
}

const ListSearchRender = ({...prop}) => {
  let searchInfo = prop;
  let arr = [];
  let search = [];
  let howMany = 0;
  if(data.length !== 0){
      for(let obj of data){
        let bigTitle = obj.title.toUpperCase();
        if(bigTitle.includes(searchInfo.searchVal.toUpperCase())){
        search.push(obj);
        }
      }
    }
  if(search.length !== 0){
      howMany = search.length-1;
    for(let el=0; el <= howMany; el++){
      arr.push(<ListSearch search={search} id={el+1} key={el}/>)
    }
  }
return(
  <div>
    <h3>Wyszukane:</h3>
    {search.length !== 0 ? arr : <h4>Brak</h4>}
  </div>
)

}

/*List*/
const List = ({...prop}) => {
  let data = prop;
  let componentsArr = [];
  let categoryArr = data.categoryArr[data.categoryArr.length-data.id];
  let categoryObj = data.categoryArr[data.categoryArr.length-data.id];
  let id = 0;
  if(categoryObj.subcategory!=undefined){
    for(let subcategory of categoryObj.subcategory){
      componentsArr.push(<Subcategory subcategory={subcategory} key={id}/>)
      id++;
    }
  }
  return (
    <div style={{padding: 10 + 'px'}} className="clearfix">
      <img style={{paddingRight: 10 + 'px'}} className="img-responsive pull-left" src={categoryObj.image} alt=""/>
      <div className="pull-left">
        <h4>{categoryObj.title}</h4>
        <p>{categoryObj.description}</p>
        {componentsArr}
      </div>
    </div>
  )
}

const ListRender = ({...prop}) => {
  let dataCategory = prop;
  let arr = [];
  let categoryArr = [];
  let howMany = 0;
  if(data.length !== 0){
      for(let obj of data){
        if(obj.category == dataCategory.category){
        categoryArr.push(obj);
        }
      }
    }
  if(categoryArr.length !== 0){
      howMany = categoryArr.length-1;
    for(let el=0; el <= howMany; el++){
      arr.push(<List categoryArr={categoryArr} id={el+1} key={el}/>)
    }
  }
return(
  <div>
    <h3>{dataCategory.title }:</h3>
    {categoryArr.length !== 0 ? arr : <h4>Brak</h4>}
  </div>
)}
/*Subcategories List*/


const ListSubcategoriesRender = ({...prop}) => {
  let info = prop;
  let arr = [];
  let subcategories = [];
  let howMany = 0;
  if(data.length !== 0){
    for(let obj of data){
      if(obj.subcategory!=undefined){
        if(obj.subcategory.includes(info.subcategory)){
        subcategories.push(obj);
        }
      }
    }
  }
  if(subcategories.length !== 0){
      howMany = subcategories.length-1;
    for(let el=0; el <= howMany; el++){
      arr.push(<List categoryArr={subcategories} id={el+1} key={el}/>)
    }
  }
return(
  <div>
    <h3>Wyszukane:</h3>
    {subcategories.length !== 0 ? arr : <h4>Brak</h4>}
  </div>
)

}
function ListAllRenderUpdate(){
  ReactDOM.render(
    <div></div>, document.querySelector('#list'));
}
function ListSearchRenderUpdate(searchVal){
  ReactDOM.render(
    <ListSearchRender searchVal={searchVal}/>, document.querySelector('#list'));
}
function ListRenderUpdate(category, title){
  ReactDOM.render(
    <ListRender category={category} title={title}/>, document.querySelector('#list'));
}
function ListSubcategoriesRenderUpdate(subcategory){
  ReactDOM.render(
    <ListSubcategoriesRender subcategory={subcategory} />, document.querySelector('#list'));
}
