
        window.onload = function () {
          const input = document.getElementById("Konversi-input");
          const result = document.getElementById("Result-input");
          const detail = document.getElementById("Calculate-detail");
      
          const btnKonversi = document.querySelector(".bg-1");
          const btnReset = document.querySelector(".bg-2");
          const btnReverse = document.querySelector(".bg-3");
      
          let isCtoF = true;
      
          function konversiSuhu() {
            const nilai = parseFloat(input.value);
            if (isNaN(nilai)) {
              result.value = "";
              detail.value = "Masukkan angka yang valid!";
              return;
            }
      
            if (isCtoF) {
              const fahrenheit = (nilai * 9 / 5) + 32;
              result.value = fahrenheit.toFixed(2);
              detail.value = `(${nilai}°C × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
            } else {
              const celcius = (nilai - 32) * 5 / 9;
              result.value = celcius.toFixed(2);
              detail.value = `(${nilai}°F - 32) × 5/9 = ${celcius.toFixed(2)}°C`;
            }
          }
      
          function resetForm() {
            input.value = "";
            result.value = "";
            detail.value = "";
          }
      
          function reverseKonversi() {
            isCtoF = !isCtoF;
      
            document.querySelector('label[for="Konversi-input"]').innerHTML = isCtoF ? "Celcius(°C)" : "Fahrenheit(°F)";
            document.querySelector('label[for="Result-input"]').innerHTML = isCtoF ? "Fahrenheit(°F)" : "Celcius(°C)";
      
            resetForm();
          }
      
          btnKonversi.addEventListener("click", konversiSuhu);
          btnReset.addEventListener("click", resetForm);
          btnReverse.addEventListener("click", reverseKonversi);
        };