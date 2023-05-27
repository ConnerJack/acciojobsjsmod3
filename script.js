
var data = []

const fetchData = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    data = await res.json()
    var table = document.getElementById("cur_table");
    for (let index = 0; index < data.length; index++) {
        var row = table.insertRow(index);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = `<img src=${data[index].image}> <p>${data[index].name}</p>`;
        cell2.innerHTML = `<p>${data[index].symbol.toUpperCase()}</p>`
        cell3.innerHTML = `<p>$${data[index].current_price}</p>`
        cell4.innerHTML = `<p>$${data[index].total_volume}</p>`
        cell5.innerHTML = `<p>${data[index].ath_change_percentage}%</p>`
        var classname = data[index].ath_change_percentage < 0 ? "red" : "green"
        cell5.classList.add(classname);
        cell6.innerHTML = `<p>Mkt Cap : $${data[index].market_cap}</p>`


    }

}



fetchData()


const sortByMarketCap = () => {
    data.sort((a, b) => a.market_cap - b.market_cap);
    var table = document.getElementById("cur_table");
    table.innerHTML = " "
    for (let index = 0; index < data.length; index++) {
        var row = table.insertRow(index);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = `<img src=${data[index].image}> <p>${data[index].name}</p>`;
        cell2.innerHTML = `<p>${data[index].symbol.toUpperCase()}</p>`
        cell3.innerHTML = `<p>$${data[index].current_price}</p>`
        cell4.innerHTML = `<p>$${data[index].total_volume}</p>`
        cell5.innerHTML = `<p>${data[index].ath_change_percentage}%</p>`
        var classname = data[index].ath_change_percentage < 0 ? "red" : "green"
        cell5.classList.add(classname);
        cell6.innerHTML = `<p>Mkt Cap : $${data[index].market_cap}</p>`


    }
}


const sortByPercentage = () => {
    data.sort((a, b) => a.ath_change_percentage - b.ath_change_percentage);
    var table = document.getElementById("cur_table");
    table.innerHTML = " "
    for (let index = 0; index < data.length; index++) {
        var row = table.insertRow(index);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = `<img src=${data[index].image}> <p>${data[index].name}</p>`;
        cell2.innerHTML = `<p>${data[index].symbol.toUpperCase()}</p>`
        cell3.innerHTML = `<p>$${data[index].current_price}</p>`
        cell4.innerHTML = `<p>$${data[index].total_volume}</p>`
        cell5.innerHTML = `<p>${data[index].ath_change_percentage}%</p>`
        var classname = data[index].ath_change_percentage < 0 ? "red" : "green"
        cell5.classList.add(classname);
        cell6.innerHTML = `<p>Mkt Cap : $${data[index].market_cap}</p>`


    }
}


const searchByname = () => {
    const textField = document.getElementById("search")
    let obj = data.find((item) => {
        return item.symbol.toUpperCase() === textField.value.toUpperCase() || item.name.toUpperCase() === textField.value.toUpperCase()
    })
    if (obj) {
        var table = document.getElementById("cur_table");
        table.innerHTML = " "
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = `<img src=${obj.image}> <p>${obj.name}</p>`;
        cell2.innerHTML = `<p>${obj.symbol.toUpperCase()}</p>`
        cell3.innerHTML = `<p>$${obj.current_price}</p>`
        cell4.innerHTML = `<p>$${obj.total_volume}</p>`
        cell5.innerHTML = `<p>${obj.ath_change_percentage}%</p>`
        var classname = obj.ath_change_percentage < 0 ? "red" : "green"
        cell5.classList.add(classname);
        cell6.innerHTML = `<p>Mkt Cap : $${obj.market_cap}</p>`
    } else {
        var table = document.getElementById("cur_table");
        table.remove()
        const para = document.createElement("p");
        para.classList.add("nores")
        para.innerHTML = "No results found"
        const carddiv = document.createElement('div')
        carddiv.appendChild(para)
    }
}

