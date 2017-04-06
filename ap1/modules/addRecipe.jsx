const Checkbox = ({...prop}) => {
  let data = prop;
  let checkboxName;
  switch (data.type) {
    case 'breakfast':
      checkboxName = 'Śniadania';
      break;
    case 'lunch':
      checkboxName = 'Obiady';
      break;
    case 'dessert':
      checkboxName = 'Desery';
      break;
    case 'snack':
      checkboxName = 'Przekąski';
      break;
    case 'preserve':
      checkboxName = 'Przetwory';
      break;
    case 'other':
      checkboxName = 'Inne';
      break;
  }
  return (
    <label>
      <input name={data.what=="category"?"category":null} id={data.type} type={data.what=="category"?"radio":"checkbox"}/> {data.what=="category"?checkboxName:data.type+" "}
    </label>
  )
}
const RecipeRender = () => {
  let checkboxCategoryArr = [];
  let checkboxCategory = ['breakfast', 'lunch', 'dessert', 'snack', 'preserve', 'other'];
  let checkboxSubcategoryArr = [];
  let checkboxSubcategory = ['Mięsa', 'Ryby', 'Owoce Morza', 'Zupy', 'Pierogi/Kluski', 'Inne Desery', 'Lody', 'Ciasta', 'Ciasteczka', 'Inne Obiady'];
  let categoryId = 0;
  let subcategoryId = 0;
  let category;
  for(let checkboxCat of checkboxCategory){
    let category = "category";
    checkboxCategoryArr.push(<Checkbox what={category} type={checkboxCat} key={categoryId}/>)
    categoryId++;
  }
  for(let checkboxSub of checkboxSubcategory){
    let category = "subcategory";
    checkboxSubcategoryArr.push(<Checkbox what={category} type={checkboxSub} key={subcategoryId}/>)
    subcategoryId++;
  }
  let addRecipeF = () => {
    function recipe(){
      if(data.length !== 0){
        this.id = data[data.length-1].id+1;
      }else{
        this.id = 0;
      }
      this.title = document.querySelector("#nameInput").value;
      this.description = "test";
      this.image = "http://placehold.it/350x150";
      this.category = document.querySelector("input[name='category']:checked").id;
      let subcategoryAll = document.querySelectorAll("input[type='checkbox']:checked");
      if(subcategoryAll.length !== 0){
        this.subcategory = [];
        for (let sub of subcategoryAll){
          this.subcategory.push(sub.id);
        }
      }
      if(document.querySelector("#linkInput").value !== ""){
        this.link = document.querySelector("#linkInput").value;
      }

    }
    if(document.querySelector("#nameInput").value !== "" && document.querySelector("input[name='category']:checked") !== null){
      let newRecipe = new recipe();
      data.push(newRecipe);
      LastAllAddRenderUpdate();
      LastAddLunchRenderUpdate();
      LastAddDessertRenderUpdate();
      LastAddBreakfastRenderUpdate();
      LastAddSnackRenderUpdate();
      LastAddPreserveRenderUpdate();
      LastAddOtherRenderUpdate();
      alert('Dodano przepis');
      ReactDOM.render(
        <div></div>, document.querySelector('#addRecipe'));
    }else{
      alert("Wypełnij wymagane pola");
    }
  }
  let CloseNewRecipe = () => {
    ReactDOM.render(
      <div></div>, document.querySelector('#addRecipe'));
  }
  return (
    <div className="container">
      <h4 className="text-center">Dodaj nowy przepis</h4>
      <button onClick={CloseNewRecipe} type="button" className="btn btn-danger">Zamknij</button>
        <div className="form-group">
          <span style={{color:"red"}}>*</span>
          <input type="text" className="form-control" id="nameInput" placeholder="Nazwa przepisu"/>
          <div className="checkbox">
            <p>Kategoria<span style={{color:"red"}}>*</span></p>
            {checkboxCategoryArr}
            <p>Podkategorie</p>
            {checkboxSubcategoryArr}
          </div>
          <input type="text" className="form-control" id="linkInput" placeholder="Link zewnętrzny np. do Youtube"/>
          <button onClick={addRecipeF} type="button" className="btn btn-default">Dodaj</button>
        </div>
    </div>
  )
}

function RecipeRenderUpdate(){
  ReactDOM.render(
    <RecipeRender />, document.querySelector('#addRecipe'));
}
