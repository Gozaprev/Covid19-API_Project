function BusinessLayer() {
    this.dataObject = new DataLayer();

    this.resolveApiData = async () => {
        try{
            
            await this.dataObject.populateApiData();
        }
        catch(e){
            console.log(e)
        }
        var data = this.dataObject.getApiData();
        //console.log(data)

        var modifiedApi = [];

        for (let index = 0; index < data.length; index++) {
            var tempObject = {
                
                Confirmed: data.Confirmed,
                Deaths: data.Deaths,
                Recovered: data.Recovered,
                Active: data.Active,
                Date: data.Date,


            };
            modifiedApi.push(tempObject);
           
            // return modifiedApi;

        }


        console.log(modifiedApi);
        return modifiedApi;
    }
}