
const DetailsRender = ({...prop}) => {
  let data = prop;
   let componentsArr = [];
   let id = 0;
   if(data.categoryObj.subcategory!=undefined){
     for(let subcategory of data.categoryObj.subcategory){
       componentsArr.push(<Subcategory subcategory={subcategory} key={id}/>)
       id++;
     }
   }
   return (
     <div style={{padding: 10 + 'px'}} className="clearfix">
       <img style={{paddingRight: 10 + 'px'}} className="img-responsive pull-left" src={data.categoryObj.image} alt=""/>
       <div className="pull-left">
         <h4>{data.categoryObj.title}</h4>
         <p dangerouslySetInnerHTML={{__html: data.categoryObj.description}}></p>
         {componentsArr}
       </div>
     </div>
   )
}


function DetailsRenderUpdate(categoryObj){
  ReactDOM.render(
    <DetailsRender categoryObj={categoryObj} />, document.querySelector('#details'));
}
