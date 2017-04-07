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
const RecipeRender = ({...prop}) => {
  let change = prop;
  let checkboxCategoryArr = [];
  let checkboxCategory = ['breakfast', 'lunch', 'dessert', 'snack', 'preserve', 'other'];
  let checkboxSubcategoryArr = [];
  let checkboxSubcategory = ['Mięsa', 'Ryby', 'Owoce_Morza', 'Zupy', 'Pierogi-Kluski', 'Inne_Desery', 'Lody', 'Ciasta', 'Ciasteczka', 'Inne_Obiady'];
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
  function upComponents(){
    LastAllAddRenderUpdate();
    LastAddLunchRenderUpdate();
    LastAddDessertRenderUpdate();
    LastAddBreakfastRenderUpdate();
    LastAddSnackRenderUpdate();
    LastAddPreserveRenderUpdate();
    LastAddOtherRenderUpdate();
    document.querySelector('#home').click();
  }
  let addRecipeF = () => {
    function recipe(){
      if(data.length !== 0){
        this.id = data[data.length-1].id+1;
      }else{
        this.id = 0;
      }
      this.title = document.querySelector("#nameInput").value;
      this.description = CKEDITOR.instances.editor1.getData();
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
    if(document.querySelector("#nameInput").value !== "" && document.querySelector("input[name='category']:checked") !== null && CKEDITOR.instances.editor1.getData() !== ""){
      let newRecipe = new recipe();
      data.push(newRecipe);
      upComponents();
      alert('Dodano przepis');
      ReactDOM.render(
        <div></div>, document.querySelector('#addRecipe'));
    }else{
      alert("Wypełnij wymagane pola");
    }
  }
  let editRecipeF = () => {

    if(document.querySelector("#nameInput").value !== "" && document.querySelector("input[name='category']:checked") !== null && CKEDITOR.instances.editor1.getData() !== ""){
      change.edit.categoryObj.title = document.querySelector("#nameInput").value;
      change.edit.categoryObj.description = CKEDITOR.instances.editor1.getData();
      change.edit.categoryObj.category = document.querySelector("input[name='category']:checked").id;
      let subcategoryAll = document.querySelectorAll("input[type='checkbox']:checked");
        change.edit.categoryObj.subcategory = [];
      if(subcategoryAll.length !== 0){
        for (let sub of subcategoryAll){
          change.edit.categoryObj.subcategory.push(sub.id);
        }
      }
      change.edit.categoryObj.link = document.querySelector("#linkInput").value;

      upComponents();
      DetailsRenderUpdate(change.edit.categoryObj);
      alert('Zmieniono przepis');
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
      <h2 className="text-center">{change.edit == undefined?'Dodaj nowy przepis':'Edytuj przepis'}</h2>
      <button onClick={CloseNewRecipe} type="button" className="btn btn-danger">Zamknij</button>
        <div className="form-group">
          <h3>Tytuł<span style={{color:"red"}}>*</span></h3>
          <input type="text" className="form-control" id="nameInput" placeholder="Nazwa przepisu"/>
          <h3>Opis<span style={{color:"red"}}>*</span></h3>
          <textarea name="editor1" id="editor1"></textarea>

          <div className="checkbox">
            <h3>Kategoria<span style={{color:"red"}}>*</span></h3>
            {checkboxCategoryArr}
            <h3>Podkategorie</h3>
            {checkboxSubcategoryArr}
          </div>
          <h3>Link zewnętrzny</h3>
          <input type="text" className="form-control" id="linkInput" placeholder="Link zewnętrzny np. do Youtube"/>
          <br/>
          {change.edit == undefined?<button onClick={addRecipeF} type="button" className="btn btn-default">Dodaj</button>:<button onClick={editRecipeF} type="button" className="btn btn-default">Zapisz zmiany</button>}
        </div>
    </div>
  )
}

function edit(data){
  document.querySelector('#nameInput').value = data.categoryObj.title;
  CKEDITOR.instances.editor1.setData(data.categoryObj.description);
  document.querySelector('#'+data.categoryObj.category).checked = true;
  if(data.categoryObj.subcategory){
    let subcategoryAll = data.categoryObj.subcategory;
    if(subcategoryAll.length !== 0){
      for (let sub of subcategoryAll){
        document.querySelector("#"+sub).checked = true;
      }
    }
  }

  if(data.categoryObj.link){
    document.querySelector('#linkInput').value = data.categoryObj.link;
  }
}

function RecipeRenderUpdate(data){
  ReactDOM.render(
    <RecipeRender edit={data} />, document.querySelector('#addRecipe'));
    CKEDITOR.replace( 'editor1' );

    if(data){
      edit(data);
    }
}
