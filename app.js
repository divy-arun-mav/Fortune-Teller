const quantity = document.getElementById("quantity");

function submit() {

    const num = parseInt(quantity.value);
    document.getElementById("toss").innerHTML = Math.floor(Math.random() * 14) + 1;

    if (1 > num || num > 14) {
        // console.log('loss2');
        document.getElementById('text1').innerHTML = "YOU ARE VIOLATING RULES YOU WILL BE UNLUKCY!";
        document.getElementById('text2').innerHTML = "YOU ARE VIOLATING RULES YOU WILL BE UNLUKCY!";
    }

    else if (num > 7 && document.getElementById("toss").innerHTML > 7) {
        // console.log('profit1');
        document.getElementById('text1').innerHTML = "VOILA YOU ARE LUCKY";
        document.getElementById('text2').innerHTML = "VOILA YOU ARE LUCKY";
    }

    else if (num < 7 && document.getElementById("toss").innerHTML < 7) {
        // console.log('profit2');
        document.getElementById('text1').innerHTML = "VOILA YOU ARE LUCKY!";
        document.getElementById('text2').innerHTML = "VOILA YOU ARE LUCKY!";
    }

    else if (num < 7 && document.getElementById("toss").innerHTML > 7) {
        // console.log('loss1');
        document.getElementById('text1').innerHTML = "YOU HAVE TO WORK HARD";
        document.getElementById('text2').innerHTML = "YOU HAVE TO WORK HARD";
    }

    else if (num > 7 && document.getElementById("toss").innerHTML < 7) {
        // console.log('loss2');
        document.getElementById('text1').innerHTML = "YOU HAVE TO WORK HARD";
        document.getElementById('text2').innerHTML = "YOU HAVE TO WORK HARD";
    }
    else if (document.getElementById("toss").innerHTML != num) {
        //console.log('lossdouble');
        document.getElementById('text1').innerHTML = "YOU HAVE TO WORK HARD";
        document.getElementById('text2').innerHTML = "YOU HAVE TO WORK HARD";
    }
    else if (document.getElementById("toss").innerHTML == num) {
        // console.log('profitdouble');
        document.getElementById('text1').innerHTML = "VOILA YOU ARE SUPERLUCKY!";
        document.getElementById('text2').innerHTML = "VOILA YOU ARE SUPERLUCKY!";
    }
}

function retry() {
    document.getElementById("toss").innerHTML = "";
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    quantity.value = " ";
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    //   event.preventDefault();
      document.getElementById("submit").click();
    }
  });