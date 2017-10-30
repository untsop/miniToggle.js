$.fn["minitoggle"] = function(options) {
  options = options || {};
  opts = $.extend({
    on: false
  }, options);
  doToggle = function(toggle) {
    active = toggle.toggleClass("active").hasClass("active");
    handle = toggle.find(".toggle-handle");
    handlePosition = handle.position()
    offset = (active ? toggle.width() - handle.width() - handlePosition.left * 2 : 0);
    handle.css({
      transform: "translate3d(" + offset + "px,0,0)",
    });
    return toggle.trigger({
      type: "toggle",
      isActive: active
    });
  };
  this.each(function() {
    self = $(this);
    self.html("<div class=\"toggle-handle\"></div>");
    self.click(function() {
      doToggle(self);
    });
    if (opts["on"]) {
      doToggle(self);
    }
  });
};