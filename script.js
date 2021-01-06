var button = document.getElementById("maisUm");
            var res = document.getElementById("resultado");
            var number = 0;
            res.innerHTML = number;

        function contador() {
            number++
            res.innerHTML = number;
            }

        function contadorNegativo() {
            number--
            res.innerHTML = number;
            }

        function reset() {
            number = 0;
            res.innerHTML = number;
        }    