function publishToTable() {
    const reportId = document.getElementById('reportId').value;
    fetch("https://classic.warcraftlogs.com/v1/report/fights/"+reportId+"?translate=true&api_key=9c38aa856a18de779086f84307068fd4")
    .then(response => response.json())
    .then(data =>{

        var table = document.getElementById('table');
        
        const arr = data.fights;
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


