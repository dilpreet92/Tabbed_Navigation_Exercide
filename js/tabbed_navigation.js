function tabbedNavigation (getElements) {
  this.divModule = getElements.divModule;
  this.unorderedList = $("<ul></ul>"); 
}

tabbedNavigation.prototype.createListElement = function() {
  this.unorderedList.insertBefore("div.module:first");
};  

tabbedNavigation.prototype.createListItem = function() {
  var _this = this
  this.divModule.each(function(index, element) {
    var listItem = $("<li></li>");
    listItem.text($(this).find("h2").text()).attr("id", "listItem" + index);
    _this.unorderedList.append(listItem);
  });
};

tabbedNavigation.prototype.showDiv =  function(textValue) {
  this.divModule.each(function() {
    if ($(this).find("h2").text() == textValue) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
};

tabbedNavigation.prototype.changeClass = function(currenListItem) {
  this.unorderedList.find("li").each(function() {
    if ($(this).attr("id") == currenListItem.attr("id")) {
      $(this).addClass("current");
    }
    else {
      $(this).removeClass("current");
    }
  });
};

tabbedNavigation.prototype.bindEvents = function() {
  var _this = this;
  this.divModule.hide();
  this.createListElement();
  this.createListItem();
  this.unorderedList.find("li").on("click", function() {
    _this.showDiv($(this).text());
    _this.changeClass($(this)); 
  });
};

$(document).ready(function() {
  var elements = {
    "divModule" : $("div.module")
  };
  var tabbedNavigationObj = new tabbedNavigation(elements);
  tabbedNavigationObj.bindEvents();
});