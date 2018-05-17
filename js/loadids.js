var idlist = ["Tmux","Atom","Remote_Nuclide"];
idlist.forEach(function(item, index, array) {
  $("#".concat(item)).load("entries/".concat(item,".html"));
});
