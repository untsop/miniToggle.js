$.fn["minitoggle"] = function(options) {
  options = options || {};
  opts = $.extend({
    on: false
  }, options);
  doToggle = function(toggle) {
    toggle = toggle.find(".minitoggle");
    inactive = toggle.hasClass("active");
    handle = toggle.find(".toggle-handle");
    handlePosition = handle.position();
    offset = (inactive ? 0 : toggle.width() - handle.width() - handlePosition.left * 2);
    toggle.toggleClass("active");
    return toggle.trigger({
      type: "toggle",
      isActive: !inactive
    });
  };
  this.each(function() {
    var self = $(this);
    self.html("<div class=\"minitoggle\"><div class=\"toggle-handle\"></div></div>");
    self.click(function() {
      doToggle(self);
    });
    if (opts["on"]) {
      doToggle(self);
    }
  });
};
