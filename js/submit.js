function submit_form(){
  var csv = ''; // = 'Name,Title\n';
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

function load_form(){
  let header = [];
  let fileSelector = document.getElementById('file-selector').files[0];
  let reader = new FileReader();
  reader.onload = reader.readAsText(fileSelector);
  // function(e) {
  //   // The file's text will be printed here
  //   console.log(e.target.result)
  // };

  // reader.readAsText(fileSelector);
  console.log(fileSelector.result);
  console.log(reader);

  // csv = fopen(getScriptPath(), 0);
  // Compare header
  // for (let i = 0; i < FormComplete.length; i++){
  //   header[i] = csv[i];
  //   // document.getElementById(FormComplete[i]).value; = csv;
  //   // csv += ',';
  // }



  // Create header
  // for (let i = 0; i < FormComplete.length; i++){
  //   csv += FormComplete[i];
  //   csv += ',';
  // }
  // csv += "\n";
  //
  // // Create data: scores
  // for (let i = 0; i < FormComplete.length; i++){
  //   csv += document.getElementById(FormComplete[i]).value;
  //   csv += ',';
  // }
  //
  // csv += "\n";
  //
  // console.log(csv);
  // var hiddenElement = document.createElement('a');
  // hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  // hiddenElement.target = '_blank';
  // hiddenElement.download = 'Prono.csv';
  // hiddenElement.click();

  // Send email
  //window.open('mailto:gleseigneur@gmail.com?subject="Le Grand Pari 9"');
}
