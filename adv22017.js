document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})

function solution(text) {
 newtext=text.split("\n");
 cleartext=newtext.filter(element =>{
    return element !== "";
 })
 let puretext = [];
for (i=0;i<cleartext.length;i++){
    puretext.push(cleartext[i].split("\t"));
}
for (j=0;j<puretext.length;j++){
    for (k=0;k<puretext[j].length;k++){
        puretext[j][k]=parseInt(puretext[j][k]);
    }
}

let extract_biggest = [];
for (m=0;m<puretext.length;m++){
    let biggest = 0;
    for (n=0;n<puretext[m].length;n++){
        if (puretext[m][n] > biggest) {
            biggest=puretext[m][n];
        }
    }
    extract_biggest.push(biggest);
}

let extract_smallest = [];
for (a=0;a<puretext.length;a++){
    let smallest = puretext[a][0];
    for (b=1;b<puretext[a].length;b++){
        if (puretext[a][b] < smallest) {
            smallest=puretext[a][b];
        }
    }
    extract_smallest.push(smallest);
}

// console.log(extract_biggest.length);
// console.log(extract_smallest.length);
// console.log(extract_biggest);
// console.log(extract_smallest);

let difference = [];
for (c=0;c<extract_biggest.length;c++){
    difference.push(extract_biggest[c]-extract_smallest[c]);
}

let checksum = 0;
for(d=0;d<difference.length;d++){
    checksum += difference[d];
}

console.log(checksum);
}