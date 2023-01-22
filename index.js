

function resultComplex(){
  var magnitude = parseFloat(document.getElementById("inputMagnitude").value);
  var degrees = parseFloat(document.getElementById("inputDegrees").value);
  var real = magnitude * Math.cos(degrees * Math.PI / 180);
  var imaginary = magnitude * Math.sin((degrees * Math.PI / 180));
  var outputComplex = "";
  outputComplex = outputComplex.concat(real.toString());
  outputComplex = outputComplex.concat(" + <b><em>j</em></b> ");
  outputComplex = outputComplex.concat(imaginary.toString());
  document.querySelector("#outputComplex").innerHTML = outputComplex;
}

function resultPhasor(){
  var real = parseFloat(document.getElementById("inputReal").value);
  var imaginary = parseFloat(document.getElementById("inputImaginary").value);
  var magnitude = Math.sqrt( real*real + imaginary*imaginary);
  if (real >= 0){
    if (imaginary >= 0){
      var phase = 180 * Math.atan(Math.abs(imaginary)/Math.abs(real)) / Math.PI;
    } else {
      var phase = (-1) * 180 * Math.atan(Math.abs(imaginary)/Math.abs(real)) / Math.PI;
    }
  } else {
    if (imaginary >= 0){
      var phase = 180 - 180 * Math.atan(Math.abs(imaginary)/Math.abs(real)) / Math.PI;
    } else {
      var phase = -180 + 180 * Math.atan(Math.abs(imaginary)/Math.abs(real)) / Math.PI;
    }
  }
  var outputPhasor = "";
  outputPhasor = outputPhasor.concat(magnitude.toString());
  outputPhasor = outputPhasor.concat(" &#8736; ")
  outputPhasor = outputPhasor.concat(phase.toString());
  outputPhasor = outputPhasor.concat(" &#176;")
  document.querySelector("#outputPhasor").innerHTML = outputPhasor;
}
