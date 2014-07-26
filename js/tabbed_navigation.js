function tabbedNavigation (getElement) {
  this.divElement = getElement ;
  this.unorderedList = $("<ul></ul>"); 
}

tabbedNavigation.prototype.init = function() {
  this.divElement.hide();
  this.unorderedList.insertBefore("div.module:first");
  var _this = this
  this.divElement.each(function(index, element) {
    var listItem = $("<li></li>");
    listItem.text($(this).find("h2").text()).attr("id", "listItem" + index);
    _this.unorderedList.append(listItem);
  });
  this.bindEvents();
};

tabbedNavigation.prototype.showDiv =  function(textValue) {
  this.divElement.each(function() {
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
  this.unorderedList.find("li").on("click", function() {
    _this.showDiv($(this).text());
    _this.changeClass($(this)); 
  });
};

$(document).ready(function() {
  var divElement = $("div.module");
  var tabbedNavigationObj = new tabbedNavigation(divElement);
  tabbedNavigationObj.init();
});