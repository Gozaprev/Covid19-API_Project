function Presentation() {
    this.business = new BusinessLayer();
    this.data = {}
  
    // console.log(data);
    this.displayApi = async () => {
  
      this.data = await this.business.resolveApiData();
      var data = this.data;
      // var posts = await this.business.populateApiData();
      console.log(data);
      for (var index = 0; index < data.length; index++) {
  
        var body = $("body");
        var root = $("<div>").attr('class', 'container');
        body.append(root);
        var Confirmed = $("<div>").attr('class', 'divwrap').text("The number of Confirmed cases is: " + data.Confirmed);
        root.append(Confirmed);
        var Deaths = $("<div>").attr('class', 'divwrap').text("The number of Death cases is: " + data.Deaths);
        root.append(Deaths);
        var Recovered = $("<div>").attr('class', 'divwrap').text("The number of Recovered cases is: " + data.Recovered);
        root.append(Recovered);
        var Active = $("<div>").attr('class', 'divwrap').text("The number of Active cases is: " + data.Active);
        root.append(Active);
        var Date = $("<div>").attr('class', 'divwrap').text("The Date is: " + data.Date);
        root.append(Date);
  
      }
  
    }
      //   console.log(data);
  
  
    this.displayHeader = async () => {
      var data = await this.business.resolveApiData();
  
      console.log(data);
      var header = $('<header>').attr('class', 'header');
      $('body').append(header);
      var divhead = $('<div>').attr('class', 'divhead');
      $('header').append(divhead);
      divhead.text('Covid19');
  
      var searchValue;
      var input = $('<input>').attr('class', 'hedinput');
  
  
      $('header').append(input);
  
  
      var baton = $('<button>').attr('class', 'baton').html('Search').on("click", (event) => {
  
        const searchTerm = $('input').val();
        console.log(data)
        var body = $("body");
  
        $(".container").empty();
  
        for (let index = 0; index < data.length; index++) {
  
          if (data.Date.toString().split(".")[0].includes(searchTerm)) {
  
  
            var root = $("<div>").attr('class', 'container');
            body.append(root);
            var Confirmed = $("<div>").attr('class', 'divwrap').text("The Confirmed is: " + data.Confirmed);
            console.log(Confirmed);
            root.append(Confirmed);
            var Deaths = $("<div>").attr('class', 'divwrap').text("The Deaths is: " + data.Deaths);
            root.append(Deaths);
            var Recovered = $("<div>").attr('class', 'divwrap').text("The Recovered is: " + data.Recovered);
            root.append(Recovered);
            var Active = $("<div>").attr('class', 'divwrap').text("The Active is: " + data.Active);
            root.append(Active);
            var Date = $("<div>").attr('class', 'divwrap').text("The Date is: " + data.Date);
            root.append(Date);
  
          }
  
        }
  
      })
      $('header').append(baton);
      // var divheadh = $('<h1>');
      // var Date = $("<div>").text()
  
    }
  
    //   this.displayMainBody = () => {
    // var left = $('<div').attr('class', 'leftdiv');
    // $('body').append(left).text();
  
  
    //   }
  
  
  }