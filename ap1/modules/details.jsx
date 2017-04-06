
const DetailsRender = ({...prop}) => {
   let data = prop;
   let CloseDetails = () =>{
     ReactDOM.render(
       <div></div>, document.querySelector('#details'));
   }
   let Link = () =>{
     window.open(data.categoryObj.link);
   }
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
       <h3>Szczegóły:</h3>
       <img style={{paddingRight: 10 + 'px'}} className="img-responsive pull-left" src={data.categoryObj.image} alt=""/>
       <button onClick={CloseDetails} type="button" className="btn btn-danger">Zamknij</button>
       {data.categoryObj.link!=undefined?<button onClick={Link} style={{display: 'block', margin: 5 + 'px '+ 0}} type="button" className="btn btn-primary">Link</button>:null}
       <div className="clearfix"></div>
       <div>
         <h2>{data.categoryObj.title}</h2>
         <p dangerouslySetInnerHTML={{__html: data.categoryObj.description}}></p>
         <p>Podkategorie tego przepisu:</p>
         {componentsArr}
       </div>

     </div>
   )
}


function DetailsRenderUpdate(categoryObj){
  ReactDOM.render(
    <DetailsRender categoryObj={categoryObj} />, document.querySelector('#details'));
}
