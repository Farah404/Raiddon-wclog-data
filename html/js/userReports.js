function publishToTable() {
    const name = document.getElementById('name').value;
    fetch("https://www.warcraftlogs.com:443/v1/reports/user/"+name+"?api_key=9c38aa856a18de779086f84307068fd4")
    .then(response => response.json())
    .then(data =>{

        var table = document.getElementById('table');
        
        const arr = data;
        for(const obj of arr){
            const row = document.createElement('tr');
            for(const val of Object.values(obj)){
              const col = document.createElement('td');
              col.textContent = val;
              row.appendChild(col);
            }
            table.appendChild(row);
          }


    })
}


