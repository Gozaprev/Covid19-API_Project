function DataLayer() {
    this.ApiData = {};
    this.persistanceObject = new PeristanceLayer();

    this.populateApiData = async () => {
        this.ApiData = await this.persistanceObject.getApiData();
    };

    this.getApiData = () => {
        return this.ApiData;
    };

}