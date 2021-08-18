
function borough(bor) {
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10&$offset=0&borough=${bor}&agency=NYPD`)
        .then(response => response.json())
        .then(data => displayData(data))
        
        
    function displayData(d)
    {
        var user=document.getElementById('searchBar')
        var ct2=document.getElementById('container2')
        if (user.value>0)
        {
            for ( var i=1; i<=user.value;i++)
            {
                var ctr=document.createElement('div')
                ctr.setAttribute('id',`ct${[i]}`)
                ct2.append(ctr)
                var dscrip=document.createElement('p').textContent=d[i].descriptor 
                ctr.innerHTML= dscrip + ` <button onclick="document.getElementById('ct${[i]}').innerHTML+='${d[i].resolution_description}'">WHAT DID THE POLICE DO</button>`
                
            }}
                else{
                    for ( var i=1; i<=10;i++)
                    {
                        var ctr=document.createElement('div')
                    ctr.setAttribute('id',`ct${[i]}`)
                    ct2.append(ctr)
                    var dscrip=document.createElement('p').textContent=d[i].descriptor 
                    ctr.innerHTML= dscrip + ` <button onclick="document.getElementById('ct${[i]}').innerHTML+='${d[i].resolution_description}'">WHAT DID THE POLICE DO</button>`
                    }}}
                }
