function submit_form(){
  var csv = "Le Grand Paris 9\n"; // Title line
  // Create header
  for (let i = 0; i < FormComplete.length; i++){
    csv += FormComplete[i];
    csv += ',';
  }
  csv += "\n";

  // Create data: scores
  for (let i = 0; i < FormComplete.length; i++){
    csv += document.getElementById(FormComplete[i]).value;
    csv += ',';
  }

  csv += "\n";

  let file_name = 'LeGrandPari9_Prono_' + document.getElementById('name').value +'.csv'
  // console.log(csv);
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = file_name;
  hiddenElement.click();

  // Send email
  //window.open('mailto:gleseigneur@gmail.com?subject="Le Grand Pari 9"');
}

function read_csv_raw(textin, raw_idx){
  let i = 0;
  let j = 0;
  let textout = "";
  // Go to index associated to raw_nb
  for (let k = 0; k < raw_idx; k++){
    while ((i < textin.length) && (textin[i] != '\n')){
      i++;
    }
    if (i == textin.length){
      return textout;
    }
    if (textin[i] == '\n'){
      i++;
    }
  }

  while((i < textin.length) && (textin[i] != '\n')){
    textout += textin[i];
    i++;
  }
  return textout;
}

function load_form(event){
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    // Read LeGrandPari ID
    let line = "sample text";
    let line_nb = 0;
    while (line != "") {
      line = read_csv_raw(text, line_nb);
      console.log(line);
      line_nb++;
    }

  };
  reader.readAsText(input.files[0]);
  };
