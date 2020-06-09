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

  console.log(csv);
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'Prono.csv';
  hiddenElement.click();

  // Send email
  //window.open('mailto:gleseigneur@gmail.com?subject="Le Grand Pari 9"');
}
