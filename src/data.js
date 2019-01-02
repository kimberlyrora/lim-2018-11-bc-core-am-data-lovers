window.WorldBank = {
  // Función filtrado para búsqueda rápida
  filterIndicators : (dataBase, palabra) => {
    const indicadores = dataBase.map((arr) => {
      return arr.indicatorName;
    });
    return indicadores.filter((x) => {
      return x.toLowerCase().indexOf(palabra.toLowerCase()) > -1;
    });
  },

  // Función filtrado para búsqueda por temas (en construcción - Kimberly)

  // Función filtrado por años
  filterYears : (dataBase, año) => {
    const yearData = [];
    for (let i = 0; i < dataBase.length; i++) {
      yearData.push(dataBase[i].data[año]);
    }
    return yearData;
  },

  // Función ordenando data por años o valores (en construcción - Karla)
  sortData : (dataBase, añosOValores) => { // 'orden' es el tercer parámetro pero aun no se ha incluído
    const sorted = [];
    if(añosOValores === 'años') {
      const newData = (Object.keys(dataBase.data)).assign();
      sorted.push(newData.sort());
    } else {
      const newData = (Object.values(dataBase.data)).assign();
      sorted.push(newData.sort());
    }
    return sorted;
  }
};