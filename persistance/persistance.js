function PeristanceLayer() {
    
  
    this.getApiData = () => {
      return new Promise((resolve, reject) => {
        // kreirame promise
        $.ajax({
          url:"https://api.covid19api.com/total/country/macedonia",
          //link do APIto
          type: "GET",
          success: function(data) {
              //console.log(data)
            
            resolve(data);
          },
          error: function(error) {
              console.log(error);
            reject(error);
          }
        });
      });
    };
}