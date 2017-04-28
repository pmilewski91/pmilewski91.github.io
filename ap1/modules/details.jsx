
const DetailsRender = ({...prop}) => {
   let data = prop;
   let CloseDetails = () =>{
     ReactDOM.render(
       <div></div>, document.querySelector('#details'));
   }
   let Link = () =>{
     window.open(data.categoryObj.link);
   }
   let EditRecipe = () => {
     ReactDOM.render(
     <div></div>, document.querySelector('#addRecipe'));
     RecipeRenderUpdate(data);
   }
   let DeleteRecipe = () => {
     var confirmDeleted = confirm("Na pewno usunąć ten przepis?");
     $('#loading').css({'display':'block'});
     if(confirmDeleted){
       $.ajax( {
        url: `https://api.mlab.com/api/1/databases/przepisy/collections/przepisy_${user.id}/${data.categoryObj._id.$oid}?apiKey=Sj7Ov5G_CDq68W2dPY5mNBIOybU14QLw`,
        type: "DELETE",
   		  async: true,
   		  timeout: 300000,
   		  success: function () {
          data.recipeData.splice(data.recipeData.indexOf(data.categoryObj), 1);
          upComponents();
          document.querySelector('#home').click();
          CloseDetails();
          $('#loading').css({'display':'none'});
        },
   		  error: function (xhr, status, err) {
          alert(xhr+" "+status+" "+err);
          $('#loading').css({'display':'none'});
        }});


     }
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
       <img style={{paddingRight: 10 + 'px', maxWidth: 50 + '%'}} className="img-responsive pull-left" src={data.categoryObj.image} alt=""/>
       <button onClick={CloseDetails} type="button" className="btn btn-danger">Zamknij</button>
       <button onClick={EditRecipe} type="button" className="btn btn-primary">Edytuj</button>
       <button onClick={DeleteRecipe} type="button" className="btn btn-danger">Usuń</button>
       {data.categoryObj.link!=""?<button onClick={Link} style={{display: 'block', margin: 5 + 'px '+ 0}} type="button" className="btn btn-default">Link</button>:null}
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
    <DetailsRender recipeData={data} categoryObj={categoryObj} />, document.querySelector('#details'));
}
