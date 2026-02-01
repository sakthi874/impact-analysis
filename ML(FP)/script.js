$(document).ready(function () {
  $('#checkrisk').click(function () {
    const selected = [];
    $('.symptom:checked').each(function () {
      selected.push($(this).val());
    });

    if (selected.length === 0) {
      $('#result').html("<strong>Please select at least one symptom.</strong>");
      return;
    }

    let output = "<h3>Potential Organ Risks:</h3><ul>";
    selected.forEach(function (organ) {
      switch (organ) {
        case "brain":
          output += "<li><strong>Brain:</strong> Possible hypoxia or neurological stress</li>";
          break;
        case "lungs":
          output += "<li><strong>Lungs:</strong> Risk of pulmonary edema or low oxygen</li>";
          break;
        case "kidneys":
          output += "<li><strong>Kidneys:</strong> Fluid retention or filtration issues</li>";
          break;
        case "liver":
          output += "<li><strong>Liver:</strong> Congestion or impaired detox function</li>";
          break;
      }
    });
    output += "</ul>";
    $('#result').html(output);
  });
});


