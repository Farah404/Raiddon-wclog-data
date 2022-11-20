function publishToTable() {
    const name = document.getElementById('name').value;
    const server = document.getElementById('server').value;
    const region = document.getElementById('region').value;
    fetch("https://classic.warcraftlogs.com/v1/rankings/character/"+name+"/"+server+"/"+region+"?zone=1015&timeframe=historical&api_key=9c38aa856a18de779086f84307068fd4")
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


