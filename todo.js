const toDoListModel = function(items) {
  this.items = ko.observableArray(items);
  this.newItem = ko.observable("");
  this.addItem = function addNewTodo(item) {
    if (this.newItem) {
      this.items.push(this.newItem());
      this.newItem("");
    }
  }.bind(this); //Ensure 'this' is always the view model
};

ko.applyBindings(new toDoListModel(['one', 'two', 'three']));